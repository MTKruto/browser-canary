var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Client_config, _Client_connectAndRequest;
import * as dntShim from "../../../../../_dnt.shims.js";
import { writeAll } from "./deps.js";
import { readN } from "./utils.js";
export const SOCKS_VERSION = 5;
export const USERNAME_PASSWORD_AUTH_VERSION = 1;
export var AddrType;
(function (AddrType) {
    AddrType[AddrType["IPv4"] = 1] = "IPv4";
    AddrType[AddrType["DomainName"] = 3] = "DomainName";
    AddrType[AddrType["IPv6"] = 4] = "IPv6";
})(AddrType || (AddrType = {}));
export var AuthMethod;
(function (AuthMethod) {
    AuthMethod[AuthMethod["NoAuth"] = 0] = "NoAuth";
    AuthMethod[AuthMethod["UsernamePassword"] = 2] = "UsernamePassword";
    AuthMethod[AuthMethod["NoneAcceptable"] = 255] = "NoneAcceptable";
})(AuthMethod || (AuthMethod = {}));
export var ReplyStatus;
(function (ReplyStatus) {
    ReplyStatus[ReplyStatus["Success"] = 0] = "Success";
    ReplyStatus[ReplyStatus["GeneralError"] = 1] = "GeneralError";
    ReplyStatus[ReplyStatus["RulesetError"] = 2] = "RulesetError";
    ReplyStatus[ReplyStatus["NetworkUnreachable"] = 3] = "NetworkUnreachable";
    ReplyStatus[ReplyStatus["HostUnreachable"] = 4] = "HostUnreachable";
    ReplyStatus[ReplyStatus["ConnectionRefused"] = 5] = "ConnectionRefused";
    ReplyStatus[ReplyStatus["TTLExpired"] = 6] = "TTLExpired";
    ReplyStatus[ReplyStatus["UnsupportedCommand"] = 7] = "UnsupportedCommand";
    ReplyStatus[ReplyStatus["UnsupportedAddress"] = 8] = "UnsupportedAddress";
})(ReplyStatus || (ReplyStatus = {}));
export var Command;
(function (Command) {
    Command[Command["Connect"] = 1] = "Connect";
    Command[Command["Bind"] = 2] = "Bind";
    Command[Command["UdpAssociate"] = 3] = "UdpAssociate";
})(Command || (Command = {}));
function decodeError(status) {
    switch (status) {
        case ReplyStatus.GeneralError:
            return "general SOCKS server failure";
        case ReplyStatus.RulesetError:
            return "connection not allowed by ruleset";
        case ReplyStatus.NetworkUnreachable:
            return "Network unreachable";
        case ReplyStatus.HostUnreachable:
            return "Host unreachable";
        case ReplyStatus.ConnectionRefused:
            return "Connection refused";
        case ReplyStatus.TTLExpired:
            return "TTL expired";
        case ReplyStatus.UnsupportedCommand:
            return "Command not supported";
        case ReplyStatus.UnsupportedAddress:
            return "Address type not supported";
        default:
            return "unknown SOCKS error";
    }
}
const v4Pattern = /^(?:\d{1,3}\.){3}\d{1,3}/;
const v6Pattern = /^(?:[A-F0-9]{1,4}:){7}[A-F0-9]{1,4}$/i;
function serializeAddress(hostname, port) {
    const portBytes = [port >> 8, port % 256];
    if (v4Pattern.test(hostname)) {
        return Uint8Array.from([
            AddrType.IPv4,
            ...hostname.split(".").map(Number),
            ...portBytes,
        ]);
    }
    if (v6Pattern.test(hostname)) {
        return Uint8Array.from([
            AddrType.IPv6,
            ...hostname.split(":").flatMap((x) => {
                const num = parseInt(x, 16);
                return [num >> 8, num % 256];
            }),
            ...portBytes,
        ]);
    }
    const bytes = new TextEncoder().encode(hostname);
    return Uint8Array.from([
        AddrType.DomainName,
        bytes.length,
        ...bytes,
        ...portBytes,
    ]);
}
async function deserializeAddress(r) {
    const [type] = await readN(r, 1);
    const hostname = await (async () => {
        if (type === AddrType.IPv4) {
            const parts = [...(await readN(r, 4))];
            return { value: parts.map(String).join("."), length: 4 };
        }
        if (type === AddrType.IPv6) {
            const parts = [];
            const buff = await readN(r, 16);
            for (let i = 0; i < buff.length; i += 2) {
                parts.push((buff[i] << 8) + buff[i + 1]);
            }
            return { value: parts.map(String).join(":"), length: 16 };
        }
        if (type === AddrType.DomainName) {
            const [length] = await readN(r, 1);
            return {
                value: new TextDecoder().decode(await readN(r, length)),
                length: length + 1,
            };
        }
        throw new Error(`unexpected address type: ${type}`);
    })();
    const [portUpper, portLower] = await readN(r, 2);
    const port = (portUpper << 8) + portLower;
    return { hostname: hostname.value, port, bytesRead: hostname.length + 3 };
}
export class Client {
    constructor(config) {
        _Client_config.set(this, void 0);
        _Client_connectAndRequest.set(this, async (cmd, hostname, port) => {
            // @ts-ignore: lib
            const conn = await dntShim.Deno.connect({
                hostname: __classPrivateFieldGet(this, _Client_config, "f").hostname,
                port: __classPrivateFieldGet(this, _Client_config, "f").port,
            });
            // handle auth negotiation
            const methods = [AuthMethod.NoAuth];
            if ("username" in __classPrivateFieldGet(this, _Client_config, "f")) {
                methods.push(AuthMethod.UsernamePassword);
            }
            await writeAll(conn, Uint8Array.from([SOCKS_VERSION, methods.length, ...methods]));
            const [negotiationVersion, method] = await readN(conn, 2);
            if (negotiationVersion !== SOCKS_VERSION ||
                method === AuthMethod.NoneAcceptable) {
                try {
                    conn.close();
                }
                catch {
                    // ignore
                }
                throw new Error(negotiationVersion !== SOCKS_VERSION
                    ? `unsupported SOCKS version number: ${negotiationVersion}`
                    : "no acceptable authentication methods");
            }
            if (method === AuthMethod.UsernamePassword) {
                const cfg = __classPrivateFieldGet(this, _Client_config, "f");
                const te = new TextEncoder();
                const username = te.encode(cfg.username);
                const password = te.encode(cfg.password);
                await writeAll(conn, Uint8Array.from([
                    USERNAME_PASSWORD_AUTH_VERSION,
                    username.length,
                    ...username,
                    password.length,
                    ...password,
                ]));
                const [authVersion, status] = await readN(conn, 2);
                if (authVersion !== USERNAME_PASSWORD_AUTH_VERSION ||
                    status !== ReplyStatus.Success) {
                    try {
                        conn.close();
                    }
                    catch {
                        // ignore
                    }
                    throw new Error(authVersion !== USERNAME_PASSWORD_AUTH_VERSION
                        ? `unsupported authentication version number: ${authVersion}`
                        : "authentication failed");
                }
            }
            // handle actual message
            await writeAll(conn, Uint8Array.from([
                SOCKS_VERSION,
                cmd,
                0,
                ...serializeAddress(hostname, port),
            ]));
            const [replyVersion, status, _] = await readN(conn, 3);
            if (replyVersion !== SOCKS_VERSION || status !== ReplyStatus.Success) {
                try {
                    conn.close();
                }
                catch {
                    // ignore
                }
                throw new Error(replyVersion !== SOCKS_VERSION
                    ? `unsupported SOCKS version number: ${replyVersion}`
                    : decodeError(status));
            }
            return {
                conn,
                ...(await deserializeAddress(conn)),
            };
        });
        __classPrivateFieldSet(this, _Client_config, {
            ...config,
            port: config.port ?? 1080,
        }, "f");
    }
    // @ts-ignore: lib
    async connect(opts) {
        const remoteAddr = {
            hostname: opts.hostname ?? "127.0.0.1",
            port: opts.port,
            transport: "tcp",
        };
        const { conn, hostname, port } = await __classPrivateFieldGet(this, _Client_connectAndRequest, "f").call(this, Command.Connect, remoteAddr.hostname, remoteAddr.port);
        const localAddr = {
            hostname,
            port,
            transport: "tcp",
        };
        return {
            setKeepAlive(keepalive) {
                conn.setKeepAlive(keepalive);
            },
            setNoDelay(nodelay) {
                conn.setNoDelay(nodelay);
            },
            get localAddr() {
                return localAddr;
            },
            get remoteAddr() {
                return remoteAddr;
            },
            get rid() {
                return conn.rid;
            },
            get readable() {
                return conn.readable;
            },
            get writable() {
                return conn.writable;
            },
            read: conn.read.bind(conn),
            write: conn.write.bind(conn),
            close: conn.close.bind(conn),
            closeWrite: conn.closeWrite.bind(conn),
            // @ts-ignore: lib
        };
    }
}
_Client_config = new WeakMap(), _Client_connectAndRequest = new WeakMap();
