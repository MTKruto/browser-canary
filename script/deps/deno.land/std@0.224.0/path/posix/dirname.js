"use strict";
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirname = void 0;
const dirname_js_1 = require("../_common/dirname.js");
const strip_trailing_separators_js_1 = require("../_common/strip_trailing_separators.js");
const _util_js_1 = require("./_util.js");
/**
 * Return the directory path of a `path`.
 *
 * @example
 * ```ts
 * import { dirname } from "https://deno.land/std@$STD_VERSION/path/dirname.ts";
 *
 * console.log(dirname("/home/user/Documents/")); // "/home/user"
 * console.log(dirname("/home/user/Documents/image.png")); // "/home/user/Documents"
 * ```
 *
 * @param path - path to extract the directory from.
 */
function dirname(path) {
    (0, dirname_js_1.assertArg)(path);
    let end = -1;
    let matchedNonSeparator = false;
    for (let i = path.length - 1; i >= 1; --i) {
        if ((0, _util_js_1.isPosixPathSeparator)(path.charCodeAt(i))) {
            if (matchedNonSeparator) {
                end = i;
                break;
            }
        }
        else {
            matchedNonSeparator = true;
        }
    }
    // No matches. Fallback based on provided path:
    //
    // - leading slashes paths
    //     "/foo" => "/"
    //     "///foo" => "/"
    // - no slash path
    //     "foo" => "."
    if (end === -1) {
        return (0, _util_js_1.isPosixPathSeparator)(path.charCodeAt(0)) ? "/" : ".";
    }
    return (0, strip_trailing_separators_js_1.stripTrailingSeparators)(path.slice(0, end), _util_js_1.isPosixPathSeparator);
}
exports.dirname = dirname;
