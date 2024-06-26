"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertLess = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const format_js_1 = require("../internal/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` is less than `expected`.
 * If not then throw.
 *
 * @example
 * ```ts
 * import { assertLess } from "https://deno.land/std@$STD_VERSION/assert/assert_less.ts";
 *
 * assertLess(1, 2); // Doesn't throw
 * assertLess(2, 1); // Throws
 * ```
 */
function assertLess(actual, expected, msg) {
    if (actual < expected)
        return;
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    throw new assertion_error_js_1.AssertionError(msg ?? `Expect ${actualString} < ${expectedString}`);
}
exports.assertLess = assertLess;
