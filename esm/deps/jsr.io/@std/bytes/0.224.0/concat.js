// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
/**
 * Concatenate an array of byte slices into a single slice.
 *
 * @param buffers Array of byte slices to concatenate.
 * @returns Hello
 *
 * @example Basic usage
 * ```ts
 * import { concat } from "@std/bytes/concat";
 *
 * const a = new Uint8Array([0, 1, 2]);
 * const b = new Uint8Array([3, 4, 5]);
 *
 * concat([a, b]); // Uint8Array(6) [ 0, 1, 2, 3, 4, 5 ]
 * ```
 */
export function concat(buffers) {
    let length = 0;
    for (const buffer of buffers) {
        length += buffer.length;
    }
    const output = new Uint8Array(length);
    let index = 0;
    for (const buffer of buffers) {
        output.set(buffer, index);
        index += buffer.length;
    }
    return output;
}