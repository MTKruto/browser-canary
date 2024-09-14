"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumber = exports.getString = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
const prefix = "MTKRUTO__";
// deno-lint-ignore no-explicit-any
const global_ = dntShim.dntGlobalThis;
function getString(name) {
    const globalName = prefix + name;
    if (globalName in global_) {
        const value = global_[globalName];
        if (value) {
            const string = value + "";
            if (string) {
                return string;
            }
        }
        return null;
    }
    else if ("Deno" in global_) {
        return global_.Deno.env.get(name) ?? null;
    }
    else if ("process" in global_) {
        return global_.process.env[name] ?? null;
    }
    else {
        return null;
    }
}
exports.getString = getString;
function getNumber(name) {
    const value = getString(name);
    if (value == null) {
        return null;
    }
    const number = Number(value);
    if (isNaN(number)) {
        return null;
    }
    else {
        return number;
    }
}
exports.getNumber = getNumber;
