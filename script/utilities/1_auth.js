"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.rsaPad = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _0_bigint_js_1 = require("./0_bigint.js");
const _0_buffer_js_1 = require("./0_buffer.js");
const _0_hash_js_1 = require("./0_hash.js");
async function rsaPad(data, [serverKey, exponent]) {
    (0, _0_deps_js_1.assert)(data.length <= 144);
    let keyAesEncryptedInt;
    let tries = 0;
    do {
        if (++tries == 10) {
            throw new Error("Out of tries");
        }
        const dataWithPadding = (0, _0_buffer_js_1.concat)(data, new Uint8Array(192 - data.length));
        const dataPadReversed = new Uint8Array(dataWithPadding).reverse();
        const tempKey = crypto.getRandomValues(new Uint8Array(32));
        const dataWithHash = (0, _0_buffer_js_1.concat)(dataPadReversed, await (0, _0_hash_js_1.sha256)((0, _0_buffer_js_1.concat)(tempKey, dataWithPadding)));
        const aesEncrypted = (0, _0_deps_js_1.ige256Encrypt)(dataWithHash, tempKey, new Uint8Array(32));
        const aesEncryptedSha256 = await (0, _0_hash_js_1.sha256)(aesEncrypted);
        const tempKeyXor = tempKey.map((v, i) => v ^ aesEncryptedSha256[i]);
        const keyAesEncrypted = (0, _0_buffer_js_1.concat)(tempKeyXor, aesEncrypted);
        (0, _0_deps_js_1.assertEquals)(keyAesEncrypted.length, 256);
        keyAesEncryptedInt = (0, _0_bigint_js_1.bigIntFromBuffer)(keyAesEncrypted, false, false);
    } while (keyAesEncryptedInt >= serverKey);
    const encryptedDataInt = (0, _0_bigint_js_1.modExp)(keyAesEncryptedInt, exponent, serverKey);
    const encryptedData = (0, _0_buffer_js_1.bufferFromBigInt)(encryptedDataInt, 256, false, false);
    (0, _0_deps_js_1.assertEquals)(encryptedData.length, 256);
    return encryptedData;
}
exports.rsaPad = rsaPad;
