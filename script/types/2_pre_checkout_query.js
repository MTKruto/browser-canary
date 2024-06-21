"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPreCheckoutQuery = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_utilities_js_1 = require("../1_utilities.js");
const _1_order_info_js_1 = require("./1_order_info.js");
const _1_user_js_1 = require("./1_user.js");
async function constructPreCheckoutQuery(query, getEntity) {
    const user = await getEntity({ _: "peerUser", user_id: query.user_id });
    if (!user) {
        (0, _0_deps_js_1.unreachable)();
    }
    const from = (0, _1_user_js_1.constructUser)(user);
    return (0, _1_utilities_js_1.cleanObject)({
        id: String(query.query_id),
        from,
        currency: query.currency,
        totalAmount: Number(query.total_amount),
        invoicePayload: new TextDecoder().decode(query.payload),
        shippingOptionId: query.shipping_option_id,
        orderInfo: query.info ? (0, _1_order_info_js_1.constructOrderInfo)(query.info) : undefined,
    });
}
exports.constructPreCheckoutQuery = constructPreCheckoutQuery;
