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
exports.reactionEqual = exports.reactionToTlObject = exports.constructReaction = void 0;
const _0_deps_js_1 = require("../0_deps.js");
const _2_tl_js_1 = require("../2_tl.js");
function constructReaction(reaction) {
    if ((0, _2_tl_js_1.is)("reactionEmoji", reaction)) {
        return { type: "emoji", emoji: reaction.emoticon };
    }
    else if ((0, _2_tl_js_1.is)("reactionCustomEmoji", reaction)) {
        return { type: "custom", id: String(reaction.document_id) };
    }
    else if ((0, _2_tl_js_1.is)("reactionPaid", reaction)) {
        return { type: "paid" };
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
exports.constructReaction = constructReaction;
function reactionToTlObject(reaction) {
    return reaction.type == "emoji" ? ({ _: "reactionEmoji", emoticon: reaction.emoji }) : reaction.type == "customEmoji" ? ({ _: "reactionCustomEmoji", document_id: BigInt(reaction.id) }) : { _: "reactionPaid" };
}
exports.reactionToTlObject = reactionToTlObject;
function reactionEqual(left, right) {
    if (left.type == "emoji") {
        if (right.type == "emoji" && left.emoji == right.emoji) {
            return true;
        }
    }
    else if (left.type == "customEmoji") {
        if (right.type == "customEmoji" && left.id == right.id) {
            return true;
        }
    }
    return false;
}
exports.reactionEqual = reactionEqual;
