import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { DEFAULT_INTRACTION_WIDTH } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { DEFAULT_NODE_FILL, DEFAULT_NODE_STROKE_COLOR } from "./NodeStyle";
import { containerNodeInteractionRectCssClassName, DEFAULT_NODE_STROKE_WIDTH, normalize, } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
import { containerNodeVisibleRectCssClassName } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
import { ActivityNodeMarker } from "../BpmnDiagramDomain";
import { useMemo } from "react";
export function DataObjectNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { isIcon: _isIcon, showFoldedPage: _showFoldedPage, showArrow: _showArrow, ...props }, } = normalize(__props);
    const bevel = 25;
    const arrowStartingX = 6;
    const arrowStartingY = 10;
    const showFoldedPage = _showFoldedPage !== null && _showFoldedPage !== void 0 ? _showFoldedPage : false;
    const showArrow = _showArrow !== null && _showArrow !== void 0 ? _showArrow : false;
    const isIcon = _isIcon !== null && _isIcon !== void 0 ? _isIcon : false;
    return (_jsxs(_Fragment, { children: [_jsx("polygon", { ...props, points: `0,0 0,${height} ${width},${height} ${width},${bevel} ${width - bevel},0 ${width - bevel},0`, fill: DEFAULT_NODE_FILL, stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, transform: isIcon ? __props.transform : `translate(${x},${y})` }), showFoldedPage === true && (_jsx("polygon", { ...props, points: `${width - bevel},0 ${width - bevel},${bevel} ${width},${bevel}`, fill: DEFAULT_NODE_FILL, stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, transform: `translate(${x},${y})` })), showArrow === true && (_jsx("polygon", { ...props, points: `${arrowStartingX},${arrowStartingY} ${arrowStartingX},20 20,20 20,26 30,15 20,4 20,${arrowStartingY} `, fill: DEFAULT_NODE_FILL, stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, transform: `translate(${x},${y})` }))] }));
}
const deg30 = Math.PI / 6;
const cos30 = Math.cos(deg30);
const sin30 = Math.sin(deg30);
export const NODE_COLORS = {
    startEvent: {
        foreground: "#4aa241",
        background: "#e8fae6",
    },
    intermediateCatchEvent: {
        foreground: "#e6a000",
        background: "#fbefcf",
    },
    boundaryEvent: {
        foreground: "#e6a000",
        background: "#fbefcf",
    },
    intermediateThrowEvent: {
        foreground: "#007a87",
        background: "#bddee1",
    },
    endEvent: {
        foreground: "#a30000",
        background: "#fce7e7",
    },
    gateway: {
        background: "#fef5ea",
        foreground: "#ec7b08",
    },
    task: {
        foreground: "black",
        background: "#efefef",
    },
    subProcess: {
        foreground: "black",
        background: "#efefef",
    },
};
export function StartEventNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { variant, ...props } = { ..._props };
    const cx = x + width / 2;
    const cy = y + height / 2;
    const r = width / 2;
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.startEvent.background, stroke: NODE_COLORS.startEvent.foreground, strokeLinejoin: "round", r: r, ...props }), _jsx(EventVariantSymbolSvg, { variant: variant, fill: NODE_COLORS.startEvent.background, filled: false, stroke: NODE_COLORS.startEvent.foreground, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: r - 5, outerCircleRadius: r })] }));
}
export function IntermediateCatchEventNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { rimWidth, variant, ...props } = { ..._props };
    const outerCircleRadius = width / 2;
    const innerCircleRadius = outerCircleRadius - (rimWidth !== null && rimWidth !== void 0 ? rimWidth : 5);
    const cx = x + width / 2;
    const cy = y + height / 2;
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.intermediateCatchEvent.background, stroke: NODE_COLORS.intermediateCatchEvent.foreground, strokeLinejoin: "round", r: outerCircleRadius, ...props }), _jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.intermediateCatchEvent.background, stroke: NODE_COLORS.intermediateCatchEvent.foreground, strokeLinejoin: "round", r: innerCircleRadius, ...props }), _jsx(EventVariantSymbolSvg, { variant: variant, fill: NODE_COLORS.intermediateCatchEvent.background, filled: false, stroke: NODE_COLORS.intermediateCatchEvent.foreground, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })] }));
}
export function IntermediateThrowEventNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { rimWidth, variant, ...props } = { ..._props };
    const outerCircleRadius = width / 2;
    const innerCircleRadius = outerCircleRadius - (rimWidth !== null && rimWidth !== void 0 ? rimWidth : 5);
    const cx = x + width / 2;
    const cy = y + height / 2;
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: x + width / 2, cy: y + height / 2, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.intermediateThrowEvent.background, stroke: NODE_COLORS.intermediateThrowEvent.foreground, strokeLinejoin: "round", r: outerCircleRadius, ...props }), _jsx("circle", { cx: x + width / 2, cy: y + height / 2, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.intermediateThrowEvent.background, stroke: NODE_COLORS.intermediateThrowEvent.foreground, strokeLinejoin: "round", r: innerCircleRadius, ...props }), _jsx(EventVariantSymbolSvg, { variant: variant, fill: NODE_COLORS.intermediateThrowEvent.background, filled: true, stroke: NODE_COLORS.intermediateThrowEvent.foreground, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })] }));
}
export function EndEventNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { variant, ...props } = { ..._props };
    const cx = x + width / 2;
    const cy = y + height / 2;
    const r = width / 2;
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth, width: width, height: height, fill: NODE_COLORS.endEvent.background, stroke: NODE_COLORS.endEvent.foreground, strokeLinejoin: "round", r: r, ...props }), _jsx(EventVariantSymbolSvg, { variant: variant, fill: NODE_COLORS.endEvent.background, filled: true, stroke: NODE_COLORS.endEvent.foreground, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: r - 5, outerCircleRadius: r })] }));
}
export function TaskNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { markers: _markers, variant: _variant, ...props } = { ..._props };
    const markers = useMemo(() => new Set(_markers), [_markers]);
    const variant = _variant !== null && _variant !== void 0 ? _variant : "none";
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: x, y: y, strokeWidth: strokeWidth, width: width, height: height, fill: DEFAULT_NODE_FILL, stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", rx: "3", ry: "3", ...props }), markers.has("CallActivityPaletteIcon") && (_jsx("rect", { x: x + (width / 2 - width / 3 / 2), y: y + (height - height / 3), strokeWidth: strokeWidth, width: width / 3, height: height / 3, fill: "black", stroke: "black", strokeLinejoin: "round", rx: "0", ry: "0", ...props })), _jsx(ActivityNodeIcons, { x: x, y: y, width: width, height: height, icons: markers })] }));
}
export function GatewayNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { variant, ...props } = { ..._props };
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: 8 + x, y: 8 + y, transform: `rotate(45,${x + width / 2},${y + height / 2})`, strokeWidth: strokeWidth, width: width / 1.4, height: height / 1.4, fill: NODE_COLORS.gateway.background, stroke: NODE_COLORS.gateway.foreground, strokeLinejoin: "round", rx: "5", ry: "5", ...props }), variant === "parallelGateway" && (_jsxs(_Fragment, { children: [_jsx("line", { strokeLinecap: "round", x1: "18", y1: 1 + height / 2, x2: width - 16, y2: 1 + height / 2, stroke: NODE_COLORS.gateway.foreground, strokeWidth: "6" }), _jsx("line", { strokeLinecap: "round", x1: 1 + width / 2, y1: "18", x2: 1 + width / 2, y2: height - 16, stroke: NODE_COLORS.gateway.foreground, strokeWidth: "6" })] })), variant === "exclusiveGateway" && (_jsx(_Fragment, { children: _jsxs("g", { transform: `rotate(45,${x + width / 2},${y + height / 2})`, children: [_jsx("line", { strokeLinecap: "round", x1: "18", y1: 1 + height / 2, x2: width - 16, y2: 1 + height / 2, stroke: NODE_COLORS.gateway.foreground, strokeWidth: "6" }), _jsx("line", { strokeLinecap: "round", x1: 1 + width / 2, y1: "18", x2: 1 + width / 2, y2: height - 16, stroke: NODE_COLORS.gateway.foreground, strokeWidth: "6" })] }) })), variant === "inclusiveGateway" && (_jsx(_Fragment, { children: _jsx("circle", { cx: x + width / 2, cy: y + height / 2, strokeWidth: 6, width: width / 2, height: height / 2, stroke: NODE_COLORS.gateway.foreground, strokeLinejoin: "round", fill: "transparent", r: width / 5, ...props }) })), variant === "eventBasedGateway" && _jsx(_Fragment, {}), variant === "complexGateway" && _jsx(_Fragment, {})] }));
}
export const LaneNodeSvg = React.forwardRef((__props, ref) => {
    const { gutterWidth: _gutterWidth, ..._props } = { ...__props };
    const { x, y, width, height, strokeWidth, props } = normalize(_props);
    const { strokeWidth: interactionRectStrokeWidth, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, props: _interactionRectProps, } = normalize({ ..._props, strokeWidth: DEFAULT_INTRACTION_WIDTH / 2 });
    const { ...interactionRectProps } = _interactionRectProps;
    const gutterWidth = _gutterWidth !== null && _gutterWidth !== void 0 ? _gutterWidth : 40;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { ...props, x: x, y: y, width: width, height: height, strokeWidth: strokeWidth, fill: "transparent", stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", rx: "3", ry: "3", className: containerNodeVisibleRectCssClassName }), _jsx("line", { x1: x + gutterWidth, y1: y, x2: x + gutterWidth, y2: y + height, stroke: DEFAULT_NODE_STROKE_COLOR, strokeWidth: strokeWidth }), _jsx("rect", { ...interactionRectProps, ref: ref, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, strokeWidth: interactionRectStrokeWidth, fill: "transparent", stroke: "transparent", strokeLinejoin: "round", rx: "0", ry: "0", className: containerNodeInteractionRectCssClassName })] }));
});
export const SubProcessNodeSvg = React.forwardRef((__props, ref) => {
    const { rimWidth: _rimWidth, borderRadius: _borderRadius, icons: _icons, variant: _variant, ..._props } = { ...__props };
    const { x, y, width, height, strokeWidth, props } = normalize(_props);
    const { strokeWidth: interactionRectStrokeWidth, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, props: _interactionRectProps, } = normalize({ ..._props, strokeWidth: DEFAULT_INTRACTION_WIDTH / 2 });
    const { ...interactionRectProps } = _interactionRectProps;
    const icons = useMemo(() => new Set(_icons), [_icons]);
    const variant = _variant !== null && _variant !== void 0 ? _variant : "other";
    const rimWidth = variant === "transaction" ? _rimWidth !== null && _rimWidth !== void 0 ? _rimWidth : 5 : 0;
    const borderRadius = variant === "transaction" ? _borderRadius !== null && _borderRadius !== void 0 ? _borderRadius : 10 : 2;
    return (_jsxs(_Fragment, { children: [variant === "transaction" && (_jsx("rect", { ...props, x: x + rimWidth, y: y + rimWidth, width: width - rimWidth * 2, height: height - rimWidth * 2, strokeWidth: strokeWidth, fill: "transparent", stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", rx: borderRadius - rimWidth, ry: borderRadius - rimWidth, className: containerNodeVisibleRectCssClassName })), _jsx("rect", { ...props, x: x, y: y, width: width, height: height, strokeWidth: strokeWidth, fill: "transparent", stroke: DEFAULT_NODE_STROKE_COLOR, strokeDasharray: variant === "event" ? "10,5" : undefined, strokeLinejoin: "round", rx: borderRadius, ry: borderRadius, className: containerNodeVisibleRectCssClassName }), _jsx("rect", { ...interactionRectProps, ref: ref, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, strokeWidth: interactionRectStrokeWidth, fill: "transparent", stroke: "transparent", strokeLinejoin: "round", rx: "0", ry: "0", className: containerNodeInteractionRectCssClassName }), _jsx(ActivityNodeIcons, { x: x, y: y, width: width, height: height, icons: icons })] }));
});
export function TextAnnotationNodeSvg(__props) {
    const { strokeWidth, x, y, width, height, props: _props } = normalize(__props);
    const { showPlaceholder, ...props } = _props;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: x, y: y, width: width, height: height, fill: "transparent", stroke: "transparent", strokeLinejoin: "round", transform: `translate(${x},${y})` }), _jsx("path", { ...props, x: x, y: y, fill: "transparent", d: `M20,0 L0,0 M0,0 L0,${height} M0,${height} L20,${height}`, stroke: DEFAULT_NODE_STROKE_COLOR, strokeWidth: strokeWidth, strokeLinejoin: "round", transform: `translate(${x},${y})` }), showPlaceholder && (_jsx("text", { x: "20%", y: "62.5%", style: { fontSize: "5em", fontWeight: "bold" }, children: "Text" }))] }));
}
export const GroupNodeSvg = React.forwardRef((__props, ref) => {
    var _a;
    const { strokeWidth, x, y, width, height, props } = normalize(__props);
    const { strokeWidth: interactionRectStrokeWidth, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, props: _interactionRectProps, } = normalize({ ...__props, strokeWidth: DEFAULT_INTRACTION_WIDTH / 2 });
    const { strokeDasharray: interactionRectStrokeDasharray, ...interactionRectProps } = _interactionRectProps;
    const strokeDasharray = (_a = props.strokeDasharray) !== null && _a !== void 0 ? _a : "14,10,3,10";
    return (_jsxs(_Fragment, { children: [_jsx("rect", { ...props, x: x, y: y, width: width, height: height, fill: "transparent", stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", strokeWidth: strokeWidth, strokeDasharray: strokeDasharray, rx: 40, ry: 40 }), _jsx("rect", { ...interactionRectProps, ref: ref, x: interactionRectX, y: interactionRectY, width: interactionRectWidth, height: interactionRectHeight, strokeWidth: interactionRectStrokeWidth, fill: "transparent", stroke: "transparent", rx: "30", ry: "30", className: containerNodeInteractionRectCssClassName })] }));
});
export function UnknownNodeSvg(_props) {
    var _a;
    const { strokeWidth, x, y, width, height, props } = normalize(_props);
    const strokeDasharray = (_a = props.strokeDasharray) !== null && _a !== void 0 ? _a : "2,4";
    return (_jsx(_Fragment, { children: _jsx("rect", { ...props, x: x, y: y, width: width, height: height, fill: "transparent", stroke: "red", strokeLinejoin: "round", strokeWidth: strokeWidth, strokeDasharray: strokeDasharray }) }));
}
export function EventVariantSymbolSvg({ variant, stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, fill, filled, }) {
    return (_jsxs(_Fragment, { children: [variant === "messageEventDefinition" && (_jsx(MessageEventSymbolSvg, { fill: fill !== null && fill !== void 0 ? fill : "none", filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "timerEventDefinition" && (_jsx(TimerEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "errorEventDefinition" && (_jsx(ErrorEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "escalationEventDefinition" && (_jsx(EscalationEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "cancelEventDefinition" && (_jsx(CancelEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "compensateEventDefinition" && (_jsx(CompensationEventSymbolSvg, { filled: filled, stroke: stroke, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "conditionalEventDefinition" && (_jsx(ConditionalEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, outerCircleRadius: outerCircleRadius })), variant === "linkEventDefinition" && (_jsx(LinkEventSymbolSvg, { filled: filled, stroke: stroke, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "signalEventDefinition" && (_jsx(SignalEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "terminateEventDefinition" && (_jsx(_Fragment, { children: _jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2.5, fill: NODE_COLORS.endEvent.foreground, stroke: NODE_COLORS.endEvent.foreground, strokeLinejoin: "round", r: outerCircleRadius / 2 }) }))] }));
}
export function MessageEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, fill, filled, }) {
    const bodyWidth = innerCircleRadius * 1.2;
    const bodyHeight = innerCircleRadius * 0.8;
    const envelopeBody = {
        topLeft: { x: cx - bodyWidth / 2, y: cy - bodyHeight / 2 },
        bottomRight: { x: cx + bodyWidth / 2, y: cy + bodyHeight / 2 },
    };
    const flapHeight = bodyHeight * 0.5;
    const envelopeFlap = [
        { x: envelopeBody.topLeft.x, y: envelopeBody.topLeft.y },
        { x: envelopeBody.bottomRight.x, y: envelopeBody.topLeft.y },
        { x: cx, y: envelopeBody.topLeft.y + flapHeight },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: envelopeBody.topLeft.x, y: envelopeBody.topLeft.y, width: bodyWidth, height: bodyHeight, strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : fill, stroke: stroke }), _jsx("polygon", { points: envelopeFlap.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : fill, stroke: stroke }), filled && (_jsxs(_Fragment, { children: [_jsx("line", { x1: envelopeFlap[0].x, y1: envelopeFlap[0].y, x2: envelopeFlap[2].x, y2: envelopeFlap[2].y, stroke: fill, strokeWidth: 1.5 }), _jsx("line", { x1: envelopeFlap[1].x, y1: envelopeFlap[1].y, x2: envelopeFlap[2].x, y2: envelopeFlap[2].y, stroke: fill, strokeWidth: 1.5 })] }))] }));
}
export function TimerEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, outerCircleRadius, filled, }) {
    const padding = 1.2 * (outerCircleRadius - innerCircleRadius);
    const clockRadius = innerCircleRadius - padding;
    const shortHandLength = clockRadius * 0.5;
    const longHandLength = clockRadius * 0.9;
    const hourHandAngle = Math.PI / 12;
    const minuteHandAngle = (-5 * Math.PI) / 12;
    const hourHand = {
        x: cx + shortHandLength * Math.cos(hourHandAngle),
        y: cy + shortHandLength * Math.sin(hourHandAngle),
    };
    const minuteHand = {
        x: cx + longHandLength * Math.cos(minuteHandAngle),
        y: cy + longHandLength * Math.sin(minuteHandAngle),
    };
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, r: clockRadius, stroke: stroke, strokeWidth: 1.5, fill: filled ? stroke : "transparent" }), _jsx("line", { x1: cx, y1: cy, x2: hourHand.x, y2: hourHand.y, stroke: filled ? "transparent" : stroke, strokeWidth: 1.5 }), _jsx("line", { x1: cx, y1: cy, x2: minuteHand.x, y2: minuteHand.y, stroke: filled ? "transparent" : stroke, strokeWidth: 1.5 }), Array.from({ length: 12 }, (_, index) => {
                const angle = (index / 12) * 2 * Math.PI;
                const x1 = cx + clockRadius * Math.cos(angle);
                const y1 = cy + clockRadius * Math.sin(angle);
                const x2 = cx + (clockRadius - padding * 0.5) * Math.cos(angle);
                const y2 = cy + (clockRadius - padding * 0.5) * Math.sin(angle);
                return _jsx("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke, strokeWidth: 1.5 }, index);
            })] }));
}
export function ErrorEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, outerCircleRadius, filled, }) {
    const padding = 1.5 * (outerCircleRadius - innerCircleRadius);
    const hx = innerCircleRadius - padding;
    const hy = innerCircleRadius - padding;
    const scaleFactor = 20;
    const shiftLeft = 3.5;
    const shiftUp = 1;
    const points = [
        { x: cx - shiftLeft, y: cy },
        { x: cx - hx * 0.037 * scaleFactor - shiftLeft, y: cy + hy * 0.052 * scaleFactor - shiftUp },
        { x: cx - hx * 0.003 * scaleFactor - shiftLeft, y: cy - hy * 0.05 * scaleFactor - shiftUp },
        { x: cx + hx * 0.027 * scaleFactor - shiftLeft, y: cy + hy * 0.016 * scaleFactor - shiftUp },
        { x: cx + hx * 0.058 * scaleFactor - shiftLeft, y: cy - hy * 0.046 * scaleFactor - shiftUp },
        { x: cx + hx * 0.029 * scaleFactor - shiftLeft, y: cy + hy * 0.066 * scaleFactor - shiftUp },
        { x: cx - shiftLeft, y: cy },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: points.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function EscalationEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }) {
    const arrowHeight = innerCircleRadius * 1.2;
    const arrowBaseWidth = innerCircleRadius * 1;
    const arrow = [
        { x: cx - arrowBaseWidth / 2, y: cy + arrowHeight / 2 },
        { x: cx, y: cy - arrowHeight / 2 },
        { x: cx + arrowBaseWidth / 2, y: cy + arrowHeight / 2 },
        { x: cx, y: cy + arrowHeight / 20 },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: arrow.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function CancelEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }) {
    const farXPoint = 1.3;
    const closeXPoint = 1.7;
    const lowYPoint = 9;
    const highYPoint = 5;
    const cross = [
        { x: cx - innerCircleRadius / farXPoint, y: cy - innerCircleRadius + lowYPoint },
        { x: cx - innerCircleRadius / closeXPoint, y: cy - innerCircleRadius + highYPoint },
        { x: cx, y: cy - innerCircleRadius / highYPoint },
        { x: cx + innerCircleRadius / closeXPoint, y: cy - innerCircleRadius + highYPoint },
        { x: cx + innerCircleRadius / farXPoint, y: cy - innerCircleRadius + lowYPoint },
        { x: cx + innerCircleRadius / highYPoint, y: cy },
        { x: cx + innerCircleRadius / farXPoint, y: cy + innerCircleRadius - lowYPoint },
        { x: cx + innerCircleRadius / closeXPoint, y: cy + innerCircleRadius - highYPoint },
        { x: cx, y: cy + innerCircleRadius / highYPoint },
        { x: cx - innerCircleRadius / closeXPoint, y: cy + innerCircleRadius - highYPoint },
        { x: cx - innerCircleRadius / farXPoint, y: cy + innerCircleRadius - lowYPoint },
        { x: cx - innerCircleRadius / highYPoint, y: cy },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: cross.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function CompensationEventSymbolSvg({ stroke, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }) {
    const padding = 1.5 * (outerCircleRadius - innerCircleRadius);
    const hx = x + innerCircleRadius - padding * 0.6;
    const hy = y + innerCircleRadius - padding * 0.2;
    const rightOffset = 0.15 * innerCircleRadius;
    const firstTriangle = [
        { x: cx + hx - rightOffset, y: cy - hy + (outerCircleRadius - innerCircleRadius) },
        { x: cx - rightOffset, y: cy },
        { x: cx + hx - rightOffset, y: cy + hy - (outerCircleRadius - innerCircleRadius) },
    ];
    const secondTriangle = [
        { x: cx - rightOffset, y: cy - hy + (outerCircleRadius - innerCircleRadius) },
        { x: cx - hx - rightOffset, y: cy },
        { x: cx - rightOffset, y: cy + hy - (outerCircleRadius - innerCircleRadius) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("polygon", { points: firstTriangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }), _jsx("polygon", { points: secondTriangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke })] }));
}
export function ConditionalEventSymbolSvg({ stroke, cx, cy, outerCircleRadius, filled, }) {
    const squareSize = outerCircleRadius * 1.1;
    const lineSpacing = squareSize / 5;
    const lineThickness = 2;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: cx - squareSize / 2, y: cy - squareSize / 2, width: squareSize, height: squareSize, fill: filled ? stroke : "transparent", stroke: stroke, strokeWidth: 1.5 }), [...Array(4)].map((_, index) => (_jsx("line", { x1: cx - squareSize / 2 + 5, y1: cy - squareSize / 2 + lineSpacing * (index + 1), x2: cx + squareSize / 2 - 5, y2: cy - squareSize / 2 + lineSpacing * (index + 1), stroke: stroke, strokeWidth: lineThickness }, index)))] }));
}
export function LinkEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }) {
    const arrowHeight = innerCircleRadius * 1.2;
    const arrowBaseWidth = innerCircleRadius * 1;
    const shiftLeft = 7;
    const rectangleHeight = 5;
    const arrowPadding = 2;
    const arrow = [
        { x: cx - arrowBaseWidth / 2 - shiftLeft, y: cy + arrowHeight / 2 - rectangleHeight },
        { x: cx - arrowBaseWidth / 2 - shiftLeft, y: cy - arrowHeight / 2 + rectangleHeight },
        { x: cx + arrowBaseWidth / 2, y: cy - arrowHeight / 2 + rectangleHeight },
        { x: cx + arrowBaseWidth / 2, y: cy - arrowHeight / 2 - arrowPadding },
        { x: cx + arrowBaseWidth / 2 + 8, y: cy },
        { x: cx + arrowBaseWidth / 2, y: cy + arrowHeight / 2 + arrowPadding },
        { x: cx + arrowBaseWidth / 2, y: cy + arrowHeight / 2 - rectangleHeight },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: arrow.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function SignalEventSymbolSvg({ stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }) {
    const padding = 1.5 * (outerCircleRadius - innerCircleRadius);
    const hx = x + innerCircleRadius - padding;
    const hy = y + innerCircleRadius - padding;
    const triangle = [
        { x: cx + cos30 * hx, y: padding / 4 + cy + sin30 * hy },
        { x: cx - cos30 * hx, y: padding / 4 + cy + sin30 * hy },
        { x: cx, y: padding / 4 + cy - hy },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: triangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function ActivityNodeIcons({ x, y, width, height, icons, }) {
    return (_jsxs(_Fragment, { children: [icons.has(ActivityNodeMarker.Loop) && (_jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", fontWeight: "bold", transform: `translate(${x + width / 2}, ${y + height - 5}) rotate(0)`, children: "\u21BB" })), icons.has(ActivityNodeMarker.AdHocSubProcess) && (_jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", fontWeight: "bold", transform: `translate(${x + width / 2}, ${y + height - 5}) rotate(0)`, children: "~" })), icons.has(ActivityNodeMarker.Compensation) && (_jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", transform: `translate(${x + width / 2}, ${y + height - 5}) rotate(0)`, children: "\u23EA" })), icons.has(ActivityNodeMarker.Collapsed) && (_jsxs(_Fragment, { children: [_jsx("rect", { x: x + width / 2 - 15, y: y + height - 20 - DEFAULT_NODE_STROKE_WIDTH, width: 30, height: 20, fill: "transparent", stroke: DEFAULT_NODE_STROKE_COLOR, strokeWidth: DEFAULT_NODE_STROKE_WIDTH }), _jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", fontWeight: "bold", x: x + width / 2, y: 1 + y + height, children: "+" })] })), icons.has(ActivityNodeMarker.MultiInstanceParallel) && (_jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", fontWeight: "bold", transform: `translate(${x + width / 2 - 7}, ${y + height - 15}) rotate(90)`, children: "\u2630" })), icons.has(ActivityNodeMarker.MultiInstanceSequential) && (_jsx("text", { fontSize: "2em", textAnchor: "middle", dominantBaseline: "auto", fontWeight: "bold", transform: `translate(${x + width / 2}, ${y + height - 5}) rotate(0)`, children: "\u2630" }))] }));
}
//# sourceMappingURL=NodeSvgs.js.map