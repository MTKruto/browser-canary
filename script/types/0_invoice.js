"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructInvoice = void 0;
function constructInvoice(invoice) {
    return {
        title: invoice.title,
        description: invoice.description,
        startParameter: invoice.start_param,
        currency: invoice.currency,
        totalAmount: Number(invoice.total_amount),
    };
}
exports.constructInvoice = constructInvoice;
