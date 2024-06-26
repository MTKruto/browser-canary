// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { format } from "../internal/format.js";
import { AssertionError } from "./assertion_error.js";
/**
 * Make an assertion that `actual` is greater than `expected`.
 * If not then throw.
 *
 * @example
 * ```ts
 * import { assertGreater } from "https://deno.land/std@$STD_VERSION/assert/assert_greater.ts";
 *
 * assertGreater(2, 1); // Doesn't throw
 * assertGreater(1, 1); // Throws
 * assertGreater(0, 1); // Throws
 * ```
 */
export function assertGreater(actual, expected, msg) {
    if (actual > expected)
        return;
    const actualString = format(actual);
    const expectedString = format(expected);
    throw new AssertionError(msg ?? `Expect ${actualString} > ${expectedString}`);
}
