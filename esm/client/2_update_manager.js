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
var _UpdateManager_instances, _a, _UpdateManager_c, _UpdateManager_updateState, _UpdateManager_updateHandler, _UpdateManager_LrecoverUpdateGap, _UpdateManager_LrecoverChannelUpdateGap, _UpdateManager_L$handleUpdate, _UpdateManager_L$processUpdates, _UpdateManager_LfetchState, _UpdateManager_LopenChat, _UpdateManager_Lmin, _UpdateManager_defaultDropPendingUpdates, _UpdateManager_mustDropPendingUpdates, _UpdateManager_state, _UpdateManager_getState, _UpdateManager_setState, _UpdateManager_extractMessages, _UpdateManager_extractMinPeerReferences, _UpdateManager_handleUpdateQueues, _UpdateManager_nonFirst, _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck, _UpdateManager_checkGap, _UpdateManager_checkGapQts, _UpdateManager_checkChannelGap, _UpdateManager_channelUpdateQueues, _UpdateManager_processChannelPtsUpdateInner, _UpdateManager_queueUpdate, _UpdateManager_processChannelPtsUpdate, _UpdateManager_processPtsUpdateInner, _UpdateManager_ptsUpdateQueue, _UpdateManager_processPtsUpdate, _UpdateManager_processQtsUpdateInner, _UpdateManager_qtsUpdateQueue, _UpdateManager_processQtsUpdate, _UpdateManager_processUpdatesQueue, _UpdateManager_processUpdates, _UpdateManager_setUpdateStateDate, _UpdateManager_setUpdatePts, _UpdateManager_setUpdateQts, _UpdateManager_getLocalState, _UpdateManager_recoveringUpdateGap, _UpdateManager_recoverUpdateGapMutex, _UpdateManager_recoverChannelUpdateGap, _UpdateManager_handleUpdatesSet, _UpdateManager_handleStoredUpdates, _UpdateManager_handleUpdate, _UpdateManager_openChats;
import { unreachable } from "../0_deps.js";
import { InputError } from "../0_errors.js";
import { getLogger, Mutex, Queue, second, ZERO_CHANNEL_ID } from "../1_utilities.js";
import { as, inputPeerToPeer, is, isOfEnum, isOneOf, peerToChatId } from "../2_tl.js";
import { PersistentTimestampInvalid } from "../3_errors.js";
import { CHANNEL_DIFFERENCE_LIMIT_BOT, CHANNEL_DIFFERENCE_LIMIT_USER } from "../4_constants.js";
export class UpdateManager {
    constructor(c) {
        _UpdateManager_instances.add(this);
        _UpdateManager_c.set(this, void 0);
        _UpdateManager_updateState.set(this, void 0);
        _UpdateManager_updateHandler.set(this, void 0);
        _UpdateManager_LrecoverUpdateGap.set(this, void 0);
        _UpdateManager_LrecoverChannelUpdateGap.set(this, void 0);
        _UpdateManager_L$handleUpdate.set(this, void 0);
        _UpdateManager_L$processUpdates.set(this, void 0);
        _UpdateManager_LfetchState.set(this, void 0);
        _UpdateManager_LopenChat.set(this, void 0);
        _UpdateManager_Lmin.set(this, void 0);
        _UpdateManager_defaultDropPendingUpdates.set(this, null);
        _UpdateManager_state.set(this, undefined);
        _UpdateManager_handleUpdateQueues.set(this, new Map());
        _UpdateManager_nonFirst.set(this, new Set());
        _UpdateManager_channelUpdateQueues.set(this, new Map());
        _UpdateManager_ptsUpdateQueue.set(this, new Queue("ptsUpdate"));
        _UpdateManager_qtsUpdateQueue.set(this, new Queue("qtsUpdate"));
        _UpdateManager_processUpdatesQueue.set(this, new Queue("UpdateManager/processUpdates"));
        _UpdateManager_recoveringUpdateGap.set(this, false);
        _UpdateManager_recoverUpdateGapMutex.set(this, new Mutex());
        _UpdateManager_handleUpdatesSet.set(this, new Set());
        _UpdateManager_openChats.set(this, new Map());
        __classPrivateFieldSet(this, _UpdateManager_c, c, "f");
        const L = getLogger("UpdateManager").client(c.id);
        __classPrivateFieldSet(this, _UpdateManager_LrecoverUpdateGap, L.branch("recoverUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LrecoverChannelUpdateGap, L.branch("recoverChannelUpdateGap"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$handleUpdate, L.branch("#handleUpdate"), "f");
        __classPrivateFieldSet(this, _UpdateManager_L$processUpdates, L.branch("#processUpdates"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LfetchState, L.branch("fetchState"), "f");
        __classPrivateFieldSet(this, _UpdateManager_LopenChat, L.branch("openChat"), "f");
        __classPrivateFieldSet(this, _UpdateManager_Lmin, L.branch("min"), "f");
    }
    static isPtsUpdate(v) {
        return isOneOf(["updateNewMessage", "updateDeleteMessages", "updateReadHistoryInbox", "updateReadHistoryOutbox", "updatePinnedChannelMessages", "updatePinnedMessages", "updateFolderPeers", "updateChannelWebPage", "updateEditMessage", "updateReadMessagesContents", "updateWebPage"], v);
    }
    static isQtsUpdate(v) {
        return isOneOf(["updateNewEncryptedMessage", "updateMessagePollVote", "updateBotStopped", "updateChatParticipant", "updateChannelParticipant", "updateBotChatInviteRequester", "updateBotChatBoost", "updateBotMessageReaction", "updateBotMessageReactions", "updateBotBusinessConnect", "updateBotNewBusinessMessage", "updateBotEditBusinessMessage", "updateBotDeleteBusinessMessage"], v);
    }
    static isChannelPtsUpdate(v) {
        return isOneOf([
            "updateNewChannelMessage",
            "updateEditChannelMessage",
            "updateDeleteChannelMessages",
            "updateChannelTooLong",
        ], v);
    }
    async fetchState(source) {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").cdn) {
            return;
        }
        let state = await __classPrivateFieldGet(this, _UpdateManager_c, "f").invoke({ _: "updates.getState" });
        const difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").invoke({ ...state, _: "updates.getDifference" });
        if (is("updates.difference", difference)) {
            state = difference.state;
        }
        else if (is("updates.differenceSlice", difference)) {
            state = difference.intermediate_state;
        }
        __classPrivateFieldSet(this, _UpdateManager_updateState, state, "f");
        __classPrivateFieldGet(this, _UpdateManager_LfetchState, "f").debug(`state fetched [${source}]`);
        if (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, state);
        }
    }
    async processChats(chats, context) {
        for (const chat of chats) {
            if (isOneOf(["channel", "channelForbidden"], chat)) {
                if (!is("channel", chat) || !chat.min || chat.min && await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.getEntity(peerToChatId(chat)) == null) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
                }
                if (is("channel", chat) && chat.min) {
                    const entity = await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.getEntity(peerToChatId(chat));
                    const senderChatId = peerToChatId(chat);
                    if (is("channel", entity) && entity.min) {
                        for (const { chatId, senderId, messageId } of __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMinPeerReferences).call(this, context)) {
                            if (senderId == senderChatId) {
                                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMinPeerReference(chatId, senderId, messageId);
                                __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("channel min peer reference stored", chatId, senderId, messageId);
                            }
                        }
                    }
                }
                if ("username" in chat && chat.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(chat), [chat.username]);
                }
                if ("usernames" in chat && chat.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(chat), chat.usernames.map((v) => v.username));
                }
            }
            else if (isOneOf(["chat", "chatForbidden"], chat)) {
                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(chat);
            }
        }
    }
    async processResult(result) {
        if (isOneOf([
            "account.authorizationForm",
            "account.autoSaveSettings",
            "account.privacyRules",
            "account.webAuthorizations",
            "attachMenuBots",
            "attachMenuBotsBot",
            "channels.adminLogResults",
            "channels.channelParticipant",
            "channels.channelParticipants",
            "channels.sendAsPeers",
            "chatInvite",
            "chatlists.chatlistInvite",
            "chatlists.chatlistInviteAlready",
            "chatlists.chatlistUpdates",
            "chatlists.exportedInvites",
            "contacts.blocked",
            "contacts.blockedSlice",
            "contacts.contacts",
            "contacts.found",
            "contacts.importedContacts",
            "contacts.resolvedPeer",
            "contacts.topPeers",
            "help.promoData",
            "help.recentMeUrls",
            "messages.botResults",
            "messages.channelMessages",
            "messages.chatAdminsWithInvites",
            "messages.chatFull",
            "messages.chatInviteImporters",
            "messages.chats",
            "messages.chatsSlice",
            "messages.dialogs",
            "messages.dialogsSlice",
            "messages.discussionMessage",
            "messages.exportedChatInvite",
            "messages.exportedChatInviteReplaced",
            "messages.exportedChatInvites",
            "messages.forumTopics",
            "messages.highScores",
            "messages.inactiveChats",
            "messages.messageReactionsList",
            "messages.messages",
            "messages.messagesSlice",
            "messages.messageViews",
            "messages.peerDialogs",
            "messages.peerSettings",
            "messages.searchResultsCalendar",
            "messages.sponsoredMessages",
            "messages.votesList",
            "messages.webPage",
            "payments.checkedGiftCode",
            "payments.paymentForm",
            "payments.paymentReceipt",
            "phone.groupCall",
            "phone.groupParticipants",
            "phone.joinAsPeers",
            "phone.phoneCall",
            "photos.photo",
            "photos.photos",
            "photos.photosSlice",
            "premium.boostsList",
            "premium.myBoosts",
            "stats.megagroupStats",
            "stats.publicForwards",
            "stories.allStories",
            "stories.peerStories",
            "stories.stories",
            "stories.storyViews",
            "stories.storyViewsList",
            "users.userFull",
        ], result)) {
            if ("chats" in result) {
                await this.processChats(result.chats, result);
            }
            if ("users" in result) {
                await this.processUsers(result.users, result);
            }
            if ("messages" in result && Array.isArray(result.messages)) {
                for (const message of result.messages) {
                    if (is("message", message) || is("messageService", message)) {
                        await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
                    }
                }
            }
        }
        if (is("messages.messages", result)) {
            for (const message of result.messages) {
                if (is("message", message) || is("messageService", message)) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMessage(peerToChatId(message.peer_id), message.id, message);
                }
            }
        }
    }
    async processUsers(users, context) {
        for (const user of users) {
            if (is("user", user) && user.access_hash) {
                if (!user.min || user.min && await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.getEntity(peerToChatId(user)) == null) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setEntity(user);
                }
                if (user.min) {
                    __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("encountered min user");
                }
                if (is("user", user) && user.min) {
                    __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("emu A");
                    const entity = await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.getEntity(peerToChatId(user));
                    const userId = peerToChatId(user);
                    if (is("user", entity) && entity.min) {
                        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("emu B");
                        for (const { chatId, senderId, messageId } of __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMinPeerReferences).call(this, context)) {
                            __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("emu C", { chatId, senderId, messageId }, "=", userId);
                            if (senderId == userId) {
                                __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("emu X");
                                await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.setMinPeerReference(chatId, senderId, messageId);
                                __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("user min peer reference stored", chatId, senderId, messageId);
                            }
                        }
                    }
                }
                if (user.username) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(user), [user.username]);
                }
                if (user.usernames) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.updateUsernames(peerToChatId(user), user.usernames.map((v) => v.username));
                }
            }
        }
    }
    getHandleUpdateQueue(boxId) {
        let queue = __classPrivateFieldGet(this, _UpdateManager_handleUpdateQueues, "f").get(boxId);
        if (queue !== undefined) {
            return queue;
        }
        else {
            queue = new Queue(`handleUpdate-${boxId}`);
            return queue;
        }
    }
    processUpdates(updates, checkGap, call = null, callback) {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").cdn) {
            return;
        }
        __classPrivateFieldGet(this, _UpdateManager_processUpdatesQueue, "f").add(() => __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, updates, checkGap, call).then(callback));
    }
    async recoverUpdateGap(source) {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").cdn) {
            return;
        }
        const wasRecoveringUpdateGap = __classPrivateFieldGet(this, _UpdateManager_recoveringUpdateGap, "f");
        const unlock = await __classPrivateFieldGet(this, _UpdateManager_recoverUpdateGapMutex, "f").lock();
        if (wasRecoveringUpdateGap) {
            __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug(`update gap was just recovered [${source}]`);
            unlock();
            return;
        }
        __classPrivateFieldSet(this, _UpdateManager_recoveringUpdateGap, true, "f");
        __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug(`recovering from update gap [${source}]`);
        __classPrivateFieldGet(this, _UpdateManager_c, "f").setConnectionState("updating");
        try {
            let delay = 5;
            let state = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
            while (true) {
                let difference;
                try {
                    difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").invoke({ _: "updates.getDifference", pts: state.pts, date: state.date, qts: state.qts ?? 0 });
                }
                catch (err) {
                    if (err instanceof PersistentTimestampInvalid) {
                        await new Promise((r) => setTimeout(r, delay * second));
                        ++delay;
                        if (delay > 60) {
                            delay = 60;
                        }
                        continue;
                    }
                    else {
                        throw err;
                    }
                }
                if (is("updates.difference", difference) || is("updates.differenceSlice", difference)) {
                    await this.processChats(difference.chats, difference);
                    await this.processUsers(difference.users, difference);
                    for (const message of difference.new_messages) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, { _: "updateNewMessage", message, pts: 0, pts_count: 0 }, false);
                    }
                    for (const update of difference.other_updates) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
                    }
                    if (is("updates.difference", difference)) {
                        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, difference.state);
                        __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("recovered from update gap");
                        break;
                    }
                    else if (is("updates.differenceSlice", difference)) {
                        state = difference.intermediate_state;
                    }
                    else {
                        unreachable();
                    }
                }
                else if (is("updates.differenceTooLong", difference)) {
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").messageStorage.deleteMessages();
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(0);
                    await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.removeChats(1);
                    state.pts = difference.pts;
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("received differenceTooLong");
                }
                else if (is("updates.differenceEmpty", difference)) {
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, difference.date);
                    __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").debug("there was no update gap");
                    break;
                }
                else {
                    unreachable();
                }
            }
        }
        catch (err) {
            __classPrivateFieldGet(this, _UpdateManager_LrecoverUpdateGap, "f").error(err);
        }
        finally {
            unlock();
            __classPrivateFieldGet(this, _UpdateManager_c, "f").resetConnectionState();
            __classPrivateFieldSet(this, _UpdateManager_recoveringUpdateGap, false, "f");
        }
    }
    setUpdateHandler(handler) {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").cdn) {
            return;
        }
        __classPrivateFieldSet(this, _UpdateManager_updateHandler, handler, "f");
    }
    async openChat(chatId) {
        __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.assertUser("openChat");
        const channel = await __classPrivateFieldGet(this, _UpdateManager_c, "f").getInputChannel(chatId);
        const channelId = channel.channel_id;
        if (__classPrivateFieldGet(this, _UpdateManager_openChats, "f").has(channelId)) {
            return;
        }
        const controller = new AbortController();
        const promise = Promise.resolve().then(async () => {
            const logger = __classPrivateFieldGet(this, _UpdateManager_LopenChat, "f").branch(peerToChatId(channel) + "");
            while (true) {
                if (__classPrivateFieldGet(this, _UpdateManager_c, "f").disconnected()) {
                    logger.debug("disconnected, stopping the loop");
                    __classPrivateFieldGet(this, _UpdateManager_openChats, "f").delete(channelId);
                    break;
                }
                if (!__classPrivateFieldGet(this, _UpdateManager_openChats, "f").has(channelId)) {
                    const aborted = controller.signal.aborted;
                    logger.debug(`closed${(aborted ? " (aborted)" : "")}, stopping the loop`);
                    break;
                }
                try {
                    const Ti = Date.now();
                    const timeout = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_recoverChannelUpdateGap).call(this, channelId, "openChat");
                    const dT = Date.now() - Ti;
                    const delay = Math.max(timeout * 1_000 - dT, 0);
                    logger.debug("timeout=", timeout, "delay=", delay, "dT=", dT);
                    if (delay) {
                        await new Promise((r) => {
                            const resolve = () => {
                                r();
                                controller.signal.removeEventListener("abort", resolve);
                                if (controller.signal.aborted) {
                                    clearTimeout(timeout);
                                }
                            };
                            controller.signal.addEventListener("abort", resolve);
                            const timeout = setTimeout(resolve, delay);
                        });
                    }
                }
                catch (err) {
                    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").disconnected()) {
                        continue; // breaks the loop
                    }
                    __classPrivateFieldGet(this, _UpdateManager_LopenChat, "f").error("An unexpected error occurred:", err);
                }
            }
        });
        __classPrivateFieldGet(this, _UpdateManager_openChats, "f").set(channelId, { controller, promise });
    }
    async closeChat(chatId) {
        __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.assertUser("closeChat");
        const { channel_id } = await __classPrivateFieldGet(this, _UpdateManager_c, "f").getInputChannel(chatId);
        const openChat = __classPrivateFieldGet(this, _UpdateManager_openChats, "f").get(channel_id);
        if (openChat) {
            __classPrivateFieldGet(this, _UpdateManager_openChats, "f").delete(channel_id);
            openChat.controller.abort();
        }
        else {
            throw new InputError("Chat not open");
        }
    }
    closeAllChats() {
        for (const [channelId, openChat] of __classPrivateFieldGet(this, _UpdateManager_openChats, "f").entries()) {
            __classPrivateFieldGet(this, _UpdateManager_openChats, "f").delete(channelId);
            openChat.controller.abort();
        }
    }
}
_a = UpdateManager, _UpdateManager_c = new WeakMap(), _UpdateManager_updateState = new WeakMap(), _UpdateManager_updateHandler = new WeakMap(), _UpdateManager_LrecoverUpdateGap = new WeakMap(), _UpdateManager_LrecoverChannelUpdateGap = new WeakMap(), _UpdateManager_L$handleUpdate = new WeakMap(), _UpdateManager_L$processUpdates = new WeakMap(), _UpdateManager_LfetchState = new WeakMap(), _UpdateManager_LopenChat = new WeakMap(), _UpdateManager_Lmin = new WeakMap(), _UpdateManager_defaultDropPendingUpdates = new WeakMap(), _UpdateManager_state = new WeakMap(), _UpdateManager_handleUpdateQueues = new WeakMap(), _UpdateManager_nonFirst = new WeakMap(), _UpdateManager_channelUpdateQueues = new WeakMap(), _UpdateManager_ptsUpdateQueue = new WeakMap(), _UpdateManager_qtsUpdateQueue = new WeakMap(), _UpdateManager_processUpdatesQueue = new WeakMap(), _UpdateManager_recoveringUpdateGap = new WeakMap(), _UpdateManager_recoverUpdateGapMutex = new WeakMap(), _UpdateManager_handleUpdatesSet = new WeakMap(), _UpdateManager_openChats = new WeakMap(), _UpdateManager_instances = new WeakSet(), _UpdateManager_mustDropPendingUpdates = async function _UpdateManager_mustDropPendingUpdates() {
    if (typeof __classPrivateFieldGet(this, _UpdateManager_c, "f").dropPendingUpdates === "boolean") {
        return __classPrivateFieldGet(this, _UpdateManager_c, "f").dropPendingUpdates;
    }
    if (__classPrivateFieldGet(this, _UpdateManager_defaultDropPendingUpdates, "f") == null) {
        __classPrivateFieldSet(this, _UpdateManager_defaultDropPendingUpdates, await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getAccountType() == "bot", "f");
    }
    return __classPrivateFieldGet(this, _UpdateManager_defaultDropPendingUpdates, "f");
}, _UpdateManager_getState = async function _UpdateManager_getState() {
    if (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
        return __classPrivateFieldGet(this, _UpdateManager_state, "f") ?? null;
    }
    if (__classPrivateFieldGet(this, _UpdateManager_state, "f") !== undefined) {
        return __classPrivateFieldGet(this, _UpdateManager_state, "f");
    }
    const state = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getState();
    return __classPrivateFieldSet(this, _UpdateManager_state, state, "f");
}, _UpdateManager_setState = async function _UpdateManager_setState(state) {
    __classPrivateFieldSet(this, _UpdateManager_state, state, "f");
    if (!await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this)) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setState(state);
    }
}, _UpdateManager_extractMessages = function _UpdateManager_extractMessages(context) {
    const messages = new Array();
    if (Array.isArray(context)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em A");
        for (const item of context) {
            messages.push(...__classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMessages).call(this, item));
        }
    }
    else if (isOneOf(["updates", "updatesCombined"], context)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em B");
        messages.push(...__classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMessages).call(this, context.updates));
    }
    else if (isOneOf(["updates.difference", "updates.differenceSlice", "updates.channelDifference"], context)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em C");
        for (const message of context.new_messages) {
            if (is("message", message)) {
                messages.push(message);
            }
        }
        messages.push(...__classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMessages).call(this, context.other_updates));
    }
    else if (isOneOf(["updateNewMessage", "updateNewChannelMessage", "updateEditMessage", "updateEditChannelMessage", "updateBotNewBusinessMessage", "updateBotNewBusinessMessage"], context)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em D");
        if (is("message", context.message)) {
            messages.push(context.message);
        }
    }
    else if (is("message", context)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em E");
        messages.push(context);
    }
    else if (context != null && typeof context === "object" && "messages" in context && Array.isArray(context.messages)) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("em F");
        for (const message of context.messages) {
            if (is("message", message)) {
                messages.push(message);
            }
        }
    }
    return messages;
}, _UpdateManager_extractMinPeerReferences = function _UpdateManager_extractMinPeerReferences(context) {
    __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("empr A");
    const minPeerReferences = new Array();
    const messages = __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_extractMessages).call(this, context);
    __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("empr B", messages.length, context != null && typeof context == "object" && "_" in context ? context._ : typeof context);
    for (const message of messages) {
        __classPrivateFieldGet(this, _UpdateManager_Lmin, "f").debug("empr C");
        if (!message.from_id) {
            continue;
        }
        minPeerReferences.push({ chatId: peerToChatId(message.peer_id), senderId: peerToChatId(message.from_id), messageId: message.id });
    }
    return minPeerReferences;
}, _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck = async function _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck(channelId) {
    if (!(await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_mustDropPendingUpdates).call(this))) {
        return await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    }
    const first = !__classPrivateFieldGet(this, _UpdateManager_nonFirst, "f").has(channelId);
    if (first) {
        __classPrivateFieldGet(this, _UpdateManager_nonFirst, "f").add(channelId);
        return null;
    }
    else {
        return await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    }
}, _UpdateManager_checkGap = async function _UpdateManager_checkGap(pts, ptsCount) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (localState.pts + ptsCount < pts) {
        await this.recoverUpdateGap("processUpdates[pts]");
    }
}, _UpdateManager_checkGapQts = async function _UpdateManager_checkGapQts(qts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (localState.qts + _a.QTS_COUNT < qts) {
        await this.recoverUpdateGap("processUpdates[qts]");
    }
}, _UpdateManager_checkChannelGap = async function _UpdateManager_checkChannelGap(channelId, pts, ptsCount) {
    let localPts = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck).call(this, channelId);
    if (!localPts) {
        localPts = pts - ptsCount;
    }
    if (localPts + ptsCount < pts) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_recoverChannelUpdateGap).call(this, channelId, "processUpdates");
    }
}, _UpdateManager_processChannelPtsUpdateInner = async function _UpdateManager_processChannelPtsUpdateInner(update, checkGap) {
    const channelId = is("updateNewChannelMessage", update) || is("updateEditChannelMessage", update) ? as("peerChannel", update.message.peer_id).channel_id : update.channel_id;
    if (is("updateChannelTooLong", update)) {
        if (update.pts != undefined) {
            await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, update.pts);
        }
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_recoverChannelUpdateGap).call(this, channelId, "updateChannelTooLong");
        return;
    }
    if (update.pts != 0) {
        const ptsCount = update.pts_count;
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkChannelGap).call(this, channelId, update.pts, ptsCount);
        }
        let currentPts = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getChannelPtsWithDropPendingUpdatesCheck).call(this, channelId);
        currentPts ??= update.pts - ptsCount;
        if (currentPts + ptsCount > update.pts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(channelId, update);
    }
    if (update.pts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, update.pts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, channelId, true);
}, _UpdateManager_queueUpdate = function _UpdateManager_queueUpdate(update, boxId, pts) {
    this.getHandleUpdateQueue(boxId).add(async () => {
        if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery && pts) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleStoredUpdates).call(this, boxId);
        }
        else {
            await (await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleUpdate).call(this, update))();
        }
    });
}, _UpdateManager_processChannelPtsUpdate = function _UpdateManager_processChannelPtsUpdate(update, checkGap) {
    const channelId = is("updateNewChannelMessage", update) || is("updateEditChannelMessage", update) ? as("peerChannel", update.message.peer_id).channel_id : update.channel_id;
    let queue = __classPrivateFieldGet(this, _UpdateManager_channelUpdateQueues, "f").get(channelId);
    if (queue == undefined) {
        queue = new Queue(`channelUpdates-${channelId}`);
        __classPrivateFieldGet(this, _UpdateManager_channelUpdateQueues, "f").set(channelId, queue);
    }
    queue.add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processChannelPtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processPtsUpdateInner = async function _UpdateManager_processPtsUpdateInner(update, checkGap) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (update.pts != 0) {
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkGap).call(this, update.pts, update.pts_count);
        }
        if (localState.pts + update.pts_count > update.pts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(_a.MAIN_BOX_ID, update);
    }
    if (update.pts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdatePts).call(this, update.pts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 1n, false);
}, _UpdateManager_processPtsUpdate = function _UpdateManager_processPtsUpdate(update, checkGap) {
    __classPrivateFieldGet(this, _UpdateManager_ptsUpdateQueue, "f").add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processQtsUpdateInner = async function _UpdateManager_processQtsUpdateInner(update, checkGap) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    if (update.qts != 0) {
        if (checkGap) {
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_checkGapQts).call(this, update.qts);
        }
        if (localState.qts + _a.QTS_COUNT > update.qts) {
            return;
        }
    }
    if (__classPrivateFieldGet(this, _UpdateManager_c, "f").guaranteeUpdateDelivery) {
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setUpdate(_a.MAIN_BOX_ID, update);
    }
    if (update.qts != 0) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateQts).call(this, update.qts);
    }
    __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 0n, true);
}, _UpdateManager_processQtsUpdate = function _UpdateManager_processQtsUpdate(update, checkGap) {
    __classPrivateFieldGet(this, _UpdateManager_qtsUpdateQueue, "f").add(async () => {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processQtsUpdateInner).call(this, update, checkGap);
    });
}, _UpdateManager_processUpdates = async function _UpdateManager_processUpdates(updates_, checkGap, call = null) {
    /// First, individual updates (Update[1]) are extracted from Updates.[2]
    ///
    /// If an updatesTooLong[3] was received, an update gap recovery is initiated and no further action will be taken.
    ///
    /// [1]: https://core.telegram.org/type/Update
    /// [2]: https://core.telegram.org/type/Updates
    /// [3]: https://core.telegram.org/constructor/updatesTooLong
    let updates;
    if (is("updatesCombined", updates_) || is("updates", updates_)) {
        updates = updates_.updates;
        const seq = updates_.seq;
        const seqStart = "seq_start" in updates_ ? updates_.seq_start : updates_.seq;
        if (checkGap) {
            if (seqStart == 0) {
                checkGap = false;
                __classPrivateFieldGet(this, _UpdateManager_L$processUpdates, "f").debug("seqStart=0");
            }
            else {
                const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
                const localSeq = localState.seq;
                if (localSeq + 1 == seqStart) {
                    // The update sequence can be applied.
                    localState.seq = seq;
                    localState.date = updates_.date;
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
                    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
                }
                else if (localSeq + 1 > seqStart) {
                    // The update sequence was already applied, and must be ignored.
                    __classPrivateFieldGet(this, _UpdateManager_L$processUpdates, "f").debug("localSeq + 1 > seqStart");
                    return;
                }
                else if (localSeq + 1 < seqStart) {
                    // There's an updates gap that must be filled.
                    await this.recoverUpdateGap("localSeq + 1 < seqStart");
                }
            }
        }
    }
    else if (is("updateShort", updates_)) {
        updates = [updates_.update];
    }
    else if (is("updateShortMessage", updates_)) {
        updates = [
            {
                _: "updateNewMessage",
                message: ({
                    _: "message",
                    out: updates_.out,
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: updates_.out ? ({ _: "peerUser", user_id: BigInt(await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId()) }) : ({ _: "peerUser", user_id: updates_.user_id }),
                    peer_id: ({ _: "peerUser", user_id: updates_.user_id }),
                    message: updates_.message,
                    date: updates_.date,
                    fwd_from: updates_.fwd_from,
                    via_bot_id: updates_.via_bot_id,
                    reply_to: updates_.reply_to,
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            },
        ];
    }
    else if (is("updateShortChatMessage", updates_)) {
        updates = [
            {
                _: "updateNewMessage",
                message: ({
                    _: "message",
                    mentioned: updates_.mentioned,
                    media_unread: updates_.media_unread,
                    silent: updates_.silent,
                    id: updates_.id,
                    from_id: { _: "peerUser", user_id: updates_.from_id },
                    peer_id: { _: "peerChat", chat_id: updates_.chat_id },
                    fwd_from: updates_.fwd_from,
                    via_bot_id: updates_.via_bot_id,
                    reply_to: updates_.reply_to,
                    date: updates_.date,
                    message: updates_.message,
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            },
        ];
    }
    else if (is("updateShortSentMessage", updates_)) {
        if (!is("messages.sendMessage", call)) {
            unreachable();
        }
        updates = [{
                _: "updateNewMessage",
                message: ({
                    _: "message",
                    out: updates_.out,
                    silent: call.silent,
                    id: updates_.id,
                    from_id: { _: "peerUser", user_id: BigInt(await __classPrivateFieldGet(this, _UpdateManager_c, "f").getSelfId()) },
                    peer_id: inputPeerToPeer(call.peer),
                    message: call.message,
                    media: updates_.media,
                    date: updates_.date,
                    // reply_to: call.reply_to, // TODO?
                    entities: updates_.entities,
                    ttl_period: updates_.ttl_period,
                }),
                pts: updates_.pts,
                pts_count: updates_.pts_count,
            }];
    }
    else if (is("updatesTooLong", updates_)) {
        await this.recoverUpdateGap("updatesTooLong");
        return;
    }
    else if (isOfEnum("Update", updates_)) {
        updates = [updates_];
    }
    else {
        unreachable();
    }
    /// We process the updates when we are sure there is no gap.
    if (is("updates", updates_) || is("updatesCombined", updates_)) {
        await this.processChats(updates_.chats, updates_);
        await this.processUsers(updates_.users, updates_);
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    else if (is("updateShort", updates_) ||
        is("updateShortMessage", updates_) ||
        is("updateShortChatMessage", updates_) ||
        is("updateShortSentMessage", updates_)) {
        await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setUpdateStateDate).call(this, updates_.date);
    }
    for (const update of updates) {
        if (is("updatePtsChanged", update)) {
            await this.fetchState("updatePtsChanged");
            if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, __classPrivateFieldGet(this, _UpdateManager_updateState, "f"));
            }
            else {
                unreachable();
            }
        }
        else if (_a.isPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processPtsUpdate).call(this, update, checkGap);
        }
        else if (_a.isChannelPtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processChannelPtsUpdate).call(this, update, checkGap);
        }
        else if (_a.isQtsUpdate(update)) {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processQtsUpdate).call(this, update, checkGap);
        }
        else {
            __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_queueUpdate).call(this, update, 0n, false);
        }
    }
}, _UpdateManager_setUpdateStateDate = async function _UpdateManager_setUpdateStateDate(date) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.date = date;
    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
}, _UpdateManager_setUpdatePts = async function _UpdateManager_setUpdatePts(pts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.pts = pts;
    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
}, _UpdateManager_setUpdateQts = async function _UpdateManager_setUpdateQts(qts) {
    const localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getLocalState).call(this);
    localState.qts = qts;
    await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
}, _UpdateManager_getLocalState = async function _UpdateManager_getLocalState() {
    let localState = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_getState).call(this);
    if (!localState) {
        if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
            localState = __classPrivateFieldGet(this, _UpdateManager_updateState, "f");
            await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
        }
        else {
            await this.fetchState("getLocalState");
            if (__classPrivateFieldGet(this, _UpdateManager_updateState, "f")) {
                localState = __classPrivateFieldGet(this, _UpdateManager_updateState, "f");
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_setState).call(this, localState);
            }
            else {
                unreachable();
            }
        }
    }
    return localState;
}, _UpdateManager_recoverChannelUpdateGap = async function _UpdateManager_recoverChannelUpdateGap(channelId, source) {
    let lastTimeout = 1;
    __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovering channel update gap [${channelId}, ${source}]`);
    const pts_ = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getChannelPts(channelId);
    let pts = pts_ == null ? 1 : pts_;
    let delay = 5;
    while (true) {
        const { access_hash } = await __classPrivateFieldGet(this, _UpdateManager_c, "f").getInputPeer(ZERO_CHANNEL_ID + -Number(channelId)).then((v) => as("inputPeerChannel", v));
        let difference;
        try {
            difference = await __classPrivateFieldGet(this, _UpdateManager_c, "f").invoke({
                _: "updates.getChannelDifference",
                pts,
                channel: { _: "inputChannel", channel_id: channelId, access_hash },
                filter: { _: "channelMessagesFilterEmpty" },
                limit: await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getAccountType() == "user" ? CHANNEL_DIFFERENCE_LIMIT_USER : CHANNEL_DIFFERENCE_LIMIT_BOT,
            });
            lastTimeout = difference.timeout ?? 1;
        }
        catch (err) {
            if (err instanceof PersistentTimestampInvalid) {
                await new Promise((r) => setTimeout(r, delay * second));
                delay += 5;
                if (delay > 60) {
                    delay = 60;
                }
                continue;
            }
            else {
                throw err;
            }
        }
        if (is("updates.channelDifference", difference)) {
            await this.processChats(difference.chats, difference);
            await this.processUsers(difference.users, difference);
            for (const message of difference.new_messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, { _: "updateNewChannelMessage", message, pts: 0, pts_count: 0 }, false);
            }
            for (const update of difference.other_updates) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, update, false);
            }
            await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.setChannelPts(channelId, difference.pts);
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug(`recovered from update gap [${channelId}, ${source}]`, channelId, source);
            break;
        }
        else if (is("updates.channelDifferenceTooLong", difference)) {
            // TODO: invalidate messages
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("received channelDifferenceTooLong");
            await this.processChats(difference.chats, difference);
            await this.processUsers(difference.users, difference);
            for (const message of difference.messages) {
                await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_processUpdates).call(this, { _: "updateNewChannelMessage", message, pts: 0, pts_count: 0 }, false);
            }
            const pts_ = as("dialog", difference.dialog).pts;
            if (pts_ != undefined) {
                pts = pts_;
            }
            else {
                unreachable();
            }
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("processed channelDifferenceTooLong");
        }
        else if (is("updates.channelDifferenceEmpty", difference)) {
            __classPrivateFieldGet(this, _UpdateManager_LrecoverChannelUpdateGap, "f").debug("there was no update gap");
            break;
        }
    }
    return lastTimeout;
}, _UpdateManager_handleStoredUpdates = async function _UpdateManager_handleStoredUpdates(boxId) {
    if (__classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").has(boxId)) {
        return;
    }
    __classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").add(boxId);
    do {
        const maybeUpdate = await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.getFirstUpdate(boxId);
        if (maybeUpdate == null) {
            break;
        }
        const [key, update] = maybeUpdate;
        for (let i = 0; i < 100; ++i) {
            try {
                const handle = await __classPrivateFieldGet(this, _UpdateManager_instances, "m", _UpdateManager_handleUpdate).call(this, update);
                handle: for (let i = 0; i < 2; ++i) {
                    try {
                        await handle();
                        break handle;
                    }
                    catch {
                        continue handle;
                    }
                }
                break;
            }
            catch (err) {
                __classPrivateFieldGet(this, _UpdateManager_L$handleUpdate, "f").error(err);
            }
        }
        await __classPrivateFieldGet(this, _UpdateManager_c, "f").storage.set(key, null);
    } while (true);
    __classPrivateFieldGet(this, _UpdateManager_handleUpdatesSet, "f").delete(boxId);
}, _UpdateManager_handleUpdate = function _UpdateManager_handleUpdate(update) {
    const handler = __classPrivateFieldGet(this, _UpdateManager_updateHandler, "f");
    if (handler) {
        return handler(update);
    }
    else {
        return Promise.resolve(() => Promise.resolve());
    }
};
Object.defineProperty(UpdateManager, "QTS_COUNT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 1
});
Object.defineProperty(UpdateManager, "MAIN_BOX_ID", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0n
});
