import type { ParsedPath } from "./_interface.js";
export type { ParsedPath } from "./_interface.js";
/**
 * Return a `ParsedPath` object of the `path`. Use `format` to reverse the result.
 *
 * @example
 * ```ts
 * import { parse } from "https://deno.land/std@$STD_VERSION/path/mod.ts";
 *
 * const parsedPathObj = parse("/path/to/dir/script.ts");
 * parsedPathObj.root; // "/"
 * parsedPathObj.dir; // "/path/to/dir"
 * parsedPathObj.base; // "script.ts"
 * parsedPathObj.ext; // ".ts"
 * parsedPathObj.name; // "script"
 * ```
 * @param path to process
 */
export declare function parse(path: string): ParsedPath;
//# sourceMappingURL=parse.d.ts.map