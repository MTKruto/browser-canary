"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentType = void 0;
const parse_media_type_js_1 = require("./parse_media_type.js");
const get_charset_js_1 = require("./get_charset.js");
const format_media_type_js_1 = require("./format_media_type.js");
const type_by_extension_js_1 = require("./type_by_extension.js");
/**
 * Given an extension or media type, return a full `Content-Type` or
 * `Content-Disposition` header value.
 *
 * The function will treat the `extensionOrType` as a media type when it
 * contains a `/`, otherwise it will process it as an extension, with or without
 * the leading `.`.
 *
 * Returns `undefined` if unable to resolve the media type.
 *
 * > Note: a side effect of `deno/x/media_types` was that you could pass a file
 * > name (e.g. `file.json`) and it would return the content type. This behavior
 * > is intentionally not supported here. If you want to get an extension for a
 * > file name, use `extname()` from `std/path/mod.ts` to determine the
 * > extension and pass it here.
 *
 * @example
 * ```ts
 * import { contentType } from "https://deno.land/std@$STD_VERSION/media_types/content_type.ts";
 *
 * contentType(".json"); // "application/json; charset=UTF-8"
 * contentType("text/html"); // "text/html; charset=UTF-8"
 * contentType("text/html; charset=UTF-8"); // "text/html; charset=UTF-8"
 * contentType("txt"); // "text/plain; charset=UTF-8"
 * contentType("foo"); // undefined
 * contentType("file.json"); // undefined
 * ```
 */
function contentType(extensionOrType) {
    try {
        const [mediaType, params = {}] = extensionOrType.includes("/")
            ? (0, parse_media_type_js_1.parseMediaType)(extensionOrType)
            : [(0, type_by_extension_js_1.typeByExtension)(extensionOrType), undefined];
        if (!mediaType) {
            return undefined;
        }
        if (!("charset" in params)) {
            const charset = (0, get_charset_js_1.getCharset)(mediaType);
            if (charset) {
                params.charset = charset;
            }
        }
        return (0, format_media_type_js_1.formatMediaType)(mediaType, params);
    }
    catch {
        // just swallow returning undefined
    }
    return undefined;
}
exports.contentType = contentType;
