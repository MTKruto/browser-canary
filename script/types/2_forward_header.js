"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructForwardHeader = constructForwardHeader;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_chat_p_js_1 = require("./1_chat_p.js");
const _1_user_js_1 = require("./1_user.js");
async function constructForwardHeader(fwdHeader, getEntity) {
    if (fwdHeader.channel_post && fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({
            type: "channel",
            date: (0, _1_utilities_js_1.fromUnixTimestamp)(fwdHeader.date),
            chat: (0, _1_chat_p_js_1.constructChatP)(chat),
            messageId: fwdHeader.channel_post,
            authorSignature: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return (0, _1_utilities_js_1.cleanObject)({
            type: "supergroup",
            date: (0, _1_utilities_js_1.fromUnixTimestamp)(fwdHeader.date),
            chat: (0, _1_chat_p_js_1.constructChatP)(chat),
            title: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerUser") {
        const user = await getEntity(fwdHeader.from_id);
        if (user == null) {
            (0, _0_deps_js_1.unreachable)();
        }
        return {
            type: "user",
            date: (0, _1_utilities_js_1.fromUnixTimestamp)(fwdHeader.date),
            user: (0, _1_user_js_1.constructUser)(user),
        };
    }
    else if (fwdHeader.from_name) {
        return {
            type: "hidden",
            date: (0, _1_utilities_js_1.fromUnixTimestamp)(fwdHeader.date),
            name: fwdHeader.from_name,
        };
    }
    else {
        return {
            type: "unsupported",
            date: (0, _1_utilities_js_1.fromUnixTimestamp)(fwdHeader.date),
        };
    }
}
