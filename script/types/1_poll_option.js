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
exports.constructPollOption = void 0;
const _0_message_entity_js_1 = require("./0_message_entity.js");
function constructPollOption(option, results) {
    return {
        text: option.text.text,
        entities: option.text.entities?.map(_0_message_entity_js_1.constructMessageEntity).filter((v) => v != null),
        voterCount: results.find((v) => v.option.every((v, i) => option.option[i] == v))?.voters ?? 0,
    };
}
exports.constructPollOption = constructPollOption;
