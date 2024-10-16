"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testElement = testElement;
exports.getElements = getElements;
exports.getElementById = getElementById;
exports.getElementsByTagName = getElementsByTagName;
exports.getElementsByTagType = getElementsByTagType;
const Node_js_1 = require("../Node.js");
const querying_js_1 = require("./querying.js");
const Checks = {
    tag_name(name) {
        if (typeof name === 'function') {
            return (elem) => (0, Node_js_1.isTag)(elem) && name(elem.name);
        }
        else if (name === '*') {
            return Node_js_1.isTag;
        }
        return (elem) => (0, Node_js_1.isTag)(elem) && elem.name === name;
    },
    tag_type(type) {
        if (typeof type === 'function') {
            return (elem) => type(elem.type);
        }
        return (elem) => elem.type === type;
    },
    tag_contains(data) {
        if (typeof data === 'function') {
            return (elem) => (0, Node_js_1.isText)(elem) && data(elem.data);
        }
        return (elem) => (0, Node_js_1.isText)(elem) && elem.data === data;
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === 'function') {
        return (elem) => (0, Node_js_1.isTag)(elem) && value(elem.attribs[attrib]);
    }
    return (elem) => (0, Node_js_1.isTag)(elem) && elem.attribs[attrib] === value;
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either
 * of the input functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return (elem) => a(elem) || b(elem);
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true`
 * if any of them match a node.
 */
function compileTest(options) {
    const funcs = Object.keys(options).map(key => {
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
/**
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
}
/**
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_js_1.findOne)(getAttribCheck('id', id), nodes, recurse);
}
/**
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0, querying_js_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
/**
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0, querying_js_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
