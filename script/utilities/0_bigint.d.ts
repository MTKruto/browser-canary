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
export declare function modExp(a: bigint, b: bigint, n: bigint): bigint;
export declare function mod(n: bigint, m: bigint): bigint;
export declare function mod(n: number, m: number): number;
export declare function bigIntFromBuffer(buffer: Uint8Array, little?: boolean, signed?: boolean): bigint;
export declare function getRandomBigInt(byteLength: number, little?: boolean, signed?: boolean): bigint;
/** Get a random ID. Useful when calling API functions directly. */
export declare function getRandomId(number: true): number;
export declare function getRandomId(): bigint;
export declare function gcd(a: bigint, b: bigint): bigint;
