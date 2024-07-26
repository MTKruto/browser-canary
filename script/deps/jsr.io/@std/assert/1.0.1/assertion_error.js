"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertionError = void 0;
/**
 * Error thrown when an assertion fails.
 *
 * @example Usage
 * ```ts no-eval
 * import { AssertionError } from "@std/assert";
 *
 * throw new AssertionError("Assertion failed");
 * ```
 */
class AssertionError extends Error {
    /** Constructs a new instance.
     *
     * @param message The error message.
     */
    constructor(message) {
        super(message);
        this.name = "AssertionError";
    }
}
exports.AssertionError = AssertionError;
