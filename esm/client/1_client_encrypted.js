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
var _ClientEncrypted_instances, _ClientEncrypted_authKey, _ClientEncrypted_authKeyId, _ClientEncrypted_sessionId, _ClientEncrypted_state, _ClientEncrypted_shouldInvalidateSession, _ClientEncrypted_toAcknowledge, _ClientEncrypted_recentAcks, _ClientEncrypted_promises, _ClientEncrypted_L, _ClientEncrypted_LreceiveLoop, _ClientEncrypted_Linvoke, _ClientEncrypted_timeDifference, _ClientEncrypted_nextMessageId, _ClientEncrypted_nextSeqNo, _ClientEncrypted_invalidateSession, _ClientEncrypted_sendMessage, _ClientEncrypted_receiveLoop;
import { gunzip, unreachable } from "../0_deps.js";
import { ConnectionError } from "../0_errors.js";
import { bigIntFromBuffer, CacheMap, drop, getLogger, getRandomBigInt, sha1, toUnixTimestamp } from "../1_utilities.js";
import { is, isGenericFunction, isOfEnum, isOneOf, TLError, TLReader } from "../2_tl.js";
import { constructTelegramError } from "../4_errors.js";
import { ClientAbstract } from "./0_client_abstract.js";
import { decryptMessage, encryptMessage, getMessageId } from "./0_message.js";
// global ClientEncrypted ID counter for logs
let id = 0;
/**
 * An MTProto client for making encrypted connections. Most users won't need to interact with this. Used internally by `Client`.
 *
 * There are a few things to note:
 *
 * - This is a bare client and it stores nothing.
 * - It expects an authorization key to be present before invoking any method.
 * - Authorization must be set using `setAuthKey`.
 * - Incoming packets that aren't a reply to a specific call are passed to the assigned handlers.
 * - It doesn't uncompress compressed packets.
 */
export class ClientEncrypted extends ClientAbstract {
    constructor(params) {
        super(params);
        _ClientEncrypted_instances.add(this);
        _ClientEncrypted_authKey.set(this, new Uint8Array());
        _ClientEncrypted_authKeyId.set(this, 0n);
        _ClientEncrypted_sessionId.set(this, 0n);
        _ClientEncrypted_state.set(this, { serverSalt: 0n, seqNo: 0, messageId: 0n });
        _ClientEncrypted_shouldInvalidateSession.set(this, true);
        _ClientEncrypted_toAcknowledge.set(this, new Array());
        _ClientEncrypted_recentAcks.set(this, new CacheMap(20));
        _ClientEncrypted_promises.set(this, new Map());
        // loggers
        _ClientEncrypted_L.set(this, void 0);
        _ClientEncrypted_LreceiveLoop.set(this, void 0);
        _ClientEncrypted_Linvoke.set(this, void 0);
        // receive loop handlers
        Object.defineProperty(this, "handlers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        _ClientEncrypted_timeDifference.set(this, 0);
        const L = __classPrivateFieldSet(this, _ClientEncrypted_L, getLogger("ClientEncrypted").client(id++), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_LreceiveLoop, L.branch("receiveLoop"), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_Linvoke, L.branch("invoke"), "f");
    }
    async connect() {
        await super.connect();
        if (__classPrivateFieldGet(this, _ClientEncrypted_shouldInvalidateSession, "f")) {
            __classPrivateFieldSet(this, _ClientEncrypted_sessionId, getRandomBigInt(8, true, false), "f");
            __classPrivateFieldSet(this, _ClientEncrypted_state, { serverSalt: 0n, seqNo: 0, messageId: 0n }, "f");
            __classPrivateFieldSet(this, _ClientEncrypted_shouldInvalidateSession, false, "f");
        }
        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_receiveLoop).call(this)); // TODO: ability to join this promise
    }
    async setAuthKey(key) {
        const hash = await sha1(key);
        __classPrivateFieldSet(this, _ClientEncrypted_authKeyId, bigIntFromBuffer(hash.slice(-8), true, false), "f");
        __classPrivateFieldSet(this, _ClientEncrypted_authKey, key, "f");
    }
    get authKey() {
        return __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f");
    }
    set serverSalt(serverSalt) {
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt = serverSalt;
    }
    get serverSalt() {
        return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt;
    }
    async invoke(function_, noWait) {
        const messageId = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this);
        let message_ = {
            _: "message",
            msg_id: messageId,
            seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, true),
            body: function_,
        };
        const message__ = message_;
        let container = undefined;
        if (__classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").length) {
            const ack = {
                _: "message",
                msg_id: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this),
                seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false),
                body: { _: "msgs_ack", msg_ids: __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").splice(0, 8192) },
            };
            __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").set(ack.msg_id, { container, message: ack });
            message_ = {
                _: "message",
                msg_id: container = __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextMessageId).call(this),
                seqno: __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_nextSeqNo).call(this, false),
                body: {
                    _: "msg_container",
                    messages: [message_, ack],
                },
            };
        }
        await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, message_);
        __classPrivateFieldGet(this, _ClientEncrypted_Linvoke, "f").debug("invoked", function_._);
        if (noWait) {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, {
                container,
                message: message_,
                call: function_,
            });
            return;
        }
        return (await new Promise((resolve, reject) => {
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").set(messageId, { container, message: message__, resolve, reject, call: function_ });
        }));
    }
}
_ClientEncrypted_authKey = new WeakMap(), _ClientEncrypted_authKeyId = new WeakMap(), _ClientEncrypted_sessionId = new WeakMap(), _ClientEncrypted_state = new WeakMap(), _ClientEncrypted_shouldInvalidateSession = new WeakMap(), _ClientEncrypted_toAcknowledge = new WeakMap(), _ClientEncrypted_recentAcks = new WeakMap(), _ClientEncrypted_promises = new WeakMap(), _ClientEncrypted_L = new WeakMap(), _ClientEncrypted_LreceiveLoop = new WeakMap(), _ClientEncrypted_Linvoke = new WeakMap(), _ClientEncrypted_timeDifference = new WeakMap(), _ClientEncrypted_instances = new WeakSet(), _ClientEncrypted_nextMessageId = function _ClientEncrypted_nextMessageId() {
    return __classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId = getMessageId(__classPrivateFieldGet(this, _ClientEncrypted_state, "f").messageId, __classPrivateFieldGet(this, _ClientEncrypted_timeDifference, "f"));
}, _ClientEncrypted_nextSeqNo = function _ClientEncrypted_nextSeqNo(contentRelated) {
    let seqNo = __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo * 2;
    if (contentRelated) {
        seqNo++;
        __classPrivateFieldGet(this, _ClientEncrypted_state, "f").seqNo++;
    }
    return seqNo;
}, _ClientEncrypted_invalidateSession = async function _ClientEncrypted_invalidateSession() {
    await this.transport?.transport.deinitialize();
    await this.transport?.connection.close();
    __classPrivateFieldSet(this, _ClientEncrypted_shouldInvalidateSession, true, "f");
}, _ClientEncrypted_sendMessage = async function _ClientEncrypted_sendMessage(message) {
    const payload = await encryptMessage(message, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_state, "f").serverSalt, __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f"));
    if (!this.transport) {
        throw new ConnectionError("Not connected.");
    }
    await this.transport.transport.send(payload);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").out(message);
    __classPrivateFieldGet(this, _ClientEncrypted_L, "f").outBin(payload);
}, _ClientEncrypted_receiveLoop = async function _ClientEncrypted_receiveLoop() {
    if (!this.transport) {
        unreachable();
    }
    for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
        reject?.(new ConnectionError("Connection was closed"));
        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
    }
    loop: while (this.connected) {
        try {
            const buffer = await this.transport.transport.receive();
            __classPrivateFieldGet(this, _ClientEncrypted_L, "f").inBin(buffer);
            let decrypted;
            try {
                decrypted = await (decryptMessage(buffer, __classPrivateFieldGet(this, _ClientEncrypted_authKey, "f"), __classPrivateFieldGet(this, _ClientEncrypted_authKeyId, "f"), __classPrivateFieldGet(this, _ClientEncrypted_sessionId, "f")));
                __classPrivateFieldGet(this, _ClientEncrypted_L, "f").in(decrypted);
            }
            catch (err) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to decrypt message:", err);
                drop(this.handlers.error?.(err, "decryption"));
                continue;
            }
            const messages = decrypted.body._ == "msg_container" ? decrypted.body.messages : [decrypted];
            for (const message of messages) {
                let sendAck = true;
                let body = message.body;
                if (is("gzip_packed", body)) {
                    body = new TLReader(gunzip(body.packed_data)).readObject();
                }
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("received", body._);
                if (isOfEnum("Updates", body) || isOfEnum("Update", body)) {
                    drop(this.handlers.updates?.(body, null));
                }
                else if (is("new_session_created", body)) {
                    this.serverSalt = body.server_salt;
                    drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("new session created with ID", body.unique_id);
                }
                else if (body._ == "rpc_result") {
                    let result = body.result;
                    if (is("gzip_packed", result)) {
                        result = new TLReader(gunzip(result.packed_data)).readObject();
                    }
                    if (is("rpc_error", result)) {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", result.error_code, result.error_message);
                    }
                    else {
                        __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("RPCResult:", Array.isArray(result) ? "Array" : typeof result === "object" ? result._ : result);
                    }
                    const messageId = body.req_msg_id;
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(messageId);
                    const resolvePromise = () => {
                        if (promise) {
                            if (is("rpc_error", result)) {
                                promise.reject?.(constructTelegramError(result, promise.call));
                            }
                            else {
                                promise.resolve?.(result);
                            }
                            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(messageId);
                        }
                    };
                    if (isOfEnum("Updates", result) || isOfEnum("Update", result)) {
                        // @ts-ignore: tbd
                        let call = promise?.call ?? null;
                        if (isGenericFunction(call)) {
                            call = call.query;
                        }
                        drop(this.handlers.updates?.(result, call, resolvePromise));
                    }
                    else {
                        drop(this.handlers.result?.(result, resolvePromise));
                    }
                }
                else if (is("pong", body)) {
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.msg_id);
                    if (promise) {
                        promise.resolve?.(body);
                        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(body.msg_id);
                    }
                }
                else if (is("bad_server_salt", body)) {
                    sendAck = false;
                    __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("server salt reassigned");
                    this.serverSalt = body.new_server_salt;
                    drop(this.handlers.serverSaltReassigned?.(this.serverSalt));
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.bad_msg_id);
                    const ack = __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").get(body.bad_msg_id);
                    if (promise) {
                        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                    }
                    else if (ack) {
                        drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                    }
                    else {
                        for (const promise of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").values()) {
                            if (promise.container && promise.container == body.bad_msg_id) {
                                drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, promise.message));
                            }
                        }
                        for (const ack of __classPrivateFieldGet(this, _ClientEncrypted_recentAcks, "f").values()) {
                            if (ack.container && ack.container == body.bad_msg_id) {
                                drop(__classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_sendMessage).call(this, ack.message));
                            }
                        }
                    }
                }
                else if (is("bad_msg_notification", body)) {
                    sendAck = false;
                    let low = false;
                    switch (body.error_code) {
                        case 16: // message ID too low
                            low = true;
                        /* falls through */
                        case 17: // message ID too high
                            __classPrivateFieldSet(this, _ClientEncrypted_timeDifference, Math.abs(toUnixTimestamp(new Date()) - Number(message.msg_id >> 32n)), "f");
                            if (!low) {
                                __classPrivateFieldSet(this, _ClientEncrypted_timeDifference, -__classPrivateFieldGet(this, _ClientEncrypted_timeDifference, "f"), "f");
                                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("message ID too high, invalidating session");
                                await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_invalidateSession).call(this);
                                break loop;
                            }
                            else {
                                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("message ID too low, resending message");
                            }
                            break;
                        case 48: // bad server salt
                            // resend
                            __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("resending message that caused bad_server_salt");
                            break;
                        default:
                            await __classPrivateFieldGet(this, _ClientEncrypted_instances, "m", _ClientEncrypted_invalidateSession).call(this);
                            __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").debug("invalidating session because of unexpected bad_msg_notification:", body.error_code);
                            break loop;
                    }
                    const promise = __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").get(body.bad_msg_id);
                    if (promise) {
                        promise.reject?.(body);
                        __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(body.bad_msg_id);
                    }
                }
                else if (isOneOf(["msg_detailed_info", "msg_new_detailed_info"], body)) {
                    sendAck = false;
                    __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(body.answer_msg_id);
                }
                if (sendAck) {
                    __classPrivateFieldGet(this, _ClientEncrypted_toAcknowledge, "f").push(message.msg_id);
                }
            }
        }
        catch (err) {
            if (!this.connected) {
                break;
            }
            else if (err instanceof TLError) {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("failed to deserialize:", err);
                drop(this.handlers.error?.(err, "deserialization"));
            }
            else {
                __classPrivateFieldGet(this, _ClientEncrypted_LreceiveLoop, "f").error("unexpected error:", err);
            }
        }
    }
    if (!this.connected) {
        for (const [key, { reject }] of __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").entries()) {
            reject?.(new ConnectionError("Connection was closed"));
            __classPrivateFieldGet(this, _ClientEncrypted_promises, "f").delete(key);
        }
    }
    else {
        unreachable();
    }
};
