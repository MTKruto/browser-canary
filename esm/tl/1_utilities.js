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
import { assertEquals, assertFalse, unreachable } from "../0_deps.js";
import { getEnum, getType } from "./0_api.js";
export function isOptionalParam(ntype) {
    return ntype.includes("?");
}
export function analyzeOptionalParam(ntype) {
    if (!isOptionalParam(ntype)) {
        throw new Error("Parameter not optional");
    }
    const flagField = ntype.split(".")[0];
    assertEquals(typeof flagField, "string");
    const bitIndex = Number(ntype.split("?")[0].split(".")[1]);
    assertFalse(isNaN(bitIndex));
    return { flagField, bitIndex };
}
export function isValidType(object) {
    return object != null && typeof object === "object" && typeof object._ === "string" && getType(object._) !== undefined;
}
export function assertIsValidType(object) {
    if (!isValidType(object)) {
        throw new Error("Invalid object");
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
export function is(typeName, value, deep = false) {
    if (deep && isOneOf(GENERIC_FUNCTIONS, value)) {
        value = value.query;
    }
    if (!isValidType(value)) {
        return false;
    }
    else {
        return value._ === typeName;
    }
}
export function isOneOf(typeNames, value) {
    return typeNames.some((v) => is(v, value));
}
export function isOfEnum(enumName, value) {
    return isOneOf(getEnum(enumName) ?? [], value);
}
export function as(typeName, value) {
    if (is(typeName, value)) {
        return value;
    }
    else {
        unreachable();
    }
}
