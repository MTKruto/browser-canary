import type { Node } from './Node.js';
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
export declare const elementNames: Map<string, string>;
export declare const attributeNames: Map<string, string>;
export interface DomSerializerOptions {
    /**
     * Print an empty attribute's value.
     *
     * @default xmlMode
     * @example With <code>emptyAttrs: false</code>: <code>&lt;input checked&gt;</code>
     * @example With <code>emptyAttrs: true</code>: <code>&lt;input checked=""&gt;</code>
     */
    emptyAttrs?: boolean;
    /**
     * Print self-closing tags for tags without contents.
     *
     * @default xmlMode
     * @example With <code>selfClosingTags: false</code>: <code>&lt;foo&gt;&lt;/foo&gt;</code>
     * @example With <code>selfClosingTags: true</code>: <code>&lt;foo /&gt;</code>
     */
    selfClosingTags?: boolean;
    /**
     * Treat the input as an XML document; enables the `emptyAttrs` and `selfClosingTags` options.
     *
     * If the value is `"foreign"`, it will try to correct mixed-case attribute names.
     *
     * @default false
     */
    xmlMode?: boolean | 'foreign';
    /**
     * Encode characters that are either reserved in HTML or XML, or are outside of the ASCII range.
     *
     * @default true
     */
    decodeEntities?: boolean;
}
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
export default function render(node: Node | ArrayLike<Node>, options?: DomSerializerOptions): string;
//# sourceMappingURL=DomSerializer.d.ts.map