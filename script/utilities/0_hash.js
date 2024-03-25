"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha1 = exports.sha256 = void 0;
async function sha256(payload) {
    return new Uint8Array(await crypto.subtle.digest("SHA-256", payload));
}
exports.sha256 = sha256;
async function sha1(payload) {
    return new Uint8Array(await crypto.subtle.digest("SHA-1", payload));
}
exports.sha1 = sha1;
