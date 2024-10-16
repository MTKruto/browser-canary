"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOuterHTML = getOuterHTML;
exports.getInnerHTML = getInnerHTML;
exports.getText = getText;
exports.textContent = textContent;
exports.innerText = innerText;
const Node_js_1 = require("../Node.js");
const DomSerializer_js_1 = __importDefault(require("../DomSerializer.js"));
const ElementType_js_1 = require("../ElementType.js");
/**
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, DomSerializer_js_1.default)(node, options);
}
/**
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @deprecated Use the `dom-serializer` module directly.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, Node_js_1.hasChildren)(node)
        ? node.children.map(node => getOuterHTML(node, options)).join('')
        : '';
}
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join('');
    if ((0, Node_js_1.isTag)(node))
        return node.name === 'br' ? '\n' : getText(node.children);
    if ((0, Node_js_1.isCDATA)(node))
        return getText(node.children);
    if ((0, Node_js_1.isText)(node))
        return node.data;
    return '';
}
/**
 * Get a node's text content.
 *
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join('');
    if ((0, Node_js_1.hasChildren)(node) && !(0, Node_js_1.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, Node_js_1.isText)(node))
        return node.data;
    return '';
}
/**
 * Get a node's inner text.
 *
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join('');
    if ((0, Node_js_1.hasChildren)(node) && (node.type === ElementType_js_1.ElementType.Tag || (0, Node_js_1.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, Node_js_1.isText)(node))
        return node.data;
    return '';
}
