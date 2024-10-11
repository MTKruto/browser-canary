"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeAll = writeAll;
exports.writeAllSync = writeAllSync;
/**
 * Write all the content of the array buffer (`arr`) to the writer (`w`).
 *
 * @example
 * ```ts
 * import { writeAll } from "https://deno.land/std@$STD_VERSION/io/write_all.ts";

 * // Example writing to stdout
 * let contentBytes = new TextEncoder().encode("Hello World");
 * await writeAll(Deno.stdout, contentBytes);
 *
 * // Example writing to file
 * contentBytes = new TextEncoder().encode("Hello World");
 * using file = await Deno.open('test.file', {write: true});
 * await writeAll(file, contentBytes);
 * ```
 */
async function writeAll(writer, data) {
    let nwritten = 0;
    while (nwritten < data.length) {
        nwritten += await writer.write(data.subarray(nwritten));
    }
}
/**
 * Synchronously write all the content of the array buffer (`arr`) to the
 * writer (`w`).
 *
 * @example
 * ```ts
 * import { writeAllSync } from "https://deno.land/std@$STD_VERSION/io/write_all.ts";
 *
 * // Example writing to stdout
 * let contentBytes = new TextEncoder().encode("Hello World");
 * writeAllSync(Deno.stdout, contentBytes);
 *
 * // Example writing to file
 * contentBytes = new TextEncoder().encode("Hello World");
 * using file = Deno.openSync('test.file', {write: true});
 * writeAllSync(file, contentBytes);
 * ```
 */
function writeAllSync(writer, data) {
    let nwritten = 0;
    while (nwritten < data.length) {
        nwritten += writer.writeSync(data.subarray(nwritten));
    }
}
