// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { join } from "./join.js";
import { SEPARATOR } from "./constants.js";
import { normalizeGlob } from "./normalize_glob.js";
/** Like join(), but doesn't collapse "**\/.." when `globstar` is true. */
export function joinGlobs(globs, { extended = true, globstar = false } = {}) {
    if (!globstar || globs.length === 0) {
        return join(...globs);
    }
    if (globs.length === 0)
        return ".";
    let joined;
    for (const glob of globs) {
        const path = glob;
        if (path.length > 0) {
            if (!joined)
                joined = path;
            else
                joined += `${SEPARATOR}${path}`;
        }
    }
    if (!joined)
        return ".";
    return normalizeGlob(joined, { extended, globstar });
}
