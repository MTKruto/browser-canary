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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.DomHandler = exports.Parser = void 0;
exports.parseDocument = parseDocument;
exports.parseDOM = parseDOM;
exports.createDomStream = createDomStream;
const Parser_js_1 = require("./Parser.js");
Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_js_1.Parser; } });
const DomHandler_js_1 = require("./DomHandler.js");
Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function () { return DomHandler_js_1.DomHandler; } });
Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function () { return DomHandler_js_1.DomHandler; } });
// Helper methods
/**
 * Parses the data, returns the resulting document.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 */
function parseDocument(data, options) {
    const handler = new DomHandler_js_1.DomHandler(undefined, options);
    new Parser_js_1.Parser(handler, options).end(data);
    return handler.root;
}
/**
 * Parses data, returns an array of the root nodes.
 *
 * Note that the root nodes still have a `Document` node as their parent.
 * Use `parseDocument` to get the `Document` node instead.
 *
 * @param data The data that should be parsed.
 * @param options Optional options for the parser and DOM builder.
 * @deprecated Use `parseDocument` instead.
 */
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
/**
 * Creates a parser instance, with an attached DOM handler.
 *
 * @param cb A callback that will be called once parsing has been completed.
 * @param options Optional options for the parser and DOM builder.
 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
 */
function createDomStream(cb, options, elementCb) {
    const handler = new DomHandler_js_1.DomHandler(cb, options, elementCb);
    return new Parser_js_1.Parser(handler, options);
}
var Tokenizer_js_1 = require("./Tokenizer.js");
Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return __importDefault(Tokenizer_js_1).default; } });
const ElementType = __importStar(require("./ElementType.js"));
exports.ElementType = ElementType;
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */
__exportStar(require("./FeedHandler.js"), exports);
exports.DomUtils = __importStar(require("./utils/mod.js"));
var FeedHandler_js_1 = require("./FeedHandler.js");
Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function () { return FeedHandler_js_1.FeedHandler; } });
