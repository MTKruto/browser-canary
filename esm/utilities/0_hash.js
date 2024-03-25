export async function sha256(payload) {
    return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}
export async function sha1(payload) {
    return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}
