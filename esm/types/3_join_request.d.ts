import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatP } from "./1_chat_p.js";
import { User } from "./1_user.js";
import { InviteLink } from "./2_invite_link.js";
/** A join request. */
export interface JoinRequest {
    /** The chat that the user requested to join. */
    chat: ChatP;
    /** The user who made the join request. */
    user: User;
    /** The point in time in which the join request was made. */
    date: Date;
    /** The bio of the user who made the join request. */
    bio?: string;
    /** The invite link that the user used to make the join request. */
    inviteLink?: InviteLink;
}
export declare function constructJoinRequest(update: Api.updateBotChatInviteRequester, getEntity: EntityGetter): Promise<JoinRequest>;
//# sourceMappingURL=3_join_request.d.ts.map