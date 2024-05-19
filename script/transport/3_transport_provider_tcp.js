"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportProviderTcp = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _1_connection_tcp_js_1 = require("../connection/1_connection_tcp.js");
const _1_transport_abridged_js_1 = require("./1_transport_abridged.js");
const _2_transport_provider_js_1 = require("./2_transport_provider.js");
function transportProviderTcp(params) {
    return ({ dc, cdn }) => {
        const connection = new _1_connection_tcp_js_1.ConnectionTCP((0, _2_transport_provider_js_1.getDcIps)(dc, params?.ipv6 ? "ipv6" : "ipv4")[0], 80);
        if (params?.proxy) {
            const socksClient = new _0_deps_js_1.SocksClient(params.proxy);
            connection.connect = socksClient.connect.bind(socksClient);
        }
        const transport = new _1_transport_abridged_js_1.TransportAbridged(connection, params?.obfuscated);
        return { connection, transport, dcId: (0, _2_transport_provider_js_1.getDcId)(dc, cdn) };
    };
}
exports.transportProviderTcp = transportProviderTcp;
