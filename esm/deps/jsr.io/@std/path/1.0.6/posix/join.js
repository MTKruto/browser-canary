// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { assertPath } from "../_common/assert_path.js";
import { normalize } from "./normalize.js";
/**
 * Join all given a sequence of `paths`,then normalizes the resulting path.
 *
 * @example Usage
 * ```ts
 * import { join } from "@std/path/posix/join";
 * import { assertEquals } from "@std/assert";
 *
 * const path = join("/foo", "bar", "baz/asdf", "quux", "..");
 * assertEquals(path, "/foo/bar/baz/asdf");
 * ```
 *
 * Note: If you are working with file URLs,
 * use the new version of `join` from `@std/path/posix/unstable-join`.
 *
 * @param paths The paths to join.
 * @returns The joined path.
 */
export function join(...paths) {
    if (paths.length === 0)
        return ".";
    paths.forEach((path) => assertPath(path));
    const joined = paths.filter((path) => path.length > 0).join("/");
    return joined === "" ? "." : normalize(joined);
}