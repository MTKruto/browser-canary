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
exports.isOptionalParam = isOptionalParam;
exports.analyzeOptionalParam = analyzeOptionalParam;
exports.isValidType = isValidType;
exports.assertIsValidType = assertIsValidType;
exports.is = is;
exports.isOneOf = isOneOf;
exports.isOfEnum = isOfEnum;
exports.as = as;
exports.isGenericFunction = isGenericFunction;
const _0_deps_js_1 = require("../0_deps.js");
const _0_api_js_1 = require("./0_api.js");
function isOptionalParam(ntype) {
    return ntype.includes("?");
}
function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    (0, _0_deps_js_1.assertEquals)(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    (0, _0_deps_js_1.assertFalse)(isNaN(bitIndex));
    return { flagField, bitIndex };
}
function isValidType(object) {
    return object != null && typeof object === "object" && typeof object._ === "string" && (0, _0_api_js_1.getType)(object._) !== undefined;
}
function assertIsValidType(object) {
    if (!isValidType(object)) {
        throw new Error("Invalid object");
    }
}
function is(typeName, value) {
    if (!isValidType(value)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
function isOneOf(typeNames, value) {
    return typeNames.some((v) => is(v, value));
}
function isOfEnum(enumName, value) {
    return isOneOf((0, _0_api_js_1.getEnum)(enumName) ?? [], value);
}
function as(typeName, value) {
    if (is(typeName, value)) {
        return value;
    }
    else {
        (0, _0_deps_js_1.unreachable)();
    }
}
const GENERIC_FUNCTIONS = [
    "invokeAfterMsg",
    "invokeAfterMsgs",
    "initConnection",
    "invokeWithLayer",
    "invokeWithoutUpdates",
    "invokeWithMessagesRange",
    "invokeWithTakeout",
];
function isGenericFunction(value) {
    return isOneOf(GENERIC_FUNCTIONS, value);
}
