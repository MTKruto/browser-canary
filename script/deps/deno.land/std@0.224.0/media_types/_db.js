"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.extensions = exports.db = exports.types = void 0;
// Copyright 2018-2024 the Deno authors. All rights reserved. MIT license.
const mime_db_v1_52_0_js_1 = __importDefault(require("./vendor/mime-db.v1.52.0.js"));
exports.db = mime_db_v1_52_0_js_1.default;
/** A map of the media type for a given extension */
exports.types = new Map();
/** A map of extensions for a given media type. */
const extensions = new Map();
exports.extensions = extensions;
/** Internal function to populate the maps based on the Mime DB. */
const preference = ["nginx", "apache", undefined, "iana"];
for (const type of Object.keys(mime_db_v1_52_0_js_1.default)) {
    const mime = mime_db_v1_52_0_js_1.default[type];
    const exts = mime.extensions;
    if (!exts || !exts.length) {
        continue;
    }
    // @ts-ignore work around denoland/dnt#148
    extensions.set(type, exts);
    for (const ext of exts) {
        const current = exports.types.get(ext);
        if (current) {
            const from = preference.indexOf(mime_db_v1_52_0_js_1.default[current].source);
            const to = preference.indexOf(mime.source);
            if (current !== "application/octet-stream" &&
                (from > to ||
                    // @ts-ignore work around denoland/dnt#148
                    (from === to && current.startsWith("application/")))) {
                continue;
            }
        }
        exports.types.set(ext, type);
    }
}
