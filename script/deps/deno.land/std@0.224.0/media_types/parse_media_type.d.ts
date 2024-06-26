/**
 * Parses the media type and any optional parameters, per
 * {@link https://datatracker.ietf.org/doc/html/rfc1521 | RFC 1521}. Media
 * types are the values in `Content-Type` and `Content-Disposition` headers. On
 * success the function returns a tuple where the first element is the media
 * type and the second element is the optional parameters or `undefined` if
 * there are none.
 *
 * The function will throw if the parsed value is invalid.
 *
 * The returned media type will be normalized to be lower case, and returned
 * params keys will be normalized to lower case, but preserves the casing of
 * the value.
 *
 * @example
 * ```ts
 * import { parseMediaType } from "https://deno.land/std@$STD_VERSION/media_types/parse_media_type.ts";
 *
 * parseMediaType("application/JSON"); // ["application/json", undefined]
 * parseMediaType("text/html; charset=UTF-8"); // ["text/html", { charset: "UTF-8" }]
 * ```
 */
export declare function parseMediaType(v: string): [mediaType: string, params: Record<string, string> | undefined];
//# sourceMappingURL=parse_media_type.d.ts.map