/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
import { ConnectionUnframed } from "./0_connection.js";
export declare class ConnectionWebSocket extends ConnectionUnframed implements ConnectionUnframed {
    #private;
    private readonly url;
    constructor(url: string | URL);
    get connected(): boolean;
    open(): Promise<void>;
    read(p: Uint8Array): Promise<void>;
    write(p: Uint8Array): Promise<void>;
    close(): void;
}
