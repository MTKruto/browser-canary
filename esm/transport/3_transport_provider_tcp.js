import { SocksClient } from "../0_deps.js";
import { ConnectionTCP } from "../connection/1_connection_tcp.js";
import { TransportAbridged } from "./1_transport_abridged.js";
import { getDcId, getDcIps } from "./2_transport_provider.js";
export function transportProviderTcp(params) {
    return ({ dc, cdn }) => {
        const connection = new ConnectionTCP(getDcIps(dc, params?.ipv6 ? "ipv6" : "ipv4")[0], 80);
        if (params?.proxy) {
            const socksClient = new SocksClient(params.proxy);
            connection.connect = socksClient.connect.bind(socksClient);
        }
        const transport = new TransportAbridged(connection, params?.obfuscated);
        return { connection, transport, dcId: getDcId(dc, cdn) };
    };
}
