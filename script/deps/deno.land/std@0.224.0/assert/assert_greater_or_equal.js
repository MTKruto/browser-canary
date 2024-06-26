"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertGreaterOrEqual = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const format_js_1 = require("../internal/format.js");
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Make an assertion that `actual` is greater than or equal to `expected`.
 * If not then throw.
 *
 * @example
 * ```ts
 * import { assertGreaterOrEqual } from "https://deno.land/std@$STD_VERSION/assert/assert_greater_or_equal.ts";
 *
 * assertGreaterOrEqual(2, 1); // Doesn't throw
 * assertGreaterOrEqual(1, 1); // Doesn't throw
 * assertGreaterOrEqual(0, 1); // Throws
 * ```
 */
function assertGreaterOrEqual(actual, expected, msg) {
    if (actual >= expected)
        return;
    const actualString = (0, format_js_1.format)(actual);
    const expectedString = (0, format_js_1.format)(expected);
    throw new assertion_error_js_1.AssertionError(msg ?? `Expect ${actualString} >= ${expectedString}`);
}
exports.assertGreaterOrEqual = assertGreaterOrEqual;
