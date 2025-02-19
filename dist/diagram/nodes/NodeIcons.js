import { jsx as _jsx } from "react/jsx-runtime";
import { DataObjectNodeSvg, EndEventNodeSvg, GatewayNodeSvg, GroupNodeSvg, IntermediateCatchEventNodeSvg, IntermediateThrowEventNodeSvg, LaneNodeSvg, StartEventNodeSvg, TaskNodeSvg, TextAnnotationNodeSvg, SubProcessNodeSvg, EventVariantSymbolSvg, } from "./NodeSvgs";
import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { NODE_TYPES } from "../BpmnDiagramDomain";
import { QuestionCircleIcon } from "@patternfly/react-icons/dist/js/icons/question-circle-icon";
import { nodeSvgProps, RoundSvg } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeIcons";
export function NodeIcon({ nodeType }) {
    return switchExpression(nodeType, {
        [NODE_TYPES.startEvent]: StartEventIcon,
        [NODE_TYPES.task]: TaskIcon,
        [NODE_TYPES.dataObject]: DataObjectIcon,
        [NODE_TYPES.textAnnotation]: TextAnnotationIcon,
        [NODE_TYPES.unknown]: UnknownIcon,
        default: () => _jsx("div", { children: "?" }),
    });
}
export function EventDefinitionIcon({ variant, filled, fill, stroke, }) {
    const cx = nodeSvgProps.x + nodeSvgProps.width / 2;
    const cy = nodeSvgProps.y + nodeSvgProps.height / 2;
    const r = nodeSvgProps.width / 2;
    return (_jsx(RoundSvg, { children: _jsx(EventVariantSymbolSvg, { variant: variant !== null && variant !== void 0 ? variant : "none", strokeWidth: 16, isIcon: true, filled: filled, stroke: stroke, fill: fill, x: nodeSvgProps.x, y: nodeSvgProps.x, cx: cx, cy: cy, innerCircleRadius: r - 10, outerCircleRadius: r }) }));
}
export function StartEventIcon({ variant }) {
    return (_jsx(RoundSvg, { children: _jsx(StartEventNodeSvg, { ...nodeSvgProps, variant: variant !== null && variant !== void 0 ? variant : "none" }) }));
}
export function IntermediateCatchEventIcon({ variant }) {
    return (_jsx(RoundSvg, { children: _jsx(IntermediateCatchEventNodeSvg, { ...nodeSvgProps, rimWidth: 40, variant: variant !== null && variant !== void 0 ? variant : "none" }) }));
}
export function IntermediateThrowEventIcon({ variant }) {
    return (_jsx(RoundSvg, { children: _jsx(IntermediateThrowEventNodeSvg, { ...nodeSvgProps, rimWidth: 40, variant: variant !== null && variant !== void 0 ? variant : "none" }) }));
}
export function EndEventIcon({ variant }) {
    return (_jsx(RoundSvg, { children: _jsx(EndEventNodeSvg, { ...nodeSvgProps, variant: variant !== null && variant !== void 0 ? variant : "none" }) }));
}
export function TaskIcon({ variant, isIcon }) {
    return (_jsx(RoundSvg, { children: _jsx(TaskNodeSvg, { ...nodeSvgProps, variant: variant !== null && variant !== void 0 ? variant : "none", isIcon: isIcon !== null && isIcon !== void 0 ? isIcon : false }) }));
}
export function CallActivityIcon() {
    return (_jsx(RoundSvg, { children: _jsx(TaskNodeSvg, { ...nodeSvgProps, markers: ["CallActivityPaletteIcon"], variant: "none" }) }));
}
export function GatewayIcon({ variant, isIcon }) {
    return (_jsx(RoundSvg, { children: _jsx(GatewayNodeSvg, { ...nodeSvgProps, width: 200, height: 200, variant: variant !== null && variant !== void 0 ? variant : "none", isIcon: isIcon !== null && isIcon !== void 0 ? isIcon : false }) }));
}
export function LaneIcon() {
    return (_jsx(RoundSvg, { children: _jsx(LaneNodeSvg, { ...nodeSvgProps }) }));
}
export function SubProcessIcon({ variant }) {
    return (_jsx(RoundSvg, { children: _jsx(SubProcessNodeSvg, { ...nodeSvgProps, strokeWidth: 10, rimWidth: 20, borderRadius: 20, variant: variant !== null && variant !== void 0 ? variant : "transaction" }) }));
}
export function DataObjectIcon(props) {
    var _a, _b;
    return (_jsx(RoundSvg, { padding: (_a = props.padding) !== null && _a !== void 0 ? _a : "0px", height: props.height, viewBox: props.viewBox, children: _jsx(DataObjectNodeSvg, { ...nodeSvgProps, showArrow: false, showFoldedPage: false, isIcon: true, width: 80, height: 100, strokeWidth: 10, transform: (_b = props.transform) !== null && _b !== void 0 ? _b : "translate(80, 60)" }) }));
}
export function GroupIcon() {
    return (_jsx(RoundSvg, { children: _jsx(GroupNodeSvg, { ...nodeSvgProps, y: 12, height: nodeSvgProps.width, strokeDasharray: "28,28" }) }));
}
export function TextAnnotationIcon() {
    return (_jsx(RoundSvg, { children: _jsx(TextAnnotationNodeSvg, { ...nodeSvgProps, showPlaceholder: true }) }));
}
export function UnknownNodeIcon() {
    return (_jsx(RoundSvg, { children: _jsx(QuestionCircleIcon, { width: "100%", height: "100%" }) }));
}
export function UnknownIcon() {
    return (_jsx("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }, children: _jsx(QuestionCircleIcon, {}) }));
}
//# sourceMappingURL=NodeIcons.js.map