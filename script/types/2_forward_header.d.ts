import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { ChatPChannel, ChatPSupergroup } from "./1_chat_p.js";
import { User } from "./1_user.js";
/** @unlisted */
export interface _ForwardHeaderCommon {
    date: Date;
}
/** @unlisted */
export interface ForwardHeaderUser extends _ForwardHeaderCommon {
    /** @discriminator */
    type: "user";
    user: User;
}
/** @unlisted */
export interface ForwardHeaderChannel extends _ForwardHeaderCommon {
    /** @discriminator */
    type: "channel";
    chat: ChatPChannel;
    messageId: number;
    authorSignature?: string;
}
/** @unlisted */
export interface ForwardHeaderSupergroup extends _ForwardHeaderCommon {
    type: "supergroup";
    chat: ChatPSupergroup;
    title?: string;
}
/** @unlisted */
export interface ForwardHeaderHidden extends _ForwardHeaderCommon {
    type: "hidden";
    name: string;
}
/** @unlisted */
export interface ForwardHeaderUnsupported extends _ForwardHeaderCommon {
    type: "unsupported";
}
export type ForwardHeader = ForwardHeaderUser | ForwardHeaderChannel | ForwardHeaderSupergroup | ForwardHeaderHidden | ForwardHeaderUnsupported;
export declare function constructForwardHeader(fwdHeader: Api.MessageFwdHeader, getEntity: EntityGetter): Promise<ForwardHeader>;
//# sourceMappingURL=2_forward_header.d.ts.map