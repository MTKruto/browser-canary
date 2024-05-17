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
import { TLReader } from "./3_tl_reader.js";
import { TLWriter } from "./4_tl_writer.js";
import { deserializeRpcResult, RPC_RESULT_ID } from "./4_rpc_result.js";
import { serialize } from "./2_serialize.js";
export function calculateLength(object) {
    let length = 0;
    if (Array.isArray(object)) {
        length += 32 / 8; // vector constructor
        length += 32 / 8; // number of items
        for (const item of object) {
            length += calculateLength(item);
        }
    }
    else if (typeof object === "boolean") {
        length += 32 / 8; // constructor
    }
    else if (object._ == "msg_container") {
        length += serializeMsgContainer(object).length;
    }
    else {
        length += serialize(object).length;
    }
    return length;
}
export function serializeMessage(message) {
    if (message.body._ == "rpc_result") {
        throw new Error("Not applicable");
    }
    const writer = new TLWriter()
        .writeInt64(message.msg_id)
        .writeInt32(message.seqno)
        .writeInt32(calculateLength(message.body));
    if (message.body._ == "msg_container") {
        writer.write(serializeMsgContainer(message.body));
    }
    else {
        writer.writeObject(message.body);
    }
    return writer.buffer;
}
export function deserializeMessage(reader) {
    const id_ = reader.readInt64();
    const seqno = reader.readInt32();
    const length = reader.readInt32();
    reader = new TLReader(reader.read(length));
    const cid = reader.readInt32(false);
    let body;
    {
        if (cid == RPC_RESULT_ID) {
            body = deserializeRpcResult(reader.buffer);
        }
        else if (cid == MSG_CONTAINER_ID) {
            body = deserializeMsgContainer(reader.buffer);
        }
        else {
            body = reader.readObject(cid);
        }
    }
    return { _: "message", msg_id: id_, seqno, body };
}
export const MSG_CONTAINER_ID = 0x73F1F8DC;
export function serializeMsgContainer(msgContainer) {
    const writer = new TLWriter();
    writer.writeInt32(MSG_CONTAINER_ID, false);
    writer.writeInt32(msgContainer.messages.length);
    for (const message of msgContainer.messages) {
        writer.write(serializeMessage(message));
    }
    return writer.buffer;
}
export function deserializeMsgContainer(buffer) {
    const reader = new TLReader(buffer);
    const length = reader.readInt32();
    const messages = new Array();
    for (let i = 0; i < length; i++) {
        messages.push(deserializeMessage(reader));
    }
    return { _: "msg_container", messages };
}
