import { ID } from "./0_id.js";
import { ReplyQuote } from "./1_reply_quote.js";
/** @unlisted */
export interface ReplyToMessage {
    /** @discriminator */
    messageId: number;
    quote?: ReplyQuote;
}
/** @unlisted */
export interface ReplyToStory {
    chatId: ID;
    /** @discriminator */
    storyId: number;
}
export type ReplyTo = ReplyToMessage | ReplyToStory;
//# sourceMappingURL=2_reply_to.d.ts.map