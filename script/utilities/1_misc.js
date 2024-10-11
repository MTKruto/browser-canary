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
exports.VECTOR_CONSTRUCTOR = exports.ZERO_CHANNEL_ID = void 0;
exports.drop = drop;
exports.mustPrompt = mustPrompt;
exports.mustPromptNumber = mustPromptNumber;
exports.mustPromptOneOf = mustPromptOneOf;
exports.toUnixTimestamp = toUnixTimestamp;
exports.fromUnixTimestamp = fromUnixTimestamp;
exports.iterateReadableStream = iterateReadableStream;
const _0_deps_js_1 = require("../0_deps.js");
const _0_units_js_1 = require("./0_units.js");
function drop(maybePromise) {
    if (maybePromise !== undefined && maybePromise != null && typeof maybePromise === "object" && maybePromise instanceof Promise) {
        maybePromise.catch(() => { });
    }
}
function mustPrompt(message) {
    const result = prompt(message);
    if (result == null) {
        throw (0, _0_deps_js_1.unreachable)();
    }
    else {
        return result;
    }
}
function mustPromptNumber(message) {
    let result = Number(BigInt(mustPrompt(message)));
    while (isNaN(result)) {
        console.log("Expected a number.");
        result = Number(BigInt(mustPrompt(message)));
    }
    return result;
}
function mustPromptOneOf(message, choices) {
    let result = prompt(message);
    while (result == null || !choices.includes(result)) {
        result = prompt(message);
    }
    return result;
}
exports.ZERO_CHANNEL_ID = -1000000000000;
exports.VECTOR_CONSTRUCTOR = 0x1CB5C415;
function toUnixTimestamp(date) {
    return Math.floor(date.getTime() / _0_units_js_1.second);
}
function fromUnixTimestamp(date) {
    return new Date(date * _0_units_js_1.second);
}
async function* iterateReadableStream(stream) {
    const reader = stream.getReader();
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                return;
            yield value;
        }
    }
    finally {
        reader.releaseLock();
    }
}
