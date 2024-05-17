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
// deno-lint-ignore-file no-explicit-any
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLReader = void 0;
const _0_tl_raw_reader_js_1 = require("./0_tl_raw_reader.js");
const _0_api_js_1 = require("./0_api.js");
const _2_deserialize_js_1 = require("./2_deserialize.js");
class TLReader extends _0_tl_raw_reader_js_1.TLRawReader {
    readObject(id) {
        if (!id) {
            id = this.readInt32(false);
        }
        if (id == 0x1CB5C415) {
            const count = this.readInt32();
            const items = new Array();
            for (let i = 0; i < count; i++) {
                items.push(this.readObject());
            }
            return items;
        }
        else if (id == 0x997275b5) {
            return true;
        }
        else if (id == 0xbc799737) {
            return false;
        }
        const constructor = (0, _0_api_js_1.getTypeName)(id);
        if (constructor) {
            return (0, _2_deserialize_js_1.deserialize)(this, (0, _0_api_js_1.getType)(constructor)[1], constructor);
        }
        throw new _0_tl_raw_reader_js_1.TLError(`Unknown constructor ${id.toString(16)}`);
    }
}
exports.TLReader = TLReader;
