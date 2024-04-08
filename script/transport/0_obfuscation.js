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
exports.getObfuscationParameters = void 0;
const _1_utilities_js_1 = require("../1_utilities.js");
async function getObfuscationParameters(protocol, connection) {
    let init;
    while (true) {
        init = (0, _1_utilities_js_1.concat)(crypto.getRandomValues(new Uint8Array(56)), (0, _1_utilities_js_1.bufferFromBigInt)(protocol, 4, false), crypto.getRandomValues(new Uint8Array(4)));
        if (init[0] == 0xEF) {
            continue;
        }
        const dataView = new DataView(init.buffer, init.byteOffset, init.byteLength);
        const firstInt = dataView.getInt32(0);
        if ([0x44414548, 0x54534F50, 0x20544547, 0x4954504F, 0x02010316, 0xDDDDDDDD, 0xEEEEEEEE].includes(firstInt)) {
            continue;
        }
        const secondInt = dataView.getInt32(4);
        if (secondInt == 0x00000000) {
            continue;
        }
        break;
    }
    const encryptKey = init.slice(8, 8 + 32);
    const encryptIv = init.slice(40, 40 + 16);
    const encryptionCTR = new _1_utilities_js_1.CTR(encryptKey, encryptIv);
    const encryptedInit = new Uint8Array(init);
    encryptionCTR.call(encryptedInit);
    const initRev = new Uint8Array(init).reverse();
    const decryptKey = initRev.slice(8, 8 + 32);
    const decryptIv = initRev.slice(40, 40 + 16);
    const decryptionCTR = new _1_utilities_js_1.CTR(decryptKey, decryptIv);
    await connection.write((0, _1_utilities_js_1.concat)(init.subarray(0, 56), encryptedInit.subarray(56, 56 + 8)));
    return { encryptionCTR, decryptionCTR };
}
exports.getObfuscationParameters = getObfuscationParameters;
