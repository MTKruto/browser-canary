"use strict";
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
var _AccountManager_instances, _AccountManager_c, _AccountManager_toggleUsername;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
class AccountManager {
    constructor(c) {
        _AccountManager_instances.add(this);
        _AccountManager_c.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_c, c, "f");
    }
    async showUsername(id, username) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("showUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, true);
    }
    async hideUsername(id, username) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsername");
        await __classPrivateFieldGet(this, _AccountManager_instances, "m", _AccountManager_toggleUsername).call(this, id, username, false);
    }
    async reorderUsernames(id, order) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("reorderUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if ((0, _2_tl_js_1.is)("inputPeerSelf", peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.reorderUsernames", order });
        }
        else if ((0, _0_utilities_js_1.canBeInputUser)(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.reorderUsernames", bot: (0, _0_utilities_js_1.toInputUser)(peer), order });
        }
        else if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.reorderUsernames", channel: (0, _0_utilities_js_1.toInputChannel)(peer), order });
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async hideUsernames(id) {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("hideUsernames");
        const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
        if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
            return await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.deactivateAllUsernames", channel: (0, _0_utilities_js_1.toInputChannel)(peer) });
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getInactiveChats() {
        __classPrivateFieldGet(this, _AccountManager_c, "f").storage.assertUser("getInactiveChats");
        const { chats, dates } = await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.getInactiveChannels" });
        return chats.map((v, i) => (0, _3_types_js_1.constructInactiveChat)(v, dates[i]));
    }
}
exports.AccountManager = AccountManager;
_AccountManager_c = new WeakMap(), _AccountManager_instances = new WeakSet(), _AccountManager_toggleUsername = async function _AccountManager_toggleUsername(id, username, active) {
    const peer = await __classPrivateFieldGet(this, _AccountManager_c, "f").getInputPeer(id);
    if ((0, _2_tl_js_1.is)("inputPeerSelf", peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "account.toggleUsername", username, active });
    }
    else if ((0, _0_utilities_js_1.canBeInputUser)(peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "bots.toggleUsername", bot: (0, _0_utilities_js_1.toInputUser)(peer), username, active });
    }
    else if ((0, _0_utilities_js_1.canBeInputChannel)(peer)) {
        await __classPrivateFieldGet(this, _AccountManager_c, "f").invoke({ _: "channels.toggleUsername", channel: (0, _0_utilities_js_1.toInputChannel)(peer), username, active });
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
};
