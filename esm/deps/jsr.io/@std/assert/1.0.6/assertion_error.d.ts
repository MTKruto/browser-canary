/**
 * Error thrown when an assertion fails.
 *
 * @example Usage
 * ```ts ignore
 * import { AssertionError } from "@std/assert";
 *
 * try {
 *   throw new AssertionError("foo", { cause: "bar" });
 * } catch (error) {
 *   if (error instanceof AssertionError) {
 *     error.message === "foo"; // true
 *     error.cause === "bar"; // true
 *   }
 * }
 * ```
 */
export declare class AssertionError extends Error {
    /** Constructs a new instance.
     *
     * @param message The error message.
     * @param options Additional options. This argument is still unstable. It may change in the future release.
     */
    constructor(message: string, options?: ErrorOptions);
}
//# sourceMappingURL=assertion_error.d.ts.map