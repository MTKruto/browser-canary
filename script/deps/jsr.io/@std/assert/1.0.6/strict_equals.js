"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertStrictEquals = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const build_message_js_1 = require("../../internal/1.0.4/build_message.js");
const diff_js_1 = require("../../internal/1.0.4/diff.js");
const diff_str_js_1 = require("../../internal/1.0.4/diff_str.js");
const format_js_1 = require("../../internal/1.0.4/format.js");
const styles_js_1 = require("../../internal/1.0.4/styles.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` and `expected` are strictly equal, using
 * {@linkcode Object.is} for equality comparison. If not, then throw.
 *
 * @example Usage
 * ```ts ignore
 * import { assertStrictEquals } from "@std/assert";
 *
 * const a = {};
 * const b = a;
 * assertStrictEquals(a, b); // Doesn't throw
 *
 * const c = {};
 * const d = {};
 * assertStrictEquals(c, d); // Throws
 * ```
 *
 * @typeParam T The type of the expected value.
 * @param actual The actual value to compare.
 * @param expected The expected value to compare.
 * @param msg The optional message to display if the assertion fails.
 */
function assertStrictEquals(actual, expected, msg) {
    if (Object.is(actual, expected)) {
        return;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    let message;
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    if (actualString === expectedString) {
        const withOffset = actualString
            .split("\n")
            .map((l) => `    ${l}`)
            .join("\n");
        message =
            `Values have the same structure but are not reference-equal${msgSuffix}\n\n${(0, styles_js_1.red)(withOffset)}\n`;
    }
    else {
        const stringDiff = (typeof actual === "string") &&
            (typeof expected === "string");
        const diffResult = stringDiff
            ? (0, diff_str_js_1.diffStr)(actual, expected)
            : (0, diff_js_1.diff)(actualString.split("\n"), expectedString.split("\n"));
        const diffMsg = (0, build_message_js_1.buildMessage)(diffResult, { stringDiff }).join("\n");
        message = `Values are not strictly equal${msgSuffix}\n${diffMsg}`;
    }
    throw new assertion_error_js_1.AssertionError(message);
}
exports.assertStrictEquals = assertStrictEquals;