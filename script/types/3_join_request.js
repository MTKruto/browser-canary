"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructJoinRequest = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _2_tl_js_1 = require("../2_tl.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
const _2_invite_link_js_1 = require("./2_invite_link.js");
async function constructJoinRequest(update, getEntity) {
    const chat_ = await getEntity(update.peer);
    if (!chat_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const chat = (0, _1_chat_p_js_1.constructChatP)(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: update.user_id });
    if (!user_) {
        (0, _0_deps_js_1.unreachable)();
    }
    const user = (0, _1_user_js_1.constructUser)(user_);
    const inviteLink = update.invite && (0, _2_tl_js_1.is)("chatInviteExported", update.invite) ? await (0, _2_invite_link_js_1.constructInviteLink)(update.invite, getEntity) : undefined;
    return (0, _1_utilities_js_1.cleanObject)({
        chat,
        user,
        date: (0, _1_utilities_js_1.fromUnixTimestamp)(update.date),
        bio: update.about,
        inviteLink,
    });
}
exports.constructJoinRequest = constructJoinRequest;
