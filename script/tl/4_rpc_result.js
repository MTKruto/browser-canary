"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RPC_RESULT_ID = void 0;
exports.deserializeRpcResult = deserializeRpcResult;
const _3_tl_reader_js_1 = require("./3_tl_reader.js");
// rpc_result#f35c6d01 req_msg_id:long result:Object = RpcResult;
exports.RPC_RESULT_ID = 0xF35C6D01;
function deserializeRpcResult(buffer) {
    const reader = new _3_tl_reader_js_1.TLReader(buffer);
    const messageId = reader.readInt64();
    const result = reader.readObject();
    return { _: "rpc_result", req_msg_id: messageId, result };
}
