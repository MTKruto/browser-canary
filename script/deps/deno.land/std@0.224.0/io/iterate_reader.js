"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterateReaderSync = exports.iterateReader = void 0;
const _constants_js_1 = require("./_constants.js");
/**
 * Turns a {@linkcode Reader} into an async iterator.
 *
 * @example
 * ```ts
 * import { iterateReader } from "https://deno.land/std@$STD_VERSION/io/iterate_reader.ts";
 *
 * using file = await Deno.open("/etc/passwd");
 * for await (const chunk of iterateReader(file)) {
 *   console.log(chunk);
 * }
 * ```
 *
 * Second argument can be used to tune size of a buffer.
 * Default size of the buffer is 32kB.
 *
 * @example
 * ```ts
 * import { iterateReader } from "https://deno.land/std@$STD_VERSION/io/iterate_reader.ts";
 *
 * using file = await Deno.open("/etc/passwd");
 * const iter = iterateReader(file, {
 *   bufSize: 1024 * 1024
 * });
 * for await (const chunk of iter) {
 *   console.log(chunk);
 * }
 * ```
 */
async function* iterateReader(reader, options) {
    const bufSize = options?.bufSize ?? _constants_js_1.DEFAULT_BUFFER_SIZE;
    const b = new Uint8Array(bufSize);
    while (true) {
        const result = await reader.read(b);
        if (result === null) {
            break;
        }
        yield b.slice(0, result);
    }
}
exports.iterateReader = iterateReader;
/**
 * Turns a {@linkcode ReaderSync} into an iterator.
 *
 * ```ts
 * import { iterateReaderSync } from "https://deno.land/std@$STD_VERSION/io/iterate_reader.ts";
 *
 * using file = Deno.openSync("/etc/passwd");
 * for (const chunk of iterateReaderSync(file)) {
 *   console.log(chunk);
 * }
 * ```
 *
 * Second argument can be used to tune size of a buffer.
 * Default size of the buffer is 32kB.
 *
 * ```ts
 * import { iterateReaderSync } from "https://deno.land/std@$STD_VERSION/io/iterate_reader.ts";

 * using file = await Deno.open("/etc/passwd");
 * const iter = iterateReaderSync(file, {
 *   bufSize: 1024 * 1024
 * });
 * for (const chunk of iter) {
 *   console.log(chunk);
 * }
 * ```
 *
 * Iterator uses an internal buffer of fixed size for efficiency; it returns
 * a view on that buffer on each iteration. It is therefore caller's
 * responsibility to copy contents of the buffer if needed; otherwise the
 * next iteration will overwrite contents of previously returned chunk.
 */
function* iterateReaderSync(reader, options) {
    const bufSize = options?.bufSize ?? _constants_js_1.DEFAULT_BUFFER_SIZE;
    const b = new Uint8Array(bufSize);
    while (true) {
        const result = reader.readSync(b);
        if (result === null) {
            break;
        }
        yield b.slice(0, result);
    }
}
exports.iterateReaderSync = iterateReaderSync;
