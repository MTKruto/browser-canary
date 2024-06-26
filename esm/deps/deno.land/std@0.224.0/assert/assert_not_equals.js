// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { CAN_NOT_DISPLAY } from "./_constants.js";
import { equal } from "./equal.js";
import { AssertionError } from "./assertion_error.js";
/**
 * Make an assertion that `actual` and `expected` are not equal, deeply.
 * If not then throw.
 *
 * Type parameter can be specified to ensure values under comparison have the same type.
 *
 * @example
 * ```ts
 * import { assertNotEquals } from "https://deno.land/std@$STD_VERSION/assert/assert_not_equals.ts";
 *
 * assertNotEquals(1, 2); // Doesn't throw
 * assertNotEquals(1, 1); // Throws
 * ```
 */
export function assertNotEquals(actual, expected, msg) {
    if (!equal(actual, expected)) {
        return;
    }
    let actualString;
    let expectedString;
    try {
        actualString = String(actual);
    }
    catch {
        actualString = CAN_NOT_DISPLAY;
    }
    try {
        expectedString = String(expected);
    }
    catch {
        expectedString = CAN_NOT_DISPLAY;
    }
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new AssertionError(`Expected actual: ${actualString} not to be: ${expectedString}${msgSuffix}`);
}
