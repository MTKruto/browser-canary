"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertIsError = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
const assertion_error_js_1 = require("./assertion_error.js");
const styles_js_1 = require("../../internal/1.0.4/styles.js");
/**
 * Make an assertion that `error` is an `Error`.
 * If not then an error will be thrown.
 * An error class and a string that should be included in the
 * error message can also be asserted.
 *
 * @example Usage
 * ```ts ignore
 * import { assertIsError } from "@std/assert";
 *
 * assertIsError(null); // Throws
 * assertIsError(new RangeError("Out of range")); // Doesn't throw
 * assertIsError(new RangeError("Out of range"), SyntaxError); // Throws
 * assertIsError(new RangeError("Out of range"), SyntaxError, "Out of range"); // Doesn't throw
 * assertIsError(new RangeError("Out of range"), SyntaxError, "Within range"); // Throws
 * ```
 *
 * @typeParam E The type of the error to assert.
 * @param error The error to assert.
 * @param ErrorClass The optional error class to assert.
 * @param msgMatches The optional string or RegExp to assert in the error message.
 * @param msg The optional message to display if the assertion fails.
 */
function assertIsError(error, 
// deno-lint-ignore no-explicit-any
ErrorClass, msgMatches, msg) {
    const msgSuffix = msg ? `: ${msg}` : ".";
    if (!(error instanceof Error)) {
        throw new assertion_error_js_1.AssertionError(`Expected "error" to be an Error object${msgSuffix}}`);
    }
    if (ErrorClass && !(error instanceof ErrorClass)) {
        msg =
            `Expected error to be instance of "${ErrorClass.name}", but was "${error?.constructor?.name}"${msgSuffix}`;
        throw new assertion_error_js_1.AssertionError(msg);
    }
    let msgCheck;
    if (typeof msgMatches === "string") {
        msgCheck = (0, styles_js_1.stripAnsiCode)(error.message).includes((0, styles_js_1.stripAnsiCode)(msgMatches));
    }
    if (msgMatches instanceof RegExp) {
        msgCheck = msgMatches.test((0, styles_js_1.stripAnsiCode)(error.message));
    }
    if (msgMatches && !msgCheck) {
        msg = `Expected error message to include ${msgMatches instanceof RegExp
            ? msgMatches.toString()
            : JSON.stringify(msgMatches)}, but got ${JSON.stringify(error?.message)}${msgSuffix}`;
        throw new assertion_error_js_1.AssertionError(msg);
    }
}
exports.assertIsError = assertIsError;