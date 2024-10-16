/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
 *
 * This file is part of MTKruto.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
export * from "./deps/jsr.io/@std/assert/1.0.6/mod.js";
export * as path from "./deps/jsr.io/@std/path/1.0.6/mod.js";
export { concat } from "./deps/jsr.io/@std/bytes/1.0.2/concat.js";
export { iterateReader } from "./deps/jsr.io/@std/io/0.225.0/iterate_reader.js";
export { decodeBase64, encodeBase64 } from "./deps/jsr.io/@std/encoding/1.0.5/base64.js";
import { contentType as contentType_ } from "./deps/jsr.io/@std/media-types/1.0.3/content_type.js";
export declare const contentType: typeof contentType_;
export declare function extension(mimeType: string): string;
export { createCtr256State, ctr256, type Ctr256State, destroyCtr256State, ige256Decrypt, ige256Encrypt, init as initTgCrypto } from "./deps/deno.land/x/tgcrypto@0.4.1/mod.js";
export { gunzip, gzip } from "./deps/raw.githubusercontent.com/MTKruto/compress/main/mod.js";
export { Client as SocksClient } from "./deps/raw.githubusercontent.com/MTKruto/socks5/main/client.js";
export { Parser } from "./deps/deno.land/x/html_parser@v0.1.3/src/mod.js";
//# sourceMappingURL=0_deps.d.ts.map