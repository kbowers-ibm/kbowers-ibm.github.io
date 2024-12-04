import { useMemo } from "react";
import { NODE_TYPES } from "../BpmnDiagramDomain";
import { assertUnreachable } from "../../ts-ext/assertUnreachable";
export const DEFAULT_NODE_RED_FILL = 255;
export const DEFAULT_NODE_GREEN_FILL = 255;
export const DEFAULT_NODE_BLUE_FILL = 255;
export const DEFAULT_NODE_OPACITY = 0.9;
export const DEFAULT_NODE_FILL = `rgba(${DEFAULT_NODE_RED_FILL}, ${DEFAULT_NODE_GREEN_FILL}, ${DEFAULT_NODE_BLUE_FILL}, ${DEFAULT_NODE_OPACITY})`;
export const DEFAULT_NODE_STROKE_COLOR = "rgba(0, 0, 0, 1)";
export const DEFAULT_FONT_COLOR = "rgba(0, 0, 0, 1)";
export function useNodeStyle(args) {
    const bpmnFontStyle = useMemo(() => getBpmnFontStyle({ isEnabled: args.isEnabled }), [args.isEnabled]);
    return useMemo(() => getNodeStyle({ bpmnFontStyle }), [bpmnFontStyle]);
}
export function getNodeStyle({ bpmnFontStyle }) {
    return {
        fontCssProperties: getFontCssProperties(bpmnFontStyle),
    };
}
export function getBpmnFontStyle(args) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
        bold: args.isEnabled ? (_b = (_a = args.dcFont) === null || _a === void 0 ? void 0 : _a["@_isBold"]) !== null && _b !== void 0 ? _b : false : false,
        italic: args.isEnabled ? (_d = (_c = args.dcFont) === null || _c === void 0 ? void 0 : _c["@_isItalic"]) !== null && _d !== void 0 ? _d : false : false,
        underline: args.isEnabled ? (_f = (_e = args.dcFont) === null || _e === void 0 ? void 0 : _e["@_isUnderline"]) !== null && _f !== void 0 ? _f : false : false,
        strikeThrough: args.isEnabled ? (_h = (_g = args.dcFont) === null || _g === void 0 ? void 0 : _g["@_isStrikeThrough"]) !== null && _h !== void 0 ? _h : false : false,
        family: args.isEnabled ? (_j = args.dcFont) === null || _j === void 0 ? void 0 : _j["@_name"] : undefined,
        size: args.isEnabled ? (_k = args.dcFont) === null || _k === void 0 ? void 0 : _k["@_size"] : undefined,
    };
}
export function getFontCssProperties(bpmnFontStyle) {
    var _a, _b;
    let textDecoration = "";
    if (bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.underline) {
        textDecoration += "underline ";
    }
    if (bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.strikeThrough) {
        textDecoration += "line-through";
    }
    return {
        fontWeight: (bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.bold) ? "bold" : "",
        fontStyle: (bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.italic) ? "italic" : "",
        fontFamily: (_a = bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.family) !== null && _a !== void 0 ? _a : "arial",
        textDecoration,
        fontSize: (_b = bpmnFontStyle === null || bpmnFontStyle === void 0 ? void 0 : bpmnFontStyle.size) !== null && _b !== void 0 ? _b : "16px",
        lineHeight: "1.5em",
    };
}
export function getNodeLabelPosition({ nodeType }) {
    switch (nodeType) {
        case NODE_TYPES.subProcess:
            return "top-center";
        case NODE_TYPES.startEvent:
        case NODE_TYPES.intermediateCatchEvent:
        case NODE_TYPES.intermediateThrowEvent:
        case NODE_TYPES.endEvent:
        case NODE_TYPES.gateway:
        case NODE_TYPES.dataObject:
            return "center-bottom";
        case NODE_TYPES.group:
        case NODE_TYPES.textAnnotation:
            return "top-left";
        case NODE_TYPES.lane:
            return "center-left-vertical";
        case NODE_TYPES.task:
        case NODE_TYPES.unknown:
            return "center-center";
        default:
            assertUnreachable(nodeType);
    }
}
//# sourceMappingURL=NodeStyle.js.map