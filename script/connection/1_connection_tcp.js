"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionTCP = void 0;
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
const dntShim = __importStar(require("../_dnt.shims.js"));
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const L = (0, _1_utilities_js_1.getLogger)("ConnectionTCP");
class ConnectionTCP {
    constructor(hostname, port) {
        _ConnectionTCP_instances.add(this);
        _ConnectionTCP_hostname.set(this, void 0);
        _ConnectionTCP_port.set(this, void 0);
        _ConnectionTCP_connection.set(this, void 0);
        _ConnectionTCP_rMutex.set(this, new _1_utilities_js_1.Mutex());
        _ConnectionTCP_wMutex.set(this, new _1_utilities_js_1.Mutex());
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
        connection.setNoDelay(true);
        connection.setKeepAlive(true);
        __classPrivateFieldSet(this, _ConnectionTCP_canRead, __classPrivateFieldSet(this, _ConnectionTCP_canWrite, true, "f"), "f");
        this.stateChangeHandler?.(true);
        L.debug("connected to", __classPrivateFieldGet(this, _ConnectionTCP_hostname, "f"), "port", __classPrivateFieldGet(this, _ConnectionTCP_port, "f"));
        Promise.resolve().then(async () => {
            do {
                try {
                    for await (const chunk of (0, _0_deps_js_1.iterateReader)(connection)) {
                        this.callback?.read(chunk.length);
                        __classPrivateFieldSet(this, _ConnectionTCP_buffer, (0, _0_deps_js_1.concat)([__classPrivateFieldGet(this, _ConnectionTCP_buffer, "f"), chunk]), "f");
                        if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null && __classPrivateFieldGet(this, _ConnectionTCP_buffer, "f").length >= __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[0]) {
                            __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].resolve();
                            __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
                        }
                    }
                    __classPrivateFieldSet(this, _ConnectionTCP_canRead, false, "f");
                    break;
                }
                catch (err) {
                    __classPrivateFieldSet(this, _ConnectionTCP_canRead, false, "f");
                    this.stateChangeHandler?.(false);
                    __classPrivateFieldGet(this, _ConnectionTCP_instances, "m", _ConnectionTCP_rejectRead).call(this);
                    L.error(err);
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
                    if (err instanceof dntShim.Deno.errors.BrokenPipe || err instanceof dntShim.Deno.errors.ConnectionReset) {
                        __classPrivateFieldSet(this, _ConnectionTCP_canWrite, false, "f");
                    }
                    if (!this.connected) {
                        this.stateChangeHandler?.(false);
                        throw new _0_errors_js_1.ConnectionError("Connection was closed");
                    }
                    else {
                        throw err;
                    }
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
exports.ConnectionTCP = ConnectionTCP;
_ConnectionTCP_hostname = new WeakMap(), _ConnectionTCP_port = new WeakMap(), _ConnectionTCP_connection = new WeakMap(), _ConnectionTCP_rMutex = new WeakMap(), _ConnectionTCP_wMutex = new WeakMap(), _ConnectionTCP_buffer = new WeakMap(), _ConnectionTCP_nextResolve = new WeakMap(), _ConnectionTCP_canRead = new WeakMap(), _ConnectionTCP_canWrite = new WeakMap(), _ConnectionTCP_instances = new WeakSet(), _ConnectionTCP_assertConnected = function _ConnectionTCP_assertConnected() {
    if (!this.connected) {
        throw new _0_errors_js_1.ConnectionError("Connection not open");
    }
}, _ConnectionTCP_rejectRead = function _ConnectionTCP_rejectRead() {
    if (__classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f") != null) {
        __classPrivateFieldGet(this, _ConnectionTCP_nextResolve, "f")[1].reject(new _0_errors_js_1.ConnectionError("Connection was closed"));
        __classPrivateFieldSet(this, _ConnectionTCP_nextResolve, null, "f");
    }
};
