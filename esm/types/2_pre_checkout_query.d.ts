import { Api } from "../2_tl.js";
import { EntityGetter } from "./_getters.js";
import { OrderInfo } from "./1_order_info.js";
import { User } from "./1_user.js";
export interface PreCheckoutQuery {
    id: string;
    from: User;
    currency: string;
    totalAmount: number;
    invoicePayload: string;
    shippingOptionId?: string;
    orderInfo?: OrderInfo;
}
export declare function constructPreCheckoutQuery(query: Api.updateBotPrecheckoutQuery, getEntity: EntityGetter): Promise<PreCheckoutQuery>;
//# sourceMappingURL=2_pre_checkout_query.d.ts.map