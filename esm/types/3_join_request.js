import { unreachable } from "../0_deps.js";
import { cleanObject, fromUnixTimestamp } from "../1_utilities.js";
import { is } from "../2_tl.js";
import { constructChatP } from "./1_chat_p.js";
import { constructUser } from "./1_user.js";
import { constructInviteLink } from "./2_invite_link.js";
export async function constructJoinRequest(update, getEntity) {
    const chat_ = await getEntity(update.peer);
    if (!chat_) {
        unreachable();
    }
    const chat = constructChatP(chat_);
    const user_ = await getEntity({ _: "peerUser", user_id: update.user_id });
    if (!user_) {
        unreachable();
    }
    const user = constructUser(user_);
    const inviteLink = update.invite && is("chatInviteExported", update.invite) ? await constructInviteLink(update.invite, getEntity) : undefined;
    return cleanObject({
        chat,
        user,
        date: fromUnixTimestamp(update.date),
        bio: update.about,
        inviteLink,
    });
}
