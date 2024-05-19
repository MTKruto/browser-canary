import { TransportProvider } from "./2_transport_provider.js";
export interface Socks5 {
    type: "socks5";
    hostname: string;
    port?: number;
    username?: string;
    password?: string;
}
export declare function transportProviderTcp(params?: {
    ipv6?: boolean;
    obfuscated?: boolean;
    proxy?: Socks5;
}): TransportProvider;
//# sourceMappingURL=3_transport_provider_tcp.d.ts.map