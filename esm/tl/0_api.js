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
const map = new Map([
    [0x05162463, "resPQ"],
    [0xA9F55F95, "p_q_inner_data_dc"],
    [0x56FDDF88, "p_q_inner_data_temp_dc"],
    [0xD0E8075C, "server_DH_params_ok"],
    [0xB5890DBA, "server_DH_inner_data"],
    [0x6643B654, "client_DH_inner_data"],
    [0x3BCBF734, "dh_gen_ok"],
    [0x46DC1FB9, "dh_gen_retry"],
    [0xA69DAE02, "dh_gen_fail"],
    [0x75A3F765, "bind_auth_key_inner"],
    [0x2144CA19, "rpc_error"],
    [0x5E2AD36E, "rpc_answer_unknown"],
    [0xCD78E586, "rpc_answer_dropped_running"],
    [0xA43AD8B7, "rpc_answer_dropped"],
    [0x0949D9DC, "future_salt"],
    [0xAE500895, "future_salts"],
    [0x347773C5, "pong"],
    [0xE22045FC, "destroy_session_ok"],
    [0x62D350C9, "destroy_session_none"],
    [0x9EC20908, "new_session_created"],
    [0x3072CFA1, "gzip_packed"],
    [0x62D6B459, "msgs_ack"],
    [0xA7EFF811, "bad_msg_notification"],
    [0xEDAB447B, "bad_server_salt"],
    [0x7D861A08, "msg_resend_req"],
    [0xDA69FB52, "msgs_state_req"],
    [0x04DEB57D, "msgs_state_info"],
    [0x8CC0D131, "msgs_all_info"],
    [0x276D3EC6, "msg_detailed_info"],
    [0x809DB6DF, "msg_new_detailed_info"],
    [0xF660E1D4, "destroy_auth_key_ok"],
    [0x0A9F2259, "destroy_auth_key_none"],
    [0xEA109B13, "destroy_auth_key_fail"],
    [0x9299359F, "http_wait"],
    [0x3FEDD339, "true"],
    [0xC4B9F9BB, "error"],
    [0xD433AD73, "ipPort"],
    [0x37982646, "ipPortSecret"],
    [0x4679B65F, "accessPointRule"],
    [0x5A592A6C, "help.configSimple"],
    [0x27D69997, "inputPeerPhotoFileLocationLegacy"],
    [0x0DBAEAE9, "inputStickerSetThumbLegacy"],
    [0x7F3B18EA, "inputPeerEmpty"],
    [0x7DA07EC9, "inputPeerSelf"],
    [0x35A95CB9, "inputPeerChat"],
    [0xDDE8A54C, "inputPeerUser"],
    [0x27BCBBFC, "inputPeerChannel"],
    [0xA87B0A1C, "inputPeerUserFromMessage"],
    [0xBD2A0840, "inputPeerChannelFromMessage"],
    [0xB98886CF, "inputUserEmpty"],
    [0xF7C1B13F, "inputUserSelf"],
    [0xF21158C6, "inputUser"],
    [0x1DA448E2, "inputUserFromMessage"],
    [0xF392B7F4, "inputPhoneContact"],
    [0xF52FF27F, "inputFile"],
    [0xFA4F0BB5, "inputFileBig"],
    [0x9664F57F, "inputMediaEmpty"],
    [0x1E287D04, "inputMediaUploadedPhoto"],
    [0xB3BA0635, "inputMediaPhoto"],
    [0xF9C44144, "inputMediaGeoPoint"],
    [0xF8AB7DFB, "inputMediaContact"],
    [0x5B38C6C1, "inputMediaUploadedDocument"],
    [0x33473058, "inputMediaDocument"],
    [0xC13D1C11, "inputMediaVenue"],
    [0xE5BBFE1A, "inputMediaPhotoExternal"],
    [0xFB52DC99, "inputMediaDocumentExternal"],
    [0xD33F43F3, "inputMediaGame"],
    [0x405FEF0D, "inputMediaInvoice"],
    [0x971FA843, "inputMediaGeoLive"],
    [0x0F94E5F1, "inputMediaPoll"],
    [0xE66FBF7B, "inputMediaDice"],
    [0x89FDD778, "inputMediaStory"],
    [0xC21B8849, "inputMediaWebPage"],
    [0xAA661FC3, "inputMediaPaidMedia"],
    [0x1CA48F57, "inputChatPhotoEmpty"],
    [0xBDCDAEC0, "inputChatUploadedPhoto"],
    [0x8953AD37, "inputChatPhoto"],
    [0xE4C123D6, "inputGeoPointEmpty"],
    [0x48222FAF, "inputGeoPoint"],
    [0x1CD7BF0D, "inputPhotoEmpty"],
    [0x3BB3B94A, "inputPhoto"],
    [0xDFDAABE1, "inputFileLocation"],
    [0xF5235D55, "inputEncryptedFileLocation"],
    [0xBAD07584, "inputDocumentFileLocation"],
    [0xCBC7EE28, "inputSecureFileLocation"],
    [0x29BE5899, "inputTakeoutFileLocation"],
    [0x40181FFE, "inputPhotoFileLocation"],
    [0xD83466F3, "inputPhotoLegacyFileLocation"],
    [0x37257E99, "inputPeerPhotoFileLocation"],
    [0x9D84F3DB, "inputStickerSetThumb"],
    [0x0598A92A, "inputGroupCallStream"],
    [0x59511722, "peerUser"],
    [0x36C6019A, "peerChat"],
    [0xA2A5371E, "peerChannel"],
    [0xAA963B05, "storage.fileUnknown"],
    [0x40BC6F52, "storage.filePartial"],
    [0x007EFE0E, "storage.fileJpeg"],
    [0xCAE1AADF, "storage.fileGif"],
    [0x0A4F63C0, "storage.filePng"],
    [0xAE1E508D, "storage.filePdf"],
    [0x528A0677, "storage.fileMp3"],
    [0x4B09EBBC, "storage.fileMov"],
    [0xB3CEA0E4, "storage.fileMp4"],
    [0x1081464C, "storage.fileWebp"],
    [0xD3BC4B7A, "userEmpty"],
    [0x215C4438, "user"],
    [0x4F11BAE1, "userProfilePhotoEmpty"],
    [0x82D1F706, "userProfilePhoto"],
    [0x09D05049, "userStatusEmpty"],
    [0xEDB93949, "userStatusOnline"],
    [0x008C703F, "userStatusOffline"],
    [0x7B197DC8, "userStatusRecently"],
    [0x541A1D1A, "userStatusLastWeek"],
    [0x65899777, "userStatusLastMonth"],
    [0x29562865, "chatEmpty"],
    [0x41CBF256, "chat"],
    [0x6592A1A7, "chatForbidden"],
    [0x0AADFC8F, "channel"],
    [0x17D493D5, "channelForbidden"],
    [0x2633421B, "chatFull"],
    [0xBBAB348D, "channelFull"],
    [0xC02D4007, "chatParticipant"],
    [0xE46BCEE4, "chatParticipantCreator"],
    [0xA0933F5B, "chatParticipantAdmin"],
    [0x8763D3E1, "chatParticipantsForbidden"],
    [0x3CBC93F8, "chatParticipants"],
    [0x37C1011C, "chatPhotoEmpty"],
    [0x1C6E1C11, "chatPhoto"],
    [0x90A6CA84, "messageEmpty"],
    [0x94345242, "message"],
    [0x2B085862, "messageService"],
    [0x3DED6320, "messageMediaEmpty"],
    [0x695150D7, "messageMediaPhoto"],
    [0x56E0D474, "messageMediaGeo"],
    [0x70322949, "messageMediaContact"],
    [0x9F84F49E, "messageMediaUnsupported"],
    [0x4CF4D72D, "messageMediaDocument"],
    [0xDDF10C3B, "messageMediaWebPage"],
    [0x2EC0533F, "messageMediaVenue"],
    [0xFDB19008, "messageMediaGame"],
    [0xF6A548D3, "messageMediaInvoice"],
    [0xB940C666, "messageMediaGeoLive"],
    [0x4BD6E798, "messageMediaPoll"],
    [0x3F7EE58B, "messageMediaDice"],
    [0x68CB6283, "messageMediaStory"],
    [0xDAAD85B0, "messageMediaGiveaway"],
    [0xC6991068, "messageMediaGiveawayResults"],
    [0xA8852491, "messageMediaPaidMedia"],
    [0xB6AEF7B0, "messageActionEmpty"],
    [0xBD47CBAD, "messageActionChatCreate"],
    [0xB5A1CE5A, "messageActionChatEditTitle"],
    [0x7FCB13A8, "messageActionChatEditPhoto"],
    [0x95E3FBEF, "messageActionChatDeletePhoto"],
    [0x15CEFD00, "messageActionChatAddUser"],
    [0xA43F30CC, "messageActionChatDeleteUser"],
    [0x031224C3, "messageActionChatJoinedByLink"],
    [0x95D2AC92, "messageActionChannelCreate"],
    [0xE1037F92, "messageActionChatMigrateTo"],
    [0xEA3948E9, "messageActionChannelMigrateFrom"],
    [0x94BD38ED, "messageActionPinMessage"],
    [0x9FBAB604, "messageActionHistoryClear"],
    [0x92A72876, "messageActionGameScore"],
    [0x8F31B327, "messageActionPaymentSentMe"],
    [0x96163F56, "messageActionPaymentSent"],
    [0x80E11A7F, "messageActionPhoneCall"],
    [0x4792929B, "messageActionScreenshotTaken"],
    [0xFAE69F56, "messageActionCustomAction"],
    [0xC516D679, "messageActionBotAllowed"],
    [0x1B287353, "messageActionSecureValuesSentMe"],
    [0xD95C6154, "messageActionSecureValuesSent"],
    [0xF3F25F76, "messageActionContactSignUp"],
    [0x98E0D697, "messageActionGeoProximityReached"],
    [0x7A0D7F42, "messageActionGroupCall"],
    [0x502F92F7, "messageActionInviteToGroupCall"],
    [0x3C134D7B, "messageActionSetMessagesTTL"],
    [0xB3A07661, "messageActionGroupCallScheduled"],
    [0xAA786345, "messageActionSetChatTheme"],
    [0xEBBCA3CB, "messageActionChatJoinedByRequest"],
    [0x47DD8079, "messageActionWebViewDataSentMe"],
    [0xB4C38CB5, "messageActionWebViewDataSent"],
    [0xC83D6AEC, "messageActionGiftPremium"],
    [0x0D999256, "messageActionTopicCreate"],
    [0xC0944820, "messageActionTopicEdit"],
    [0x57DE635E, "messageActionSuggestProfilePhoto"],
    [0x31518E9B, "messageActionRequestedPeer"],
    [0x5060A3F4, "messageActionSetChatWallPaper"],
    [0x678C2E09, "messageActionGiftCode"],
    [0x332BA9ED, "messageActionGiveawayLaunch"],
    [0x2A9FADC5, "messageActionGiveawayResults"],
    [0xCC02AA6D, "messageActionBoostApply"],
    [0x93B31848, "messageActionRequestedPeerSentMe"],
    [0xD58A08C6, "dialog"],
    [0x71BD134C, "dialogFolder"],
    [0x2331B22D, "photoEmpty"],
    [0xFB197A65, "photo"],
    [0x0E17E23C, "photoSizeEmpty"],
    [0x75C78E60, "photoSize"],
    [0x021E1AD6, "photoCachedSize"],
    [0xE0B0BC2E, "photoStrippedSize"],
    [0xFA3EFB95, "photoSizeProgressive"],
    [0xD8214D41, "photoPathSize"],
    [0x1117DD5F, "geoPointEmpty"],
    [0xB2A2F663, "geoPoint"],
    [0x5E002502, "auth.sentCode"],
    [0x2390FE44, "auth.sentCodeSuccess"],
    [0x2EA2C0D4, "auth.authorization"],
    [0x44747E9A, "auth.authorizationSignUpRequired"],
    [0xB434E2B8, "auth.exportedAuthorization"],
    [0xB8BC5B0C, "inputNotifyPeer"],
    [0x193B4417, "inputNotifyUsers"],
    [0x4A95E84E, "inputNotifyChats"],
    [0xB1DB7C7E, "inputNotifyBroadcasts"],
    [0x5C467992, "inputNotifyForumTopic"],
    [0xCACB6AE2, "inputPeerNotifySettings"],
    [0x99622C0C, "peerNotifySettings"],
    [0xACD66C5E, "peerSettings"],
    [0xA437C3ED, "wallPaper"],
    [0xE0804116, "wallPaperNoFile"],
    [0x58DBCAB8, "inputReportReasonSpam"],
    [0x1E22C78D, "inputReportReasonViolence"],
    [0x2E59D922, "inputReportReasonPornography"],
    [0xADF44EE3, "inputReportReasonChildAbuse"],
    [0xC1E4A2B1, "inputReportReasonOther"],
    [0x9B89F93A, "inputReportReasonCopyright"],
    [0xDBD4FEED, "inputReportReasonGeoIrrelevant"],
    [0xF5DDD6E7, "inputReportReasonFake"],
    [0x0A8EB2BE, "inputReportReasonIllegalDrugs"],
    [0x9EC7863D, "inputReportReasonPersonalDetails"],
    [0xCC997720, "userFull"],
    [0x145ADE0B, "contact"],
    [0xC13E3C50, "importedContact"],
    [0x16D9703B, "contactStatus"],
    [0xB74BA9D2, "contacts.contactsNotModified"],
    [0xEAE87E42, "contacts.contacts"],
    [0x77D01C3B, "contacts.importedContacts"],
    [0x0ADE1591, "contacts.blocked"],
    [0xE1664194, "contacts.blockedSlice"],
    [0x15BA6C40, "messages.dialogs"],
    [0x71E094F3, "messages.dialogsSlice"],
    [0xF0E3E596, "messages.dialogsNotModified"],
    [0x8C718E87, "messages.messages"],
    [0x3A54685E, "messages.messagesSlice"],
    [0xC776BA4E, "messages.channelMessages"],
    [0x74535F21, "messages.messagesNotModified"],
    [0x64FF9FD5, "messages.chats"],
    [0x9CD81144, "messages.chatsSlice"],
    [0xE5D7D19C, "messages.chatFull"],
    [0xB45C69D1, "messages.affectedHistory"],
    [0x57E2F66C, "inputMessagesFilterEmpty"],
    [0x9609A51C, "inputMessagesFilterPhotos"],
    [0x9FC00E65, "inputMessagesFilterVideo"],
    [0x56E9F0E4, "inputMessagesFilterPhotoVideo"],
    [0x9EDDF188, "inputMessagesFilterDocument"],
    [0x7EF0DD87, "inputMessagesFilterUrl"],
    [0xFFC86587, "inputMessagesFilterGif"],
    [0x50F5C392, "inputMessagesFilterVoice"],
    [0x3751B49E, "inputMessagesFilterMusic"],
    [0x3A20ECB8, "inputMessagesFilterChatPhotos"],
    [0x80C99768, "inputMessagesFilterPhoneCalls"],
    [0x7A7C17A4, "inputMessagesFilterRoundVoice"],
    [0xB549DA53, "inputMessagesFilterRoundVideo"],
    [0xC1F8E69A, "inputMessagesFilterMyMentions"],
    [0xE7026D0D, "inputMessagesFilterGeo"],
    [0xE062DB83, "inputMessagesFilterContacts"],
    [0x1BB00451, "inputMessagesFilterPinned"],
    [0x1F2B0AFD, "updateNewMessage"],
    [0x4E90BFD6, "updateMessageID"],
    [0xA20DB0E5, "updateDeleteMessages"],
    [0xC01E857F, "updateUserTyping"],
    [0x83487AF0, "updateChatUserTyping"],
    [0x07761198, "updateChatParticipants"],
    [0xE5BDF8DE, "updateUserStatus"],
    [0xA7848924, "updateUserName"],
    [0x8951ABEF, "updateNewAuthorization"],
    [0x12BCBD9A, "updateNewEncryptedMessage"],
    [0x1710F156, "updateEncryptedChatTyping"],
    [0xB4A2E88D, "updateEncryption"],
    [0x38FE25B7, "updateEncryptedMessagesRead"],
    [0x3DDA5451, "updateChatParticipantAdd"],
    [0xE32F3D77, "updateChatParticipantDelete"],
    [0x8E5E9873, "updateDcOptions"],
    [0xBEC268EF, "updateNotifySettings"],
    [0xEBE46819, "updateServiceNotification"],
    [0xEE3B272A, "updatePrivacy"],
    [0x05492A13, "updateUserPhone"],
    [0x9C974FDF, "updateReadHistoryInbox"],
    [0x2F2F21BF, "updateReadHistoryOutbox"],
    [0x7F891213, "updateWebPage"],
    [0xF8227181, "updateReadMessagesContents"],
    [0x108D941F, "updateChannelTooLong"],
    [0x635B4C09, "updateChannel"],
    [0x62BA04D9, "updateNewChannelMessage"],
    [0x922E6E10, "updateReadChannelInbox"],
    [0xC32D5B12, "updateDeleteChannelMessages"],
    [0xF226AC08, "updateChannelMessageViews"],
    [0xD7CA61A2, "updateChatParticipantAdmin"],
    [0x688A30AA, "updateNewStickerSet"],
    [0x0BB2D201, "updateStickerSetsOrder"],
    [0x31C24808, "updateStickerSets"],
    [0x9375341E, "updateSavedGifs"],
    [0x496F379C, "updateBotInlineQuery"],
    [0x12F12A07, "updateBotInlineSend"],
    [0x1B3F4DF7, "updateEditChannelMessage"],
    [0xB9CFC48D, "updateBotCallbackQuery"],
    [0xE40370A3, "updateEditMessage"],
    [0x691E9052, "updateInlineBotCallbackQuery"],
    [0xB75F99A9, "updateReadChannelOutbox"],
    [0x1B49EC6D, "updateDraftMessage"],
    [0x571D2742, "updateReadFeaturedStickers"],
    [0x9A422C20, "updateRecentStickers"],
    [0xA229DD06, "updateConfig"],
    [0x3354678F, "updatePtsChanged"],
    [0x2F2BA99F, "updateChannelWebPage"],
    [0x6E6FE51C, "updateDialogPinned"],
    [0xFA0F3CA2, "updatePinnedDialogs"],
    [0x8317C0C3, "updateBotWebhookJSON"],
    [0x9B9240A6, "updateBotWebhookJSONQuery"],
    [0xB5AEFD7D, "updateBotShippingQuery"],
    [0x8CAA9A96, "updateBotPrecheckoutQuery"],
    [0xAB0F6B1E, "updatePhoneCall"],
    [0x46560264, "updateLangPackTooLong"],
    [0x56022F4D, "updateLangPack"],
    [0xE511996D, "updateFavedStickers"],
    [0xEA29055D, "updateChannelReadMessagesContents"],
    [0x7084A7BE, "updateContactsReset"],
    [0xB23FC698, "updateChannelAvailableMessages"],
    [0xE16459C3, "updateDialogUnreadMark"],
    [0xACA1657B, "updateMessagePoll"],
    [0x54C01850, "updateChatDefaultBannedRights"],
    [0x19360DC0, "updateFolderPeers"],
    [0x6A7E7366, "updatePeerSettings"],
    [0xB4AFCFB0, "updatePeerLocated"],
    [0x39A51DFB, "updateNewScheduledMessage"],
    [0x90866CEE, "updateDeleteScheduledMessages"],
    [0x8216FBA3, "updateTheme"],
    [0x871FB939, "updateGeoLiveViewed"],
    [0x564FE691, "updateLoginToken"],
    [0x24F40E77, "updateMessagePollVote"],
    [0x26FFDE7D, "updateDialogFilter"],
    [0xA5D72105, "updateDialogFilterOrder"],
    [0x3504914F, "updateDialogFilters"],
    [0x2661BF09, "updatePhoneCallSignalingData"],
    [0xD29A27F4, "updateChannelMessageForwards"],
    [0xD6B19546, "updateReadChannelDiscussionInbox"],
    [0x695C9E7C, "updateReadChannelDiscussionOutbox"],
    [0xEBE07752, "updatePeerBlocked"],
    [0x8C88C923, "updateChannelUserTyping"],
    [0xED85EAB5, "updatePinnedMessages"],
    [0x5BB98608, "updatePinnedChannelMessages"],
    [0xF89A6A4E, "updateChat"],
    [0xF2EBDB4E, "updateGroupCallParticipants"],
    [0x14B24500, "updateGroupCall"],
    [0xBB9BB9A5, "updatePeerHistoryTTL"],
    [0xD087663A, "updateChatParticipant"],
    [0x985D3ABB, "updateChannelParticipant"],
    [0xC4870A49, "updateBotStopped"],
    [0x0B783982, "updateGroupCallConnection"],
    [0x4D712F2E, "updateBotCommands"],
    [0x7063C3DB, "updatePendingJoinRequests"],
    [0x11DFA986, "updateBotChatInviteRequester"],
    [0x5E1B3CB8, "updateMessageReactions"],
    [0x17B7A20B, "updateAttachMenuBots"],
    [0x1592B79D, "updateWebViewResultSent"],
    [0x14B85813, "updateBotMenuButton"],
    [0x74D8BE99, "updateSavedRingtones"],
    [0x0084CD5A, "updateTranscribedAudio"],
    [0xFB4C496C, "updateReadFeaturedEmojiStickers"],
    [0x28373599, "updateUserEmojiStatus"],
    [0x30F443DB, "updateRecentEmojiStatuses"],
    [0x6F7863F4, "updateRecentReactions"],
    [0x86FCCF85, "updateMoveStickerSetToTop"],
    [0xD5A41724, "updateMessageExtendedMedia"],
    [0x192EFBE3, "updateChannelPinnedTopic"],
    [0xFE198602, "updateChannelPinnedTopics"],
    [0x20529438, "updateUser"],
    [0xEC05B097, "updateAutoSaveSettings"],
    [0x75B3B798, "updateStory"],
    [0xF74E932B, "updateReadStories"],
    [0x1BF335B9, "updateStoryID"],
    [0x2C084DC1, "updateStoriesStealthMode"],
    [0x7D627683, "updateSentStoryReaction"],
    [0x904DD49C, "updateBotChatBoost"],
    [0x07B68920, "updateChannelViewForumAsMessages"],
    [0xAE3F101D, "updatePeerWallpaper"],
    [0xAC21D3CE, "updateBotMessageReaction"],
    [0x09CB7759, "updateBotMessageReactions"],
    [0xAEAF9E74, "updateSavedDialogPinned"],
    [0x686C85A6, "updatePinnedSavedDialogs"],
    [0x39C67432, "updateSavedReactionTags"],
    [0xF16269D4, "updateSmsJob"],
    [0xF9470AB2, "updateQuickReplies"],
    [0xF53DA717, "updateNewQuickReply"],
    [0x53E6F1EC, "updateDeleteQuickReply"],
    [0x3E050D0F, "updateQuickReplyMessage"],
    [0x566FE7CD, "updateDeleteQuickReplyMessages"],
    [0x8AE5C97A, "updateBotBusinessConnect"],
    [0x9DDB347C, "updateBotNewBusinessMessage"],
    [0x07DF587C, "updateBotEditBusinessMessage"],
    [0xA02A982E, "updateBotDeleteBusinessMessage"],
    [0x1824E40B, "updateNewStoryReaction"],
    [0xDFD961F5, "updateBroadcastRevenueTransactions"],
    [0x0FB85198, "updateStarsBalance"],
    [0x1EA2FDA7, "updateBusinessBotCallbackQuery"],
    [0xA584B019, "updateStarsRevenueStatus"],
    [0xA56C2A3E, "updates.state"],
    [0x5D75A138, "updates.differenceEmpty"],
    [0x00F49CA0, "updates.difference"],
    [0xA8FB1981, "updates.differenceSlice"],
    [0x4AFE8F6D, "updates.differenceTooLong"],
    [0xE317AF7E, "updatesTooLong"],
    [0x313BC7F8, "updateShortMessage"],
    [0x4D6DEEA5, "updateShortChatMessage"],
    [0x78D4DEC1, "updateShort"],
    [0x725B04C3, "updatesCombined"],
    [0x74AE4240, "updates"],
    [0x9015E101, "updateShortSentMessage"],
    [0x8DCA6AA5, "photos.photos"],
    [0x15051F54, "photos.photosSlice"],
    [0x20212CA8, "photos.photo"],
    [0x096A18D5, "upload.file"],
    [0xF18CDA44, "upload.fileCdnRedirect"],
    [0x18B7A10D, "dcOption"],
    [0xCC1A241E, "config"],
    [0x8E1A1775, "nearestDc"],
    [0xCCBBCE30, "help.appUpdate"],
    [0xC45A6536, "help.noAppUpdate"],
    [0x18CB9F78, "help.inviteText"],
    [0xAB7EC0A0, "encryptedChatEmpty"],
    [0x66B25953, "encryptedChatWaiting"],
    [0x48F1D94C, "encryptedChatRequested"],
    [0x61F0D4C7, "encryptedChat"],
    [0x1E1C7C45, "encryptedChatDiscarded"],
    [0xF141B5E1, "inputEncryptedChat"],
    [0xC21F497E, "encryptedFileEmpty"],
    [0xA8008CD8, "encryptedFile"],
    [0x1837C364, "inputEncryptedFileEmpty"],
    [0x64BD0306, "inputEncryptedFileUploaded"],
    [0x5A17B5E5, "inputEncryptedFile"],
    [0x2DC173C8, "inputEncryptedFileBigUploaded"],
    [0xED18C118, "encryptedMessage"],
    [0x23734B06, "encryptedMessageService"],
    [0xC0E24635, "messages.dhConfigNotModified"],
    [0x2C221EDD, "messages.dhConfig"],
    [0x560F8935, "messages.sentEncryptedMessage"],
    [0x9493FF32, "messages.sentEncryptedFile"],
    [0x72F0EAAE, "inputDocumentEmpty"],
    [0x1ABFB575, "inputDocument"],
    [0x36F8C871, "documentEmpty"],
    [0x8FD4C4D8, "document"],
    [0x17C6B5F6, "help.support"],
    [0x9FD40BD8, "notifyPeer"],
    [0xB4C83B4C, "notifyUsers"],
    [0xC007CEC3, "notifyChats"],
    [0xD612E8EF, "notifyBroadcasts"],
    [0x226E6308, "notifyForumTopic"],
    [0x16BF744E, "sendMessageTypingAction"],
    [0xFD5EC8F5, "sendMessageCancelAction"],
    [0xA187D66F, "sendMessageRecordVideoAction"],
    [0xE9763AEC, "sendMessageUploadVideoAction"],
    [0xD52F73F7, "sendMessageRecordAudioAction"],
    [0xF351D7AB, "sendMessageUploadAudioAction"],
    [0xD1D34A26, "sendMessageUploadPhotoAction"],
    [0xAA0CD9E4, "sendMessageUploadDocumentAction"],
    [0x176F8BA1, "sendMessageGeoLocationAction"],
    [0x628CBC6F, "sendMessageChooseContactAction"],
    [0xDD6A8F48, "sendMessageGamePlayAction"],
    [0x88F27FBC, "sendMessageRecordRoundAction"],
    [0x243E1C66, "sendMessageUploadRoundAction"],
    [0xD92C2285, "speakingInGroupCallAction"],
    [0xDBDA9246, "sendMessageHistoryImportAction"],
    [0xB05AC6B1, "sendMessageChooseStickerAction"],
    [0x25972BCB, "sendMessageEmojiInteraction"],
    [0xB665902E, "sendMessageEmojiInteractionSeen"],
    [0xB3134D9D, "contacts.found"],
    [0x4F96CB18, "inputPrivacyKeyStatusTimestamp"],
    [0xBDFB0426, "inputPrivacyKeyChatInvite"],
    [0xFABADC5F, "inputPrivacyKeyPhoneCall"],
    [0xDB9E70D2, "inputPrivacyKeyPhoneP2P"],
    [0xA4DD4C08, "inputPrivacyKeyForwards"],
    [0x5719BACC, "inputPrivacyKeyProfilePhoto"],
    [0x0352DAFA, "inputPrivacyKeyPhoneNumber"],
    [0xD1219BDD, "inputPrivacyKeyAddedByPhone"],
    [0xAEE69D68, "inputPrivacyKeyVoiceMessages"],
    [0x3823CC40, "inputPrivacyKeyAbout"],
    [0xD65A11CC, "inputPrivacyKeyBirthday"],
    [0xBC2EAB30, "privacyKeyStatusTimestamp"],
    [0x500E6DFA, "privacyKeyChatInvite"],
    [0x3D662B7B, "privacyKeyPhoneCall"],
    [0x39491CC8, "privacyKeyPhoneP2P"],
    [0x69EC56A3, "privacyKeyForwards"],
    [0x96151FED, "privacyKeyProfilePhoto"],
    [0xD19AE46D, "privacyKeyPhoneNumber"],
    [0x42FFD42B, "privacyKeyAddedByPhone"],
    [0x0697F414, "privacyKeyVoiceMessages"],
    [0xA486B761, "privacyKeyAbout"],
    [0x2000A518, "privacyKeyBirthday"],
    [0x0D09E07B, "inputPrivacyValueAllowContacts"],
    [0x184B35CE, "inputPrivacyValueAllowAll"],
    [0x131CC67F, "inputPrivacyValueAllowUsers"],
    [0x0BA52007, "inputPrivacyValueDisallowContacts"],
    [0xD66B66C9, "inputPrivacyValueDisallowAll"],
    [0x90110467, "inputPrivacyValueDisallowUsers"],
    [0x840649CF, "inputPrivacyValueAllowChatParticipants"],
    [0xE94F0F86, "inputPrivacyValueDisallowChatParticipants"],
    [0x2F453E49, "inputPrivacyValueAllowCloseFriends"],
    [0x77CDC9F1, "inputPrivacyValueAllowPremium"],
    [0xFFFE1BAC, "privacyValueAllowContacts"],
    [0x65427B82, "privacyValueAllowAll"],
    [0xB8905FB2, "privacyValueAllowUsers"],
    [0xF888FA1A, "privacyValueDisallowContacts"],
    [0x8B73E763, "privacyValueDisallowAll"],
    [0xE4621141, "privacyValueDisallowUsers"],
    [0x6B134E8E, "privacyValueAllowChatParticipants"],
    [0x41C87565, "privacyValueDisallowChatParticipants"],
    [0xF7E8D89B, "privacyValueAllowCloseFriends"],
    [0xECE9814B, "privacyValueAllowPremium"],
    [0x50A04E45, "account.privacyRules"],
    [0xB8D0AFDF, "accountDaysTTL"],
    [0x6C37C15C, "documentAttributeImageSize"],
    [0x11B58939, "documentAttributeAnimated"],
    [0x6319D612, "documentAttributeSticker"],
    [0xD38FF1C2, "documentAttributeVideo"],
    [0x9852F9C6, "documentAttributeAudio"],
    [0x15590068, "documentAttributeFilename"],
    [0x9801D2F7, "documentAttributeHasStickers"],
    [0xFD149899, "documentAttributeCustomEmoji"],
    [0xF1749A22, "messages.stickersNotModified"],
    [0x30A6EC7E, "messages.stickers"],
    [0x12B299D4, "stickerPack"],
    [0xE86602C3, "messages.allStickersNotModified"],
    [0xCDBBCEBB, "messages.allStickers"],
    [0x84D19185, "messages.affectedMessages"],
    [0x211A1788, "webPageEmpty"],
    [0xB0D13E47, "webPagePending"],
    [0xE89C45B2, "webPage"],
    [0x7311CA11, "webPageNotModified"],
    [0xAD01D61D, "authorization"],
    [0x4BFF8EA0, "account.authorizations"],
    [0x957B50FB, "account.password"],
    [0x9A5C33E5, "account.passwordSettings"],
    [0xC23727C9, "account.passwordInputSettings"],
    [0x137948A5, "auth.passwordRecovery"],
    [0xA384B779, "receivedNotifyMessage"],
    [0x0AB4A819, "chatInviteExported"],
    [0xED107AB7, "chatInvitePublicJoinRequests"],
    [0x5A686D7C, "chatInviteAlready"],
    [0xCDE0EC40, "chatInvite"],
    [0x61695CB0, "chatInvitePeek"],
    [0xFFB62B95, "inputStickerSetEmpty"],
    [0x9DE7A269, "inputStickerSetID"],
    [0x861CC8A0, "inputStickerSetShortName"],
    [0x028703C8, "inputStickerSetAnimatedEmoji"],
    [0xE67F520E, "inputStickerSetDice"],
    [0x0CDE3739, "inputStickerSetAnimatedEmojiAnimations"],
    [0xC88B3B02, "inputStickerSetPremiumGifts"],
    [0x04C4D4CE, "inputStickerSetEmojiGenericAnimations"],
    [0x29D0F5EE, "inputStickerSetEmojiDefaultStatuses"],
    [0x44C1F8E9, "inputStickerSetEmojiDefaultTopicIcons"],
    [0x49748553, "inputStickerSetEmojiChannelDefaultStatuses"],
    [0x2DD14EDC, "stickerSet"],
    [0x6E153F16, "messages.stickerSet"],
    [0xD3F924EB, "messages.stickerSetNotModified"],
    [0xC27AC8C7, "botCommand"],
    [0x8F300B57, "botInfo"],
    [0xA2FA4880, "keyboardButton"],
    [0x258AFF05, "keyboardButtonUrl"],
    [0x35BBDB6B, "keyboardButtonCallback"],
    [0xB16A6C29, "keyboardButtonRequestPhone"],
    [0xFC796B3F, "keyboardButtonRequestGeoLocation"],
    [0x93B9FBB5, "keyboardButtonSwitchInline"],
    [0x50F41CCF, "keyboardButtonGame"],
    [0xAFD93FBB, "keyboardButtonBuy"],
    [0x10B78D29, "keyboardButtonUrlAuth"],
    [0xD02E7FD4, "inputKeyboardButtonUrlAuth"],
    [0xBBC7515D, "keyboardButtonRequestPoll"],
    [0xE988037B, "inputKeyboardButtonUserProfile"],
    [0x308660C1, "keyboardButtonUserProfile"],
    [0x13767230, "keyboardButtonWebView"],
    [0xA0C0505C, "keyboardButtonSimpleWebView"],
    [0x53D7BFD8, "keyboardButtonRequestPeer"],
    [0xC9662D05, "inputKeyboardButtonRequestPeer"],
    [0x77608B83, "keyboardButtonRow"],
    [0xA03E5B85, "replyKeyboardHide"],
    [0x86B40B08, "replyKeyboardForceReply"],
    [0x85DD99D1, "replyKeyboardMarkup"],
    [0x48A30254, "replyInlineMarkup"],
    [0xBB92BA95, "messageEntityUnknown"],
    [0xFA04579D, "messageEntityMention"],
    [0x6F635B0D, "messageEntityHashtag"],
    [0x6CEF8AC7, "messageEntityBotCommand"],
    [0x6ED02538, "messageEntityUrl"],
    [0x64E475C2, "messageEntityEmail"],
    [0xBD610BC9, "messageEntityBold"],
    [0x826F8B60, "messageEntityItalic"],
    [0x28A20571, "messageEntityCode"],
    [0x73924BE0, "messageEntityPre"],
    [0x76A6D327, "messageEntityTextUrl"],
    [0xDC7B1140, "messageEntityMentionName"],
    [0x208E68C9, "inputMessageEntityMentionName"],
    [0x9B69E34B, "messageEntityPhone"],
    [0x4C4E743F, "messageEntityCashtag"],
    [0x9C4E7E8B, "messageEntityUnderline"],
    [0xBF0693D4, "messageEntityStrike"],
    [0x761E6AF4, "messageEntityBankCard"],
    [0x32CA960F, "messageEntitySpoiler"],
    [0xC8CF05F8, "messageEntityCustomEmoji"],
    [0xF1CCAAAC, "messageEntityBlockquote"],
    [0xEE8C1E86, "inputChannelEmpty"],
    [0xF35AEC28, "inputChannel"],
    [0x5B934F9D, "inputChannelFromMessage"],
    [0x7F077AD9, "contacts.resolvedPeer"],
    [0x0AE30253, "messageRange"],
    [0x3E11AFFB, "updates.channelDifferenceEmpty"],
    [0xA4BCC6FE, "updates.channelDifferenceTooLong"],
    [0x2064674E, "updates.channelDifference"],
    [0x94D42EE7, "channelMessagesFilterEmpty"],
    [0xCD77D957, "channelMessagesFilter"],
    [0xC00C07C0, "channelParticipant"],
    [0x35A8BFA7, "channelParticipantSelf"],
    [0x2FE601D3, "channelParticipantCreator"],
    [0x34C3BB53, "channelParticipantAdmin"],
    [0x6DF8014E, "channelParticipantBanned"],
    [0x1B03F006, "channelParticipantLeft"],
    [0xDE3F3C79, "channelParticipantsRecent"],
    [0xB4608969, "channelParticipantsAdmins"],
    [0xA3B54985, "channelParticipantsKicked"],
    [0xB0D1865B, "channelParticipantsBots"],
    [0x1427A5E1, "channelParticipantsBanned"],
    [0x0656AC4B, "channelParticipantsSearch"],
    [0xBB6AE88D, "channelParticipantsContacts"],
    [0xE04B5CEB, "channelParticipantsMentions"],
    [0x9AB0FEAF, "channels.channelParticipants"],
    [0xF0173FE9, "channels.channelParticipantsNotModified"],
    [0xDFB80317, "channels.channelParticipant"],
    [0x780A0310, "help.termsOfService"],
    [0xE8025CA2, "messages.savedGifsNotModified"],
    [0x84A02A0D, "messages.savedGifs"],
    [0x3380C786, "inputBotInlineMessageMediaAuto"],
    [0x3DCD7A87, "inputBotInlineMessageText"],
    [0x96929A85, "inputBotInlineMessageMediaGeo"],
    [0x417BBF11, "inputBotInlineMessageMediaVenue"],
    [0xA6EDBFFD, "inputBotInlineMessageMediaContact"],
    [0x4B425864, "inputBotInlineMessageGame"],
    [0xD7E78225, "inputBotInlineMessageMediaInvoice"],
    [0xBDDCC510, "inputBotInlineMessageMediaWebPage"],
    [0x88BF9319, "inputBotInlineResult"],
    [0xA8D864A7, "inputBotInlineResultPhoto"],
    [0xFFF8FDC4, "inputBotInlineResultDocument"],
    [0x4FA417F2, "inputBotInlineResultGame"],
    [0x764CF810, "botInlineMessageMediaAuto"],
    [0x8C7F65E2, "botInlineMessageText"],
    [0x051846FD, "botInlineMessageMediaGeo"],
    [0x8A86659C, "botInlineMessageMediaVenue"],
    [0x18D1CDC2, "botInlineMessageMediaContact"],
    [0x354A9B09, "botInlineMessageMediaInvoice"],
    [0x809AD9A6, "botInlineMessageMediaWebPage"],
    [0x11965F3A, "botInlineResult"],
    [0x17DB940B, "botInlineMediaResult"],
    [0xE021F2F6, "messages.botResults"],
    [0x5DAB1AF4, "exportedMessageLink"],
    [0x4E4DF4BB, "messageFwdHeader"],
    [0x72A3158C, "auth.codeTypeSms"],
    [0x741CD3E3, "auth.codeTypeCall"],
    [0x226CCEFB, "auth.codeTypeFlashCall"],
    [0xD61AD6EE, "auth.codeTypeMissedCall"],
    [0x06ED998C, "auth.codeTypeFragmentSms"],
    [0x3DBB5986, "auth.sentCodeTypeApp"],
    [0xC000BBA2, "auth.sentCodeTypeSms"],
    [0x5353E5A7, "auth.sentCodeTypeCall"],
    [0xAB03C6D9, "auth.sentCodeTypeFlashCall"],
    [0x82006484, "auth.sentCodeTypeMissedCall"],
    [0xF450F59B, "auth.sentCodeTypeEmailCode"],
    [0xA5491DEA, "auth.sentCodeTypeSetUpEmailRequired"],
    [0xD9565C39, "auth.sentCodeTypeFragmentSms"],
    [0x009FD736, "auth.sentCodeTypeFirebaseSms"],
    [0xA416AC81, "auth.sentCodeTypeSmsWord"],
    [0xB37794AF, "auth.sentCodeTypeSmsPhrase"],
    [0x36585EA4, "messages.botCallbackAnswer"],
    [0x26B5DDE6, "messages.messageEditData"],
    [0x890C3D89, "inputBotInlineMessageID"],
    [0xB6D915D7, "inputBotInlineMessageID64"],
    [0x3C20629F, "inlineBotSwitchPM"],
    [0x3371C354, "messages.peerDialogs"],
    [0xEDCDC05B, "topPeer"],
    [0xAB661B5B, "topPeerCategoryBotsPM"],
    [0x148677E2, "topPeerCategoryBotsInline"],
    [0x0637B7ED, "topPeerCategoryCorrespondents"],
    [0xBD17A14A, "topPeerCategoryGroups"],
    [0x161D9628, "topPeerCategoryChannels"],
    [0x1E76A78C, "topPeerCategoryPhoneCalls"],
    [0xA8406CA9, "topPeerCategoryForwardUsers"],
    [0xFBEEC0F0, "topPeerCategoryForwardChats"],
    [0xFB834291, "topPeerCategoryPeers"],
    [0xDE266EF5, "contacts.topPeersNotModified"],
    [0x70B772A8, "contacts.topPeers"],
    [0xB52C939D, "contacts.topPeersDisabled"],
    [0x1B0C841A, "draftMessageEmpty"],
    [0x2D65321F, "draftMessage"],
    [0xC6DC0C66, "messages.featuredStickersNotModified"],
    [0xBE382906, "messages.featuredStickers"],
    [0x0B17F890, "messages.recentStickersNotModified"],
    [0x88D37C56, "messages.recentStickers"],
    [0x4FCBA9C8, "messages.archivedStickers"],
    [0x38641628, "messages.stickerSetInstallResultSuccess"],
    [0x35E410A8, "messages.stickerSetInstallResultArchive"],
    [0x6410A5D2, "stickerSetCovered"],
    [0x3407E51B, "stickerSetMultiCovered"],
    [0x40D13C0E, "stickerSetFullCovered"],
    [0x77B15D1C, "stickerSetNoCovered"],
    [0xAED6DBB2, "maskCoords"],
    [0x4A992157, "inputStickeredMediaPhoto"],
    [0x0438865B, "inputStickeredMediaDocument"],
    [0xBDF9653B, "game"],
    [0x032C3E77, "inputGameID"],
    [0xC331E80A, "inputGameShortName"],
    [0x73A379EB, "highScore"],
    [0x9A3BFD99, "messages.highScores"],
    [0xDC3D824F, "textEmpty"],
    [0x744694E0, "textPlain"],
    [0x6724ABC4, "textBold"],
    [0xD912A59C, "textItalic"],
    [0xC12622C4, "textUnderline"],
    [0x9BF8BB95, "textStrike"],
    [0x6C3F19B9, "textFixed"],
    [0x3C2884C1, "textUrl"],
    [0xDE5A0DD6, "textEmail"],
    [0x7E6260D7, "textConcat"],
    [0xED6A8504, "textSubscript"],
    [0xC7FB5E01, "textSuperscript"],
    [0x034B8621, "textMarked"],
    [0x1CCB966A, "textPhone"],
    [0x081CCF4F, "textImage"],
    [0x35553762, "textAnchor"],
    [0x13567E8A, "pageBlockUnsupported"],
    [0x70ABC3FD, "pageBlockTitle"],
    [0x8FFA9A1F, "pageBlockSubtitle"],
    [0xBAAFE5E0, "pageBlockAuthorDate"],
    [0xBFD064EC, "pageBlockHeader"],
    [0xF12BB6E1, "pageBlockSubheader"],
    [0x467A0766, "pageBlockParagraph"],
    [0xC070D93E, "pageBlockPreformatted"],
    [0x48870999, "pageBlockFooter"],
    [0xDB20B188, "pageBlockDivider"],
    [0xCE0D37B0, "pageBlockAnchor"],
    [0xE4E88011, "pageBlockList"],
    [0x263D7C26, "pageBlockBlockquote"],
    [0x4F4456D3, "pageBlockPullquote"],
    [0x1759C560, "pageBlockPhoto"],
    [0x7C8FE7B6, "pageBlockVideo"],
    [0x39F23300, "pageBlockCover"],
    [0xA8718DC5, "pageBlockEmbed"],
    [0xF259A80B, "pageBlockEmbedPost"],
    [0x65A0FA4D, "pageBlockCollage"],
    [0x031F9590, "pageBlockSlideshow"],
    [0xEF1751B5, "pageBlockChannel"],
    [0x804361EA, "pageBlockAudio"],
    [0x1E148390, "pageBlockKicker"],
    [0xBF4DEA82, "pageBlockTable"],
    [0x9A8AE1E1, "pageBlockOrderedList"],
    [0x76768BED, "pageBlockDetails"],
    [0x16115A96, "pageBlockRelatedArticles"],
    [0xA44F3EF6, "pageBlockMap"],
    [0x85E42301, "phoneCallDiscardReasonMissed"],
    [0xE095C1A0, "phoneCallDiscardReasonDisconnect"],
    [0x57ADC690, "phoneCallDiscardReasonHangup"],
    [0xFAF7E8C9, "phoneCallDiscardReasonBusy"],
    [0x7D748D04, "dataJSON"],
    [0xCB296BF8, "labeledPrice"],
    [0x5DB95A15, "invoice"],
    [0xEA02C27E, "paymentCharge"],
    [0x1E8CAAEB, "postAddress"],
    [0x909C3F94, "paymentRequestedInfo"],
    [0xCDC27A1F, "paymentSavedCredentialsCard"],
    [0x1C570ED1, "webDocument"],
    [0xF9C8BCC6, "webDocumentNoProxy"],
    [0x9BED434D, "inputWebDocument"],
    [0xC239D686, "inputWebFileLocation"],
    [0x9F2221C9, "inputWebFileGeoPointLocation"],
    [0xF46FE924, "inputWebFileAudioAlbumThumbLocation"],
    [0x21E753BC, "upload.webFile"],
    [0xA0058751, "payments.paymentForm"],
    [0x7BF6B15C, "payments.paymentFormStars"],
    [0xD1451883, "payments.validatedRequestedInfo"],
    [0x4E5F810D, "payments.paymentResult"],
    [0xD8411139, "payments.paymentVerificationNeeded"],
    [0x70C4FE03, "payments.paymentReceipt"],
    [0xDABBF83A, "payments.paymentReceiptStars"],
    [0xFB8FE43C, "payments.savedInfo"],
    [0xC10EB2CF, "inputPaymentCredentialsSaved"],
    [0x3417D728, "inputPaymentCredentials"],
    [0x0AA1C39F, "inputPaymentCredentialsApplePay"],
    [0x8AC32801, "inputPaymentCredentialsGooglePay"],
    [0xDB64FD34, "account.tmpPassword"],
    [0xB6213CDF, "shippingOption"],
    [0x32DA9E9C, "inputStickerSetItem"],
    [0x1E36FDED, "inputPhoneCall"],
    [0x5366C915, "phoneCallEmpty"],
    [0xC5226F17, "phoneCallWaiting"],
    [0x14B0ED0C, "phoneCallRequested"],
    [0x3660C311, "phoneCallAccepted"],
    [0x30535AF5, "phoneCall"],
    [0x50CA4DE1, "phoneCallDiscarded"],
    [0x9CC123C7, "phoneConnection"],
    [0x635FE375, "phoneConnectionWebrtc"],
    [0xFC878FC8, "phoneCallProtocol"],
    [0xEC82E140, "phone.phoneCall"],
    [0xEEA8E46E, "upload.cdnFileReuploadNeeded"],
    [0xA99FCA4F, "upload.cdnFile"],
    [0xC982EABA, "cdnPublicKey"],
    [0x5725E40A, "cdnConfig"],
    [0xCAD181F6, "langPackString"],
    [0x6C47AC9F, "langPackStringPluralized"],
    [0x2979EEB2, "langPackStringDeleted"],
    [0xF385C1F6, "langPackDifference"],
    [0xEECA5CE3, "langPackLanguage"],
    [0xE6DFB825, "channelAdminLogEventActionChangeTitle"],
    [0x55188A2E, "channelAdminLogEventActionChangeAbout"],
    [0x6A4AFC38, "channelAdminLogEventActionChangeUsername"],
    [0x434BD2AF, "channelAdminLogEventActionChangePhoto"],
    [0x1B7907AE, "channelAdminLogEventActionToggleInvites"],
    [0x26AE0971, "channelAdminLogEventActionToggleSignatures"],
    [0xE9E82C18, "channelAdminLogEventActionUpdatePinned"],
    [0x709B2405, "channelAdminLogEventActionEditMessage"],
    [0x42E047BB, "channelAdminLogEventActionDeleteMessage"],
    [0x183040D3, "channelAdminLogEventActionParticipantJoin"],
    [0xF89777F2, "channelAdminLogEventActionParticipantLeave"],
    [0xE31C34D8, "channelAdminLogEventActionParticipantInvite"],
    [0xE6D83D7E, "channelAdminLogEventActionParticipantToggleBan"],
    [0xD5676710, "channelAdminLogEventActionParticipantToggleAdmin"],
    [0xB1C3CAA7, "channelAdminLogEventActionChangeStickerSet"],
    [0x5F5C95F1, "channelAdminLogEventActionTogglePreHistoryHidden"],
    [0x2DF5FC0A, "channelAdminLogEventActionDefaultBannedRights"],
    [0x8F079643, "channelAdminLogEventActionStopPoll"],
    [0x050C7AC8, "channelAdminLogEventActionChangeLinkedChat"],
    [0x0E6B76AE, "channelAdminLogEventActionChangeLocation"],
    [0x53909779, "channelAdminLogEventActionToggleSlowMode"],
    [0x23209745, "channelAdminLogEventActionStartGroupCall"],
    [0xDB9F9140, "channelAdminLogEventActionDiscardGroupCall"],
    [0xF92424D2, "channelAdminLogEventActionParticipantMute"],
    [0xE64429C0, "channelAdminLogEventActionParticipantUnmute"],
    [0x56D6A247, "channelAdminLogEventActionToggleGroupCallSetting"],
    [0xFE9FC158, "channelAdminLogEventActionParticipantJoinByInvite"],
    [0x5A50FCA4, "channelAdminLogEventActionExportedInviteDelete"],
    [0x410A134E, "channelAdminLogEventActionExportedInviteRevoke"],
    [0xE90EBB59, "channelAdminLogEventActionExportedInviteEdit"],
    [0x3E7F6847, "channelAdminLogEventActionParticipantVolume"],
    [0x6E941A38, "channelAdminLogEventActionChangeHistoryTTL"],
    [0xAFB6144A, "channelAdminLogEventActionParticipantJoinByRequest"],
    [0xCB2AC766, "channelAdminLogEventActionToggleNoForwards"],
    [0x278F2868, "channelAdminLogEventActionSendMessage"],
    [0xBE4E0EF8, "channelAdminLogEventActionChangeAvailableReactions"],
    [0xF04FB3A9, "channelAdminLogEventActionChangeUsernames"],
    [0x02CC6383, "channelAdminLogEventActionToggleForum"],
    [0x58707D28, "channelAdminLogEventActionCreateTopic"],
    [0xF06FE208, "channelAdminLogEventActionEditTopic"],
    [0xAE168909, "channelAdminLogEventActionDeleteTopic"],
    [0x5D8D353B, "channelAdminLogEventActionPinTopic"],
    [0x64F36DFC, "channelAdminLogEventActionToggleAntiSpam"],
    [0x5796E780, "channelAdminLogEventActionChangePeerColor"],
    [0x5E477B25, "channelAdminLogEventActionChangeProfilePeerColor"],
    [0x31BB5D52, "channelAdminLogEventActionChangeWallpaper"],
    [0x3EA9FEB1, "channelAdminLogEventActionChangeEmojiStatus"],
    [0x46D840AB, "channelAdminLogEventActionChangeEmojiStickerSet"],
    [0x1FAD68CD, "channelAdminLogEvent"],
    [0xED8AF74D, "channels.adminLogResults"],
    [0xEA107AE4, "channelAdminLogEventsFilter"],
    [0x5CE14175, "popularContact"],
    [0x9E8FA6D3, "messages.favedStickersNotModified"],
    [0x2CB51097, "messages.favedStickers"],
    [0x46E1D13D, "recentMeUrlUnknown"],
    [0xB92C09E2, "recentMeUrlUser"],
    [0xB2DA71D2, "recentMeUrlChat"],
    [0xEB49081D, "recentMeUrlChatInvite"],
    [0xBC0A57DC, "recentMeUrlStickerSet"],
    [0x0E0310D7, "help.recentMeUrls"],
    [0x1CC6E91F, "inputSingleMedia"],
    [0xA6F8F452, "webAuthorization"],
    [0xED56C9FC, "account.webAuthorizations"],
    [0xA676A322, "inputMessageID"],
    [0xBAD88395, "inputMessageReplyTo"],
    [0x86872538, "inputMessagePinned"],
    [0xACFA1A7E, "inputMessageCallbackQuery"],
    [0xFCAAFEB7, "inputDialogPeer"],
    [0x64600527, "inputDialogPeerFolder"],
    [0xE56DBF05, "dialogPeer"],
    [0x514519E2, "dialogPeerFolder"],
    [0x0D54B65D, "messages.foundStickerSetsNotModified"],
    [0x8AF09DD2, "messages.foundStickerSets"],
    [0xF39B035C, "fileHash"],
    [0x75588B3F, "inputClientProxy"],
    [0xE3309F7F, "help.termsOfServiceUpdateEmpty"],
    [0x28ECF961, "help.termsOfServiceUpdate"],
    [0x3334B0F0, "inputSecureFileUploaded"],
    [0x5367E5BE, "inputSecureFile"],
    [0x64199744, "secureFileEmpty"],
    [0x7D09C27E, "secureFile"],
    [0x8AEABEC3, "secureData"],
    [0x7D6099DD, "securePlainPhone"],
    [0x21EC5A5F, "securePlainEmail"],
    [0x9D2A81E3, "secureValueTypePersonalDetails"],
    [0x3DAC6A00, "secureValueTypePassport"],
    [0x06E425C4, "secureValueTypeDriverLicense"],
    [0xA0D0744B, "secureValueTypeIdentityCard"],
    [0x99A48F23, "secureValueTypeInternalPassport"],
    [0xCBE31E26, "secureValueTypeAddress"],
    [0xFC36954E, "secureValueTypeUtilityBill"],
    [0x89137C0D, "secureValueTypeBankStatement"],
    [0x8B883488, "secureValueTypeRentalAgreement"],
    [0x99E3806A, "secureValueTypePassportRegistration"],
    [0xEA02EC33, "secureValueTypeTemporaryRegistration"],
    [0xB320AADB, "secureValueTypePhone"],
    [0x8E3CA7EE, "secureValueTypeEmail"],
    [0x187FA0CA, "secureValue"],
    [0xDB21D0A7, "inputSecureValue"],
    [0xED1ECDB0, "secureValueHash"],
    [0xE8A40BD9, "secureValueErrorData"],
    [0x00BE3DFA, "secureValueErrorFrontSide"],
    [0x868A2AA5, "secureValueErrorReverseSide"],
    [0xE537CED6, "secureValueErrorSelfie"],
    [0x7A700873, "secureValueErrorFile"],
    [0x666220E9, "secureValueErrorFiles"],
    [0x869D758F, "secureValueError"],
    [0xA1144770, "secureValueErrorTranslationFile"],
    [0x34636DD8, "secureValueErrorTranslationFiles"],
    [0x33F0EA47, "secureCredentialsEncrypted"],
    [0xAD2E1CD8, "account.authorizationForm"],
    [0x811F854F, "account.sentEmailCode"],
    [0x66AFA166, "help.deepLinkInfoEmpty"],
    [0x6A4EE832, "help.deepLinkInfo"],
    [0x1142BD56, "savedPhoneContact"],
    [0x4DBA4501, "account.takeout"],
    [0xD45AB096, "passwordKdfAlgoUnknown"],
    [0x3A912D4A, "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"],
    [0x004A8537, "securePasswordKdfAlgoUnknown"],
    [0xBBF2DDA0, "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000"],
    [0x86471D92, "securePasswordKdfAlgoSHA512"],
    [0x1527BCAC, "secureSecretSettings"],
    [0x9880F658, "inputCheckPasswordEmpty"],
    [0xD27FF082, "inputCheckPasswordSRP"],
    [0x829D99DA, "secureRequiredType"],
    [0x027477B4, "secureRequiredTypeOneOf"],
    [0xBFB9F457, "help.passportConfigNotModified"],
    [0xA098D6AF, "help.passportConfig"],
    [0x1D1B1245, "inputAppEvent"],
    [0xC0DE1BD9, "jsonObjectValue"],
    [0x3F6D7B68, "jsonNull"],
    [0xC7345E6A, "jsonBool"],
    [0x2BE0DFA4, "jsonNumber"],
    [0xB71E767A, "jsonString"],
    [0xF7444763, "jsonArray"],
    [0x99C1D49D, "jsonObject"],
    [0x34566B6A, "pageTableCell"],
    [0xE0C0C5E5, "pageTableRow"],
    [0x6F747657, "pageCaption"],
    [0xB92FB6CD, "pageListItemText"],
    [0x25E073FC, "pageListItemBlocks"],
    [0x5E068047, "pageListOrderedItemText"],
    [0x98DD8936, "pageListOrderedItemBlocks"],
    [0xB390DC08, "pageRelatedArticle"],
    [0x98657F0D, "page"],
    [0x8C05F1C9, "help.supportName"],
    [0xF3AE2EED, "help.userInfoEmpty"],
    [0x01EB3758, "help.userInfo"],
    [0xFF16E2CA, "pollAnswer"],
    [0x58747131, "poll"],
    [0x3B6DDAD2, "pollAnswerVoters"],
    [0x7ADF2420, "pollResults"],
    [0xF041E250, "chatOnlines"],
    [0x47A971E0, "statsURL"],
    [0x5FB224D5, "chatAdminRights"],
    [0x9F120418, "chatBannedRights"],
    [0xE630B979, "inputWallPaper"],
    [0x72091C80, "inputWallPaperSlug"],
    [0x967A462E, "inputWallPaperNoFile"],
    [0x1C199183, "account.wallPapersNotModified"],
    [0xCDC3858C, "account.wallPapers"],
    [0xAD253D78, "codeSettings"],
    [0x372EFCD0, "wallPaperSettings"],
    [0xBAA57628, "autoDownloadSettings"],
    [0x63CACF26, "account.autoDownloadSettings"],
    [0xD5B3B9F9, "emojiKeyword"],
    [0x236DF622, "emojiKeywordDeleted"],
    [0x5CC761BD, "emojiKeywordsDifference"],
    [0xA575739D, "emojiURL"],
    [0xB3FB5361, "emojiLanguage"],
    [0xFF544E65, "folder"],
    [0xFBD2C296, "inputFolderPeer"],
    [0xE9BAA668, "folderPeer"],
    [0xE844EBFF, "messages.searchCounter"],
    [0x92D33A0E, "urlAuthResultRequest"],
    [0x8F8C0E4E, "urlAuthResultAccepted"],
    [0xA9D6DB1F, "urlAuthResultDefault"],
    [0xBFB5AD8B, "channelLocationEmpty"],
    [0x209B82DB, "channelLocation"],
    [0xCA461B5D, "peerLocated"],
    [0xF8EC284B, "peerSelfLocated"],
    [0xD072ACB4, "restrictionReason"],
    [0x3C5693E9, "inputTheme"],
    [0xF5890DF1, "inputThemeSlug"],
    [0xA00E67D6, "theme"],
    [0xF41EB622, "account.themesNotModified"],
    [0x9A3D8C6D, "account.themes"],
    [0x629F1980, "auth.loginToken"],
    [0x068E9916, "auth.loginTokenMigrateTo"],
    [0x390D5C5E, "auth.loginTokenSuccess"],
    [0x57E28221, "account.contentSettings"],
    [0xA927FEC5, "messages.inactiveChats"],
    [0xC3A12462, "baseThemeClassic"],
    [0xFBD81688, "baseThemeDay"],
    [0xB7B31EA8, "baseThemeNight"],
    [0x6D5F77EE, "baseThemeTinted"],
    [0x5B11125A, "baseThemeArctic"],
    [0x8FDE504F, "inputThemeSettings"],
    [0xFA58B6D4, "themeSettings"],
    [0x54B56617, "webPageAttributeTheme"],
    [0x2E94C3E7, "webPageAttributeStory"],
    [0x50CC03D3, "webPageAttributeStickerSet"],
    [0x4899484E, "messages.votesList"],
    [0xF568028A, "bankCardOpenUrl"],
    [0x3E24E573, "payments.bankCardData"],
    [0x5FB5523B, "dialogFilter"],
    [0x363293AE, "dialogFilterDefault"],
    [0x9FE28EA4, "dialogFilterChatlist"],
    [0x77744D4A, "dialogFilterSuggested"],
    [0xB637EDAF, "statsDateRangeDays"],
    [0xCB43ACDE, "statsAbsValueAndPrev"],
    [0xCBCE2FE0, "statsPercentValue"],
    [0x4A27EB2D, "statsGraphAsync"],
    [0xBEDC9822, "statsGraphError"],
    [0x8EA464B6, "statsGraph"],
    [0x396CA5FC, "stats.broadcastStats"],
    [0x98F6AC75, "help.promoDataEmpty"],
    [0x8C39793F, "help.promoData"],
    [0xDE33B094, "videoSize"],
    [0xF85C413C, "videoSizeEmojiMarkup"],
    [0x0DA082FE, "videoSizeStickerMarkup"],
    [0x9D04AF9B, "statsGroupTopPoster"],
    [0xD7584C87, "statsGroupTopAdmin"],
    [0x535F779D, "statsGroupTopInviter"],
    [0xEF7FF916, "stats.megagroupStats"],
    [0x734C4CCB, "globalPrivacySettings"],
    [0x4203C5EF, "help.countryCode"],
    [0xC3878E23, "help.country"],
    [0x93CC1F32, "help.countriesListNotModified"],
    [0x87D0759E, "help.countriesList"],
    [0x455B853D, "messageViews"],
    [0xB6C4F543, "messages.messageViews"],
    [0xA6341782, "messages.discussionMessage"],
    [0xAFBC09DB, "messageReplyHeader"],
    [0x0E5AF939, "messageReplyStoryHeader"],
    [0x83D60FC2, "messageReplies"],
    [0xE8FD8014, "peerBlocked"],
    [0x7FE91C14, "stats.messageStats"],
    [0x7780BCB4, "groupCallDiscarded"],
    [0xD597650C, "groupCall"],
    [0xD8AA840F, "inputGroupCall"],
    [0xEBA636FE, "groupCallParticipant"],
    [0x9E727AAD, "phone.groupCall"],
    [0xF47751B6, "phone.groupParticipants"],
    [0x3081ED9D, "inlineQueryPeerTypeSameBotPM"],
    [0x833C0FAC, "inlineQueryPeerTypePM"],
    [0xD766C50A, "inlineQueryPeerTypeChat"],
    [0x5EC4BE43, "inlineQueryPeerTypeMegagroup"],
    [0x6334EE9A, "inlineQueryPeerTypeBroadcast"],
    [0x0E3B2D0C, "inlineQueryPeerTypeBotPM"],
    [0x1662AF0B, "messages.historyImport"],
    [0x5E0FB7B9, "messages.historyImportParsed"],
    [0xEF8D3E6C, "messages.affectedFoundMessages"],
    [0x8C5ADFD9, "chatInviteImporter"],
    [0xBDC62DCC, "messages.exportedChatInvites"],
    [0x1871BE50, "messages.exportedChatInvite"],
    [0x222600EF, "messages.exportedChatInviteReplaced"],
    [0x81B6B00A, "messages.chatInviteImporters"],
    [0xF2ECEF23, "chatAdminWithInvites"],
    [0xB69B72D7, "messages.chatAdminsWithInvites"],
    [0xA24DE717, "messages.checkedHistoryImportPeer"],
    [0xAFE5623F, "phone.joinAsPeers"],
    [0x204BD158, "phone.exportedGroupCallInvite"],
    [0xDCB118B7, "groupCallParticipantVideoSourceGroup"],
    [0x67753AC8, "groupCallParticipantVideo"],
    [0x85FEA03F, "stickers.suggestedShortName"],
    [0x2F6CB2AB, "botCommandScopeDefault"],
    [0x3C4F04D8, "botCommandScopeUsers"],
    [0x6FE1A881, "botCommandScopeChats"],
    [0xB9AA606A, "botCommandScopeChatAdmins"],
    [0xDB9D897D, "botCommandScopePeer"],
    [0x3FD863D1, "botCommandScopePeerAdmins"],
    [0x0A1321F3, "botCommandScopePeerUser"],
    [0xE3779861, "account.resetPasswordFailedWait"],
    [0xE9EFFC7D, "account.resetPasswordRequestedWait"],
    [0xE926D63E, "account.resetPasswordOk"],
    [0xBDEDF566, "sponsoredMessage"],
    [0xC9EE1D87, "messages.sponsoredMessages"],
    [0x1839490F, "messages.sponsoredMessagesEmpty"],
    [0xC9B0539F, "searchResultsCalendarPeriod"],
    [0x147EE23C, "messages.searchResultsCalendar"],
    [0x7F648B67, "searchResultPosition"],
    [0x53B22BAF, "messages.searchResultsPositions"],
    [0xF496B0C6, "channels.sendAsPeers"],
    [0x3B6D152E, "users.userFull"],
    [0x6880B94D, "messages.peerSettings"],
    [0xC3A2835F, "auth.loggedOut"],
    [0xA3D1CB80, "reactionCount"],
    [0x4F2B9479, "messageReactions"],
    [0x31BD492D, "messages.messageReactionsList"],
    [0xC077EC01, "availableReaction"],
    [0x9F071957, "messages.availableReactionsNotModified"],
    [0x768E3AAD, "messages.availableReactions"],
    [0x8C79B63C, "messagePeerReaction"],
    [0x80EB48AF, "groupCallStreamChannel"],
    [0xD0E482B2, "phone.groupCallStreamChannels"],
    [0x2DBF3432, "phone.groupCallStreamRtmpUrl"],
    [0x4576F3F0, "attachMenuBotIconColor"],
    [0xB2A7386B, "attachMenuBotIcon"],
    [0xD90D8DFE, "attachMenuBot"],
    [0xF1D88A5C, "attachMenuBotsNotModified"],
    [0x3C4301C0, "attachMenuBots"],
    [0x93BF667F, "attachMenuBotsBot"],
    [0x4D22FF98, "webViewResultUrl"],
    [0x0C94511C, "webViewMessageSent"],
    [0x7533A588, "botMenuButtonDefault"],
    [0x4258C205, "botMenuButtonCommands"],
    [0xC7B57CE6, "botMenuButton"],
    [0xFBF6E8B1, "account.savedRingtonesNotModified"],
    [0xC1E92CC5, "account.savedRingtones"],
    [0x97E8BEBE, "notificationSoundDefault"],
    [0x6F0C34DF, "notificationSoundNone"],
    [0x830B9AE4, "notificationSoundLocal"],
    [0xFF6C8049, "notificationSoundRingtone"],
    [0xB7263F6D, "account.savedRingtone"],
    [0x1F307EB7, "account.savedRingtoneConverted"],
    [0x7D6BE90E, "attachMenuPeerTypeSameBotPM"],
    [0xC32BFA1A, "attachMenuPeerTypeBotPM"],
    [0xF146D31F, "attachMenuPeerTypePM"],
    [0x0509113F, "attachMenuPeerTypeChat"],
    [0x7BFBDEFC, "attachMenuPeerTypeBroadcast"],
    [0xC5B56859, "inputInvoiceMessage"],
    [0xC326CAEF, "inputInvoiceSlug"],
    [0x98986C0D, "inputInvoicePremiumGiftCode"],
    [0x1DA33AD8, "inputInvoiceStars"],
    [0xAED0CBD9, "payments.exportedInvoice"],
    [0xCFB9D957, "messages.transcribedAudio"],
    [0x5334759C, "help.premiumPromo"],
    [0xA6751E66, "inputStorePaymentPremiumSubscription"],
    [0x616F7FE8, "inputStorePaymentGiftPremium"],
    [0xA3805F3F, "inputStorePaymentPremiumGiftCode"],
    [0x160544CA, "inputStorePaymentPremiumGiveaway"],
    [0x4F0EE8DF, "inputStorePaymentStars"],
    [0x74C34319, "premiumGiftOption"],
    [0x88F8F21B, "paymentFormMethod"],
    [0x2DE11AAE, "emojiStatusEmpty"],
    [0x929B619D, "emojiStatus"],
    [0xFA30A8C7, "emojiStatusUntil"],
    [0xD08CE645, "account.emojiStatusesNotModified"],
    [0x90C467D1, "account.emojiStatuses"],
    [0x79F5D419, "reactionEmpty"],
    [0x1B2286B8, "reactionEmoji"],
    [0x8935FC73, "reactionCustomEmoji"],
    [0xEAFC32BC, "chatReactionsNone"],
    [0x52928BCA, "chatReactionsAll"],
    [0x661D4037, "chatReactionsSome"],
    [0xB06FDBDF, "messages.reactionsNotModified"],
    [0xEAFDF716, "messages.reactions"],
    [0x4345BE73, "emailVerifyPurposeLoginSetup"],
    [0x527D22EB, "emailVerifyPurposeLoginChange"],
    [0xBBF51685, "emailVerifyPurposePassport"],
    [0x922E55A9, "emailVerificationCode"],
    [0xDB909EC2, "emailVerificationGoogle"],
    [0x96D074FD, "emailVerificationApple"],
    [0x2B96CD1B, "account.emailVerified"],
    [0xE1BB0D61, "account.emailVerifiedLogin"],
    [0x5F2D1DF2, "premiumSubscriptionOption"],
    [0xB81C7034, "sendAsPeer"],
    [0xAD628CC8, "messageExtendedMediaPreview"],
    [0xEE479C64, "messageExtendedMedia"],
    [0xFCFEB29C, "stickerKeyword"],
    [0xB4073647, "username"],
    [0x023F109B, "forumTopicDeleted"],
    [0x71701DA9, "forumTopic"],
    [0x367617D3, "messages.forumTopics"],
    [0x43B46B20, "defaultHistoryTTL"],
    [0x41BF109B, "exportedContactToken"],
    [0x5F3B8A00, "requestPeerTypeUser"],
    [0xC9F06E1B, "requestPeerTypeChat"],
    [0x339BEF6C, "requestPeerTypeBroadcast"],
    [0x481EADFA, "emojiListNotModified"],
    [0x7A1E11D1, "emojiList"],
    [0x7A9ABDA9, "emojiGroup"],
    [0x80D26CC7, "emojiGroupGreeting"],
    [0x093BCF34, "emojiGroupPremium"],
    [0x6FB4AD87, "messages.emojiGroupsNotModified"],
    [0x881FB94B, "messages.emojiGroups"],
    [0x751F3146, "textWithEntities"],
    [0x33DB32F8, "messages.translateResult"],
    [0xC84834CE, "autoSaveSettings"],
    [0x81602D47, "autoSaveException"],
    [0x4C3E069D, "account.autoSaveSettings"],
    [0x7CDE641D, "help.appConfigNotModified"],
    [0xDD18782E, "help.appConfig"],
    [0xA920BD7A, "inputBotAppID"],
    [0x908C0407, "inputBotAppShortName"],
    [0x5DA674B7, "botAppNotModified"],
    [0x95FCD1D6, "botApp"],
    [0xEB50ADF5, "messages.botApp"],
    [0xB57295D5, "inlineBotWebView"],
    [0x4A4FF172, "readParticipantDate"],
    [0xF3E0DA33, "inputChatlistDialogFilter"],
    [0x0C5181AC, "exportedChatlistInvite"],
    [0x10E6E3A6, "chatlists.exportedChatlistInvite"],
    [0x10AB6DC7, "chatlists.exportedInvites"],
    [0xFA87F659, "chatlists.chatlistInviteAlready"],
    [0x1DCD839D, "chatlists.chatlistInvite"],
    [0x93BD878D, "chatlists.chatlistUpdates"],
    [0xE8A775B0, "bots.botInfo"],
    [0xB6CC2D5C, "messagePeerVote"],
    [0x74CDA504, "messagePeerVoteInputOption"],
    [0x4628F6E6, "messagePeerVoteMultiple"],
    [0x8D595CD6, "storyViews"],
    [0x51E6EE4F, "storyItemDeleted"],
    [0xFFADC913, "storyItemSkipped"],
    [0x79B26A24, "storyItem"],
    [0x1158FE3E, "stories.allStoriesNotModified"],
    [0x6EFC5E81, "stories.allStories"],
    [0x63C3DD0A, "stories.stories"],
    [0xB0BDEAC5, "storyView"],
    [0x9083670B, "storyViewPublicForward"],
    [0xBD74CF49, "storyViewPublicRepost"],
    [0x59D78FC5, "stories.storyViewsList"],
    [0xDE9EED1D, "stories.storyViews"],
    [0x22C0F6D5, "inputReplyToMessage"],
    [0x5881323A, "inputReplyToStory"],
    [0x3FC9053B, "exportedStoryLink"],
    [0x712E27FD, "storiesStealthMode"],
    [0xCFC9E002, "mediaAreaCoordinates"],
    [0xBE82DB9C, "mediaAreaVenue"],
    [0xB282217F, "inputMediaAreaVenue"],
    [0xCAD5452D, "mediaAreaGeoPoint"],
    [0x14455871, "mediaAreaSuggestedReaction"],
    [0x770416AF, "mediaAreaChannelPost"],
    [0x2271F2BF, "inputMediaAreaChannelPost"],
    [0x37381085, "mediaAreaUrl"],
    [0x9A35E999, "peerStories"],
    [0xCAE68768, "stories.peerStories"],
    [0xFD5E12BD, "messages.webPage"],
    [0x257E962B, "premiumGiftCodeOption"],
    [0x284A1096, "payments.checkedGiftCode"],
    [0x4367DAA0, "payments.giveawayInfo"],
    [0x00CD5570, "payments.giveawayInfoResults"],
    [0xB2539D54, "prepaidGiveaway"],
    [0x2A1C8C71, "boost"],
    [0x86F8613C, "premium.boostsList"],
    [0xC448415C, "myBoost"],
    [0x9AE228E2, "premium.myBoosts"],
    [0x4959427A, "premium.boostsStatus"],
    [0xB826E150, "storyFwdHeader"],
    [0xE7058E7F, "postInteractionCountersMessage"],
    [0x8A480E27, "postInteractionCountersStory"],
    [0x50CD067C, "stats.storyStats"],
    [0x01F2BF4A, "publicForwardMessage"],
    [0xEDF3ADD0, "publicForwardStory"],
    [0x93037E20, "stats.publicForwards"],
    [0xB54B5ACF, "peerColor"],
    [0x26219A58, "help.peerColorSet"],
    [0x767D61EB, "help.peerColorProfileSet"],
    [0xADEC6EBE, "help.peerColorOption"],
    [0x2BA1F5CE, "help.peerColorsNotModified"],
    [0x00F8ED08, "help.peerColors"],
    [0x6090D6D5, "storyReaction"],
    [0xBBAB2643, "storyReactionPublicForward"],
    [0xCFCD0F13, "storyReactionPublicRepost"],
    [0xAA5F789C, "stories.storyReactionsList"],
    [0xBD87CB6C, "savedDialog"],
    [0xF83AE221, "messages.savedDialogs"],
    [0x44BA9DD9, "messages.savedDialogsSlice"],
    [0xC01F6FE8, "messages.savedDialogsNotModified"],
    [0xCB6FF828, "savedReactionTag"],
    [0x889B59EF, "messages.savedReactionTagsNotModified"],
    [0x3259950A, "messages.savedReactionTags"],
    [0x3BB842AC, "outboxReadDate"],
    [0xDC8B44CF, "smsjobs.eligibleToJoin"],
    [0x2AEE9191, "smsjobs.status"],
    [0xE6A1EEB8, "smsJob"],
    [0x120B1AB9, "businessWeeklyOpen"],
    [0x8C92B098, "businessWorkHours"],
    [0xAC5C1AF7, "businessLocation"],
    [0x6F8B32AA, "inputBusinessRecipients"],
    [0x21108FF7, "businessRecipients"],
    [0xC9B9E2B9, "businessAwayMessageScheduleAlways"],
    [0xC3F2F501, "businessAwayMessageScheduleOutsideWorkHours"],
    [0xCC4D9ECC, "businessAwayMessageScheduleCustom"],
    [0x0194CB3B, "inputBusinessGreetingMessage"],
    [0xE519ABAB, "businessGreetingMessage"],
    [0x832175E0, "inputBusinessAwayMessage"],
    [0xEF156A5C, "businessAwayMessage"],
    [0xFF9289F5, "timezone"],
    [0x970708CC, "help.timezonesListNotModified"],
    [0x7B74ED71, "help.timezonesList"],
    [0x0697102B, "quickReply"],
    [0x24596D41, "inputQuickReplyShortcut"],
    [0x01190CF1, "inputQuickReplyShortcutId"],
    [0xC68D6695, "messages.quickReplies"],
    [0x5F91EB5B, "messages.quickRepliesNotModified"],
    [0xBD068601, "connectedBot"],
    [0x17D7F87B, "account.connectedBots"],
    [0x2AD93719, "messages.dialogFilters"],
    [0x6C8E1E06, "birthday"],
    [0x896433B4, "botBusinessConnection"],
    [0x09C469CD, "inputBusinessIntro"],
    [0x5A0A066D, "businessIntro"],
    [0xFAFF629D, "messages.myStickers"],
    [0xE39460A9, "inputCollectibleUsername"],
    [0xA2E214A4, "inputCollectiblePhone"],
    [0x6EBDFF91, "fragment.collectibleInfo"],
    [0xC4E5921E, "inputBusinessBotRecipients"],
    [0xB88CF373, "businessBotRecipients"],
    [0x1D998733, "contactBirthday"],
    [0x114FF30D, "contacts.contactBirthdays"],
    [0x628C9224, "missingInvitee"],
    [0x7F5DEFA6, "messages.invitedUsers"],
    [0x11679FA7, "inputBusinessChatLink"],
    [0xB4AE666F, "businessChatLink"],
    [0xEC43A2D1, "account.businessChatLinks"],
    [0x9A23AF21, "account.resolvedBusinessChatLinks"],
    [0xD62FF46A, "requestedPeerUser"],
    [0x7307544F, "requestedPeerChat"],
    [0x8BA403E4, "requestedPeerChannel"],
    [0x430D3150, "sponsoredMessageReportOption"],
    [0x846F9E42, "channels.sponsoredMessageReportResultChooseOption"],
    [0x3E3BCF2F, "channels.sponsoredMessageReportResultAdsHidden"],
    [0xAD798849, "channels.sponsoredMessageReportResultReported"],
    [0x5407E297, "stats.broadcastRevenueStats"],
    [0xEC659737, "stats.broadcastRevenueWithdrawalUrl"],
    [0x557E2CC4, "broadcastRevenueTransactionProceeds"],
    [0x5A590978, "broadcastRevenueTransactionWithdrawal"],
    [0x42D30D2E, "broadcastRevenueTransactionRefund"],
    [0x87158466, "stats.broadcastRevenueTransactions"],
    [0xBAC3A61A, "reactionNotificationsFromContacts"],
    [0x4B9E22A0, "reactionNotificationsFromAll"],
    [0x56E34970, "reactionsNotifySettings"],
    [0x8438F1C6, "broadcastRevenueBalances"],
    [0x93C3E27E, "availableEffect"],
    [0xD1ED9A5B, "messages.availableEffectsNotModified"],
    [0xBDDB616E, "messages.availableEffects"],
    [0xB89BFCCF, "factCheck"],
    [0x95F2BFE4, "starsTransactionPeerUnsupported"],
    [0xB457B375, "starsTransactionPeerAppStore"],
    [0x7B560A0B, "starsTransactionPeerPlayMarket"],
    [0x250DBAF8, "starsTransactionPeerPremiumBot"],
    [0xE92FD902, "starsTransactionPeerFragment"],
    [0xD80DA15D, "starsTransactionPeer"],
    [0x60682812, "starsTransactionPeerAds"],
    [0x0BD915C0, "starsTopupOption"],
    [0x2DB5418F, "starsTransaction"],
    [0x8CF4EE60, "payments.starsStatus"],
    [0xE87ACBC0, "foundStory"],
    [0xE2DE7737, "stories.foundStories"],
    [0xDE4C5D93, "geoPointAddress"],
    [0x79342946, "starsRevenueStatus"],
    [0xC92BB73B, "payments.starsRevenueStats"],
    [0x1DAB80B7, "payments.starsRevenueWithdrawalUrl"],
    [0x394E7F21, "payments.starsRevenueAdsAccountUrl"],
    [0x206AE6D1, "inputStarsTransaction"],
]);
export const getTypeName = map.get.bind(map);
export const flags = Symbol();
const enums = new Map([
    ["ResPQ", ["resPQ"]],
    ["P_Q_inner_data", ["p_q_inner_data_dc", "p_q_inner_data_temp_dc"]],
    ["Server_DH_Params", ["server_DH_params_ok"]],
    ["Server_DH_inner_data", ["server_DH_inner_data"]],
    ["Client_DH_Inner_Data", ["client_DH_inner_data"]],
    ["Set_client_DH_params_answer", ["dh_gen_ok", "dh_gen_retry", "dh_gen_fail"]],
    ["BindAuthKeyInner", ["bind_auth_key_inner"]],
    ["RpcError", ["rpc_error"]],
    ["RpcDropAnswer", ["rpc_answer_unknown", "rpc_answer_dropped_running", "rpc_answer_dropped"]],
    ["FutureSalt", ["future_salt"]],
    ["FutureSalts", ["future_salts"]],
    ["Pong", ["pong"]],
    ["DestroySessionRes", ["destroy_session_ok", "destroy_session_none"]],
    ["NewSession", ["new_session_created"]],
    ["Object", ["gzip_packed"]],
    ["MsgsAck", ["msgs_ack"]],
    ["BadMsgNotification", ["bad_msg_notification", "bad_server_salt"]],
    ["MsgResendReq", ["msg_resend_req"]],
    ["MsgsStateReq", ["msgs_state_req"]],
    ["MsgsStateInfo", ["msgs_state_info"]],
    ["MsgsAllInfo", ["msgs_all_info"]],
    ["MsgDetailedInfo", ["msg_detailed_info", "msg_new_detailed_info"]],
    ["DestroyAuthKeyRes", ["destroy_auth_key_ok", "destroy_auth_key_none", "destroy_auth_key_fail"]],
    ["HttpWait", ["http_wait"]],
    ["True", ["true"]],
    ["Error", ["error"]],
    ["IpPort", ["ipPort", "ipPortSecret"]],
    ["AccessPointRule", ["accessPointRule"]],
    ["help.ConfigSimple", ["help.configSimple"]],
    ["InputFileLocation", ["inputPeerPhotoFileLocationLegacy", "inputStickerSetThumbLegacy", "inputFileLocation", "inputEncryptedFileLocation", "inputDocumentFileLocation", "inputSecureFileLocation", "inputTakeoutFileLocation", "inputPhotoFileLocation", "inputPhotoLegacyFileLocation", "inputPeerPhotoFileLocation", "inputStickerSetThumb", "inputGroupCallStream"]],
    ["InputPeer", ["inputPeerEmpty", "inputPeerSelf", "inputPeerChat", "inputPeerUser", "inputPeerChannel", "inputPeerUserFromMessage", "inputPeerChannelFromMessage"]],
    ["InputUser", ["inputUserEmpty", "inputUserSelf", "inputUser", "inputUserFromMessage"]],
    ["InputContact", ["inputPhoneContact"]],
    ["InputFile", ["inputFile", "inputFileBig"]],
    ["InputMedia", ["inputMediaEmpty", "inputMediaUploadedPhoto", "inputMediaPhoto", "inputMediaGeoPoint", "inputMediaContact", "inputMediaUploadedDocument", "inputMediaDocument", "inputMediaVenue", "inputMediaPhotoExternal", "inputMediaDocumentExternal", "inputMediaGame", "inputMediaInvoice", "inputMediaGeoLive", "inputMediaPoll", "inputMediaDice", "inputMediaStory", "inputMediaWebPage", "inputMediaPaidMedia"]],
    ["InputChatPhoto", ["inputChatPhotoEmpty", "inputChatUploadedPhoto", "inputChatPhoto"]],
    ["InputGeoPoint", ["inputGeoPointEmpty", "inputGeoPoint"]],
    ["InputPhoto", ["inputPhotoEmpty", "inputPhoto"]],
    ["Peer", ["peerUser", "peerChat", "peerChannel"]],
    ["storage.FileType", ["storage.fileUnknown", "storage.filePartial", "storage.fileJpeg", "storage.fileGif", "storage.filePng", "storage.filePdf", "storage.fileMp3", "storage.fileMov", "storage.fileMp4", "storage.fileWebp"]],
    ["User", ["userEmpty", "user"]],
    ["UserProfilePhoto", ["userProfilePhotoEmpty", "userProfilePhoto"]],
    ["UserStatus", ["userStatusEmpty", "userStatusOnline", "userStatusOffline", "userStatusRecently", "userStatusLastWeek", "userStatusLastMonth"]],
    ["Chat", ["chatEmpty", "chat", "chatForbidden", "channel", "channelForbidden"]],
    ["ChatFull", ["chatFull", "channelFull"]],
    ["ChatParticipant", ["chatParticipant", "chatParticipantCreator", "chatParticipantAdmin"]],
    ["ChatParticipants", ["chatParticipantsForbidden", "chatParticipants"]],
    ["ChatPhoto", ["chatPhotoEmpty", "chatPhoto"]],
    ["Message", ["messageEmpty", "message", "messageService"]],
    ["MessageMedia", ["messageMediaEmpty", "messageMediaPhoto", "messageMediaGeo", "messageMediaContact", "messageMediaUnsupported", "messageMediaDocument", "messageMediaWebPage", "messageMediaVenue", "messageMediaGame", "messageMediaInvoice", "messageMediaGeoLive", "messageMediaPoll", "messageMediaDice", "messageMediaStory", "messageMediaGiveaway", "messageMediaGiveawayResults", "messageMediaPaidMedia"]],
    ["MessageAction", ["messageActionEmpty", "messageActionChatCreate", "messageActionChatEditTitle", "messageActionChatEditPhoto", "messageActionChatDeletePhoto", "messageActionChatAddUser", "messageActionChatDeleteUser", "messageActionChatJoinedByLink", "messageActionChannelCreate", "messageActionChatMigrateTo", "messageActionChannelMigrateFrom", "messageActionPinMessage", "messageActionHistoryClear", "messageActionGameScore", "messageActionPaymentSentMe", "messageActionPaymentSent", "messageActionPhoneCall", "messageActionScreenshotTaken", "messageActionCustomAction", "messageActionBotAllowed", "messageActionSecureValuesSentMe", "messageActionSecureValuesSent", "messageActionContactSignUp", "messageActionGeoProximityReached", "messageActionGroupCall", "messageActionInviteToGroupCall", "messageActionSetMessagesTTL", "messageActionGroupCallScheduled", "messageActionSetChatTheme", "messageActionChatJoinedByRequest", "messageActionWebViewDataSentMe", "messageActionWebViewDataSent", "messageActionGiftPremium", "messageActionTopicCreate", "messageActionTopicEdit", "messageActionSuggestProfilePhoto", "messageActionRequestedPeer", "messageActionSetChatWallPaper", "messageActionGiftCode", "messageActionGiveawayLaunch", "messageActionGiveawayResults", "messageActionBoostApply", "messageActionRequestedPeerSentMe"]],
    ["Dialog", ["dialog", "dialogFolder"]],
    ["Photo", ["photoEmpty", "photo"]],
    ["PhotoSize", ["photoSizeEmpty", "photoSize", "photoCachedSize", "photoStrippedSize", "photoSizeProgressive", "photoPathSize"]],
    ["GeoPoint", ["geoPointEmpty", "geoPoint"]],
    ["auth.SentCode", ["auth.sentCode", "auth.sentCodeSuccess"]],
    ["auth.Authorization", ["auth.authorization", "auth.authorizationSignUpRequired"]],
    ["auth.ExportedAuthorization", ["auth.exportedAuthorization"]],
    ["InputNotifyPeer", ["inputNotifyPeer", "inputNotifyUsers", "inputNotifyChats", "inputNotifyBroadcasts", "inputNotifyForumTopic"]],
    ["InputPeerNotifySettings", ["inputPeerNotifySettings"]],
    ["PeerNotifySettings", ["peerNotifySettings"]],
    ["PeerSettings", ["peerSettings"]],
    ["WallPaper", ["wallPaper", "wallPaperNoFile"]],
    ["ReportReason", ["inputReportReasonSpam", "inputReportReasonViolence", "inputReportReasonPornography", "inputReportReasonChildAbuse", "inputReportReasonOther", "inputReportReasonCopyright", "inputReportReasonGeoIrrelevant", "inputReportReasonFake", "inputReportReasonIllegalDrugs", "inputReportReasonPersonalDetails"]],
    ["UserFull", ["userFull"]],
    ["Contact", ["contact"]],
    ["ImportedContact", ["importedContact"]],
    ["ContactStatus", ["contactStatus"]],
    ["contacts.Contacts", ["contacts.contactsNotModified", "contacts.contacts"]],
    ["contacts.ImportedContacts", ["contacts.importedContacts"]],
    ["contacts.Blocked", ["contacts.blocked", "contacts.blockedSlice"]],
    ["messages.Dialogs", ["messages.dialogs", "messages.dialogsSlice", "messages.dialogsNotModified"]],
    ["messages.Messages", ["messages.messages", "messages.messagesSlice", "messages.channelMessages", "messages.messagesNotModified"]],
    ["messages.Chats", ["messages.chats", "messages.chatsSlice"]],
    ["messages.ChatFull", ["messages.chatFull"]],
    ["messages.AffectedHistory", ["messages.affectedHistory"]],
    ["MessagesFilter", ["inputMessagesFilterEmpty", "inputMessagesFilterPhotos", "inputMessagesFilterVideo", "inputMessagesFilterPhotoVideo", "inputMessagesFilterDocument", "inputMessagesFilterUrl", "inputMessagesFilterGif", "inputMessagesFilterVoice", "inputMessagesFilterMusic", "inputMessagesFilterChatPhotos", "inputMessagesFilterPhoneCalls", "inputMessagesFilterRoundVoice", "inputMessagesFilterRoundVideo", "inputMessagesFilterMyMentions", "inputMessagesFilterGeo", "inputMessagesFilterContacts", "inputMessagesFilterPinned"]],
    ["Update", [
            "updateNewMessage",
            "updateMessageID",
            "updateDeleteMessages",
            "updateUserTyping",
            "updateChatUserTyping",
            "updateChatParticipants",
            "updateUserStatus",
            "updateUserName",
            "updateNewAuthorization",
            "updateNewEncryptedMessage",
            "updateEncryptedChatTyping",
            "updateEncryption",
            "updateEncryptedMessagesRead",
            "updateChatParticipantAdd",
            "updateChatParticipantDelete",
            "updateDcOptions",
            "updateNotifySettings",
            "updateServiceNotification",
            "updatePrivacy",
            "updateUserPhone",
            "updateReadHistoryInbox",
            "updateReadHistoryOutbox",
            "updateWebPage",
            "updateReadMessagesContents",
            "updateChannelTooLong",
            "updateChannel",
            "updateNewChannelMessage",
            "updateReadChannelInbox",
            "updateDeleteChannelMessages",
            "updateChannelMessageViews",
            "updateChatParticipantAdmin",
            "updateNewStickerSet",
            "updateStickerSetsOrder",
            "updateStickerSets",
            "updateSavedGifs",
            "updateBotInlineQuery",
            "updateBotInlineSend",
            "updateEditChannelMessage",
            "updateBotCallbackQuery",
            "updateEditMessage",
            "updateInlineBotCallbackQuery",
            "updateReadChannelOutbox",
            "updateDraftMessage",
            "updateReadFeaturedStickers",
            "updateRecentStickers",
            "updateConfig",
            "updatePtsChanged",
            "updateChannelWebPage",
            "updateDialogPinned",
            "updatePinnedDialogs",
            "updateBotWebhookJSON",
            "updateBotWebhookJSONQuery",
            "updateBotShippingQuery",
            "updateBotPrecheckoutQuery",
            "updatePhoneCall",
            "updateLangPackTooLong",
            "updateLangPack",
            "updateFavedStickers",
            "updateChannelReadMessagesContents",
            "updateContactsReset",
            "updateChannelAvailableMessages",
            "updateDialogUnreadMark",
            "updateMessagePoll",
            "updateChatDefaultBannedRights",
            "updateFolderPeers",
            "updatePeerSettings",
            "updatePeerLocated",
            "updateNewScheduledMessage",
            "updateDeleteScheduledMessages",
            "updateTheme",
            "updateGeoLiveViewed",
            "updateLoginToken",
            "updateMessagePollVote",
            "updateDialogFilter",
            "updateDialogFilterOrder",
            "updateDialogFilters",
            "updatePhoneCallSignalingData",
            "updateChannelMessageForwards",
            "updateReadChannelDiscussionInbox",
            "updateReadChannelDiscussionOutbox",
            "updatePeerBlocked",
            "updateChannelUserTyping",
            "updatePinnedMessages",
            "updatePinnedChannelMessages",
            "updateChat",
            "updateGroupCallParticipants",
            "updateGroupCall",
            "updatePeerHistoryTTL",
            "updateChatParticipant",
            "updateChannelParticipant",
            "updateBotStopped",
            "updateGroupCallConnection",
            "updateBotCommands",
            "updatePendingJoinRequests",
            "updateBotChatInviteRequester",
            "updateMessageReactions",
            "updateAttachMenuBots",
            "updateWebViewResultSent",
            "updateBotMenuButton",
            "updateSavedRingtones",
            "updateTranscribedAudio",
            "updateReadFeaturedEmojiStickers",
            "updateUserEmojiStatus",
            "updateRecentEmojiStatuses",
            "updateRecentReactions",
            "updateMoveStickerSetToTop",
            "updateMessageExtendedMedia",
            "updateChannelPinnedTopic",
            "updateChannelPinnedTopics",
            "updateUser",
            "updateAutoSaveSettings",
            "updateStory",
            "updateReadStories",
            "updateStoryID",
            "updateStoriesStealthMode",
            "updateSentStoryReaction",
            "updateBotChatBoost",
            "updateChannelViewForumAsMessages",
            "updatePeerWallpaper",
            "updateBotMessageReaction",
            "updateBotMessageReactions",
            "updateSavedDialogPinned",
            "updatePinnedSavedDialogs",
            "updateSavedReactionTags",
            "updateSmsJob",
            "updateQuickReplies",
            "updateNewQuickReply",
            "updateDeleteQuickReply",
            "updateQuickReplyMessage",
            "updateDeleteQuickReplyMessages",
            "updateBotBusinessConnect",
            "updateBotNewBusinessMessage",
            "updateBotEditBusinessMessage",
            "updateBotDeleteBusinessMessage",
            "updateNewStoryReaction",
            "updateBroadcastRevenueTransactions",
            "updateStarsBalance",
            "updateBusinessBotCallbackQuery",
            "updateStarsRevenueStatus",
        ]],
    ["updates.State", ["updates.state"]],
    ["updates.Difference", ["updates.differenceEmpty", "updates.difference", "updates.differenceSlice", "updates.differenceTooLong"]],
    ["Updates", ["updatesTooLong", "updateShortMessage", "updateShortChatMessage", "updateShort", "updatesCombined", "updates", "updateShortSentMessage"]],
    ["photos.Photos", ["photos.photos", "photos.photosSlice"]],
    ["photos.Photo", ["photos.photo"]],
    ["upload.File", ["upload.file", "upload.fileCdnRedirect"]],
    ["DcOption", ["dcOption"]],
    ["Config", ["config"]],
    ["NearestDc", ["nearestDc"]],
    ["help.AppUpdate", ["help.appUpdate", "help.noAppUpdate"]],
    ["help.InviteText", ["help.inviteText"]],
    ["EncryptedChat", ["encryptedChatEmpty", "encryptedChatWaiting", "encryptedChatRequested", "encryptedChat", "encryptedChatDiscarded"]],
    ["InputEncryptedChat", ["inputEncryptedChat"]],
    ["EncryptedFile", ["encryptedFileEmpty", "encryptedFile"]],
    ["InputEncryptedFile", ["inputEncryptedFileEmpty", "inputEncryptedFileUploaded", "inputEncryptedFile", "inputEncryptedFileBigUploaded"]],
    ["EncryptedMessage", ["encryptedMessage", "encryptedMessageService"]],
    ["messages.DhConfig", ["messages.dhConfigNotModified", "messages.dhConfig"]],
    ["messages.SentEncryptedMessage", ["messages.sentEncryptedMessage", "messages.sentEncryptedFile"]],
    ["InputDocument", ["inputDocumentEmpty", "inputDocument"]],
    ["Document", ["documentEmpty", "document"]],
    ["help.Support", ["help.support"]],
    ["NotifyPeer", ["notifyPeer", "notifyUsers", "notifyChats", "notifyBroadcasts", "notifyForumTopic"]],
    ["SendMessageAction", ["sendMessageTypingAction", "sendMessageCancelAction", "sendMessageRecordVideoAction", "sendMessageUploadVideoAction", "sendMessageRecordAudioAction", "sendMessageUploadAudioAction", "sendMessageUploadPhotoAction", "sendMessageUploadDocumentAction", "sendMessageGeoLocationAction", "sendMessageChooseContactAction", "sendMessageGamePlayAction", "sendMessageRecordRoundAction", "sendMessageUploadRoundAction", "speakingInGroupCallAction", "sendMessageHistoryImportAction", "sendMessageChooseStickerAction", "sendMessageEmojiInteraction", "sendMessageEmojiInteractionSeen"]],
    ["contacts.Found", ["contacts.found"]],
    ["InputPrivacyKey", ["inputPrivacyKeyStatusTimestamp", "inputPrivacyKeyChatInvite", "inputPrivacyKeyPhoneCall", "inputPrivacyKeyPhoneP2P", "inputPrivacyKeyForwards", "inputPrivacyKeyProfilePhoto", "inputPrivacyKeyPhoneNumber", "inputPrivacyKeyAddedByPhone", "inputPrivacyKeyVoiceMessages", "inputPrivacyKeyAbout", "inputPrivacyKeyBirthday"]],
    ["PrivacyKey", ["privacyKeyStatusTimestamp", "privacyKeyChatInvite", "privacyKeyPhoneCall", "privacyKeyPhoneP2P", "privacyKeyForwards", "privacyKeyProfilePhoto", "privacyKeyPhoneNumber", "privacyKeyAddedByPhone", "privacyKeyVoiceMessages", "privacyKeyAbout", "privacyKeyBirthday"]],
    ["InputPrivacyRule", ["inputPrivacyValueAllowContacts", "inputPrivacyValueAllowAll", "inputPrivacyValueAllowUsers", "inputPrivacyValueDisallowContacts", "inputPrivacyValueDisallowAll", "inputPrivacyValueDisallowUsers", "inputPrivacyValueAllowChatParticipants", "inputPrivacyValueDisallowChatParticipants", "inputPrivacyValueAllowCloseFriends", "inputPrivacyValueAllowPremium"]],
    ["PrivacyRule", ["privacyValueAllowContacts", "privacyValueAllowAll", "privacyValueAllowUsers", "privacyValueDisallowContacts", "privacyValueDisallowAll", "privacyValueDisallowUsers", "privacyValueAllowChatParticipants", "privacyValueDisallowChatParticipants", "privacyValueAllowCloseFriends", "privacyValueAllowPremium"]],
    ["account.PrivacyRules", ["account.privacyRules"]],
    ["AccountDaysTTL", ["accountDaysTTL"]],
    ["DocumentAttribute", ["documentAttributeImageSize", "documentAttributeAnimated", "documentAttributeSticker", "documentAttributeVideo", "documentAttributeAudio", "documentAttributeFilename", "documentAttributeHasStickers", "documentAttributeCustomEmoji"]],
    ["messages.Stickers", ["messages.stickersNotModified", "messages.stickers"]],
    ["StickerPack", ["stickerPack"]],
    ["messages.AllStickers", ["messages.allStickersNotModified", "messages.allStickers"]],
    ["messages.AffectedMessages", ["messages.affectedMessages"]],
    ["WebPage", ["webPageEmpty", "webPagePending", "webPage", "webPageNotModified"]],
    ["Authorization", ["authorization"]],
    ["account.Authorizations", ["account.authorizations"]],
    ["account.Password", ["account.password"]],
    ["account.PasswordSettings", ["account.passwordSettings"]],
    ["account.PasswordInputSettings", ["account.passwordInputSettings"]],
    ["auth.PasswordRecovery", ["auth.passwordRecovery"]],
    ["ReceivedNotifyMessage", ["receivedNotifyMessage"]],
    ["ExportedChatInvite", ["chatInviteExported", "chatInvitePublicJoinRequests"]],
    ["ChatInvite", ["chatInviteAlready", "chatInvite", "chatInvitePeek"]],
    ["InputStickerSet", ["inputStickerSetEmpty", "inputStickerSetID", "inputStickerSetShortName", "inputStickerSetAnimatedEmoji", "inputStickerSetDice", "inputStickerSetAnimatedEmojiAnimations", "inputStickerSetPremiumGifts", "inputStickerSetEmojiGenericAnimations", "inputStickerSetEmojiDefaultStatuses", "inputStickerSetEmojiDefaultTopicIcons", "inputStickerSetEmojiChannelDefaultStatuses"]],
    ["StickerSet", ["stickerSet"]],
    ["messages.StickerSet", ["messages.stickerSet", "messages.stickerSetNotModified"]],
    ["BotCommand", ["botCommand"]],
    ["BotInfo", ["botInfo"]],
    ["KeyboardButton", ["keyboardButton", "keyboardButtonUrl", "keyboardButtonCallback", "keyboardButtonRequestPhone", "keyboardButtonRequestGeoLocation", "keyboardButtonSwitchInline", "keyboardButtonGame", "keyboardButtonBuy", "keyboardButtonUrlAuth", "inputKeyboardButtonUrlAuth", "keyboardButtonRequestPoll", "inputKeyboardButtonUserProfile", "keyboardButtonUserProfile", "keyboardButtonWebView", "keyboardButtonSimpleWebView", "keyboardButtonRequestPeer", "inputKeyboardButtonRequestPeer"]],
    ["KeyboardButtonRow", ["keyboardButtonRow"]],
    ["ReplyMarkup", ["replyKeyboardHide", "replyKeyboardForceReply", "replyKeyboardMarkup", "replyInlineMarkup"]],
    ["MessageEntity", ["messageEntityUnknown", "messageEntityMention", "messageEntityHashtag", "messageEntityBotCommand", "messageEntityUrl", "messageEntityEmail", "messageEntityBold", "messageEntityItalic", "messageEntityCode", "messageEntityPre", "messageEntityTextUrl", "messageEntityMentionName", "inputMessageEntityMentionName", "messageEntityPhone", "messageEntityCashtag", "messageEntityUnderline", "messageEntityStrike", "messageEntityBankCard", "messageEntitySpoiler", "messageEntityCustomEmoji", "messageEntityBlockquote"]],
    ["InputChannel", ["inputChannelEmpty", "inputChannel", "inputChannelFromMessage"]],
    ["contacts.ResolvedPeer", ["contacts.resolvedPeer"]],
    ["MessageRange", ["messageRange"]],
    ["updates.ChannelDifference", ["updates.channelDifferenceEmpty", "updates.channelDifferenceTooLong", "updates.channelDifference"]],
    ["ChannelMessagesFilter", ["channelMessagesFilterEmpty", "channelMessagesFilter"]],
    ["ChannelParticipant", ["channelParticipant", "channelParticipantSelf", "channelParticipantCreator", "channelParticipantAdmin", "channelParticipantBanned", "channelParticipantLeft"]],
    ["ChannelParticipantsFilter", ["channelParticipantsRecent", "channelParticipantsAdmins", "channelParticipantsKicked", "channelParticipantsBots", "channelParticipantsBanned", "channelParticipantsSearch", "channelParticipantsContacts", "channelParticipantsMentions"]],
    ["channels.ChannelParticipants", ["channels.channelParticipants", "channels.channelParticipantsNotModified"]],
    ["channels.ChannelParticipant", ["channels.channelParticipant"]],
    ["help.TermsOfService", ["help.termsOfService"]],
    ["messages.SavedGifs", ["messages.savedGifsNotModified", "messages.savedGifs"]],
    ["InputBotInlineMessage", ["inputBotInlineMessageMediaAuto", "inputBotInlineMessageText", "inputBotInlineMessageMediaGeo", "inputBotInlineMessageMediaVenue", "inputBotInlineMessageMediaContact", "inputBotInlineMessageGame", "inputBotInlineMessageMediaInvoice", "inputBotInlineMessageMediaWebPage"]],
    ["InputBotInlineResult", ["inputBotInlineResult", "inputBotInlineResultPhoto", "inputBotInlineResultDocument", "inputBotInlineResultGame"]],
    ["BotInlineMessage", ["botInlineMessageMediaAuto", "botInlineMessageText", "botInlineMessageMediaGeo", "botInlineMessageMediaVenue", "botInlineMessageMediaContact", "botInlineMessageMediaInvoice", "botInlineMessageMediaWebPage"]],
    ["BotInlineResult", ["botInlineResult", "botInlineMediaResult"]],
    ["messages.BotResults", ["messages.botResults"]],
    ["ExportedMessageLink", ["exportedMessageLink"]],
    ["MessageFwdHeader", ["messageFwdHeader"]],
    ["auth.CodeType", ["auth.codeTypeSms", "auth.codeTypeCall", "auth.codeTypeFlashCall", "auth.codeTypeMissedCall", "auth.codeTypeFragmentSms"]],
    ["auth.SentCodeType", ["auth.sentCodeTypeApp", "auth.sentCodeTypeSms", "auth.sentCodeTypeCall", "auth.sentCodeTypeFlashCall", "auth.sentCodeTypeMissedCall", "auth.sentCodeTypeEmailCode", "auth.sentCodeTypeSetUpEmailRequired", "auth.sentCodeTypeFragmentSms", "auth.sentCodeTypeFirebaseSms", "auth.sentCodeTypeSmsWord", "auth.sentCodeTypeSmsPhrase"]],
    ["messages.BotCallbackAnswer", ["messages.botCallbackAnswer"]],
    ["messages.MessageEditData", ["messages.messageEditData"]],
    ["InputBotInlineMessageID", ["inputBotInlineMessageID", "inputBotInlineMessageID64"]],
    ["InlineBotSwitchPM", ["inlineBotSwitchPM"]],
    ["messages.PeerDialogs", ["messages.peerDialogs"]],
    ["TopPeer", ["topPeer"]],
    ["TopPeerCategory", ["topPeerCategoryBotsPM", "topPeerCategoryBotsInline", "topPeerCategoryCorrespondents", "topPeerCategoryGroups", "topPeerCategoryChannels", "topPeerCategoryPhoneCalls", "topPeerCategoryForwardUsers", "topPeerCategoryForwardChats"]],
    ["TopPeerCategoryPeers", ["topPeerCategoryPeers"]],
    ["contacts.TopPeers", ["contacts.topPeersNotModified", "contacts.topPeers", "contacts.topPeersDisabled"]],
    ["DraftMessage", ["draftMessageEmpty", "draftMessage"]],
    ["messages.FeaturedStickers", ["messages.featuredStickersNotModified", "messages.featuredStickers"]],
    ["messages.RecentStickers", ["messages.recentStickersNotModified", "messages.recentStickers"]],
    ["messages.ArchivedStickers", ["messages.archivedStickers"]],
    ["messages.StickerSetInstallResult", ["messages.stickerSetInstallResultSuccess", "messages.stickerSetInstallResultArchive"]],
    ["StickerSetCovered", ["stickerSetCovered", "stickerSetMultiCovered", "stickerSetFullCovered", "stickerSetNoCovered"]],
    ["MaskCoords", ["maskCoords"]],
    ["InputStickeredMedia", ["inputStickeredMediaPhoto", "inputStickeredMediaDocument"]],
    ["Game", ["game"]],
    ["InputGame", ["inputGameID", "inputGameShortName"]],
    ["HighScore", ["highScore"]],
    ["messages.HighScores", ["messages.highScores"]],
    ["RichText", ["textEmpty", "textPlain", "textBold", "textItalic", "textUnderline", "textStrike", "textFixed", "textUrl", "textEmail", "textConcat", "textSubscript", "textSuperscript", "textMarked", "textPhone", "textImage", "textAnchor"]],
    ["PageBlock", ["pageBlockUnsupported", "pageBlockTitle", "pageBlockSubtitle", "pageBlockAuthorDate", "pageBlockHeader", "pageBlockSubheader", "pageBlockParagraph", "pageBlockPreformatted", "pageBlockFooter", "pageBlockDivider", "pageBlockAnchor", "pageBlockList", "pageBlockBlockquote", "pageBlockPullquote", "pageBlockPhoto", "pageBlockVideo", "pageBlockCover", "pageBlockEmbed", "pageBlockEmbedPost", "pageBlockCollage", "pageBlockSlideshow", "pageBlockChannel", "pageBlockAudio", "pageBlockKicker", "pageBlockTable", "pageBlockOrderedList", "pageBlockDetails", "pageBlockRelatedArticles", "pageBlockMap"]],
    ["PhoneCallDiscardReason", ["phoneCallDiscardReasonMissed", "phoneCallDiscardReasonDisconnect", "phoneCallDiscardReasonHangup", "phoneCallDiscardReasonBusy"]],
    ["DataJSON", ["dataJSON"]],
    ["LabeledPrice", ["labeledPrice"]],
    ["Invoice", ["invoice"]],
    ["PaymentCharge", ["paymentCharge"]],
    ["PostAddress", ["postAddress"]],
    ["PaymentRequestedInfo", ["paymentRequestedInfo"]],
    ["PaymentSavedCredentials", ["paymentSavedCredentialsCard"]],
    ["WebDocument", ["webDocument", "webDocumentNoProxy"]],
    ["InputWebDocument", ["inputWebDocument"]],
    ["InputWebFileLocation", ["inputWebFileLocation", "inputWebFileGeoPointLocation", "inputWebFileAudioAlbumThumbLocation"]],
    ["upload.WebFile", ["upload.webFile"]],
    ["payments.PaymentForm", ["payments.paymentForm", "payments.paymentFormStars"]],
    ["payments.ValidatedRequestedInfo", ["payments.validatedRequestedInfo"]],
    ["payments.PaymentResult", ["payments.paymentResult", "payments.paymentVerificationNeeded"]],
    ["payments.PaymentReceipt", ["payments.paymentReceipt", "payments.paymentReceiptStars"]],
    ["payments.SavedInfo", ["payments.savedInfo"]],
    ["InputPaymentCredentials", ["inputPaymentCredentialsSaved", "inputPaymentCredentials", "inputPaymentCredentialsApplePay", "inputPaymentCredentialsGooglePay"]],
    ["account.TmpPassword", ["account.tmpPassword"]],
    ["ShippingOption", ["shippingOption"]],
    ["InputStickerSetItem", ["inputStickerSetItem"]],
    ["InputPhoneCall", ["inputPhoneCall"]],
    ["PhoneCall", ["phoneCallEmpty", "phoneCallWaiting", "phoneCallRequested", "phoneCallAccepted", "phoneCall", "phoneCallDiscarded"]],
    ["PhoneConnection", ["phoneConnection", "phoneConnectionWebrtc"]],
    ["PhoneCallProtocol", ["phoneCallProtocol"]],
    ["phone.PhoneCall", ["phone.phoneCall"]],
    ["upload.CdnFile", ["upload.cdnFileReuploadNeeded", "upload.cdnFile"]],
    ["CdnPublicKey", ["cdnPublicKey"]],
    ["CdnConfig", ["cdnConfig"]],
    ["LangPackString", ["langPackString", "langPackStringPluralized", "langPackStringDeleted"]],
    ["LangPackDifference", ["langPackDifference"]],
    ["LangPackLanguage", ["langPackLanguage"]],
    ["ChannelAdminLogEventAction", [
            "channelAdminLogEventActionChangeTitle",
            "channelAdminLogEventActionChangeAbout",
            "channelAdminLogEventActionChangeUsername",
            "channelAdminLogEventActionChangePhoto",
            "channelAdminLogEventActionToggleInvites",
            "channelAdminLogEventActionToggleSignatures",
            "channelAdminLogEventActionUpdatePinned",
            "channelAdminLogEventActionEditMessage",
            "channelAdminLogEventActionDeleteMessage",
            "channelAdminLogEventActionParticipantJoin",
            "channelAdminLogEventActionParticipantLeave",
            "channelAdminLogEventActionParticipantInvite",
            "channelAdminLogEventActionParticipantToggleBan",
            "channelAdminLogEventActionParticipantToggleAdmin",
            "channelAdminLogEventActionChangeStickerSet",
            "channelAdminLogEventActionTogglePreHistoryHidden",
            "channelAdminLogEventActionDefaultBannedRights",
            "channelAdminLogEventActionStopPoll",
            "channelAdminLogEventActionChangeLinkedChat",
            "channelAdminLogEventActionChangeLocation",
            "channelAdminLogEventActionToggleSlowMode",
            "channelAdminLogEventActionStartGroupCall",
            "channelAdminLogEventActionDiscardGroupCall",
            "channelAdminLogEventActionParticipantMute",
            "channelAdminLogEventActionParticipantUnmute",
            "channelAdminLogEventActionToggleGroupCallSetting",
            "channelAdminLogEventActionParticipantJoinByInvite",
            "channelAdminLogEventActionExportedInviteDelete",
            "channelAdminLogEventActionExportedInviteRevoke",
            "channelAdminLogEventActionExportedInviteEdit",
            "channelAdminLogEventActionParticipantVolume",
            "channelAdminLogEventActionChangeHistoryTTL",
            "channelAdminLogEventActionParticipantJoinByRequest",
            "channelAdminLogEventActionToggleNoForwards",
            "channelAdminLogEventActionSendMessage",
            "channelAdminLogEventActionChangeAvailableReactions",
            "channelAdminLogEventActionChangeUsernames",
            "channelAdminLogEventActionToggleForum",
            "channelAdminLogEventActionCreateTopic",
            "channelAdminLogEventActionEditTopic",
            "channelAdminLogEventActionDeleteTopic",
            "channelAdminLogEventActionPinTopic",
            "channelAdminLogEventActionToggleAntiSpam",
            "channelAdminLogEventActionChangePeerColor",
            "channelAdminLogEventActionChangeProfilePeerColor",
            "channelAdminLogEventActionChangeWallpaper",
            "channelAdminLogEventActionChangeEmojiStatus",
            "channelAdminLogEventActionChangeEmojiStickerSet",
        ]],
    ["ChannelAdminLogEvent", ["channelAdminLogEvent"]],
    ["channels.AdminLogResults", ["channels.adminLogResults"]],
    ["ChannelAdminLogEventsFilter", ["channelAdminLogEventsFilter"]],
    ["PopularContact", ["popularContact"]],
    ["messages.FavedStickers", ["messages.favedStickersNotModified", "messages.favedStickers"]],
    ["RecentMeUrl", ["recentMeUrlUnknown", "recentMeUrlUser", "recentMeUrlChat", "recentMeUrlChatInvite", "recentMeUrlStickerSet"]],
    ["help.RecentMeUrls", ["help.recentMeUrls"]],
    ["InputSingleMedia", ["inputSingleMedia"]],
    ["WebAuthorization", ["webAuthorization"]],
    ["account.WebAuthorizations", ["account.webAuthorizations"]],
    ["InputMessage", ["inputMessageID", "inputMessageReplyTo", "inputMessagePinned", "inputMessageCallbackQuery"]],
    ["InputDialogPeer", ["inputDialogPeer", "inputDialogPeerFolder"]],
    ["DialogPeer", ["dialogPeer", "dialogPeerFolder"]],
    ["messages.FoundStickerSets", ["messages.foundStickerSetsNotModified", "messages.foundStickerSets"]],
    ["FileHash", ["fileHash"]],
    ["InputClientProxy", ["inputClientProxy"]],
    ["help.TermsOfServiceUpdate", ["help.termsOfServiceUpdateEmpty", "help.termsOfServiceUpdate"]],
    ["InputSecureFile", ["inputSecureFileUploaded", "inputSecureFile"]],
    ["SecureFile", ["secureFileEmpty", "secureFile"]],
    ["SecureData", ["secureData"]],
    ["SecurePlainData", ["securePlainPhone", "securePlainEmail"]],
    ["SecureValueType", ["secureValueTypePersonalDetails", "secureValueTypePassport", "secureValueTypeDriverLicense", "secureValueTypeIdentityCard", "secureValueTypeInternalPassport", "secureValueTypeAddress", "secureValueTypeUtilityBill", "secureValueTypeBankStatement", "secureValueTypeRentalAgreement", "secureValueTypePassportRegistration", "secureValueTypeTemporaryRegistration", "secureValueTypePhone", "secureValueTypeEmail"]],
    ["SecureValue", ["secureValue"]],
    ["InputSecureValue", ["inputSecureValue"]],
    ["SecureValueHash", ["secureValueHash"]],
    ["SecureValueError", ["secureValueErrorData", "secureValueErrorFrontSide", "secureValueErrorReverseSide", "secureValueErrorSelfie", "secureValueErrorFile", "secureValueErrorFiles", "secureValueError", "secureValueErrorTranslationFile", "secureValueErrorTranslationFiles"]],
    ["SecureCredentialsEncrypted", ["secureCredentialsEncrypted"]],
    ["account.AuthorizationForm", ["account.authorizationForm"]],
    ["account.SentEmailCode", ["account.sentEmailCode"]],
    ["help.DeepLinkInfo", ["help.deepLinkInfoEmpty", "help.deepLinkInfo"]],
    ["SavedContact", ["savedPhoneContact"]],
    ["account.Takeout", ["account.takeout"]],
    ["PasswordKdfAlgo", ["passwordKdfAlgoUnknown", "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow"]],
    ["SecurePasswordKdfAlgo", ["securePasswordKdfAlgoUnknown", "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000", "securePasswordKdfAlgoSHA512"]],
    ["SecureSecretSettings", ["secureSecretSettings"]],
    ["InputCheckPasswordSRP", ["inputCheckPasswordEmpty", "inputCheckPasswordSRP"]],
    ["SecureRequiredType", ["secureRequiredType", "secureRequiredTypeOneOf"]],
    ["help.PassportConfig", ["help.passportConfigNotModified", "help.passportConfig"]],
    ["InputAppEvent", ["inputAppEvent"]],
    ["JSONObjectValue", ["jsonObjectValue"]],
    ["JSONValue", ["jsonNull", "jsonBool", "jsonNumber", "jsonString", "jsonArray", "jsonObject"]],
    ["PageTableCell", ["pageTableCell"]],
    ["PageTableRow", ["pageTableRow"]],
    ["PageCaption", ["pageCaption"]],
    ["PageListItem", ["pageListItemText", "pageListItemBlocks"]],
    ["PageListOrderedItem", ["pageListOrderedItemText", "pageListOrderedItemBlocks"]],
    ["PageRelatedArticle", ["pageRelatedArticle"]],
    ["Page", ["page"]],
    ["help.SupportName", ["help.supportName"]],
    ["help.UserInfo", ["help.userInfoEmpty", "help.userInfo"]],
    ["PollAnswer", ["pollAnswer"]],
    ["Poll", ["poll"]],
    ["PollAnswerVoters", ["pollAnswerVoters"]],
    ["PollResults", ["pollResults"]],
    ["ChatOnlines", ["chatOnlines"]],
    ["StatsURL", ["statsURL"]],
    ["ChatAdminRights", ["chatAdminRights"]],
    ["ChatBannedRights", ["chatBannedRights"]],
    ["InputWallPaper", ["inputWallPaper", "inputWallPaperSlug", "inputWallPaperNoFile"]],
    ["account.WallPapers", ["account.wallPapersNotModified", "account.wallPapers"]],
    ["CodeSettings", ["codeSettings"]],
    ["WallPaperSettings", ["wallPaperSettings"]],
    ["AutoDownloadSettings", ["autoDownloadSettings"]],
    ["account.AutoDownloadSettings", ["account.autoDownloadSettings"]],
    ["EmojiKeyword", ["emojiKeyword", "emojiKeywordDeleted"]],
    ["EmojiKeywordsDifference", ["emojiKeywordsDifference"]],
    ["EmojiURL", ["emojiURL"]],
    ["EmojiLanguage", ["emojiLanguage"]],
    ["Folder", ["folder"]],
    ["InputFolderPeer", ["inputFolderPeer"]],
    ["FolderPeer", ["folderPeer"]],
    ["messages.SearchCounter", ["messages.searchCounter"]],
    ["UrlAuthResult", ["urlAuthResultRequest", "urlAuthResultAccepted", "urlAuthResultDefault"]],
    ["ChannelLocation", ["channelLocationEmpty", "channelLocation"]],
    ["PeerLocated", ["peerLocated", "peerSelfLocated"]],
    ["RestrictionReason", ["restrictionReason"]],
    ["InputTheme", ["inputTheme", "inputThemeSlug"]],
    ["Theme", ["theme"]],
    ["account.Themes", ["account.themesNotModified", "account.themes"]],
    ["auth.LoginToken", ["auth.loginToken", "auth.loginTokenMigrateTo", "auth.loginTokenSuccess"]],
    ["account.ContentSettings", ["account.contentSettings"]],
    ["messages.InactiveChats", ["messages.inactiveChats"]],
    ["BaseTheme", ["baseThemeClassic", "baseThemeDay", "baseThemeNight", "baseThemeTinted", "baseThemeArctic"]],
    ["InputThemeSettings", ["inputThemeSettings"]],
    ["ThemeSettings", ["themeSettings"]],
    ["WebPageAttribute", ["webPageAttributeTheme", "webPageAttributeStory", "webPageAttributeStickerSet"]],
    ["messages.VotesList", ["messages.votesList"]],
    ["BankCardOpenUrl", ["bankCardOpenUrl"]],
    ["payments.BankCardData", ["payments.bankCardData"]],
    ["DialogFilter", ["dialogFilter", "dialogFilterDefault", "dialogFilterChatlist"]],
    ["DialogFilterSuggested", ["dialogFilterSuggested"]],
    ["StatsDateRangeDays", ["statsDateRangeDays"]],
    ["StatsAbsValueAndPrev", ["statsAbsValueAndPrev"]],
    ["StatsPercentValue", ["statsPercentValue"]],
    ["StatsGraph", ["statsGraphAsync", "statsGraphError", "statsGraph"]],
    ["stats.BroadcastStats", ["stats.broadcastStats"]],
    ["help.PromoData", ["help.promoDataEmpty", "help.promoData"]],
    ["VideoSize", ["videoSize", "videoSizeEmojiMarkup", "videoSizeStickerMarkup"]],
    ["StatsGroupTopPoster", ["statsGroupTopPoster"]],
    ["StatsGroupTopAdmin", ["statsGroupTopAdmin"]],
    ["StatsGroupTopInviter", ["statsGroupTopInviter"]],
    ["stats.MegagroupStats", ["stats.megagroupStats"]],
    ["GlobalPrivacySettings", ["globalPrivacySettings"]],
    ["help.CountryCode", ["help.countryCode"]],
    ["help.Country", ["help.country"]],
    ["help.CountriesList", ["help.countriesListNotModified", "help.countriesList"]],
    ["MessageViews", ["messageViews"]],
    ["messages.MessageViews", ["messages.messageViews"]],
    ["messages.DiscussionMessage", ["messages.discussionMessage"]],
    ["MessageReplyHeader", ["messageReplyHeader", "messageReplyStoryHeader"]],
    ["MessageReplies", ["messageReplies"]],
    ["PeerBlocked", ["peerBlocked"]],
    ["stats.MessageStats", ["stats.messageStats"]],
    ["GroupCall", ["groupCallDiscarded", "groupCall"]],
    ["InputGroupCall", ["inputGroupCall"]],
    ["GroupCallParticipant", ["groupCallParticipant"]],
    ["phone.GroupCall", ["phone.groupCall"]],
    ["phone.GroupParticipants", ["phone.groupParticipants"]],
    ["InlineQueryPeerType", ["inlineQueryPeerTypeSameBotPM", "inlineQueryPeerTypePM", "inlineQueryPeerTypeChat", "inlineQueryPeerTypeMegagroup", "inlineQueryPeerTypeBroadcast", "inlineQueryPeerTypeBotPM"]],
    ["messages.HistoryImport", ["messages.historyImport"]],
    ["messages.HistoryImportParsed", ["messages.historyImportParsed"]],
    ["messages.AffectedFoundMessages", ["messages.affectedFoundMessages"]],
    ["ChatInviteImporter", ["chatInviteImporter"]],
    ["messages.ExportedChatInvites", ["messages.exportedChatInvites"]],
    ["messages.ExportedChatInvite", ["messages.exportedChatInvite", "messages.exportedChatInviteReplaced"]],
    ["messages.ChatInviteImporters", ["messages.chatInviteImporters"]],
    ["ChatAdminWithInvites", ["chatAdminWithInvites"]],
    ["messages.ChatAdminsWithInvites", ["messages.chatAdminsWithInvites"]],
    ["messages.CheckedHistoryImportPeer", ["messages.checkedHistoryImportPeer"]],
    ["phone.JoinAsPeers", ["phone.joinAsPeers"]],
    ["phone.ExportedGroupCallInvite", ["phone.exportedGroupCallInvite"]],
    ["GroupCallParticipantVideoSourceGroup", ["groupCallParticipantVideoSourceGroup"]],
    ["GroupCallParticipantVideo", ["groupCallParticipantVideo"]],
    ["stickers.SuggestedShortName", ["stickers.suggestedShortName"]],
    ["BotCommandScope", ["botCommandScopeDefault", "botCommandScopeUsers", "botCommandScopeChats", "botCommandScopeChatAdmins", "botCommandScopePeer", "botCommandScopePeerAdmins", "botCommandScopePeerUser"]],
    ["account.ResetPasswordResult", ["account.resetPasswordFailedWait", "account.resetPasswordRequestedWait", "account.resetPasswordOk"]],
    ["SponsoredMessage", ["sponsoredMessage"]],
    ["messages.SponsoredMessages", ["messages.sponsoredMessages", "messages.sponsoredMessagesEmpty"]],
    ["SearchResultsCalendarPeriod", ["searchResultsCalendarPeriod"]],
    ["messages.SearchResultsCalendar", ["messages.searchResultsCalendar"]],
    ["SearchResultsPosition", ["searchResultPosition"]],
    ["messages.SearchResultsPositions", ["messages.searchResultsPositions"]],
    ["channels.SendAsPeers", ["channels.sendAsPeers"]],
    ["users.UserFull", ["users.userFull"]],
    ["messages.PeerSettings", ["messages.peerSettings"]],
    ["auth.LoggedOut", ["auth.loggedOut"]],
    ["ReactionCount", ["reactionCount"]],
    ["MessageReactions", ["messageReactions"]],
    ["messages.MessageReactionsList", ["messages.messageReactionsList"]],
    ["AvailableReaction", ["availableReaction"]],
    ["messages.AvailableReactions", ["messages.availableReactionsNotModified", "messages.availableReactions"]],
    ["MessagePeerReaction", ["messagePeerReaction"]],
    ["GroupCallStreamChannel", ["groupCallStreamChannel"]],
    ["phone.GroupCallStreamChannels", ["phone.groupCallStreamChannels"]],
    ["phone.GroupCallStreamRtmpUrl", ["phone.groupCallStreamRtmpUrl"]],
    ["AttachMenuBotIconColor", ["attachMenuBotIconColor"]],
    ["AttachMenuBotIcon", ["attachMenuBotIcon"]],
    ["AttachMenuBot", ["attachMenuBot"]],
    ["AttachMenuBots", ["attachMenuBotsNotModified", "attachMenuBots"]],
    ["AttachMenuBotsBot", ["attachMenuBotsBot"]],
    ["WebViewResult", ["webViewResultUrl"]],
    ["WebViewMessageSent", ["webViewMessageSent"]],
    ["BotMenuButton", ["botMenuButtonDefault", "botMenuButtonCommands", "botMenuButton"]],
    ["account.SavedRingtones", ["account.savedRingtonesNotModified", "account.savedRingtones"]],
    ["NotificationSound", ["notificationSoundDefault", "notificationSoundNone", "notificationSoundLocal", "notificationSoundRingtone"]],
    ["account.SavedRingtone", ["account.savedRingtone", "account.savedRingtoneConverted"]],
    ["AttachMenuPeerType", ["attachMenuPeerTypeSameBotPM", "attachMenuPeerTypeBotPM", "attachMenuPeerTypePM", "attachMenuPeerTypeChat", "attachMenuPeerTypeBroadcast"]],
    ["InputInvoice", ["inputInvoiceMessage", "inputInvoiceSlug", "inputInvoicePremiumGiftCode", "inputInvoiceStars"]],
    ["payments.ExportedInvoice", ["payments.exportedInvoice"]],
    ["messages.TranscribedAudio", ["messages.transcribedAudio"]],
    ["help.PremiumPromo", ["help.premiumPromo"]],
    ["InputStorePaymentPurpose", ["inputStorePaymentPremiumSubscription", "inputStorePaymentGiftPremium", "inputStorePaymentPremiumGiftCode", "inputStorePaymentPremiumGiveaway", "inputStorePaymentStars"]],
    ["PremiumGiftOption", ["premiumGiftOption"]],
    ["PaymentFormMethod", ["paymentFormMethod"]],
    ["EmojiStatus", ["emojiStatusEmpty", "emojiStatus", "emojiStatusUntil"]],
    ["account.EmojiStatuses", ["account.emojiStatusesNotModified", "account.emojiStatuses"]],
    ["Reaction", ["reactionEmpty", "reactionEmoji", "reactionCustomEmoji"]],
    ["ChatReactions", ["chatReactionsNone", "chatReactionsAll", "chatReactionsSome"]],
    ["messages.Reactions", ["messages.reactionsNotModified", "messages.reactions"]],
    ["EmailVerifyPurpose", ["emailVerifyPurposeLoginSetup", "emailVerifyPurposeLoginChange", "emailVerifyPurposePassport"]],
    ["EmailVerification", ["emailVerificationCode", "emailVerificationGoogle", "emailVerificationApple"]],
    ["account.EmailVerified", ["account.emailVerified", "account.emailVerifiedLogin"]],
    ["PremiumSubscriptionOption", ["premiumSubscriptionOption"]],
    ["SendAsPeer", ["sendAsPeer"]],
    ["MessageExtendedMedia", ["messageExtendedMediaPreview", "messageExtendedMedia"]],
    ["StickerKeyword", ["stickerKeyword"]],
    ["Username", ["username"]],
    ["ForumTopic", ["forumTopicDeleted", "forumTopic"]],
    ["messages.ForumTopics", ["messages.forumTopics"]],
    ["DefaultHistoryTTL", ["defaultHistoryTTL"]],
    ["ExportedContactToken", ["exportedContactToken"]],
    ["RequestPeerType", ["requestPeerTypeUser", "requestPeerTypeChat", "requestPeerTypeBroadcast"]],
    ["EmojiList", ["emojiListNotModified", "emojiList"]],
    ["EmojiGroup", ["emojiGroup", "emojiGroupGreeting", "emojiGroupPremium"]],
    ["messages.EmojiGroups", ["messages.emojiGroupsNotModified", "messages.emojiGroups"]],
    ["TextWithEntities", ["textWithEntities"]],
    ["messages.TranslatedText", ["messages.translateResult"]],
    ["AutoSaveSettings", ["autoSaveSettings"]],
    ["AutoSaveException", ["autoSaveException"]],
    ["account.AutoSaveSettings", ["account.autoSaveSettings"]],
    ["help.AppConfig", ["help.appConfigNotModified", "help.appConfig"]],
    ["InputBotApp", ["inputBotAppID", "inputBotAppShortName"]],
    ["BotApp", ["botAppNotModified", "botApp"]],
    ["messages.BotApp", ["messages.botApp"]],
    ["InlineBotWebView", ["inlineBotWebView"]],
    ["ReadParticipantDate", ["readParticipantDate"]],
    ["InputChatlist", ["inputChatlistDialogFilter"]],
    ["ExportedChatlistInvite", ["exportedChatlistInvite"]],
    ["chatlists.ExportedChatlistInvite", ["chatlists.exportedChatlistInvite"]],
    ["chatlists.ExportedInvites", ["chatlists.exportedInvites"]],
    ["chatlists.ChatlistInvite", ["chatlists.chatlistInviteAlready", "chatlists.chatlistInvite"]],
    ["chatlists.ChatlistUpdates", ["chatlists.chatlistUpdates"]],
    ["bots.BotInfo", ["bots.botInfo"]],
    ["MessagePeerVote", ["messagePeerVote", "messagePeerVoteInputOption", "messagePeerVoteMultiple"]],
    ["StoryViews", ["storyViews"]],
    ["StoryItem", ["storyItemDeleted", "storyItemSkipped", "storyItem"]],
    ["stories.AllStories", ["stories.allStoriesNotModified", "stories.allStories"]],
    ["stories.Stories", ["stories.stories"]],
    ["StoryView", ["storyView", "storyViewPublicForward", "storyViewPublicRepost"]],
    ["stories.StoryViewsList", ["stories.storyViewsList"]],
    ["stories.StoryViews", ["stories.storyViews"]],
    ["InputReplyTo", ["inputReplyToMessage", "inputReplyToStory"]],
    ["ExportedStoryLink", ["exportedStoryLink"]],
    ["StoriesStealthMode", ["storiesStealthMode"]],
    ["MediaAreaCoordinates", ["mediaAreaCoordinates"]],
    ["MediaArea", ["mediaAreaVenue", "inputMediaAreaVenue", "mediaAreaGeoPoint", "mediaAreaSuggestedReaction", "mediaAreaChannelPost", "inputMediaAreaChannelPost", "mediaAreaUrl"]],
    ["PeerStories", ["peerStories"]],
    ["stories.PeerStories", ["stories.peerStories"]],
    ["messages.WebPage", ["messages.webPage"]],
    ["PremiumGiftCodeOption", ["premiumGiftCodeOption"]],
    ["payments.CheckedGiftCode", ["payments.checkedGiftCode"]],
    ["payments.GiveawayInfo", ["payments.giveawayInfo", "payments.giveawayInfoResults"]],
    ["PrepaidGiveaway", ["prepaidGiveaway"]],
    ["Boost", ["boost"]],
    ["premium.BoostsList", ["premium.boostsList"]],
    ["MyBoost", ["myBoost"]],
    ["premium.MyBoosts", ["premium.myBoosts"]],
    ["premium.BoostsStatus", ["premium.boostsStatus"]],
    ["StoryFwdHeader", ["storyFwdHeader"]],
    ["PostInteractionCounters", ["postInteractionCountersMessage", "postInteractionCountersStory"]],
    ["stats.StoryStats", ["stats.storyStats"]],
    ["PublicForward", ["publicForwardMessage", "publicForwardStory"]],
    ["stats.PublicForwards", ["stats.publicForwards"]],
    ["PeerColor", ["peerColor"]],
    ["help.PeerColorSet", ["help.peerColorSet", "help.peerColorProfileSet"]],
    ["help.PeerColorOption", ["help.peerColorOption"]],
    ["help.PeerColors", ["help.peerColorsNotModified", "help.peerColors"]],
    ["StoryReaction", ["storyReaction", "storyReactionPublicForward", "storyReactionPublicRepost"]],
    ["stories.StoryReactionsList", ["stories.storyReactionsList"]],
    ["SavedDialog", ["savedDialog"]],
    ["messages.SavedDialogs", ["messages.savedDialogs", "messages.savedDialogsSlice", "messages.savedDialogsNotModified"]],
    ["SavedReactionTag", ["savedReactionTag"]],
    ["messages.SavedReactionTags", ["messages.savedReactionTagsNotModified", "messages.savedReactionTags"]],
    ["OutboxReadDate", ["outboxReadDate"]],
    ["smsjobs.EligibilityToJoin", ["smsjobs.eligibleToJoin"]],
    ["smsjobs.Status", ["smsjobs.status"]],
    ["SmsJob", ["smsJob"]],
    ["BusinessWeeklyOpen", ["businessWeeklyOpen"]],
    ["BusinessWorkHours", ["businessWorkHours"]],
    ["BusinessLocation", ["businessLocation"]],
    ["InputBusinessRecipients", ["inputBusinessRecipients"]],
    ["BusinessRecipients", ["businessRecipients"]],
    ["BusinessAwayMessageSchedule", ["businessAwayMessageScheduleAlways", "businessAwayMessageScheduleOutsideWorkHours", "businessAwayMessageScheduleCustom"]],
    ["InputBusinessGreetingMessage", ["inputBusinessGreetingMessage"]],
    ["BusinessGreetingMessage", ["businessGreetingMessage"]],
    ["InputBusinessAwayMessage", ["inputBusinessAwayMessage"]],
    ["BusinessAwayMessage", ["businessAwayMessage"]],
    ["Timezone", ["timezone"]],
    ["help.TimezonesList", ["help.timezonesListNotModified", "help.timezonesList"]],
    ["QuickReply", ["quickReply"]],
    ["InputQuickReplyShortcut", ["inputQuickReplyShortcut", "inputQuickReplyShortcutId"]],
    ["messages.QuickReplies", ["messages.quickReplies", "messages.quickRepliesNotModified"]],
    ["ConnectedBot", ["connectedBot"]],
    ["account.ConnectedBots", ["account.connectedBots"]],
    ["messages.DialogFilters", ["messages.dialogFilters"]],
    ["Birthday", ["birthday"]],
    ["BotBusinessConnection", ["botBusinessConnection"]],
    ["InputBusinessIntro", ["inputBusinessIntro"]],
    ["BusinessIntro", ["businessIntro"]],
    ["messages.MyStickers", ["messages.myStickers"]],
    ["InputCollectible", ["inputCollectibleUsername", "inputCollectiblePhone"]],
    ["fragment.CollectibleInfo", ["fragment.collectibleInfo"]],
    ["InputBusinessBotRecipients", ["inputBusinessBotRecipients"]],
    ["BusinessBotRecipients", ["businessBotRecipients"]],
    ["ContactBirthday", ["contactBirthday"]],
    ["contacts.ContactBirthdays", ["contacts.contactBirthdays"]],
    ["MissingInvitee", ["missingInvitee"]],
    ["messages.InvitedUsers", ["messages.invitedUsers"]],
    ["InputBusinessChatLink", ["inputBusinessChatLink"]],
    ["BusinessChatLink", ["businessChatLink"]],
    ["account.BusinessChatLinks", ["account.businessChatLinks"]],
    ["account.ResolvedBusinessChatLinks", ["account.resolvedBusinessChatLinks"]],
    ["RequestedPeer", ["requestedPeerUser", "requestedPeerChat", "requestedPeerChannel"]],
    ["SponsoredMessageReportOption", ["sponsoredMessageReportOption"]],
    ["channels.SponsoredMessageReportResult", ["channels.sponsoredMessageReportResultChooseOption", "channels.sponsoredMessageReportResultAdsHidden", "channels.sponsoredMessageReportResultReported"]],
    ["stats.BroadcastRevenueStats", ["stats.broadcastRevenueStats"]],
    ["stats.BroadcastRevenueWithdrawalUrl", ["stats.broadcastRevenueWithdrawalUrl"]],
    ["BroadcastRevenueTransaction", ["broadcastRevenueTransactionProceeds", "broadcastRevenueTransactionWithdrawal", "broadcastRevenueTransactionRefund"]],
    ["stats.BroadcastRevenueTransactions", ["stats.broadcastRevenueTransactions"]],
    ["ReactionNotificationsFrom", ["reactionNotificationsFromContacts", "reactionNotificationsFromAll"]],
    ["ReactionsNotifySettings", ["reactionsNotifySettings"]],
    ["BroadcastRevenueBalances", ["broadcastRevenueBalances"]],
    ["AvailableEffect", ["availableEffect"]],
    ["messages.AvailableEffects", ["messages.availableEffectsNotModified", "messages.availableEffects"]],
    ["FactCheck", ["factCheck"]],
    ["StarsTransactionPeer", ["starsTransactionPeerUnsupported", "starsTransactionPeerAppStore", "starsTransactionPeerPlayMarket", "starsTransactionPeerPremiumBot", "starsTransactionPeerFragment", "starsTransactionPeer", "starsTransactionPeerAds"]],
    ["StarsTopupOption", ["starsTopupOption"]],
    ["StarsTransaction", ["starsTransaction"]],
    ["payments.StarsStatus", ["payments.starsStatus"]],
    ["FoundStory", ["foundStory"]],
    ["stories.FoundStories", ["stories.foundStories"]],
    ["GeoPointAddress", ["geoPointAddress"]],
    ["StarsRevenueStatus", ["starsRevenueStatus"]],
    ["payments.StarsRevenueStats", ["payments.starsRevenueStats"]],
    ["payments.StarsRevenueWithdrawalUrl", ["payments.starsRevenueWithdrawalUrl"]],
    ["payments.StarsRevenueAdsAccountUrl", ["payments.starsRevenueAdsAccountUrl"]],
    ["InputStarsTransaction", ["inputStarsTransaction"]],
]);
const types = new Map([
    [
        "resPQ",
        [
            0x05162463,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["pq", Uint8Array, "bytes"],
                ["server_public_key_fingerprints", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "p_q_inner_data_dc",
        [
            0xA9F55F95,
            [
                ["pq", Uint8Array, "bytes"],
                ["p", Uint8Array, "bytes"],
                ["q", Uint8Array, "bytes"],
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["new_nonce", "bigint", "int256"],
                ["dc", "number", "int"],
            ],
        ],
    ],
    [
        "p_q_inner_data_temp_dc",
        [
            0x56FDDF88,
            [
                ["pq", Uint8Array, "bytes"],
                ["p", Uint8Array, "bytes"],
                ["q", Uint8Array, "bytes"],
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["new_nonce", "bigint", "int256"],
                ["dc", "number", "int"],
                ["expires_in", "number", "int"],
            ],
        ],
    ],
    [
        "server_DH_params_ok",
        [
            0xD0E8075C,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["encrypted_answer", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "server_DH_inner_data",
        [
            0xB5890DBA,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["g", "number", "int"],
                ["dh_prime", Uint8Array, "bytes"],
                ["g_a", Uint8Array, "bytes"],
                ["server_time", "number", "int"],
            ],
        ],
    ],
    [
        "client_DH_inner_data",
        [
            0x6643B654,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["retry_id", "bigint", "long"],
                ["g_b", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "dh_gen_ok",
        [
            0x3BCBF734,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["new_nonce_hash1", "bigint", "int128"],
            ],
        ],
    ],
    [
        "dh_gen_retry",
        [
            0x46DC1FB9,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["new_nonce_hash2", "bigint", "int128"],
            ],
        ],
    ],
    [
        "dh_gen_fail",
        [
            0xA69DAE02,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["new_nonce_hash3", "bigint", "int128"],
            ],
        ],
    ],
    [
        "bind_auth_key_inner",
        [
            0x75A3F765,
            [
                ["nonce", "bigint", "long"],
                ["temp_auth_key_id", "bigint", "long"],
                ["perm_auth_key_id", "bigint", "long"],
                ["temp_session_id", "bigint", "long"],
                ["expires_at", "number", "int"],
            ],
        ],
    ],
    [
        "rpc_error",
        [
            0x2144CA19,
            [
                ["error_code", "number", "int"],
                ["error_message", "string", "string"],
            ],
        ],
    ],
    [
        "rpc_answer_unknown",
        [
            0x5E2AD36E,
            [],
        ],
    ],
    [
        "rpc_answer_dropped_running",
        [
            0xCD78E586,
            [],
        ],
    ],
    [
        "rpc_answer_dropped",
        [
            0xA43AD8B7,
            [
                ["msg_id", "bigint", "long"],
                ["seq_no", "number", "int"],
                ["bytes", "number", "int"],
            ],
        ],
    ],
    [
        "future_salt",
        [
            0x0949D9DC,
            [
                ["valid_since", "number", "int"],
                ["valid_until", "number", "int"],
                ["salt", "bigint", "long"],
            ],
        ],
    ],
    [
        "future_salts",
        [
            0xAE500895,
            [
                ["req_msg_id", "bigint", "long"],
                ["now", "number", "int"],
                ["salts", ["FutureSalt"], "vector<FutureSalt>"],
            ],
        ],
    ],
    [
        "pong",
        [
            0x347773C5,
            [
                ["msg_id", "bigint", "long"],
                ["ping_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "destroy_session_ok",
        [
            0xE22045FC,
            [
                ["session_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "destroy_session_none",
        [
            0x62D350C9,
            [
                ["session_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "new_session_created",
        [
            0x9EC20908,
            [
                ["first_msg_id", "bigint", "long"],
                ["unique_id", "bigint", "long"],
                ["server_salt", "bigint", "long"],
            ],
        ],
    ],
    [
        "gzip_packed",
        [
            0x3072CFA1,
            [
                ["packed_data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "msgs_ack",
        [
            0x62D6B459,
            [
                ["msg_ids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "bad_msg_notification",
        [
            0xA7EFF811,
            [
                ["bad_msg_id", "bigint", "long"],
                ["bad_msg_seqno", "number", "int"],
                ["error_code", "number", "int"],
            ],
        ],
    ],
    [
        "bad_server_salt",
        [
            0xEDAB447B,
            [
                ["bad_msg_id", "bigint", "long"],
                ["bad_msg_seqno", "number", "int"],
                ["error_code", "number", "int"],
                ["new_server_salt", "bigint", "long"],
            ],
        ],
    ],
    [
        "msg_resend_req",
        [
            0x7D861A08,
            [
                ["msg_ids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "msgs_state_req",
        [
            0xDA69FB52,
            [
                ["msg_ids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "msgs_state_info",
        [
            0x04DEB57D,
            [
                ["req_msg_id", "bigint", "long"],
                ["info", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "msgs_all_info",
        [
            0x8CC0D131,
            [
                ["msg_ids", ["bigint"], "Vector<long>"],
                ["info", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "msg_detailed_info",
        [
            0x276D3EC6,
            [
                ["msg_id", "bigint", "long"],
                ["answer_msg_id", "bigint", "long"],
                ["bytes", "number", "int"],
                ["status", "number", "int"],
            ],
        ],
    ],
    [
        "msg_new_detailed_info",
        [
            0x809DB6DF,
            [
                ["answer_msg_id", "bigint", "long"],
                ["bytes", "number", "int"],
                ["status", "number", "int"],
            ],
        ],
    ],
    [
        "destroy_auth_key_ok",
        [
            0xF660E1D4,
            [],
        ],
    ],
    [
        "destroy_auth_key_none",
        [
            0x0A9F2259,
            [],
        ],
    ],
    [
        "destroy_auth_key_fail",
        [
            0xEA109B13,
            [],
        ],
    ],
    [
        "http_wait",
        [
            0x9299359F,
            [
                ["max_delay", "number", "int"],
                ["wait_after", "number", "int"],
                ["max_wait", "number", "int"],
            ],
        ],
    ],
    [
        "true",
        [
            0x3FEDD339,
            [],
        ],
    ],
    [
        "error",
        [
            0xC4B9F9BB,
            [
                ["code", "number", "int"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "ipPort",
        [
            0xD433AD73,
            [
                ["ipv4", "number", "int"],
                ["port", "number", "int"],
            ],
        ],
    ],
    [
        "ipPortSecret",
        [
            0x37982646,
            [
                ["ipv4", "number", "int"],
                ["port", "number", "int"],
                ["secret", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "accessPointRule",
        [
            0x4679B65F,
            [
                ["phone_prefix_rules", "string", "string"],
                ["dc_id", "number", "int"],
                ["ips", ["IpPort"], "vector<IpPort>"],
            ],
        ],
    ],
    [
        "help.configSimple",
        [
            0x5A592A6C,
            [
                ["date", "number", "int"],
                ["expires", "number", "int"],
                ["rules", ["AccessPointRule"], "vector<AccessPointRule>"],
            ],
        ],
    ],
    [
        "inputPeerPhotoFileLocationLegacy",
        [
            0x27D69997,
            [
                ["flags", flags, "#"],
                ["big", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["volume_id", "bigint", "long"],
                ["local_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputStickerSetThumbLegacy",
        [
            0x0DBAEAE9,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["volume_id", "bigint", "long"],
                ["local_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputPeerEmpty",
        [
            0x7F3B18EA,
            [],
        ],
    ],
    [
        "inputPeerSelf",
        [
            0x7DA07EC9,
            [],
        ],
    ],
    [
        "inputPeerChat",
        [
            0x35A95CB9,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPeerUser",
        [
            0xDDE8A54C,
            [
                ["user_id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPeerChannel",
        [
            0x27BCBBFC,
            [
                ["channel_id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPeerUserFromMessage",
        [
            0xA87B0A1C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPeerChannelFromMessage",
        [
            0xBD2A0840,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["channel_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputUserEmpty",
        [
            0xB98886CF,
            [],
        ],
    ],
    [
        "inputUserSelf",
        [
            0xF7C1B13F,
            [],
        ],
    ],
    [
        "inputUser",
        [
            0xF21158C6,
            [
                ["user_id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputUserFromMessage",
        [
            0x1DA448E2,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPhoneContact",
        [
            0xF392B7F4,
            [
                ["client_id", "bigint", "long"],
                ["phone", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
            ],
        ],
    ],
    [
        "inputFile",
        [
            0xF52FF27F,
            [
                ["id", "bigint", "long"],
                ["parts", "number", "int"],
                ["name", "string", "string"],
                ["md5_checksum", "string", "string"],
            ],
        ],
    ],
    [
        "inputFileBig",
        [
            0xFA4F0BB5,
            [
                ["id", "bigint", "long"],
                ["parts", "number", "int"],
                ["name", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaEmpty",
        [
            0x9664F57F,
            [],
        ],
    ],
    [
        "inputMediaUploadedPhoto",
        [
            0x1E287D04,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.2?true"],
                ["file", "InputFile", "InputFile"],
                ["stickers", ["InputDocument"], "flags.0?Vector<InputDocument>"],
                ["ttl_seconds", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "inputMediaPhoto",
        [
            0xB3BA0635,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.1?true"],
                ["id", "InputPhoto", "InputPhoto"],
                ["ttl_seconds", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "inputMediaGeoPoint",
        [
            0xF9C44144,
            [
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
            ],
        ],
    ],
    [
        "inputMediaContact",
        [
            0xF8AB7DFB,
            [
                ["phone_number", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["vcard", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaUploadedDocument",
        [
            0x5B38C6C1,
            [
                ["flags", flags, "#"],
                ["nosound_video", "true", "flags.3?true"],
                ["force_file", "true", "flags.4?true"],
                ["spoiler", "true", "flags.5?true"],
                ["file", "InputFile", "InputFile"],
                ["thumb", "InputFile", "flags.2?InputFile"],
                ["mime_type", "string", "string"],
                ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
                ["stickers", ["InputDocument"], "flags.0?Vector<InputDocument>"],
                ["ttl_seconds", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "inputMediaDocument",
        [
            0x33473058,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.2?true"],
                ["id", "InputDocument", "InputDocument"],
                ["ttl_seconds", "number", "flags.0?int"],
                ["query", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "inputMediaVenue",
        [
            0xC13D1C11,
            [
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["title", "string", "string"],
                ["address", "string", "string"],
                ["provider", "string", "string"],
                ["venue_id", "string", "string"],
                ["venue_type", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaPhotoExternal",
        [
            0xE5BBFE1A,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.1?true"],
                ["url", "string", "string"],
                ["ttl_seconds", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "inputMediaDocumentExternal",
        [
            0xFB52DC99,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.1?true"],
                ["url", "string", "string"],
                ["ttl_seconds", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "inputMediaGame",
        [
            0xD33F43F3,
            [
                ["id", "InputGame", "InputGame"],
            ],
        ],
    ],
    [
        "inputMediaInvoice",
        [
            0x405FEF0D,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "InputWebDocument", "flags.0?InputWebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["payload", Uint8Array, "bytes"],
                ["provider", "string", "flags.3?string"],
                ["provider_data", "DataJSON", "DataJSON"],
                ["start_param", "string", "flags.1?string"],
                ["extended_media", "InputMedia", "flags.2?InputMedia"],
            ],
        ],
    ],
    [
        "inputMediaGeoLive",
        [
            0x971FA843,
            [
                ["flags", flags, "#"],
                ["stopped", "true", "flags.0?true"],
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["heading", "number", "flags.2?int"],
                ["period", "number", "flags.1?int"],
                ["proximity_notification_radius", "number", "flags.3?int"],
            ],
        ],
    ],
    [
        "inputMediaPoll",
        [
            0x0F94E5F1,
            [
                ["flags", flags, "#"],
                ["poll", "Poll", "Poll"],
                ["correct_answers", [Uint8Array], "flags.0?Vector<bytes>"],
                ["solution", "string", "flags.1?string"],
                ["solution_entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "inputMediaDice",
        [
            0xE66FBF7B,
            [
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaStory",
        [
            0x89FDD778,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "inputMediaWebPage",
        [
            0xC21B8849,
            [
                ["flags", flags, "#"],
                ["force_large_media", "true", "flags.0?true"],
                ["force_small_media", "true", "flags.1?true"],
                ["optional", "true", "flags.2?true"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaPaidMedia",
        [
            0xAA661FC3,
            [
                ["stars_amount", "bigint", "long"],
                ["extended_media", ["InputMedia"], "Vector<InputMedia>"],
            ],
        ],
    ],
    [
        "inputChatPhotoEmpty",
        [
            0x1CA48F57,
            [],
        ],
    ],
    [
        "inputChatUploadedPhoto",
        [
            0xBDCDAEC0,
            [
                ["flags", flags, "#"],
                ["file", "InputFile", "flags.0?InputFile"],
                ["video", "InputFile", "flags.1?InputFile"],
                ["video_start_ts", "number", "flags.2?double"],
                ["video_emoji_markup", "VideoSize", "flags.3?VideoSize"],
            ],
        ],
    ],
    [
        "inputChatPhoto",
        [
            0x8953AD37,
            [
                ["id", "InputPhoto", "InputPhoto"],
            ],
        ],
    ],
    [
        "inputGeoPointEmpty",
        [
            0xE4C123D6,
            [],
        ],
    ],
    [
        "inputGeoPoint",
        [
            0x48222FAF,
            [
                ["flags", flags, "#"],
                ["lat", "number", "double"],
                ["long", "number", "double"],
                ["accuracy_radius", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "inputPhotoEmpty",
        [
            0x1CD7BF0D,
            [],
        ],
    ],
    [
        "inputPhoto",
        [
            0x3BB3B94A,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputFileLocation",
        [
            0xDFDAABE1,
            [
                ["volume_id", "bigint", "long"],
                ["local_id", "number", "int"],
                ["secret", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputEncryptedFileLocation",
        [
            0xF5235D55,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputDocumentFileLocation",
        [
            0xBAD07584,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
                ["thumb_size", "string", "string"],
            ],
        ],
    ],
    [
        "inputSecureFileLocation",
        [
            0xCBC7EE28,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputTakeoutFileLocation",
        [
            0x29BE5899,
            [],
        ],
    ],
    [
        "inputPhotoFileLocation",
        [
            0x40181FFE,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
                ["thumb_size", "string", "string"],
            ],
        ],
    ],
    [
        "inputPhotoLegacyFileLocation",
        [
            0xD83466F3,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
                ["volume_id", "bigint", "long"],
                ["local_id", "number", "int"],
                ["secret", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputPeerPhotoFileLocation",
        [
            0x37257E99,
            [
                ["flags", flags, "#"],
                ["big", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["photo_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputStickerSetThumb",
        [
            0x9D84F3DB,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["thumb_version", "number", "int"],
            ],
        ],
    ],
    [
        "inputGroupCallStream",
        [
            0x0598A92A,
            [
                ["flags", flags, "#"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["time_ms", "bigint", "long"],
                ["scale", "number", "int"],
                ["video_channel", "number", "flags.0?int"],
                ["video_quality", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "peerUser",
        [
            0x59511722,
            [
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "peerChat",
        [
            0x36C6019A,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "peerChannel",
        [
            0xA2A5371E,
            [
                ["channel_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "storage.fileUnknown",
        [
            0xAA963B05,
            [],
        ],
    ],
    [
        "storage.filePartial",
        [
            0x40BC6F52,
            [],
        ],
    ],
    [
        "storage.fileJpeg",
        [
            0x007EFE0E,
            [],
        ],
    ],
    [
        "storage.fileGif",
        [
            0xCAE1AADF,
            [],
        ],
    ],
    [
        "storage.filePng",
        [
            0x0A4F63C0,
            [],
        ],
    ],
    [
        "storage.filePdf",
        [
            0xAE1E508D,
            [],
        ],
    ],
    [
        "storage.fileMp3",
        [
            0x528A0677,
            [],
        ],
    ],
    [
        "storage.fileMov",
        [
            0x4B09EBBC,
            [],
        ],
    ],
    [
        "storage.fileMp4",
        [
            0xB3CEA0E4,
            [],
        ],
    ],
    [
        "storage.fileWebp",
        [
            0x1081464C,
            [],
        ],
    ],
    [
        "userEmpty",
        [
            0xD3BC4B7A,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "user",
        [
            0x215C4438,
            [
                ["flags", flags, "#"],
                ["self", "true", "flags.10?true"],
                ["contact", "true", "flags.11?true"],
                ["mutual_contact", "true", "flags.12?true"],
                ["deleted", "true", "flags.13?true"],
                ["bot", "true", "flags.14?true"],
                ["bot_chat_history", "true", "flags.15?true"],
                ["bot_nochats", "true", "flags.16?true"],
                ["verified", "true", "flags.17?true"],
                ["restricted", "true", "flags.18?true"],
                ["min", "true", "flags.20?true"],
                ["bot_inline_geo", "true", "flags.21?true"],
                ["support", "true", "flags.23?true"],
                ["scam", "true", "flags.24?true"],
                ["apply_min_photo", "true", "flags.25?true"],
                ["fake", "true", "flags.26?true"],
                ["bot_attach_menu", "true", "flags.27?true"],
                ["premium", "true", "flags.28?true"],
                ["attach_menu_enabled", "true", "flags.29?true"],
                ["flags2", flags, "#"],
                ["bot_can_edit", "true", "flags2.1?true"],
                ["close_friend", "true", "flags2.2?true"],
                ["stories_hidden", "true", "flags2.3?true"],
                ["stories_unavailable", "true", "flags2.4?true"],
                ["contact_require_premium", "true", "flags2.10?true"],
                ["bot_business", "true", "flags2.11?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "flags.0?long"],
                ["first_name", "string", "flags.1?string"],
                ["last_name", "string", "flags.2?string"],
                ["username", "string", "flags.3?string"],
                ["phone", "string", "flags.4?string"],
                ["photo", "UserProfilePhoto", "flags.5?UserProfilePhoto"],
                ["status", "UserStatus", "flags.6?UserStatus"],
                ["bot_info_version", "number", "flags.14?int"],
                ["restriction_reason", ["RestrictionReason"], "flags.18?Vector<RestrictionReason>"],
                ["bot_inline_placeholder", "string", "flags.19?string"],
                ["lang_code", "string", "flags.22?string"],
                ["emoji_status", "EmojiStatus", "flags.30?EmojiStatus"],
                ["usernames", ["Username"], "flags2.0?Vector<Username>"],
                ["stories_max_id", "number", "flags2.5?int"],
                ["color", "PeerColor", "flags2.8?PeerColor"],
                ["profile_color", "PeerColor", "flags2.9?PeerColor"],
            ],
        ],
    ],
    [
        "userProfilePhotoEmpty",
        [
            0x4F11BAE1,
            [],
        ],
    ],
    [
        "userProfilePhoto",
        [
            0x82D1F706,
            [
                ["flags", flags, "#"],
                ["has_video", "true", "flags.0?true"],
                ["personal", "true", "flags.2?true"],
                ["photo_id", "bigint", "long"],
                ["stripped_thumb", Uint8Array, "flags.1?bytes"],
                ["dc_id", "number", "int"],
            ],
        ],
    ],
    [
        "userStatusEmpty",
        [
            0x09D05049,
            [],
        ],
    ],
    [
        "userStatusOnline",
        [
            0xEDB93949,
            [
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "userStatusOffline",
        [
            0x008C703F,
            [
                ["was_online", "number", "int"],
            ],
        ],
    ],
    [
        "userStatusRecently",
        [
            0x7B197DC8,
            [
                ["flags", flags, "#"],
                ["by_me", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "userStatusLastWeek",
        [
            0x541A1D1A,
            [
                ["flags", flags, "#"],
                ["by_me", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "userStatusLastMonth",
        [
            0x65899777,
            [
                ["flags", flags, "#"],
                ["by_me", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "chatEmpty",
        [
            0x29562865,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "chat",
        [
            0x41CBF256,
            [
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["left", "true", "flags.2?true"],
                ["deactivated", "true", "flags.5?true"],
                ["call_active", "true", "flags.23?true"],
                ["call_not_empty", "true", "flags.24?true"],
                ["noforwards", "true", "flags.25?true"],
                ["id", "bigint", "long"],
                ["title", "string", "string"],
                ["photo", "ChatPhoto", "ChatPhoto"],
                ["participants_count", "number", "int"],
                ["date", "number", "int"],
                ["version", "number", "int"],
                ["migrated_to", "InputChannel", "flags.6?InputChannel"],
                ["admin_rights", "ChatAdminRights", "flags.14?ChatAdminRights"],
                ["default_banned_rights", "ChatBannedRights", "flags.18?ChatBannedRights"],
            ],
        ],
    ],
    [
        "chatForbidden",
        [
            0x6592A1A7,
            [
                ["id", "bigint", "long"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "channel",
        [
            0x0AADFC8F,
            [
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["left", "true", "flags.2?true"],
                ["broadcast", "true", "flags.5?true"],
                ["verified", "true", "flags.7?true"],
                ["megagroup", "true", "flags.8?true"],
                ["restricted", "true", "flags.9?true"],
                ["signatures", "true", "flags.11?true"],
                ["min", "true", "flags.12?true"],
                ["scam", "true", "flags.19?true"],
                ["has_link", "true", "flags.20?true"],
                ["has_geo", "true", "flags.21?true"],
                ["slowmode_enabled", "true", "flags.22?true"],
                ["call_active", "true", "flags.23?true"],
                ["call_not_empty", "true", "flags.24?true"],
                ["fake", "true", "flags.25?true"],
                ["gigagroup", "true", "flags.26?true"],
                ["noforwards", "true", "flags.27?true"],
                ["join_to_send", "true", "flags.28?true"],
                ["join_request", "true", "flags.29?true"],
                ["forum", "true", "flags.30?true"],
                ["flags2", flags, "#"],
                ["stories_hidden", "true", "flags2.1?true"],
                ["stories_hidden_min", "true", "flags2.2?true"],
                ["stories_unavailable", "true", "flags2.3?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "flags.13?long"],
                ["title", "string", "string"],
                ["username", "string", "flags.6?string"],
                ["photo", "ChatPhoto", "ChatPhoto"],
                ["date", "number", "int"],
                ["restriction_reason", ["RestrictionReason"], "flags.9?Vector<RestrictionReason>"],
                ["admin_rights", "ChatAdminRights", "flags.14?ChatAdminRights"],
                ["banned_rights", "ChatBannedRights", "flags.15?ChatBannedRights"],
                ["default_banned_rights", "ChatBannedRights", "flags.18?ChatBannedRights"],
                ["participants_count", "number", "flags.17?int"],
                ["usernames", ["Username"], "flags2.0?Vector<Username>"],
                ["stories_max_id", "number", "flags2.4?int"],
                ["color", "PeerColor", "flags2.7?PeerColor"],
                ["profile_color", "PeerColor", "flags2.8?PeerColor"],
                ["emoji_status", "EmojiStatus", "flags2.9?EmojiStatus"],
                ["level", "number", "flags2.10?int"],
            ],
        ],
    ],
    [
        "channelForbidden",
        [
            0x17D493D5,
            [
                ["flags", flags, "#"],
                ["broadcast", "true", "flags.5?true"],
                ["megagroup", "true", "flags.8?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["title", "string", "string"],
                ["until_date", "number", "flags.16?int"],
            ],
        ],
    ],
    [
        "chatFull",
        [
            0x2633421B,
            [
                ["flags", flags, "#"],
                ["can_set_username", "true", "flags.7?true"],
                ["has_scheduled", "true", "flags.8?true"],
                ["translations_disabled", "true", "flags.19?true"],
                ["id", "bigint", "long"],
                ["about", "string", "string"],
                ["participants", "ChatParticipants", "ChatParticipants"],
                ["chat_photo", "Photo", "flags.2?Photo"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
                ["exported_invite", "ExportedChatInvite", "flags.13?ExportedChatInvite"],
                ["bot_info", ["BotInfo"], "flags.3?Vector<BotInfo>"],
                ["pinned_msg_id", "number", "flags.6?int"],
                ["folder_id", "number", "flags.11?int"],
                ["call", "InputGroupCall", "flags.12?InputGroupCall"],
                ["ttl_period", "number", "flags.14?int"],
                ["groupcall_default_join_as", "Peer", "flags.15?Peer"],
                ["theme_emoticon", "string", "flags.16?string"],
                ["requests_pending", "number", "flags.17?int"],
                ["recent_requesters", ["bigint"], "flags.17?Vector<long>"],
                ["available_reactions", "ChatReactions", "flags.18?ChatReactions"],
                ["reactions_limit", "number", "flags.20?int"],
            ],
        ],
    ],
    [
        "channelFull",
        [
            0xBBAB348D,
            [
                ["flags", flags, "#"],
                ["can_view_participants", "true", "flags.3?true"],
                ["can_set_username", "true", "flags.6?true"],
                ["can_set_stickers", "true", "flags.7?true"],
                ["hidden_prehistory", "true", "flags.10?true"],
                ["can_set_location", "true", "flags.16?true"],
                ["has_scheduled", "true", "flags.19?true"],
                ["can_view_stats", "true", "flags.20?true"],
                ["blocked", "true", "flags.22?true"],
                ["flags2", flags, "#"],
                ["can_delete_channel", "true", "flags2.0?true"],
                ["antispam", "true", "flags2.1?true"],
                ["participants_hidden", "true", "flags2.2?true"],
                ["translations_disabled", "true", "flags2.3?true"],
                ["stories_pinned_available", "true", "flags2.5?true"],
                ["view_forum_as_messages", "true", "flags2.6?true"],
                ["restricted_sponsored", "true", "flags2.11?true"],
                ["can_view_revenue", "true", "flags2.12?true"],
                ["paid_media_allowed", "true", "flags2.14?true"],
                ["id", "bigint", "long"],
                ["about", "string", "string"],
                ["participants_count", "number", "flags.0?int"],
                ["admins_count", "number", "flags.1?int"],
                ["kicked_count", "number", "flags.2?int"],
                ["banned_count", "number", "flags.2?int"],
                ["online_count", "number", "flags.13?int"],
                ["read_inbox_max_id", "number", "int"],
                ["read_outbox_max_id", "number", "int"],
                ["unread_count", "number", "int"],
                ["chat_photo", "Photo", "Photo"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
                ["exported_invite", "ExportedChatInvite", "flags.23?ExportedChatInvite"],
                ["bot_info", ["BotInfo"], "Vector<BotInfo>"],
                ["migrated_from_chat_id", "bigint", "flags.4?long"],
                ["migrated_from_max_id", "number", "flags.4?int"],
                ["pinned_msg_id", "number", "flags.5?int"],
                ["stickerset", "StickerSet", "flags.8?StickerSet"],
                ["available_min_id", "number", "flags.9?int"],
                ["folder_id", "number", "flags.11?int"],
                ["linked_chat_id", "bigint", "flags.14?long"],
                ["location", "ChannelLocation", "flags.15?ChannelLocation"],
                ["slowmode_seconds", "number", "flags.17?int"],
                ["slowmode_next_send_date", "number", "flags.18?int"],
                ["stats_dc", "number", "flags.12?int"],
                ["pts", "number", "int"],
                ["call", "InputGroupCall", "flags.21?InputGroupCall"],
                ["ttl_period", "number", "flags.24?int"],
                ["pending_suggestions", ["string"], "flags.25?Vector<string>"],
                ["groupcall_default_join_as", "Peer", "flags.26?Peer"],
                ["theme_emoticon", "string", "flags.27?string"],
                ["requests_pending", "number", "flags.28?int"],
                ["recent_requesters", ["bigint"], "flags.28?Vector<long>"],
                ["default_send_as", "Peer", "flags.29?Peer"],
                ["available_reactions", "ChatReactions", "flags.30?ChatReactions"],
                ["reactions_limit", "number", "flags2.13?int"],
                ["stories", "PeerStories", "flags2.4?PeerStories"],
                ["wallpaper", "WallPaper", "flags2.7?WallPaper"],
                ["boosts_applied", "number", "flags2.8?int"],
                ["boosts_unrestrict", "number", "flags2.9?int"],
                ["emojiset", "StickerSet", "flags2.10?StickerSet"],
            ],
        ],
    ],
    [
        "chatParticipant",
        [
            0xC02D4007,
            [
                ["user_id", "bigint", "long"],
                ["inviter_id", "bigint", "long"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "chatParticipantCreator",
        [
            0xE46BCEE4,
            [
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "chatParticipantAdmin",
        [
            0xA0933F5B,
            [
                ["user_id", "bigint", "long"],
                ["inviter_id", "bigint", "long"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "chatParticipantsForbidden",
        [
            0x8763D3E1,
            [
                ["flags", flags, "#"],
                ["chat_id", "bigint", "long"],
                ["self_participant", "ChatParticipant", "flags.0?ChatParticipant"],
            ],
        ],
    ],
    [
        "chatParticipants",
        [
            0x3CBC93F8,
            [
                ["chat_id", "bigint", "long"],
                ["participants", ["ChatParticipant"], "Vector<ChatParticipant>"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "chatPhotoEmpty",
        [
            0x37C1011C,
            [],
        ],
    ],
    [
        "chatPhoto",
        [
            0x1C6E1C11,
            [
                ["flags", flags, "#"],
                ["has_video", "true", "flags.0?true"],
                ["photo_id", "bigint", "long"],
                ["stripped_thumb", Uint8Array, "flags.1?bytes"],
                ["dc_id", "number", "int"],
            ],
        ],
    ],
    [
        "messageEmpty",
        [
            0x90A6CA84,
            [
                ["flags", flags, "#"],
                ["id", "number", "int"],
                ["peer_id", "Peer", "flags.0?Peer"],
            ],
        ],
    ],
    [
        "message",
        [
            0x94345242,
            [
                ["flags", flags, "#"],
                ["out", "true", "flags.1?true"],
                ["mentioned", "true", "flags.4?true"],
                ["media_unread", "true", "flags.5?true"],
                ["silent", "true", "flags.13?true"],
                ["post", "true", "flags.14?true"],
                ["from_scheduled", "true", "flags.18?true"],
                ["legacy", "true", "flags.19?true"],
                ["edit_hide", "true", "flags.21?true"],
                ["pinned", "true", "flags.24?true"],
                ["noforwards", "true", "flags.26?true"],
                ["invert_media", "true", "flags.27?true"],
                ["flags2", flags, "#"],
                ["offline", "true", "flags2.1?true"],
                ["id", "number", "int"],
                ["from_id", "Peer", "flags.8?Peer"],
                ["from_boosts_applied", "number", "flags.29?int"],
                ["peer_id", "Peer", "Peer"],
                ["saved_peer_id", "Peer", "flags.28?Peer"],
                ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
                ["via_bot_id", "bigint", "flags.11?long"],
                ["via_business_bot_id", "bigint", "flags2.0?long"],
                ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
                ["date", "number", "int"],
                ["message", "string", "string"],
                ["media", "MessageMedia", "flags.9?MessageMedia"],
                ["reply_markup", "ReplyMarkup", "flags.6?ReplyMarkup"],
                ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
                ["views", "number", "flags.10?int"],
                ["forwards", "number", "flags.10?int"],
                ["replies", "MessageReplies", "flags.23?MessageReplies"],
                ["edit_date", "number", "flags.15?int"],
                ["post_author", "string", "flags.16?string"],
                ["grouped_id", "bigint", "flags.17?long"],
                ["reactions", "MessageReactions", "flags.20?MessageReactions"],
                ["restriction_reason", ["RestrictionReason"], "flags.22?Vector<RestrictionReason>"],
                ["ttl_period", "number", "flags.25?int"],
                ["quick_reply_shortcut_id", "number", "flags.30?int"],
                ["effect", "bigint", "flags2.2?long"],
                ["factcheck", "FactCheck", "flags2.3?FactCheck"],
            ],
        ],
    ],
    [
        "messageService",
        [
            0x2B085862,
            [
                ["flags", flags, "#"],
                ["out", "true", "flags.1?true"],
                ["mentioned", "true", "flags.4?true"],
                ["media_unread", "true", "flags.5?true"],
                ["silent", "true", "flags.13?true"],
                ["post", "true", "flags.14?true"],
                ["legacy", "true", "flags.19?true"],
                ["id", "number", "int"],
                ["from_id", "Peer", "flags.8?Peer"],
                ["peer_id", "Peer", "Peer"],
                ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
                ["date", "number", "int"],
                ["action", "MessageAction", "MessageAction"],
                ["ttl_period", "number", "flags.25?int"],
            ],
        ],
    ],
    [
        "messageMediaEmpty",
        [
            0x3DED6320,
            [],
        ],
    ],
    [
        "messageMediaPhoto",
        [
            0x695150D7,
            [
                ["flags", flags, "#"],
                ["spoiler", "true", "flags.3?true"],
                ["photo", "Photo", "flags.0?Photo"],
                ["ttl_seconds", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "messageMediaGeo",
        [
            0x56E0D474,
            [
                ["geo", "GeoPoint", "GeoPoint"],
            ],
        ],
    ],
    [
        "messageMediaContact",
        [
            0x70322949,
            [
                ["phone_number", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["vcard", "string", "string"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageMediaUnsupported",
        [
            0x9F84F49E,
            [],
        ],
    ],
    [
        "messageMediaDocument",
        [
            0x4CF4D72D,
            [
                ["flags", flags, "#"],
                ["nopremium", "true", "flags.3?true"],
                ["spoiler", "true", "flags.4?true"],
                ["video", "true", "flags.6?true"],
                ["round", "true", "flags.7?true"],
                ["voice", "true", "flags.8?true"],
                ["document", "Document", "flags.0?Document"],
                ["alt_document", "Document", "flags.5?Document"],
                ["ttl_seconds", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "messageMediaWebPage",
        [
            0xDDF10C3B,
            [
                ["flags", flags, "#"],
                ["force_large_media", "true", "flags.0?true"],
                ["force_small_media", "true", "flags.1?true"],
                ["manual", "true", "flags.3?true"],
                ["safe", "true", "flags.4?true"],
                ["webpage", "WebPage", "WebPage"],
            ],
        ],
    ],
    [
        "messageMediaVenue",
        [
            0x2EC0533F,
            [
                ["geo", "GeoPoint", "GeoPoint"],
                ["title", "string", "string"],
                ["address", "string", "string"],
                ["provider", "string", "string"],
                ["venue_id", "string", "string"],
                ["venue_type", "string", "string"],
            ],
        ],
    ],
    [
        "messageMediaGame",
        [
            0xFDB19008,
            [
                ["game", "Game", "Game"],
            ],
        ],
    ],
    [
        "messageMediaInvoice",
        [
            0xF6A548D3,
            [
                ["flags", flags, "#"],
                ["shipping_address_requested", "true", "flags.1?true"],
                ["test", "true", "flags.3?true"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.0?WebDocument"],
                ["receipt_msg_id", "number", "flags.2?int"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["start_param", "string", "string"],
                ["extended_media", "MessageExtendedMedia", "flags.4?MessageExtendedMedia"],
            ],
        ],
    ],
    [
        "messageMediaGeoLive",
        [
            0xB940C666,
            [
                ["flags", flags, "#"],
                ["geo", "GeoPoint", "GeoPoint"],
                ["heading", "number", "flags.0?int"],
                ["period", "number", "int"],
                ["proximity_notification_radius", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "messageMediaPoll",
        [
            0x4BD6E798,
            [
                ["poll", "Poll", "Poll"],
                ["results", "PollResults", "PollResults"],
            ],
        ],
    ],
    [
        "messageMediaDice",
        [
            0x3F7EE58B,
            [
                ["value", "number", "int"],
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "messageMediaStory",
        [
            0x68CB6283,
            [
                ["flags", flags, "#"],
                ["via_mention", "true", "flags.1?true"],
                ["peer", "Peer", "Peer"],
                ["id", "number", "int"],
                ["story", "StoryItem", "flags.0?StoryItem"],
            ],
        ],
    ],
    [
        "messageMediaGiveaway",
        [
            0xDAAD85B0,
            [
                ["flags", flags, "#"],
                ["only_new_subscribers", "true", "flags.0?true"],
                ["winners_are_visible", "true", "flags.2?true"],
                ["channels", ["bigint"], "Vector<long>"],
                ["countries_iso2", ["string"], "flags.1?Vector<string>"],
                ["prize_description", "string", "flags.3?string"],
                ["quantity", "number", "int"],
                ["months", "number", "int"],
                ["until_date", "number", "int"],
            ],
        ],
    ],
    [
        "messageMediaGiveawayResults",
        [
            0xC6991068,
            [
                ["flags", flags, "#"],
                ["only_new_subscribers", "true", "flags.0?true"],
                ["refunded", "true", "flags.2?true"],
                ["channel_id", "bigint", "long"],
                ["additional_peers_count", "number", "flags.3?int"],
                ["launch_msg_id", "number", "int"],
                ["winners_count", "number", "int"],
                ["unclaimed_count", "number", "int"],
                ["winners", ["bigint"], "Vector<long>"],
                ["months", "number", "int"],
                ["prize_description", "string", "flags.1?string"],
                ["until_date", "number", "int"],
            ],
        ],
    ],
    [
        "messageMediaPaidMedia",
        [
            0xA8852491,
            [
                ["stars_amount", "bigint", "long"],
                ["extended_media", ["MessageExtendedMedia"], "Vector<MessageExtendedMedia>"],
            ],
        ],
    ],
    [
        "messageActionEmpty",
        [
            0xB6AEF7B0,
            [],
        ],
    ],
    [
        "messageActionChatCreate",
        [
            0xBD47CBAD,
            [
                ["title", "string", "string"],
                ["users", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messageActionChatEditTitle",
        [
            0xB5A1CE5A,
            [
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionChatEditPhoto",
        [
            0x7FCB13A8,
            [
                ["photo", "Photo", "Photo"],
            ],
        ],
    ],
    [
        "messageActionChatDeletePhoto",
        [
            0x95E3FBEF,
            [],
        ],
    ],
    [
        "messageActionChatAddUser",
        [
            0x15CEFD00,
            [
                ["users", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messageActionChatDeleteUser",
        [
            0xA43F30CC,
            [
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageActionChatJoinedByLink",
        [
            0x031224C3,
            [
                ["inviter_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageActionChannelCreate",
        [
            0x95D2AC92,
            [
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionChatMigrateTo",
        [
            0xE1037F92,
            [
                ["channel_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageActionChannelMigrateFrom",
        [
            0xEA3948E9,
            [
                ["title", "string", "string"],
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageActionPinMessage",
        [
            0x94BD38ED,
            [],
        ],
    ],
    [
        "messageActionHistoryClear",
        [
            0x9FBAB604,
            [],
        ],
    ],
    [
        "messageActionGameScore",
        [
            0x92A72876,
            [
                ["game_id", "bigint", "long"],
                ["score", "number", "int"],
            ],
        ],
    ],
    [
        "messageActionPaymentSentMe",
        [
            0x8F31B327,
            [
                ["flags", flags, "#"],
                ["recurring_init", "true", "flags.2?true"],
                ["recurring_used", "true", "flags.3?true"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["payload", Uint8Array, "bytes"],
                ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
                ["shipping_option_id", "string", "flags.1?string"],
                ["charge", "PaymentCharge", "PaymentCharge"],
            ],
        ],
    ],
    [
        "messageActionPaymentSent",
        [
            0x96163F56,
            [
                ["flags", flags, "#"],
                ["recurring_init", "true", "flags.2?true"],
                ["recurring_used", "true", "flags.3?true"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["invoice_slug", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "messageActionPhoneCall",
        [
            0x80E11A7F,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.2?true"],
                ["call_id", "bigint", "long"],
                ["reason", "PhoneCallDiscardReason", "flags.0?PhoneCallDiscardReason"],
                ["duration", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "messageActionScreenshotTaken",
        [
            0x4792929B,
            [],
        ],
    ],
    [
        "messageActionCustomAction",
        [
            0xFAE69F56,
            [
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionBotAllowed",
        [
            0xC516D679,
            [
                ["flags", flags, "#"],
                ["attach_menu", "true", "flags.1?true"],
                ["from_request", "true", "flags.3?true"],
                ["domain", "string", "flags.0?string"],
                ["app", "BotApp", "flags.2?BotApp"],
            ],
        ],
    ],
    [
        "messageActionSecureValuesSentMe",
        [
            0x1B287353,
            [
                ["values", ["SecureValue"], "Vector<SecureValue>"],
                ["credentials", "SecureCredentialsEncrypted", "SecureCredentialsEncrypted"],
            ],
        ],
    ],
    [
        "messageActionSecureValuesSent",
        [
            0xD95C6154,
            [
                ["types", ["SecureValueType"], "Vector<SecureValueType>"],
            ],
        ],
    ],
    [
        "messageActionContactSignUp",
        [
            0xF3F25F76,
            [],
        ],
    ],
    [
        "messageActionGeoProximityReached",
        [
            0x98E0D697,
            [
                ["from_id", "Peer", "Peer"],
                ["to_id", "Peer", "Peer"],
                ["distance", "number", "int"],
            ],
        ],
    ],
    [
        "messageActionGroupCall",
        [
            0x7A0D7F42,
            [
                ["flags", flags, "#"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["duration", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messageActionInviteToGroupCall",
        [
            0x502F92F7,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["users", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messageActionSetMessagesTTL",
        [
            0x3C134D7B,
            [
                ["flags", flags, "#"],
                ["period", "number", "int"],
                ["auto_setting_from", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "messageActionGroupCallScheduled",
        [
            0xB3A07661,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["schedule_date", "number", "int"],
            ],
        ],
    ],
    [
        "messageActionSetChatTheme",
        [
            0xAA786345,
            [
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionChatJoinedByRequest",
        [
            0xEBBCA3CB,
            [],
        ],
    ],
    [
        "messageActionWebViewDataSentMe",
        [
            0x47DD8079,
            [
                ["text", "string", "string"],
                ["data", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionWebViewDataSent",
        [
            0xB4C38CB5,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "messageActionGiftPremium",
        [
            0xC83D6AEC,
            [
                ["flags", flags, "#"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
                ["months", "number", "int"],
                ["crypto_currency", "string", "flags.0?string"],
                ["crypto_amount", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "messageActionTopicCreate",
        [
            0x0D999256,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["icon_color", "number", "int"],
                ["icon_emoji_id", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "messageActionTopicEdit",
        [
            0xC0944820,
            [
                ["flags", flags, "#"],
                ["title", "string", "flags.0?string"],
                ["icon_emoji_id", "bigint", "flags.1?long"],
                ["closed", "boolean", "flags.2?Bool"],
                ["hidden", "boolean", "flags.3?Bool"],
            ],
        ],
    ],
    [
        "messageActionSuggestProfilePhoto",
        [
            0x57DE635E,
            [
                ["photo", "Photo", "Photo"],
            ],
        ],
    ],
    [
        "messageActionRequestedPeer",
        [
            0x31518E9B,
            [
                ["button_id", "number", "int"],
                ["peers", ["Peer"], "Vector<Peer>"],
            ],
        ],
    ],
    [
        "messageActionSetChatWallPaper",
        [
            0x5060A3F4,
            [
                ["flags", flags, "#"],
                ["same", "true", "flags.0?true"],
                ["for_both", "true", "flags.1?true"],
                ["wallpaper", "WallPaper", "WallPaper"],
            ],
        ],
    ],
    [
        "messageActionGiftCode",
        [
            0x678C2E09,
            [
                ["flags", flags, "#"],
                ["via_giveaway", "true", "flags.0?true"],
                ["unclaimed", "true", "flags.2?true"],
                ["boost_peer", "Peer", "flags.1?Peer"],
                ["months", "number", "int"],
                ["slug", "string", "string"],
                ["currency", "string", "flags.2?string"],
                ["amount", "bigint", "flags.2?long"],
                ["crypto_currency", "string", "flags.3?string"],
                ["crypto_amount", "bigint", "flags.3?long"],
            ],
        ],
    ],
    [
        "messageActionGiveawayLaunch",
        [
            0x332BA9ED,
            [],
        ],
    ],
    [
        "messageActionGiveawayResults",
        [
            0x2A9FADC5,
            [
                ["winners_count", "number", "int"],
                ["unclaimed_count", "number", "int"],
            ],
        ],
    ],
    [
        "messageActionBoostApply",
        [
            0xCC02AA6D,
            [
                ["boosts", "number", "int"],
            ],
        ],
    ],
    [
        "messageActionRequestedPeerSentMe",
        [
            0x93B31848,
            [
                ["button_id", "number", "int"],
                ["peers", ["RequestedPeer"], "Vector<RequestedPeer>"],
            ],
        ],
    ],
    [
        "dialog",
        [
            0xD58A08C6,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.2?true"],
                ["unread_mark", "true", "flags.3?true"],
                ["view_forum_as_messages", "true", "flags.6?true"],
                ["peer", "Peer", "Peer"],
                ["top_message", "number", "int"],
                ["read_inbox_max_id", "number", "int"],
                ["read_outbox_max_id", "number", "int"],
                ["unread_count", "number", "int"],
                ["unread_mentions_count", "number", "int"],
                ["unread_reactions_count", "number", "int"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
                ["pts", "number", "flags.0?int"],
                ["draft", "DraftMessage", "flags.1?DraftMessage"],
                ["folder_id", "number", "flags.4?int"],
                ["ttl_period", "number", "flags.5?int"],
            ],
        ],
    ],
    [
        "dialogFolder",
        [
            0x71BD134C,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.2?true"],
                ["folder", "Folder", "Folder"],
                ["peer", "Peer", "Peer"],
                ["top_message", "number", "int"],
                ["unread_muted_peers_count", "number", "int"],
                ["unread_unmuted_peers_count", "number", "int"],
                ["unread_muted_messages_count", "number", "int"],
                ["unread_unmuted_messages_count", "number", "int"],
            ],
        ],
    ],
    [
        "photoEmpty",
        [
            0x2331B22D,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "photo",
        [
            0xFB197A65,
            [
                ["flags", flags, "#"],
                ["has_stickers", "true", "flags.0?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
                ["date", "number", "int"],
                ["sizes", ["PhotoSize"], "Vector<PhotoSize>"],
                ["video_sizes", ["VideoSize"], "flags.1?Vector<VideoSize>"],
                ["dc_id", "number", "int"],
            ],
        ],
    ],
    [
        "photoSizeEmpty",
        [
            0x0E17E23C,
            [
                ["type", "string", "string"],
            ],
        ],
    ],
    [
        "photoSize",
        [
            0x75C78E60,
            [
                ["type", "string", "string"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["size", "number", "int"],
            ],
        ],
    ],
    [
        "photoCachedSize",
        [
            0x021E1AD6,
            [
                ["type", "string", "string"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "photoStrippedSize",
        [
            0xE0B0BC2E,
            [
                ["type", "string", "string"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "photoSizeProgressive",
        [
            0xFA3EFB95,
            [
                ["type", "string", "string"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["sizes", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "photoPathSize",
        [
            0xD8214D41,
            [
                ["type", "string", "string"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "geoPointEmpty",
        [
            0x1117DD5F,
            [],
        ],
    ],
    [
        "geoPoint",
        [
            0xB2A2F663,
            [
                ["flags", flags, "#"],
                ["long", "number", "double"],
                ["lat", "number", "double"],
                ["access_hash", "bigint", "long"],
                ["accuracy_radius", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "auth.sentCode",
        [
            0x5E002502,
            [
                ["flags", flags, "#"],
                ["type", "auth_SentCodeType", "auth.SentCodeType"],
                ["phone_code_hash", "string", "string"],
                ["next_type", "auth_CodeType", "flags.1?auth.CodeType"],
                ["timeout", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "auth.sentCodeSuccess",
        [
            0x2390FE44,
            [
                ["authorization", "auth_Authorization", "auth.Authorization"],
            ],
        ],
    ],
    [
        "auth.authorization",
        [
            0x2EA2C0D4,
            [
                ["flags", flags, "#"],
                ["setup_password_required", "true", "flags.1?true"],
                ["otherwise_relogin_days", "number", "flags.1?int"],
                ["tmp_sessions", "number", "flags.0?int"],
                ["future_auth_token", Uint8Array, "flags.2?bytes"],
                ["user", "User", "User"],
            ],
        ],
    ],
    [
        "auth.authorizationSignUpRequired",
        [
            0x44747E9A,
            [
                ["flags", flags, "#"],
                ["terms_of_service", "help_TermsOfService", "flags.0?help.TermsOfService"],
            ],
        ],
    ],
    [
        "auth.exportedAuthorization",
        [
            0xB434E2B8,
            [
                ["id", "bigint", "long"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputNotifyPeer",
        [
            0xB8BC5B0C,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "inputNotifyUsers",
        [
            0x193B4417,
            [],
        ],
    ],
    [
        "inputNotifyChats",
        [
            0x4A95E84E,
            [],
        ],
    ],
    [
        "inputNotifyBroadcasts",
        [
            0xB1DB7C7E,
            [],
        ],
    ],
    [
        "inputNotifyForumTopic",
        [
            0x5C467992,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputPeerNotifySettings",
        [
            0xCACB6AE2,
            [
                ["flags", flags, "#"],
                ["show_previews", "boolean", "flags.0?Bool"],
                ["silent", "boolean", "flags.1?Bool"],
                ["mute_until", "number", "flags.2?int"],
                ["sound", "NotificationSound", "flags.3?NotificationSound"],
                ["stories_muted", "boolean", "flags.6?Bool"],
                ["stories_hide_sender", "boolean", "flags.7?Bool"],
                ["stories_sound", "NotificationSound", "flags.8?NotificationSound"],
            ],
        ],
    ],
    [
        "peerNotifySettings",
        [
            0x99622C0C,
            [
                ["flags", flags, "#"],
                ["show_previews", "boolean", "flags.0?Bool"],
                ["silent", "boolean", "flags.1?Bool"],
                ["mute_until", "number", "flags.2?int"],
                ["ios_sound", "NotificationSound", "flags.3?NotificationSound"],
                ["android_sound", "NotificationSound", "flags.4?NotificationSound"],
                ["other_sound", "NotificationSound", "flags.5?NotificationSound"],
                ["stories_muted", "boolean", "flags.6?Bool"],
                ["stories_hide_sender", "boolean", "flags.7?Bool"],
                ["stories_ios_sound", "NotificationSound", "flags.8?NotificationSound"],
                ["stories_android_sound", "NotificationSound", "flags.9?NotificationSound"],
                ["stories_other_sound", "NotificationSound", "flags.10?NotificationSound"],
            ],
        ],
    ],
    [
        "peerSettings",
        [
            0xACD66C5E,
            [
                ["flags", flags, "#"],
                ["report_spam", "true", "flags.0?true"],
                ["add_contact", "true", "flags.1?true"],
                ["block_contact", "true", "flags.2?true"],
                ["share_contact", "true", "flags.3?true"],
                ["need_contacts_exception", "true", "flags.4?true"],
                ["report_geo", "true", "flags.5?true"],
                ["autoarchived", "true", "flags.7?true"],
                ["invite_members", "true", "flags.8?true"],
                ["request_chat_broadcast", "true", "flags.10?true"],
                ["business_bot_paused", "true", "flags.11?true"],
                ["business_bot_can_reply", "true", "flags.12?true"],
                ["geo_distance", "number", "flags.6?int"],
                ["request_chat_title", "string", "flags.9?string"],
                ["request_chat_date", "number", "flags.9?int"],
                ["business_bot_id", "bigint", "flags.13?long"],
                ["business_bot_manage_url", "string", "flags.13?string"],
            ],
        ],
    ],
    [
        "wallPaper",
        [
            0xA437C3ED,
            [
                ["id", "bigint", "long"],
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["default", "true", "flags.1?true"],
                ["pattern", "true", "flags.3?true"],
                ["dark", "true", "flags.4?true"],
                ["access_hash", "bigint", "long"],
                ["slug", "string", "string"],
                ["document", "Document", "Document"],
                ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
            ],
        ],
    ],
    [
        "wallPaperNoFile",
        [
            0xE0804116,
            [
                ["id", "bigint", "long"],
                ["flags", flags, "#"],
                ["default", "true", "flags.1?true"],
                ["dark", "true", "flags.4?true"],
                ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
            ],
        ],
    ],
    [
        "inputReportReasonSpam",
        [
            0x58DBCAB8,
            [],
        ],
    ],
    [
        "inputReportReasonViolence",
        [
            0x1E22C78D,
            [],
        ],
    ],
    [
        "inputReportReasonPornography",
        [
            0x2E59D922,
            [],
        ],
    ],
    [
        "inputReportReasonChildAbuse",
        [
            0xADF44EE3,
            [],
        ],
    ],
    [
        "inputReportReasonOther",
        [
            0xC1E4A2B1,
            [],
        ],
    ],
    [
        "inputReportReasonCopyright",
        [
            0x9B89F93A,
            [],
        ],
    ],
    [
        "inputReportReasonGeoIrrelevant",
        [
            0xDBD4FEED,
            [],
        ],
    ],
    [
        "inputReportReasonFake",
        [
            0xF5DDD6E7,
            [],
        ],
    ],
    [
        "inputReportReasonIllegalDrugs",
        [
            0x0A8EB2BE,
            [],
        ],
    ],
    [
        "inputReportReasonPersonalDetails",
        [
            0x9EC7863D,
            [],
        ],
    ],
    [
        "userFull",
        [
            0xCC997720,
            [
                ["flags", flags, "#"],
                ["blocked", "true", "flags.0?true"],
                ["phone_calls_available", "true", "flags.4?true"],
                ["phone_calls_private", "true", "flags.5?true"],
                ["can_pin_message", "true", "flags.7?true"],
                ["has_scheduled", "true", "flags.12?true"],
                ["video_calls_available", "true", "flags.13?true"],
                ["voice_messages_forbidden", "true", "flags.20?true"],
                ["translations_disabled", "true", "flags.23?true"],
                ["stories_pinned_available", "true", "flags.26?true"],
                ["blocked_my_stories_from", "true", "flags.27?true"],
                ["wallpaper_overridden", "true", "flags.28?true"],
                ["contact_require_premium", "true", "flags.29?true"],
                ["read_dates_private", "true", "flags.30?true"],
                ["flags2", flags, "#"],
                ["sponsored_enabled", "true", "flags2.7?true"],
                ["id", "bigint", "long"],
                ["about", "string", "flags.1?string"],
                ["settings", "PeerSettings", "PeerSettings"],
                ["personal_photo", "Photo", "flags.21?Photo"],
                ["profile_photo", "Photo", "flags.2?Photo"],
                ["fallback_photo", "Photo", "flags.22?Photo"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
                ["bot_info", "BotInfo", "flags.3?BotInfo"],
                ["pinned_msg_id", "number", "flags.6?int"],
                ["common_chats_count", "number", "int"],
                ["folder_id", "number", "flags.11?int"],
                ["ttl_period", "number", "flags.14?int"],
                ["theme_emoticon", "string", "flags.15?string"],
                ["private_forward_name", "string", "flags.16?string"],
                ["bot_group_admin_rights", "ChatAdminRights", "flags.17?ChatAdminRights"],
                ["bot_broadcast_admin_rights", "ChatAdminRights", "flags.18?ChatAdminRights"],
                ["premium_gifts", ["PremiumGiftOption"], "flags.19?Vector<PremiumGiftOption>"],
                ["wallpaper", "WallPaper", "flags.24?WallPaper"],
                ["stories", "PeerStories", "flags.25?PeerStories"],
                ["business_work_hours", "BusinessWorkHours", "flags2.0?BusinessWorkHours"],
                ["business_location", "BusinessLocation", "flags2.1?BusinessLocation"],
                ["business_greeting_message", "BusinessGreetingMessage", "flags2.2?BusinessGreetingMessage"],
                ["business_away_message", "BusinessAwayMessage", "flags2.3?BusinessAwayMessage"],
                ["business_intro", "BusinessIntro", "flags2.4?BusinessIntro"],
                ["birthday", "Birthday", "flags2.5?Birthday"],
                ["personal_channel_id", "bigint", "flags2.6?long"],
                ["personal_channel_message", "number", "flags2.6?int"],
            ],
        ],
    ],
    [
        "contact",
        [
            0x145ADE0B,
            [
                ["user_id", "bigint", "long"],
                ["mutual", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "importedContact",
        [
            0xC13E3C50,
            [
                ["user_id", "bigint", "long"],
                ["client_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "contactStatus",
        [
            0x16D9703B,
            [
                ["user_id", "bigint", "long"],
                ["status", "UserStatus", "UserStatus"],
            ],
        ],
    ],
    [
        "contacts.contactsNotModified",
        [
            0xB74BA9D2,
            [],
        ],
    ],
    [
        "contacts.contacts",
        [
            0xEAE87E42,
            [
                ["contacts", ["Contact"], "Vector<Contact>"],
                ["saved_count", "number", "int"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "contacts.importedContacts",
        [
            0x77D01C3B,
            [
                ["imported", ["ImportedContact"], "Vector<ImportedContact>"],
                ["popular_invites", ["PopularContact"], "Vector<PopularContact>"],
                ["retry_contacts", ["bigint"], "Vector<long>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "contacts.blocked",
        [
            0x0ADE1591,
            [
                ["blocked", ["PeerBlocked"], "Vector<PeerBlocked>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "contacts.blockedSlice",
        [
            0xE1664194,
            [
                ["count", "number", "int"],
                ["blocked", ["PeerBlocked"], "Vector<PeerBlocked>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.dialogs",
        [
            0x15BA6C40,
            [
                ["dialogs", ["Dialog"], "Vector<Dialog>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.dialogsSlice",
        [
            0x71E094F3,
            [
                ["count", "number", "int"],
                ["dialogs", ["Dialog"], "Vector<Dialog>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.dialogsNotModified",
        [
            0xF0E3E596,
            [
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.messages",
        [
            0x8C718E87,
            [
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.messagesSlice",
        [
            0x3A54685E,
            [
                ["flags", flags, "#"],
                ["inexact", "true", "flags.1?true"],
                ["count", "number", "int"],
                ["next_rate", "number", "flags.0?int"],
                ["offset_id_offset", "number", "flags.2?int"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.channelMessages",
        [
            0xC776BA4E,
            [
                ["flags", flags, "#"],
                ["inexact", "true", "flags.1?true"],
                ["pts", "number", "int"],
                ["count", "number", "int"],
                ["offset_id_offset", "number", "flags.2?int"],
                ["messages", ["Message"], "Vector<Message>"],
                ["topics", ["ForumTopic"], "Vector<ForumTopic>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.messagesNotModified",
        [
            0x74535F21,
            [
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.chats",
        [
            0x64FF9FD5,
            [
                ["chats", ["Chat"], "Vector<Chat>"],
            ],
        ],
    ],
    [
        "messages.chatsSlice",
        [
            0x9CD81144,
            [
                ["count", "number", "int"],
                ["chats", ["Chat"], "Vector<Chat>"],
            ],
        ],
    ],
    [
        "messages.chatFull",
        [
            0xE5D7D19C,
            [
                ["full_chat", "ChatFull", "ChatFull"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.affectedHistory",
        [
            0xB45C69D1,
            [
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["offset", "number", "int"],
            ],
        ],
    ],
    [
        "inputMessagesFilterEmpty",
        [
            0x57E2F66C,
            [],
        ],
    ],
    [
        "inputMessagesFilterPhotos",
        [
            0x9609A51C,
            [],
        ],
    ],
    [
        "inputMessagesFilterVideo",
        [
            0x9FC00E65,
            [],
        ],
    ],
    [
        "inputMessagesFilterPhotoVideo",
        [
            0x56E9F0E4,
            [],
        ],
    ],
    [
        "inputMessagesFilterDocument",
        [
            0x9EDDF188,
            [],
        ],
    ],
    [
        "inputMessagesFilterUrl",
        [
            0x7EF0DD87,
            [],
        ],
    ],
    [
        "inputMessagesFilterGif",
        [
            0xFFC86587,
            [],
        ],
    ],
    [
        "inputMessagesFilterVoice",
        [
            0x50F5C392,
            [],
        ],
    ],
    [
        "inputMessagesFilterMusic",
        [
            0x3751B49E,
            [],
        ],
    ],
    [
        "inputMessagesFilterChatPhotos",
        [
            0x3A20ECB8,
            [],
        ],
    ],
    [
        "inputMessagesFilterPhoneCalls",
        [
            0x80C99768,
            [
                ["flags", flags, "#"],
                ["missed", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "inputMessagesFilterRoundVoice",
        [
            0x7A7C17A4,
            [],
        ],
    ],
    [
        "inputMessagesFilterRoundVideo",
        [
            0xB549DA53,
            [],
        ],
    ],
    [
        "inputMessagesFilterMyMentions",
        [
            0xC1F8E69A,
            [],
        ],
    ],
    [
        "inputMessagesFilterGeo",
        [
            0xE7026D0D,
            [],
        ],
    ],
    [
        "inputMessagesFilterContacts",
        [
            0xE062DB83,
            [],
        ],
    ],
    [
        "inputMessagesFilterPinned",
        [
            0x1BB00451,
            [],
        ],
    ],
    [
        "updateNewMessage",
        [
            0x1F2B0AFD,
            [
                ["message", "Message", "Message"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateMessageID",
        [
            0x4E90BFD6,
            [
                ["id", "number", "int"],
                ["random_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateDeleteMessages",
        [
            0xA20DB0E5,
            [
                ["messages", ["number"], "Vector<int>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateUserTyping",
        [
            0xC01E857F,
            [
                ["user_id", "bigint", "long"],
                ["action", "SendMessageAction", "SendMessageAction"],
            ],
        ],
    ],
    [
        "updateChatUserTyping",
        [
            0x83487AF0,
            [
                ["chat_id", "bigint", "long"],
                ["from_id", "Peer", "Peer"],
                ["action", "SendMessageAction", "SendMessageAction"],
            ],
        ],
    ],
    [
        "updateChatParticipants",
        [
            0x07761198,
            [
                ["participants", "ChatParticipants", "ChatParticipants"],
            ],
        ],
    ],
    [
        "updateUserStatus",
        [
            0xE5BDF8DE,
            [
                ["user_id", "bigint", "long"],
                ["status", "UserStatus", "UserStatus"],
            ],
        ],
    ],
    [
        "updateUserName",
        [
            0xA7848924,
            [
                ["user_id", "bigint", "long"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["usernames", ["Username"], "Vector<Username>"],
            ],
        ],
    ],
    [
        "updateNewAuthorization",
        [
            0x8951ABEF,
            [
                ["flags", flags, "#"],
                ["unconfirmed", "true", "flags.0?true"],
                ["hash", "bigint", "long"],
                ["date", "number", "flags.0?int"],
                ["device", "string", "flags.0?string"],
                ["location", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "updateNewEncryptedMessage",
        [
            0x12BCBD9A,
            [
                ["message", "EncryptedMessage", "EncryptedMessage"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateEncryptedChatTyping",
        [
            0x1710F156,
            [
                ["chat_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateEncryption",
        [
            0xB4A2E88D,
            [
                ["chat", "EncryptedChat", "EncryptedChat"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "updateEncryptedMessagesRead",
        [
            0x38FE25B7,
            [
                ["chat_id", "number", "int"],
                ["max_date", "number", "int"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "updateChatParticipantAdd",
        [
            0x3DDA5451,
            [
                ["chat_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["inviter_id", "bigint", "long"],
                ["date", "number", "int"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "updateChatParticipantDelete",
        [
            0xE32F3D77,
            [
                ["chat_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "updateDcOptions",
        [
            0x8E5E9873,
            [
                ["dc_options", ["DcOption"], "Vector<DcOption>"],
            ],
        ],
    ],
    [
        "updateNotifySettings",
        [
            0xBEC268EF,
            [
                ["peer", "NotifyPeer", "NotifyPeer"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
            ],
        ],
    ],
    [
        "updateServiceNotification",
        [
            0xEBE46819,
            [
                ["flags", flags, "#"],
                ["popup", "true", "flags.0?true"],
                ["invert_media", "true", "flags.2?true"],
                ["inbox_date", "number", "flags.1?int"],
                ["type", "string", "string"],
                ["message", "string", "string"],
                ["media", "MessageMedia", "MessageMedia"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "updatePrivacy",
        [
            0xEE3B272A,
            [
                ["key", "PrivacyKey", "PrivacyKey"],
                ["rules", ["PrivacyRule"], "Vector<PrivacyRule>"],
            ],
        ],
    ],
    [
        "updateUserPhone",
        [
            0x05492A13,
            [
                ["user_id", "bigint", "long"],
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "updateReadHistoryInbox",
        [
            0x9C974FDF,
            [
                ["flags", flags, "#"],
                ["folder_id", "number", "flags.0?int"],
                ["peer", "Peer", "Peer"],
                ["max_id", "number", "int"],
                ["still_unread_count", "number", "int"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateReadHistoryOutbox",
        [
            0x2F2F21BF,
            [
                ["peer", "Peer", "Peer"],
                ["max_id", "number", "int"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateWebPage",
        [
            0x7F891213,
            [
                ["webpage", "WebPage", "WebPage"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateReadMessagesContents",
        [
            0xF8227181,
            [
                ["flags", flags, "#"],
                ["messages", ["number"], "Vector<int>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["date", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "updateChannelTooLong",
        [
            0x108D941F,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["pts", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "updateChannel",
        [
            0x635B4C09,
            [
                ["channel_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateNewChannelMessage",
        [
            0x62BA04D9,
            [
                ["message", "Message", "Message"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateReadChannelInbox",
        [
            0x922E6E10,
            [
                ["flags", flags, "#"],
                ["folder_id", "number", "flags.0?int"],
                ["channel_id", "bigint", "long"],
                ["max_id", "number", "int"],
                ["still_unread_count", "number", "int"],
                ["pts", "number", "int"],
            ],
        ],
    ],
    [
        "updateDeleteChannelMessages",
        [
            0xC32D5B12,
            [
                ["channel_id", "bigint", "long"],
                ["messages", ["number"], "Vector<int>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateChannelMessageViews",
        [
            0xF226AC08,
            [
                ["channel_id", "bigint", "long"],
                ["id", "number", "int"],
                ["views", "number", "int"],
            ],
        ],
    ],
    [
        "updateChatParticipantAdmin",
        [
            0xD7CA61A2,
            [
                ["chat_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["is_admin", "boolean", "Bool"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "updateNewStickerSet",
        [
            0x688A30AA,
            [
                ["stickerset", "messages_StickerSet", "messages.StickerSet"],
            ],
        ],
    ],
    [
        "updateStickerSetsOrder",
        [
            0x0BB2D201,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.1?true"],
                ["order", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "updateStickerSets",
        [
            0x31C24808,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "updateSavedGifs",
        [
            0x9375341E,
            [],
        ],
    ],
    [
        "updateBotInlineQuery",
        [
            0x496F379C,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["query", "string", "string"],
                ["geo", "GeoPoint", "flags.0?GeoPoint"],
                ["peer_type", "InlineQueryPeerType", "flags.1?InlineQueryPeerType"],
                ["offset", "string", "string"],
            ],
        ],
    ],
    [
        "updateBotInlineSend",
        [
            0x12F12A07,
            [
                ["flags", flags, "#"],
                ["user_id", "bigint", "long"],
                ["query", "string", "string"],
                ["geo", "GeoPoint", "flags.0?GeoPoint"],
                ["id", "string", "string"],
                ["msg_id", "InputBotInlineMessageID", "flags.1?InputBotInlineMessageID"],
            ],
        ],
    ],
    [
        "updateEditChannelMessage",
        [
            0x1B3F4DF7,
            [
                ["message", "Message", "Message"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotCallbackQuery",
        [
            0xB9CFC48D,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["chat_instance", "bigint", "long"],
                ["data", Uint8Array, "flags.0?bytes"],
                ["game_short_name", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "updateEditMessage",
        [
            0xE40370A3,
            [
                ["message", "Message", "Message"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateInlineBotCallbackQuery",
        [
            0x691E9052,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["msg_id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
                ["chat_instance", "bigint", "long"],
                ["data", Uint8Array, "flags.0?bytes"],
                ["game_short_name", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "updateReadChannelOutbox",
        [
            0xB75F99A9,
            [
                ["channel_id", "bigint", "long"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateDraftMessage",
        [
            0x1B49EC6D,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["top_msg_id", "number", "flags.0?int"],
                ["draft", "DraftMessage", "DraftMessage"],
            ],
        ],
    ],
    [
        "updateReadFeaturedStickers",
        [
            0x571D2742,
            [],
        ],
    ],
    [
        "updateRecentStickers",
        [
            0x9A422C20,
            [],
        ],
    ],
    [
        "updateConfig",
        [
            0xA229DD06,
            [],
        ],
    ],
    [
        "updatePtsChanged",
        [
            0x3354678F,
            [],
        ],
    ],
    [
        "updateChannelWebPage",
        [
            0x2F2BA99F,
            [
                ["channel_id", "bigint", "long"],
                ["webpage", "WebPage", "WebPage"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateDialogPinned",
        [
            0x6E6FE51C,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["folder_id", "number", "flags.1?int"],
                ["peer", "DialogPeer", "DialogPeer"],
            ],
        ],
    ],
    [
        "updatePinnedDialogs",
        [
            0xFA0F3CA2,
            [
                ["flags", flags, "#"],
                ["folder_id", "number", "flags.1?int"],
                ["order", ["DialogPeer"], "flags.0?Vector<DialogPeer>"],
            ],
        ],
    ],
    [
        "updateBotWebhookJSON",
        [
            0x8317C0C3,
            [
                ["data", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "updateBotWebhookJSONQuery",
        [
            0x9B9240A6,
            [
                ["query_id", "bigint", "long"],
                ["data", "DataJSON", "DataJSON"],
                ["timeout", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotShippingQuery",
        [
            0xB5AEFD7D,
            [
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["payload", Uint8Array, "bytes"],
                ["shipping_address", "PostAddress", "PostAddress"],
            ],
        ],
    ],
    [
        "updateBotPrecheckoutQuery",
        [
            0x8CAA9A96,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["payload", Uint8Array, "bytes"],
                ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
                ["shipping_option_id", "string", "flags.1?string"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "updatePhoneCall",
        [
            0xAB0F6B1E,
            [
                ["phone_call", "PhoneCall", "PhoneCall"],
            ],
        ],
    ],
    [
        "updateLangPackTooLong",
        [
            0x46560264,
            [
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "updateLangPack",
        [
            0x56022F4D,
            [
                ["difference", "LangPackDifference", "LangPackDifference"],
            ],
        ],
    ],
    [
        "updateFavedStickers",
        [
            0xE511996D,
            [],
        ],
    ],
    [
        "updateChannelReadMessagesContents",
        [
            0xEA29055D,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["top_msg_id", "number", "flags.0?int"],
                ["messages", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "updateContactsReset",
        [
            0x7084A7BE,
            [],
        ],
    ],
    [
        "updateChannelAvailableMessages",
        [
            0xB23FC698,
            [
                ["channel_id", "bigint", "long"],
                ["available_min_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateDialogUnreadMark",
        [
            0xE16459C3,
            [
                ["flags", flags, "#"],
                ["unread", "true", "flags.0?true"],
                ["peer", "DialogPeer", "DialogPeer"],
            ],
        ],
    ],
    [
        "updateMessagePoll",
        [
            0xACA1657B,
            [
                ["flags", flags, "#"],
                ["poll_id", "bigint", "long"],
                ["poll", "Poll", "flags.0?Poll"],
                ["results", "PollResults", "PollResults"],
            ],
        ],
    ],
    [
        "updateChatDefaultBannedRights",
        [
            0x54C01850,
            [
                ["peer", "Peer", "Peer"],
                ["default_banned_rights", "ChatBannedRights", "ChatBannedRights"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "updateFolderPeers",
        [
            0x19360DC0,
            [
                ["folder_peers", ["FolderPeer"], "Vector<FolderPeer>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updatePeerSettings",
        [
            0x6A7E7366,
            [
                ["peer", "Peer", "Peer"],
                ["settings", "PeerSettings", "PeerSettings"],
            ],
        ],
    ],
    [
        "updatePeerLocated",
        [
            0xB4AFCFB0,
            [
                ["peers", ["PeerLocated"], "Vector<PeerLocated>"],
            ],
        ],
    ],
    [
        "updateNewScheduledMessage",
        [
            0x39A51DFB,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "updateDeleteScheduledMessages",
        [
            0x90866CEE,
            [
                ["peer", "Peer", "Peer"],
                ["messages", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "updateTheme",
        [
            0x8216FBA3,
            [
                ["theme", "Theme", "Theme"],
            ],
        ],
    ],
    [
        "updateGeoLiveViewed",
        [
            0x871FB939,
            [
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateLoginToken",
        [
            0x564FE691,
            [],
        ],
    ],
    [
        "updateMessagePollVote",
        [
            0x24F40E77,
            [
                ["poll_id", "bigint", "long"],
                ["peer", "Peer", "Peer"],
                ["options", [Uint8Array], "Vector<bytes>"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateDialogFilter",
        [
            0x26FFDE7D,
            [
                ["flags", flags, "#"],
                ["id", "number", "int"],
                ["filter", "DialogFilter", "flags.0?DialogFilter"],
            ],
        ],
    ],
    [
        "updateDialogFilterOrder",
        [
            0xA5D72105,
            [
                ["order", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "updateDialogFilters",
        [
            0x3504914F,
            [],
        ],
    ],
    [
        "updatePhoneCallSignalingData",
        [
            0x2661BF09,
            [
                ["phone_call_id", "bigint", "long"],
                ["data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "updateChannelMessageForwards",
        [
            0xD29A27F4,
            [
                ["channel_id", "bigint", "long"],
                ["id", "number", "int"],
                ["forwards", "number", "int"],
            ],
        ],
    ],
    [
        "updateReadChannelDiscussionInbox",
        [
            0xD6B19546,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["top_msg_id", "number", "int"],
                ["read_max_id", "number", "int"],
                ["broadcast_id", "bigint", "flags.0?long"],
                ["broadcast_post", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "updateReadChannelDiscussionOutbox",
        [
            0x695C9E7C,
            [
                ["channel_id", "bigint", "long"],
                ["top_msg_id", "number", "int"],
                ["read_max_id", "number", "int"],
            ],
        ],
    ],
    [
        "updatePeerBlocked",
        [
            0xEBE07752,
            [
                ["flags", flags, "#"],
                ["blocked", "true", "flags.0?true"],
                ["blocked_my_stories_from", "true", "flags.1?true"],
                ["peer_id", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "updateChannelUserTyping",
        [
            0x8C88C923,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["top_msg_id", "number", "flags.0?int"],
                ["from_id", "Peer", "Peer"],
                ["action", "SendMessageAction", "SendMessageAction"],
            ],
        ],
    ],
    [
        "updatePinnedMessages",
        [
            0xED85EAB5,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["peer", "Peer", "Peer"],
                ["messages", ["number"], "Vector<int>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updatePinnedChannelMessages",
        [
            0x5BB98608,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["channel_id", "bigint", "long"],
                ["messages", ["number"], "Vector<int>"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "updateChat",
        [
            0xF89A6A4E,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateGroupCallParticipants",
        [
            0xF2EBDB4E,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "updateGroupCall",
        [
            0x14B24500,
            [
                ["chat_id", "bigint", "long"],
                ["call", "GroupCall", "GroupCall"],
            ],
        ],
    ],
    [
        "updatePeerHistoryTTL",
        [
            0xBB9BB9A5,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["ttl_period", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "updateChatParticipant",
        [
            0xD087663A,
            [
                ["flags", flags, "#"],
                ["chat_id", "bigint", "long"],
                ["date", "number", "int"],
                ["actor_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["prev_participant", "ChatParticipant", "flags.0?ChatParticipant"],
                ["new_participant", "ChatParticipant", "flags.1?ChatParticipant"],
                ["invite", "ExportedChatInvite", "flags.2?ExportedChatInvite"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateChannelParticipant",
        [
            0x985D3ABB,
            [
                ["flags", flags, "#"],
                ["via_chatlist", "true", "flags.3?true"],
                ["channel_id", "bigint", "long"],
                ["date", "number", "int"],
                ["actor_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["prev_participant", "ChannelParticipant", "flags.0?ChannelParticipant"],
                ["new_participant", "ChannelParticipant", "flags.1?ChannelParticipant"],
                ["invite", "ExportedChatInvite", "flags.2?ExportedChatInvite"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotStopped",
        [
            0xC4870A49,
            [
                ["user_id", "bigint", "long"],
                ["date", "number", "int"],
                ["stopped", "boolean", "Bool"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateGroupCallConnection",
        [
            0x0B783982,
            [
                ["flags", flags, "#"],
                ["presentation", "true", "flags.0?true"],
                ["params", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "updateBotCommands",
        [
            0x4D712F2E,
            [
                ["peer", "Peer", "Peer"],
                ["bot_id", "bigint", "long"],
                ["commands", ["BotCommand"], "Vector<BotCommand>"],
            ],
        ],
    ],
    [
        "updatePendingJoinRequests",
        [
            0x7063C3DB,
            [
                ["peer", "Peer", "Peer"],
                ["requests_pending", "number", "int"],
                ["recent_requesters", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "updateBotChatInviteRequester",
        [
            0x11DFA986,
            [
                ["peer", "Peer", "Peer"],
                ["date", "number", "int"],
                ["user_id", "bigint", "long"],
                ["about", "string", "string"],
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateMessageReactions",
        [
            0x5E1B3CB8,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["top_msg_id", "number", "flags.0?int"],
                ["reactions", "MessageReactions", "MessageReactions"],
            ],
        ],
    ],
    [
        "updateAttachMenuBots",
        [
            0x17B7A20B,
            [],
        ],
    ],
    [
        "updateWebViewResultSent",
        [
            0x1592B79D,
            [
                ["query_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateBotMenuButton",
        [
            0x14B85813,
            [
                ["bot_id", "bigint", "long"],
                ["button", "BotMenuButton", "BotMenuButton"],
            ],
        ],
    ],
    [
        "updateSavedRingtones",
        [
            0x74D8BE99,
            [],
        ],
    ],
    [
        "updateTranscribedAudio",
        [
            0x0084CD5A,
            [
                ["flags", flags, "#"],
                ["pending", "true", "flags.0?true"],
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["transcription_id", "bigint", "long"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "updateReadFeaturedEmojiStickers",
        [
            0xFB4C496C,
            [],
        ],
    ],
    [
        "updateUserEmojiStatus",
        [
            0x28373599,
            [
                ["user_id", "bigint", "long"],
                ["emoji_status", "EmojiStatus", "EmojiStatus"],
            ],
        ],
    ],
    [
        "updateRecentEmojiStatuses",
        [
            0x30F443DB,
            [],
        ],
    ],
    [
        "updateRecentReactions",
        [
            0x6F7863F4,
            [],
        ],
    ],
    [
        "updateMoveStickerSetToTop",
        [
            0x86FCCF85,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.1?true"],
                ["stickerset", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateMessageExtendedMedia",
        [
            0xD5A41724,
            [
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["extended_media", ["MessageExtendedMedia"], "Vector<MessageExtendedMedia>"],
            ],
        ],
    ],
    [
        "updateChannelPinnedTopic",
        [
            0x192EFBE3,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["channel_id", "bigint", "long"],
                ["topic_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateChannelPinnedTopics",
        [
            0xFE198602,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["order", ["number"], "flags.0?Vector<int>"],
            ],
        ],
    ],
    [
        "updateUser",
        [
            0x20529438,
            [
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateAutoSaveSettings",
        [
            0xEC05B097,
            [],
        ],
    ],
    [
        "updateStory",
        [
            0x75B3B798,
            [
                ["peer", "Peer", "Peer"],
                ["story", "StoryItem", "StoryItem"],
            ],
        ],
    ],
    [
        "updateReadStories",
        [
            0xF74E932B,
            [
                ["peer", "Peer", "Peer"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateStoryID",
        [
            0x1BF335B9,
            [
                ["id", "number", "int"],
                ["random_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateStoriesStealthMode",
        [
            0x2C084DC1,
            [
                ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
            ],
        ],
    ],
    [
        "updateSentStoryReaction",
        [
            0x7D627683,
            [
                ["peer", "Peer", "Peer"],
                ["story_id", "number", "int"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "updateBotChatBoost",
        [
            0x904DD49C,
            [
                ["peer", "Peer", "Peer"],
                ["boost", "Boost", "Boost"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateChannelViewForumAsMessages",
        [
            0x07B68920,
            [
                ["channel_id", "bigint", "long"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "updatePeerWallpaper",
        [
            0xAE3F101D,
            [
                ["flags", flags, "#"],
                ["wallpaper_overridden", "true", "flags.1?true"],
                ["peer", "Peer", "Peer"],
                ["wallpaper", "WallPaper", "flags.0?WallPaper"],
            ],
        ],
    ],
    [
        "updateBotMessageReaction",
        [
            0xAC21D3CE,
            [
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["date", "number", "int"],
                ["actor", "Peer", "Peer"],
                ["old_reactions", ["Reaction"], "Vector<Reaction>"],
                ["new_reactions", ["Reaction"], "Vector<Reaction>"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotMessageReactions",
        [
            0x09CB7759,
            [
                ["peer", "Peer", "Peer"],
                ["msg_id", "number", "int"],
                ["date", "number", "int"],
                ["reactions", ["ReactionCount"], "Vector<ReactionCount>"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateSavedDialogPinned",
        [
            0xAEAF9E74,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["peer", "DialogPeer", "DialogPeer"],
            ],
        ],
    ],
    [
        "updatePinnedSavedDialogs",
        [
            0x686C85A6,
            [
                ["flags", flags, "#"],
                ["order", ["DialogPeer"], "flags.0?Vector<DialogPeer>"],
            ],
        ],
    ],
    [
        "updateSavedReactionTags",
        [
            0x39C67432,
            [],
        ],
    ],
    [
        "updateSmsJob",
        [
            0xF16269D4,
            [
                ["job_id", "string", "string"],
            ],
        ],
    ],
    [
        "updateQuickReplies",
        [
            0xF9470AB2,
            [
                ["quick_replies", ["QuickReply"], "Vector<QuickReply>"],
            ],
        ],
    ],
    [
        "updateNewQuickReply",
        [
            0xF53DA717,
            [
                ["quick_reply", "QuickReply", "QuickReply"],
            ],
        ],
    ],
    [
        "updateDeleteQuickReply",
        [
            0x53E6F1EC,
            [
                ["shortcut_id", "number", "int"],
            ],
        ],
    ],
    [
        "updateQuickReplyMessage",
        [
            0x3E050D0F,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "updateDeleteQuickReplyMessages",
        [
            0x566FE7CD,
            [
                ["shortcut_id", "number", "int"],
                ["messages", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "updateBotBusinessConnect",
        [
            0x8AE5C97A,
            [
                ["connection", "BotBusinessConnection", "BotBusinessConnection"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotNewBusinessMessage",
        [
            0x9DDB347C,
            [
                ["flags", flags, "#"],
                ["connection_id", "string", "string"],
                ["message", "Message", "Message"],
                ["reply_to_message", "Message", "flags.0?Message"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotEditBusinessMessage",
        [
            0x07DF587C,
            [
                ["flags", flags, "#"],
                ["connection_id", "string", "string"],
                ["message", "Message", "Message"],
                ["reply_to_message", "Message", "flags.0?Message"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateBotDeleteBusinessMessage",
        [
            0xA02A982E,
            [
                ["connection_id", "string", "string"],
                ["peer", "Peer", "Peer"],
                ["messages", ["number"], "Vector<int>"],
                ["qts", "number", "int"],
            ],
        ],
    ],
    [
        "updateNewStoryReaction",
        [
            0x1824E40B,
            [
                ["story_id", "number", "int"],
                ["peer", "Peer", "Peer"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "updateBroadcastRevenueTransactions",
        [
            0xDFD961F5,
            [
                ["peer", "Peer", "Peer"],
                ["balances", "BroadcastRevenueBalances", "BroadcastRevenueBalances"],
            ],
        ],
    ],
    [
        "updateStarsBalance",
        [
            0x0FB85198,
            [
                ["balance", "bigint", "long"],
            ],
        ],
    ],
    [
        "updateBusinessBotCallbackQuery",
        [
            0x1EA2FDA7,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["user_id", "bigint", "long"],
                ["connection_id", "string", "string"],
                ["message", "Message", "Message"],
                ["reply_to_message", "Message", "flags.2?Message"],
                ["chat_instance", "bigint", "long"],
                ["data", Uint8Array, "flags.0?bytes"],
            ],
        ],
    ],
    [
        "updateStarsRevenueStatus",
        [
            0xA584B019,
            [
                ["peer", "Peer", "Peer"],
                ["status", "StarsRevenueStatus", "StarsRevenueStatus"],
            ],
        ],
    ],
    [
        "updates.state",
        [
            0xA56C2A3E,
            [
                ["pts", "number", "int"],
                ["qts", "number", "int"],
                ["date", "number", "int"],
                ["seq", "number", "int"],
                ["unread_count", "number", "int"],
            ],
        ],
    ],
    [
        "updates.differenceEmpty",
        [
            0x5D75A138,
            [
                ["date", "number", "int"],
                ["seq", "number", "int"],
            ],
        ],
    ],
    [
        "updates.difference",
        [
            0x00F49CA0,
            [
                ["new_messages", ["Message"], "Vector<Message>"],
                ["new_encrypted_messages", ["EncryptedMessage"], "Vector<EncryptedMessage>"],
                ["other_updates", ["Update"], "Vector<Update>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["state", "updates_State", "updates.State"],
            ],
        ],
    ],
    [
        "updates.differenceSlice",
        [
            0xA8FB1981,
            [
                ["new_messages", ["Message"], "Vector<Message>"],
                ["new_encrypted_messages", ["EncryptedMessage"], "Vector<EncryptedMessage>"],
                ["other_updates", ["Update"], "Vector<Update>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["intermediate_state", "updates_State", "updates.State"],
            ],
        ],
    ],
    [
        "updates.differenceTooLong",
        [
            0x4AFE8F6D,
            [
                ["pts", "number", "int"],
            ],
        ],
    ],
    [
        "updatesTooLong",
        [
            0xE317AF7E,
            [],
        ],
    ],
    [
        "updateShortMessage",
        [
            0x313BC7F8,
            [
                ["flags", flags, "#"],
                ["out", "true", "flags.1?true"],
                ["mentioned", "true", "flags.4?true"],
                ["media_unread", "true", "flags.5?true"],
                ["silent", "true", "flags.13?true"],
                ["id", "number", "int"],
                ["user_id", "bigint", "long"],
                ["message", "string", "string"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["date", "number", "int"],
                ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
                ["via_bot_id", "bigint", "flags.11?long"],
                ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
                ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
                ["ttl_period", "number", "flags.25?int"],
            ],
        ],
    ],
    [
        "updateShortChatMessage",
        [
            0x4D6DEEA5,
            [
                ["flags", flags, "#"],
                ["out", "true", "flags.1?true"],
                ["mentioned", "true", "flags.4?true"],
                ["media_unread", "true", "flags.5?true"],
                ["silent", "true", "flags.13?true"],
                ["id", "number", "int"],
                ["from_id", "bigint", "long"],
                ["chat_id", "bigint", "long"],
                ["message", "string", "string"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["date", "number", "int"],
                ["fwd_from", "MessageFwdHeader", "flags.2?MessageFwdHeader"],
                ["via_bot_id", "bigint", "flags.11?long"],
                ["reply_to", "MessageReplyHeader", "flags.3?MessageReplyHeader"],
                ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
                ["ttl_period", "number", "flags.25?int"],
            ],
        ],
    ],
    [
        "updateShort",
        [
            0x78D4DEC1,
            [
                ["update", "Update", "Update"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "updatesCombined",
        [
            0x725B04C3,
            [
                ["updates", ["Update"], "Vector<Update>"],
                ["users", ["User"], "Vector<User>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["date", "number", "int"],
                ["seq_start", "number", "int"],
                ["seq", "number", "int"],
            ],
        ],
    ],
    [
        "updates",
        [
            0x74AE4240,
            [
                ["updates", ["Update"], "Vector<Update>"],
                ["users", ["User"], "Vector<User>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["date", "number", "int"],
                ["seq", "number", "int"],
            ],
        ],
    ],
    [
        "updateShortSentMessage",
        [
            0x9015E101,
            [
                ["flags", flags, "#"],
                ["out", "true", "flags.1?true"],
                ["id", "number", "int"],
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["date", "number", "int"],
                ["media", "MessageMedia", "flags.9?MessageMedia"],
                ["entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
                ["ttl_period", "number", "flags.25?int"],
            ],
        ],
    ],
    [
        "photos.photos",
        [
            0x8DCA6AA5,
            [
                ["photos", ["Photo"], "Vector<Photo>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "photos.photosSlice",
        [
            0x15051F54,
            [
                ["count", "number", "int"],
                ["photos", ["Photo"], "Vector<Photo>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "photos.photo",
        [
            0x20212CA8,
            [
                ["photo", "Photo", "Photo"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "upload.file",
        [
            0x096A18D5,
            [
                ["type", "storage_FileType", "storage.FileType"],
                ["mtime", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "upload.fileCdnRedirect",
        [
            0xF18CDA44,
            [
                ["dc_id", "number", "int"],
                ["file_token", Uint8Array, "bytes"],
                ["encryption_key", Uint8Array, "bytes"],
                ["encryption_iv", Uint8Array, "bytes"],
                ["file_hashes", ["FileHash"], "Vector<FileHash>"],
            ],
        ],
    ],
    [
        "dcOption",
        [
            0x18B7A10D,
            [
                ["flags", flags, "#"],
                ["ipv6", "true", "flags.0?true"],
                ["media_only", "true", "flags.1?true"],
                ["tcpo_only", "true", "flags.2?true"],
                ["cdn", "true", "flags.3?true"],
                ["static", "true", "flags.4?true"],
                ["this_port_only", "true", "flags.5?true"],
                ["id", "number", "int"],
                ["ip_address", "string", "string"],
                ["port", "number", "int"],
                ["secret", Uint8Array, "flags.10?bytes"],
            ],
        ],
    ],
    [
        "config",
        [
            0xCC1A241E,
            [
                ["flags", flags, "#"],
                ["default_p2p_contacts", "true", "flags.3?true"],
                ["preload_featured_stickers", "true", "flags.4?true"],
                ["revoke_pm_inbox", "true", "flags.6?true"],
                ["blocked_mode", "true", "flags.8?true"],
                ["force_try_ipv6", "true", "flags.14?true"],
                ["date", "number", "int"],
                ["expires", "number", "int"],
                ["test_mode", "boolean", "Bool"],
                ["this_dc", "number", "int"],
                ["dc_options", ["DcOption"], "Vector<DcOption>"],
                ["dc_txt_domain_name", "string", "string"],
                ["chat_size_max", "number", "int"],
                ["megagroup_size_max", "number", "int"],
                ["forwarded_count_max", "number", "int"],
                ["online_update_period_ms", "number", "int"],
                ["offline_blur_timeout_ms", "number", "int"],
                ["offline_idle_timeout_ms", "number", "int"],
                ["online_cloud_timeout_ms", "number", "int"],
                ["notify_cloud_delay_ms", "number", "int"],
                ["notify_default_delay_ms", "number", "int"],
                ["push_chat_period_ms", "number", "int"],
                ["push_chat_limit", "number", "int"],
                ["edit_time_limit", "number", "int"],
                ["revoke_time_limit", "number", "int"],
                ["revoke_pm_time_limit", "number", "int"],
                ["rating_e_decay", "number", "int"],
                ["stickers_recent_limit", "number", "int"],
                ["channels_read_media_period", "number", "int"],
                ["tmp_sessions", "number", "flags.0?int"],
                ["call_receive_timeout_ms", "number", "int"],
                ["call_ring_timeout_ms", "number", "int"],
                ["call_connect_timeout_ms", "number", "int"],
                ["call_packet_timeout_ms", "number", "int"],
                ["me_url_prefix", "string", "string"],
                ["autoupdate_url_prefix", "string", "flags.7?string"],
                ["gif_search_username", "string", "flags.9?string"],
                ["venue_search_username", "string", "flags.10?string"],
                ["img_search_username", "string", "flags.11?string"],
                ["static_maps_provider", "string", "flags.12?string"],
                ["caption_length_max", "number", "int"],
                ["message_length_max", "number", "int"],
                ["webfile_dc_id", "number", "int"],
                ["suggested_lang_code", "string", "flags.2?string"],
                ["lang_pack_version", "number", "flags.2?int"],
                ["base_lang_pack_version", "number", "flags.2?int"],
                ["reactions_default", "Reaction", "flags.15?Reaction"],
                ["autologin_token", "string", "flags.16?string"],
            ],
        ],
    ],
    [
        "nearestDc",
        [
            0x8E1A1775,
            [
                ["country", "string", "string"],
                ["this_dc", "number", "int"],
                ["nearest_dc", "number", "int"],
            ],
        ],
    ],
    [
        "help.appUpdate",
        [
            0xCCBBCE30,
            [
                ["flags", flags, "#"],
                ["can_not_skip", "true", "flags.0?true"],
                ["id", "number", "int"],
                ["version", "string", "string"],
                ["text", "string", "string"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
                ["document", "Document", "flags.1?Document"],
                ["url", "string", "flags.2?string"],
                ["sticker", "Document", "flags.3?Document"],
            ],
        ],
    ],
    [
        "help.noAppUpdate",
        [
            0xC45A6536,
            [],
        ],
    ],
    [
        "help.inviteText",
        [
            0x18CB9F78,
            [
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "encryptedChatEmpty",
        [
            0xAB7EC0A0,
            [
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "encryptedChatWaiting",
        [
            0x66B25953,
            [
                ["id", "number", "int"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "encryptedChatRequested",
        [
            0x48F1D94C,
            [
                ["flags", flags, "#"],
                ["folder_id", "number", "flags.0?int"],
                ["id", "number", "int"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["g_a", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "encryptedChat",
        [
            0x61F0D4C7,
            [
                ["id", "number", "int"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["g_a_or_b", Uint8Array, "bytes"],
                ["key_fingerprint", "bigint", "long"],
            ],
        ],
    ],
    [
        "encryptedChatDiscarded",
        [
            0x1E1C7C45,
            [
                ["flags", flags, "#"],
                ["history_deleted", "true", "flags.0?true"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "inputEncryptedChat",
        [
            0xF141B5E1,
            [
                ["chat_id", "number", "int"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "encryptedFileEmpty",
        [
            0xC21F497E,
            [],
        ],
    ],
    [
        "encryptedFile",
        [
            0xA8008CD8,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["size", "bigint", "long"],
                ["dc_id", "number", "int"],
                ["key_fingerprint", "number", "int"],
            ],
        ],
    ],
    [
        "inputEncryptedFileEmpty",
        [
            0x1837C364,
            [],
        ],
    ],
    [
        "inputEncryptedFileUploaded",
        [
            0x64BD0306,
            [
                ["id", "bigint", "long"],
                ["parts", "number", "int"],
                ["md5_checksum", "string", "string"],
                ["key_fingerprint", "number", "int"],
            ],
        ],
    ],
    [
        "inputEncryptedFile",
        [
            0x5A17B5E5,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputEncryptedFileBigUploaded",
        [
            0x2DC173C8,
            [
                ["id", "bigint", "long"],
                ["parts", "number", "int"],
                ["key_fingerprint", "number", "int"],
            ],
        ],
    ],
    [
        "encryptedMessage",
        [
            0xED18C118,
            [
                ["random_id", "bigint", "long"],
                ["chat_id", "number", "int"],
                ["date", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
                ["file", "EncryptedFile", "EncryptedFile"],
            ],
        ],
    ],
    [
        "encryptedMessageService",
        [
            0x23734B06,
            [
                ["random_id", "bigint", "long"],
                ["chat_id", "number", "int"],
                ["date", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.dhConfigNotModified",
        [
            0xC0E24635,
            [
                ["random", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.dhConfig",
        [
            0x2C221EDD,
            [
                ["g", "number", "int"],
                ["p", Uint8Array, "bytes"],
                ["version", "number", "int"],
                ["random", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.sentEncryptedMessage",
        [
            0x560F8935,
            [
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "messages.sentEncryptedFile",
        [
            0x9493FF32,
            [
                ["date", "number", "int"],
                ["file", "EncryptedFile", "EncryptedFile"],
            ],
        ],
    ],
    [
        "inputDocumentEmpty",
        [
            0x72F0EAAE,
            [],
        ],
    ],
    [
        "inputDocument",
        [
            0x1ABFB575,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "documentEmpty",
        [
            0x36F8C871,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "document",
        [
            0x8FD4C4D8,
            [
                ["flags", flags, "#"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["file_reference", Uint8Array, "bytes"],
                ["date", "number", "int"],
                ["mime_type", "string", "string"],
                ["size", "bigint", "long"],
                ["thumbs", ["PhotoSize"], "flags.0?Vector<PhotoSize>"],
                ["video_thumbs", ["VideoSize"], "flags.1?Vector<VideoSize>"],
                ["dc_id", "number", "int"],
                ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
            ],
        ],
    ],
    [
        "help.support",
        [
            0x17C6B5F6,
            [
                ["phone_number", "string", "string"],
                ["user", "User", "User"],
            ],
        ],
    ],
    [
        "notifyPeer",
        [
            0x9FD40BD8,
            [
                ["peer", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "notifyUsers",
        [
            0xB4C83B4C,
            [],
        ],
    ],
    [
        "notifyChats",
        [
            0xC007CEC3,
            [],
        ],
    ],
    [
        "notifyBroadcasts",
        [
            0xD612E8EF,
            [],
        ],
    ],
    [
        "notifyForumTopic",
        [
            0x226E6308,
            [
                ["peer", "Peer", "Peer"],
                ["top_msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageTypingAction",
        [
            0x16BF744E,
            [],
        ],
    ],
    [
        "sendMessageCancelAction",
        [
            0xFD5EC8F5,
            [],
        ],
    ],
    [
        "sendMessageRecordVideoAction",
        [
            0xA187D66F,
            [],
        ],
    ],
    [
        "sendMessageUploadVideoAction",
        [
            0xE9763AEC,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageRecordAudioAction",
        [
            0xD52F73F7,
            [],
        ],
    ],
    [
        "sendMessageUploadAudioAction",
        [
            0xF351D7AB,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageUploadPhotoAction",
        [
            0xD1D34A26,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageUploadDocumentAction",
        [
            0xAA0CD9E4,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageGeoLocationAction",
        [
            0x176F8BA1,
            [],
        ],
    ],
    [
        "sendMessageChooseContactAction",
        [
            0x628CBC6F,
            [],
        ],
    ],
    [
        "sendMessageGamePlayAction",
        [
            0xDD6A8F48,
            [],
        ],
    ],
    [
        "sendMessageRecordRoundAction",
        [
            0x88F27FBC,
            [],
        ],
    ],
    [
        "sendMessageUploadRoundAction",
        [
            0x243E1C66,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "speakingInGroupCallAction",
        [
            0xD92C2285,
            [],
        ],
    ],
    [
        "sendMessageHistoryImportAction",
        [
            0xDBDA9246,
            [
                ["progress", "number", "int"],
            ],
        ],
    ],
    [
        "sendMessageChooseStickerAction",
        [
            0xB05AC6B1,
            [],
        ],
    ],
    [
        "sendMessageEmojiInteraction",
        [
            0x25972BCB,
            [
                ["emoticon", "string", "string"],
                ["msg_id", "number", "int"],
                ["interaction", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "sendMessageEmojiInteractionSeen",
        [
            0xB665902E,
            [
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "contacts.found",
        [
            0xB3134D9D,
            [
                ["my_results", ["Peer"], "Vector<Peer>"],
                ["results", ["Peer"], "Vector<Peer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "inputPrivacyKeyStatusTimestamp",
        [
            0x4F96CB18,
            [],
        ],
    ],
    [
        "inputPrivacyKeyChatInvite",
        [
            0xBDFB0426,
            [],
        ],
    ],
    [
        "inputPrivacyKeyPhoneCall",
        [
            0xFABADC5F,
            [],
        ],
    ],
    [
        "inputPrivacyKeyPhoneP2P",
        [
            0xDB9E70D2,
            [],
        ],
    ],
    [
        "inputPrivacyKeyForwards",
        [
            0xA4DD4C08,
            [],
        ],
    ],
    [
        "inputPrivacyKeyProfilePhoto",
        [
            0x5719BACC,
            [],
        ],
    ],
    [
        "inputPrivacyKeyPhoneNumber",
        [
            0x0352DAFA,
            [],
        ],
    ],
    [
        "inputPrivacyKeyAddedByPhone",
        [
            0xD1219BDD,
            [],
        ],
    ],
    [
        "inputPrivacyKeyVoiceMessages",
        [
            0xAEE69D68,
            [],
        ],
    ],
    [
        "inputPrivacyKeyAbout",
        [
            0x3823CC40,
            [],
        ],
    ],
    [
        "inputPrivacyKeyBirthday",
        [
            0xD65A11CC,
            [],
        ],
    ],
    [
        "privacyKeyStatusTimestamp",
        [
            0xBC2EAB30,
            [],
        ],
    ],
    [
        "privacyKeyChatInvite",
        [
            0x500E6DFA,
            [],
        ],
    ],
    [
        "privacyKeyPhoneCall",
        [
            0x3D662B7B,
            [],
        ],
    ],
    [
        "privacyKeyPhoneP2P",
        [
            0x39491CC8,
            [],
        ],
    ],
    [
        "privacyKeyForwards",
        [
            0x69EC56A3,
            [],
        ],
    ],
    [
        "privacyKeyProfilePhoto",
        [
            0x96151FED,
            [],
        ],
    ],
    [
        "privacyKeyPhoneNumber",
        [
            0xD19AE46D,
            [],
        ],
    ],
    [
        "privacyKeyAddedByPhone",
        [
            0x42FFD42B,
            [],
        ],
    ],
    [
        "privacyKeyVoiceMessages",
        [
            0x0697F414,
            [],
        ],
    ],
    [
        "privacyKeyAbout",
        [
            0xA486B761,
            [],
        ],
    ],
    [
        "privacyKeyBirthday",
        [
            0x2000A518,
            [],
        ],
    ],
    [
        "inputPrivacyValueAllowContacts",
        [
            0x0D09E07B,
            [],
        ],
    ],
    [
        "inputPrivacyValueAllowAll",
        [
            0x184B35CE,
            [],
        ],
    ],
    [
        "inputPrivacyValueAllowUsers",
        [
            0x131CC67F,
            [
                ["users", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "inputPrivacyValueDisallowContacts",
        [
            0x0BA52007,
            [],
        ],
    ],
    [
        "inputPrivacyValueDisallowAll",
        [
            0xD66B66C9,
            [],
        ],
    ],
    [
        "inputPrivacyValueDisallowUsers",
        [
            0x90110467,
            [
                ["users", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "inputPrivacyValueAllowChatParticipants",
        [
            0x840649CF,
            [
                ["chats", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "inputPrivacyValueDisallowChatParticipants",
        [
            0xE94F0F86,
            [
                ["chats", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "inputPrivacyValueAllowCloseFriends",
        [
            0x2F453E49,
            [],
        ],
    ],
    [
        "inputPrivacyValueAllowPremium",
        [
            0x77CDC9F1,
            [],
        ],
    ],
    [
        "privacyValueAllowContacts",
        [
            0xFFFE1BAC,
            [],
        ],
    ],
    [
        "privacyValueAllowAll",
        [
            0x65427B82,
            [],
        ],
    ],
    [
        "privacyValueAllowUsers",
        [
            0xB8905FB2,
            [
                ["users", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "privacyValueDisallowContacts",
        [
            0xF888FA1A,
            [],
        ],
    ],
    [
        "privacyValueDisallowAll",
        [
            0x8B73E763,
            [],
        ],
    ],
    [
        "privacyValueDisallowUsers",
        [
            0xE4621141,
            [
                ["users", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "privacyValueAllowChatParticipants",
        [
            0x6B134E8E,
            [
                ["chats", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "privacyValueDisallowChatParticipants",
        [
            0x41C87565,
            [
                ["chats", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "privacyValueAllowCloseFriends",
        [
            0xF7E8D89B,
            [],
        ],
    ],
    [
        "privacyValueAllowPremium",
        [
            0xECE9814B,
            [],
        ],
    ],
    [
        "account.privacyRules",
        [
            0x50A04E45,
            [
                ["rules", ["PrivacyRule"], "Vector<PrivacyRule>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "accountDaysTTL",
        [
            0xB8D0AFDF,
            [
                ["days", "number", "int"],
            ],
        ],
    ],
    [
        "documentAttributeImageSize",
        [
            0x6C37C15C,
            [
                ["w", "number", "int"],
                ["h", "number", "int"],
            ],
        ],
    ],
    [
        "documentAttributeAnimated",
        [
            0x11B58939,
            [],
        ],
    ],
    [
        "documentAttributeSticker",
        [
            0x6319D612,
            [
                ["flags", flags, "#"],
                ["mask", "true", "flags.1?true"],
                ["alt", "string", "string"],
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["mask_coords", "MaskCoords", "flags.0?MaskCoords"],
            ],
        ],
    ],
    [
        "documentAttributeVideo",
        [
            0xD38FF1C2,
            [
                ["flags", flags, "#"],
                ["round_message", "true", "flags.0?true"],
                ["supports_streaming", "true", "flags.1?true"],
                ["nosound", "true", "flags.3?true"],
                ["duration", "number", "double"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["preload_prefix_size", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "documentAttributeAudio",
        [
            0x9852F9C6,
            [
                ["flags", flags, "#"],
                ["voice", "true", "flags.10?true"],
                ["duration", "number", "int"],
                ["title", "string", "flags.0?string"],
                ["performer", "string", "flags.1?string"],
                ["waveform", Uint8Array, "flags.2?bytes"],
            ],
        ],
    ],
    [
        "documentAttributeFilename",
        [
            0x15590068,
            [
                ["file_name", "string", "string"],
            ],
        ],
    ],
    [
        "documentAttributeHasStickers",
        [
            0x9801D2F7,
            [],
        ],
    ],
    [
        "documentAttributeCustomEmoji",
        [
            0xFD149899,
            [
                ["flags", flags, "#"],
                ["free", "true", "flags.0?true"],
                ["text_color", "true", "flags.1?true"],
                ["alt", "string", "string"],
                ["stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "messages.stickersNotModified",
        [
            0xF1749A22,
            [],
        ],
    ],
    [
        "messages.stickers",
        [
            0x30A6EC7E,
            [
                ["hash", "bigint", "long"],
                ["stickers", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "stickerPack",
        [
            0x12B299D4,
            [
                ["emoticon", "string", "string"],
                ["documents", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.allStickersNotModified",
        [
            0xE86602C3,
            [],
        ],
    ],
    [
        "messages.allStickers",
        [
            0xCDBBCEBB,
            [
                ["hash", "bigint", "long"],
                ["sets", ["StickerSet"], "Vector<StickerSet>"],
            ],
        ],
    ],
    [
        "messages.affectedMessages",
        [
            0x84D19185,
            [
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
            ],
        ],
    ],
    [
        "webPageEmpty",
        [
            0x211A1788,
            [
                ["flags", flags, "#"],
                ["id", "bigint", "long"],
                ["url", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "webPagePending",
        [
            0xB0D13E47,
            [
                ["flags", flags, "#"],
                ["id", "bigint", "long"],
                ["url", "string", "flags.0?string"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "webPage",
        [
            0xE89C45B2,
            [
                ["flags", flags, "#"],
                ["has_large_media", "true", "flags.13?true"],
                ["id", "bigint", "long"],
                ["url", "string", "string"],
                ["display_url", "string", "string"],
                ["hash", "number", "int"],
                ["type", "string", "flags.0?string"],
                ["site_name", "string", "flags.1?string"],
                ["title", "string", "flags.2?string"],
                ["description", "string", "flags.3?string"],
                ["photo", "Photo", "flags.4?Photo"],
                ["embed_url", "string", "flags.5?string"],
                ["embed_type", "string", "flags.5?string"],
                ["embed_width", "number", "flags.6?int"],
                ["embed_height", "number", "flags.6?int"],
                ["duration", "number", "flags.7?int"],
                ["author", "string", "flags.8?string"],
                ["document", "Document", "flags.9?Document"],
                ["cached_page", "Page", "flags.10?Page"],
                ["attributes", ["WebPageAttribute"], "flags.12?Vector<WebPageAttribute>"],
            ],
        ],
    ],
    [
        "webPageNotModified",
        [
            0x7311CA11,
            [
                ["flags", flags, "#"],
                ["cached_page_views", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "authorization",
        [
            0xAD01D61D,
            [
                ["flags", flags, "#"],
                ["current", "true", "flags.0?true"],
                ["official_app", "true", "flags.1?true"],
                ["password_pending", "true", "flags.2?true"],
                ["encrypted_requests_disabled", "true", "flags.3?true"],
                ["call_requests_disabled", "true", "flags.4?true"],
                ["unconfirmed", "true", "flags.5?true"],
                ["hash", "bigint", "long"],
                ["device_model", "string", "string"],
                ["platform", "string", "string"],
                ["system_version", "string", "string"],
                ["api_id", "number", "int"],
                ["app_name", "string", "string"],
                ["app_version", "string", "string"],
                ["date_created", "number", "int"],
                ["date_active", "number", "int"],
                ["ip", "string", "string"],
                ["country", "string", "string"],
                ["region", "string", "string"],
            ],
        ],
    ],
    [
        "account.authorizations",
        [
            0x4BFF8EA0,
            [
                ["authorization_ttl_days", "number", "int"],
                ["authorizations", ["Authorization"], "Vector<Authorization>"],
            ],
        ],
    ],
    [
        "account.password",
        [
            0x957B50FB,
            [
                ["flags", flags, "#"],
                ["has_recovery", "true", "flags.0?true"],
                ["has_secure_values", "true", "flags.1?true"],
                ["has_password", "true", "flags.2?true"],
                ["current_algo", "PasswordKdfAlgo", "flags.2?PasswordKdfAlgo"],
                ["srp_B", Uint8Array, "flags.2?bytes"],
                ["srp_id", "bigint", "flags.2?long"],
                ["hint", "string", "flags.3?string"],
                ["email_unconfirmed_pattern", "string", "flags.4?string"],
                ["new_algo", "PasswordKdfAlgo", "PasswordKdfAlgo"],
                ["new_secure_algo", "SecurePasswordKdfAlgo", "SecurePasswordKdfAlgo"],
                ["secure_random", Uint8Array, "bytes"],
                ["pending_reset_date", "number", "flags.5?int"],
                ["login_email_pattern", "string", "flags.6?string"],
            ],
        ],
    ],
    [
        "account.passwordSettings",
        [
            0x9A5C33E5,
            [
                ["flags", flags, "#"],
                ["email", "string", "flags.0?string"],
                ["secure_settings", "SecureSecretSettings", "flags.1?SecureSecretSettings"],
            ],
        ],
    ],
    [
        "account.passwordInputSettings",
        [
            0xC23727C9,
            [
                ["flags", flags, "#"],
                ["new_algo", "PasswordKdfAlgo", "flags.0?PasswordKdfAlgo"],
                ["new_password_hash", Uint8Array, "flags.0?bytes"],
                ["hint", "string", "flags.0?string"],
                ["email", "string", "flags.1?string"],
                ["new_secure_settings", "SecureSecretSettings", "flags.2?SecureSecretSettings"],
            ],
        ],
    ],
    [
        "auth.passwordRecovery",
        [
            0x137948A5,
            [
                ["email_pattern", "string", "string"],
            ],
        ],
    ],
    [
        "receivedNotifyMessage",
        [
            0xA384B779,
            [
                ["id", "number", "int"],
                ["flags", "number", "int"],
            ],
        ],
    ],
    [
        "chatInviteExported",
        [
            0x0AB4A819,
            [
                ["flags", flags, "#"],
                ["revoked", "true", "flags.0?true"],
                ["permanent", "true", "flags.5?true"],
                ["request_needed", "true", "flags.6?true"],
                ["link", "string", "string"],
                ["admin_id", "bigint", "long"],
                ["date", "number", "int"],
                ["start_date", "number", "flags.4?int"],
                ["expire_date", "number", "flags.1?int"],
                ["usage_limit", "number", "flags.2?int"],
                ["usage", "number", "flags.3?int"],
                ["requested", "number", "flags.7?int"],
                ["title", "string", "flags.8?string"],
            ],
        ],
    ],
    [
        "chatInvitePublicJoinRequests",
        [
            0xED107AB7,
            [],
        ],
    ],
    [
        "chatInviteAlready",
        [
            0x5A686D7C,
            [
                ["chat", "Chat", "Chat"],
            ],
        ],
    ],
    [
        "chatInvite",
        [
            0xCDE0EC40,
            [
                ["flags", flags, "#"],
                ["channel", "true", "flags.0?true"],
                ["broadcast", "true", "flags.1?true"],
                ["public", "true", "flags.2?true"],
                ["megagroup", "true", "flags.3?true"],
                ["request_needed", "true", "flags.6?true"],
                ["verified", "true", "flags.7?true"],
                ["scam", "true", "flags.8?true"],
                ["fake", "true", "flags.9?true"],
                ["title", "string", "string"],
                ["about", "string", "flags.5?string"],
                ["photo", "Photo", "Photo"],
                ["participants_count", "number", "int"],
                ["participants", ["User"], "flags.4?Vector<User>"],
                ["color", "number", "int"],
            ],
        ],
    ],
    [
        "chatInvitePeek",
        [
            0x61695CB0,
            [
                ["chat", "Chat", "Chat"],
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "inputStickerSetEmpty",
        [
            0xFFB62B95,
            [],
        ],
    ],
    [
        "inputStickerSetID",
        [
            0x9DE7A269,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputStickerSetShortName",
        [
            0x861CC8A0,
            [
                ["short_name", "string", "string"],
            ],
        ],
    ],
    [
        "inputStickerSetAnimatedEmoji",
        [
            0x028703C8,
            [],
        ],
    ],
    [
        "inputStickerSetDice",
        [
            0xE67F520E,
            [
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "inputStickerSetAnimatedEmojiAnimations",
        [
            0x0CDE3739,
            [],
        ],
    ],
    [
        "inputStickerSetPremiumGifts",
        [
            0xC88B3B02,
            [],
        ],
    ],
    [
        "inputStickerSetEmojiGenericAnimations",
        [
            0x04C4D4CE,
            [],
        ],
    ],
    [
        "inputStickerSetEmojiDefaultStatuses",
        [
            0x29D0F5EE,
            [],
        ],
    ],
    [
        "inputStickerSetEmojiDefaultTopicIcons",
        [
            0x44C1F8E9,
            [],
        ],
    ],
    [
        "inputStickerSetEmojiChannelDefaultStatuses",
        [
            0x49748553,
            [],
        ],
    ],
    [
        "stickerSet",
        [
            0x2DD14EDC,
            [
                ["flags", flags, "#"],
                ["archived", "true", "flags.1?true"],
                ["official", "true", "flags.2?true"],
                ["masks", "true", "flags.3?true"],
                ["emojis", "true", "flags.7?true"],
                ["text_color", "true", "flags.9?true"],
                ["channel_emoji_status", "true", "flags.10?true"],
                ["creator", "true", "flags.11?true"],
                ["installed_date", "number", "flags.0?int"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["title", "string", "string"],
                ["short_name", "string", "string"],
                ["thumbs", ["PhotoSize"], "flags.4?Vector<PhotoSize>"],
                ["thumb_dc_id", "number", "flags.4?int"],
                ["thumb_version", "number", "flags.4?int"],
                ["thumb_document_id", "bigint", "flags.8?long"],
                ["count", "number", "int"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.stickerSet",
        [
            0x6E153F16,
            [
                ["set", "StickerSet", "StickerSet"],
                ["packs", ["StickerPack"], "Vector<StickerPack>"],
                ["keywords", ["StickerKeyword"], "Vector<StickerKeyword>"],
                ["documents", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "messages.stickerSetNotModified",
        [
            0xD3F924EB,
            [],
        ],
    ],
    [
        "botCommand",
        [
            0xC27AC8C7,
            [
                ["command", "string", "string"],
                ["description", "string", "string"],
            ],
        ],
    ],
    [
        "botInfo",
        [
            0x8F300B57,
            [
                ["flags", flags, "#"],
                ["user_id", "bigint", "flags.0?long"],
                ["description", "string", "flags.1?string"],
                ["description_photo", "Photo", "flags.4?Photo"],
                ["description_document", "Document", "flags.5?Document"],
                ["commands", ["BotCommand"], "flags.2?Vector<BotCommand>"],
                ["menu_button", "BotMenuButton", "flags.3?BotMenuButton"],
            ],
        ],
    ],
    [
        "keyboardButton",
        [
            0xA2FA4880,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonUrl",
        [
            0x258AFF05,
            [
                ["text", "string", "string"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonCallback",
        [
            0x35BBDB6B,
            [
                ["flags", flags, "#"],
                ["requires_password", "true", "flags.0?true"],
                ["text", "string", "string"],
                ["data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "keyboardButtonRequestPhone",
        [
            0xB16A6C29,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonRequestGeoLocation",
        [
            0xFC796B3F,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonSwitchInline",
        [
            0x93B9FBB5,
            [
                ["flags", flags, "#"],
                ["same_peer", "true", "flags.0?true"],
                ["text", "string", "string"],
                ["query", "string", "string"],
                ["peer_types", ["InlineQueryPeerType"], "flags.1?Vector<InlineQueryPeerType>"],
            ],
        ],
    ],
    [
        "keyboardButtonGame",
        [
            0x50F41CCF,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonBuy",
        [
            0xAFD93FBB,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonUrlAuth",
        [
            0x10B78D29,
            [
                ["flags", flags, "#"],
                ["text", "string", "string"],
                ["fwd_text", "string", "flags.0?string"],
                ["url", "string", "string"],
                ["button_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputKeyboardButtonUrlAuth",
        [
            0xD02E7FD4,
            [
                ["flags", flags, "#"],
                ["request_write_access", "true", "flags.0?true"],
                ["text", "string", "string"],
                ["fwd_text", "string", "flags.1?string"],
                ["url", "string", "string"],
                ["bot", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "keyboardButtonRequestPoll",
        [
            0xBBC7515D,
            [
                ["flags", flags, "#"],
                ["quiz", "boolean", "flags.0?Bool"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "inputKeyboardButtonUserProfile",
        [
            0xE988037B,
            [
                ["text", "string", "string"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "keyboardButtonUserProfile",
        [
            0x308660C1,
            [
                ["text", "string", "string"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "keyboardButtonWebView",
        [
            0x13767230,
            [
                ["text", "string", "string"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonSimpleWebView",
        [
            0xA0C0505C,
            [
                ["text", "string", "string"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "keyboardButtonRequestPeer",
        [
            0x53D7BFD8,
            [
                ["text", "string", "string"],
                ["button_id", "number", "int"],
                ["peer_type", "RequestPeerType", "RequestPeerType"],
                ["max_quantity", "number", "int"],
            ],
        ],
    ],
    [
        "inputKeyboardButtonRequestPeer",
        [
            0xC9662D05,
            [
                ["flags", flags, "#"],
                ["name_requested", "true", "flags.0?true"],
                ["username_requested", "true", "flags.1?true"],
                ["photo_requested", "true", "flags.2?true"],
                ["text", "string", "string"],
                ["button_id", "number", "int"],
                ["peer_type", "RequestPeerType", "RequestPeerType"],
                ["max_quantity", "number", "int"],
            ],
        ],
    ],
    [
        "keyboardButtonRow",
        [
            0x77608B83,
            [
                ["buttons", ["KeyboardButton"], "Vector<KeyboardButton>"],
            ],
        ],
    ],
    [
        "replyKeyboardHide",
        [
            0xA03E5B85,
            [
                ["flags", flags, "#"],
                ["selective", "true", "flags.2?true"],
            ],
        ],
    ],
    [
        "replyKeyboardForceReply",
        [
            0x86B40B08,
            [
                ["flags", flags, "#"],
                ["single_use", "true", "flags.1?true"],
                ["selective", "true", "flags.2?true"],
                ["placeholder", "string", "flags.3?string"],
            ],
        ],
    ],
    [
        "replyKeyboardMarkup",
        [
            0x85DD99D1,
            [
                ["flags", flags, "#"],
                ["resize", "true", "flags.0?true"],
                ["single_use", "true", "flags.1?true"],
                ["selective", "true", "flags.2?true"],
                ["persistent", "true", "flags.4?true"],
                ["rows", ["KeyboardButtonRow"], "Vector<KeyboardButtonRow>"],
                ["placeholder", "string", "flags.3?string"],
            ],
        ],
    ],
    [
        "replyInlineMarkup",
        [
            0x48A30254,
            [
                ["rows", ["KeyboardButtonRow"], "Vector<KeyboardButtonRow>"],
            ],
        ],
    ],
    [
        "messageEntityUnknown",
        [
            0xBB92BA95,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityMention",
        [
            0xFA04579D,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityHashtag",
        [
            0x6F635B0D,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityBotCommand",
        [
            0x6CEF8AC7,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityUrl",
        [
            0x6ED02538,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityEmail",
        [
            0x64E475C2,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityBold",
        [
            0xBD610BC9,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityItalic",
        [
            0x826F8B60,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityCode",
        [
            0x28A20571,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityPre",
        [
            0x73924BE0,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
                ["language", "string", "string"],
            ],
        ],
    ],
    [
        "messageEntityTextUrl",
        [
            0x76A6D327,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "messageEntityMentionName",
        [
            0xDC7B1140,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputMessageEntityMentionName",
        [
            0x208E68C9,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messageEntityPhone",
        [
            0x9B69E34B,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityCashtag",
        [
            0x4C4E743F,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityUnderline",
        [
            0x9C4E7E8B,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityStrike",
        [
            0xBF0693D4,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityBankCard",
        [
            0x761E6AF4,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntitySpoiler",
        [
            0x32CA960F,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "messageEntityCustomEmoji",
        [
            0xC8CF05F8,
            [
                ["offset", "number", "int"],
                ["length", "number", "int"],
                ["document_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messageEntityBlockquote",
        [
            0xF1CCAAAC,
            [
                ["flags", flags, "#"],
                ["collapsed", "true", "flags.0?true"],
                ["offset", "number", "int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "inputChannelEmpty",
        [
            0xEE8C1E86,
            [],
        ],
    ],
    [
        "inputChannel",
        [
            0xF35AEC28,
            [
                ["channel_id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputChannelFromMessage",
        [
            0x5B934F9D,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["channel_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "contacts.resolvedPeer",
        [
            0x7F077AD9,
            [
                ["peer", "Peer", "Peer"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messageRange",
        [
            0x0AE30253,
            [
                ["min_id", "number", "int"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "updates.channelDifferenceEmpty",
        [
            0x3E11AFFB,
            [
                ["flags", flags, "#"],
                ["final", "true", "flags.0?true"],
                ["pts", "number", "int"],
                ["timeout", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "updates.channelDifferenceTooLong",
        [
            0xA4BCC6FE,
            [
                ["flags", flags, "#"],
                ["final", "true", "flags.0?true"],
                ["timeout", "number", "flags.1?int"],
                ["dialog", "Dialog", "Dialog"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "updates.channelDifference",
        [
            0x2064674E,
            [
                ["flags", flags, "#"],
                ["final", "true", "flags.0?true"],
                ["pts", "number", "int"],
                ["timeout", "number", "flags.1?int"],
                ["new_messages", ["Message"], "Vector<Message>"],
                ["other_updates", ["Update"], "Vector<Update>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "channelMessagesFilterEmpty",
        [
            0x94D42EE7,
            [],
        ],
    ],
    [
        "channelMessagesFilter",
        [
            0xCD77D957,
            [
                ["flags", flags, "#"],
                ["exclude_new_messages", "true", "flags.1?true"],
                ["ranges", ["MessageRange"], "Vector<MessageRange>"],
            ],
        ],
    ],
    [
        "channelParticipant",
        [
            0xC00C07C0,
            [
                ["user_id", "bigint", "long"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "channelParticipantSelf",
        [
            0x35A8BFA7,
            [
                ["flags", flags, "#"],
                ["via_request", "true", "flags.0?true"],
                ["user_id", "bigint", "long"],
                ["inviter_id", "bigint", "long"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "channelParticipantCreator",
        [
            0x2FE601D3,
            [
                ["flags", flags, "#"],
                ["user_id", "bigint", "long"],
                ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
                ["rank", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "channelParticipantAdmin",
        [
            0x34C3BB53,
            [
                ["flags", flags, "#"],
                ["can_edit", "true", "flags.0?true"],
                ["self", "true", "flags.1?true"],
                ["user_id", "bigint", "long"],
                ["inviter_id", "bigint", "flags.1?long"],
                ["promoted_by", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
                ["rank", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "channelParticipantBanned",
        [
            0x6DF8014E,
            [
                ["flags", flags, "#"],
                ["left", "true", "flags.0?true"],
                ["peer", "Peer", "Peer"],
                ["kicked_by", "bigint", "long"],
                ["date", "number", "int"],
                ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
            ],
        ],
    ],
    [
        "channelParticipantLeft",
        [
            0x1B03F006,
            [
                ["peer", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "channelParticipantsRecent",
        [
            0xDE3F3C79,
            [],
        ],
    ],
    [
        "channelParticipantsAdmins",
        [
            0xB4608969,
            [],
        ],
    ],
    [
        "channelParticipantsKicked",
        [
            0xA3B54985,
            [
                ["q", "string", "string"],
            ],
        ],
    ],
    [
        "channelParticipantsBots",
        [
            0xB0D1865B,
            [],
        ],
    ],
    [
        "channelParticipantsBanned",
        [
            0x1427A5E1,
            [
                ["q", "string", "string"],
            ],
        ],
    ],
    [
        "channelParticipantsSearch",
        [
            0x0656AC4B,
            [
                ["q", "string", "string"],
            ],
        ],
    ],
    [
        "channelParticipantsContacts",
        [
            0xBB6AE88D,
            [
                ["q", "string", "string"],
            ],
        ],
    ],
    [
        "channelParticipantsMentions",
        [
            0xE04B5CEB,
            [
                ["flags", flags, "#"],
                ["q", "string", "flags.0?string"],
                ["top_msg_id", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "channels.channelParticipants",
        [
            0x9AB0FEAF,
            [
                ["count", "number", "int"],
                ["participants", ["ChannelParticipant"], "Vector<ChannelParticipant>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "channels.channelParticipantsNotModified",
        [
            0xF0173FE9,
            [],
        ],
    ],
    [
        "channels.channelParticipant",
        [
            0xDFB80317,
            [
                ["participant", "ChannelParticipant", "ChannelParticipant"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "help.termsOfService",
        [
            0x780A0310,
            [
                ["flags", flags, "#"],
                ["popup", "true", "flags.0?true"],
                ["id", "DataJSON", "DataJSON"],
                ["text", "string", "string"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
                ["min_age_confirm", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "messages.savedGifsNotModified",
        [
            0xE8025CA2,
            [],
        ],
    ],
    [
        "messages.savedGifs",
        [
            0x84A02A0D,
            [
                ["hash", "bigint", "long"],
                ["gifs", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaAuto",
        [
            0x3380C786,
            [
                ["flags", flags, "#"],
                ["invert_media", "true", "flags.3?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageText",
        [
            0x3DCD7A87,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.0?true"],
                ["invert_media", "true", "flags.3?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaGeo",
        [
            0x96929A85,
            [
                ["flags", flags, "#"],
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["heading", "number", "flags.0?int"],
                ["period", "number", "flags.1?int"],
                ["proximity_notification_radius", "number", "flags.3?int"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaVenue",
        [
            0x417BBF11,
            [
                ["flags", flags, "#"],
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["title", "string", "string"],
                ["address", "string", "string"],
                ["provider", "string", "string"],
                ["venue_id", "string", "string"],
                ["venue_type", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaContact",
        [
            0xA6EDBFFD,
            [
                ["flags", flags, "#"],
                ["phone_number", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["vcard", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageGame",
        [
            0x4B425864,
            [
                ["flags", flags, "#"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaInvoice",
        [
            0xD7E78225,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "InputWebDocument", "flags.0?InputWebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["payload", Uint8Array, "bytes"],
                ["provider", "string", "string"],
                ["provider_data", "DataJSON", "DataJSON"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageMediaWebPage",
        [
            0xBDDCC510,
            [
                ["flags", flags, "#"],
                ["invert_media", "true", "flags.3?true"],
                ["force_large_media", "true", "flags.4?true"],
                ["force_small_media", "true", "flags.5?true"],
                ["optional", "true", "flags.6?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["url", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "inputBotInlineResult",
        [
            0x88BF9319,
            [
                ["flags", flags, "#"],
                ["id", "string", "string"],
                ["type", "string", "string"],
                ["title", "string", "flags.1?string"],
                ["description", "string", "flags.2?string"],
                ["url", "string", "flags.3?string"],
                ["thumb", "InputWebDocument", "flags.4?InputWebDocument"],
                ["content", "InputWebDocument", "flags.5?InputWebDocument"],
                ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
            ],
        ],
    ],
    [
        "inputBotInlineResultPhoto",
        [
            0xA8D864A7,
            [
                ["id", "string", "string"],
                ["type", "string", "string"],
                ["photo", "InputPhoto", "InputPhoto"],
                ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
            ],
        ],
    ],
    [
        "inputBotInlineResultDocument",
        [
            0xFFF8FDC4,
            [
                ["flags", flags, "#"],
                ["id", "string", "string"],
                ["type", "string", "string"],
                ["title", "string", "flags.1?string"],
                ["description", "string", "flags.2?string"],
                ["document", "InputDocument", "InputDocument"],
                ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
            ],
        ],
    ],
    [
        "inputBotInlineResultGame",
        [
            0x4FA417F2,
            [
                ["id", "string", "string"],
                ["short_name", "string", "string"],
                ["send_message", "InputBotInlineMessage", "InputBotInlineMessage"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaAuto",
        [
            0x764CF810,
            [
                ["flags", flags, "#"],
                ["invert_media", "true", "flags.3?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageText",
        [
            0x8C7F65E2,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.0?true"],
                ["invert_media", "true", "flags.3?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaGeo",
        [
            0x051846FD,
            [
                ["flags", flags, "#"],
                ["geo", "GeoPoint", "GeoPoint"],
                ["heading", "number", "flags.0?int"],
                ["period", "number", "flags.1?int"],
                ["proximity_notification_radius", "number", "flags.3?int"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaVenue",
        [
            0x8A86659C,
            [
                ["flags", flags, "#"],
                ["geo", "GeoPoint", "GeoPoint"],
                ["title", "string", "string"],
                ["address", "string", "string"],
                ["provider", "string", "string"],
                ["venue_id", "string", "string"],
                ["venue_type", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaContact",
        [
            0x18D1CDC2,
            [
                ["flags", flags, "#"],
                ["phone_number", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["vcard", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaInvoice",
        [
            0x354A9B09,
            [
                ["flags", flags, "#"],
                ["shipping_address_requested", "true", "flags.1?true"],
                ["test", "true", "flags.3?true"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.0?WebDocument"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineMessageMediaWebPage",
        [
            0x809AD9A6,
            [
                ["flags", flags, "#"],
                ["invert_media", "true", "flags.3?true"],
                ["force_large_media", "true", "flags.4?true"],
                ["force_small_media", "true", "flags.5?true"],
                ["manual", "true", "flags.7?true"],
                ["safe", "true", "flags.8?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["url", "string", "string"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
            ],
        ],
    ],
    [
        "botInlineResult",
        [
            0x11965F3A,
            [
                ["flags", flags, "#"],
                ["id", "string", "string"],
                ["type", "string", "string"],
                ["title", "string", "flags.1?string"],
                ["description", "string", "flags.2?string"],
                ["url", "string", "flags.3?string"],
                ["thumb", "WebDocument", "flags.4?WebDocument"],
                ["content", "WebDocument", "flags.5?WebDocument"],
                ["send_message", "BotInlineMessage", "BotInlineMessage"],
            ],
        ],
    ],
    [
        "botInlineMediaResult",
        [
            0x17DB940B,
            [
                ["flags", flags, "#"],
                ["id", "string", "string"],
                ["type", "string", "string"],
                ["photo", "Photo", "flags.0?Photo"],
                ["document", "Document", "flags.1?Document"],
                ["title", "string", "flags.2?string"],
                ["description", "string", "flags.3?string"],
                ["send_message", "BotInlineMessage", "BotInlineMessage"],
            ],
        ],
    ],
    [
        "messages.botResults",
        [
            0xE021F2F6,
            [
                ["flags", flags, "#"],
                ["gallery", "true", "flags.0?true"],
                ["query_id", "bigint", "long"],
                ["next_offset", "string", "flags.1?string"],
                ["switch_pm", "InlineBotSwitchPM", "flags.2?InlineBotSwitchPM"],
                ["switch_webview", "InlineBotWebView", "flags.3?InlineBotWebView"],
                ["results", ["BotInlineResult"], "Vector<BotInlineResult>"],
                ["cache_time", "number", "int"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "exportedMessageLink",
        [
            0x5DAB1AF4,
            [
                ["link", "string", "string"],
                ["html", "string", "string"],
            ],
        ],
    ],
    [
        "messageFwdHeader",
        [
            0x4E4DF4BB,
            [
                ["flags", flags, "#"],
                ["imported", "true", "flags.7?true"],
                ["saved_out", "true", "flags.11?true"],
                ["from_id", "Peer", "flags.0?Peer"],
                ["from_name", "string", "flags.5?string"],
                ["date", "number", "int"],
                ["channel_post", "number", "flags.2?int"],
                ["post_author", "string", "flags.3?string"],
                ["saved_from_peer", "Peer", "flags.4?Peer"],
                ["saved_from_msg_id", "number", "flags.4?int"],
                ["saved_from_id", "Peer", "flags.8?Peer"],
                ["saved_from_name", "string", "flags.9?string"],
                ["saved_date", "number", "flags.10?int"],
                ["psa_type", "string", "flags.6?string"],
            ],
        ],
    ],
    [
        "auth.codeTypeSms",
        [
            0x72A3158C,
            [],
        ],
    ],
    [
        "auth.codeTypeCall",
        [
            0x741CD3E3,
            [],
        ],
    ],
    [
        "auth.codeTypeFlashCall",
        [
            0x226CCEFB,
            [],
        ],
    ],
    [
        "auth.codeTypeMissedCall",
        [
            0xD61AD6EE,
            [],
        ],
    ],
    [
        "auth.codeTypeFragmentSms",
        [
            0x06ED998C,
            [],
        ],
    ],
    [
        "auth.sentCodeTypeApp",
        [
            0x3DBB5986,
            [
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeSms",
        [
            0xC000BBA2,
            [
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeCall",
        [
            0x5353E5A7,
            [
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeFlashCall",
        [
            0xAB03C6D9,
            [
                ["pattern", "string", "string"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeMissedCall",
        [
            0x82006484,
            [
                ["prefix", "string", "string"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeEmailCode",
        [
            0xF450F59B,
            [
                ["flags", flags, "#"],
                ["apple_signin_allowed", "true", "flags.0?true"],
                ["google_signin_allowed", "true", "flags.1?true"],
                ["email_pattern", "string", "string"],
                ["length", "number", "int"],
                ["reset_available_period", "number", "flags.3?int"],
                ["reset_pending_date", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeSetUpEmailRequired",
        [
            0xA5491DEA,
            [
                ["flags", flags, "#"],
                ["apple_signin_allowed", "true", "flags.0?true"],
                ["google_signin_allowed", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeFragmentSms",
        [
            0xD9565C39,
            [
                ["url", "string", "string"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeFirebaseSms",
        [
            0x009FD736,
            [
                ["flags", flags, "#"],
                ["nonce", Uint8Array, "flags.0?bytes"],
                ["play_integrity_project_id", "bigint", "flags.2?long"],
                ["play_integrity_nonce", Uint8Array, "flags.2?bytes"],
                ["receipt", "string", "flags.1?string"],
                ["push_timeout", "number", "flags.1?int"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeSmsWord",
        [
            0xA416AC81,
            [
                ["flags", flags, "#"],
                ["beginning", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "auth.sentCodeTypeSmsPhrase",
        [
            0xB37794AF,
            [
                ["flags", flags, "#"],
                ["beginning", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "messages.botCallbackAnswer",
        [
            0x36585EA4,
            [
                ["flags", flags, "#"],
                ["alert", "true", "flags.1?true"],
                ["has_url", "true", "flags.3?true"],
                ["native_ui", "true", "flags.4?true"],
                ["message", "string", "flags.0?string"],
                ["url", "string", "flags.2?string"],
                ["cache_time", "number", "int"],
            ],
        ],
    ],
    [
        "messages.messageEditData",
        [
            0x26B5DDE6,
            [
                ["flags", flags, "#"],
                ["caption", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageID",
        [
            0x890C3D89,
            [
                ["dc_id", "number", "int"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputBotInlineMessageID64",
        [
            0xB6D915D7,
            [
                ["dc_id", "number", "int"],
                ["owner_id", "bigint", "long"],
                ["id", "number", "int"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inlineBotSwitchPM",
        [
            0x3C20629F,
            [
                ["text", "string", "string"],
                ["start_param", "string", "string"],
            ],
        ],
    ],
    [
        "messages.peerDialogs",
        [
            0x3371C354,
            [
                ["dialogs", ["Dialog"], "Vector<Dialog>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["state", "updates_State", "updates.State"],
            ],
        ],
    ],
    [
        "topPeer",
        [
            0xEDCDC05B,
            [
                ["peer", "Peer", "Peer"],
                ["rating", "number", "double"],
            ],
        ],
    ],
    [
        "topPeerCategoryBotsPM",
        [
            0xAB661B5B,
            [],
        ],
    ],
    [
        "topPeerCategoryBotsInline",
        [
            0x148677E2,
            [],
        ],
    ],
    [
        "topPeerCategoryCorrespondents",
        [
            0x0637B7ED,
            [],
        ],
    ],
    [
        "topPeerCategoryGroups",
        [
            0xBD17A14A,
            [],
        ],
    ],
    [
        "topPeerCategoryChannels",
        [
            0x161D9628,
            [],
        ],
    ],
    [
        "topPeerCategoryPhoneCalls",
        [
            0x1E76A78C,
            [],
        ],
    ],
    [
        "topPeerCategoryForwardUsers",
        [
            0xA8406CA9,
            [],
        ],
    ],
    [
        "topPeerCategoryForwardChats",
        [
            0xFBEEC0F0,
            [],
        ],
    ],
    [
        "topPeerCategoryPeers",
        [
            0xFB834291,
            [
                ["category", "TopPeerCategory", "TopPeerCategory"],
                ["count", "number", "int"],
                ["peers", ["TopPeer"], "Vector<TopPeer>"],
            ],
        ],
    ],
    [
        "contacts.topPeersNotModified",
        [
            0xDE266EF5,
            [],
        ],
    ],
    [
        "contacts.topPeers",
        [
            0x70B772A8,
            [
                ["categories", ["TopPeerCategoryPeers"], "Vector<TopPeerCategoryPeers>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "contacts.topPeersDisabled",
        [
            0xB52C939D,
            [],
        ],
    ],
    [
        "draftMessageEmpty",
        [
            0x1B0C841A,
            [
                ["flags", flags, "#"],
                ["date", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "draftMessage",
        [
            0x2D65321F,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.1?true"],
                ["invert_media", "true", "flags.6?true"],
                ["reply_to", "InputReplyTo", "flags.4?InputReplyTo"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["media", "InputMedia", "flags.5?InputMedia"],
                ["date", "number", "int"],
                ["effect", "bigint", "flags.7?long"],
            ],
        ],
    ],
    [
        "messages.featuredStickersNotModified",
        [
            0xC6DC0C66,
            [
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.featuredStickers",
        [
            0xBE382906,
            [
                ["flags", flags, "#"],
                ["premium", "true", "flags.0?true"],
                ["hash", "bigint", "long"],
                ["count", "number", "int"],
                ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
                ["unread", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.recentStickersNotModified",
        [
            0x0B17F890,
            [],
        ],
    ],
    [
        "messages.recentStickers",
        [
            0x88D37C56,
            [
                ["hash", "bigint", "long"],
                ["packs", ["StickerPack"], "Vector<StickerPack>"],
                ["stickers", ["Document"], "Vector<Document>"],
                ["dates", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.archivedStickers",
        [
            0x4FCBA9C8,
            [
                ["count", "number", "int"],
                ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
            ],
        ],
    ],
    [
        "messages.stickerSetInstallResultSuccess",
        [
            0x38641628,
            [],
        ],
    ],
    [
        "messages.stickerSetInstallResultArchive",
        [
            0x35E410A8,
            [
                ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
            ],
        ],
    ],
    [
        "stickerSetCovered",
        [
            0x6410A5D2,
            [
                ["set", "StickerSet", "StickerSet"],
                ["cover", "Document", "Document"],
            ],
        ],
    ],
    [
        "stickerSetMultiCovered",
        [
            0x3407E51B,
            [
                ["set", "StickerSet", "StickerSet"],
                ["covers", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "stickerSetFullCovered",
        [
            0x40D13C0E,
            [
                ["set", "StickerSet", "StickerSet"],
                ["packs", ["StickerPack"], "Vector<StickerPack>"],
                ["keywords", ["StickerKeyword"], "Vector<StickerKeyword>"],
                ["documents", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "stickerSetNoCovered",
        [
            0x77B15D1C,
            [
                ["set", "StickerSet", "StickerSet"],
            ],
        ],
    ],
    [
        "maskCoords",
        [
            0xAED6DBB2,
            [
                ["n", "number", "int"],
                ["x", "number", "double"],
                ["y", "number", "double"],
                ["zoom", "number", "double"],
            ],
        ],
    ],
    [
        "inputStickeredMediaPhoto",
        [
            0x4A992157,
            [
                ["id", "InputPhoto", "InputPhoto"],
            ],
        ],
    ],
    [
        "inputStickeredMediaDocument",
        [
            0x0438865B,
            [
                ["id", "InputDocument", "InputDocument"],
            ],
        ],
    ],
    [
        "game",
        [
            0xBDF9653B,
            [
                ["flags", flags, "#"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["short_name", "string", "string"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "Photo", "Photo"],
                ["document", "Document", "flags.0?Document"],
            ],
        ],
    ],
    [
        "inputGameID",
        [
            0x032C3E77,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputGameShortName",
        [
            0xC331E80A,
            [
                ["bot_id", "InputUser", "InputUser"],
                ["short_name", "string", "string"],
            ],
        ],
    ],
    [
        "highScore",
        [
            0x73A379EB,
            [
                ["pos", "number", "int"],
                ["user_id", "bigint", "long"],
                ["score", "number", "int"],
            ],
        ],
    ],
    [
        "messages.highScores",
        [
            0x9A3BFD99,
            [
                ["scores", ["HighScore"], "Vector<HighScore>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "textEmpty",
        [
            0xDC3D824F,
            [],
        ],
    ],
    [
        "textPlain",
        [
            0x744694E0,
            [
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "textBold",
        [
            0x6724ABC4,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textItalic",
        [
            0xD912A59C,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textUnderline",
        [
            0xC12622C4,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textStrike",
        [
            0x9BF8BB95,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textFixed",
        [
            0x6C3F19B9,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textUrl",
        [
            0x3C2884C1,
            [
                ["text", "RichText", "RichText"],
                ["url", "string", "string"],
                ["webpage_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "textEmail",
        [
            0xDE5A0DD6,
            [
                ["text", "RichText", "RichText"],
                ["email", "string", "string"],
            ],
        ],
    ],
    [
        "textConcat",
        [
            0x7E6260D7,
            [
                ["texts", ["RichText"], "Vector<RichText>"],
            ],
        ],
    ],
    [
        "textSubscript",
        [
            0xED6A8504,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textSuperscript",
        [
            0xC7FB5E01,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textMarked",
        [
            0x034B8621,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "textPhone",
        [
            0x1CCB966A,
            [
                ["text", "RichText", "RichText"],
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "textImage",
        [
            0x081CCF4F,
            [
                ["document_id", "bigint", "long"],
                ["w", "number", "int"],
                ["h", "number", "int"],
            ],
        ],
    ],
    [
        "textAnchor",
        [
            0x35553762,
            [
                ["text", "RichText", "RichText"],
                ["name", "string", "string"],
            ],
        ],
    ],
    [
        "pageBlockUnsupported",
        [
            0x13567E8A,
            [],
        ],
    ],
    [
        "pageBlockTitle",
        [
            0x70ABC3FD,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockSubtitle",
        [
            0x8FFA9A1F,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockAuthorDate",
        [
            0xBAAFE5E0,
            [
                ["author", "RichText", "RichText"],
                ["published_date", "number", "int"],
            ],
        ],
    ],
    [
        "pageBlockHeader",
        [
            0xBFD064EC,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockSubheader",
        [
            0xF12BB6E1,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockParagraph",
        [
            0x467A0766,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockPreformatted",
        [
            0xC070D93E,
            [
                ["text", "RichText", "RichText"],
                ["language", "string", "string"],
            ],
        ],
    ],
    [
        "pageBlockFooter",
        [
            0x48870999,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockDivider",
        [
            0xDB20B188,
            [],
        ],
    ],
    [
        "pageBlockAnchor",
        [
            0xCE0D37B0,
            [
                ["name", "string", "string"],
            ],
        ],
    ],
    [
        "pageBlockList",
        [
            0xE4E88011,
            [
                ["items", ["PageListItem"], "Vector<PageListItem>"],
            ],
        ],
    ],
    [
        "pageBlockBlockquote",
        [
            0x263D7C26,
            [
                ["text", "RichText", "RichText"],
                ["caption", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockPullquote",
        [
            0x4F4456D3,
            [
                ["text", "RichText", "RichText"],
                ["caption", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockPhoto",
        [
            0x1759C560,
            [
                ["flags", flags, "#"],
                ["photo_id", "bigint", "long"],
                ["caption", "PageCaption", "PageCaption"],
                ["url", "string", "flags.0?string"],
                ["webpage_id", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "pageBlockVideo",
        [
            0x7C8FE7B6,
            [
                ["flags", flags, "#"],
                ["autoplay", "true", "flags.0?true"],
                ["loop", "true", "flags.1?true"],
                ["video_id", "bigint", "long"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockCover",
        [
            0x39F23300,
            [
                ["cover", "PageBlock", "PageBlock"],
            ],
        ],
    ],
    [
        "pageBlockEmbed",
        [
            0xA8718DC5,
            [
                ["flags", flags, "#"],
                ["full_width", "true", "flags.0?true"],
                ["allow_scrolling", "true", "flags.3?true"],
                ["url", "string", "flags.1?string"],
                ["html", "string", "flags.2?string"],
                ["poster_photo_id", "bigint", "flags.4?long"],
                ["w", "number", "flags.5?int"],
                ["h", "number", "flags.5?int"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockEmbedPost",
        [
            0xF259A80B,
            [
                ["url", "string", "string"],
                ["webpage_id", "bigint", "long"],
                ["author_photo_id", "bigint", "long"],
                ["author", "string", "string"],
                ["date", "number", "int"],
                ["blocks", ["PageBlock"], "Vector<PageBlock>"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockCollage",
        [
            0x65A0FA4D,
            [
                ["items", ["PageBlock"], "Vector<PageBlock>"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockSlideshow",
        [
            0x031F9590,
            [
                ["items", ["PageBlock"], "Vector<PageBlock>"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockChannel",
        [
            0xEF1751B5,
            [
                ["channel", "Chat", "Chat"],
            ],
        ],
    ],
    [
        "pageBlockAudio",
        [
            0x804361EA,
            [
                ["audio_id", "bigint", "long"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "pageBlockKicker",
        [
            0x1E148390,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockTable",
        [
            0xBF4DEA82,
            [
                ["flags", flags, "#"],
                ["bordered", "true", "flags.0?true"],
                ["striped", "true", "flags.1?true"],
                ["title", "RichText", "RichText"],
                ["rows", ["PageTableRow"], "Vector<PageTableRow>"],
            ],
        ],
    ],
    [
        "pageBlockOrderedList",
        [
            0x9A8AE1E1,
            [
                ["items", ["PageListOrderedItem"], "Vector<PageListOrderedItem>"],
            ],
        ],
    ],
    [
        "pageBlockDetails",
        [
            0x76768BED,
            [
                ["flags", flags, "#"],
                ["open", "true", "flags.0?true"],
                ["blocks", ["PageBlock"], "Vector<PageBlock>"],
                ["title", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageBlockRelatedArticles",
        [
            0x16115A96,
            [
                ["title", "RichText", "RichText"],
                ["articles", ["PageRelatedArticle"], "Vector<PageRelatedArticle>"],
            ],
        ],
    ],
    [
        "pageBlockMap",
        [
            0xA44F3EF6,
            [
                ["geo", "GeoPoint", "GeoPoint"],
                ["zoom", "number", "int"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["caption", "PageCaption", "PageCaption"],
            ],
        ],
    ],
    [
        "phoneCallDiscardReasonMissed",
        [
            0x85E42301,
            [],
        ],
    ],
    [
        "phoneCallDiscardReasonDisconnect",
        [
            0xE095C1A0,
            [],
        ],
    ],
    [
        "phoneCallDiscardReasonHangup",
        [
            0x57ADC690,
            [],
        ],
    ],
    [
        "phoneCallDiscardReasonBusy",
        [
            0xFAF7E8C9,
            [],
        ],
    ],
    [
        "dataJSON",
        [
            0x7D748D04,
            [
                ["data", "string", "string"],
            ],
        ],
    ],
    [
        "labeledPrice",
        [
            0xCB296BF8,
            [
                ["label", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "invoice",
        [
            0x5DB95A15,
            [
                ["flags", flags, "#"],
                ["test", "true", "flags.0?true"],
                ["name_requested", "true", "flags.1?true"],
                ["phone_requested", "true", "flags.2?true"],
                ["email_requested", "true", "flags.3?true"],
                ["shipping_address_requested", "true", "flags.4?true"],
                ["flexible", "true", "flags.5?true"],
                ["phone_to_provider", "true", "flags.6?true"],
                ["email_to_provider", "true", "flags.7?true"],
                ["recurring", "true", "flags.9?true"],
                ["currency", "string", "string"],
                ["prices", ["LabeledPrice"], "Vector<LabeledPrice>"],
                ["max_tip_amount", "bigint", "flags.8?long"],
                ["suggested_tip_amounts", ["bigint"], "flags.8?Vector<long>"],
                ["terms_url", "string", "flags.10?string"],
            ],
        ],
    ],
    [
        "paymentCharge",
        [
            0xEA02C27E,
            [
                ["id", "string", "string"],
                ["provider_charge_id", "string", "string"],
            ],
        ],
    ],
    [
        "postAddress",
        [
            0x1E8CAAEB,
            [
                ["street_line1", "string", "string"],
                ["street_line2", "string", "string"],
                ["city", "string", "string"],
                ["state", "string", "string"],
                ["country_iso2", "string", "string"],
                ["post_code", "string", "string"],
            ],
        ],
    ],
    [
        "paymentRequestedInfo",
        [
            0x909C3F94,
            [
                ["flags", flags, "#"],
                ["name", "string", "flags.0?string"],
                ["phone", "string", "flags.1?string"],
                ["email", "string", "flags.2?string"],
                ["shipping_address", "PostAddress", "flags.3?PostAddress"],
            ],
        ],
    ],
    [
        "paymentSavedCredentialsCard",
        [
            0xCDC27A1F,
            [
                ["id", "string", "string"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "webDocument",
        [
            0x1C570ED1,
            [
                ["url", "string", "string"],
                ["access_hash", "bigint", "long"],
                ["size", "number", "int"],
                ["mime_type", "string", "string"],
                ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
            ],
        ],
    ],
    [
        "webDocumentNoProxy",
        [
            0xF9C8BCC6,
            [
                ["url", "string", "string"],
                ["size", "number", "int"],
                ["mime_type", "string", "string"],
                ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
            ],
        ],
    ],
    [
        "inputWebDocument",
        [
            0x9BED434D,
            [
                ["url", "string", "string"],
                ["size", "number", "int"],
                ["mime_type", "string", "string"],
                ["attributes", ["DocumentAttribute"], "Vector<DocumentAttribute>"],
            ],
        ],
    ],
    [
        "inputWebFileLocation",
        [
            0xC239D686,
            [
                ["url", "string", "string"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputWebFileGeoPointLocation",
        [
            0x9F2221C9,
            [
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["access_hash", "bigint", "long"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["zoom", "number", "int"],
                ["scale", "number", "int"],
            ],
        ],
    ],
    [
        "inputWebFileAudioAlbumThumbLocation",
        [
            0xF46FE924,
            [
                ["flags", flags, "#"],
                ["small", "true", "flags.2?true"],
                ["document", "InputDocument", "flags.0?InputDocument"],
                ["title", "string", "flags.1?string"],
                ["performer", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "upload.webFile",
        [
            0x21E753BC,
            [
                ["size", "number", "int"],
                ["mime_type", "string", "string"],
                ["file_type", "storage_FileType", "storage.FileType"],
                ["mtime", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "payments.paymentForm",
        [
            0xA0058751,
            [
                ["flags", flags, "#"],
                ["can_save_credentials", "true", "flags.2?true"],
                ["password_missing", "true", "flags.3?true"],
                ["form_id", "bigint", "long"],
                ["bot_id", "bigint", "long"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.5?WebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["provider_id", "bigint", "long"],
                ["url", "string", "string"],
                ["native_provider", "string", "flags.4?string"],
                ["native_params", "DataJSON", "flags.4?DataJSON"],
                ["additional_methods", ["PaymentFormMethod"], "flags.6?Vector<PaymentFormMethod>"],
                ["saved_info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
                ["saved_credentials", ["PaymentSavedCredentials"], "flags.1?Vector<PaymentSavedCredentials>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "payments.paymentFormStars",
        [
            0x7BF6B15C,
            [
                ["flags", flags, "#"],
                ["form_id", "bigint", "long"],
                ["bot_id", "bigint", "long"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.5?WebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "payments.validatedRequestedInfo",
        [
            0xD1451883,
            [
                ["flags", flags, "#"],
                ["id", "string", "flags.0?string"],
                ["shipping_options", ["ShippingOption"], "flags.1?Vector<ShippingOption>"],
            ],
        ],
    ],
    [
        "payments.paymentResult",
        [
            0x4E5F810D,
            [
                ["updates", "Updates", "Updates"],
            ],
        ],
    ],
    [
        "payments.paymentVerificationNeeded",
        [
            0xD8411139,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "payments.paymentReceipt",
        [
            0x70C4FE03,
            [
                ["flags", flags, "#"],
                ["date", "number", "int"],
                ["bot_id", "bigint", "long"],
                ["provider_id", "bigint", "long"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.2?WebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
                ["shipping", "ShippingOption", "flags.1?ShippingOption"],
                ["tip_amount", "bigint", "flags.3?long"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["credentials_title", "string", "string"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "payments.paymentReceiptStars",
        [
            0xDABBF83A,
            [
                ["flags", flags, "#"],
                ["date", "number", "int"],
                ["bot_id", "bigint", "long"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "WebDocument", "flags.2?WebDocument"],
                ["invoice", "Invoice", "Invoice"],
                ["currency", "string", "string"],
                ["total_amount", "bigint", "long"],
                ["transaction_id", "string", "string"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "payments.savedInfo",
        [
            0xFB8FE43C,
            [
                ["flags", flags, "#"],
                ["has_saved_credentials", "true", "flags.1?true"],
                ["saved_info", "PaymentRequestedInfo", "flags.0?PaymentRequestedInfo"],
            ],
        ],
    ],
    [
        "inputPaymentCredentialsSaved",
        [
            0xC10EB2CF,
            [
                ["id", "string", "string"],
                ["tmp_password", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputPaymentCredentials",
        [
            0x3417D728,
            [
                ["flags", flags, "#"],
                ["save", "true", "flags.0?true"],
                ["data", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "inputPaymentCredentialsApplePay",
        [
            0x0AA1C39F,
            [
                ["payment_data", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "inputPaymentCredentialsGooglePay",
        [
            0x8AC32801,
            [
                ["payment_token", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "account.tmpPassword",
        [
            0xDB64FD34,
            [
                ["tmp_password", Uint8Array, "bytes"],
                ["valid_until", "number", "int"],
            ],
        ],
    ],
    [
        "shippingOption",
        [
            0xB6213CDF,
            [
                ["id", "string", "string"],
                ["title", "string", "string"],
                ["prices", ["LabeledPrice"], "Vector<LabeledPrice>"],
            ],
        ],
    ],
    [
        "inputStickerSetItem",
        [
            0x32DA9E9C,
            [
                ["flags", flags, "#"],
                ["document", "InputDocument", "InputDocument"],
                ["emoji", "string", "string"],
                ["mask_coords", "MaskCoords", "flags.0?MaskCoords"],
                ["keywords", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "inputPhoneCall",
        [
            0x1E36FDED,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "phoneCallEmpty",
        [
            0x5366C915,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "phoneCallWaiting",
        [
            0xC5226F17,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.6?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
                ["receive_date", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "phoneCallRequested",
        [
            0x14B0ED0C,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.6?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["g_a_hash", Uint8Array, "bytes"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
            ],
        ],
    ],
    [
        "phoneCallAccepted",
        [
            0x3660C311,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.6?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["g_b", Uint8Array, "bytes"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
            ],
        ],
    ],
    [
        "phoneCall",
        [
            0x30535AF5,
            [
                ["flags", flags, "#"],
                ["p2p_allowed", "true", "flags.5?true"],
                ["video", "true", "flags.6?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["date", "number", "int"],
                ["admin_id", "bigint", "long"],
                ["participant_id", "bigint", "long"],
                ["g_a_or_b", Uint8Array, "bytes"],
                ["key_fingerprint", "bigint", "long"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
                ["connections", ["PhoneConnection"], "Vector<PhoneConnection>"],
                ["start_date", "number", "int"],
                ["custom_parameters", "DataJSON", "flags.7?DataJSON"],
            ],
        ],
    ],
    [
        "phoneCallDiscarded",
        [
            0x50CA4DE1,
            [
                ["flags", flags, "#"],
                ["need_rating", "true", "flags.2?true"],
                ["need_debug", "true", "flags.3?true"],
                ["video", "true", "flags.6?true"],
                ["id", "bigint", "long"],
                ["reason", "PhoneCallDiscardReason", "flags.0?PhoneCallDiscardReason"],
                ["duration", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "phoneConnection",
        [
            0x9CC123C7,
            [
                ["flags", flags, "#"],
                ["tcp", "true", "flags.0?true"],
                ["id", "bigint", "long"],
                ["ip", "string", "string"],
                ["ipv6", "string", "string"],
                ["port", "number", "int"],
                ["peer_tag", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "phoneConnectionWebrtc",
        [
            0x635FE375,
            [
                ["flags", flags, "#"],
                ["turn", "true", "flags.0?true"],
                ["stun", "true", "flags.1?true"],
                ["id", "bigint", "long"],
                ["ip", "string", "string"],
                ["ipv6", "string", "string"],
                ["port", "number", "int"],
                ["username", "string", "string"],
                ["password", "string", "string"],
            ],
        ],
    ],
    [
        "phoneCallProtocol",
        [
            0xFC878FC8,
            [
                ["flags", flags, "#"],
                ["udp_p2p", "true", "flags.0?true"],
                ["udp_reflector", "true", "flags.1?true"],
                ["min_layer", "number", "int"],
                ["max_layer", "number", "int"],
                ["library_versions", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "phone.phoneCall",
        [
            0xEC82E140,
            [
                ["phone_call", "PhoneCall", "PhoneCall"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "upload.cdnFileReuploadNeeded",
        [
            0xEEA8E46E,
            [
                ["request_token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "upload.cdnFile",
        [
            0xA99FCA4F,
            [
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "cdnPublicKey",
        [
            0xC982EABA,
            [
                ["dc_id", "number", "int"],
                ["public_key", "string", "string"],
            ],
        ],
    ],
    [
        "cdnConfig",
        [
            0x5725E40A,
            [
                ["public_keys", ["CdnPublicKey"], "Vector<CdnPublicKey>"],
            ],
        ],
    ],
    [
        "langPackString",
        [
            0xCAD181F6,
            [
                ["key", "string", "string"],
                ["value", "string", "string"],
            ],
        ],
    ],
    [
        "langPackStringPluralized",
        [
            0x6C47AC9F,
            [
                ["flags", flags, "#"],
                ["key", "string", "string"],
                ["zero_value", "string", "flags.0?string"],
                ["one_value", "string", "flags.1?string"],
                ["two_value", "string", "flags.2?string"],
                ["few_value", "string", "flags.3?string"],
                ["many_value", "string", "flags.4?string"],
                ["other_value", "string", "string"],
            ],
        ],
    ],
    [
        "langPackStringDeleted",
        [
            0x2979EEB2,
            [
                ["key", "string", "string"],
            ],
        ],
    ],
    [
        "langPackDifference",
        [
            0xF385C1F6,
            [
                ["lang_code", "string", "string"],
                ["from_version", "number", "int"],
                ["version", "number", "int"],
                ["strings", ["LangPackString"], "Vector<LangPackString>"],
            ],
        ],
    ],
    [
        "langPackLanguage",
        [
            0xEECA5CE3,
            [
                ["flags", flags, "#"],
                ["official", "true", "flags.0?true"],
                ["rtl", "true", "flags.2?true"],
                ["beta", "true", "flags.3?true"],
                ["name", "string", "string"],
                ["native_name", "string", "string"],
                ["lang_code", "string", "string"],
                ["base_lang_code", "string", "flags.1?string"],
                ["plural_code", "string", "string"],
                ["strings_count", "number", "int"],
                ["translated_count", "number", "int"],
                ["translations_url", "string", "string"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeTitle",
        [
            0xE6DFB825,
            [
                ["prev_value", "string", "string"],
                ["new_value", "string", "string"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeAbout",
        [
            0x55188A2E,
            [
                ["prev_value", "string", "string"],
                ["new_value", "string", "string"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeUsername",
        [
            0x6A4AFC38,
            [
                ["prev_value", "string", "string"],
                ["new_value", "string", "string"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangePhoto",
        [
            0x434BD2AF,
            [
                ["prev_photo", "Photo", "Photo"],
                ["new_photo", "Photo", "Photo"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleInvites",
        [
            0x1B7907AE,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleSignatures",
        [
            0x26AE0971,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionUpdatePinned",
        [
            0xE9E82C18,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionEditMessage",
        [
            0x709B2405,
            [
                ["prev_message", "Message", "Message"],
                ["new_message", "Message", "Message"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionDeleteMessage",
        [
            0x42E047BB,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantJoin",
        [
            0x183040D3,
            [],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantLeave",
        [
            0xF89777F2,
            [],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantInvite",
        [
            0xE31C34D8,
            [
                ["participant", "ChannelParticipant", "ChannelParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantToggleBan",
        [
            0xE6D83D7E,
            [
                ["prev_participant", "ChannelParticipant", "ChannelParticipant"],
                ["new_participant", "ChannelParticipant", "ChannelParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantToggleAdmin",
        [
            0xD5676710,
            [
                ["prev_participant", "ChannelParticipant", "ChannelParticipant"],
                ["new_participant", "ChannelParticipant", "ChannelParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeStickerSet",
        [
            0xB1C3CAA7,
            [
                ["prev_stickerset", "InputStickerSet", "InputStickerSet"],
                ["new_stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionTogglePreHistoryHidden",
        [
            0x5F5C95F1,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionDefaultBannedRights",
        [
            0x2DF5FC0A,
            [
                ["prev_banned_rights", "ChatBannedRights", "ChatBannedRights"],
                ["new_banned_rights", "ChatBannedRights", "ChatBannedRights"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionStopPoll",
        [
            0x8F079643,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeLinkedChat",
        [
            0x050C7AC8,
            [
                ["prev_value", "bigint", "long"],
                ["new_value", "bigint", "long"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeLocation",
        [
            0x0E6B76AE,
            [
                ["prev_value", "ChannelLocation", "ChannelLocation"],
                ["new_value", "ChannelLocation", "ChannelLocation"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleSlowMode",
        [
            0x53909779,
            [
                ["prev_value", "number", "int"],
                ["new_value", "number", "int"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionStartGroupCall",
        [
            0x23209745,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionDiscardGroupCall",
        [
            0xDB9F9140,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantMute",
        [
            0xF92424D2,
            [
                ["participant", "GroupCallParticipant", "GroupCallParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantUnmute",
        [
            0xE64429C0,
            [
                ["participant", "GroupCallParticipant", "GroupCallParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleGroupCallSetting",
        [
            0x56D6A247,
            [
                ["join_muted", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantJoinByInvite",
        [
            0xFE9FC158,
            [
                ["flags", flags, "#"],
                ["via_chatlist", "true", "flags.0?true"],
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionExportedInviteDelete",
        [
            0x5A50FCA4,
            [
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionExportedInviteRevoke",
        [
            0x410A134E,
            [
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionExportedInviteEdit",
        [
            0xE90EBB59,
            [
                ["prev_invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["new_invite", "ExportedChatInvite", "ExportedChatInvite"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantVolume",
        [
            0x3E7F6847,
            [
                ["participant", "GroupCallParticipant", "GroupCallParticipant"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeHistoryTTL",
        [
            0x6E941A38,
            [
                ["prev_value", "number", "int"],
                ["new_value", "number", "int"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionParticipantJoinByRequest",
        [
            0xAFB6144A,
            [
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["approved_by", "bigint", "long"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleNoForwards",
        [
            0xCB2AC766,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionSendMessage",
        [
            0x278F2868,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeAvailableReactions",
        [
            0xBE4E0EF8,
            [
                ["prev_value", "ChatReactions", "ChatReactions"],
                ["new_value", "ChatReactions", "ChatReactions"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeUsernames",
        [
            0xF04FB3A9,
            [
                ["prev_value", ["string"], "Vector<string>"],
                ["new_value", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleForum",
        [
            0x02CC6383,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionCreateTopic",
        [
            0x58707D28,
            [
                ["topic", "ForumTopic", "ForumTopic"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionEditTopic",
        [
            0xF06FE208,
            [
                ["prev_topic", "ForumTopic", "ForumTopic"],
                ["new_topic", "ForumTopic", "ForumTopic"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionDeleteTopic",
        [
            0xAE168909,
            [
                ["topic", "ForumTopic", "ForumTopic"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionPinTopic",
        [
            0x5D8D353B,
            [
                ["flags", flags, "#"],
                ["prev_topic", "ForumTopic", "flags.0?ForumTopic"],
                ["new_topic", "ForumTopic", "flags.1?ForumTopic"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionToggleAntiSpam",
        [
            0x64F36DFC,
            [
                ["new_value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangePeerColor",
        [
            0x5796E780,
            [
                ["prev_value", "PeerColor", "PeerColor"],
                ["new_value", "PeerColor", "PeerColor"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeProfilePeerColor",
        [
            0x5E477B25,
            [
                ["prev_value", "PeerColor", "PeerColor"],
                ["new_value", "PeerColor", "PeerColor"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeWallpaper",
        [
            0x31BB5D52,
            [
                ["prev_value", "WallPaper", "WallPaper"],
                ["new_value", "WallPaper", "WallPaper"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeEmojiStatus",
        [
            0x3EA9FEB1,
            [
                ["prev_value", "EmojiStatus", "EmojiStatus"],
                ["new_value", "EmojiStatus", "EmojiStatus"],
            ],
        ],
    ],
    [
        "channelAdminLogEventActionChangeEmojiStickerSet",
        [
            0x46D840AB,
            [
                ["prev_stickerset", "InputStickerSet", "InputStickerSet"],
                ["new_stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "channelAdminLogEvent",
        [
            0x1FAD68CD,
            [
                ["id", "bigint", "long"],
                ["date", "number", "int"],
                ["user_id", "bigint", "long"],
                ["action", "ChannelAdminLogEventAction", "ChannelAdminLogEventAction"],
            ],
        ],
    ],
    [
        "channels.adminLogResults",
        [
            0xED8AF74D,
            [
                ["events", ["ChannelAdminLogEvent"], "Vector<ChannelAdminLogEvent>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "channelAdminLogEventsFilter",
        [
            0xEA107AE4,
            [
                ["flags", flags, "#"],
                ["join", "true", "flags.0?true"],
                ["leave", "true", "flags.1?true"],
                ["invite", "true", "flags.2?true"],
                ["ban", "true", "flags.3?true"],
                ["unban", "true", "flags.4?true"],
                ["kick", "true", "flags.5?true"],
                ["unkick", "true", "flags.6?true"],
                ["promote", "true", "flags.7?true"],
                ["demote", "true", "flags.8?true"],
                ["info", "true", "flags.9?true"],
                ["settings", "true", "flags.10?true"],
                ["pinned", "true", "flags.11?true"],
                ["edit", "true", "flags.12?true"],
                ["delete", "true", "flags.13?true"],
                ["group_call", "true", "flags.14?true"],
                ["invites", "true", "flags.15?true"],
                ["send", "true", "flags.16?true"],
                ["forums", "true", "flags.17?true"],
            ],
        ],
    ],
    [
        "popularContact",
        [
            0x5CE14175,
            [
                ["client_id", "bigint", "long"],
                ["importers", "number", "int"],
            ],
        ],
    ],
    [
        "messages.favedStickersNotModified",
        [
            0x9E8FA6D3,
            [],
        ],
    ],
    [
        "messages.favedStickers",
        [
            0x2CB51097,
            [
                ["hash", "bigint", "long"],
                ["packs", ["StickerPack"], "Vector<StickerPack>"],
                ["stickers", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "recentMeUrlUnknown",
        [
            0x46E1D13D,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "recentMeUrlUser",
        [
            0xB92C09E2,
            [
                ["url", "string", "string"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "recentMeUrlChat",
        [
            0xB2DA71D2,
            [
                ["url", "string", "string"],
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "recentMeUrlChatInvite",
        [
            0xEB49081D,
            [
                ["url", "string", "string"],
                ["chat_invite", "ChatInvite", "ChatInvite"],
            ],
        ],
    ],
    [
        "recentMeUrlStickerSet",
        [
            0xBC0A57DC,
            [
                ["url", "string", "string"],
                ["set", "StickerSetCovered", "StickerSetCovered"],
            ],
        ],
    ],
    [
        "help.recentMeUrls",
        [
            0x0E0310D7,
            [
                ["urls", ["RecentMeUrl"], "Vector<RecentMeUrl>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "inputSingleMedia",
        [
            0x1CC6E91F,
            [
                ["flags", flags, "#"],
                ["media", "InputMedia", "InputMedia"],
                ["random_id", "bigint", "long"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "webAuthorization",
        [
            0xA6F8F452,
            [
                ["hash", "bigint", "long"],
                ["bot_id", "bigint", "long"],
                ["domain", "string", "string"],
                ["browser", "string", "string"],
                ["platform", "string", "string"],
                ["date_created", "number", "int"],
                ["date_active", "number", "int"],
                ["ip", "string", "string"],
                ["region", "string", "string"],
            ],
        ],
    ],
    [
        "account.webAuthorizations",
        [
            0xED56C9FC,
            [
                ["authorizations", ["WebAuthorization"], "Vector<WebAuthorization>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "inputMessageID",
        [
            0xA676A322,
            [
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "inputMessageReplyTo",
        [
            0xBAD88395,
            [
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "inputMessagePinned",
        [
            0x86872538,
            [],
        ],
    ],
    [
        "inputMessageCallbackQuery",
        [
            0xACFA1A7E,
            [
                ["id", "number", "int"],
                ["query_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputDialogPeer",
        [
            0xFCAAFEB7,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "inputDialogPeerFolder",
        [
            0x64600527,
            [
                ["folder_id", "number", "int"],
            ],
        ],
    ],
    [
        "dialogPeer",
        [
            0xE56DBF05,
            [
                ["peer", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "dialogPeerFolder",
        [
            0x514519E2,
            [
                ["folder_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.foundStickerSetsNotModified",
        [
            0x0D54B65D,
            [],
        ],
    ],
    [
        "messages.foundStickerSets",
        [
            0x8AF09DD2,
            [
                ["hash", "bigint", "long"],
                ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
            ],
        ],
    ],
    [
        "fileHash",
        [
            0xF39B035C,
            [
                ["offset", "bigint", "long"],
                ["limit", "number", "int"],
                ["hash", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputClientProxy",
        [
            0x75588B3F,
            [
                ["address", "string", "string"],
                ["port", "number", "int"],
            ],
        ],
    ],
    [
        "help.termsOfServiceUpdateEmpty",
        [
            0xE3309F7F,
            [
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "help.termsOfServiceUpdate",
        [
            0x28ECF961,
            [
                ["expires", "number", "int"],
                ["terms_of_service", "help_TermsOfService", "help.TermsOfService"],
            ],
        ],
    ],
    [
        "inputSecureFileUploaded",
        [
            0x3334B0F0,
            [
                ["id", "bigint", "long"],
                ["parts", "number", "int"],
                ["md5_checksum", "string", "string"],
                ["file_hash", Uint8Array, "bytes"],
                ["secret", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputSecureFile",
        [
            0x5367E5BE,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "secureFileEmpty",
        [
            0x64199744,
            [],
        ],
    ],
    [
        "secureFile",
        [
            0x7D09C27E,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["size", "bigint", "long"],
                ["dc_id", "number", "int"],
                ["date", "number", "int"],
                ["file_hash", Uint8Array, "bytes"],
                ["secret", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "secureData",
        [
            0x8AEABEC3,
            [
                ["data", Uint8Array, "bytes"],
                ["data_hash", Uint8Array, "bytes"],
                ["secret", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "securePlainPhone",
        [
            0x7D6099DD,
            [
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "securePlainEmail",
        [
            0x21EC5A5F,
            [
                ["email", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueTypePersonalDetails",
        [
            0x9D2A81E3,
            [],
        ],
    ],
    [
        "secureValueTypePassport",
        [
            0x3DAC6A00,
            [],
        ],
    ],
    [
        "secureValueTypeDriverLicense",
        [
            0x06E425C4,
            [],
        ],
    ],
    [
        "secureValueTypeIdentityCard",
        [
            0xA0D0744B,
            [],
        ],
    ],
    [
        "secureValueTypeInternalPassport",
        [
            0x99A48F23,
            [],
        ],
    ],
    [
        "secureValueTypeAddress",
        [
            0xCBE31E26,
            [],
        ],
    ],
    [
        "secureValueTypeUtilityBill",
        [
            0xFC36954E,
            [],
        ],
    ],
    [
        "secureValueTypeBankStatement",
        [
            0x89137C0D,
            [],
        ],
    ],
    [
        "secureValueTypeRentalAgreement",
        [
            0x8B883488,
            [],
        ],
    ],
    [
        "secureValueTypePassportRegistration",
        [
            0x99E3806A,
            [],
        ],
    ],
    [
        "secureValueTypeTemporaryRegistration",
        [
            0xEA02EC33,
            [],
        ],
    ],
    [
        "secureValueTypePhone",
        [
            0xB320AADB,
            [],
        ],
    ],
    [
        "secureValueTypeEmail",
        [
            0x8E3CA7EE,
            [],
        ],
    ],
    [
        "secureValue",
        [
            0x187FA0CA,
            [
                ["flags", flags, "#"],
                ["type", "SecureValueType", "SecureValueType"],
                ["data", "SecureData", "flags.0?SecureData"],
                ["front_side", "SecureFile", "flags.1?SecureFile"],
                ["reverse_side", "SecureFile", "flags.2?SecureFile"],
                ["selfie", "SecureFile", "flags.3?SecureFile"],
                ["translation", ["SecureFile"], "flags.6?Vector<SecureFile>"],
                ["files", ["SecureFile"], "flags.4?Vector<SecureFile>"],
                ["plain_data", "SecurePlainData", "flags.5?SecurePlainData"],
                ["hash", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "inputSecureValue",
        [
            0xDB21D0A7,
            [
                ["flags", flags, "#"],
                ["type", "SecureValueType", "SecureValueType"],
                ["data", "SecureData", "flags.0?SecureData"],
                ["front_side", "InputSecureFile", "flags.1?InputSecureFile"],
                ["reverse_side", "InputSecureFile", "flags.2?InputSecureFile"],
                ["selfie", "InputSecureFile", "flags.3?InputSecureFile"],
                ["translation", ["InputSecureFile"], "flags.6?Vector<InputSecureFile>"],
                ["files", ["InputSecureFile"], "flags.4?Vector<InputSecureFile>"],
                ["plain_data", "SecurePlainData", "flags.5?SecurePlainData"],
            ],
        ],
    ],
    [
        "secureValueHash",
        [
            0xED1ECDB0,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["hash", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "secureValueErrorData",
        [
            0xE8A40BD9,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["data_hash", Uint8Array, "bytes"],
                ["field", "string", "string"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorFrontSide",
        [
            0x00BE3DFA,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorReverseSide",
        [
            0x868A2AA5,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorSelfie",
        [
            0xE537CED6,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorFile",
        [
            0x7A700873,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorFiles",
        [
            0x666220E9,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", [Uint8Array], "Vector<bytes>"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueError",
        [
            0x869D758F,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorTranslationFile",
        [
            0xA1144770,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", Uint8Array, "bytes"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureValueErrorTranslationFiles",
        [
            0x34636DD8,
            [
                ["type", "SecureValueType", "SecureValueType"],
                ["file_hash", [Uint8Array], "Vector<bytes>"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "secureCredentialsEncrypted",
        [
            0x33F0EA47,
            [
                ["data", Uint8Array, "bytes"],
                ["hash", Uint8Array, "bytes"],
                ["secret", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "account.authorizationForm",
        [
            0xAD2E1CD8,
            [
                ["flags", flags, "#"],
                ["required_types", ["SecureRequiredType"], "Vector<SecureRequiredType>"],
                ["values", ["SecureValue"], "Vector<SecureValue>"],
                ["errors", ["SecureValueError"], "Vector<SecureValueError>"],
                ["users", ["User"], "Vector<User>"],
                ["privacy_policy_url", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "account.sentEmailCode",
        [
            0x811F854F,
            [
                ["email_pattern", "string", "string"],
                ["length", "number", "int"],
            ],
        ],
    ],
    [
        "help.deepLinkInfoEmpty",
        [
            0x66AFA166,
            [],
        ],
    ],
    [
        "help.deepLinkInfo",
        [
            0x6A4EE832,
            [
                ["flags", flags, "#"],
                ["update_app", "true", "flags.0?true"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "savedPhoneContact",
        [
            0x1142BD56,
            [
                ["phone", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "account.takeout",
        [
            0x4DBA4501,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "passwordKdfAlgoUnknown",
        [
            0xD45AB096,
            [],
        ],
    ],
    [
        "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow",
        [
            0x3A912D4A,
            [
                ["salt1", Uint8Array, "bytes"],
                ["salt2", Uint8Array, "bytes"],
                ["g", "number", "int"],
                ["p", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "securePasswordKdfAlgoUnknown",
        [
            0x004A8537,
            [],
        ],
    ],
    [
        "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000",
        [
            0xBBF2DDA0,
            [
                ["salt", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "securePasswordKdfAlgoSHA512",
        [
            0x86471D92,
            [
                ["salt", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "secureSecretSettings",
        [
            0x1527BCAC,
            [
                ["secure_algo", "SecurePasswordKdfAlgo", "SecurePasswordKdfAlgo"],
                ["secure_secret", Uint8Array, "bytes"],
                ["secure_secret_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputCheckPasswordEmpty",
        [
            0x9880F658,
            [],
        ],
    ],
    [
        "inputCheckPasswordSRP",
        [
            0xD27FF082,
            [
                ["srp_id", "bigint", "long"],
                ["A", Uint8Array, "bytes"],
                ["M1", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "secureRequiredType",
        [
            0x829D99DA,
            [
                ["flags", flags, "#"],
                ["native_names", "true", "flags.0?true"],
                ["selfie_required", "true", "flags.1?true"],
                ["translation_required", "true", "flags.2?true"],
                ["type", "SecureValueType", "SecureValueType"],
            ],
        ],
    ],
    [
        "secureRequiredTypeOneOf",
        [
            0x027477B4,
            [
                ["types", ["SecureRequiredType"], "Vector<SecureRequiredType>"],
            ],
        ],
    ],
    [
        "help.passportConfigNotModified",
        [
            0xBFB9F457,
            [],
        ],
    ],
    [
        "help.passportConfig",
        [
            0xA098D6AF,
            [
                ["hash", "number", "int"],
                ["countries_langs", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "inputAppEvent",
        [
            0x1D1B1245,
            [
                ["time", "number", "double"],
                ["type", "string", "string"],
                ["peer", "bigint", "long"],
                ["data", "JSONValue", "JSONValue"],
            ],
        ],
    ],
    [
        "jsonObjectValue",
        [
            0xC0DE1BD9,
            [
                ["key", "string", "string"],
                ["value", "JSONValue", "JSONValue"],
            ],
        ],
    ],
    [
        "jsonNull",
        [
            0x3F6D7B68,
            [],
        ],
    ],
    [
        "jsonBool",
        [
            0xC7345E6A,
            [
                ["value", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "jsonNumber",
        [
            0x2BE0DFA4,
            [
                ["value", "number", "double"],
            ],
        ],
    ],
    [
        "jsonString",
        [
            0xB71E767A,
            [
                ["value", "string", "string"],
            ],
        ],
    ],
    [
        "jsonArray",
        [
            0xF7444763,
            [
                ["value", ["JSONValue"], "Vector<JSONValue>"],
            ],
        ],
    ],
    [
        "jsonObject",
        [
            0x99C1D49D,
            [
                ["value", ["JSONObjectValue"], "Vector<JSONObjectValue>"],
            ],
        ],
    ],
    [
        "pageTableCell",
        [
            0x34566B6A,
            [
                ["flags", flags, "#"],
                ["header", "true", "flags.0?true"],
                ["align_center", "true", "flags.3?true"],
                ["align_right", "true", "flags.4?true"],
                ["valign_middle", "true", "flags.5?true"],
                ["valign_bottom", "true", "flags.6?true"],
                ["text", "RichText", "flags.7?RichText"],
                ["colspan", "number", "flags.1?int"],
                ["rowspan", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "pageTableRow",
        [
            0xE0C0C5E5,
            [
                ["cells", ["PageTableCell"], "Vector<PageTableCell>"],
            ],
        ],
    ],
    [
        "pageCaption",
        [
            0x6F747657,
            [
                ["text", "RichText", "RichText"],
                ["credit", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageListItemText",
        [
            0xB92FB6CD,
            [
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageListItemBlocks",
        [
            0x25E073FC,
            [
                ["blocks", ["PageBlock"], "Vector<PageBlock>"],
            ],
        ],
    ],
    [
        "pageListOrderedItemText",
        [
            0x5E068047,
            [
                ["num", "string", "string"],
                ["text", "RichText", "RichText"],
            ],
        ],
    ],
    [
        "pageListOrderedItemBlocks",
        [
            0x98DD8936,
            [
                ["num", "string", "string"],
                ["blocks", ["PageBlock"], "Vector<PageBlock>"],
            ],
        ],
    ],
    [
        "pageRelatedArticle",
        [
            0xB390DC08,
            [
                ["flags", flags, "#"],
                ["url", "string", "string"],
                ["webpage_id", "bigint", "long"],
                ["title", "string", "flags.0?string"],
                ["description", "string", "flags.1?string"],
                ["photo_id", "bigint", "flags.2?long"],
                ["author", "string", "flags.3?string"],
                ["published_date", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "page",
        [
            0x98657F0D,
            [
                ["flags", flags, "#"],
                ["part", "true", "flags.0?true"],
                ["rtl", "true", "flags.1?true"],
                ["v2", "true", "flags.2?true"],
                ["url", "string", "string"],
                ["blocks", ["PageBlock"], "Vector<PageBlock>"],
                ["photos", ["Photo"], "Vector<Photo>"],
                ["documents", ["Document"], "Vector<Document>"],
                ["views", "number", "flags.3?int"],
            ],
        ],
    ],
    [
        "help.supportName",
        [
            0x8C05F1C9,
            [
                ["name", "string", "string"],
            ],
        ],
    ],
    [
        "help.userInfoEmpty",
        [
            0xF3AE2EED,
            [],
        ],
    ],
    [
        "help.userInfo",
        [
            0x01EB3758,
            [
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
                ["author", "string", "string"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "pollAnswer",
        [
            0xFF16E2CA,
            [
                ["text", "TextWithEntities", "TextWithEntities"],
                ["option", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "poll",
        [
            0x58747131,
            [
                ["id", "bigint", "long"],
                ["flags", flags, "#"],
                ["closed", "true", "flags.0?true"],
                ["public_voters", "true", "flags.1?true"],
                ["multiple_choice", "true", "flags.2?true"],
                ["quiz", "true", "flags.3?true"],
                ["question", "TextWithEntities", "TextWithEntities"],
                ["answers", ["PollAnswer"], "Vector<PollAnswer>"],
                ["close_period", "number", "flags.4?int"],
                ["close_date", "number", "flags.5?int"],
            ],
        ],
    ],
    [
        "pollAnswerVoters",
        [
            0x3B6DDAD2,
            [
                ["flags", flags, "#"],
                ["chosen", "true", "flags.0?true"],
                ["correct", "true", "flags.1?true"],
                ["option", Uint8Array, "bytes"],
                ["voters", "number", "int"],
            ],
        ],
    ],
    [
        "pollResults",
        [
            0x7ADF2420,
            [
                ["flags", flags, "#"],
                ["min", "true", "flags.0?true"],
                ["results", ["PollAnswerVoters"], "flags.1?Vector<PollAnswerVoters>"],
                ["total_voters", "number", "flags.2?int"],
                ["recent_voters", ["Peer"], "flags.3?Vector<Peer>"],
                ["solution", "string", "flags.4?string"],
                ["solution_entities", ["MessageEntity"], "flags.4?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "chatOnlines",
        [
            0xF041E250,
            [
                ["onlines", "number", "int"],
            ],
        ],
    ],
    [
        "statsURL",
        [
            0x47A971E0,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "chatAdminRights",
        [
            0x5FB224D5,
            [
                ["flags", flags, "#"],
                ["change_info", "true", "flags.0?true"],
                ["post_messages", "true", "flags.1?true"],
                ["edit_messages", "true", "flags.2?true"],
                ["delete_messages", "true", "flags.3?true"],
                ["ban_users", "true", "flags.4?true"],
                ["invite_users", "true", "flags.5?true"],
                ["pin_messages", "true", "flags.7?true"],
                ["add_admins", "true", "flags.9?true"],
                ["anonymous", "true", "flags.10?true"],
                ["manage_call", "true", "flags.11?true"],
                ["other", "true", "flags.12?true"],
                ["manage_topics", "true", "flags.13?true"],
                ["post_stories", "true", "flags.14?true"],
                ["edit_stories", "true", "flags.15?true"],
                ["delete_stories", "true", "flags.16?true"],
            ],
        ],
    ],
    [
        "chatBannedRights",
        [
            0x9F120418,
            [
                ["flags", flags, "#"],
                ["view_messages", "true", "flags.0?true"],
                ["send_messages", "true", "flags.1?true"],
                ["send_media", "true", "flags.2?true"],
                ["send_stickers", "true", "flags.3?true"],
                ["send_gifs", "true", "flags.4?true"],
                ["send_games", "true", "flags.5?true"],
                ["send_inline", "true", "flags.6?true"],
                ["embed_links", "true", "flags.7?true"],
                ["send_polls", "true", "flags.8?true"],
                ["change_info", "true", "flags.10?true"],
                ["invite_users", "true", "flags.15?true"],
                ["pin_messages", "true", "flags.17?true"],
                ["manage_topics", "true", "flags.18?true"],
                ["send_photos", "true", "flags.19?true"],
                ["send_videos", "true", "flags.20?true"],
                ["send_roundvideos", "true", "flags.21?true"],
                ["send_audios", "true", "flags.22?true"],
                ["send_voices", "true", "flags.23?true"],
                ["send_docs", "true", "flags.24?true"],
                ["send_plain", "true", "flags.25?true"],
                ["until_date", "number", "int"],
            ],
        ],
    ],
    [
        "inputWallPaper",
        [
            0xE630B979,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputWallPaperSlug",
        [
            0x72091C80,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "inputWallPaperNoFile",
        [
            0x967A462E,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.wallPapersNotModified",
        [
            0x1C199183,
            [],
        ],
    ],
    [
        "account.wallPapers",
        [
            0xCDC3858C,
            [
                ["hash", "bigint", "long"],
                ["wallpapers", ["WallPaper"], "Vector<WallPaper>"],
            ],
        ],
    ],
    [
        "codeSettings",
        [
            0xAD253D78,
            [
                ["flags", flags, "#"],
                ["allow_flashcall", "true", "flags.0?true"],
                ["current_number", "true", "flags.1?true"],
                ["allow_app_hash", "true", "flags.4?true"],
                ["allow_missed_call", "true", "flags.5?true"],
                ["allow_firebase", "true", "flags.7?true"],
                ["unknown_number", "true", "flags.9?true"],
                ["logout_tokens", [Uint8Array], "flags.6?Vector<bytes>"],
                ["token", "string", "flags.8?string"],
                ["app_sandbox", "boolean", "flags.8?Bool"],
            ],
        ],
    ],
    [
        "wallPaperSettings",
        [
            0x372EFCD0,
            [
                ["flags", flags, "#"],
                ["blur", "true", "flags.1?true"],
                ["motion", "true", "flags.2?true"],
                ["background_color", "number", "flags.0?int"],
                ["second_background_color", "number", "flags.4?int"],
                ["third_background_color", "number", "flags.5?int"],
                ["fourth_background_color", "number", "flags.6?int"],
                ["intensity", "number", "flags.3?int"],
                ["rotation", "number", "flags.4?int"],
                ["emoticon", "string", "flags.7?string"],
            ],
        ],
    ],
    [
        "autoDownloadSettings",
        [
            0xBAA57628,
            [
                ["flags", flags, "#"],
                ["disabled", "true", "flags.0?true"],
                ["video_preload_large", "true", "flags.1?true"],
                ["audio_preload_next", "true", "flags.2?true"],
                ["phonecalls_less_data", "true", "flags.3?true"],
                ["stories_preload", "true", "flags.4?true"],
                ["photo_size_max", "number", "int"],
                ["video_size_max", "bigint", "long"],
                ["file_size_max", "bigint", "long"],
                ["video_upload_maxbitrate", "number", "int"],
                ["small_queue_active_operations_max", "number", "int"],
                ["large_queue_active_operations_max", "number", "int"],
            ],
        ],
    ],
    [
        "account.autoDownloadSettings",
        [
            0x63CACF26,
            [
                ["low", "AutoDownloadSettings", "AutoDownloadSettings"],
                ["medium", "AutoDownloadSettings", "AutoDownloadSettings"],
                ["high", "AutoDownloadSettings", "AutoDownloadSettings"],
            ],
        ],
    ],
    [
        "emojiKeyword",
        [
            0xD5B3B9F9,
            [
                ["keyword", "string", "string"],
                ["emoticons", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "emojiKeywordDeleted",
        [
            0x236DF622,
            [
                ["keyword", "string", "string"],
                ["emoticons", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "emojiKeywordsDifference",
        [
            0x5CC761BD,
            [
                ["lang_code", "string", "string"],
                ["from_version", "number", "int"],
                ["version", "number", "int"],
                ["keywords", ["EmojiKeyword"], "Vector<EmojiKeyword>"],
            ],
        ],
    ],
    [
        "emojiURL",
        [
            0xA575739D,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "emojiLanguage",
        [
            0xB3FB5361,
            [
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "folder",
        [
            0xFF544E65,
            [
                ["flags", flags, "#"],
                ["autofill_new_broadcasts", "true", "flags.0?true"],
                ["autofill_public_groups", "true", "flags.1?true"],
                ["autofill_new_correspondents", "true", "flags.2?true"],
                ["id", "number", "int"],
                ["title", "string", "string"],
                ["photo", "ChatPhoto", "flags.3?ChatPhoto"],
            ],
        ],
    ],
    [
        "inputFolderPeer",
        [
            0xFBD2C296,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["folder_id", "number", "int"],
            ],
        ],
    ],
    [
        "folderPeer",
        [
            0xE9BAA668,
            [
                ["peer", "Peer", "Peer"],
                ["folder_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.searchCounter",
        [
            0xE844EBFF,
            [
                ["flags", flags, "#"],
                ["inexact", "true", "flags.1?true"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "urlAuthResultRequest",
        [
            0x92D33A0E,
            [
                ["flags", flags, "#"],
                ["request_write_access", "true", "flags.0?true"],
                ["bot", "User", "User"],
                ["domain", "string", "string"],
            ],
        ],
    ],
    [
        "urlAuthResultAccepted",
        [
            0x8F8C0E4E,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "urlAuthResultDefault",
        [
            0xA9D6DB1F,
            [],
        ],
    ],
    [
        "channelLocationEmpty",
        [
            0xBFB5AD8B,
            [],
        ],
    ],
    [
        "channelLocation",
        [
            0x209B82DB,
            [
                ["geo_point", "GeoPoint", "GeoPoint"],
                ["address", "string", "string"],
            ],
        ],
    ],
    [
        "peerLocated",
        [
            0xCA461B5D,
            [
                ["peer", "Peer", "Peer"],
                ["expires", "number", "int"],
                ["distance", "number", "int"],
            ],
        ],
    ],
    [
        "peerSelfLocated",
        [
            0xF8EC284B,
            [
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "restrictionReason",
        [
            0xD072ACB4,
            [
                ["platform", "string", "string"],
                ["reason", "string", "string"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "inputTheme",
        [
            0x3C5693E9,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputThemeSlug",
        [
            0xF5890DF1,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "theme",
        [
            0xA00E67D6,
            [
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["default", "true", "flags.1?true"],
                ["for_chat", "true", "flags.5?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["slug", "string", "string"],
                ["title", "string", "string"],
                ["document", "Document", "flags.2?Document"],
                ["settings", ["ThemeSettings"], "flags.3?Vector<ThemeSettings>"],
                ["emoticon", "string", "flags.6?string"],
                ["installs_count", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "account.themesNotModified",
        [
            0xF41EB622,
            [],
        ],
    ],
    [
        "account.themes",
        [
            0x9A3D8C6D,
            [
                ["hash", "bigint", "long"],
                ["themes", ["Theme"], "Vector<Theme>"],
            ],
        ],
    ],
    [
        "auth.loginToken",
        [
            0x629F1980,
            [
                ["expires", "number", "int"],
                ["token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.loginTokenMigrateTo",
        [
            0x068E9916,
            [
                ["dc_id", "number", "int"],
                ["token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.loginTokenSuccess",
        [
            0x390D5C5E,
            [
                ["authorization", "auth_Authorization", "auth.Authorization"],
            ],
        ],
    ],
    [
        "account.contentSettings",
        [
            0x57E28221,
            [
                ["flags", flags, "#"],
                ["sensitive_enabled", "true", "flags.0?true"],
                ["sensitive_can_change", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "messages.inactiveChats",
        [
            0xA927FEC5,
            [
                ["dates", ["number"], "Vector<int>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "baseThemeClassic",
        [
            0xC3A12462,
            [],
        ],
    ],
    [
        "baseThemeDay",
        [
            0xFBD81688,
            [],
        ],
    ],
    [
        "baseThemeNight",
        [
            0xB7B31EA8,
            [],
        ],
    ],
    [
        "baseThemeTinted",
        [
            0x6D5F77EE,
            [],
        ],
    ],
    [
        "baseThemeArctic",
        [
            0x5B11125A,
            [],
        ],
    ],
    [
        "inputThemeSettings",
        [
            0x8FDE504F,
            [
                ["flags", flags, "#"],
                ["message_colors_animated", "true", "flags.2?true"],
                ["base_theme", "BaseTheme", "BaseTheme"],
                ["accent_color", "number", "int"],
                ["outbox_accent_color", "number", "flags.3?int"],
                ["message_colors", ["number"], "flags.0?Vector<int>"],
                ["wallpaper", "InputWallPaper", "flags.1?InputWallPaper"],
                ["wallpaper_settings", "WallPaperSettings", "flags.1?WallPaperSettings"],
            ],
        ],
    ],
    [
        "themeSettings",
        [
            0xFA58B6D4,
            [
                ["flags", flags, "#"],
                ["message_colors_animated", "true", "flags.2?true"],
                ["base_theme", "BaseTheme", "BaseTheme"],
                ["accent_color", "number", "int"],
                ["outbox_accent_color", "number", "flags.3?int"],
                ["message_colors", ["number"], "flags.0?Vector<int>"],
                ["wallpaper", "WallPaper", "flags.1?WallPaper"],
            ],
        ],
    ],
    [
        "webPageAttributeTheme",
        [
            0x54B56617,
            [
                ["flags", flags, "#"],
                ["documents", ["Document"], "flags.0?Vector<Document>"],
                ["settings", "ThemeSettings", "flags.1?ThemeSettings"],
            ],
        ],
    ],
    [
        "webPageAttributeStory",
        [
            0x2E94C3E7,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["id", "number", "int"],
                ["story", "StoryItem", "flags.0?StoryItem"],
            ],
        ],
    ],
    [
        "webPageAttributeStickerSet",
        [
            0x50CC03D3,
            [
                ["flags", flags, "#"],
                ["emojis", "true", "flags.0?true"],
                ["text_color", "true", "flags.1?true"],
                ["stickers", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "messages.votesList",
        [
            0x4899484E,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["votes", ["MessagePeerVote"], "Vector<MessagePeerVote>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["next_offset", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "bankCardOpenUrl",
        [
            0xF568028A,
            [
                ["url", "string", "string"],
                ["name", "string", "string"],
            ],
        ],
    ],
    [
        "payments.bankCardData",
        [
            0x3E24E573,
            [
                ["title", "string", "string"],
                ["open_urls", ["BankCardOpenUrl"], "Vector<BankCardOpenUrl>"],
            ],
        ],
    ],
    [
        "dialogFilter",
        [
            0x5FB5523B,
            [
                ["flags", flags, "#"],
                ["contacts", "true", "flags.0?true"],
                ["non_contacts", "true", "flags.1?true"],
                ["groups", "true", "flags.2?true"],
                ["broadcasts", "true", "flags.3?true"],
                ["bots", "true", "flags.4?true"],
                ["exclude_muted", "true", "flags.11?true"],
                ["exclude_read", "true", "flags.12?true"],
                ["exclude_archived", "true", "flags.13?true"],
                ["id", "number", "int"],
                ["title", "string", "string"],
                ["emoticon", "string", "flags.25?string"],
                ["color", "number", "flags.27?int"],
                ["pinned_peers", ["InputPeer"], "Vector<InputPeer>"],
                ["include_peers", ["InputPeer"], "Vector<InputPeer>"],
                ["exclude_peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "dialogFilterDefault",
        [
            0x363293AE,
            [],
        ],
    ],
    [
        "dialogFilterChatlist",
        [
            0x9FE28EA4,
            [
                ["flags", flags, "#"],
                ["has_my_invites", "true", "flags.26?true"],
                ["id", "number", "int"],
                ["title", "string", "string"],
                ["emoticon", "string", "flags.25?string"],
                ["color", "number", "flags.27?int"],
                ["pinned_peers", ["InputPeer"], "Vector<InputPeer>"],
                ["include_peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "dialogFilterSuggested",
        [
            0x77744D4A,
            [
                ["filter", "DialogFilter", "DialogFilter"],
                ["description", "string", "string"],
            ],
        ],
    ],
    [
        "statsDateRangeDays",
        [
            0xB637EDAF,
            [
                ["min_date", "number", "int"],
                ["max_date", "number", "int"],
            ],
        ],
    ],
    [
        "statsAbsValueAndPrev",
        [
            0xCB43ACDE,
            [
                ["current", "number", "double"],
                ["previous", "number", "double"],
            ],
        ],
    ],
    [
        "statsPercentValue",
        [
            0xCBCE2FE0,
            [
                ["part", "number", "double"],
                ["total", "number", "double"],
            ],
        ],
    ],
    [
        "statsGraphAsync",
        [
            0x4A27EB2D,
            [
                ["token", "string", "string"],
            ],
        ],
    ],
    [
        "statsGraphError",
        [
            0xBEDC9822,
            [
                ["error", "string", "string"],
            ],
        ],
    ],
    [
        "statsGraph",
        [
            0x8EA464B6,
            [
                ["flags", flags, "#"],
                ["json", "DataJSON", "DataJSON"],
                ["zoom_token", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "stats.broadcastStats",
        [
            0x396CA5FC,
            [
                ["period", "StatsDateRangeDays", "StatsDateRangeDays"],
                ["followers", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["views_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["shares_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["reactions_per_post", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["views_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["shares_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["reactions_per_story", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["enabled_notifications", "StatsPercentValue", "StatsPercentValue"],
                ["growth_graph", "StatsGraph", "StatsGraph"],
                ["followers_graph", "StatsGraph", "StatsGraph"],
                ["mute_graph", "StatsGraph", "StatsGraph"],
                ["top_hours_graph", "StatsGraph", "StatsGraph"],
                ["interactions_graph", "StatsGraph", "StatsGraph"],
                ["iv_interactions_graph", "StatsGraph", "StatsGraph"],
                ["views_by_source_graph", "StatsGraph", "StatsGraph"],
                ["new_followers_by_source_graph", "StatsGraph", "StatsGraph"],
                ["languages_graph", "StatsGraph", "StatsGraph"],
                ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
                ["story_interactions_graph", "StatsGraph", "StatsGraph"],
                ["story_reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
                ["recent_posts_interactions", ["PostInteractionCounters"], "Vector<PostInteractionCounters>"],
            ],
        ],
    ],
    [
        "help.promoDataEmpty",
        [
            0x98F6AC75,
            [
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "help.promoData",
        [
            0x8C39793F,
            [
                ["flags", flags, "#"],
                ["proxy", "true", "flags.0?true"],
                ["expires", "number", "int"],
                ["peer", "Peer", "Peer"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["psa_type", "string", "flags.1?string"],
                ["psa_message", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "videoSize",
        [
            0xDE33B094,
            [
                ["flags", flags, "#"],
                ["type", "string", "string"],
                ["w", "number", "int"],
                ["h", "number", "int"],
                ["size", "number", "int"],
                ["video_start_ts", "number", "flags.0?double"],
            ],
        ],
    ],
    [
        "videoSizeEmojiMarkup",
        [
            0xF85C413C,
            [
                ["emoji_id", "bigint", "long"],
                ["background_colors", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "videoSizeStickerMarkup",
        [
            0x0DA082FE,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["sticker_id", "bigint", "long"],
                ["background_colors", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "statsGroupTopPoster",
        [
            0x9D04AF9B,
            [
                ["user_id", "bigint", "long"],
                ["messages", "number", "int"],
                ["avg_chars", "number", "int"],
            ],
        ],
    ],
    [
        "statsGroupTopAdmin",
        [
            0xD7584C87,
            [
                ["user_id", "bigint", "long"],
                ["deleted", "number", "int"],
                ["kicked", "number", "int"],
                ["banned", "number", "int"],
            ],
        ],
    ],
    [
        "statsGroupTopInviter",
        [
            0x535F779D,
            [
                ["user_id", "bigint", "long"],
                ["invitations", "number", "int"],
            ],
        ],
    ],
    [
        "stats.megagroupStats",
        [
            0xEF7FF916,
            [
                ["period", "StatsDateRangeDays", "StatsDateRangeDays"],
                ["members", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["messages", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["viewers", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["posters", "StatsAbsValueAndPrev", "StatsAbsValueAndPrev"],
                ["growth_graph", "StatsGraph", "StatsGraph"],
                ["members_graph", "StatsGraph", "StatsGraph"],
                ["new_members_by_source_graph", "StatsGraph", "StatsGraph"],
                ["languages_graph", "StatsGraph", "StatsGraph"],
                ["messages_graph", "StatsGraph", "StatsGraph"],
                ["actions_graph", "StatsGraph", "StatsGraph"],
                ["top_hours_graph", "StatsGraph", "StatsGraph"],
                ["weekdays_graph", "StatsGraph", "StatsGraph"],
                ["top_posters", ["StatsGroupTopPoster"], "Vector<StatsGroupTopPoster>"],
                ["top_admins", ["StatsGroupTopAdmin"], "Vector<StatsGroupTopAdmin>"],
                ["top_inviters", ["StatsGroupTopInviter"], "Vector<StatsGroupTopInviter>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "globalPrivacySettings",
        [
            0x734C4CCB,
            [
                ["flags", flags, "#"],
                ["archive_and_mute_new_noncontact_peers", "true", "flags.0?true"],
                ["keep_archived_unmuted", "true", "flags.1?true"],
                ["keep_archived_folders", "true", "flags.2?true"],
                ["hide_read_marks", "true", "flags.3?true"],
                ["new_noncontact_peers_require_premium", "true", "flags.4?true"],
            ],
        ],
    ],
    [
        "help.countryCode",
        [
            0x4203C5EF,
            [
                ["flags", flags, "#"],
                ["country_code", "string", "string"],
                ["prefixes", ["string"], "flags.0?Vector<string>"],
                ["patterns", ["string"], "flags.1?Vector<string>"],
            ],
        ],
    ],
    [
        "help.country",
        [
            0xC3878E23,
            [
                ["flags", flags, "#"],
                ["hidden", "true", "flags.0?true"],
                ["iso2", "string", "string"],
                ["default_name", "string", "string"],
                ["name", "string", "flags.1?string"],
                ["country_codes", ["help_CountryCode"], "Vector<help.CountryCode>"],
            ],
        ],
    ],
    [
        "help.countriesListNotModified",
        [
            0x93CC1F32,
            [],
        ],
    ],
    [
        "help.countriesList",
        [
            0x87D0759E,
            [
                ["countries", ["help_Country"], "Vector<help.Country>"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messageViews",
        [
            0x455B853D,
            [
                ["flags", flags, "#"],
                ["views", "number", "flags.0?int"],
                ["forwards", "number", "flags.1?int"],
                ["replies", "MessageReplies", "flags.2?MessageReplies"],
            ],
        ],
    ],
    [
        "messages.messageViews",
        [
            0xB6C4F543,
            [
                ["views", ["MessageViews"], "Vector<MessageViews>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.discussionMessage",
        [
            0xA6341782,
            [
                ["flags", flags, "#"],
                ["messages", ["Message"], "Vector<Message>"],
                ["max_id", "number", "flags.0?int"],
                ["read_inbox_max_id", "number", "flags.1?int"],
                ["read_outbox_max_id", "number", "flags.2?int"],
                ["unread_count", "number", "int"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messageReplyHeader",
        [
            0xAFBC09DB,
            [
                ["flags", flags, "#"],
                ["reply_to_scheduled", "true", "flags.2?true"],
                ["forum_topic", "true", "flags.3?true"],
                ["quote", "true", "flags.9?true"],
                ["reply_to_msg_id", "number", "flags.4?int"],
                ["reply_to_peer_id", "Peer", "flags.0?Peer"],
                ["reply_from", "MessageFwdHeader", "flags.5?MessageFwdHeader"],
                ["reply_media", "MessageMedia", "flags.8?MessageMedia"],
                ["reply_to_top_id", "number", "flags.1?int"],
                ["quote_text", "string", "flags.6?string"],
                ["quote_entities", ["MessageEntity"], "flags.7?Vector<MessageEntity>"],
                ["quote_offset", "number", "flags.10?int"],
            ],
        ],
    ],
    [
        "messageReplyStoryHeader",
        [
            0x0E5AF939,
            [
                ["peer", "Peer", "Peer"],
                ["story_id", "number", "int"],
            ],
        ],
    ],
    [
        "messageReplies",
        [
            0x83D60FC2,
            [
                ["flags", flags, "#"],
                ["comments", "true", "flags.0?true"],
                ["replies", "number", "int"],
                ["replies_pts", "number", "int"],
                ["recent_repliers", ["Peer"], "flags.1?Vector<Peer>"],
                ["channel_id", "bigint", "flags.0?long"],
                ["max_id", "number", "flags.2?int"],
                ["read_max_id", "number", "flags.3?int"],
            ],
        ],
    ],
    [
        "peerBlocked",
        [
            0xE8FD8014,
            [
                ["peer_id", "Peer", "Peer"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "stats.messageStats",
        [
            0x7FE91C14,
            [
                ["views_graph", "StatsGraph", "StatsGraph"],
                ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
            ],
        ],
    ],
    [
        "groupCallDiscarded",
        [
            0x7780BCB4,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["duration", "number", "int"],
            ],
        ],
    ],
    [
        "groupCall",
        [
            0xD597650C,
            [
                ["flags", flags, "#"],
                ["join_muted", "true", "flags.1?true"],
                ["can_change_join_muted", "true", "flags.2?true"],
                ["join_date_asc", "true", "flags.6?true"],
                ["schedule_start_subscribed", "true", "flags.8?true"],
                ["can_start_video", "true", "flags.9?true"],
                ["record_video_active", "true", "flags.11?true"],
                ["rtmp_stream", "true", "flags.12?true"],
                ["listeners_hidden", "true", "flags.13?true"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["participants_count", "number", "int"],
                ["title", "string", "flags.3?string"],
                ["stream_dc_id", "number", "flags.4?int"],
                ["record_start_date", "number", "flags.5?int"],
                ["schedule_date", "number", "flags.7?int"],
                ["unmuted_video_count", "number", "flags.10?int"],
                ["unmuted_video_limit", "number", "int"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "inputGroupCall",
        [
            0xD8AA840F,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "groupCallParticipant",
        [
            0xEBA636FE,
            [
                ["flags", flags, "#"],
                ["muted", "true", "flags.0?true"],
                ["left", "true", "flags.1?true"],
                ["can_self_unmute", "true", "flags.2?true"],
                ["just_joined", "true", "flags.4?true"],
                ["versioned", "true", "flags.5?true"],
                ["min", "true", "flags.8?true"],
                ["muted_by_you", "true", "flags.9?true"],
                ["volume_by_admin", "true", "flags.10?true"],
                ["self", "true", "flags.12?true"],
                ["video_joined", "true", "flags.15?true"],
                ["peer", "Peer", "Peer"],
                ["date", "number", "int"],
                ["active_date", "number", "flags.3?int"],
                ["source", "number", "int"],
                ["volume", "number", "flags.7?int"],
                ["about", "string", "flags.11?string"],
                ["raise_hand_rating", "bigint", "flags.13?long"],
                ["video", "GroupCallParticipantVideo", "flags.6?GroupCallParticipantVideo"],
                ["presentation", "GroupCallParticipantVideo", "flags.14?GroupCallParticipantVideo"],
            ],
        ],
    ],
    [
        "phone.groupCall",
        [
            0x9E727AAD,
            [
                ["call", "GroupCall", "GroupCall"],
                ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
                ["participants_next_offset", "string", "string"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "phone.groupParticipants",
        [
            0xF47751B6,
            [
                ["count", "number", "int"],
                ["participants", ["GroupCallParticipant"], "Vector<GroupCallParticipant>"],
                ["next_offset", "string", "string"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["version", "number", "int"],
            ],
        ],
    ],
    [
        "inlineQueryPeerTypeSameBotPM",
        [
            0x3081ED9D,
            [],
        ],
    ],
    [
        "inlineQueryPeerTypePM",
        [
            0x833C0FAC,
            [],
        ],
    ],
    [
        "inlineQueryPeerTypeChat",
        [
            0xD766C50A,
            [],
        ],
    ],
    [
        "inlineQueryPeerTypeMegagroup",
        [
            0x5EC4BE43,
            [],
        ],
    ],
    [
        "inlineQueryPeerTypeBroadcast",
        [
            0x6334EE9A,
            [],
        ],
    ],
    [
        "inlineQueryPeerTypeBotPM",
        [
            0x0E3B2D0C,
            [],
        ],
    ],
    [
        "messages.historyImport",
        [
            0x1662AF0B,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.historyImportParsed",
        [
            0x5E0FB7B9,
            [
                ["flags", flags, "#"],
                ["pm", "true", "flags.0?true"],
                ["group", "true", "flags.1?true"],
                ["title", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "messages.affectedFoundMessages",
        [
            0xEF8D3E6C,
            [
                ["pts", "number", "int"],
                ["pts_count", "number", "int"],
                ["offset", "number", "int"],
                ["messages", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "chatInviteImporter",
        [
            0x8C5ADFD9,
            [
                ["flags", flags, "#"],
                ["requested", "true", "flags.0?true"],
                ["via_chatlist", "true", "flags.3?true"],
                ["user_id", "bigint", "long"],
                ["date", "number", "int"],
                ["about", "string", "flags.2?string"],
                ["approved_by", "bigint", "flags.1?long"],
            ],
        ],
    ],
    [
        "messages.exportedChatInvites",
        [
            0xBDC62DCC,
            [
                ["count", "number", "int"],
                ["invites", ["ExportedChatInvite"], "Vector<ExportedChatInvite>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.exportedChatInvite",
        [
            0x1871BE50,
            [
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.exportedChatInviteReplaced",
        [
            0x222600EF,
            [
                ["invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["new_invite", "ExportedChatInvite", "ExportedChatInvite"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.chatInviteImporters",
        [
            0x81B6B00A,
            [
                ["count", "number", "int"],
                ["importers", ["ChatInviteImporter"], "Vector<ChatInviteImporter>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "chatAdminWithInvites",
        [
            0xF2ECEF23,
            [
                ["admin_id", "bigint", "long"],
                ["invites_count", "number", "int"],
                ["revoked_invites_count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.chatAdminsWithInvites",
        [
            0xB69B72D7,
            [
                ["admins", ["ChatAdminWithInvites"], "Vector<ChatAdminWithInvites>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.checkedHistoryImportPeer",
        [
            0xA24DE717,
            [
                ["confirm_text", "string", "string"],
            ],
        ],
    ],
    [
        "phone.joinAsPeers",
        [
            0xAFE5623F,
            [
                ["peers", ["Peer"], "Vector<Peer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "phone.exportedGroupCallInvite",
        [
            0x204BD158,
            [
                ["link", "string", "string"],
            ],
        ],
    ],
    [
        "groupCallParticipantVideoSourceGroup",
        [
            0xDCB118B7,
            [
                ["semantics", "string", "string"],
                ["sources", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "groupCallParticipantVideo",
        [
            0x67753AC8,
            [
                ["flags", flags, "#"],
                ["paused", "true", "flags.0?true"],
                ["endpoint", "string", "string"],
                ["source_groups", ["GroupCallParticipantVideoSourceGroup"], "Vector<GroupCallParticipantVideoSourceGroup>"],
                ["audio_source", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "stickers.suggestedShortName",
        [
            0x85FEA03F,
            [
                ["short_name", "string", "string"],
            ],
        ],
    ],
    [
        "botCommandScopeDefault",
        [
            0x2F6CB2AB,
            [],
        ],
    ],
    [
        "botCommandScopeUsers",
        [
            0x3C4F04D8,
            [],
        ],
    ],
    [
        "botCommandScopeChats",
        [
            0x6FE1A881,
            [],
        ],
    ],
    [
        "botCommandScopeChatAdmins",
        [
            0xB9AA606A,
            [],
        ],
    ],
    [
        "botCommandScopePeer",
        [
            0xDB9D897D,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "botCommandScopePeerAdmins",
        [
            0x3FD863D1,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "botCommandScopePeerUser",
        [
            0x0A1321F3,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "account.resetPasswordFailedWait",
        [
            0xE3779861,
            [
                ["retry_date", "number", "int"],
            ],
        ],
    ],
    [
        "account.resetPasswordRequestedWait",
        [
            0xE9EFFC7D,
            [
                ["until_date", "number", "int"],
            ],
        ],
    ],
    [
        "account.resetPasswordOk",
        [
            0xE926D63E,
            [],
        ],
    ],
    [
        "sponsoredMessage",
        [
            0xBDEDF566,
            [
                ["flags", flags, "#"],
                ["recommended", "true", "flags.5?true"],
                ["can_report", "true", "flags.12?true"],
                ["random_id", Uint8Array, "bytes"],
                ["url", "string", "string"],
                ["title", "string", "string"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["photo", "Photo", "flags.6?Photo"],
                ["color", "PeerColor", "flags.13?PeerColor"],
                ["button_text", "string", "string"],
                ["sponsor_info", "string", "flags.7?string"],
                ["additional_info", "string", "flags.8?string"],
            ],
        ],
    ],
    [
        "messages.sponsoredMessages",
        [
            0xC9EE1D87,
            [
                ["flags", flags, "#"],
                ["posts_between", "number", "flags.0?int"],
                ["messages", ["SponsoredMessage"], "Vector<SponsoredMessage>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.sponsoredMessagesEmpty",
        [
            0x1839490F,
            [],
        ],
    ],
    [
        "searchResultsCalendarPeriod",
        [
            0xC9B0539F,
            [
                ["date", "number", "int"],
                ["min_msg_id", "number", "int"],
                ["max_msg_id", "number", "int"],
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.searchResultsCalendar",
        [
            0x147EE23C,
            [
                ["flags", flags, "#"],
                ["inexact", "true", "flags.0?true"],
                ["count", "number", "int"],
                ["min_date", "number", "int"],
                ["min_msg_id", "number", "int"],
                ["offset_id_offset", "number", "flags.1?int"],
                ["periods", ["SearchResultsCalendarPeriod"], "Vector<SearchResultsCalendarPeriod>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "searchResultPosition",
        [
            0x7F648B67,
            [
                ["msg_id", "number", "int"],
                ["date", "number", "int"],
                ["offset", "number", "int"],
            ],
        ],
    ],
    [
        "messages.searchResultsPositions",
        [
            0x53B22BAF,
            [
                ["count", "number", "int"],
                ["positions", ["SearchResultsPosition"], "Vector<SearchResultsPosition>"],
            ],
        ],
    ],
    [
        "channels.sendAsPeers",
        [
            0xF496B0C6,
            [
                ["peers", ["SendAsPeer"], "Vector<SendAsPeer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "users.userFull",
        [
            0x3B6D152E,
            [
                ["full_user", "UserFull", "UserFull"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.peerSettings",
        [
            0x6880B94D,
            [
                ["settings", "PeerSettings", "PeerSettings"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "auth.loggedOut",
        [
            0xC3A2835F,
            [
                ["flags", flags, "#"],
                ["future_auth_token", Uint8Array, "flags.0?bytes"],
            ],
        ],
    ],
    [
        "reactionCount",
        [
            0xA3D1CB80,
            [
                ["flags", flags, "#"],
                ["chosen_order", "number", "flags.0?int"],
                ["reaction", "Reaction", "Reaction"],
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messageReactions",
        [
            0x4F2B9479,
            [
                ["flags", flags, "#"],
                ["min", "true", "flags.0?true"],
                ["can_see_list", "true", "flags.2?true"],
                ["reactions_as_tags", "true", "flags.3?true"],
                ["results", ["ReactionCount"], "Vector<ReactionCount>"],
                ["recent_reactions", ["MessagePeerReaction"], "flags.1?Vector<MessagePeerReaction>"],
            ],
        ],
    ],
    [
        "messages.messageReactionsList",
        [
            0x31BD492D,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["reactions", ["MessagePeerReaction"], "Vector<MessagePeerReaction>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["next_offset", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "availableReaction",
        [
            0xC077EC01,
            [
                ["flags", flags, "#"],
                ["inactive", "true", "flags.0?true"],
                ["premium", "true", "flags.2?true"],
                ["reaction", "string", "string"],
                ["title", "string", "string"],
                ["static_icon", "Document", "Document"],
                ["appear_animation", "Document", "Document"],
                ["select_animation", "Document", "Document"],
                ["activate_animation", "Document", "Document"],
                ["effect_animation", "Document", "Document"],
                ["around_animation", "Document", "flags.1?Document"],
                ["center_icon", "Document", "flags.1?Document"],
            ],
        ],
    ],
    [
        "messages.availableReactionsNotModified",
        [
            0x9F071957,
            [],
        ],
    ],
    [
        "messages.availableReactions",
        [
            0x768E3AAD,
            [
                ["hash", "number", "int"],
                ["reactions", ["AvailableReaction"], "Vector<AvailableReaction>"],
            ],
        ],
    ],
    [
        "messagePeerReaction",
        [
            0x8C79B63C,
            [
                ["flags", flags, "#"],
                ["big", "true", "flags.0?true"],
                ["unread", "true", "flags.1?true"],
                ["my", "true", "flags.2?true"],
                ["peer_id", "Peer", "Peer"],
                ["date", "number", "int"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "groupCallStreamChannel",
        [
            0x80EB48AF,
            [
                ["channel", "number", "int"],
                ["scale", "number", "int"],
                ["last_timestamp_ms", "bigint", "long"],
            ],
        ],
    ],
    [
        "phone.groupCallStreamChannels",
        [
            0xD0E482B2,
            [
                ["channels", ["GroupCallStreamChannel"], "Vector<GroupCallStreamChannel>"],
            ],
        ],
    ],
    [
        "phone.groupCallStreamRtmpUrl",
        [
            0x2DBF3432,
            [
                ["url", "string", "string"],
                ["key", "string", "string"],
            ],
        ],
    ],
    [
        "attachMenuBotIconColor",
        [
            0x4576F3F0,
            [
                ["name", "string", "string"],
                ["color", "number", "int"],
            ],
        ],
    ],
    [
        "attachMenuBotIcon",
        [
            0xB2A7386B,
            [
                ["flags", flags, "#"],
                ["name", "string", "string"],
                ["icon", "Document", "Document"],
                ["colors", ["AttachMenuBotIconColor"], "flags.0?Vector<AttachMenuBotIconColor>"],
            ],
        ],
    ],
    [
        "attachMenuBot",
        [
            0xD90D8DFE,
            [
                ["flags", flags, "#"],
                ["inactive", "true", "flags.0?true"],
                ["has_settings", "true", "flags.1?true"],
                ["request_write_access", "true", "flags.2?true"],
                ["show_in_attach_menu", "true", "flags.3?true"],
                ["show_in_side_menu", "true", "flags.4?true"],
                ["side_menu_disclaimer_needed", "true", "flags.5?true"],
                ["bot_id", "bigint", "long"],
                ["short_name", "string", "string"],
                ["peer_types", ["AttachMenuPeerType"], "flags.3?Vector<AttachMenuPeerType>"],
                ["icons", ["AttachMenuBotIcon"], "Vector<AttachMenuBotIcon>"],
            ],
        ],
    ],
    [
        "attachMenuBotsNotModified",
        [
            0xF1D88A5C,
            [],
        ],
    ],
    [
        "attachMenuBots",
        [
            0x3C4301C0,
            [
                ["hash", "bigint", "long"],
                ["bots", ["AttachMenuBot"], "Vector<AttachMenuBot>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "attachMenuBotsBot",
        [
            0x93BF667F,
            [
                ["bot", "AttachMenuBot", "AttachMenuBot"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "webViewResultUrl",
        [
            0x4D22FF98,
            [
                ["flags", flags, "#"],
                ["fullsize", "true", "flags.1?true"],
                ["query_id", "bigint", "flags.0?long"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "webViewMessageSent",
        [
            0x0C94511C,
            [
                ["flags", flags, "#"],
                ["msg_id", "InputBotInlineMessageID", "flags.0?InputBotInlineMessageID"],
            ],
        ],
    ],
    [
        "botMenuButtonDefault",
        [
            0x7533A588,
            [],
        ],
    ],
    [
        "botMenuButtonCommands",
        [
            0x4258C205,
            [],
        ],
    ],
    [
        "botMenuButton",
        [
            0xC7B57CE6,
            [
                ["text", "string", "string"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "account.savedRingtonesNotModified",
        [
            0xFBF6E8B1,
            [],
        ],
    ],
    [
        "account.savedRingtones",
        [
            0xC1E92CC5,
            [
                ["hash", "bigint", "long"],
                ["ringtones", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "notificationSoundDefault",
        [
            0x97E8BEBE,
            [],
        ],
    ],
    [
        "notificationSoundNone",
        [
            0x6F0C34DF,
            [],
        ],
    ],
    [
        "notificationSoundLocal",
        [
            0x830B9AE4,
            [
                ["title", "string", "string"],
                ["data", "string", "string"],
            ],
        ],
    ],
    [
        "notificationSoundRingtone",
        [
            0xFF6C8049,
            [
                ["id", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.savedRingtone",
        [
            0xB7263F6D,
            [],
        ],
    ],
    [
        "account.savedRingtoneConverted",
        [
            0x1F307EB7,
            [
                ["document", "Document", "Document"],
            ],
        ],
    ],
    [
        "attachMenuPeerTypeSameBotPM",
        [
            0x7D6BE90E,
            [],
        ],
    ],
    [
        "attachMenuPeerTypeBotPM",
        [
            0xC32BFA1A,
            [],
        ],
    ],
    [
        "attachMenuPeerTypePM",
        [
            0xF146D31F,
            [],
        ],
    ],
    [
        "attachMenuPeerTypeChat",
        [
            0x0509113F,
            [],
        ],
    ],
    [
        "attachMenuPeerTypeBroadcast",
        [
            0x7BFBDEFC,
            [],
        ],
    ],
    [
        "inputInvoiceMessage",
        [
            0xC5B56859,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputInvoiceSlug",
        [
            0xC326CAEF,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "inputInvoicePremiumGiftCode",
        [
            0x98986C0D,
            [
                ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
                ["option", "PremiumGiftCodeOption", "PremiumGiftCodeOption"],
            ],
        ],
    ],
    [
        "inputInvoiceStars",
        [
            0x1DA33AD8,
            [
                ["option", "StarsTopupOption", "StarsTopupOption"],
            ],
        ],
    ],
    [
        "payments.exportedInvoice",
        [
            0xAED0CBD9,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "messages.transcribedAudio",
        [
            0xCFB9D957,
            [
                ["flags", flags, "#"],
                ["pending", "true", "flags.0?true"],
                ["transcription_id", "bigint", "long"],
                ["text", "string", "string"],
                ["trial_remains_num", "number", "flags.1?int"],
                ["trial_remains_until_date", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "help.premiumPromo",
        [
            0x5334759C,
            [
                ["status_text", "string", "string"],
                ["status_entities", ["MessageEntity"], "Vector<MessageEntity>"],
                ["video_sections", ["string"], "Vector<string>"],
                ["videos", ["Document"], "Vector<Document>"],
                ["period_options", ["PremiumSubscriptionOption"], "Vector<PremiumSubscriptionOption>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "inputStorePaymentPremiumSubscription",
        [
            0xA6751E66,
            [
                ["flags", flags, "#"],
                ["restore", "true", "flags.0?true"],
                ["upgrade", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "inputStorePaymentGiftPremium",
        [
            0x616F7FE8,
            [
                ["user_id", "InputUser", "InputUser"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputStorePaymentPremiumGiftCode",
        [
            0xA3805F3F,
            [
                ["flags", flags, "#"],
                ["users", ["InputUser"], "Vector<InputUser>"],
                ["boost_peer", "InputPeer", "flags.0?InputPeer"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputStorePaymentPremiumGiveaway",
        [
            0x160544CA,
            [
                ["flags", flags, "#"],
                ["only_new_subscribers", "true", "flags.0?true"],
                ["winners_are_visible", "true", "flags.3?true"],
                ["boost_peer", "InputPeer", "InputPeer"],
                ["additional_peers", ["InputPeer"], "flags.1?Vector<InputPeer>"],
                ["countries_iso2", ["string"], "flags.2?Vector<string>"],
                ["prize_description", "string", "flags.4?string"],
                ["random_id", "bigint", "long"],
                ["until_date", "number", "int"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputStorePaymentStars",
        [
            0x4F0EE8DF,
            [
                ["flags", flags, "#"],
                ["stars", "bigint", "long"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "premiumGiftOption",
        [
            0x74C34319,
            [
                ["flags", flags, "#"],
                ["months", "number", "int"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
                ["bot_url", "string", "string"],
                ["store_product", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "paymentFormMethod",
        [
            0x88F8F21B,
            [
                ["url", "string", "string"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "emojiStatusEmpty",
        [
            0x2DE11AAE,
            [],
        ],
    ],
    [
        "emojiStatus",
        [
            0x929B619D,
            [
                ["document_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "emojiStatusUntil",
        [
            0xFA30A8C7,
            [
                ["document_id", "bigint", "long"],
                ["until", "number", "int"],
            ],
        ],
    ],
    [
        "account.emojiStatusesNotModified",
        [
            0xD08CE645,
            [],
        ],
    ],
    [
        "account.emojiStatuses",
        [
            0x90C467D1,
            [
                ["hash", "bigint", "long"],
                ["statuses", ["EmojiStatus"], "Vector<EmojiStatus>"],
            ],
        ],
    ],
    [
        "reactionEmpty",
        [
            0x79F5D419,
            [],
        ],
    ],
    [
        "reactionEmoji",
        [
            0x1B2286B8,
            [
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "reactionCustomEmoji",
        [
            0x8935FC73,
            [
                ["document_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "chatReactionsNone",
        [
            0xEAFC32BC,
            [],
        ],
    ],
    [
        "chatReactionsAll",
        [
            0x52928BCA,
            [
                ["flags", flags, "#"],
                ["allow_custom", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "chatReactionsSome",
        [
            0x661D4037,
            [
                ["reactions", ["Reaction"], "Vector<Reaction>"],
            ],
        ],
    ],
    [
        "messages.reactionsNotModified",
        [
            0xB06FDBDF,
            [],
        ],
    ],
    [
        "messages.reactions",
        [
            0xEAFDF716,
            [
                ["hash", "bigint", "long"],
                ["reactions", ["Reaction"], "Vector<Reaction>"],
            ],
        ],
    ],
    [
        "emailVerifyPurposeLoginSetup",
        [
            0x4345BE73,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
            ],
        ],
    ],
    [
        "emailVerifyPurposeLoginChange",
        [
            0x527D22EB,
            [],
        ],
    ],
    [
        "emailVerifyPurposePassport",
        [
            0xBBF51685,
            [],
        ],
    ],
    [
        "emailVerificationCode",
        [
            0x922E55A9,
            [
                ["code", "string", "string"],
            ],
        ],
    ],
    [
        "emailVerificationGoogle",
        [
            0xDB909EC2,
            [
                ["token", "string", "string"],
            ],
        ],
    ],
    [
        "emailVerificationApple",
        [
            0x96D074FD,
            [
                ["token", "string", "string"],
            ],
        ],
    ],
    [
        "account.emailVerified",
        [
            0x2B96CD1B,
            [
                ["email", "string", "string"],
            ],
        ],
    ],
    [
        "account.emailVerifiedLogin",
        [
            0xE1BB0D61,
            [
                ["email", "string", "string"],
                ["sent_code", "auth_SentCode", "auth.SentCode"],
            ],
        ],
    ],
    [
        "premiumSubscriptionOption",
        [
            0x5F2D1DF2,
            [
                ["flags", flags, "#"],
                ["current", "true", "flags.1?true"],
                ["can_purchase_upgrade", "true", "flags.2?true"],
                ["transaction", "string", "flags.3?string"],
                ["months", "number", "int"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
                ["bot_url", "string", "string"],
                ["store_product", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "sendAsPeer",
        [
            0xB81C7034,
            [
                ["flags", flags, "#"],
                ["premium_required", "true", "flags.0?true"],
                ["peer", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "messageExtendedMediaPreview",
        [
            0xAD628CC8,
            [
                ["flags", flags, "#"],
                ["w", "number", "flags.0?int"],
                ["h", "number", "flags.0?int"],
                ["thumb", "PhotoSize", "flags.1?PhotoSize"],
                ["video_duration", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "messageExtendedMedia",
        [
            0xEE479C64,
            [
                ["media", "MessageMedia", "MessageMedia"],
            ],
        ],
    ],
    [
        "stickerKeyword",
        [
            0xFCFEB29C,
            [
                ["document_id", "bigint", "long"],
                ["keyword", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "username",
        [
            0xB4073647,
            [
                ["flags", flags, "#"],
                ["editable", "true", "flags.0?true"],
                ["active", "true", "flags.1?true"],
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "forumTopicDeleted",
        [
            0x023F109B,
            [
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "forumTopic",
        [
            0x71701DA9,
            [
                ["flags", flags, "#"],
                ["my", "true", "flags.1?true"],
                ["closed", "true", "flags.2?true"],
                ["pinned", "true", "flags.3?true"],
                ["short", "true", "flags.5?true"],
                ["hidden", "true", "flags.6?true"],
                ["id", "number", "int"],
                ["date", "number", "int"],
                ["title", "string", "string"],
                ["icon_color", "number", "int"],
                ["icon_emoji_id", "bigint", "flags.0?long"],
                ["top_message", "number", "int"],
                ["read_inbox_max_id", "number", "int"],
                ["read_outbox_max_id", "number", "int"],
                ["unread_count", "number", "int"],
                ["unread_mentions_count", "number", "int"],
                ["unread_reactions_count", "number", "int"],
                ["from_id", "Peer", "Peer"],
                ["notify_settings", "PeerNotifySettings", "PeerNotifySettings"],
                ["draft", "DraftMessage", "flags.4?DraftMessage"],
            ],
        ],
    ],
    [
        "messages.forumTopics",
        [
            0x367617D3,
            [
                ["flags", flags, "#"],
                ["order_by_create_date", "true", "flags.0?true"],
                ["count", "number", "int"],
                ["topics", ["ForumTopic"], "Vector<ForumTopic>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["pts", "number", "int"],
            ],
        ],
    ],
    [
        "defaultHistoryTTL",
        [
            0x43B46B20,
            [
                ["period", "number", "int"],
            ],
        ],
    ],
    [
        "exportedContactToken",
        [
            0x41BF109B,
            [
                ["url", "string", "string"],
                ["expires", "number", "int"],
            ],
        ],
    ],
    [
        "requestPeerTypeUser",
        [
            0x5F3B8A00,
            [
                ["flags", flags, "#"],
                ["bot", "boolean", "flags.0?Bool"],
                ["premium", "boolean", "flags.1?Bool"],
            ],
        ],
    ],
    [
        "requestPeerTypeChat",
        [
            0xC9F06E1B,
            [
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["bot_participant", "true", "flags.5?true"],
                ["has_username", "boolean", "flags.3?Bool"],
                ["forum", "boolean", "flags.4?Bool"],
                ["user_admin_rights", "ChatAdminRights", "flags.1?ChatAdminRights"],
                ["bot_admin_rights", "ChatAdminRights", "flags.2?ChatAdminRights"],
            ],
        ],
    ],
    [
        "requestPeerTypeBroadcast",
        [
            0x339BEF6C,
            [
                ["flags", flags, "#"],
                ["creator", "true", "flags.0?true"],
                ["has_username", "boolean", "flags.3?Bool"],
                ["user_admin_rights", "ChatAdminRights", "flags.1?ChatAdminRights"],
                ["bot_admin_rights", "ChatAdminRights", "flags.2?ChatAdminRights"],
            ],
        ],
    ],
    [
        "emojiListNotModified",
        [
            0x481EADFA,
            [],
        ],
    ],
    [
        "emojiList",
        [
            0x7A1E11D1,
            [
                ["hash", "bigint", "long"],
                ["document_id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "emojiGroup",
        [
            0x7A9ABDA9,
            [
                ["title", "string", "string"],
                ["icon_emoji_id", "bigint", "long"],
                ["emoticons", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "emojiGroupGreeting",
        [
            0x80D26CC7,
            [
                ["title", "string", "string"],
                ["icon_emoji_id", "bigint", "long"],
                ["emoticons", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "emojiGroupPremium",
        [
            0x093BCF34,
            [
                ["title", "string", "string"],
                ["icon_emoji_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.emojiGroupsNotModified",
        [
            0x6FB4AD87,
            [],
        ],
    ],
    [
        "messages.emojiGroups",
        [
            0x881FB94B,
            [
                ["hash", "number", "int"],
                ["groups", ["EmojiGroup"], "Vector<EmojiGroup>"],
            ],
        ],
    ],
    [
        "textWithEntities",
        [
            0x751F3146,
            [
                ["text", "string", "string"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "messages.translateResult",
        [
            0x33DB32F8,
            [
                ["result", ["TextWithEntities"], "Vector<TextWithEntities>"],
            ],
        ],
    ],
    [
        "autoSaveSettings",
        [
            0xC84834CE,
            [
                ["flags", flags, "#"],
                ["photos", "true", "flags.0?true"],
                ["videos", "true", "flags.1?true"],
                ["video_max_size", "bigint", "flags.2?long"],
            ],
        ],
    ],
    [
        "autoSaveException",
        [
            0x81602D47,
            [
                ["peer", "Peer", "Peer"],
                ["settings", "AutoSaveSettings", "AutoSaveSettings"],
            ],
        ],
    ],
    [
        "account.autoSaveSettings",
        [
            0x4C3E069D,
            [
                ["users_settings", "AutoSaveSettings", "AutoSaveSettings"],
                ["chats_settings", "AutoSaveSettings", "AutoSaveSettings"],
                ["broadcasts_settings", "AutoSaveSettings", "AutoSaveSettings"],
                ["exceptions", ["AutoSaveException"], "Vector<AutoSaveException>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "help.appConfigNotModified",
        [
            0x7CDE641D,
            [],
        ],
    ],
    [
        "help.appConfig",
        [
            0xDD18782E,
            [
                ["hash", "number", "int"],
                ["config", "JSONValue", "JSONValue"],
            ],
        ],
    ],
    [
        "inputBotAppID",
        [
            0xA920BD7A,
            [
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "inputBotAppShortName",
        [
            0x908C0407,
            [
                ["bot_id", "InputUser", "InputUser"],
                ["short_name", "string", "string"],
            ],
        ],
    ],
    [
        "botAppNotModified",
        [
            0x5DA674B7,
            [],
        ],
    ],
    [
        "botApp",
        [
            0x95FCD1D6,
            [
                ["flags", flags, "#"],
                ["id", "bigint", "long"],
                ["access_hash", "bigint", "long"],
                ["short_name", "string", "string"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["photo", "Photo", "Photo"],
                ["document", "Document", "flags.0?Document"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.botApp",
        [
            0xEB50ADF5,
            [
                ["flags", flags, "#"],
                ["inactive", "true", "flags.0?true"],
                ["request_write_access", "true", "flags.1?true"],
                ["has_settings", "true", "flags.2?true"],
                ["app", "BotApp", "BotApp"],
            ],
        ],
    ],
    [
        "inlineBotWebView",
        [
            0xB57295D5,
            [
                ["text", "string", "string"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "readParticipantDate",
        [
            0x4A4FF172,
            [
                ["user_id", "bigint", "long"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "inputChatlistDialogFilter",
        [
            0xF3E0DA33,
            [
                ["filter_id", "number", "int"],
            ],
        ],
    ],
    [
        "exportedChatlistInvite",
        [
            0x0C5181AC,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["url", "string", "string"],
                ["peers", ["Peer"], "Vector<Peer>"],
            ],
        ],
    ],
    [
        "chatlists.exportedChatlistInvite",
        [
            0x10E6E3A6,
            [
                ["filter", "DialogFilter", "DialogFilter"],
                ["invite", "ExportedChatlistInvite", "ExportedChatlistInvite"],
            ],
        ],
    ],
    [
        "chatlists.exportedInvites",
        [
            0x10AB6DC7,
            [
                ["invites", ["ExportedChatlistInvite"], "Vector<ExportedChatlistInvite>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "chatlists.chatlistInviteAlready",
        [
            0xFA87F659,
            [
                ["filter_id", "number", "int"],
                ["missing_peers", ["Peer"], "Vector<Peer>"],
                ["already_peers", ["Peer"], "Vector<Peer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "chatlists.chatlistInvite",
        [
            0x1DCD839D,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["emoticon", "string", "flags.0?string"],
                ["peers", ["Peer"], "Vector<Peer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "chatlists.chatlistUpdates",
        [
            0x93BD878D,
            [
                ["missing_peers", ["Peer"], "Vector<Peer>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "bots.botInfo",
        [
            0xE8A775B0,
            [
                ["name", "string", "string"],
                ["about", "string", "string"],
                ["description", "string", "string"],
            ],
        ],
    ],
    [
        "messagePeerVote",
        [
            0xB6CC2D5C,
            [
                ["peer", "Peer", "Peer"],
                ["option", Uint8Array, "bytes"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "messagePeerVoteInputOption",
        [
            0x74CDA504,
            [
                ["peer", "Peer", "Peer"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "messagePeerVoteMultiple",
        [
            0x4628F6E6,
            [
                ["peer", "Peer", "Peer"],
                ["options", [Uint8Array], "Vector<bytes>"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "storyViews",
        [
            0x8D595CD6,
            [
                ["flags", flags, "#"],
                ["has_viewers", "true", "flags.1?true"],
                ["views_count", "number", "int"],
                ["forwards_count", "number", "flags.2?int"],
                ["reactions", ["ReactionCount"], "flags.3?Vector<ReactionCount>"],
                ["reactions_count", "number", "flags.4?int"],
                ["recent_viewers", ["bigint"], "flags.0?Vector<long>"],
            ],
        ],
    ],
    [
        "storyItemDeleted",
        [
            0x51E6EE4F,
            [
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "storyItemSkipped",
        [
            0xFFADC913,
            [
                ["flags", flags, "#"],
                ["close_friends", "true", "flags.8?true"],
                ["id", "number", "int"],
                ["date", "number", "int"],
                ["expire_date", "number", "int"],
            ],
        ],
    ],
    [
        "storyItem",
        [
            0x79B26A24,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.5?true"],
                ["public", "true", "flags.7?true"],
                ["close_friends", "true", "flags.8?true"],
                ["min", "true", "flags.9?true"],
                ["noforwards", "true", "flags.10?true"],
                ["edited", "true", "flags.11?true"],
                ["contacts", "true", "flags.12?true"],
                ["selected_contacts", "true", "flags.13?true"],
                ["out", "true", "flags.16?true"],
                ["id", "number", "int"],
                ["date", "number", "int"],
                ["from_id", "Peer", "flags.18?Peer"],
                ["fwd_from", "StoryFwdHeader", "flags.17?StoryFwdHeader"],
                ["expire_date", "number", "int"],
                ["caption", "string", "flags.0?string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["media", "MessageMedia", "MessageMedia"],
                ["media_areas", ["MediaArea"], "flags.14?Vector<MediaArea>"],
                ["privacy", ["PrivacyRule"], "flags.2?Vector<PrivacyRule>"],
                ["views", "StoryViews", "flags.3?StoryViews"],
                ["sent_reaction", "Reaction", "flags.15?Reaction"],
            ],
        ],
    ],
    [
        "stories.allStoriesNotModified",
        [
            0x1158FE3E,
            [
                ["flags", flags, "#"],
                ["state", "string", "string"],
                ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
            ],
        ],
    ],
    [
        "stories.allStories",
        [
            0x6EFC5E81,
            [
                ["flags", flags, "#"],
                ["has_more", "true", "flags.0?true"],
                ["count", "number", "int"],
                ["state", "string", "string"],
                ["peer_stories", ["PeerStories"], "Vector<PeerStories>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["stealth_mode", "StoriesStealthMode", "StoriesStealthMode"],
            ],
        ],
    ],
    [
        "stories.stories",
        [
            0x63C3DD0A,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["stories", ["StoryItem"], "Vector<StoryItem>"],
                ["pinned_to_top", ["number"], "flags.0?Vector<int>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "storyView",
        [
            0xB0BDEAC5,
            [
                ["flags", flags, "#"],
                ["blocked", "true", "flags.0?true"],
                ["blocked_my_stories_from", "true", "flags.1?true"],
                ["user_id", "bigint", "long"],
                ["date", "number", "int"],
                ["reaction", "Reaction", "flags.2?Reaction"],
            ],
        ],
    ],
    [
        "storyViewPublicForward",
        [
            0x9083670B,
            [
                ["flags", flags, "#"],
                ["blocked", "true", "flags.0?true"],
                ["blocked_my_stories_from", "true", "flags.1?true"],
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "storyViewPublicRepost",
        [
            0xBD74CF49,
            [
                ["flags", flags, "#"],
                ["blocked", "true", "flags.0?true"],
                ["blocked_my_stories_from", "true", "flags.1?true"],
                ["peer_id", "Peer", "Peer"],
                ["story", "StoryItem", "StoryItem"],
            ],
        ],
    ],
    [
        "stories.storyViewsList",
        [
            0x59D78FC5,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["views_count", "number", "int"],
                ["forwards_count", "number", "int"],
                ["reactions_count", "number", "int"],
                ["views", ["StoryView"], "Vector<StoryView>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["next_offset", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "stories.storyViews",
        [
            0xDE9EED1D,
            [
                ["views", ["StoryViews"], "Vector<StoryViews>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "inputReplyToMessage",
        [
            0x22C0F6D5,
            [
                ["flags", flags, "#"],
                ["reply_to_msg_id", "number", "int"],
                ["top_msg_id", "number", "flags.0?int"],
                ["reply_to_peer_id", "InputPeer", "flags.1?InputPeer"],
                ["quote_text", "string", "flags.2?string"],
                ["quote_entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["quote_offset", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "inputReplyToStory",
        [
            0x5881323A,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["story_id", "number", "int"],
            ],
        ],
    ],
    [
        "exportedStoryLink",
        [
            0x3FC9053B,
            [
                ["link", "string", "string"],
            ],
        ],
    ],
    [
        "storiesStealthMode",
        [
            0x712E27FD,
            [
                ["flags", flags, "#"],
                ["active_until_date", "number", "flags.0?int"],
                ["cooldown_until_date", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "mediaAreaCoordinates",
        [
            0xCFC9E002,
            [
                ["flags", flags, "#"],
                ["x", "number", "double"],
                ["y", "number", "double"],
                ["w", "number", "double"],
                ["h", "number", "double"],
                ["rotation", "number", "double"],
                ["radius", "number", "flags.0?double"],
            ],
        ],
    ],
    [
        "mediaAreaVenue",
        [
            0xBE82DB9C,
            [
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["geo", "GeoPoint", "GeoPoint"],
                ["title", "string", "string"],
                ["address", "string", "string"],
                ["provider", "string", "string"],
                ["venue_id", "string", "string"],
                ["venue_type", "string", "string"],
            ],
        ],
    ],
    [
        "inputMediaAreaVenue",
        [
            0xB282217F,
            [
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["query_id", "bigint", "long"],
                ["result_id", "string", "string"],
            ],
        ],
    ],
    [
        "mediaAreaGeoPoint",
        [
            0xCAD5452D,
            [
                ["flags", flags, "#"],
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["geo", "GeoPoint", "GeoPoint"],
                ["address", "GeoPointAddress", "flags.0?GeoPointAddress"],
            ],
        ],
    ],
    [
        "mediaAreaSuggestedReaction",
        [
            0x14455871,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["flipped", "true", "flags.1?true"],
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "mediaAreaChannelPost",
        [
            0x770416AF,
            [
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["channel_id", "bigint", "long"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "inputMediaAreaChannelPost",
        [
            0x2271F2BF,
            [
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["channel", "InputChannel", "InputChannel"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "mediaAreaUrl",
        [
            0x37381085,
            [
                ["coordinates", "MediaAreaCoordinates", "MediaAreaCoordinates"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "peerStories",
        [
            0x9A35E999,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["max_read_id", "number", "flags.0?int"],
                ["stories", ["StoryItem"], "Vector<StoryItem>"],
            ],
        ],
    ],
    [
        "stories.peerStories",
        [
            0xCAE68768,
            [
                ["stories", "PeerStories", "PeerStories"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.webPage",
        [
            0xFD5E12BD,
            [
                ["webpage", "WebPage", "WebPage"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "premiumGiftCodeOption",
        [
            0x257E962B,
            [
                ["flags", flags, "#"],
                ["users", "number", "int"],
                ["months", "number", "int"],
                ["store_product", "string", "flags.0?string"],
                ["store_quantity", "number", "flags.1?int"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "payments.checkedGiftCode",
        [
            0x284A1096,
            [
                ["flags", flags, "#"],
                ["via_giveaway", "true", "flags.2?true"],
                ["from_id", "Peer", "flags.4?Peer"],
                ["giveaway_msg_id", "number", "flags.3?int"],
                ["to_id", "bigint", "flags.0?long"],
                ["date", "number", "int"],
                ["months", "number", "int"],
                ["used_date", "number", "flags.1?int"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "payments.giveawayInfo",
        [
            0x4367DAA0,
            [
                ["flags", flags, "#"],
                ["participating", "true", "flags.0?true"],
                ["preparing_results", "true", "flags.3?true"],
                ["start_date", "number", "int"],
                ["joined_too_early_date", "number", "flags.1?int"],
                ["admin_disallowed_chat_id", "bigint", "flags.2?long"],
                ["disallowed_country", "string", "flags.4?string"],
            ],
        ],
    ],
    [
        "payments.giveawayInfoResults",
        [
            0x00CD5570,
            [
                ["flags", flags, "#"],
                ["winner", "true", "flags.0?true"],
                ["refunded", "true", "flags.1?true"],
                ["start_date", "number", "int"],
                ["gift_code_slug", "string", "flags.0?string"],
                ["finish_date", "number", "int"],
                ["winners_count", "number", "int"],
                ["activated_count", "number", "int"],
            ],
        ],
    ],
    [
        "prepaidGiveaway",
        [
            0xB2539D54,
            [
                ["id", "bigint", "long"],
                ["months", "number", "int"],
                ["quantity", "number", "int"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "boost",
        [
            0x2A1C8C71,
            [
                ["flags", flags, "#"],
                ["gift", "true", "flags.1?true"],
                ["giveaway", "true", "flags.2?true"],
                ["unclaimed", "true", "flags.3?true"],
                ["id", "string", "string"],
                ["user_id", "bigint", "flags.0?long"],
                ["giveaway_msg_id", "number", "flags.2?int"],
                ["date", "number", "int"],
                ["expires", "number", "int"],
                ["used_gift_slug", "string", "flags.4?string"],
                ["multiplier", "number", "flags.5?int"],
            ],
        ],
    ],
    [
        "premium.boostsList",
        [
            0x86F8613C,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["boosts", ["Boost"], "Vector<Boost>"],
                ["next_offset", "string", "flags.0?string"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "myBoost",
        [
            0xC448415C,
            [
                ["flags", flags, "#"],
                ["slot", "number", "int"],
                ["peer", "Peer", "flags.0?Peer"],
                ["date", "number", "int"],
                ["expires", "number", "int"],
                ["cooldown_until_date", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "premium.myBoosts",
        [
            0x9AE228E2,
            [
                ["my_boosts", ["MyBoost"], "Vector<MyBoost>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "premium.boostsStatus",
        [
            0x4959427A,
            [
                ["flags", flags, "#"],
                ["my_boost", "true", "flags.2?true"],
                ["level", "number", "int"],
                ["current_level_boosts", "number", "int"],
                ["boosts", "number", "int"],
                ["gift_boosts", "number", "flags.4?int"],
                ["next_level_boosts", "number", "flags.0?int"],
                ["premium_audience", "StatsPercentValue", "flags.1?StatsPercentValue"],
                ["boost_url", "string", "string"],
                ["prepaid_giveaways", ["PrepaidGiveaway"], "flags.3?Vector<PrepaidGiveaway>"],
                ["my_boost_slots", ["number"], "flags.2?Vector<int>"],
            ],
        ],
    ],
    [
        "storyFwdHeader",
        [
            0xB826E150,
            [
                ["flags", flags, "#"],
                ["modified", "true", "flags.3?true"],
                ["from", "Peer", "flags.0?Peer"],
                ["from_name", "string", "flags.1?string"],
                ["story_id", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "postInteractionCountersMessage",
        [
            0xE7058E7F,
            [
                ["msg_id", "number", "int"],
                ["views", "number", "int"],
                ["forwards", "number", "int"],
                ["reactions", "number", "int"],
            ],
        ],
    ],
    [
        "postInteractionCountersStory",
        [
            0x8A480E27,
            [
                ["story_id", "number", "int"],
                ["views", "number", "int"],
                ["forwards", "number", "int"],
                ["reactions", "number", "int"],
            ],
        ],
    ],
    [
        "stats.storyStats",
        [
            0x50CD067C,
            [
                ["views_graph", "StatsGraph", "StatsGraph"],
                ["reactions_by_emotion_graph", "StatsGraph", "StatsGraph"],
            ],
        ],
    ],
    [
        "publicForwardMessage",
        [
            0x01F2BF4A,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "publicForwardStory",
        [
            0xEDF3ADD0,
            [
                ["peer", "Peer", "Peer"],
                ["story", "StoryItem", "StoryItem"],
            ],
        ],
    ],
    [
        "stats.publicForwards",
        [
            0x93037E20,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["forwards", ["PublicForward"], "Vector<PublicForward>"],
                ["next_offset", "string", "flags.0?string"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "peerColor",
        [
            0xB54B5ACF,
            [
                ["flags", flags, "#"],
                ["color", "number", "flags.0?int"],
                ["background_emoji_id", "bigint", "flags.1?long"],
            ],
        ],
    ],
    [
        "help.peerColorSet",
        [
            0x26219A58,
            [
                ["colors", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "help.peerColorProfileSet",
        [
            0x767D61EB,
            [
                ["palette_colors", ["number"], "Vector<int>"],
                ["bg_colors", ["number"], "Vector<int>"],
                ["story_colors", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "help.peerColorOption",
        [
            0xADEC6EBE,
            [
                ["flags", flags, "#"],
                ["hidden", "true", "flags.0?true"],
                ["color_id", "number", "int"],
                ["colors", "help_PeerColorSet", "flags.1?help.PeerColorSet"],
                ["dark_colors", "help_PeerColorSet", "flags.2?help.PeerColorSet"],
                ["channel_min_level", "number", "flags.3?int"],
                ["group_min_level", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "help.peerColorsNotModified",
        [
            0x2BA1F5CE,
            [],
        ],
    ],
    [
        "help.peerColors",
        [
            0x00F8ED08,
            [
                ["hash", "number", "int"],
                ["colors", ["help_PeerColorOption"], "Vector<help.PeerColorOption>"],
            ],
        ],
    ],
    [
        "storyReaction",
        [
            0x6090D6D5,
            [
                ["peer_id", "Peer", "Peer"],
                ["date", "number", "int"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "storyReactionPublicForward",
        [
            0xBBAB2643,
            [
                ["message", "Message", "Message"],
            ],
        ],
    ],
    [
        "storyReactionPublicRepost",
        [
            0xCFCD0F13,
            [
                ["peer_id", "Peer", "Peer"],
                ["story", "StoryItem", "StoryItem"],
            ],
        ],
    ],
    [
        "stories.storyReactionsList",
        [
            0xAA5F789C,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["reactions", ["StoryReaction"], "Vector<StoryReaction>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
                ["next_offset", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "savedDialog",
        [
            0xBD87CB6C,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.2?true"],
                ["peer", "Peer", "Peer"],
                ["top_message", "number", "int"],
            ],
        ],
    ],
    [
        "messages.savedDialogs",
        [
            0xF83AE221,
            [
                ["dialogs", ["SavedDialog"], "Vector<SavedDialog>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.savedDialogsSlice",
        [
            0x44BA9DD9,
            [
                ["count", "number", "int"],
                ["dialogs", ["SavedDialog"], "Vector<SavedDialog>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.savedDialogsNotModified",
        [
            0xC01F6FE8,
            [
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "savedReactionTag",
        [
            0xCB6FF828,
            [
                ["flags", flags, "#"],
                ["reaction", "Reaction", "Reaction"],
                ["title", "string", "flags.0?string"],
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.savedReactionTagsNotModified",
        [
            0x889B59EF,
            [],
        ],
    ],
    [
        "messages.savedReactionTags",
        [
            0x3259950A,
            [
                ["tags", ["SavedReactionTag"], "Vector<SavedReactionTag>"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "outboxReadDate",
        [
            0x3BB842AC,
            [
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "smsjobs.eligibleToJoin",
        [
            0xDC8B44CF,
            [
                ["terms_url", "string", "string"],
                ["monthly_sent_sms", "number", "int"],
            ],
        ],
    ],
    [
        "smsjobs.status",
        [
            0x2AEE9191,
            [
                ["flags", flags, "#"],
                ["allow_international", "true", "flags.0?true"],
                ["recent_sent", "number", "int"],
                ["recent_since", "number", "int"],
                ["recent_remains", "number", "int"],
                ["total_sent", "number", "int"],
                ["total_since", "number", "int"],
                ["last_gift_slug", "string", "flags.1?string"],
                ["terms_url", "string", "string"],
            ],
        ],
    ],
    [
        "smsJob",
        [
            0xE6A1EEB8,
            [
                ["job_id", "string", "string"],
                ["phone_number", "string", "string"],
                ["text", "string", "string"],
            ],
        ],
    ],
    [
        "businessWeeklyOpen",
        [
            0x120B1AB9,
            [
                ["start_minute", "number", "int"],
                ["end_minute", "number", "int"],
            ],
        ],
    ],
    [
        "businessWorkHours",
        [
            0x8C92B098,
            [
                ["flags", flags, "#"],
                ["open_now", "true", "flags.0?true"],
                ["timezone_id", "string", "string"],
                ["weekly_open", ["BusinessWeeklyOpen"], "Vector<BusinessWeeklyOpen>"],
            ],
        ],
    ],
    [
        "businessLocation",
        [
            0xAC5C1AF7,
            [
                ["flags", flags, "#"],
                ["geo_point", "GeoPoint", "flags.0?GeoPoint"],
                ["address", "string", "string"],
            ],
        ],
    ],
    [
        "inputBusinessRecipients",
        [
            0x6F8B32AA,
            [
                ["flags", flags, "#"],
                ["existing_chats", "true", "flags.0?true"],
                ["new_chats", "true", "flags.1?true"],
                ["contacts", "true", "flags.2?true"],
                ["non_contacts", "true", "flags.3?true"],
                ["exclude_selected", "true", "flags.5?true"],
                ["users", ["InputUser"], "flags.4?Vector<InputUser>"],
            ],
        ],
    ],
    [
        "businessRecipients",
        [
            0x21108FF7,
            [
                ["flags", flags, "#"],
                ["existing_chats", "true", "flags.0?true"],
                ["new_chats", "true", "flags.1?true"],
                ["contacts", "true", "flags.2?true"],
                ["non_contacts", "true", "flags.3?true"],
                ["exclude_selected", "true", "flags.5?true"],
                ["users", ["bigint"], "flags.4?Vector<long>"],
            ],
        ],
    ],
    [
        "businessAwayMessageScheduleAlways",
        [
            0xC9B9E2B9,
            [],
        ],
    ],
    [
        "businessAwayMessageScheduleOutsideWorkHours",
        [
            0xC3F2F501,
            [],
        ],
    ],
    [
        "businessAwayMessageScheduleCustom",
        [
            0xCC4D9ECC,
            [
                ["start_date", "number", "int"],
                ["end_date", "number", "int"],
            ],
        ],
    ],
    [
        "inputBusinessGreetingMessage",
        [
            0x0194CB3B,
            [
                ["shortcut_id", "number", "int"],
                ["recipients", "InputBusinessRecipients", "InputBusinessRecipients"],
                ["no_activity_days", "number", "int"],
            ],
        ],
    ],
    [
        "businessGreetingMessage",
        [
            0xE519ABAB,
            [
                ["shortcut_id", "number", "int"],
                ["recipients", "BusinessRecipients", "BusinessRecipients"],
                ["no_activity_days", "number", "int"],
            ],
        ],
    ],
    [
        "inputBusinessAwayMessage",
        [
            0x832175E0,
            [
                ["flags", flags, "#"],
                ["offline_only", "true", "flags.0?true"],
                ["shortcut_id", "number", "int"],
                ["schedule", "BusinessAwayMessageSchedule", "BusinessAwayMessageSchedule"],
                ["recipients", "InputBusinessRecipients", "InputBusinessRecipients"],
            ],
        ],
    ],
    [
        "businessAwayMessage",
        [
            0xEF156A5C,
            [
                ["flags", flags, "#"],
                ["offline_only", "true", "flags.0?true"],
                ["shortcut_id", "number", "int"],
                ["schedule", "BusinessAwayMessageSchedule", "BusinessAwayMessageSchedule"],
                ["recipients", "BusinessRecipients", "BusinessRecipients"],
            ],
        ],
    ],
    [
        "timezone",
        [
            0xFF9289F5,
            [
                ["id", "string", "string"],
                ["name", "string", "string"],
                ["utc_offset", "number", "int"],
            ],
        ],
    ],
    [
        "help.timezonesListNotModified",
        [
            0x970708CC,
            [],
        ],
    ],
    [
        "help.timezonesList",
        [
            0x7B74ED71,
            [
                ["timezones", ["Timezone"], "Vector<Timezone>"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "quickReply",
        [
            0x0697102B,
            [
                ["shortcut_id", "number", "int"],
                ["shortcut", "string", "string"],
                ["top_message", "number", "int"],
                ["count", "number", "int"],
            ],
        ],
    ],
    [
        "inputQuickReplyShortcut",
        [
            0x24596D41,
            [
                ["shortcut", "string", "string"],
            ],
        ],
    ],
    [
        "inputQuickReplyShortcutId",
        [
            0x01190CF1,
            [
                ["shortcut_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.quickReplies",
        [
            0xC68D6695,
            [
                ["quick_replies", ["QuickReply"], "Vector<QuickReply>"],
                ["messages", ["Message"], "Vector<Message>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.quickRepliesNotModified",
        [
            0x5F91EB5B,
            [],
        ],
    ],
    [
        "connectedBot",
        [
            0xBD068601,
            [
                ["flags", flags, "#"],
                ["can_reply", "true", "flags.0?true"],
                ["bot_id", "bigint", "long"],
                ["recipients", "BusinessBotRecipients", "BusinessBotRecipients"],
            ],
        ],
    ],
    [
        "account.connectedBots",
        [
            0x17D7F87B,
            [
                ["connected_bots", ["ConnectedBot"], "Vector<ConnectedBot>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "messages.dialogFilters",
        [
            0x2AD93719,
            [
                ["flags", flags, "#"],
                ["tags_enabled", "true", "flags.0?true"],
                ["filters", ["DialogFilter"], "Vector<DialogFilter>"],
            ],
        ],
    ],
    [
        "birthday",
        [
            0x6C8E1E06,
            [
                ["flags", flags, "#"],
                ["day", "number", "int"],
                ["month", "number", "int"],
                ["year", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "botBusinessConnection",
        [
            0x896433B4,
            [
                ["flags", flags, "#"],
                ["can_reply", "true", "flags.0?true"],
                ["disabled", "true", "flags.1?true"],
                ["connection_id", "string", "string"],
                ["user_id", "bigint", "long"],
                ["dc_id", "number", "int"],
                ["date", "number", "int"],
            ],
        ],
    ],
    [
        "inputBusinessIntro",
        [
            0x09C469CD,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["sticker", "InputDocument", "flags.0?InputDocument"],
            ],
        ],
    ],
    [
        "businessIntro",
        [
            0x5A0A066D,
            [
                ["flags", flags, "#"],
                ["title", "string", "string"],
                ["description", "string", "string"],
                ["sticker", "Document", "flags.0?Document"],
            ],
        ],
    ],
    [
        "messages.myStickers",
        [
            0xFAFF629D,
            [
                ["count", "number", "int"],
                ["sets", ["StickerSetCovered"], "Vector<StickerSetCovered>"],
            ],
        ],
    ],
    [
        "inputCollectibleUsername",
        [
            0xE39460A9,
            [
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "inputCollectiblePhone",
        [
            0xA2E214A4,
            [
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "fragment.collectibleInfo",
        [
            0x6EBDFF91,
            [
                ["purchase_date", "number", "int"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
                ["crypto_currency", "string", "string"],
                ["crypto_amount", "bigint", "long"],
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "inputBusinessBotRecipients",
        [
            0xC4E5921E,
            [
                ["flags", flags, "#"],
                ["existing_chats", "true", "flags.0?true"],
                ["new_chats", "true", "flags.1?true"],
                ["contacts", "true", "flags.2?true"],
                ["non_contacts", "true", "flags.3?true"],
                ["exclude_selected", "true", "flags.5?true"],
                ["users", ["InputUser"], "flags.4?Vector<InputUser>"],
                ["exclude_users", ["InputUser"], "flags.6?Vector<InputUser>"],
            ],
        ],
    ],
    [
        "businessBotRecipients",
        [
            0xB88CF373,
            [
                ["flags", flags, "#"],
                ["existing_chats", "true", "flags.0?true"],
                ["new_chats", "true", "flags.1?true"],
                ["contacts", "true", "flags.2?true"],
                ["non_contacts", "true", "flags.3?true"],
                ["exclude_selected", "true", "flags.5?true"],
                ["users", ["bigint"], "flags.4?Vector<long>"],
                ["exclude_users", ["bigint"], "flags.6?Vector<long>"],
            ],
        ],
    ],
    [
        "contactBirthday",
        [
            0x1D998733,
            [
                ["contact_id", "bigint", "long"],
                ["birthday", "Birthday", "Birthday"],
            ],
        ],
    ],
    [
        "contacts.contactBirthdays",
        [
            0x114FF30D,
            [
                ["contacts", ["ContactBirthday"], "Vector<ContactBirthday>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "missingInvitee",
        [
            0x628C9224,
            [
                ["flags", flags, "#"],
                ["premium_would_allow_invite", "true", "flags.0?true"],
                ["premium_required_for_pm", "true", "flags.1?true"],
                ["user_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.invitedUsers",
        [
            0x7F5DEFA6,
            [
                ["updates", "Updates", "Updates"],
                ["missing_invitees", ["MissingInvitee"], "Vector<MissingInvitee>"],
            ],
        ],
    ],
    [
        "inputBusinessChatLink",
        [
            0x11679FA7,
            [
                ["flags", flags, "#"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
                ["title", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "businessChatLink",
        [
            0xB4AE666F,
            [
                ["flags", flags, "#"],
                ["link", "string", "string"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
                ["title", "string", "flags.1?string"],
                ["views", "number", "int"],
            ],
        ],
    ],
    [
        "account.businessChatLinks",
        [
            0xEC43A2D1,
            [
                ["links", ["BusinessChatLink"], "Vector<BusinessChatLink>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "account.resolvedBusinessChatLinks",
        [
            0x9A23AF21,
            [
                ["flags", flags, "#"],
                ["peer", "Peer", "Peer"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.0?Vector<MessageEntity>"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "requestedPeerUser",
        [
            0xD62FF46A,
            [
                ["flags", flags, "#"],
                ["user_id", "bigint", "long"],
                ["first_name", "string", "flags.0?string"],
                ["last_name", "string", "flags.0?string"],
                ["username", "string", "flags.1?string"],
                ["photo", "Photo", "flags.2?Photo"],
            ],
        ],
    ],
    [
        "requestedPeerChat",
        [
            0x7307544F,
            [
                ["flags", flags, "#"],
                ["chat_id", "bigint", "long"],
                ["title", "string", "flags.0?string"],
                ["photo", "Photo", "flags.2?Photo"],
            ],
        ],
    ],
    [
        "requestedPeerChannel",
        [
            0x8BA403E4,
            [
                ["flags", flags, "#"],
                ["channel_id", "bigint", "long"],
                ["title", "string", "flags.0?string"],
                ["username", "string", "flags.1?string"],
                ["photo", "Photo", "flags.2?Photo"],
            ],
        ],
    ],
    [
        "sponsoredMessageReportOption",
        [
            0x430D3150,
            [
                ["text", "string", "string"],
                ["option", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "channels.sponsoredMessageReportResultChooseOption",
        [
            0x846F9E42,
            [
                ["title", "string", "string"],
                ["options", ["SponsoredMessageReportOption"], "Vector<SponsoredMessageReportOption>"],
            ],
        ],
    ],
    [
        "channels.sponsoredMessageReportResultAdsHidden",
        [
            0x3E3BCF2F,
            [],
        ],
    ],
    [
        "channels.sponsoredMessageReportResultReported",
        [
            0xAD798849,
            [],
        ],
    ],
    [
        "stats.broadcastRevenueStats",
        [
            0x5407E297,
            [
                ["top_hours_graph", "StatsGraph", "StatsGraph"],
                ["revenue_graph", "StatsGraph", "StatsGraph"],
                ["balances", "BroadcastRevenueBalances", "BroadcastRevenueBalances"],
                ["usd_rate", "number", "double"],
            ],
        ],
    ],
    [
        "stats.broadcastRevenueWithdrawalUrl",
        [
            0xEC659737,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "broadcastRevenueTransactionProceeds",
        [
            0x557E2CC4,
            [
                ["amount", "bigint", "long"],
                ["from_date", "number", "int"],
                ["to_date", "number", "int"],
            ],
        ],
    ],
    [
        "broadcastRevenueTransactionWithdrawal",
        [
            0x5A590978,
            [
                ["flags", flags, "#"],
                ["pending", "true", "flags.0?true"],
                ["failed", "true", "flags.2?true"],
                ["amount", "bigint", "long"],
                ["date", "number", "int"],
                ["provider", "string", "string"],
                ["transaction_date", "number", "flags.1?int"],
                ["transaction_url", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "broadcastRevenueTransactionRefund",
        [
            0x42D30D2E,
            [
                ["amount", "bigint", "long"],
                ["date", "number", "int"],
                ["provider", "string", "string"],
            ],
        ],
    ],
    [
        "stats.broadcastRevenueTransactions",
        [
            0x87158466,
            [
                ["count", "number", "int"],
                ["transactions", ["BroadcastRevenueTransaction"], "Vector<BroadcastRevenueTransaction>"],
            ],
        ],
    ],
    [
        "reactionNotificationsFromContacts",
        [
            0xBAC3A61A,
            [],
        ],
    ],
    [
        "reactionNotificationsFromAll",
        [
            0x4B9E22A0,
            [],
        ],
    ],
    [
        "reactionsNotifySettings",
        [
            0x56E34970,
            [
                ["flags", flags, "#"],
                ["messages_notify_from", "ReactionNotificationsFrom", "flags.0?ReactionNotificationsFrom"],
                ["stories_notify_from", "ReactionNotificationsFrom", "flags.1?ReactionNotificationsFrom"],
                ["sound", "NotificationSound", "NotificationSound"],
                ["show_previews", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "broadcastRevenueBalances",
        [
            0x8438F1C6,
            [
                ["current_balance", "bigint", "long"],
                ["available_balance", "bigint", "long"],
                ["overall_revenue", "bigint", "long"],
            ],
        ],
    ],
    [
        "availableEffect",
        [
            0x93C3E27E,
            [
                ["flags", flags, "#"],
                ["premium_required", "true", "flags.2?true"],
                ["id", "bigint", "long"],
                ["emoticon", "string", "string"],
                ["static_icon_id", "bigint", "flags.0?long"],
                ["effect_sticker_id", "bigint", "long"],
                ["effect_animation_id", "bigint", "flags.1?long"],
            ],
        ],
    ],
    [
        "messages.availableEffectsNotModified",
        [
            0xD1ED9A5B,
            [],
        ],
    ],
    [
        "messages.availableEffects",
        [
            0xBDDB616E,
            [
                ["hash", "number", "int"],
                ["effects", ["AvailableEffect"], "Vector<AvailableEffect>"],
                ["documents", ["Document"], "Vector<Document>"],
            ],
        ],
    ],
    [
        "factCheck",
        [
            0xB89BFCCF,
            [
                ["flags", flags, "#"],
                ["need_check", "true", "flags.0?true"],
                ["country", "string", "flags.1?string"],
                ["text", "TextWithEntities", "flags.1?TextWithEntities"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "starsTransactionPeerUnsupported",
        [
            0x95F2BFE4,
            [],
        ],
    ],
    [
        "starsTransactionPeerAppStore",
        [
            0xB457B375,
            [],
        ],
    ],
    [
        "starsTransactionPeerPlayMarket",
        [
            0x7B560A0B,
            [],
        ],
    ],
    [
        "starsTransactionPeerPremiumBot",
        [
            0x250DBAF8,
            [],
        ],
    ],
    [
        "starsTransactionPeerFragment",
        [
            0xE92FD902,
            [],
        ],
    ],
    [
        "starsTransactionPeer",
        [
            0xD80DA15D,
            [
                ["peer", "Peer", "Peer"],
            ],
        ],
    ],
    [
        "starsTransactionPeerAds",
        [
            0x60682812,
            [],
        ],
    ],
    [
        "starsTopupOption",
        [
            0x0BD915C0,
            [
                ["flags", flags, "#"],
                ["extended", "true", "flags.1?true"],
                ["stars", "bigint", "long"],
                ["store_product", "string", "flags.0?string"],
                ["currency", "string", "string"],
                ["amount", "bigint", "long"],
            ],
        ],
    ],
    [
        "starsTransaction",
        [
            0x2DB5418F,
            [
                ["flags", flags, "#"],
                ["refund", "true", "flags.3?true"],
                ["pending", "true", "flags.4?true"],
                ["failed", "true", "flags.6?true"],
                ["id", "string", "string"],
                ["stars", "bigint", "long"],
                ["date", "number", "int"],
                ["peer", "StarsTransactionPeer", "StarsTransactionPeer"],
                ["title", "string", "flags.0?string"],
                ["description", "string", "flags.1?string"],
                ["photo", "WebDocument", "flags.2?WebDocument"],
                ["transaction_date", "number", "flags.5?int"],
                ["transaction_url", "string", "flags.5?string"],
                ["bot_payload", Uint8Array, "flags.7?bytes"],
                ["msg_id", "number", "flags.8?int"],
                ["extended_media", ["MessageMedia"], "flags.9?Vector<MessageMedia>"],
            ],
        ],
    ],
    [
        "payments.starsStatus",
        [
            0x8CF4EE60,
            [
                ["flags", flags, "#"],
                ["balance", "bigint", "long"],
                ["history", ["StarsTransaction"], "Vector<StarsTransaction>"],
                ["next_offset", "string", "flags.0?string"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "foundStory",
        [
            0xE87ACBC0,
            [
                ["peer", "Peer", "Peer"],
                ["story", "StoryItem", "StoryItem"],
            ],
        ],
    ],
    [
        "stories.foundStories",
        [
            0xE2DE7737,
            [
                ["flags", flags, "#"],
                ["count", "number", "int"],
                ["stories", ["FoundStory"], "Vector<FoundStory>"],
                ["next_offset", "string", "flags.0?string"],
                ["chats", ["Chat"], "Vector<Chat>"],
                ["users", ["User"], "Vector<User>"],
            ],
        ],
    ],
    [
        "geoPointAddress",
        [
            0xDE4C5D93,
            [
                ["flags", flags, "#"],
                ["country_iso2", "string", "string"],
                ["state", "string", "flags.0?string"],
                ["city", "string", "flags.1?string"],
                ["street", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "starsRevenueStatus",
        [
            0x79342946,
            [
                ["flags", flags, "#"],
                ["withdrawal_enabled", "true", "flags.0?true"],
                ["current_balance", "bigint", "long"],
                ["available_balance", "bigint", "long"],
                ["overall_revenue", "bigint", "long"],
                ["next_withdrawal_at", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "payments.starsRevenueStats",
        [
            0xC92BB73B,
            [
                ["revenue_graph", "StatsGraph", "StatsGraph"],
                ["status", "StarsRevenueStatus", "StarsRevenueStatus"],
                ["usd_rate", "number", "double"],
            ],
        ],
    ],
    [
        "payments.starsRevenueWithdrawalUrl",
        [
            0x1DAB80B7,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "payments.starsRevenueAdsAccountUrl",
        [
            0x394E7F21,
            [
                ["url", "string", "string"],
            ],
        ],
    ],
    [
        "inputStarsTransaction",
        [
            0x206AE6D1,
            [
                ["flags", flags, "#"],
                ["refund", "true", "flags.0?true"],
                ["id", "string", "string"],
            ],
        ],
    ],
    [
        "req_pq_multi",
        [
            0xBE7E8EF1,
            [
                ["nonce", "bigint", "int128"],
            ],
        ],
    ],
    [
        "req_DH_params",
        [
            0xD712E4BE,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["p", Uint8Array, "bytes"],
                ["q", Uint8Array, "bytes"],
                ["public_key_fingerprint", "bigint", "long"],
                ["encrypted_data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "set_client_DH_params",
        [
            0xF5045F1F,
            [
                ["nonce", "bigint", "int128"],
                ["server_nonce", "bigint", "int128"],
                ["encrypted_data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "rpc_drop_answer",
        [
            0x58E4A740,
            [
                ["req_msg_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "get_future_salts",
        [
            0xB921BD04,
            [
                ["num", "number", "int"],
            ],
        ],
    ],
    [
        "ping",
        [
            0x7ABE77EC,
            [
                ["ping_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "ping_delay_disconnect",
        [
            0xF3427B8C,
            [
                ["ping_id", "bigint", "long"],
                ["disconnect_delay", "number", "int"],
            ],
        ],
    ],
    [
        "destroy_session",
        [
            0xE7512126,
            [
                ["session_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "destroy_auth_key",
        [
            0xD1435160,
            [],
        ],
    ],
    [
        "invokeWithBusinessConnectionPrefix",
        [
            0xDD289F8E,
            [
                ["connection_id", "string", "string"],
            ],
        ],
    ],
    [
        "invokeWithGooglePlayIntegrityPrefix",
        [
            0x1DF92984,
            [
                ["nonce", "string", "string"],
                ["token", "string", "string"],
            ],
        ],
    ],
    [
        "invokeWithApnsSecretPrefix",
        [
            0x0DAE54F8,
            [
                ["nonce", "string", "string"],
                ["secret", "string", "string"],
            ],
        ],
    ],
    [
        "invokeAfterMsg",
        [
            0xCB9F372D,
            [
                ["msg_id", "bigint", "long"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeAfterMsgs",
        [
            0x3DC4B4F0,
            [
                ["msg_ids", ["bigint"], "Vector<long>"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "initConnection",
        [
            0xC1CD5EA9,
            [
                ["flags", flags, "#"],
                ["api_id", "number", "int"],
                ["device_model", "string", "string"],
                ["system_version", "string", "string"],
                ["app_version", "string", "string"],
                ["system_lang_code", "string", "string"],
                ["lang_pack", "string", "string"],
                ["lang_code", "string", "string"],
                ["proxy", "InputClientProxy", "flags.0?InputClientProxy"],
                ["params", "JSONValue", "flags.1?JSONValue"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithLayer",
        [
            0xDA9B0D0D,
            [
                ["layer", "number", "int"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithoutUpdates",
        [
            0xBF9459B7,
            [
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithMessagesRange",
        [
            0x365275F2,
            [
                ["range", "MessageRange", "MessageRange"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithTakeout",
        [
            0xACA9FD2E,
            [
                ["takeout_id", "bigint", "long"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithBusinessConnection",
        [
            0xDD289F8E,
            [
                ["connection_id", "string", "string"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithGooglePlayIntegrity",
        [
            0x1DF92984,
            [
                ["nonce", "string", "string"],
                ["token", "string", "string"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "invokeWithApnsSecret",
        [
            0x0DAE54F8,
            [
                ["nonce", "string", "string"],
                ["secret", "string", "string"],
                ["query", null, "!X"],
            ],
        ],
    ],
    [
        "auth.sendCode",
        [
            0xA677244F,
            [
                ["phone_number", "string", "string"],
                ["api_id", "number", "int"],
                ["api_hash", "string", "string"],
                ["settings", "CodeSettings", "CodeSettings"],
            ],
        ],
    ],
    [
        "auth.signUp",
        [
            0xAAC7B717,
            [
                ["flags", flags, "#"],
                ["no_joined_notifications", "true", "flags.0?true"],
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
            ],
        ],
    ],
    [
        "auth.signIn",
        [
            0x8D52A951,
            [
                ["flags", flags, "#"],
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["phone_code", "string", "flags.0?string"],
                ["email_verification", "EmailVerification", "flags.1?EmailVerification"],
            ],
        ],
    ],
    [
        "auth.logOut",
        [
            0x3E72BA19,
            [],
        ],
    ],
    [
        "auth.resetAuthorizations",
        [
            0x9FAB0D1A,
            [],
        ],
    ],
    [
        "auth.exportAuthorization",
        [
            0xE5BFFFCD,
            [
                ["dc_id", "number", "int"],
            ],
        ],
    ],
    [
        "auth.importAuthorization",
        [
            0xA57A7DAD,
            [
                ["id", "bigint", "long"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.bindTempAuthKey",
        [
            0xCDD42A05,
            [
                ["perm_auth_key_id", "bigint", "long"],
                ["nonce", "bigint", "long"],
                ["expires_at", "number", "int"],
                ["encrypted_message", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.importBotAuthorization",
        [
            0x67A3FF2C,
            [
                ["flags", "number", "int"],
                ["api_id", "number", "int"],
                ["api_hash", "string", "string"],
                ["bot_auth_token", "string", "string"],
            ],
        ],
    ],
    [
        "auth.checkPassword",
        [
            0xD18B4D16,
            [
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "auth.requestPasswordRecovery",
        [
            0xD897BC66,
            [],
        ],
    ],
    [
        "auth.recoverPassword",
        [
            0x37096C70,
            [
                ["flags", flags, "#"],
                ["code", "string", "string"],
                ["new_settings", "account_PasswordInputSettings", "flags.0?account.PasswordInputSettings"],
            ],
        ],
    ],
    [
        "auth.resendCode",
        [
            0xCAE47523,
            [
                ["flags", flags, "#"],
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["reason", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "auth.cancelCode",
        [
            0x1F040578,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
            ],
        ],
    ],
    [
        "auth.dropTempAuthKeys",
        [
            0x8E48A188,
            [
                ["except_auth_keys", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "auth.exportLoginToken",
        [
            0xB7E085FE,
            [
                ["api_id", "number", "int"],
                ["api_hash", "string", "string"],
                ["except_ids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "auth.importLoginToken",
        [
            0x95AC5CE4,
            [
                ["token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.acceptLoginToken",
        [
            0xE894AD4D,
            [
                ["token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "auth.checkRecoveryPassword",
        [
            0x0D36BF79,
            [
                ["code", "string", "string"],
            ],
        ],
    ],
    [
        "auth.importWebTokenAuthorization",
        [
            0x2DB873A9,
            [
                ["api_id", "number", "int"],
                ["api_hash", "string", "string"],
                ["web_auth_token", "string", "string"],
            ],
        ],
    ],
    [
        "auth.requestFirebaseSms",
        [
            0x8E39261E,
            [
                ["flags", flags, "#"],
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["safety_net_token", "string", "flags.0?string"],
                ["play_integrity_token", "string", "flags.2?string"],
                ["ios_push_secret", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "auth.resetLoginEmail",
        [
            0x7E960193,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
            ],
        ],
    ],
    [
        "auth.reportMissingCode",
        [
            0xCB9DEFF6,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["mnc", "string", "string"],
            ],
        ],
    ],
    [
        "account.registerDevice",
        [
            0xEC86017A,
            [
                ["flags", flags, "#"],
                ["no_muted", "true", "flags.0?true"],
                ["token_type", "number", "int"],
                ["token", "string", "string"],
                ["app_sandbox", "boolean", "Bool"],
                ["secret", Uint8Array, "bytes"],
                ["other_uids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "account.unregisterDevice",
        [
            0x6A0D3206,
            [
                ["token_type", "number", "int"],
                ["token", "string", "string"],
                ["other_uids", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "account.updateNotifySettings",
        [
            0x84BE5B93,
            [
                ["peer", "InputNotifyPeer", "InputNotifyPeer"],
                ["settings", "InputPeerNotifySettings", "InputPeerNotifySettings"],
            ],
        ],
    ],
    [
        "account.getNotifySettings",
        [
            0x12B3AD31,
            [
                ["peer", "InputNotifyPeer", "InputNotifyPeer"],
            ],
        ],
    ],
    [
        "account.resetNotifySettings",
        [
            0xDB7E1747,
            [],
        ],
    ],
    [
        "account.updateProfile",
        [
            0x78515775,
            [
                ["flags", flags, "#"],
                ["first_name", "string", "flags.0?string"],
                ["last_name", "string", "flags.1?string"],
                ["about", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "account.updateStatus",
        [
            0x6628562C,
            [
                ["offline", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.getWallPapers",
        [
            0x07967D36,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.reportPeer",
        [
            0xC5BA3D86,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["reason", "ReportReason", "ReportReason"],
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "account.checkUsername",
        [
            0x2714D86C,
            [
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "account.updateUsername",
        [
            0x3E0BDD7C,
            [
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "account.getPrivacy",
        [
            0xDADBC950,
            [
                ["key", "InputPrivacyKey", "InputPrivacyKey"],
            ],
        ],
    ],
    [
        "account.setPrivacy",
        [
            0xC9F81CE8,
            [
                ["key", "InputPrivacyKey", "InputPrivacyKey"],
                ["rules", ["InputPrivacyRule"], "Vector<InputPrivacyRule>"],
            ],
        ],
    ],
    [
        "account.deleteAccount",
        [
            0xA2C0CF74,
            [
                ["flags", flags, "#"],
                ["reason", "string", "string"],
                ["password", "InputCheckPasswordSRP", "flags.0?InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "account.getAccountTTL",
        [
            0x08FC711D,
            [],
        ],
    ],
    [
        "account.setAccountTTL",
        [
            0x2442485E,
            [
                ["ttl", "AccountDaysTTL", "AccountDaysTTL"],
            ],
        ],
    ],
    [
        "account.sendChangePhoneCode",
        [
            0x82574AE5,
            [
                ["phone_number", "string", "string"],
                ["settings", "CodeSettings", "CodeSettings"],
            ],
        ],
    ],
    [
        "account.changePhone",
        [
            0x70C32EDB,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["phone_code", "string", "string"],
            ],
        ],
    ],
    [
        "account.updateDeviceLocked",
        [
            0x38DF3532,
            [
                ["period", "number", "int"],
            ],
        ],
    ],
    [
        "account.getAuthorizations",
        [
            0xE320C158,
            [],
        ],
    ],
    [
        "account.resetAuthorization",
        [
            0xDF77F3BC,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getPassword",
        [
            0x548A30F5,
            [],
        ],
    ],
    [
        "account.getPasswordSettings",
        [
            0x9CD4EAF9,
            [
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "account.updatePasswordSettings",
        [
            0xA59B102F,
            [
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
                ["new_settings", "account_PasswordInputSettings", "account.PasswordInputSettings"],
            ],
        ],
    ],
    [
        "account.sendConfirmPhoneCode",
        [
            0x1B3FAA88,
            [
                ["hash", "string", "string"],
                ["settings", "CodeSettings", "CodeSettings"],
            ],
        ],
    ],
    [
        "account.confirmPhone",
        [
            0x5F2178C3,
            [
                ["phone_code_hash", "string", "string"],
                ["phone_code", "string", "string"],
            ],
        ],
    ],
    [
        "account.getTmpPassword",
        [
            0x449E0B51,
            [
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
                ["period", "number", "int"],
            ],
        ],
    ],
    [
        "account.getWebAuthorizations",
        [
            0x182E6D6F,
            [],
        ],
    ],
    [
        "account.resetWebAuthorization",
        [
            0x2D01B9EF,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.resetWebAuthorizations",
        [
            0x682D2594,
            [],
        ],
    ],
    [
        "account.getAllSecureValues",
        [
            0xB288BC7D,
            [],
        ],
    ],
    [
        "account.getSecureValue",
        [
            0x73665BC2,
            [
                ["types", ["SecureValueType"], "Vector<SecureValueType>"],
            ],
        ],
    ],
    [
        "account.saveSecureValue",
        [
            0x899FE31D,
            [
                ["value", "InputSecureValue", "InputSecureValue"],
                ["secure_secret_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.deleteSecureValue",
        [
            0xB880BC4B,
            [
                ["types", ["SecureValueType"], "Vector<SecureValueType>"],
            ],
        ],
    ],
    [
        "account.getAuthorizationForm",
        [
            0xA929597A,
            [
                ["bot_id", "bigint", "long"],
                ["scope", "string", "string"],
                ["public_key", "string", "string"],
            ],
        ],
    ],
    [
        "account.acceptAuthorization",
        [
            0xF3ED4C73,
            [
                ["bot_id", "bigint", "long"],
                ["scope", "string", "string"],
                ["public_key", "string", "string"],
                ["value_hashes", ["SecureValueHash"], "Vector<SecureValueHash>"],
                ["credentials", "SecureCredentialsEncrypted", "SecureCredentialsEncrypted"],
            ],
        ],
    ],
    [
        "account.sendVerifyPhoneCode",
        [
            0xA5A356F9,
            [
                ["phone_number", "string", "string"],
                ["settings", "CodeSettings", "CodeSettings"],
            ],
        ],
    ],
    [
        "account.verifyPhone",
        [
            0x4DD3A7F6,
            [
                ["phone_number", "string", "string"],
                ["phone_code_hash", "string", "string"],
                ["phone_code", "string", "string"],
            ],
        ],
    ],
    [
        "account.sendVerifyEmailCode",
        [
            0x98E037BB,
            [
                ["purpose", "EmailVerifyPurpose", "EmailVerifyPurpose"],
                ["email", "string", "string"],
            ],
        ],
    ],
    [
        "account.verifyEmail",
        [
            0x032DA4CF,
            [
                ["purpose", "EmailVerifyPurpose", "EmailVerifyPurpose"],
                ["verification", "EmailVerification", "EmailVerification"],
            ],
        ],
    ],
    [
        "account.initTakeoutSession",
        [
            0x8EF3EAB0,
            [
                ["flags", flags, "#"],
                ["contacts", "true", "flags.0?true"],
                ["message_users", "true", "flags.1?true"],
                ["message_chats", "true", "flags.2?true"],
                ["message_megagroups", "true", "flags.3?true"],
                ["message_channels", "true", "flags.4?true"],
                ["files", "true", "flags.5?true"],
                ["file_max_size", "bigint", "flags.5?long"],
            ],
        ],
    ],
    [
        "account.finishTakeoutSession",
        [
            0x1D2652EE,
            [
                ["flags", flags, "#"],
                ["success", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "account.confirmPasswordEmail",
        [
            0x8FDF1920,
            [
                ["code", "string", "string"],
            ],
        ],
    ],
    [
        "account.resendPasswordEmail",
        [
            0x7A7F2A15,
            [],
        ],
    ],
    [
        "account.cancelPasswordEmail",
        [
            0xC1CBD5B6,
            [],
        ],
    ],
    [
        "account.getContactSignUpNotification",
        [
            0x9F07C728,
            [],
        ],
    ],
    [
        "account.setContactSignUpNotification",
        [
            0xCFF43F61,
            [
                ["silent", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.getNotifyExceptions",
        [
            0x53577479,
            [
                ["flags", flags, "#"],
                ["compare_sound", "true", "flags.1?true"],
                ["compare_stories", "true", "flags.2?true"],
                ["peer", "InputNotifyPeer", "flags.0?InputNotifyPeer"],
            ],
        ],
    ],
    [
        "account.getWallPaper",
        [
            0xFC8DDBEA,
            [
                ["wallpaper", "InputWallPaper", "InputWallPaper"],
            ],
        ],
    ],
    [
        "account.uploadWallPaper",
        [
            0xE39A8F03,
            [
                ["flags", flags, "#"],
                ["for_chat", "true", "flags.0?true"],
                ["file", "InputFile", "InputFile"],
                ["mime_type", "string", "string"],
                ["settings", "WallPaperSettings", "WallPaperSettings"],
            ],
        ],
    ],
    [
        "account.saveWallPaper",
        [
            0x6C5A5B37,
            [
                ["wallpaper", "InputWallPaper", "InputWallPaper"],
                ["unsave", "boolean", "Bool"],
                ["settings", "WallPaperSettings", "WallPaperSettings"],
            ],
        ],
    ],
    [
        "account.installWallPaper",
        [
            0xFEED5769,
            [
                ["wallpaper", "InputWallPaper", "InputWallPaper"],
                ["settings", "WallPaperSettings", "WallPaperSettings"],
            ],
        ],
    ],
    [
        "account.resetWallPapers",
        [
            0xBB3B9804,
            [],
        ],
    ],
    [
        "account.getAutoDownloadSettings",
        [
            0x56DA0B3F,
            [],
        ],
    ],
    [
        "account.saveAutoDownloadSettings",
        [
            0x76F36233,
            [
                ["flags", flags, "#"],
                ["low", "true", "flags.0?true"],
                ["high", "true", "flags.1?true"],
                ["settings", "AutoDownloadSettings", "AutoDownloadSettings"],
            ],
        ],
    ],
    [
        "account.uploadTheme",
        [
            0x1C3DB333,
            [
                ["flags", flags, "#"],
                ["file", "InputFile", "InputFile"],
                ["thumb", "InputFile", "flags.0?InputFile"],
                ["file_name", "string", "string"],
                ["mime_type", "string", "string"],
            ],
        ],
    ],
    [
        "account.createTheme",
        [
            0x652E4400,
            [
                ["flags", flags, "#"],
                ["slug", "string", "string"],
                ["title", "string", "string"],
                ["document", "InputDocument", "flags.2?InputDocument"],
                ["settings", ["InputThemeSettings"], "flags.3?Vector<InputThemeSettings>"],
            ],
        ],
    ],
    [
        "account.updateTheme",
        [
            0x2BF40CCC,
            [
                ["flags", flags, "#"],
                ["format", "string", "string"],
                ["theme", "InputTheme", "InputTheme"],
                ["slug", "string", "flags.0?string"],
                ["title", "string", "flags.1?string"],
                ["document", "InputDocument", "flags.2?InputDocument"],
                ["settings", ["InputThemeSettings"], "flags.3?Vector<InputThemeSettings>"],
            ],
        ],
    ],
    [
        "account.saveTheme",
        [
            0xF257106C,
            [
                ["theme", "InputTheme", "InputTheme"],
                ["unsave", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.installTheme",
        [
            0xC727BB3B,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["theme", "InputTheme", "flags.1?InputTheme"],
                ["format", "string", "flags.2?string"],
                ["base_theme", "BaseTheme", "flags.3?BaseTheme"],
            ],
        ],
    ],
    [
        "account.getTheme",
        [
            0x3A5869EC,
            [
                ["format", "string", "string"],
                ["theme", "InputTheme", "InputTheme"],
            ],
        ],
    ],
    [
        "account.getThemes",
        [
            0x7206E458,
            [
                ["format", "string", "string"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.setContentSettings",
        [
            0xB574B16B,
            [
                ["flags", flags, "#"],
                ["sensitive_enabled", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "account.getContentSettings",
        [
            0x8B9B4DAE,
            [],
        ],
    ],
    [
        "account.getMultiWallPapers",
        [
            0x65AD71DC,
            [
                ["wallpapers", ["InputWallPaper"], "Vector<InputWallPaper>"],
            ],
        ],
    ],
    [
        "account.getGlobalPrivacySettings",
        [
            0xEB2B4CF6,
            [],
        ],
    ],
    [
        "account.setGlobalPrivacySettings",
        [
            0x1EDAAAC2,
            [
                ["settings", "GlobalPrivacySettings", "GlobalPrivacySettings"],
            ],
        ],
    ],
    [
        "account.reportProfilePhoto",
        [
            0xFA8CC6F5,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["photo_id", "InputPhoto", "InputPhoto"],
                ["reason", "ReportReason", "ReportReason"],
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "account.resetPassword",
        [
            0x9308CE1B,
            [],
        ],
    ],
    [
        "account.declinePasswordReset",
        [
            0x4C9409F6,
            [],
        ],
    ],
    [
        "account.getChatThemes",
        [
            0xD638DE89,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.setAuthorizationTTL",
        [
            0xBF899AA0,
            [
                ["authorization_ttl_days", "number", "int"],
            ],
        ],
    ],
    [
        "account.changeAuthorizationSettings",
        [
            0x40F48462,
            [
                ["flags", flags, "#"],
                ["confirmed", "true", "flags.3?true"],
                ["hash", "bigint", "long"],
                ["encrypted_requests_disabled", "boolean", "flags.0?Bool"],
                ["call_requests_disabled", "boolean", "flags.1?Bool"],
            ],
        ],
    ],
    [
        "account.getSavedRingtones",
        [
            0xE1902288,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.saveRingtone",
        [
            0x3DEA5B03,
            [
                ["id", "InputDocument", "InputDocument"],
                ["unsave", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.uploadRingtone",
        [
            0x831A83A2,
            [
                ["file", "InputFile", "InputFile"],
                ["file_name", "string", "string"],
                ["mime_type", "string", "string"],
            ],
        ],
    ],
    [
        "account.updateEmojiStatus",
        [
            0xFBD3DE6B,
            [
                ["emoji_status", "EmojiStatus", "EmojiStatus"],
            ],
        ],
    ],
    [
        "account.getDefaultEmojiStatuses",
        [
            0xD6753386,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getRecentEmojiStatuses",
        [
            0x0F578105,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.clearRecentEmojiStatuses",
        [
            0x18201AAE,
            [],
        ],
    ],
    [
        "account.reorderUsernames",
        [
            0xEF500EAB,
            [
                ["order", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "account.toggleUsername",
        [
            0x58D6B376,
            [
                ["username", "string", "string"],
                ["active", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.getDefaultProfilePhotoEmojis",
        [
            0xE2750328,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getDefaultGroupPhotoEmojis",
        [
            0x915860AE,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getAutoSaveSettings",
        [
            0xADCBBCDA,
            [],
        ],
    ],
    [
        "account.saveAutoSaveSettings",
        [
            0xD69B8361,
            [
                ["flags", flags, "#"],
                ["users", "true", "flags.0?true"],
                ["chats", "true", "flags.1?true"],
                ["broadcasts", "true", "flags.2?true"],
                ["peer", "InputPeer", "flags.3?InputPeer"],
                ["settings", "AutoSaveSettings", "AutoSaveSettings"],
            ],
        ],
    ],
    [
        "account.deleteAutoSaveExceptions",
        [
            0x53BC0020,
            [],
        ],
    ],
    [
        "account.invalidateSignInCodes",
        [
            0xCA8AE8BA,
            [
                ["codes", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "account.updateColor",
        [
            0x7CEFA15D,
            [
                ["flags", flags, "#"],
                ["for_profile", "true", "flags.1?true"],
                ["color", "number", "flags.2?int"],
                ["background_emoji_id", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "account.getDefaultBackgroundEmojis",
        [
            0xA60AB9CE,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getChannelDefaultEmojiStatuses",
        [
            0x7727A7D5,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.getChannelRestrictedStatusEmojis",
        [
            0x35A9E0D5,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "account.updateBusinessWorkHours",
        [
            0x4B00E066,
            [
                ["flags", flags, "#"],
                ["business_work_hours", "BusinessWorkHours", "flags.0?BusinessWorkHours"],
            ],
        ],
    ],
    [
        "account.updateBusinessLocation",
        [
            0x9E6B131A,
            [
                ["flags", flags, "#"],
                ["geo_point", "InputGeoPoint", "flags.1?InputGeoPoint"],
                ["address", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "account.updateBusinessGreetingMessage",
        [
            0x66CDAFC4,
            [
                ["flags", flags, "#"],
                ["message", "InputBusinessGreetingMessage", "flags.0?InputBusinessGreetingMessage"],
            ],
        ],
    ],
    [
        "account.updateBusinessAwayMessage",
        [
            0xA26A7FA5,
            [
                ["flags", flags, "#"],
                ["message", "InputBusinessAwayMessage", "flags.0?InputBusinessAwayMessage"],
            ],
        ],
    ],
    [
        "account.updateConnectedBot",
        [
            0x43D8521D,
            [
                ["flags", flags, "#"],
                ["can_reply", "true", "flags.0?true"],
                ["deleted", "true", "flags.1?true"],
                ["bot", "InputUser", "InputUser"],
                ["recipients", "InputBusinessBotRecipients", "InputBusinessBotRecipients"],
            ],
        ],
    ],
    [
        "account.getConnectedBots",
        [
            0x4EA4C80F,
            [],
        ],
    ],
    [
        "account.getBotBusinessConnection",
        [
            0x76A86270,
            [
                ["connection_id", "string", "string"],
            ],
        ],
    ],
    [
        "account.updateBusinessIntro",
        [
            0xA614D034,
            [
                ["flags", flags, "#"],
                ["intro", "InputBusinessIntro", "flags.0?InputBusinessIntro"],
            ],
        ],
    ],
    [
        "account.toggleConnectedBotPaused",
        [
            0x646E1097,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["paused", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.disablePeerConnectedBot",
        [
            0x5E437ED9,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "account.updateBirthday",
        [
            0xCC6E0C11,
            [
                ["flags", flags, "#"],
                ["birthday", "Birthday", "flags.0?Birthday"],
            ],
        ],
    ],
    [
        "account.createBusinessChatLink",
        [
            0x8851E68E,
            [
                ["link", "InputBusinessChatLink", "InputBusinessChatLink"],
            ],
        ],
    ],
    [
        "account.editBusinessChatLink",
        [
            0x8C3410AF,
            [
                ["slug", "string", "string"],
                ["link", "InputBusinessChatLink", "InputBusinessChatLink"],
            ],
        ],
    ],
    [
        "account.deleteBusinessChatLink",
        [
            0x60073674,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "account.getBusinessChatLinks",
        [
            0x6F70DDE1,
            [],
        ],
    ],
    [
        "account.resolveBusinessChatLink",
        [
            0x5492E5EE,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "account.updatePersonalChannel",
        [
            0xD94305E0,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "account.toggleSponsoredMessages",
        [
            0xB9D9A38D,
            [
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "account.getReactionsNotifySettings",
        [
            0x06DD654C,
            [],
        ],
    ],
    [
        "account.setReactionsNotifySettings",
        [
            0x316CE548,
            [
                ["settings", "ReactionsNotifySettings", "ReactionsNotifySettings"],
            ],
        ],
    ],
    [
        "users.getUsers",
        [
            0x0D91A548,
            [
                ["id", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "users.getFullUser",
        [
            0xB60F5918,
            [
                ["id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "users.setSecureValueErrors",
        [
            0x90C894B5,
            [
                ["id", "InputUser", "InputUser"],
                ["errors", ["SecureValueError"], "Vector<SecureValueError>"],
            ],
        ],
    ],
    [
        "users.getIsPremiumRequiredToContact",
        [
            0xA622AA10,
            [
                ["id", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "contacts.getContactIDs",
        [
            0x7ADC669D,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "contacts.getStatuses",
        [
            0xC4A353EE,
            [],
        ],
    ],
    [
        "contacts.getContacts",
        [
            0x5DD69E12,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "contacts.importContacts",
        [
            0x2C800BE5,
            [
                ["contacts", ["InputContact"], "Vector<InputContact>"],
            ],
        ],
    ],
    [
        "contacts.deleteContacts",
        [
            0x096A0E00,
            [
                ["id", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "contacts.deleteByPhones",
        [
            0x1013FD9E,
            [
                ["phones", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "contacts.block",
        [
            0x2E2E8734,
            [
                ["flags", flags, "#"],
                ["my_stories_from", "true", "flags.0?true"],
                ["id", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "contacts.unblock",
        [
            0xB550D328,
            [
                ["flags", flags, "#"],
                ["my_stories_from", "true", "flags.0?true"],
                ["id", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "contacts.getBlocked",
        [
            0x9A868F80,
            [
                ["flags", flags, "#"],
                ["my_stories_from", "true", "flags.0?true"],
                ["offset", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "contacts.search",
        [
            0x11F812D8,
            [
                ["q", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "contacts.resolveUsername",
        [
            0xF93CCBA3,
            [
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "contacts.getTopPeers",
        [
            0x973478B6,
            [
                ["flags", flags, "#"],
                ["correspondents", "true", "flags.0?true"],
                ["bots_pm", "true", "flags.1?true"],
                ["bots_inline", "true", "flags.2?true"],
                ["phone_calls", "true", "flags.3?true"],
                ["forward_users", "true", "flags.4?true"],
                ["forward_chats", "true", "flags.5?true"],
                ["groups", "true", "flags.10?true"],
                ["channels", "true", "flags.15?true"],
                ["offset", "number", "int"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "contacts.resetTopPeerRating",
        [
            0x1AE373AC,
            [
                ["category", "TopPeerCategory", "TopPeerCategory"],
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "contacts.resetSaved",
        [
            0x879537F1,
            [],
        ],
    ],
    [
        "contacts.getSaved",
        [
            0x82F1E39F,
            [],
        ],
    ],
    [
        "contacts.toggleTopPeers",
        [
            0x8514BDDA,
            [
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "contacts.addContact",
        [
            0xE8F463D0,
            [
                ["flags", flags, "#"],
                ["add_phone_privacy_exception", "true", "flags.0?true"],
                ["id", "InputUser", "InputUser"],
                ["first_name", "string", "string"],
                ["last_name", "string", "string"],
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "contacts.acceptContact",
        [
            0xF831A20F,
            [
                ["id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "contacts.getLocated",
        [
            0xD348BC44,
            [
                ["flags", flags, "#"],
                ["background", "true", "flags.1?true"],
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["self_expires", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "contacts.blockFromReplies",
        [
            0x29A8962C,
            [
                ["flags", flags, "#"],
                ["delete_message", "true", "flags.0?true"],
                ["delete_history", "true", "flags.1?true"],
                ["report_spam", "true", "flags.2?true"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "contacts.resolvePhone",
        [
            0x8AF94344,
            [
                ["phone", "string", "string"],
            ],
        ],
    ],
    [
        "contacts.exportContactToken",
        [
            0xF8654027,
            [],
        ],
    ],
    [
        "contacts.importContactToken",
        [
            0x13005788,
            [
                ["token", "string", "string"],
            ],
        ],
    ],
    [
        "contacts.editCloseFriends",
        [
            0xBA6705F0,
            [
                ["id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "contacts.setBlocked",
        [
            0x94C65C76,
            [
                ["flags", flags, "#"],
                ["my_stories_from", "true", "flags.0?true"],
                ["id", ["InputPeer"], "Vector<InputPeer>"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "contacts.getBirthdays",
        [
            0xDAEDA864,
            [],
        ],
    ],
    [
        "messages.getMessages",
        [
            0x63C66506,
            [
                ["id", ["InputMessage"], "Vector<InputMessage>"],
            ],
        ],
    ],
    [
        "messages.getDialogs",
        [
            0xA0F4CB4F,
            [
                ["flags", flags, "#"],
                ["exclude_pinned", "true", "flags.0?true"],
                ["folder_id", "number", "flags.1?int"],
                ["offset_date", "number", "int"],
                ["offset_id", "number", "int"],
                ["offset_peer", "InputPeer", "InputPeer"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getHistory",
        [
            0x4423E6C5,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["offset_date", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.search",
        [
            0x29EE847A,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["q", "string", "string"],
                ["from_id", "InputPeer", "flags.0?InputPeer"],
                ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
                ["saved_reaction", ["Reaction"], "flags.3?Vector<Reaction>"],
                ["top_msg_id", "number", "flags.1?int"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["min_date", "number", "int"],
                ["max_date", "number", "int"],
                ["offset_id", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.readHistory",
        [
            0x0E306D3A,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.deleteHistory",
        [
            0xB08F922A,
            [
                ["flags", flags, "#"],
                ["just_clear", "true", "flags.0?true"],
                ["revoke", "true", "flags.1?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["max_id", "number", "int"],
                ["min_date", "number", "flags.2?int"],
                ["max_date", "number", "flags.3?int"],
            ],
        ],
    ],
    [
        "messages.deleteMessages",
        [
            0xE58E95D2,
            [
                ["flags", flags, "#"],
                ["revoke", "true", "flags.0?true"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.receivedMessages",
        [
            0x05A954C0,
            [
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setTyping",
        [
            0x58943EE2,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
                ["action", "SendMessageAction", "SendMessageAction"],
            ],
        ],
    ],
    [
        "messages.sendMessage",
        [
            0x983F9745,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.1?true"],
                ["silent", "true", "flags.5?true"],
                ["background", "true", "flags.6?true"],
                ["clear_draft", "true", "flags.7?true"],
                ["noforwards", "true", "flags.14?true"],
                ["update_stickersets_order", "true", "flags.15?true"],
                ["invert_media", "true", "flags.16?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["message", "string", "string"],
                ["random_id", "bigint", "long"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["schedule_date", "number", "flags.10?int"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
                ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
                ["effect", "bigint", "flags.18?long"],
            ],
        ],
    ],
    [
        "messages.sendMedia",
        [
            0x7852834E,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.5?true"],
                ["background", "true", "flags.6?true"],
                ["clear_draft", "true", "flags.7?true"],
                ["noforwards", "true", "flags.14?true"],
                ["update_stickersets_order", "true", "flags.15?true"],
                ["invert_media", "true", "flags.16?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["media", "InputMedia", "InputMedia"],
                ["message", "string", "string"],
                ["random_id", "bigint", "long"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["schedule_date", "number", "flags.10?int"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
                ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
                ["effect", "bigint", "flags.18?long"],
            ],
        ],
    ],
    [
        "messages.forwardMessages",
        [
            0xD5039208,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.5?true"],
                ["background", "true", "flags.6?true"],
                ["with_my_score", "true", "flags.8?true"],
                ["drop_author", "true", "flags.11?true"],
                ["drop_media_captions", "true", "flags.12?true"],
                ["noforwards", "true", "flags.14?true"],
                ["from_peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
                ["random_id", ["bigint"], "Vector<long>"],
                ["to_peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.9?int"],
                ["schedule_date", "number", "flags.10?int"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
                ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
            ],
        ],
    ],
    [
        "messages.reportSpam",
        [
            0xCF1592DB,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.getPeerSettings",
        [
            0xEFD9A6A2,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.report",
        [
            0x8953AB4E,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
                ["reason", "ReportReason", "ReportReason"],
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getChats",
        [
            0x49E9528F,
            [
                ["id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.getFullChat",
        [
            0xAEB00B34,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.editChatTitle",
        [
            0x73783FFD,
            [
                ["chat_id", "bigint", "long"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "messages.editChatPhoto",
        [
            0x35DDD674,
            [
                ["chat_id", "bigint", "long"],
                ["photo", "InputChatPhoto", "InputChatPhoto"],
            ],
        ],
    ],
    [
        "messages.addChatUser",
        [
            0xCBC6D107,
            [
                ["chat_id", "bigint", "long"],
                ["user_id", "InputUser", "InputUser"],
                ["fwd_limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.deleteChatUser",
        [
            0xA2185CAB,
            [
                ["flags", flags, "#"],
                ["revoke_history", "true", "flags.0?true"],
                ["chat_id", "bigint", "long"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.createChat",
        [
            0x92CEDDD4,
            [
                ["flags", flags, "#"],
                ["users", ["InputUser"], "Vector<InputUser>"],
                ["title", "string", "string"],
                ["ttl_period", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messages.getDhConfig",
        [
            0x26CF8950,
            [
                ["version", "number", "int"],
                ["random_length", "number", "int"],
            ],
        ],
    ],
    [
        "messages.requestEncryption",
        [
            0xF64DAF43,
            [
                ["user_id", "InputUser", "InputUser"],
                ["random_id", "number", "int"],
                ["g_a", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.acceptEncryption",
        [
            0x3DBC0415,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["g_b", Uint8Array, "bytes"],
                ["key_fingerprint", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.discardEncryption",
        [
            0xF393AEA0,
            [
                ["flags", flags, "#"],
                ["delete_history", "true", "flags.0?true"],
                ["chat_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setEncryptedTyping",
        [
            0x791451ED,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["typing", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.readEncryptedHistory",
        [
            0x7F4B690A,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["max_date", "number", "int"],
            ],
        ],
    ],
    [
        "messages.sendEncrypted",
        [
            0x44FA7A15,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.0?true"],
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["random_id", "bigint", "long"],
                ["data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.sendEncryptedFile",
        [
            0x5559481D,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.0?true"],
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["random_id", "bigint", "long"],
                ["data", Uint8Array, "bytes"],
                ["file", "InputEncryptedFile", "InputEncryptedFile"],
            ],
        ],
    ],
    [
        "messages.sendEncryptedService",
        [
            0x32D439A4,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["random_id", "bigint", "long"],
                ["data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "messages.receivedQueue",
        [
            0x55A5BB66,
            [
                ["max_qts", "number", "int"],
            ],
        ],
    ],
    [
        "messages.reportEncryptedSpam",
        [
            0x4B0C8C0F,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
            ],
        ],
    ],
    [
        "messages.readMessageContents",
        [
            0x36A73F77,
            [
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.getStickers",
        [
            0xD5A5D3A1,
            [
                ["emoticon", "string", "string"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getAllStickers",
        [
            0xB8A0A1A8,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getWebPagePreview",
        [
            0x8B68B0CC,
            [
                ["flags", flags, "#"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "messages.exportChatInvite",
        [
            0xA02CE5D5,
            [
                ["flags", flags, "#"],
                ["legacy_revoke_permanent", "true", "flags.2?true"],
                ["request_needed", "true", "flags.3?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["expire_date", "number", "flags.0?int"],
                ["usage_limit", "number", "flags.1?int"],
                ["title", "string", "flags.4?string"],
            ],
        ],
    ],
    [
        "messages.checkChatInvite",
        [
            0x3EADB1BB,
            [
                ["hash", "string", "string"],
            ],
        ],
    ],
    [
        "messages.importChatInvite",
        [
            0x6C50051C,
            [
                ["hash", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getStickerSet",
        [
            0xC8A0EC74,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.installStickerSet",
        [
            0xC78FE460,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["archived", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.uninstallStickerSet",
        [
            0xF96E55DE,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "messages.startBot",
        [
            0xE6DF7378,
            [
                ["bot", "InputUser", "InputUser"],
                ["peer", "InputPeer", "InputPeer"],
                ["random_id", "bigint", "long"],
                ["start_param", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getMessagesViews",
        [
            0x5784D3E1,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
                ["increment", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.editChatAdmin",
        [
            0xA85BD1C2,
            [
                ["chat_id", "bigint", "long"],
                ["user_id", "InputUser", "InputUser"],
                ["is_admin", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.migrateChat",
        [
            0xA2875319,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.searchGlobal",
        [
            0x4BC6589A,
            [
                ["flags", flags, "#"],
                ["broadcasts_only", "true", "flags.1?true"],
                ["folder_id", "number", "flags.0?int"],
                ["q", "string", "string"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["min_date", "number", "int"],
                ["max_date", "number", "int"],
                ["offset_rate", "number", "int"],
                ["offset_peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.reorderStickerSets",
        [
            0x78337739,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.1?true"],
                ["order", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.getDocumentByHash",
        [
            0xB1F2061F,
            [
                ["sha256", Uint8Array, "bytes"],
                ["size", "bigint", "long"],
                ["mime_type", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getSavedGifs",
        [
            0x5CF09635,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.saveGif",
        [
            0x327A30CB,
            [
                ["id", "InputDocument", "InputDocument"],
                ["unsave", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.getInlineBotResults",
        [
            0x514E999D,
            [
                ["flags", flags, "#"],
                ["bot", "InputUser", "InputUser"],
                ["peer", "InputPeer", "InputPeer"],
                ["geo_point", "InputGeoPoint", "flags.0?InputGeoPoint"],
                ["query", "string", "string"],
                ["offset", "string", "string"],
            ],
        ],
    ],
    [
        "messages.setInlineBotResults",
        [
            0xBB12A419,
            [
                ["flags", flags, "#"],
                ["gallery", "true", "flags.0?true"],
                ["private", "true", "flags.1?true"],
                ["query_id", "bigint", "long"],
                ["results", ["InputBotInlineResult"], "Vector<InputBotInlineResult>"],
                ["cache_time", "number", "int"],
                ["next_offset", "string", "flags.2?string"],
                ["switch_pm", "InlineBotSwitchPM", "flags.3?InlineBotSwitchPM"],
                ["switch_webview", "InlineBotWebView", "flags.4?InlineBotWebView"],
            ],
        ],
    ],
    [
        "messages.sendInlineBotResult",
        [
            0x3EBEE86A,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.5?true"],
                ["background", "true", "flags.6?true"],
                ["clear_draft", "true", "flags.7?true"],
                ["hide_via", "true", "flags.11?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["random_id", "bigint", "long"],
                ["query_id", "bigint", "long"],
                ["id", "string", "string"],
                ["schedule_date", "number", "flags.10?int"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
                ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
            ],
        ],
    ],
    [
        "messages.getMessageEditData",
        [
            0xFDA68D36,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.editMessage",
        [
            0xDFD14005,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.1?true"],
                ["invert_media", "true", "flags.16?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["message", "string", "flags.11?string"],
                ["media", "InputMedia", "flags.14?InputMedia"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["schedule_date", "number", "flags.15?int"],
                ["quick_reply_shortcut_id", "number", "flags.17?int"],
            ],
        ],
    ],
    [
        "messages.editInlineBotMessage",
        [
            0x83557DBA,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.1?true"],
                ["invert_media", "true", "flags.16?true"],
                ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
                ["message", "string", "flags.11?string"],
                ["media", "InputMedia", "flags.14?InputMedia"],
                ["reply_markup", "ReplyMarkup", "flags.2?ReplyMarkup"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "messages.getBotCallbackAnswer",
        [
            0x9342CA07,
            [
                ["flags", flags, "#"],
                ["game", "true", "flags.1?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["data", Uint8Array, "flags.0?bytes"],
                ["password", "InputCheckPasswordSRP", "flags.2?InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "messages.setBotCallbackAnswer",
        [
            0xD58F130A,
            [
                ["flags", flags, "#"],
                ["alert", "true", "flags.1?true"],
                ["query_id", "bigint", "long"],
                ["message", "string", "flags.0?string"],
                ["url", "string", "flags.2?string"],
                ["cache_time", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getPeerDialogs",
        [
            0xE470BCFD,
            [
                ["peers", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
            ],
        ],
    ],
    [
        "messages.saveDraft",
        [
            0xD372C5CE,
            [
                ["flags", flags, "#"],
                ["no_webpage", "true", "flags.1?true"],
                ["invert_media", "true", "flags.6?true"],
                ["reply_to", "InputReplyTo", "flags.4?InputReplyTo"],
                ["peer", "InputPeer", "InputPeer"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "flags.3?Vector<MessageEntity>"],
                ["media", "InputMedia", "flags.5?InputMedia"],
                ["effect", "bigint", "flags.7?long"],
            ],
        ],
    ],
    [
        "messages.getAllDrafts",
        [
            0x6A3F8D65,
            [],
        ],
    ],
    [
        "messages.getFeaturedStickers",
        [
            0x64780B14,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.readFeaturedStickers",
        [
            0x5B118126,
            [
                ["id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.getRecentStickers",
        [
            0x9DA9403B,
            [
                ["flags", flags, "#"],
                ["attached", "true", "flags.0?true"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.saveRecentSticker",
        [
            0x392718F8,
            [
                ["flags", flags, "#"],
                ["attached", "true", "flags.0?true"],
                ["id", "InputDocument", "InputDocument"],
                ["unsave", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.clearRecentStickers",
        [
            0x8999602D,
            [
                ["flags", flags, "#"],
                ["attached", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "messages.getArchivedStickers",
        [
            0x57F17692,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.1?true"],
                ["offset_id", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getMaskStickers",
        [
            0x640F82B8,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getAttachedStickers",
        [
            0xCC5B67CC,
            [
                ["media", "InputStickeredMedia", "InputStickeredMedia"],
            ],
        ],
    ],
    [
        "messages.setGameScore",
        [
            0x8EF8ECC0,
            [
                ["flags", flags, "#"],
                ["edit_message", "true", "flags.0?true"],
                ["force", "true", "flags.1?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["user_id", "InputUser", "InputUser"],
                ["score", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setInlineGameScore",
        [
            0x15AD9F64,
            [
                ["flags", flags, "#"],
                ["edit_message", "true", "flags.0?true"],
                ["force", "true", "flags.1?true"],
                ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
                ["user_id", "InputUser", "InputUser"],
                ["score", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getGameHighScores",
        [
            0xE822649D,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.getInlineGameHighScores",
        [
            0x0F635E1B,
            [
                ["id", "InputBotInlineMessageID", "InputBotInlineMessageID"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.getCommonChats",
        [
            0xE40CA104,
            [
                ["user_id", "InputUser", "InputUser"],
                ["max_id", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getWebPage",
        [
            0x8D9692A3,
            [
                ["url", "string", "string"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.toggleDialogPin",
        [
            0xA731E257,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["peer", "InputDialogPeer", "InputDialogPeer"],
            ],
        ],
    ],
    [
        "messages.reorderPinnedDialogs",
        [
            0x3B1ADF37,
            [
                ["flags", flags, "#"],
                ["force", "true", "flags.0?true"],
                ["folder_id", "number", "int"],
                ["order", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
            ],
        ],
    ],
    [
        "messages.getPinnedDialogs",
        [
            0xD6B94DF2,
            [
                ["folder_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setBotShippingResults",
        [
            0xE5F672FA,
            [
                ["flags", flags, "#"],
                ["query_id", "bigint", "long"],
                ["error", "string", "flags.0?string"],
                ["shipping_options", ["ShippingOption"], "flags.1?Vector<ShippingOption>"],
            ],
        ],
    ],
    [
        "messages.setBotPrecheckoutResults",
        [
            0x09C2DD95,
            [
                ["flags", flags, "#"],
                ["success", "true", "flags.1?true"],
                ["query_id", "bigint", "long"],
                ["error", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "messages.uploadMedia",
        [
            0x14967978,
            [
                ["flags", flags, "#"],
                ["business_connection_id", "string", "flags.0?string"],
                ["peer", "InputPeer", "InputPeer"],
                ["media", "InputMedia", "InputMedia"],
            ],
        ],
    ],
    [
        "messages.sendScreenshotNotification",
        [
            0xA1405817,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["reply_to", "InputReplyTo", "InputReplyTo"],
                ["random_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getFavedStickers",
        [
            0x04F1AAA9,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.faveSticker",
        [
            0xB9FFC55B,
            [
                ["id", "InputDocument", "InputDocument"],
                ["unfave", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.getUnreadMentions",
        [
            0xF107E790,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
                ["offset_id", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.readMentions",
        [
            0x36E5BF4D,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messages.getRecentLocations",
        [
            0x702A40E0,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.sendMultiMedia",
        [
            0x37B74355,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.5?true"],
                ["background", "true", "flags.6?true"],
                ["clear_draft", "true", "flags.7?true"],
                ["noforwards", "true", "flags.14?true"],
                ["update_stickersets_order", "true", "flags.15?true"],
                ["invert_media", "true", "flags.16?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["multi_media", ["InputSingleMedia"], "Vector<InputSingleMedia>"],
                ["schedule_date", "number", "flags.10?int"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
                ["quick_reply_shortcut", "InputQuickReplyShortcut", "flags.17?InputQuickReplyShortcut"],
                ["effect", "bigint", "flags.18?long"],
            ],
        ],
    ],
    [
        "messages.uploadEncryptedFile",
        [
            0x5057C497,
            [
                ["peer", "InputEncryptedChat", "InputEncryptedChat"],
                ["file", "InputEncryptedFile", "InputEncryptedFile"],
            ],
        ],
    ],
    [
        "messages.searchStickerSets",
        [
            0x35705B8A,
            [
                ["flags", flags, "#"],
                ["exclude_featured", "true", "flags.0?true"],
                ["q", "string", "string"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getSplitRanges",
        [
            0x1CFF7E08,
            [],
        ],
    ],
    [
        "messages.markDialogUnread",
        [
            0xC286D98F,
            [
                ["flags", flags, "#"],
                ["unread", "true", "flags.0?true"],
                ["peer", "InputDialogPeer", "InputDialogPeer"],
            ],
        ],
    ],
    [
        "messages.getDialogUnreadMarks",
        [
            0x22E24E22,
            [],
        ],
    ],
    [
        "messages.clearAllDrafts",
        [
            0x7E58EE9C,
            [],
        ],
    ],
    [
        "messages.updatePinnedMessage",
        [
            0xD2AAF7EC,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.0?true"],
                ["unpin", "true", "flags.1?true"],
                ["pm_oneside", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.sendVote",
        [
            0x10EA6184,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["options", [Uint8Array], "Vector<bytes>"],
            ],
        ],
    ],
    [
        "messages.getPollResults",
        [
            0x73BB643B,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getOnlines",
        [
            0x6E2BE050,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.editChatAbout",
        [
            0xDEF60797,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["about", "string", "string"],
            ],
        ],
    ],
    [
        "messages.editChatDefaultBannedRights",
        [
            0xA5866B41,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
            ],
        ],
    ],
    [
        "messages.getEmojiKeywords",
        [
            0x35A0E062,
            [
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getEmojiKeywordsDifference",
        [
            0x1508B6AF,
            [
                ["lang_code", "string", "string"],
                ["from_version", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getEmojiKeywordsLanguages",
        [
            0x4E9963B2,
            [
                ["lang_codes", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "messages.getEmojiURL",
        [
            0xD5B10C26,
            [
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getSearchCounters",
        [
            0x1BBCF300,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
                ["filters", ["MessagesFilter"], "Vector<MessagesFilter>"],
            ],
        ],
    ],
    [
        "messages.requestUrlAuth",
        [
            0x198FB446,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "flags.1?InputPeer"],
                ["msg_id", "number", "flags.1?int"],
                ["button_id", "number", "flags.1?int"],
                ["url", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "messages.acceptUrlAuth",
        [
            0xB12C7125,
            [
                ["flags", flags, "#"],
                ["write_allowed", "true", "flags.0?true"],
                ["peer", "InputPeer", "flags.1?InputPeer"],
                ["msg_id", "number", "flags.1?int"],
                ["button_id", "number", "flags.1?int"],
                ["url", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "messages.hidePeerSettingsBar",
        [
            0x4FACB138,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.getScheduledHistory",
        [
            0xF516760B,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getScheduledMessages",
        [
            0xBDBB0464,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.sendScheduledMessages",
        [
            0xBD38850A,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.deleteScheduledMessages",
        [
            0x59AE2B16,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.getPollVotes",
        [
            0xB86E380E,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["option", Uint8Array, "flags.0?bytes"],
                ["offset", "string", "flags.1?string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.toggleStickerSets",
        [
            0xB5052FEA,
            [
                ["flags", flags, "#"],
                ["uninstall", "true", "flags.0?true"],
                ["archive", "true", "flags.1?true"],
                ["unarchive", "true", "flags.2?true"],
                ["stickersets", ["InputStickerSet"], "Vector<InputStickerSet>"],
            ],
        ],
    ],
    [
        "messages.getDialogFilters",
        [
            0xEFD48C89,
            [],
        ],
    ],
    [
        "messages.getSuggestedDialogFilters",
        [
            0xA29CD42C,
            [],
        ],
    ],
    [
        "messages.updateDialogFilter",
        [
            0x1AD4A04A,
            [
                ["flags", flags, "#"],
                ["id", "number", "int"],
                ["filter", "DialogFilter", "flags.0?DialogFilter"],
            ],
        ],
    ],
    [
        "messages.updateDialogFiltersOrder",
        [
            0xC563C1E4,
            [
                ["order", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.getOldFeaturedStickers",
        [
            0x7ED094A1,
            [
                ["offset", "number", "int"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getReplies",
        [
            0x22DDD30C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["offset_id", "number", "int"],
                ["offset_date", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getDiscussionMessage",
        [
            0x446972FD,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.readDiscussion",
        [
            0xF731A9F4,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["read_max_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.unpinAllMessages",
        [
            0xEE22B9A8,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messages.deleteChat",
        [
            0x5BD0EE50,
            [
                ["chat_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.deletePhoneCallHistory",
        [
            0xF9CBE409,
            [
                ["flags", flags, "#"],
                ["revoke", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "messages.checkHistoryImport",
        [
            0x43FE19F3,
            [
                ["import_head", "string", "string"],
            ],
        ],
    ],
    [
        "messages.initHistoryImport",
        [
            0x34090C3B,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["file", "InputFile", "InputFile"],
                ["media_count", "number", "int"],
            ],
        ],
    ],
    [
        "messages.uploadImportedMedia",
        [
            0x2A862092,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["import_id", "bigint", "long"],
                ["file_name", "string", "string"],
                ["media", "InputMedia", "InputMedia"],
            ],
        ],
    ],
    [
        "messages.startHistoryImport",
        [
            0xB43DF344,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["import_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getExportedChatInvites",
        [
            0xA2B5A3F6,
            [
                ["flags", flags, "#"],
                ["revoked", "true", "flags.3?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["admin_id", "InputUser", "InputUser"],
                ["offset_date", "number", "flags.2?int"],
                ["offset_link", "string", "flags.2?string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getExportedChatInvite",
        [
            0x73746F5C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["link", "string", "string"],
            ],
        ],
    ],
    [
        "messages.editExportedChatInvite",
        [
            0xBDCA2F75,
            [
                ["flags", flags, "#"],
                ["revoked", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["link", "string", "string"],
                ["expire_date", "number", "flags.0?int"],
                ["usage_limit", "number", "flags.1?int"],
                ["request_needed", "boolean", "flags.3?Bool"],
                ["title", "string", "flags.4?string"],
            ],
        ],
    ],
    [
        "messages.deleteRevokedExportedChatInvites",
        [
            0x56987BD5,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["admin_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.deleteExportedChatInvite",
        [
            0xD464A42B,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["link", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getAdminsWithInvites",
        [
            0x3920E6EF,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.getChatInviteImporters",
        [
            0xDF04DD4E,
            [
                ["flags", flags, "#"],
                ["requested", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["link", "string", "flags.1?string"],
                ["q", "string", "flags.2?string"],
                ["offset_date", "number", "int"],
                ["offset_user", "InputUser", "InputUser"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setHistoryTTL",
        [
            0xB80E5FE4,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["period", "number", "int"],
            ],
        ],
    ],
    [
        "messages.checkHistoryImportPeer",
        [
            0x5DC60F03,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.setChatTheme",
        [
            0xE63BE13F,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["emoticon", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getMessageReadParticipants",
        [
            0x31C1C44F,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getSearchResultsCalendar",
        [
            0x6AA3F6BD,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["offset_id", "number", "int"],
                ["offset_date", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getSearchResultsPositions",
        [
            0x9C7F2F10,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["saved_peer_id", "InputPeer", "flags.2?InputPeer"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["offset_id", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.hideChatJoinRequest",
        [
            0x7FE7E815,
            [
                ["flags", flags, "#"],
                ["approved", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.hideAllChatJoinRequests",
        [
            0xE085F4EA,
            [
                ["flags", flags, "#"],
                ["approved", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["link", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "messages.toggleNoForwards",
        [
            0xB11EAFA2,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.saveDefaultSendAs",
        [
            0xCCFDDF96,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["send_as", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.sendReaction",
        [
            0xD30D78D4,
            [
                ["flags", flags, "#"],
                ["big", "true", "flags.1?true"],
                ["add_to_recent", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["reaction", ["Reaction"], "flags.0?Vector<Reaction>"],
            ],
        ],
    ],
    [
        "messages.getMessagesReactions",
        [
            0x8BBA90E6,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.getMessageReactionsList",
        [
            0x461B3F48,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["reaction", "Reaction", "flags.0?Reaction"],
                ["offset", "string", "flags.1?string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setChatAvailableReactions",
        [
            0x5A150BD4,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["available_reactions", "ChatReactions", "ChatReactions"],
                ["reactions_limit", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messages.getAvailableReactions",
        [
            0x18DEA0AC,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.setDefaultReaction",
        [
            0x4F47A016,
            [
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "messages.translateText",
        [
            0x63183030,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "flags.0?InputPeer"],
                ["id", ["number"], "flags.0?Vector<int>"],
                ["text", ["TextWithEntities"], "flags.1?Vector<TextWithEntities>"],
                ["to_lang", "string", "string"],
            ],
        ],
    ],
    [
        "messages.getUnreadReactions",
        [
            0x3223495B,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
                ["offset_id", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.readReactions",
        [
            0x54AA7F8E,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["top_msg_id", "number", "flags.0?int"],
            ],
        ],
    ],
    [
        "messages.searchSentMedia",
        [
            0x107E31A0,
            [
                ["q", "string", "string"],
                ["filter", "MessagesFilter", "MessagesFilter"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getAttachMenuBots",
        [
            0x16FCC2CB,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getAttachMenuBot",
        [
            0x77216192,
            [
                ["bot", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "messages.toggleBotInAttachMenu",
        [
            0x69F59D69,
            [
                ["flags", flags, "#"],
                ["write_allowed", "true", "flags.0?true"],
                ["bot", "InputUser", "InputUser"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.requestWebView",
        [
            0x269DC2C1,
            [
                ["flags", flags, "#"],
                ["from_bot_menu", "true", "flags.4?true"],
                ["silent", "true", "flags.5?true"],
                ["compact", "true", "flags.7?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["bot", "InputUser", "InputUser"],
                ["url", "string", "flags.1?string"],
                ["start_param", "string", "flags.3?string"],
                ["theme_params", "DataJSON", "flags.2?DataJSON"],
                ["platform", "string", "string"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
            ],
        ],
    ],
    [
        "messages.prolongWebView",
        [
            0xB0D81A83,
            [
                ["flags", flags, "#"],
                ["silent", "true", "flags.5?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["bot", "InputUser", "InputUser"],
                ["query_id", "bigint", "long"],
                ["reply_to", "InputReplyTo", "flags.0?InputReplyTo"],
                ["send_as", "InputPeer", "flags.13?InputPeer"],
            ],
        ],
    ],
    [
        "messages.requestSimpleWebView",
        [
            0x413A3E73,
            [
                ["flags", flags, "#"],
                ["from_switch_webview", "true", "flags.1?true"],
                ["from_side_menu", "true", "flags.2?true"],
                ["compact", "true", "flags.7?true"],
                ["bot", "InputUser", "InputUser"],
                ["url", "string", "flags.3?string"],
                ["start_param", "string", "flags.4?string"],
                ["theme_params", "DataJSON", "flags.0?DataJSON"],
                ["platform", "string", "string"],
            ],
        ],
    ],
    [
        "messages.sendWebViewResultMessage",
        [
            0x0A4314F5,
            [
                ["bot_query_id", "string", "string"],
                ["result", "InputBotInlineResult", "InputBotInlineResult"],
            ],
        ],
    ],
    [
        "messages.sendWebViewData",
        [
            0xDC0242C8,
            [
                ["bot", "InputUser", "InputUser"],
                ["random_id", "bigint", "long"],
                ["button_text", "string", "string"],
                ["data", "string", "string"],
            ],
        ],
    ],
    [
        "messages.transcribeAudio",
        [
            0x269E9A49,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.rateTranscribedAudio",
        [
            0x7F1D072F,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["transcription_id", "bigint", "long"],
                ["good", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.getCustomEmojiDocuments",
        [
            0xD9AB0F54,
            [
                ["document_id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.getEmojiStickers",
        [
            0xFBFCA18F,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getFeaturedEmojiStickers",
        [
            0x0ECF6736,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.reportReaction",
        [
            0x3F64C076,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["reaction_peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.getTopReactions",
        [
            0xBB8125BA,
            [
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getRecentReactions",
        [
            0x39461DB2,
            [
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.clearRecentReactions",
        [
            0x9DFEEFB4,
            [],
        ],
    ],
    [
        "messages.getExtendedMedia",
        [
            0x84F80814,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.setDefaultHistoryTTL",
        [
            0x9EB51445,
            [
                ["period", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getDefaultHistoryTTL",
        [
            0x658B7188,
            [],
        ],
    ],
    [
        "messages.sendBotRequestedPeer",
        [
            0x91B2D060,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["button_id", "number", "int"],
                ["requested_peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "messages.getEmojiGroups",
        [
            0x7488CE5B,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getEmojiStatusGroups",
        [
            0x2ECD56CD,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getEmojiProfilePhotoGroups",
        [
            0x21A548F3,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.searchCustomEmoji",
        [
            0x2C11C0D7,
            [
                ["emoticon", "string", "string"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.togglePeerTranslations",
        [
            0xE47CB579,
            [
                ["flags", flags, "#"],
                ["disabled", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "messages.getBotApp",
        [
            0x34FDC5C3,
            [
                ["app", "InputBotApp", "InputBotApp"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.requestAppWebView",
        [
            0x53618BCE,
            [
                ["flags", flags, "#"],
                ["write_allowed", "true", "flags.0?true"],
                ["compact", "true", "flags.7?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["app", "InputBotApp", "InputBotApp"],
                ["start_param", "string", "flags.1?string"],
                ["theme_params", "DataJSON", "flags.2?DataJSON"],
                ["platform", "string", "string"],
            ],
        ],
    ],
    [
        "messages.setChatWallPaper",
        [
            0x8FFACAE1,
            [
                ["flags", flags, "#"],
                ["for_both", "true", "flags.3?true"],
                ["revert", "true", "flags.4?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["wallpaper", "InputWallPaper", "flags.0?InputWallPaper"],
                ["settings", "WallPaperSettings", "flags.2?WallPaperSettings"],
                ["id", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "messages.searchEmojiStickerSets",
        [
            0x92B4494C,
            [
                ["flags", flags, "#"],
                ["exclude_featured", "true", "flags.0?true"],
                ["q", "string", "string"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getSavedDialogs",
        [
            0x5381D21A,
            [
                ["flags", flags, "#"],
                ["exclude_pinned", "true", "flags.0?true"],
                ["offset_date", "number", "int"],
                ["offset_id", "number", "int"],
                ["offset_peer", "InputPeer", "InputPeer"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getSavedHistory",
        [
            0x3D9A414D,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["offset_date", "number", "int"],
                ["add_offset", "number", "int"],
                ["limit", "number", "int"],
                ["max_id", "number", "int"],
                ["min_id", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.deleteSavedHistory",
        [
            0x6E98102B,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["max_id", "number", "int"],
                ["min_date", "number", "flags.2?int"],
                ["max_date", "number", "flags.3?int"],
            ],
        ],
    ],
    [
        "messages.getPinnedSavedDialogs",
        [
            0xD63D94E0,
            [],
        ],
    ],
    [
        "messages.toggleSavedDialogPin",
        [
            0xAC81BBDE,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.0?true"],
                ["peer", "InputDialogPeer", "InputDialogPeer"],
            ],
        ],
    ],
    [
        "messages.reorderPinnedSavedDialogs",
        [
            0x8B716587,
            [
                ["flags", flags, "#"],
                ["force", "true", "flags.0?true"],
                ["order", ["InputDialogPeer"], "Vector<InputDialogPeer>"],
            ],
        ],
    ],
    [
        "messages.getSavedReactionTags",
        [
            0x3637E05B,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "flags.0?InputPeer"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.updateSavedReactionTag",
        [
            0x60297DEC,
            [
                ["flags", flags, "#"],
                ["reaction", "Reaction", "Reaction"],
                ["title", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "messages.getDefaultTagReactions",
        [
            0xBDF93428,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.getOutboxReadDate",
        [
            0x8C4BFE5D,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getQuickReplies",
        [
            0xD483F2A8,
            [
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.reorderQuickReplies",
        [
            0x60331907,
            [
                ["order", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.checkQuickReplyShortcut",
        [
            0xF1D0FBD3,
            [
                ["shortcut", "string", "string"],
            ],
        ],
    ],
    [
        "messages.editQuickReplyShortcut",
        [
            0x5C003CEF,
            [
                ["shortcut_id", "number", "int"],
                ["shortcut", "string", "string"],
            ],
        ],
    ],
    [
        "messages.deleteQuickReplyShortcut",
        [
            0x3CC04740,
            [
                ["shortcut_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getQuickReplyMessages",
        [
            0x94A495C3,
            [
                ["flags", flags, "#"],
                ["shortcut_id", "number", "int"],
                ["id", ["number"], "flags.0?Vector<int>"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "messages.sendQuickReplyMessages",
        [
            0x6C750DE1,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["shortcut_id", "number", "int"],
                ["id", ["number"], "Vector<int>"],
                ["random_id", ["bigint"], "Vector<long>"],
            ],
        ],
    ],
    [
        "messages.deleteQuickReplyMessages",
        [
            0xE105E910,
            [
                ["shortcut_id", "number", "int"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "messages.toggleDialogFilterTags",
        [
            0xFD2DDA49,
            [
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "messages.getMyStickers",
        [
            0xD0B5E1FC,
            [
                ["offset_id", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getEmojiStickerGroups",
        [
            0x1DD840F5,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getAvailableEffects",
        [
            0xDEA20A39,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "messages.editFactCheck",
        [
            0x0589EE75,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
                ["text", "TextWithEntities", "TextWithEntities"],
            ],
        ],
    ],
    [
        "messages.deleteFactCheck",
        [
            0xD1DA940C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "messages.getFactCheck",
        [
            0xB9CDC5EE,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "updates.getState",
        [
            0xEDD4882A,
            [],
        ],
    ],
    [
        "updates.getDifference",
        [
            0x19C2F763,
            [
                ["flags", flags, "#"],
                ["pts", "number", "int"],
                ["pts_limit", "number", "flags.1?int"],
                ["pts_total_limit", "number", "flags.0?int"],
                ["date", "number", "int"],
                ["qts", "number", "int"],
                ["qts_limit", "number", "flags.2?int"],
            ],
        ],
    ],
    [
        "updates.getChannelDifference",
        [
            0x03173D78,
            [
                ["flags", flags, "#"],
                ["force", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["filter", "ChannelMessagesFilter", "ChannelMessagesFilter"],
                ["pts", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "photos.updateProfilePhoto",
        [
            0x09E82039,
            [
                ["flags", flags, "#"],
                ["fallback", "true", "flags.0?true"],
                ["bot", "InputUser", "flags.1?InputUser"],
                ["id", "InputPhoto", "InputPhoto"],
            ],
        ],
    ],
    [
        "photos.uploadProfilePhoto",
        [
            0x0388A3B5,
            [
                ["flags", flags, "#"],
                ["fallback", "true", "flags.3?true"],
                ["bot", "InputUser", "flags.5?InputUser"],
                ["file", "InputFile", "flags.0?InputFile"],
                ["video", "InputFile", "flags.1?InputFile"],
                ["video_start_ts", "number", "flags.2?double"],
                ["video_emoji_markup", "VideoSize", "flags.4?VideoSize"],
            ],
        ],
    ],
    [
        "photos.deletePhotos",
        [
            0x87CF7F2F,
            [
                ["id", ["InputPhoto"], "Vector<InputPhoto>"],
            ],
        ],
    ],
    [
        "photos.getUserPhotos",
        [
            0x91CD32A8,
            [
                ["user_id", "InputUser", "InputUser"],
                ["offset", "number", "int"],
                ["max_id", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "photos.uploadContactProfilePhoto",
        [
            0xE14C4A71,
            [
                ["flags", flags, "#"],
                ["suggest", "true", "flags.3?true"],
                ["save", "true", "flags.4?true"],
                ["user_id", "InputUser", "InputUser"],
                ["file", "InputFile", "flags.0?InputFile"],
                ["video", "InputFile", "flags.1?InputFile"],
                ["video_start_ts", "number", "flags.2?double"],
                ["video_emoji_markup", "VideoSize", "flags.5?VideoSize"],
            ],
        ],
    ],
    [
        "upload.saveFilePart",
        [
            0xB304A621,
            [
                ["file_id", "bigint", "long"],
                ["file_part", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "upload.getFile",
        [
            0xBE5335BE,
            [
                ["flags", flags, "#"],
                ["precise", "true", "flags.0?true"],
                ["cdn_supported", "true", "flags.1?true"],
                ["location", "InputFileLocation", "InputFileLocation"],
                ["offset", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "upload.saveBigFilePart",
        [
            0xDE7B673D,
            [
                ["file_id", "bigint", "long"],
                ["file_part", "number", "int"],
                ["file_total_parts", "number", "int"],
                ["bytes", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "upload.getWebFile",
        [
            0x24E6818D,
            [
                ["location", "InputWebFileLocation", "InputWebFileLocation"],
                ["offset", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "upload.getCdnFile",
        [
            0x395F69DA,
            [
                ["file_token", Uint8Array, "bytes"],
                ["offset", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "upload.reuploadCdnFile",
        [
            0x9B2754A8,
            [
                ["file_token", Uint8Array, "bytes"],
                ["request_token", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "upload.getCdnFileHashes",
        [
            0x91DC3F31,
            [
                ["file_token", Uint8Array, "bytes"],
                ["offset", "bigint", "long"],
            ],
        ],
    ],
    [
        "upload.getFileHashes",
        [
            0x9156982A,
            [
                ["location", "InputFileLocation", "InputFileLocation"],
                ["offset", "bigint", "long"],
            ],
        ],
    ],
    [
        "help.getConfig",
        [
            0xC4F9186B,
            [],
        ],
    ],
    [
        "help.getNearestDc",
        [
            0x1FB33026,
            [],
        ],
    ],
    [
        "help.getAppUpdate",
        [
            0x522D5A7D,
            [
                ["source", "string", "string"],
            ],
        ],
    ],
    [
        "help.getInviteText",
        [
            0x4D392343,
            [],
        ],
    ],
    [
        "help.getSupport",
        [
            0x9CDF08CD,
            [],
        ],
    ],
    [
        "help.setBotUpdatesStatus",
        [
            0xEC22CFCD,
            [
                ["pending_updates_count", "number", "int"],
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "help.getCdnConfig",
        [
            0x52029342,
            [],
        ],
    ],
    [
        "help.getRecentMeUrls",
        [
            0x3DC0F114,
            [
                ["referer", "string", "string"],
            ],
        ],
    ],
    [
        "help.getTermsOfServiceUpdate",
        [
            0x2CA51FD1,
            [],
        ],
    ],
    [
        "help.acceptTermsOfService",
        [
            0xEE72F79A,
            [
                ["id", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "help.getDeepLinkInfo",
        [
            0x3FEDC75F,
            [
                ["path", "string", "string"],
            ],
        ],
    ],
    [
        "help.getAppConfig",
        [
            0x61E3F854,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "help.saveAppLog",
        [
            0x6F02F748,
            [
                ["events", ["InputAppEvent"], "Vector<InputAppEvent>"],
            ],
        ],
    ],
    [
        "help.getPassportConfig",
        [
            0xC661AD08,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "help.getSupportName",
        [
            0xD360E72C,
            [],
        ],
    ],
    [
        "help.getUserInfo",
        [
            0x038A08D3,
            [
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "help.editUserInfo",
        [
            0x66B91B70,
            [
                ["user_id", "InputUser", "InputUser"],
                ["message", "string", "string"],
                ["entities", ["MessageEntity"], "Vector<MessageEntity>"],
            ],
        ],
    ],
    [
        "help.getPromoData",
        [
            0xC0977421,
            [],
        ],
    ],
    [
        "help.hidePromoData",
        [
            0x1E251C95,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "help.dismissSuggestion",
        [
            0xF50DBAA1,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["suggestion", "string", "string"],
            ],
        ],
    ],
    [
        "help.getCountriesList",
        [
            0x735787A8,
            [
                ["lang_code", "string", "string"],
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "help.getPremiumPromo",
        [
            0xB81B93D4,
            [],
        ],
    ],
    [
        "help.getPeerColors",
        [
            0xDA80F42F,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "help.getPeerProfileColors",
        [
            0xABCFA9FD,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "help.getTimezonesList",
        [
            0x49B30240,
            [
                ["hash", "number", "int"],
            ],
        ],
    ],
    [
        "channels.readHistory",
        [
            0xCC104937,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "channels.deleteMessages",
        [
            0x84C1FD4E,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "channels.reportSpam",
        [
            0xF44A8315,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["participant", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "channels.getMessages",
        [
            0xAD8C9A23,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["id", ["InputMessage"], "Vector<InputMessage>"],
            ],
        ],
    ],
    [
        "channels.getParticipants",
        [
            0x77CED9D0,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["filter", "ChannelParticipantsFilter", "ChannelParticipantsFilter"],
                ["offset", "number", "int"],
                ["limit", "number", "int"],
                ["hash", "bigint", "long"],
            ],
        ],
    ],
    [
        "channels.getParticipant",
        [
            0xA0AB6CC6,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["participant", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "channels.getChannels",
        [
            0x0A7F6BBB,
            [
                ["id", ["InputChannel"], "Vector<InputChannel>"],
            ],
        ],
    ],
    [
        "channels.getFullChannel",
        [
            0x08736A09,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.createChannel",
        [
            0x91006707,
            [
                ["flags", flags, "#"],
                ["broadcast", "true", "flags.0?true"],
                ["megagroup", "true", "flags.1?true"],
                ["for_import", "true", "flags.3?true"],
                ["forum", "true", "flags.5?true"],
                ["title", "string", "string"],
                ["about", "string", "string"],
                ["geo_point", "InputGeoPoint", "flags.2?InputGeoPoint"],
                ["address", "string", "flags.2?string"],
                ["ttl_period", "number", "flags.4?int"],
            ],
        ],
    ],
    [
        "channels.editAdmin",
        [
            0xD33C8902,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["user_id", "InputUser", "InputUser"],
                ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
                ["rank", "string", "string"],
            ],
        ],
    ],
    [
        "channels.editTitle",
        [
            0x566DECD0,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "channels.editPhoto",
        [
            0xF12E57C9,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["photo", "InputChatPhoto", "InputChatPhoto"],
            ],
        ],
    ],
    [
        "channels.checkUsername",
        [
            0x10E6BD2C,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "channels.updateUsername",
        [
            0x3514B3DE,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["username", "string", "string"],
            ],
        ],
    ],
    [
        "channels.joinChannel",
        [
            0x24B524C5,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.leaveChannel",
        [
            0xF836AA95,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.inviteToChannel",
        [
            0xC9E33D54,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["users", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "channels.deleteChannel",
        [
            0xC0111FE3,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.exportMessageLink",
        [
            0xE63FADEB,
            [
                ["flags", flags, "#"],
                ["grouped", "true", "flags.0?true"],
                ["thread", "true", "flags.1?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "channels.toggleSignatures",
        [
            0x1F69B606,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.getAdminedPublicChannels",
        [
            0xF8B036AF,
            [
                ["flags", flags, "#"],
                ["by_location", "true", "flags.0?true"],
                ["check_limit", "true", "flags.1?true"],
                ["for_personal", "true", "flags.2?true"],
            ],
        ],
    ],
    [
        "channels.editBanned",
        [
            0x96E6CD81,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["participant", "InputPeer", "InputPeer"],
                ["banned_rights", "ChatBannedRights", "ChatBannedRights"],
            ],
        ],
    ],
    [
        "channels.getAdminLog",
        [
            0x33DDF480,
            [
                ["flags", flags, "#"],
                ["channel", "InputChannel", "InputChannel"],
                ["q", "string", "string"],
                ["events_filter", "ChannelAdminLogEventsFilter", "flags.0?ChannelAdminLogEventsFilter"],
                ["admins", ["InputUser"], "flags.1?Vector<InputUser>"],
                ["max_id", "bigint", "long"],
                ["min_id", "bigint", "long"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "channels.setStickers",
        [
            0xEA8CA4F9,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "channels.readMessageContents",
        [
            0xEAB5DC38,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "channels.deleteHistory",
        [
            0x9BAA9647,
            [
                ["flags", flags, "#"],
                ["for_everyone", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "channels.togglePreHistoryHidden",
        [
            0xEABBB94C,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.getLeftChannels",
        [
            0x8341ECC0,
            [
                ["offset", "number", "int"],
            ],
        ],
    ],
    [
        "channels.getGroupsForDiscussion",
        [
            0xF5DAD378,
            [],
        ],
    ],
    [
        "channels.setDiscussionGroup",
        [
            0x40582BB2,
            [
                ["broadcast", "InputChannel", "InputChannel"],
                ["group", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.editCreator",
        [
            0x8F38CD1F,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["user_id", "InputUser", "InputUser"],
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "channels.editLocation",
        [
            0x58E63F6D,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["geo_point", "InputGeoPoint", "InputGeoPoint"],
                ["address", "string", "string"],
            ],
        ],
    ],
    [
        "channels.toggleSlowMode",
        [
            0xEDD49EF0,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["seconds", "number", "int"],
            ],
        ],
    ],
    [
        "channels.getInactiveChannels",
        [
            0x11E831EE,
            [],
        ],
    ],
    [
        "channels.convertToGigagroup",
        [
            0x0B290C69,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.viewSponsoredMessage",
        [
            0xBEAEDB94,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["random_id", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "channels.getSponsoredMessages",
        [
            0xEC210FBF,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.getSendAs",
        [
            0x0DC770EE,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "channels.deleteParticipantHistory",
        [
            0x367544DB,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["participant", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "channels.toggleJoinToSend",
        [
            0xE4CB9580,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.toggleJoinRequest",
        [
            0x4C2985B6,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.reorderUsernames",
        [
            0xB45CED1D,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["order", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "channels.toggleUsername",
        [
            0x50F24105,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["username", "string", "string"],
                ["active", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.deactivateAllUsernames",
        [
            0x0A245DD3,
            [
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "channels.toggleForum",
        [
            0xA4298B29,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.createForumTopic",
        [
            0xF40C0224,
            [
                ["flags", flags, "#"],
                ["channel", "InputChannel", "InputChannel"],
                ["title", "string", "string"],
                ["icon_color", "number", "flags.0?int"],
                ["icon_emoji_id", "bigint", "flags.3?long"],
                ["random_id", "bigint", "long"],
                ["send_as", "InputPeer", "flags.2?InputPeer"],
            ],
        ],
    ],
    [
        "channels.getForumTopics",
        [
            0x0DE560D1,
            [
                ["flags", flags, "#"],
                ["channel", "InputChannel", "InputChannel"],
                ["q", "string", "flags.0?string"],
                ["offset_date", "number", "int"],
                ["offset_id", "number", "int"],
                ["offset_topic", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "channels.getForumTopicsByID",
        [
            0xB0831EB9,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["topics", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "channels.editForumTopic",
        [
            0xF4DFA185,
            [
                ["flags", flags, "#"],
                ["channel", "InputChannel", "InputChannel"],
                ["topic_id", "number", "int"],
                ["title", "string", "flags.0?string"],
                ["icon_emoji_id", "bigint", "flags.1?long"],
                ["closed", "boolean", "flags.2?Bool"],
                ["hidden", "boolean", "flags.3?Bool"],
            ],
        ],
    ],
    [
        "channels.updatePinnedForumTopic",
        [
            0x6C2D9026,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["topic_id", "number", "int"],
                ["pinned", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.deleteTopicHistory",
        [
            0x34435F2D,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["top_msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "channels.reorderPinnedForumTopics",
        [
            0x2950A18F,
            [
                ["flags", flags, "#"],
                ["force", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["order", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "channels.toggleAntiSpam",
        [
            0x68F3E4EB,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.reportAntiSpamFalsePositive",
        [
            0xA850A693,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "channels.toggleParticipantsHidden",
        [
            0x6A6E7854,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.clickSponsoredMessage",
        [
            0x18AFBC93,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["random_id", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "channels.updateColor",
        [
            0xD8AA3671,
            [
                ["flags", flags, "#"],
                ["for_profile", "true", "flags.1?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["color", "number", "flags.2?int"],
                ["background_emoji_id", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "channels.toggleViewForumAsMessages",
        [
            0x9738BB15,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["enabled", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.getChannelRecommendations",
        [
            0x25A71742,
            [
                ["flags", flags, "#"],
                ["channel", "InputChannel", "flags.0?InputChannel"],
            ],
        ],
    ],
    [
        "channels.updateEmojiStatus",
        [
            0xF0D3E6A8,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["emoji_status", "EmojiStatus", "EmojiStatus"],
            ],
        ],
    ],
    [
        "channels.setBoostsToUnblockRestrictions",
        [
            0xAD399CEE,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["boosts", "number", "int"],
            ],
        ],
    ],
    [
        "channels.setEmojiStickers",
        [
            0x3CD930B7,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "channels.reportSponsoredMessage",
        [
            0xAF8FF6B9,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["random_id", Uint8Array, "bytes"],
                ["option", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "channels.restrictSponsoredMessages",
        [
            0x9AE91519,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["restricted", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "channels.searchPosts",
        [
            0xD19F987B,
            [
                ["hashtag", "string", "string"],
                ["offset_rate", "number", "int"],
                ["offset_peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "bots.sendCustomRequest",
        [
            0xAA2769ED,
            [
                ["custom_method", "string", "string"],
                ["params", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "bots.answerWebhookJSONQuery",
        [
            0xE6213F4D,
            [
                ["query_id", "bigint", "long"],
                ["data", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "bots.setBotCommands",
        [
            0x0517165A,
            [
                ["scope", "BotCommandScope", "BotCommandScope"],
                ["lang_code", "string", "string"],
                ["commands", ["BotCommand"], "Vector<BotCommand>"],
            ],
        ],
    ],
    [
        "bots.resetBotCommands",
        [
            0x3D8DE0F9,
            [
                ["scope", "BotCommandScope", "BotCommandScope"],
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "bots.getBotCommands",
        [
            0xE34C0DD6,
            [
                ["scope", "BotCommandScope", "BotCommandScope"],
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "bots.setBotMenuButton",
        [
            0x4504D54F,
            [
                ["user_id", "InputUser", "InputUser"],
                ["button", "BotMenuButton", "BotMenuButton"],
            ],
        ],
    ],
    [
        "bots.getBotMenuButton",
        [
            0x9C60EB28,
            [
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "bots.setBotBroadcastDefaultAdminRights",
        [
            0x788464E1,
            [
                ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
            ],
        ],
    ],
    [
        "bots.setBotGroupDefaultAdminRights",
        [
            0x925EC9EA,
            [
                ["admin_rights", "ChatAdminRights", "ChatAdminRights"],
            ],
        ],
    ],
    [
        "bots.setBotInfo",
        [
            0x10CF3123,
            [
                ["flags", flags, "#"],
                ["bot", "InputUser", "flags.2?InputUser"],
                ["lang_code", "string", "string"],
                ["name", "string", "flags.3?string"],
                ["about", "string", "flags.0?string"],
                ["description", "string", "flags.1?string"],
            ],
        ],
    ],
    [
        "bots.getBotInfo",
        [
            0xDCD914FD,
            [
                ["flags", flags, "#"],
                ["bot", "InputUser", "flags.0?InputUser"],
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "bots.reorderUsernames",
        [
            0x9709B1C2,
            [
                ["bot", "InputUser", "InputUser"],
                ["order", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "bots.toggleUsername",
        [
            0x053CA973,
            [
                ["bot", "InputUser", "InputUser"],
                ["username", "string", "string"],
                ["active", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "bots.canSendMessage",
        [
            0x1359F4E6,
            [
                ["bot", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "bots.allowSendMessage",
        [
            0xF132E3EF,
            [
                ["bot", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "bots.invokeWebViewCustomMethod",
        [
            0x087FC5E7,
            [
                ["bot", "InputUser", "InputUser"],
                ["custom_method", "string", "string"],
                ["params", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "payments.getPaymentForm",
        [
            0x37148DBB,
            [
                ["flags", flags, "#"],
                ["invoice", "InputInvoice", "InputInvoice"],
                ["theme_params", "DataJSON", "flags.0?DataJSON"],
            ],
        ],
    ],
    [
        "payments.getPaymentReceipt",
        [
            0x2478D1CC,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "payments.validateRequestedInfo",
        [
            0xB6C8F12B,
            [
                ["flags", flags, "#"],
                ["save", "true", "flags.0?true"],
                ["invoice", "InputInvoice", "InputInvoice"],
                ["info", "PaymentRequestedInfo", "PaymentRequestedInfo"],
            ],
        ],
    ],
    [
        "payments.sendPaymentForm",
        [
            0x2D03522F,
            [
                ["flags", flags, "#"],
                ["form_id", "bigint", "long"],
                ["invoice", "InputInvoice", "InputInvoice"],
                ["requested_info_id", "string", "flags.0?string"],
                ["shipping_option_id", "string", "flags.1?string"],
                ["credentials", "InputPaymentCredentials", "InputPaymentCredentials"],
                ["tip_amount", "bigint", "flags.2?long"],
            ],
        ],
    ],
    [
        "payments.getSavedInfo",
        [
            0x227D824B,
            [],
        ],
    ],
    [
        "payments.clearSavedInfo",
        [
            0xD83D70C1,
            [
                ["flags", flags, "#"],
                ["credentials", "true", "flags.0?true"],
                ["info", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "payments.getBankCardData",
        [
            0x2E79D779,
            [
                ["number", "string", "string"],
            ],
        ],
    ],
    [
        "payments.exportInvoice",
        [
            0x0F91B065,
            [
                ["invoice_media", "InputMedia", "InputMedia"],
            ],
        ],
    ],
    [
        "payments.assignAppStoreTransaction",
        [
            0x80ED747D,
            [
                ["receipt", Uint8Array, "bytes"],
                ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
            ],
        ],
    ],
    [
        "payments.assignPlayMarketTransaction",
        [
            0xDFFD50D3,
            [
                ["receipt", "DataJSON", "DataJSON"],
                ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
            ],
        ],
    ],
    [
        "payments.canPurchasePremium",
        [
            0x9FC19EB6,
            [
                ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
            ],
        ],
    ],
    [
        "payments.getPremiumGiftCodeOptions",
        [
            0x2757BA54,
            [
                ["flags", flags, "#"],
                ["boost_peer", "InputPeer", "flags.0?InputPeer"],
            ],
        ],
    ],
    [
        "payments.checkGiftCode",
        [
            0x8E51B4C1,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "payments.applyGiftCode",
        [
            0xF6E26854,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "payments.getGiveawayInfo",
        [
            0xF4239425,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "payments.launchPrepaidGiveaway",
        [
            0x5FF58F20,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["giveaway_id", "bigint", "long"],
                ["purpose", "InputStorePaymentPurpose", "InputStorePaymentPurpose"],
            ],
        ],
    ],
    [
        "payments.getStarsTopupOptions",
        [
            0xC00EC7D3,
            [],
        ],
    ],
    [
        "payments.getStarsStatus",
        [
            0x104FCFA7,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "payments.getStarsTransactions",
        [
            0x97938D5A,
            [
                ["flags", flags, "#"],
                ["inbound", "true", "flags.0?true"],
                ["outbound", "true", "flags.1?true"],
                ["ascending", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "payments.sendStarsForm",
        [
            0x02BB731D,
            [
                ["flags", flags, "#"],
                ["form_id", "bigint", "long"],
                ["invoice", "InputInvoice", "InputInvoice"],
            ],
        ],
    ],
    [
        "payments.refundStarsCharge",
        [
            0x25AE8F4A,
            [
                ["user_id", "InputUser", "InputUser"],
                ["charge_id", "string", "string"],
            ],
        ],
    ],
    [
        "payments.getStarsRevenueStats",
        [
            0xD91FFAD6,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "payments.getStarsRevenueWithdrawalUrl",
        [
            0x13BBE8B3,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["stars", "bigint", "long"],
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "payments.getStarsRevenueAdsAccountUrl",
        [
            0xD1D7EFC5,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "payments.getStarsTransactionsByID",
        [
            0x27842D2E,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["InputStarsTransaction"], "Vector<InputStarsTransaction>"],
            ],
        ],
    ],
    [
        "stickers.createStickerSet",
        [
            0x9021AB67,
            [
                ["flags", flags, "#"],
                ["masks", "true", "flags.0?true"],
                ["emojis", "true", "flags.5?true"],
                ["text_color", "true", "flags.6?true"],
                ["user_id", "InputUser", "InputUser"],
                ["title", "string", "string"],
                ["short_name", "string", "string"],
                ["thumb", "InputDocument", "flags.2?InputDocument"],
                ["stickers", ["InputStickerSetItem"], "Vector<InputStickerSetItem>"],
                ["software", "string", "flags.3?string"],
            ],
        ],
    ],
    [
        "stickers.removeStickerFromSet",
        [
            0xF7760F51,
            [
                ["sticker", "InputDocument", "InputDocument"],
            ],
        ],
    ],
    [
        "stickers.changeStickerPosition",
        [
            0xFFB6D4CA,
            [
                ["sticker", "InputDocument", "InputDocument"],
                ["position", "number", "int"],
            ],
        ],
    ],
    [
        "stickers.addStickerToSet",
        [
            0x8653FEBE,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["sticker", "InputStickerSetItem", "InputStickerSetItem"],
            ],
        ],
    ],
    [
        "stickers.setStickerSetThumb",
        [
            0xA76A5392,
            [
                ["flags", flags, "#"],
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["thumb", "InputDocument", "flags.0?InputDocument"],
                ["thumb_document_id", "bigint", "flags.1?long"],
            ],
        ],
    ],
    [
        "stickers.checkShortName",
        [
            0x284B3639,
            [
                ["short_name", "string", "string"],
            ],
        ],
    ],
    [
        "stickers.suggestShortName",
        [
            0x4DAFC503,
            [
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "stickers.changeSticker",
        [
            0xF5537EBC,
            [
                ["flags", flags, "#"],
                ["sticker", "InputDocument", "InputDocument"],
                ["emoji", "string", "flags.0?string"],
                ["mask_coords", "MaskCoords", "flags.1?MaskCoords"],
                ["keywords", "string", "flags.2?string"],
            ],
        ],
    ],
    [
        "stickers.renameStickerSet",
        [
            0x124B1C00,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "stickers.deleteStickerSet",
        [
            0x87704394,
            [
                ["stickerset", "InputStickerSet", "InputStickerSet"],
            ],
        ],
    ],
    [
        "stickers.replaceSticker",
        [
            0x4696459A,
            [
                ["sticker", "InputDocument", "InputDocument"],
                ["new_sticker", "InputStickerSetItem", "InputStickerSetItem"],
            ],
        ],
    ],
    [
        "phone.getCallConfig",
        [
            0x55451FA9,
            [],
        ],
    ],
    [
        "phone.requestCall",
        [
            0x42FF96ED,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.0?true"],
                ["user_id", "InputUser", "InputUser"],
                ["random_id", "number", "int"],
                ["g_a_hash", Uint8Array, "bytes"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
            ],
        ],
    ],
    [
        "phone.acceptCall",
        [
            0x3BD2B4A0,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["g_b", Uint8Array, "bytes"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
            ],
        ],
    ],
    [
        "phone.confirmCall",
        [
            0x2EFE1722,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["g_a", Uint8Array, "bytes"],
                ["key_fingerprint", "bigint", "long"],
                ["protocol", "PhoneCallProtocol", "PhoneCallProtocol"],
            ],
        ],
    ],
    [
        "phone.receivedCall",
        [
            0x17D54F61,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
            ],
        ],
    ],
    [
        "phone.discardCall",
        [
            0xB2CBC1C0,
            [
                ["flags", flags, "#"],
                ["video", "true", "flags.0?true"],
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["duration", "number", "int"],
                ["reason", "PhoneCallDiscardReason", "PhoneCallDiscardReason"],
                ["connection_id", "bigint", "long"],
            ],
        ],
    ],
    [
        "phone.setCallRating",
        [
            0x59EAD627,
            [
                ["flags", flags, "#"],
                ["user_initiative", "true", "flags.0?true"],
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["rating", "number", "int"],
                ["comment", "string", "string"],
            ],
        ],
    ],
    [
        "phone.saveCallDebug",
        [
            0x277ADD7E,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["debug", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "phone.sendSignalingData",
        [
            0xFF7A9383,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["data", Uint8Array, "bytes"],
            ],
        ],
    ],
    [
        "phone.createGroupCall",
        [
            0x48CDC6D8,
            [
                ["flags", flags, "#"],
                ["rtmp_stream", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["random_id", "number", "int"],
                ["title", "string", "flags.0?string"],
                ["schedule_date", "number", "flags.1?int"],
            ],
        ],
    ],
    [
        "phone.joinGroupCall",
        [
            0xB132FF7B,
            [
                ["flags", flags, "#"],
                ["muted", "true", "flags.0?true"],
                ["video_stopped", "true", "flags.2?true"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["join_as", "InputPeer", "InputPeer"],
                ["invite_hash", "string", "flags.1?string"],
                ["params", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "phone.leaveGroupCall",
        [
            0x500377F9,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["source", "number", "int"],
            ],
        ],
    ],
    [
        "phone.inviteToGroupCall",
        [
            0x7B393160,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["users", ["InputUser"], "Vector<InputUser>"],
            ],
        ],
    ],
    [
        "phone.discardGroupCall",
        [
            0x7A777135,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "phone.toggleGroupCallSettings",
        [
            0x74BBB43D,
            [
                ["flags", flags, "#"],
                ["reset_invite_hash", "true", "flags.1?true"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["join_muted", "boolean", "flags.0?Bool"],
            ],
        ],
    ],
    [
        "phone.getGroupCall",
        [
            0x041845DB,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "phone.getGroupParticipants",
        [
            0xC558D8AB,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["ids", ["InputPeer"], "Vector<InputPeer>"],
                ["sources", ["number"], "Vector<int>"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "phone.checkGroupCall",
        [
            0xB59CF977,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["sources", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "phone.toggleGroupCallRecord",
        [
            0xF128C708,
            [
                ["flags", flags, "#"],
                ["start", "true", "flags.0?true"],
                ["video", "true", "flags.2?true"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["title", "string", "flags.1?string"],
                ["video_portrait", "boolean", "flags.2?Bool"],
            ],
        ],
    ],
    [
        "phone.editGroupCallParticipant",
        [
            0xA5273ABF,
            [
                ["flags", flags, "#"],
                ["call", "InputGroupCall", "InputGroupCall"],
                ["participant", "InputPeer", "InputPeer"],
                ["muted", "boolean", "flags.0?Bool"],
                ["volume", "number", "flags.1?int"],
                ["raise_hand", "boolean", "flags.2?Bool"],
                ["video_stopped", "boolean", "flags.3?Bool"],
                ["video_paused", "boolean", "flags.4?Bool"],
                ["presentation_paused", "boolean", "flags.5?Bool"],
            ],
        ],
    ],
    [
        "phone.editGroupCallTitle",
        [
            0x1CA6AC0A,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["title", "string", "string"],
            ],
        ],
    ],
    [
        "phone.getGroupCallJoinAs",
        [
            0xEF7C213A,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "phone.exportGroupCallInvite",
        [
            0xE6AA647F,
            [
                ["flags", flags, "#"],
                ["can_self_unmute", "true", "flags.0?true"],
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "phone.toggleGroupCallStartSubscription",
        [
            0x219C34E6,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["subscribed", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "phone.startScheduledGroupCall",
        [
            0x5680E342,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "phone.saveDefaultGroupCallJoinAs",
        [
            0x575E1F8C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["join_as", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "phone.joinGroupCallPresentation",
        [
            0xCBEA6BC4,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
                ["params", "DataJSON", "DataJSON"],
            ],
        ],
    ],
    [
        "phone.leaveGroupCallPresentation",
        [
            0x1C50D144,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "phone.getGroupCallStreamChannels",
        [
            0x1AB21940,
            [
                ["call", "InputGroupCall", "InputGroupCall"],
            ],
        ],
    ],
    [
        "phone.getGroupCallStreamRtmpUrl",
        [
            0xDEB3ABBF,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["revoke", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "phone.saveCallLog",
        [
            0x41248786,
            [
                ["peer", "InputPhoneCall", "InputPhoneCall"],
                ["file", "InputFile", "InputFile"],
            ],
        ],
    ],
    [
        "langpack.getLangPack",
        [
            0xF2F2330A,
            [
                ["lang_pack", "string", "string"],
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "langpack.getStrings",
        [
            0xEFEA3803,
            [
                ["lang_pack", "string", "string"],
                ["lang_code", "string", "string"],
                ["keys", ["string"], "Vector<string>"],
            ],
        ],
    ],
    [
        "langpack.getDifference",
        [
            0xCD984AA5,
            [
                ["lang_pack", "string", "string"],
                ["lang_code", "string", "string"],
                ["from_version", "number", "int"],
            ],
        ],
    ],
    [
        "langpack.getLanguages",
        [
            0x42C6978F,
            [
                ["lang_pack", "string", "string"],
            ],
        ],
    ],
    [
        "langpack.getLanguage",
        [
            0x6A596502,
            [
                ["lang_pack", "string", "string"],
                ["lang_code", "string", "string"],
            ],
        ],
    ],
    [
        "folders.editPeerFolders",
        [
            0x6847D0AB,
            [
                ["folder_peers", ["InputFolderPeer"], "Vector<InputFolderPeer>"],
            ],
        ],
    ],
    [
        "stats.getBroadcastStats",
        [
            0xAB42441A,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "stats.loadAsyncGraph",
        [
            0x621D5FA0,
            [
                ["flags", flags, "#"],
                ["token", "string", "string"],
                ["x", "bigint", "flags.0?long"],
            ],
        ],
    ],
    [
        "stats.getMegagroupStats",
        [
            0xDCDF8607,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "stats.getMessagePublicForwards",
        [
            0x5F150144,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["msg_id", "number", "int"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stats.getMessageStats",
        [
            0xB6E0A3F5,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
                ["msg_id", "number", "int"],
            ],
        ],
    ],
    [
        "stats.getStoryStats",
        [
            0x374FEF40,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "stats.getStoryPublicForwards",
        [
            0xA6437EF6,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stats.getBroadcastRevenueStats",
        [
            0x75DFB671,
            [
                ["flags", flags, "#"],
                ["dark", "true", "flags.0?true"],
                ["channel", "InputChannel", "InputChannel"],
            ],
        ],
    ],
    [
        "stats.getBroadcastRevenueWithdrawalUrl",
        [
            0x2A65EF73,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["password", "InputCheckPasswordSRP", "InputCheckPasswordSRP"],
            ],
        ],
    ],
    [
        "stats.getBroadcastRevenueTransactions",
        [
            0x0069280F,
            [
                ["channel", "InputChannel", "InputChannel"],
                ["offset", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "chatlists.exportChatlistInvite",
        [
            0x8472478E,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
                ["title", "string", "string"],
                ["peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "chatlists.deleteExportedInvite",
        [
            0x719C5C5E,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "chatlists.editExportedInvite",
        [
            0x653DB63D,
            [
                ["flags", flags, "#"],
                ["chatlist", "InputChatlist", "InputChatlist"],
                ["slug", "string", "string"],
                ["title", "string", "flags.1?string"],
                ["peers", ["InputPeer"], "flags.2?Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "chatlists.getExportedInvites",
        [
            0xCE03DA83,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
            ],
        ],
    ],
    [
        "chatlists.checkChatlistInvite",
        [
            0x41C10FFF,
            [
                ["slug", "string", "string"],
            ],
        ],
    ],
    [
        "chatlists.joinChatlistInvite",
        [
            0xA6B1E39A,
            [
                ["slug", "string", "string"],
                ["peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "chatlists.getChatlistUpdates",
        [
            0x89419521,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
            ],
        ],
    ],
    [
        "chatlists.joinChatlistUpdates",
        [
            0xE089F8F5,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
                ["peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "chatlists.hideChatlistUpdates",
        [
            0x66E486FB,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
            ],
        ],
    ],
    [
        "chatlists.getLeaveChatlistSuggestions",
        [
            0xFDBCD714,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
            ],
        ],
    ],
    [
        "chatlists.leaveChatlist",
        [
            0x74FAE13A,
            [
                ["chatlist", "InputChatlist", "InputChatlist"],
                ["peers", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "stories.canSendStory",
        [
            0xC7DFDFDD,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "stories.sendStory",
        [
            0xE4E6694B,
            [
                ["flags", flags, "#"],
                ["pinned", "true", "flags.2?true"],
                ["noforwards", "true", "flags.4?true"],
                ["fwd_modified", "true", "flags.7?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["media", "InputMedia", "InputMedia"],
                ["media_areas", ["MediaArea"], "flags.5?Vector<MediaArea>"],
                ["caption", "string", "flags.0?string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["privacy_rules", ["InputPrivacyRule"], "Vector<InputPrivacyRule>"],
                ["random_id", "bigint", "long"],
                ["period", "number", "flags.3?int"],
                ["fwd_from_id", "InputPeer", "flags.6?InputPeer"],
                ["fwd_from_story", "number", "flags.6?int"],
            ],
        ],
    ],
    [
        "stories.editStory",
        [
            0xB583BA46,
            [
                ["flags", flags, "#"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["media", "InputMedia", "flags.0?InputMedia"],
                ["media_areas", ["MediaArea"], "flags.3?Vector<MediaArea>"],
                ["caption", "string", "flags.1?string"],
                ["entities", ["MessageEntity"], "flags.1?Vector<MessageEntity>"],
                ["privacy_rules", ["InputPrivacyRule"], "flags.2?Vector<InputPrivacyRule>"],
            ],
        ],
    ],
    [
        "stories.deleteStories",
        [
            0xAE59DB5F,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "stories.togglePinned",
        [
            0x9A75A1EF,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
                ["pinned", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "stories.getAllStories",
        [
            0xEEB0D625,
            [
                ["flags", flags, "#"],
                ["next", "true", "flags.1?true"],
                ["hidden", "true", "flags.2?true"],
                ["state", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "stories.getPinnedStories",
        [
            0x5821A5DC,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stories.getStoriesArchive",
        [
            0xB4352016,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["offset_id", "number", "int"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stories.getStoriesByID",
        [
            0x5774CA74,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "stories.toggleAllStoriesHidden",
        [
            0x7C2557C4,
            [
                ["hidden", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "stories.readStories",
        [
            0xA556DAC8,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["max_id", "number", "int"],
            ],
        ],
    ],
    [
        "stories.incrementStoryViews",
        [
            0xB2028AFB,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "stories.getStoryViewsList",
        [
            0x7ED23C57,
            [
                ["flags", flags, "#"],
                ["just_contacts", "true", "flags.0?true"],
                ["reactions_first", "true", "flags.2?true"],
                ["forwards_first", "true", "flags.3?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["q", "string", "flags.1?string"],
                ["id", "number", "int"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stories.getStoriesViews",
        [
            0x28E16CC8,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "stories.exportStoryLink",
        [
            0x7B8DEF20,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
            ],
        ],
    ],
    [
        "stories.report",
        [
            0x1923FA8C,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
                ["reason", "ReportReason", "ReportReason"],
                ["message", "string", "string"],
            ],
        ],
    ],
    [
        "stories.activateStealthMode",
        [
            0x57BBD166,
            [
                ["flags", flags, "#"],
                ["past", "true", "flags.0?true"],
                ["future", "true", "flags.1?true"],
            ],
        ],
    ],
    [
        "stories.sendReaction",
        [
            0x7FD736B2,
            [
                ["flags", flags, "#"],
                ["add_to_recent", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["story_id", "number", "int"],
                ["reaction", "Reaction", "Reaction"],
            ],
        ],
    ],
    [
        "stories.getPeerStories",
        [
            0x2C4ADA50,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "stories.getAllReadPeerStories",
        [
            0x9B5AE7F9,
            [],
        ],
    ],
    [
        "stories.getPeerMaxIDs",
        [
            0x535983C3,
            [
                ["id", ["InputPeer"], "Vector<InputPeer>"],
            ],
        ],
    ],
    [
        "stories.getChatsToSend",
        [
            0xA56A8B60,
            [],
        ],
    ],
    [
        "stories.togglePeerStoriesHidden",
        [
            0xBD0415C4,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["hidden", "boolean", "Bool"],
            ],
        ],
    ],
    [
        "stories.getStoryReactionsList",
        [
            0xB9B2881F,
            [
                ["flags", flags, "#"],
                ["forwards_first", "true", "flags.2?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["id", "number", "int"],
                ["reaction", "Reaction", "flags.0?Reaction"],
                ["offset", "string", "flags.1?string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "stories.togglePinnedToTop",
        [
            0x0B297E9B,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["id", ["number"], "Vector<int>"],
            ],
        ],
    ],
    [
        "stories.searchPosts",
        [
            0x6CEA116A,
            [
                ["flags", flags, "#"],
                ["hashtag", "string", "flags.0?string"],
                ["area", "MediaArea", "flags.1?MediaArea"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "premium.getBoostsList",
        [
            0x60F67660,
            [
                ["flags", flags, "#"],
                ["gifts", "true", "flags.0?true"],
                ["peer", "InputPeer", "InputPeer"],
                ["offset", "string", "string"],
                ["limit", "number", "int"],
            ],
        ],
    ],
    [
        "premium.getMyBoosts",
        [
            0x0BE77B4A,
            [],
        ],
    ],
    [
        "premium.applyBoost",
        [
            0x6B7DA746,
            [
                ["flags", flags, "#"],
                ["slots", ["number"], "flags.0?Vector<int>"],
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "premium.getBoostsStatus",
        [
            0x042F1F61,
            [
                ["peer", "InputPeer", "InputPeer"],
            ],
        ],
    ],
    [
        "premium.getUserBoosts",
        [
            0x39854D1F,
            [
                ["peer", "InputPeer", "InputPeer"],
                ["user_id", "InputUser", "InputUser"],
            ],
        ],
    ],
    [
        "smsjobs.isEligibleToJoin",
        [
            0x0EDC39D0,
            [],
        ],
    ],
    [
        "smsjobs.join",
        [
            0xA74ECE2D,
            [],
        ],
    ],
    [
        "smsjobs.leave",
        [
            0x9898AD73,
            [],
        ],
    ],
    [
        "smsjobs.updateSettings",
        [
            0x093FA0BF,
            [
                ["flags", flags, "#"],
                ["allow_international", "true", "flags.0?true"],
            ],
        ],
    ],
    [
        "smsjobs.getStatus",
        [
            0x10A698E8,
            [],
        ],
    ],
    [
        "smsjobs.getSmsJob",
        [
            0x778D902F,
            [
                ["job_id", "string", "string"],
            ],
        ],
    ],
    [
        "smsjobs.finishJob",
        [
            0x4F1EBF24,
            [
                ["flags", flags, "#"],
                ["job_id", "string", "string"],
                ["error", "string", "flags.0?string"],
            ],
        ],
    ],
    [
        "fragment.getCollectibleInfo",
        [
            0xBE1E85BA,
            [
                ["collectible", "InputCollectible", "InputCollectible"],
            ],
        ],
    ],
]);
export const getType = types.get.bind(types);
export const getEnum = enums.get.bind(enums);
// @ts-ignore: lib
export const _types = typeof dntShim.Deno === "undefined" ? typeof process === "undefined" ? undefined : process.env.__TYPE_MAP ? types : undefined : dntShim.Deno.env.get("__TYPE_MAP") ? types : undefined;
