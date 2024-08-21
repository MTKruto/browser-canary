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
var _ChatListManager_instances, _ChatListManager_c, _ChatListManager_LgetChats, _ChatListManager_sendChatUpdate, _ChatListManager_chats, _ChatListManager_archivedChats, _ChatListManager_chatsLoadedFromStorage, _ChatListManager_tryGetChatId, _ChatListManager_getChatAnywhere, _ChatListManager_getChatList, _ChatListManager_loadChatsFromStorage, _ChatListManager_getLoadedChats, _ChatListManager_pinnedChats, _ChatListManager_pinnedArchiveChats, _ChatListManager_storageHadPinnedChats, _ChatListManager_pinnedChatsLoaded, _ChatListManager_loadPinnedChats, _ChatListManager_fetchPinnedChats, _ChatListManager_getPinnedChats, _ChatListManager_updateOrAddChat, _ChatListManager_removeChat, _ChatListManager_handleUpdateFolderPeers, _ChatListManager_handleUpdatePinnedDialogs, _ChatListManager_handleUpdateChannel, _ChatListManager_handleUpdateChat, _ChatListManager_handleUpdateUser, _ChatListManager_fetchChats, _ChatListManager_getFullChat;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatListManager = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_errors_js_1 = require("../0_errors.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _3_types_js_1 = require("../3_types.js");
const _0_utilities_js_1 = require("./0_utilities.js");
const chatListManagerUpdates = [
    "updateNewMessage",
    "updateNewChannelMessage",
    "updatePinnedDialogs",
    "updateFolderPeers",
    "updateChannel",
    "updateChat",
    "updateUser",
    "updateUserName",
];
class ChatListManager {
    constructor(c) {
        _ChatListManager_instances.add(this);
        _ChatListManager_c.set(this, void 0);
        _ChatListManager_LgetChats.set(this, void 0);
        _ChatListManager_chats.set(this, new Map());
        _ChatListManager_archivedChats.set(this, new Map());
        _ChatListManager_chatsLoadedFromStorage.set(this, false);
        _ChatListManager_pinnedChats.set(this, new Array());
        _ChatListManager_pinnedArchiveChats.set(this, new Array());
        _ChatListManager_storageHadPinnedChats.set(this, false);
        _ChatListManager_pinnedChatsLoaded.set(this, false);
        __classPrivateFieldSet(this, _ChatListManager_c, c, "f");
        const L = (0, _1_utilities_js_1.getLogger)("ChatListManager").client(c.id);
        __classPrivateFieldSet(this, _ChatListManager_LgetChats, L.branch("getChats"), "f");
    }
    async reassignChatLastMessage(chatId, add = false, sendUpdate = true) {
        try {
            await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
        }
        catch {
            return () => Promise.resolve();
        }
        const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
        if (!chat && !add) {
            return () => Promise.resolve();
        }
        const message_ = await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageStorage.getLastMessage(chatId);
        if (message_ != null) {
            const message = await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.constructMessage(message_);
            if (chat) {
                chat.order = (0, _3_types_js_1.getChatListItemOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChatListItem3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    (0, _0_deps_js_1.unreachable)();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        const message = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getHistory(chatId, { limit: 1 }))[0];
        if (message) {
            if (chat) {
                chat.order = (0, _3_types_js_1.getChatListItemOrder)(message, chat.pinned);
                chat.lastMessage = message;
                await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chatId, chat.pinned, message.id, message.date);
            }
            else {
                const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
                const chat = await (0, _3_types_js_1.constructChatListItem3)(chatId, pinnedChats.indexOf(chatId), message, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
                if (chat == null) {
                    (0, _0_deps_js_1.unreachable)();
                }
                __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chatId, chat);
            }
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, !chat);
            }
            return () => Promise.resolve();
        }
        if (chat) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(undefined, chat.pinned);
            chat.lastMessage = undefined;
            if (sendUpdate) {
                return () => __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
            }
        }
        return () => Promise.resolve();
    }
    async getChats(from = "main", after, limit = 100) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("getChats");
        if (!__classPrivateFieldGet(this, _ChatListManager_chatsLoadedFromStorage, "f")) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_loadChatsFromStorage).call(this);
        }
        if (after && !__classPrivateFieldGet(this, _ChatListManager_chats, "f").get(after.chat.id)) {
            throw new _0_errors_js_1.InputError("Invalid after");
        }
        if (limit <= 0 || limit > 100) {
            limit = 100;
        }
        const listId = (0, _0_utilities_js_1.getChatListId)(from);
        let chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getLoadedChats).call(this, listId);
        if (after) {
            chats = chats
                .filter((v) => v.order < after.order);
        }
        if (chats.length < limit) {
            __classPrivateFieldGet(this, _ChatListManager_LgetChats, "f").debug(`have only ${chats.length} chats but ${limit - chats.length} more is needed`);
            if (!await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.hasAllChats(listId)) {
                await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchChats).call(this, listId, limit, after);
                return await this.getChats(from, after, limit);
            }
        }
        chats = chats.slice(0, limit);
        return chats;
    }
    static canHandleUpdate(update) {
        return (0, _2_tl_js_1.isOneOf)(chatListManagerUpdates, update);
    }
    async handleUpdate(update) {
        if ((0, _2_tl_js_1.is)("updateNewMessage", update) || (0, _2_tl_js_1.is)("updateNewChannelMessage", update) || (0, _2_tl_js_1.is)("updateEditMessage", update) || (0, _2_tl_js_1.is)("updateEditChannelMessage", update)) {
            if ((0, _2_tl_js_1.is)("message", update.message) || (0, _2_tl_js_1.is)("messageService", update.message)) {
                const chatId = (0, _2_tl_js_1.peerToChatId)(update.message.peer_id);
                await this.reassignChatLastMessage(chatId);
            }
        }
        else if ((0, _2_tl_js_1.is)("updatePinnedDialogs", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdatePinnedDialogs).call(this, update);
        }
        else if ((0, _2_tl_js_1.is)("updateFolderPeers", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateFolderPeers).call(this, update);
        }
        else if ((0, _2_tl_js_1.is)("updateChannel", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChannel).call(this, update);
        }
        else if ((0, _2_tl_js_1.is)("updateChat", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateChat).call(this, update);
        }
        else if ((0, _2_tl_js_1.is)("updateUser", update) || (0, _2_tl_js_1.is)("updateUserName", update)) {
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_handleUpdateUser).call(this, update);
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
    async getChat(chatId) {
        const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
        if (fullChat == null) {
            throw new _0_errors_js_1.InputError("Chat not found.");
        }
        return await (0, _3_types_js_1.constructChat)(fullChat, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
    }
    async getChatAdministrators(chatId) {
        const peer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
        if ((0, _2_tl_js_1.is)("inputPeerChannel", peer)) {
            const channel = { ...peer, _: "inputChannel" };
            const participants = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getParticipants", channel, filter: { _: "channelParticipantsAdmins" }, offset: 0, limit: 100, hash: 0n });
            if ((0, _2_tl_js_1.is)("channels.channelParticipantsNotModified", participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else if ((0, _2_tl_js_1.is)("inputPeerChat", peer)) {
            const fullChat = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getFullChat).call(this, chatId);
            if (!fullChat || !("participants" in fullChat) || !(0, _2_tl_js_1.is)("chatParticipants", fullChat.participants)) {
                (0, _0_deps_js_1.unreachable)();
            }
            const chatMembers = new Array();
            for (const p of fullChat.participants.participants) {
                chatMembers.push(await (0, _3_types_js_1.constructChatMember)(p, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity));
            }
            return chatMembers;
        }
        else {
            (0, _0_deps_js_1.unreachable)();
        }
    }
}
exports.ChatListManager = ChatListManager;
_ChatListManager_c = new WeakMap(), _ChatListManager_LgetChats = new WeakMap(), _ChatListManager_chats = new WeakMap(), _ChatListManager_archivedChats = new WeakMap(), _ChatListManager_chatsLoadedFromStorage = new WeakMap(), _ChatListManager_pinnedChats = new WeakMap(), _ChatListManager_pinnedArchiveChats = new WeakMap(), _ChatListManager_storageHadPinnedChats = new WeakMap(), _ChatListManager_pinnedChatsLoaded = new WeakMap(), _ChatListManager_instances = new WeakSet(), _ChatListManager_sendChatUpdate = async function _ChatListManager_sendChatUpdate(chatId, added) {
    try {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.assertUser("");
    }
    catch {
        return;
    }
    const [chat] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    const update = chat === undefined ? { deletedChat: { chatId } } : added ? { newChat: chat } : { editedChat: chat };
    __classPrivateFieldGet(this, _ChatListManager_c, "f").handleUpdate(update);
}, _ChatListManager_tryGetChatId = function _ChatListManager_tryGetChatId(username) {
    username = username.toLowerCase();
    for (const chat of __classPrivateFieldGet(this, _ChatListManager_chats, "f").values()) {
        if ("username" in chat) {
            if (chat.username === username
            //     TODO
            //     ||
            //     chat.chat.also?.some((v) => v.toLowerCase() === username)
            ) {
                return chat.chat.id;
            }
        }
    }
    for (const chat of __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").values()) {
        if ("username" in chat) {
            if (chat.username === username
            //    TODO
            //    ||
            //   chat.also?.some((v) => v.toLowerCase() === username)
            ) {
                return chat.chat.id;
            }
        }
    }
    return null;
}, _ChatListManager_getChatAnywhere = function _ChatListManager_getChatAnywhere(chatId) {
    let chat = __classPrivateFieldGet(this, _ChatListManager_chats, "f").get(chatId);
    if (chat) {
        return [chat, 0];
    }
    chat = __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").get(chatId);
    if (chat) {
        return [chat, 1];
    }
    return [undefined, -1];
}, _ChatListManager_getChatList = function _ChatListManager_getChatList(listId) {
    switch (listId) {
        case 0:
            return __classPrivateFieldGet(this, _ChatListManager_chats, "f");
        case 1:
            return __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f");
        default:
            throw new Error(`Invalid chat list: ${listId}`);
    }
}, _ChatListManager_loadChatsFromStorage = async function _ChatListManager_loadChatsFromStorage() {
    const chats = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getChats(0);
    const archivedChats = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getChats(1);
    for (const { chatId, pinned, topMessageId } of chats) {
        const chat = await (0, _3_types_js_1.constructChatListItem)(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_chats, "f").set(chat.chat.id, chat);
    }
    for (const { chatId, pinned, topMessageId } of archivedChats) {
        const chat = await (0, _3_types_js_1.constructChatListItem)(chatId, pinned, topMessageId, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat == null) {
            continue;
        }
        __classPrivateFieldGet(this, _ChatListManager_archivedChats, "f").set(chat.chat.id, chat);
    }
    __classPrivateFieldSet(this, _ChatListManager_chatsLoadedFromStorage, true, "f");
}, _ChatListManager_getLoadedChats = function _ChatListManager_getLoadedChats(listId) {
    const chats_ = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    const chats = new Array();
    for (const chat of chats_.values()) {
        chats.push(chat);
    }
    return chats
        .sort((a, b) => b.chat.id - a.chat.id)
        .sort((a, b) => b.order.localeCompare(a.order));
}, _ChatListManager_loadPinnedChats = async function _ChatListManager_loadPinnedChats() {
    const [pinnedChats, pinnedArchiveChats] = await Promise.all([__classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getPinnedChats(0), __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getPinnedChats(1)]);
    if (pinnedChats != null && pinnedArchiveChats != null) {
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        __classPrivateFieldSet(this, _ChatListManager_pinnedArchiveChats, pinnedArchiveChats, "f");
        __classPrivateFieldSet(this, _ChatListManager_storageHadPinnedChats, true, "f");
    }
    __classPrivateFieldSet(this, _ChatListManager_pinnedChatsLoaded, true, "f");
}, _ChatListManager_fetchPinnedChats = async function _ChatListManager_fetchPinnedChats(listId = null) {
    if (listId == null || listId == 0) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getPinnedDialogs", folder_id: 0 });
        const pinnedChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedChats.push((0, _2_tl_js_1.peerToChatId)(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedChats, pinnedChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(0, __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f"));
    }
    if (listId == null || listId == 1) {
        const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getPinnedDialogs", folder_id: 1 });
        const pinnedArchiveChats = new Array();
        for (const dialog of dialogs.dialogs) {
            pinnedArchiveChats.push((0, _2_tl_js_1.peerToChatId)(dialog.peer));
        }
        __classPrivateFieldSet(this, _ChatListManager_pinnedArchiveChats, pinnedArchiveChats, "f");
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(1, __classPrivateFieldGet(this, _ChatListManager_pinnedArchiveChats, "f"));
    }
    if (listId != null && listId != 0 && listId != 1) {
        (0, _0_deps_js_1.unreachable)();
    }
}, _ChatListManager_getPinnedChats = async function _ChatListManager_getPinnedChats(listId) {
    if (!__classPrivateFieldGet(this, _ChatListManager_pinnedChatsLoaded, "f")) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_loadPinnedChats).call(this);
    }
    if (!__classPrivateFieldGet(this, _ChatListManager_storageHadPinnedChats, "f")) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchPinnedChats).call(this);
    }
    switch (listId) {
        case 0:
            return __classPrivateFieldGet(this, _ChatListManager_pinnedChats, "f");
        case 1:
            return __classPrivateFieldGet(this, _ChatListManager_pinnedArchiveChats, "f");
        default:
            (0, _0_deps_js_1.unreachable)();
    }
}, _ChatListManager_updateOrAddChat = async function _ChatListManager_updateOrAddChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        const newChat = await (0, _3_types_js_1.constructChatListItem3)(chatId, chat.pinned, chat.lastMessage, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity);
        if (newChat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, newChat);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    else {
        const chat = await (0, _3_types_js_1.constructChatListItem)(chatId, -1, -1, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager));
        if (chat != null) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, 0).set(chatId, chat);
            await this.reassignChatLastMessage(chatId, false, false);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
        }
    }
}, _ChatListManager_removeChat = async function _ChatListManager_removeChat(chatId) {
    const [chat, listId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
    if (chat !== undefined) {
        __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).delete(chatId);
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
    }
}, _ChatListManager_handleUpdateFolderPeers = async function _ChatListManager_handleUpdateFolderPeers(update) {
    for (const { peer, folder_id: listId } of update.folder_peers) {
        const chatId = (0, _2_tl_js_1.peerToChatId)(peer);
        const [chat, currentListId] = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatAnywhere).call(this, chatId);
        if (chat !== undefined && listId != currentListId) {
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, currentListId).delete(chatId);
            __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId).set(chatId, chat);
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, true);
        }
    }
}, _ChatListManager_handleUpdatePinnedDialogs = async function _ChatListManager_handleUpdatePinnedDialogs(update) {
    const listId = update.folder_id ?? 0;
    await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_fetchPinnedChats).call(this, update.folder_id);
    const chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
    for (const [i, chatId] of pinnedChats.entries()) {
        const chat = chats.get(chatId);
        if (chat !== undefined) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(chat.lastMessage, i);
            chat.pinned = i;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chatId, false);
        }
    }
    for (const chat of chats.values()) {
        if (chat.pinned != -1 && pinnedChats.indexOf(chat.chat.id) == -1) {
            chat.order = (0, _3_types_js_1.getChatListItemOrder)(chat.lastMessage, -1);
            chat.pinned = -1;
            await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_sendChatUpdate).call(this, chat.chat.id, false);
        }
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setPinnedChats(listId, await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId));
}, _ChatListManager_handleUpdateChannel = async function _ChatListManager_handleUpdateChannel(update) {
    const peer = { ...update, _: "peerChannel" };
    const channel = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = (0, _2_tl_js_1.peerToChatId)(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (channel != null && "left" in channel && channel.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if ((0, _2_tl_js_1.is)("channelForbidden", channel)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if ((0, _2_tl_js_1.is)("channel", channel)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateChat = async function _ChatListManager_handleUpdateChat(update) {
    const peer = { ...update, _: "peerChat" };
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = (0, _2_tl_js_1.peerToChatId)(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null && "left" in chat && chat.left) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if ((0, _2_tl_js_1.is)("chatForbidden", chat)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_removeChat).call(this, chatId);
    }
    else if ((0, _2_tl_js_1.is)("chat", chat)) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_handleUpdateUser = async function _ChatListManager_handleUpdateUser(update) {
    const peer = { ...update, _: "peerUser" };
    const chat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity(peer);
    const chatId = (0, _2_tl_js_1.peerToChatId)(peer);
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId, null);
    if (chat != null) {
        await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_updateOrAddChat).call(this, chatId);
    }
}, _ChatListManager_fetchChats = async function _ChatListManager_fetchChats(listId, limit, after) {
    const dialogs = await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "messages.getDialogs", limit, offset_id: after?.lastMessage?.id ?? 0, offset_date: after?.lastMessage?.date ? (0, _1_utilities_js_1.toUnixTimestamp)(after.lastMessage.date) : 0, offset_peer: after ? await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(after.chat.id) : { _: "inputPeerEmpty" }, hash: 0n, folder_id: listId });
    const pinnedChats = await __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getPinnedChats).call(this, listId);
    if (!((0, _2_tl_js_1.is)("messages.dialogs", dialogs)) && !((0, _2_tl_js_1.is)("messages.dialogsSlice", dialogs))) {
        (0, _0_deps_js_1.unreachable)();
    }
    if (dialogs.dialogs.length < limit) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setHasAllChats(listId, true);
    }
    const chats = __classPrivateFieldGet(this, _ChatListManager_instances, "m", _ChatListManager_getChatList).call(this, listId);
    for (const dialog of dialogs.dialogs) {
        const chat = await (0, _3_types_js_1.constructChatListItem4)(dialog, dialogs, pinnedChats, __classPrivateFieldGet(this, _ChatListManager_c, "f").getEntity, __classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager.getMessage.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").messageManager), __classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager.getStickerSetName.bind(__classPrivateFieldGet(this, _ChatListManager_c, "f").fileManager));
        chats.set(chat.chat.id, chat);
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setChat(listId, chat.chat.id, chat.pinned, chat.lastMessage?.id ?? 0, chat.lastMessage?.date ?? new Date(0));
    }
}, _ChatListManager_getFullChat = async function _ChatListManager_getFullChat(chatId) {
    const inputPeer = await __classPrivateFieldGet(this, _ChatListManager_c, "f").getInputPeer(chatId);
    const chatId_ = (0, _2_tl_js_1.peerToChatId)(inputPeer);
    let fullChat = await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.getFullChat(chatId_);
    if (fullChat != null) {
        return fullChat;
    }
    if ((0, _2_tl_js_1.is)("inputPeerUser", inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "users.getFullUser", id: { ...inputPeer, _: "inputUser" } })).full_user;
    }
    else if ((0, _2_tl_js_1.is)("inputPeerChat", inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ ...inputPeer, _: "messages.getFullChat" })).full_chat;
    }
    else if ((0, _2_tl_js_1.is)("inputPeerChannel", inputPeer)) {
        fullChat = (await __classPrivateFieldGet(this, _ChatListManager_c, "f").invoke({ _: "channels.getFullChannel", channel: { ...inputPeer, _: "inputChannel" } })).full_chat;
    }
    await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setFullChat(chatId_, fullChat);
    if (fullChat != null && "call" in fullChat && fullChat.call) {
        await __classPrivateFieldGet(this, _ChatListManager_c, "f").storage.setGroupCallAccessHash(fullChat.call.id, fullChat.call.access_hash);
    }
    return fullChat;
};
