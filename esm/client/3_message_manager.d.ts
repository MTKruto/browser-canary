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
import { Api } from "../2_tl.js";
import { InputMedia, PollOption, PriceTag } from "../3_types.js";
import { ChatAction, FileSource, FileType, ID, Message, MessageEntity, ParseMode, Reaction, Update, UsernameResolver } from "../3_types.js";
import { AddReactionParams, ApproveJoinRequestsParams, BanChatMemberParams, CreateInviteLinkParams, DeclineJoinRequestsParams, DeleteMessagesParams, EditMessageLiveLocationParams, EditMessageMediaParams, EditMessageParams, EditMessageReplyMarkupParams, ForwardMessagesParams, GetCreatedInviteLinksParams, GetHistoryParams, PinMessageParams, SearchMessagesParams, SendAnimationParams, SendAudioParams, SendChatActionParams, SendContactParams, SendDiceParams, SendDocumentParams, SendInvoiceParams, SendLocationParams, SendMessageParams, SendPhotoParams, SendPollParams, SendStickerParams, SendVenueParams, SendVideoNoteParams, SendVideoParams, SendVoiceParams, SetChatMemberRightsParams, SetChatPhotoParams, SetReactionsParams, StopPollParams } from "./0_params.js";
import { C as C_ } from "./1_types.js";
import { FileManager } from "./2_file_manager.js";
interface C extends C_ {
    fileManager: FileManager;
}
declare const messageManagerUpdates: readonly ["updateNewMessage", "updateNewChannelMessage", "updateEditMessage", "updateEditChannelMessage", "updateBotNewBusinessMessage", "updateBotEditBusinessMessage", "updateBotDeleteBusinessMessage", "updateDeleteMessages", "updateDeleteChannelMessages", "updateChannelParticipant", "updateChatParticipant", "updateBotChatInviteRequester"];
type MessageManagerUpdate = Api.Types[(typeof messageManagerUpdates)[number]];
export declare class MessageManager {
    #private;
    constructor(c: C);
    getMessages(chatId: ID, messageIds: number[]): Promise<Message[]>;
    getMessageWithReply(chatId: ID, messageId: number): Promise<Message>;
    getMessage(chatId: ID, messageId: number): Promise<Message>;
    static parseText(text: string, entities: MessageEntity[], parseMode: ParseMode): [string, MessageEntity[]];
    parseText(text_: string, params?: {
        parseMode?: ParseMode;
        entities?: MessageEntity[];
    }): Promise<readonly [string, Api.MessageEntity[] | undefined]>;
    constructMessage(message_: Api.Message, r?: boolean, business?: {
        connectionId: string;
        replyToMessage?: Api.Message;
    }): Promise<Message>;
    forwardMessages(from: ID, to: ID, messageIds: number[], params?: ForwardMessagesParams): Promise<Message[]>;
    getHistory(chatId: ID, params?: GetHistoryParams): Promise<Message[]>;
    usernameResolver: UsernameResolver;
    sendMessage(chatId: ID, text: string, params?: SendMessageParams): Promise<import("../3_types.js").MessageText>;
    sendVenue(chatId: ID, latitude: number, longitude: number, title: string, address: string, params?: SendVenueParams): Promise<import("../3_types.js").MessageVenue>;
    sendContact(chatId: ID, firstName: string, number: string, params?: SendContactParams): Promise<import("../3_types.js").MessageContact>;
    sendDice(chatId: ID, params?: SendDiceParams): Promise<import("../3_types.js").MessageDice>;
    sendLocation(chatId: ID, latitude: number, longitude: number, params?: SendLocationParams): Promise<import("../3_types.js").MessageLocation>;
    sendVideoNote(chatId: ID, audio: FileSource, params?: SendVideoNoteParams): Promise<import("../3_types.js").MessageVideoNote>;
    sendAudio(chatId: ID, audio: FileSource, params?: SendAudioParams): Promise<import("../3_types.js").MessageAudio>;
    sendVoice(chatId: ID, voice: FileSource, params?: SendVoiceParams): Promise<import("../3_types.js").MessageVoice>;
    sendAnimation(chatId: ID, animation: FileSource, params?: SendAnimationParams): Promise<import("../3_types.js").MessageAnimation>;
    sendVideo(chatId: ID, video: FileSource, params?: SendVideoParams): Promise<import("../3_types.js").MessageVideo>;
    sendDocument(chatId: ID, document: FileSource, params?: SendDocumentParams): Promise<import("../3_types.js").MessageDocument>;
    sendSticker(chatId: ID, sticker: FileSource, params?: SendStickerParams): Promise<import("../3_types.js").MessageSticker>;
    sendPhoto(chatId: ID, photo: FileSource, params?: SendPhotoParams): Promise<import("../3_types.js").MessagePhoto>;
    resolveFileId(maybeFileId: string, expectedFileType: FileType | FileType[]): {
        id: bigint;
        access_hash: bigint;
        file_reference: Uint8Array;
    } | null;
    sendPoll(chatId: ID, question: string, options: [string | PollOption, string | PollOption, ...(string | PollOption)[]], params?: SendPollParams): Promise<import("../3_types.js").MessagePoll>;
    editMessageReplyMarkup(chatId: ID, messageId: number, params?: EditMessageReplyMarkupParams): Promise<Message>;
    editInlineMessageReplyMarkup(inlineMessageId: string, params?: EditMessageReplyMarkupParams): Promise<void>;
    editMessageText(chatId: ID, messageId: number, text: string, params?: EditMessageParams): Promise<import("../3_types.js").MessageText>;
    editInlineMessageText(inlineMessageId: string, text: string, params?: EditMessageParams): Promise<void>;
    editMessageMedia(chatId: ID, messageId: number, media: InputMedia, params?: EditMessageMediaParams): Promise<Message>;
    editInlineMessageMedia(inlineMessageId: string, media: InputMedia, params?: EditMessageMediaParams): Promise<void>;
    deleteMessages(chatId: ID, messageIds: number[], params?: DeleteMessagesParams): Promise<void>;
    deleteChatMemberMessages(chatId: ID, memberId: ID): Promise<void>;
    pinMessage(chatId: ID, messageId: number, params?: PinMessageParams): Promise<void>;
    unpinMessage(chatId: ID, messageId: number): Promise<void>;
    unpinMessages(chatId: ID): Promise<void>;
    setAvailableReactions(chatId: ID, availableReactions: "none" | "all" | Reaction[]): Promise<void>;
    setReactions(chatId: ID, messageId: number, reactions: Reaction[], params?: SetReactionsParams): Promise<void>;
    addReaction(chatId: ID, messageId: number, reaction: Reaction, params?: AddReactionParams): Promise<void>;
    removeReaction(chatId: ID, messageId: number, reaction: Reaction): Promise<void>;
    static canHandleUpdate(update: Api.Update): update is MessageManagerUpdate;
    handleUpdate(update: MessageManagerUpdate): Promise<Update | null>;
    sendChatAction(chatId: ID, action: ChatAction, params?: SendChatActionParams): Promise<void>;
    deleteChatPhoto(chatId: number): Promise<void>;
    setChatPhoto(chatId: number, photo: FileSource, params?: SetChatPhotoParams): Promise<void>;
    banChatMember(chatId: ID, memberId: ID, params?: BanChatMemberParams): Promise<void>;
    unbanChatMember(chatId: ID, memberId: ID): Promise<void>;
    setChatMemberRights(chatId: ID, memberId: ID, params?: SetChatMemberRightsParams): Promise<void>;
    enableJoinRequests(chatId: ID): Promise<void>;
    disableJoinRequests(chatId: ID): Promise<void>;
    approveJoinRequest(chatId: ID, userId: ID): Promise<void>;
    declineJoinRequest(chatId: ID, userId: ID): Promise<void>;
    approveJoinRequests(chatId: ID, params?: ApproveJoinRequestsParams): Promise<void>;
    declineJoinRequests(chatId: ID, params?: DeclineJoinRequestsParams): Promise<void>;
    searchMessages(chatId: ID, query: string, params?: SearchMessagesParams): Promise<Message[]>;
    setBoostsRequiredToCircumventRestrictions(chatId: ID, boosts: number): Promise<void>;
    createInviteLink(chatId: ID, params?: CreateInviteLinkParams): Promise<import("../3_types.js").InviteLink>;
    getCreatedInviteLinks(chatId: ID, params?: GetCreatedInviteLinksParams): Promise<import("../3_types.js").InviteLink[]>;
    joinChat(chatId: ID): Promise<void>;
    leaveChat(chatId: ID): Promise<void>;
    blockUser(userId: ID): Promise<void>;
    unblockUser(userId: ID): Promise<void>;
    getChatMember(chatId: ID, userId: ID): Promise<import("../3_types.js").ChatMember>;
    setChatStickerSet(chatId: ID, setName: string): Promise<void>;
    deleteChatStickerSet(chatId: ID): Promise<void>;
    stopPoll(chatId: ID, messageId: number, params?: StopPollParams): Promise<import("../3_types.js").Poll>;
    editMessageLiveLocation(chatId: ID, messageId: number, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<import("../3_types.js").MessageLocation>;
    editInlineMessageLiveLocation(inlineMessageId: string, latitude: number, longitude: number, params?: EditMessageLiveLocationParams): Promise<void>;
    sendInvoice(chatId: ID, title: string, description: string, payload: string, currency: string, prices: PriceTag[], params?: SendInvoiceParams): Promise<import("../3_types.js").MessageInvoice>;
}
export {};
//# sourceMappingURL=3_message_manager.d.ts.map