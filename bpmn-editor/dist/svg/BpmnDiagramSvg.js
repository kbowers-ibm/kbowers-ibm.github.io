import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "@visx/text";
import * as React from "react";
import { useMemo } from "react";
import { EdgeMarkers } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/EdgeMarkers";
import { EDGE_TYPES } from "../diagram/BpmnDiagramDomain";
import { getSnappedMultiPointAnchoredEdgePath } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/getSnappedMultiPointAnchoredEdgePath";
import { getBpmnFontStyle, getNodeLabelPosition, getNodeStyle } from "../diagram/nodes/NodeStyle";
import { assertUnreachable } from "../ts-ext/assertUnreachable";
import { DataObjectNodeSvg, TaskNodeSvg, TextAnnotationNodeSvg, UnknownNodeSvg } from "../diagram/nodes/NodeSvgs";
import { NODE_TYPES } from "../diagram/BpmnDiagramDomain";
import { AssociationPath, SequenceFlowPath } from "../diagram/edges/EdgeSvgs";
export function BpmnDiagramSvg({ nodes, edges, snapGrid, }) {
    const { nodesSvg, nodesById } = useMemo(() => {
        const nodesById = new Map();
        const nodesSvg = nodes.map((node) => {
            var _a;
            const { fontCssProperties: fontStyle } = getNodeStyle({
                bpmnFontStyle: getBpmnFontStyle({ isEnabled: true }),
            });
            nodesById.set(node.id, node);
            const { height, width, strokeWidth, strokeDasharray, ...style } = node.style;
            const label = node.data.bpmnElement.__$$element !== "group"
                ? node.data.bpmnElement.__$$element === "textAnnotation"
                    ? ""
                    : (_a = node.data.bpmnElement["@_name"]) !== null && _a !== void 0 ? _a : ""
                : "";
            return (_jsxs("g", { "data-kie-bpmn-node-id": node.id, children: [node.type === NODE_TYPES.dataObject && (_jsx(DataObjectNodeSvg, { width: node.width, height: node.height, x: node.positionAbsolute.x, y: node.positionAbsolute.y, ...style, showArrow: false, showFoldedPage: false, isIcon: true })), node.type === NODE_TYPES.task && (_jsx(TaskNodeSvg, { width: node.width, height: node.height, x: node.positionAbsolute.x, y: node.positionAbsolute.y, ...style })), node.type === NODE_TYPES.textAnnotation && (_jsx(TextAnnotationNodeSvg, { width: node.width, height: node.height, x: node.positionAbsolute.x, y: node.positionAbsolute.y, ...style })), node.type === NODE_TYPES.unknown && (_jsx(UnknownNodeSvg, { width: node.width, height: node.height, x: node.positionAbsolute.x, y: node.positionAbsolute.y, ...style })), label.trim() && (_jsx(_Fragment, { children: label.split("\n").map((labelLine, i) => (_jsx(Text, { lineHeight: fontStyle.lineHeight, style: { ...fontStyle }, dy: `calc(1.5em * ${i})`, ...getNodeLabelSvgTextAlignmentProps(node, getNodeLabelPosition({ nodeType: node.type })), children: labelLine }, i))) }))] }, node.id));
        });
        return { nodesSvg, nodesById };
    }, [nodes]);
    return (_jsxs(_Fragment, { children: [_jsx(EdgeMarkers, {}), edges.map((e) => {
                var _a, _b, _c, _d, _e, _f, _g;
                const s = nodesById === null || nodesById === void 0 ? void 0 : nodesById.get(e.source);
                const t = nodesById === null || nodesById === void 0 ? void 0 : nodesById.get(e.target);
                const { path } = getSnappedMultiPointAnchoredEdgePath({
                    snapGrid,
                    edge: (_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge,
                    shapeSource: (_b = e.data) === null || _b === void 0 ? void 0 : _b.bpmnShapeSource,
                    shapeTarget: (_c = e.data) === null || _c === void 0 ? void 0 : _c.bpmnShapeTarget,
                    sourceNodeBounds: {
                        x: (_d = s === null || s === void 0 ? void 0 : s.positionAbsolute) === null || _d === void 0 ? void 0 : _d.x,
                        y: (_e = s === null || s === void 0 ? void 0 : s.positionAbsolute) === null || _e === void 0 ? void 0 : _e.y,
                        width: s === null || s === void 0 ? void 0 : s.width,
                        height: s === null || s === void 0 ? void 0 : s.height,
                    },
                    targetNodeBounds: {
                        x: (_f = t === null || t === void 0 ? void 0 : t.positionAbsolute) === null || _f === void 0 ? void 0 : _f.x,
                        y: (_g = t === null || t === void 0 ? void 0 : t.positionAbsolute) === null || _g === void 0 ? void 0 : _g.y,
                        width: t === null || t === void 0 ? void 0 : t.width,
                        height: t === null || t === void 0 ? void 0 : t.height,
                    },
                });
                return (_jsxs(React.Fragment, { children: [e.type === EDGE_TYPES.sequenceFlow && _jsx(SequenceFlowPath, { d: path }), e.type === EDGE_TYPES.association && _jsx(AssociationPath, { d: path })] }, e.id));
            }), nodesSvg] }));
}
const SVG_NODE_LABEL_TEXT_PADDING_ALL = 10;
const SVG_NODE_LABEL_TEXT_ADDITIONAL_PADDING_TOP_LEFT = 8;
export function getNodeLabelSvgTextAlignmentProps(n, labelPosition) {
    switch (labelPosition) {
        case "center-bottom":
            const cbTx = n.position.x + n.width / 2;
            const cbTy = n.position.y + n.height + 4;
            const cbWidth = n.width;
            return {
                verticalAnchor: "start",
                textAnchor: "middle",
                transform: `translate(${cbTx},${cbTy})`,
                width: cbWidth,
            };
        case "center-center":
            const ccTx = n.position.x + n.width / 2;
            const ccTy = n.position.y + n.height / 2;
            const ccWidth = n.width - 2 * SVG_NODE_LABEL_TEXT_PADDING_ALL;
            return {
                verticalAnchor: "middle",
                textAnchor: "middle",
                transform: `translate(${ccTx},${ccTy})`,
                width: ccWidth,
            };
        case "top-center":
            const tcTx = n.position.x + n.width / 2;
            const tcTy = n.position.y + SVG_NODE_LABEL_TEXT_PADDING_ALL;
            const tcWidth = n.width - 2 * SVG_NODE_LABEL_TEXT_PADDING_ALL;
            return {
                verticalAnchor: "start",
                textAnchor: "middle",
                transform: `translate(${tcTx},${tcTy})`,
                width: tcWidth,
            };
        case "center-left":
            const clTx = n.position.x + SVG_NODE_LABEL_TEXT_PADDING_ALL;
            const clTy = n.position.y + n.height / 2;
            const clWidth = n.width - 2 * SVG_NODE_LABEL_TEXT_PADDING_ALL;
            return {
                verticalAnchor: "middle",
                textAnchor: "start",
                transform: `translate(${clTx},${clTy})`,
                width: clWidth,
            };
        case "center-left-vertical":
        case "top-left":
            const tlTx = n.position.x + SVG_NODE_LABEL_TEXT_PADDING_ALL + SVG_NODE_LABEL_TEXT_ADDITIONAL_PADDING_TOP_LEFT;
            const tlTy = n.position.y + SVG_NODE_LABEL_TEXT_PADDING_ALL + SVG_NODE_LABEL_TEXT_ADDITIONAL_PADDING_TOP_LEFT;
            const tlWidth = n.width - 2 * SVG_NODE_LABEL_TEXT_PADDING_ALL - 2 * SVG_NODE_LABEL_TEXT_ADDITIONAL_PADDING_TOP_LEFT;
            return {
                verticalAnchor: "start",
                textAnchor: "start",
                transform: `translate(${tlTx},${tlTy})`,
                width: tlWidth,
            };
        default:
            assertUnreachable(labelPosition);
    }
}
//# sourceMappingURL=BpmnDiagramSvg.js.map