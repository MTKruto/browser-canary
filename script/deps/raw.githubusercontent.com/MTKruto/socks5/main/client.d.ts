import * as dntShim from "../../../../../_dnt.shims.js";
export declare const SOCKS_VERSION = 5;
export declare const USERNAME_PASSWORD_AUTH_VERSION = 1;
export declare enum AddrType {
    IPv4 = 1,
    DomainName = 3,
    IPv6 = 4
}
export declare enum AuthMethod {
    NoAuth = 0,
    UsernamePassword = 2,
    NoneAcceptable = 255
}
export declare enum ReplyStatus {
    Success = 0,
    GeneralError = 1,
    RulesetError = 2,
    NetworkUnreachable = 3,
    HostUnreachable = 4,
    ConnectionRefused = 5,
    TTLExpired = 6,
    UnsupportedCommand = 7,
    UnsupportedAddress = 8
}
export declare enum Command {
    Connect = 1,
    Bind = 2,
    UdpAssociate = 3
}
interface AddrConfig {
    hostname: string;
    port?: number;
}
interface AuthConfig {
    username: string;
    password: string;
}
export type ClientConfig = AddrConfig | (AddrConfig & AuthConfig);
export declare class Client {
    #private;
    constructor(config: ClientConfig);
    connect(opts: dntShim.Deno.ConnectOptions): Promise<dntShim.Deno.TcpConn>;
}
export {};
//# sourceMappingURL=client.d.ts.map