// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { parseMediaType } from "./parse_media_type.js";
import { extensions } from "./_db.js";
export { extensions };
/**
 * Returns the extensions known to be associated with the media type `type`.
 * When `type` has no associated extensions, the function returns `undefined`.
 *
 * Extensions are returned without a leading `.`.
 *
 * @example
 * ```ts
 * import { extensionsByType } from "https://deno.land/std@$STD_VERSION/media_types/extensions_by_type.ts";
 *
 * extensionsByType("application/json"); // ["json", "map"]
 * extensionsByType("text/html; charset=UTF-8"); // ["html", "htm", "shtml"]
 * extensionsByType("application/foo"); // undefined
 * ```
 */
export function extensionsByType(type) {
    try {
        const [mediaType] = parseMediaType(type);
        return extensions.get(mediaType);
    }
    catch {
        // just swallow errors, returning undefined
    }
}
