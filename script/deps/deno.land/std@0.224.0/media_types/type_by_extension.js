"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeByExtension = void 0;
const _db_js_1 = require("./_db.js");
/**
 * Returns the media type associated with the file extension. Values are
 * normalized to lower case and matched irrespective of a leading `.`.
 *
 * When `extension` has no associated type, the function returns `undefined`.
 *
 * @example
 * ```ts
 * import { typeByExtension } from "https://deno.land/std@$STD_VERSION/media_types/type_by_extension.ts";
 *
 * typeByExtension("js"); // "application/json"
 * typeByExtension(".HTML"); // "text/html"
 * typeByExtension("foo"); // undefined
 * typeByExtension("file.json"); // undefined
 * ```
 */
function typeByExtension(extension) {
    extension = extension.startsWith(".") ? extension.slice(1) : extension;
    // @ts-ignore workaround around denoland/dnt#148
    return _db_js_1.types.get(extension.toLowerCase());
}
exports.typeByExtension = typeByExtension;
