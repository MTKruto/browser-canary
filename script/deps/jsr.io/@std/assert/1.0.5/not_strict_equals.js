"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotStrictEquals = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
const format_js_1 = require("../../internal/1.0.3/format.js");
/**
 * Make an assertion that `actual` and `expected` are not strictly equal, using
 * {@linkcode Object.is} for equality comparison. If the values are strictly
 * equal then throw.
 *
 * @example Usage
 * ```ts no-eval
 * import { assertNotStrictEquals } from "@std/assert";
 *
 * assertNotStrictEquals(1, 1); // Throws
 * assertNotStrictEquals(1, 2); // Doesn't throw
 *
 * assertNotStrictEquals(0, 0); // Throws
 * assertNotStrictEquals(0, -0); // Doesn't throw
 * ```
 *
 * @typeParam T The type of the values to compare.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
function assertNotStrictEquals(actual, expected, msg) {
    if (!Object.is(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new assertion_error_js_1.AssertionError(`Expected "actual" to not be strictly equal to: ${(0, format_js_1.format)(actual)}${msgSuffix}\n`);
}
exports.assertNotStrictEquals = assertNotStrictEquals;