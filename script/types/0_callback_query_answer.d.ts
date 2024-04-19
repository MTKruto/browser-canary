import { types } from "../2_tl.js";
export interface CallbackQueryAnswer {
    alert: boolean;
    text: string;
    url: string;
}
export declare function constructCallbackQueryAnswer(answer: types.messages.BotCallbackAnswer): CallbackQueryAnswer;
