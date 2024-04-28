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
import { DC } from "./3_transport.js";
export type PublicKeys = readonly [bigint, [bigint, bigint]][];
export declare const PUBLIC_KEYS: PublicKeys;
export declare const INITIAL_DC: DC;
export declare const LAYER = 177;
export declare const APP_VERSION = "MTKruto";
export declare const DEVICE_MODEL: string;
export declare const LANG_CODE: string;
export declare const LANG_PACK = "";
export declare const SYSTEM_LANG_CODE: string;
export declare const SYSTEM_VERSION: string;
export declare const USERNAME_TTL = 86400;
export declare const STICKER_SET_NAME_TTL = 172800;
export declare const MAX_CHAT_ID = 999999999999;
export declare const MAX_CHANNEL_ID = 997852516352;
export declare const CHANNEL_DIFFERENCE_LIMIT_USER = 100;
export declare const CHANNEL_DIFFERENCE_LIMIT_BOT = 100000;
//# sourceMappingURL=4_constants.d.ts.map