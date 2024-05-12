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
import { enums, types } from "../2_tl.js";
import { FileSource, Sticker } from "../3_types.js";
import { DownloadParams, UploadParams } from "./0_params.js";
import { C } from "./1_types.js";
export declare class FileManager {
    #private;
    constructor(c: C);
    upload(file: FileSource, params?: UploadParams, checkName?: null | ((name: string) => string), allowStream?: boolean): Promise<import("../tl/2_types.js").InputFile_ | import("../tl/2_types.js").InputFileBig_>;
    downloadInner(location: enums.InputFileLocation, dcId: number, params?: {
        chunkSize?: number;
        offset?: number;
    }): AsyncGenerator<Uint8Array, void, unknown>;
    static validateChunkSize(chunkSize: number, max: number): void;
    static validateOffset(offset: number): void;
    download(fileId: string, params?: DownloadParams): AsyncGenerator<Uint8Array, void, unknown>;
    getStickerSetName(inputStickerSet: types.InputStickerSetID, hash?: number): Promise<string>;
    getCustomEmojiStickers(id: string | string[]): Promise<Sticker[]>;
}
//# sourceMappingURL=2_file_manager.d.ts.map