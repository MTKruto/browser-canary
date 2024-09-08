import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { constructChatP } from "../3_types.js";
import { constructUser } from "./1_user.js";
export async function constructForwardHeader(fwdHeader, getEntity) {
    if (fwdHeader.channel_post && fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            unreachable();
        }
        return cleanObject({
            type: "channel",
            date: fromUnixTimestamp(fwdHeader.date),
            chat: constructChatP(chat),
            messageId: fwdHeader.channel_post,
            authorSignature: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerChannel") {
        const chat = await getEntity(fwdHeader.from_id);
        if (chat == null) {
            unreachable();
        }
        return cleanObject({
            type: "supergroup",
            date: fromUnixTimestamp(fwdHeader.date),
            chat: constructChatP(chat),
            title: fwdHeader.post_author,
        });
    }
    else if (fwdHeader.from_id?._ == "peerUser") {
        const user = await getEntity(fwdHeader.from_id);
        if (user == null) {
            unreachable();
        }
        return {
            type: "user",
            date: fromUnixTimestamp(fwdHeader.date),
            user: constructUser(user),
        };
    }
    else if (fwdHeader.from_name) {
        return {
            type: "hidden",
            date: fromUnixTimestamp(fwdHeader.date),
            name: fwdHeader.from_name,
        };
    }
    else {
        return {
            type: "unsupported",
            date: fromUnixTimestamp(fwdHeader.date),
        };
    }
}
