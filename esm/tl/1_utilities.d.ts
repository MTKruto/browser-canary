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
import { AnyType, Enums, Functions, Types } from "./0_api.js";
export declare function isOptionalParam(ntype: string): boolean;
export declare function analyzeOptionalParam(ntype: string): {
    flagField: string;
    bitIndex: number;
};
export declare function isValidType(object: any): object is AnyType;
export declare function assertIsValidType(object: any): void;
export declare function is<S extends keyof (Types & Functions)>(typeName: S, value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never;
export declare function isOneOf<S extends keyof (Types & Functions)>(typeNames: S[] | readonly S[], value: unknown): value is S extends keyof Types ? Types[S] : S extends keyof Functions ? Functions[S] : never;
export declare function isOfEnum<S extends keyof Enums>(enumName: S, value: unknown): value is Enums[S];
export declare function as<S extends keyof Types>(typeName: S, value: unknown): Types[S];
export declare function isGenericFunction(value: unknown): boolean;
//# sourceMappingURL=1_utilities.d.ts.map