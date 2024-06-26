"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unimplemented = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
/**
 * Use this to stub out methods that will throw when invoked.
 *
 * @example
 * ```ts
 * import { unimplemented } from "https://deno.land/std@$STD_VERSION/assert/unimplemented.ts";
 *
 * unimplemented(); // Throws
 * ```
 */
function unimplemented(msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    throw new assertion_error_js_1.AssertionError(`Unimplemented${msgSuffix}`);
}
exports.unimplemented = unimplemented;
