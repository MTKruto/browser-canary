/**
 * MTKruto - Cross-runtime JavaScript library for building Telegram clients
 * Copyright (C) 2023-2024 Roj <https://roj.im/>
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
import { sha256 } from "../1_utilities.js";
import { enums, types } from "../2_tl.js";
export declare function isSafePrime(primeBytes: Uint8Array, g: number): boolean;
export declare const h: typeof sha256;
export declare const sh: (data: Uint8Array, salt: Uint8Array) => Promise<Uint8Array>;
export declare const ph1: (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => Promise<Uint8Array>;
export declare function pbkdf2(password: Uint8Array, salt: Uint8Array, iterations: number): Promise<Uint8Array>;
export declare const ph2: (password: Uint8Array, salt1: Uint8Array, salt2: Uint8Array) => Promise<Uint8Array>;
export declare function isGoodModExpFirst(modexp: bigint, prime: bigint): boolean;
export declare function pad(bigint: number | bigint | Uint8Array): Uint8Array;
export declare function checkPassword(password_: string, ap: enums.account.Password): Promise<types.InputCheckPasswordSRP>;
