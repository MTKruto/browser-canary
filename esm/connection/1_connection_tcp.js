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
var _ConnectionTCP_instances, _ConnectionTCP_hostname, _ConnectionTCP_port, _ConnectionTCP_connection, _ConnectionTCP_rMutex, _ConnectionTCP_wMutex, _ConnectionTCP_buffer, _ConnectionTCP_nextResolve, _ConnectionTCP_canRead, _ConnectionTCP_canWrite, _ConnectionTCP_assertConnected, _ConnectionTCP_rejectRead;
/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import * as dntShim from "../_dnt.shims.js";
import { concat, iterateReader } from "../0_deps.js";
import { getLogger, Mutex } from "../1_utilities.js";
const L = getLogger("ConnectionTCP");
export class ConnectionTCP {
    constructor(hostname, port) {
        _ConnectionTCP_instances.add(this);
        _ConnectionTCP_hostname.set(this, void 0);
        _ConnectionTCP_port.set(this, void 0);
        _ConnectionTCP_connection.set(this, void 0);
        _ConnectionTCP_rMutex.set(this, new Mutex());
        _ConnectionTCP_wMutex.set(this, new Mutex());
        _ConnectionTCP_buffer.set(this, new Uint8Array());
        _ConnectionTCP_nextResolve.set(this, null);
        _ConnectionTCP_canRead.set(this, false);
        _ConnectionTCP_canWrite.set(this, false);
        Object.defineProperty(this, "connect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: dntShim.Deno.connect
        });
        Object.defineProperty(this, "stateChangeHandler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _ConnectionTCP_hostname, hostname, "f");
        __classPrivateFieldSet(this, _ConnectionTCP_port, port, "f");
    }
    get connected() {
        return !!__classPrivateFieldGet(this, _ConnectionTCP_connection, "f") && __classPrivateFieldGet(this, _ConnectionTCP_canRead, "f") && __classPrivateFieldGet(this, _ConnectionTCP_canWrite, "f");
    }
    async open() {
        if (this.connected) {
            throw new Error("Connection already open");
        }
        const connection = await this.connect({
            hostname: __classPrivateFieldGet(this, _ConnectionTCP_hostname, "f"),
            port: __classPrivateFieldGet(this, _ConnectionTCP_port, "f"),
        });
        __classPrivateFieldSet(this, _ConnectionTCP_canRead, __classPrivateFieldSet(this, _ConnectionTCP_canWrite, true, "f"), "f");
        this.stateChangeHandler?.(true);
        Promise.resolve().then(async () => {
            do {
                try {
                    for await (const chunk of iterateReader(connection)) {
                        this.callback?.read(chunk.length);
                        __classPrivateFieldSet(this, _ConnectionTCP_buffer, concat([__classPrivateFieldGet(this, _ConnectionTCP_buffer, "f"), chunk]), "f");
                        if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null && __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").length >= __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[0]) {
                            __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].resolve();
                            __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
                        }
                    }
                    __classPrivateFieldSet(this, _ConnectionTCP_canRead, false, "f");
                    break;
                }
                catch (err) {
                    if (!this.connected) {
                        this.stateChangeHandler?.(false);
                        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_rejectRead).call(this);
                    }
                    else {
                        L.error(err);
                    }
                }
            } while (this.connected);
            this.stateChangeHandler?.(false);
        });
        __classPrivateFieldSet(this, _ConnectionTCP_connection, connection, "f");
    }
    async read(p) {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionTCP_rMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
            if (__classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").length < p.length) {
                await new Promise((resolve, reject) => __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, [p.length, { resolve, reject }], "f"));
            }
            const slice = __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").slice(0, p.length);
            p.set(slice);
            __classPrivateFieldSet(this, _ConnectionTCP_buffer, __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").slice(slice.length), "f");
        }
        finally {
            unlock();
        }
    }
    async write(p) {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        const unlock = await __classPrivateFieldGet(this, _ConnectionTCP_wMutex, "f").lock();
        try {
            __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
            let written = 0;
            while (written < p.length) {
                try {
                    const wrote = await __classPrivateFieldGet(this, _ConnectionTCP_connection, "f").write(p.subarray(written));
                    this.callback?.write(wrote);
                    written += wrote;
                }
                catch (err) {
                    if (err instanceof dntShim.Deno.errors.BrokenPipe) {
                        __classPrivateFieldSet(this, _ConnectionTCP_canWrite, false, "f");
                    }
                    if (!this.connected) {
                        this.stateChangeHandler?.(false);
                    }
                    throw err;
                }
            }
        }
        finally {
            unlock();
        }
    }
    close() {
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_assertConnected).call(this);
        __classPrivateFieldGet(this, _ConnectionTCP_connection, "f").close();
        __classPrivateFieldSet(this, _ConnectionTCP_canRead, __classPrivateFieldSet(this, _ConnectionTCP_canWrite, false, "f"), "f");
        __classPrivateFieldSet(this, _ConnectionTCP_connection, undefined, "f");
        __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_rejectRead).call(this);
    }
}
_ConnectionTCP_hostname = new WeakMap(), _ConnectionTCP_port = new WeakMap(), _ConnectionTCP_connection = new WeakMap(), _ConnectionTCP_rMutex = new WeakMap(), _ConnectionTCP_wMutex = new WeakMap(), _ConnectionTCP_buffer = new WeakMap(), _ConnectionTCP_nextResolve = new WeakMap(), _ConnectionTCP_canRead = new WeakMap(), _ConnectionTCP_canWrite = new WeakMap(), _ConnectionTCP_instances = new WeakSet(), _ConnectionTCP_assertConnected = function _ConnectionTCP_assertConnected() {
    if (!this.connected) {
        throw new Error("Connection not open");
    }
}, _ConnectionTCP_rejectRead = function _ConnectionTCP_rejectRead() {
    if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null) {
        __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].reject(new Error("Connection was closed"));
        __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
    }
};
