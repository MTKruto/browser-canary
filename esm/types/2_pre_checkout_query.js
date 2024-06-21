import { unreachable } from "../0_deps.js";
import { cleanObject } from "../1_utilities.js";
import { constructOrderInfo } from "./1_order_info.js";
import { constructUser } from "./1_user.js";
export async function constructPreCheckoutQuery(query, getEntity) {
    const user = await getEntity({ _: "peerUser", user_id: query.user_id });
    if (!user) {
        unreachable();
    }
    const from = constructUser(user);
    return cleanObject({
        id: String(query.query_id),
        from,
        currency: query.currency,
        totalAmount: Number(query.total_amount),
        invoicePayload: new TextDecoder().decode(query.payload),
        shippingOptionId: query.shipping_option_id,
        orderInfo: query.info ? constructOrderInfo(query.info) : undefined,
    });
}
