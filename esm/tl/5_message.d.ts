/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
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
import { AnyObject } from "./0_api.js";
import { TLReader } from "./3_tl_reader.js";
import { rpc_result } from "./4_rpc_result.js";
export interface message {
    _: "message";
    msg_id: bigint;
    seqno: number;
    body: AnyObject | msg_container | rpc_result;
}
export declare function calculateLength(object: Exclude<message["body"], rpc_result>): number;
export declare function serializeMessage(message: message): Uint8Array;
export declare function deserializeMessage(reader: TLReader): message;
export interface msg_container {
    _: "msg_container";
    messages: message[];
}
export declare const MSG_CONTAINER_ID = 1945237724;
export declare function serializeMsgContainer(msgContainer: msg_container): Uint8Array;
export declare function deserializeMsgContainer(buffer: Uint8Array): msg_container;
//# sourceMappingURL=5_message.d.ts.map