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
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputPeerToPeer = exports.getChatIdPeerType = exports.chatIdToPeerId = exports.chatIdToPeer = exports.peerToChatId = exports.getChannelChatId = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
function getChannelChatId(channelId) {
    return _1_utilities_js_1.ZERO_CHANNEL_ID + -Number(channelId);
}
exports.getChannelChatId = getChannelChatId;
function peerToChatId(peer) {
    if (("_" in peer && (peer._ == "peerUser" || peer._ == "inputPeerUser" || peer._ == "user" || peer._ == "userFull")) || "user_id" in peer) {
        return Number("user_id" in peer ? peer.user_id : peer.id);
    }
    else if (("_" in peer && (peer._ == "peerChat" || peer._ == "inputPeerChat" || peer._ == "chat" || peer._ == "chatForbidden" || peer._ == "chatFull")) || "chat_id" in peer) {
        return -Number("chat_id" in peer ? peer.chat_id : peer.id);
    }
    else if (("_" in peer && (peer._ == "peerChannel" || peer._ == "inputPeerChannel" || peer._ == "channel" || peer._ == "channelForbidden" || peer._ == "channelFull")) || "channel_id" in peer) {
        return getChannelChatId("channel_id" in peer ? peer.channel_id : peer.id);
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.peerToChatId = peerToChatId;
function chatIdToPeer(chatId) {
    if (chatId > 0) {
        return { _: "peerUser", user_id: BigInt(chatId) };
    }
    else if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
        return { _: "peerChat", chat_id: BigInt(Math.abs(chatId)) };
    }
    else {
        return { _: "peerChannel", channel_id: BigInt(_1_utilities_js_1.ZERO_CHANNEL_ID - chatId) };
    }
}
exports.chatIdToPeer = chatIdToPeer;
function chatIdToPeerId(chatId) {
    const peer = chatIdToPeer(chatId);
    if ("user_id" in peer) {
        return peer.user_id;
    }
    else if ("chat_id" in peer) {
        return peer.chat_id;
    }
    else if ("channel_id" in peer) {
        return peer.channel_id;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.chatIdToPeerId = chatIdToPeerId;
function getChatIdPeerType(chatId) {
    if (chatId > 0) {
        return "user";
    }
    else if (chatId > _1_utilities_js_1.ZERO_CHANNEL_ID) {
        return "chat";
    }
    else {
        return "channel";
    }
}
exports.getChatIdPeerType = getChatIdPeerType;
function inputPeerToPeer(inputPeer) {
    if ("user_id" in inputPeer) {
        return { ...inputPeer, _: "peerUser" };
    }
    else if ("chat_id" in inputPeer) {
        return { ...inputPeer, _: "peerChat" };
    }
    else if ("channel_id" in inputPeer) {
        return { ...inputPeer, _: "peerChannel" };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.inputPeerToPeer = inputPeerToPeer;
