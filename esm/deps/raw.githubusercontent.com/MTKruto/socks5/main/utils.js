import * as dntShim from "../../../../../_dnt.shims.js";
export async function readN(reader, n) {
    const out = new Uint8Array(n);
    let nRead = 0;
    while (nRead < n) {
        const m = await reader.read(out.subarray(nRead));
        if (m === null) {
            throw new dntShim.Deno.errors.UnexpectedEof(`reached EOF but we expected to read ${n - nRead} more bytes`);
        }
        nRead += m;
    }
    return out;
}
