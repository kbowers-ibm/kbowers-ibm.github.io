import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { DEFAULT_INTRACTION_WIDTH } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { DEFAULT_NODE_FILL, DEFAULT_NODE_STROKE_COLOR } from "./NodeStyle";
import { containerNodeInteractionRectCssClassName, normalize, } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
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
    const { variant, isIcon } = { ..._props };
    const { markers: _markers, variant: _variant, ...props } = { ..._props };
    const markers = useMemo(() => new Set(_markers), [_markers]);
    const iconSize = 200;
    const defaultSize = 25;
    const defaultOffset = { cx: x + 3, cy: y + 3 };
    const iconOffsets = {
        scriptTask: isIcon ? { cx: x - 2, cy: y - 25 } : defaultOffset,
        businessRuleTask: isIcon ? { cx: x - 10, cy: y - 10 } : defaultOffset,
        serviceTask: isIcon ? { cx: x - 5, cy: y - 35 } : defaultOffset,
        userTask: isIcon ? { cx: x - 5, cy: y - 45 } : defaultOffset,
    };
    return (_jsxs(_Fragment, { children: [!isIcon && (_jsx("rect", { x: x, y: y, strokeWidth: strokeWidth, width: width, height: height, fill: DEFAULT_NODE_FILL, stroke: DEFAULT_NODE_STROKE_COLOR, strokeLinejoin: "round", rx: "3", ry: "3", ...props })), variant === "scriptTask" && (_jsx("g", { transform: `translate(${iconOffsets.scriptTask.cx}, ${iconOffsets.scriptTask.cy})`, children: _jsx(ScriptTaskSvg, { stroke: NODE_COLORS.task.foreground, size: isIcon ? iconSize : defaultSize }) })), variant === "businessRuleTask" && (_jsx("g", { transform: `translate(${iconOffsets.businessRuleTask.cx}, ${iconOffsets.businessRuleTask.cy})`, children: _jsx(BusinessRuleTaskSvg, { stroke: NODE_COLORS.task.foreground, size: isIcon ? iconSize : defaultSize, strokeWidth: isIcon ? 10 : 1 }) })), variant === "serviceTask" && (_jsx("g", { transform: `translate(${iconOffsets.serviceTask.cx}, ${iconOffsets.serviceTask.cy})`, children: _jsx(ServiceTaskSvg, { stroke: NODE_COLORS.task.foreground, size: isIcon ? iconSize : defaultSize * 1.2 }) })), variant === "userTask" && (_jsx("g", { transform: `translate(${iconOffsets.userTask.cx}, ${iconOffsets.userTask.cy})`, children: _jsx(UserTaskSvg, { stroke: NODE_COLORS.task.foreground, size: isIcon ? iconSize : defaultSize }) })), markers.has("CallActivityPaletteIcon") && (_jsx("rect", { x: x + (width / 2 - width / 3 / 2), y: y + (height - height / 3), strokeWidth: strokeWidth, width: width / 3, height: height / 3, fill: "black", stroke: "black", strokeLinejoin: "round", rx: "0", ry: "0", ...props })), _jsx(ActivityNodeIcons, { x: x, y: y, width: width, height: height, icons: markers })] }));
}
export function ScriptTaskSvg({ stroke, size }) {
    return (_jsx("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: size, height: (size * 229) / 252, viewBox: "0 0 252 229", preserveAspectRatio: "xMidYMid meet", children: _jsxs("g", { transform: "translate(0, 229) scale(0.1, -0.1)", fill: stroke, stroke: "none", children: [_jsx("path", { d: "M730 2196 c-241 -98 -407 -212 -496 -342 -103 -152 -117 -357 -37\n        -544 38 -90 92 -185 138 -242 74 -92 128 -182 166 -278 30 -77 34 -95 34 -185\n        0 -94 -2 -104 -34 -167 -18 -37 -56 -90 -83 -119 -55 -55 -168 -134 -245 -169\n        -83 -37 -98 -48 -107 -74 -6 -17 -6 -34 2 -51 l12 -25 837 0 838 0 100 50\n        c174 86 288 191 352 323 45 92 57 155 50 266 -10 169 -76 322 -214 494 -95\n        118 -162 267 -178 393 -9 68 18 173 60 239 71 112 230 222 430 299 139 54 155\n        65 155 112 0 67 45 64 -860 63 l-815 0 -105 -43z m1370 -93 c0 -5 -26 -24 -58\n        -43 -31 -19 -95 -73 -142 -120 -95 -95 -140 -172 -160 -278 -35 -175 40 -420\n        181 -593 101 -124 162 -236 193 -357 20 -77 20 -131 2 -197 -43 -156 -136\n        -253 -346 -362 l-55 -28 -647 -3 c-357 -1 -648 0 -648 4 0 4 34 40 75 81 127\n        127 175 238 175 404 0 174 -68 335 -228 541 -46 60 -116 192 -142 268 -6 19\n        -14 73 -17 120 -4 70 -2 95 15 143 54 152 208 277 471 383 l106 42 613 1 c336\n        1 612 -2 612 -6z" }), _jsx("path", { d: "M502 1794 c-28 -19 -30 -74 -4 -97 17 -15 72 -17 579 -17 530 0 561\n        1 576 18 23 25 21 68 -3 92 -20 20 -33 20 -573 20 -484 0 -555 -2 -575 -16z" }), _jsx("path", { d: "M497 1372 c-25 -27 -22 -78 5 -96 20 -14 91 -16 573 -16 612 0 595\n        -2 595 64 0 69 26 66 -597 66 -530 0 -561 -1 -576 -18z" }), _jsx("path", { d: "M767 892 c-10 -10 -17 -33 -17 -50 0 -64 -14 -62 600 -60 l553 3 19\n        26 c21 28 18 57 -8 84 -13 13 -90 15 -573 15 -528 0 -559 -1 -574 -18z" }), _jsx("path", { d: "M758 479 c-47 -27 -42 -95 8 -118 18 -8 183 -11 558 -11 524 0 534 0\n        560 21 32 25 35 70 6 99 -20 20 -33 20 -567 20 -351 0 -554 -4 -565 -11z" })] }) }));
}
export function BusinessRuleTaskSvg({ stroke, strokeWidth, size, }) {
    const headerHeight = size / 5;
    const rowHeight = size / 4;
    const columnWidth1 = size / 3;
    const columnWidth2 = (size / 3) * 2;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: 0, y: 0, width: size, height: headerHeight, fill: "lightgrey", stroke: stroke, strokeWidth: strokeWidth }), _jsx("rect", { x: 0, y: headerHeight, width: columnWidth1, height: rowHeight, fill: "none", stroke: stroke, strokeWidth: strokeWidth }), _jsx("rect", { x: columnWidth1, y: headerHeight, width: columnWidth2, height: rowHeight, fill: "none", stroke: stroke, strokeWidth: strokeWidth }), _jsx("rect", { x: 0, y: headerHeight + rowHeight, width: columnWidth1, height: rowHeight, fill: "none", stroke: stroke, strokeWidth: strokeWidth }), _jsx("rect", { x: columnWidth1, y: headerHeight + rowHeight, width: columnWidth2, height: rowHeight, fill: "none", stroke: stroke, strokeWidth: strokeWidth })] }));
}
export function ServiceTaskSvg({ stroke, size }) {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: (size * 314) / 320, viewBox: "0 0 320 314", preserveAspectRatio: "xMidYMid meet", children: _jsxs("g", { transform: `translate(0, 314) scale(0.1, -0.1)`, stroke: stroke, strokeWidth: 25, children: [_jsx("path", { d: "M1170 3086 c-54 -21 -109 -56 -114 -74 -3 -9 -8 -74 -12 -145 l-7\n-127 -56 -16 c-31 -9 -89 -34 -130 -56 -71 -38 -74 -39 -95 -21 -11 10 -59 52\n-106 93 -142 125 -123 115 -177 100 -62 -18 -133 -64 -165 -109 -20 -28 -48\n-114 -48 -146 0 -2 19 -26 42 -53 209 -237 189 -208 170 -251 -8 -20 -27 -70\n-42 -111 l-27 -75 -149 -12 c-82 -6 -150 -12 -151 -12 -2 -1 -16 -25 -33 -53\n-27 -47 -30 -62 -30 -137 0 -74 3 -89 27 -127 16 -24 35 -46 43 -50 8 -3 73\n-10 145 -15 72 -6 135 -12 141 -14 6 -2 15 -25 19 -51 3 -26 18 -64 31 -85 13\n-21 24 -47 24 -56 -1 -10 -24 -43 -51 -73 -28 -30 -76 -83 -106 -117 l-55 -62\n12 -53 c21 -99 104 -180 202 -199 50 -9 55 -7 158 83 l73 62 16 -24 c42 -66\n52 -70 159 -70 55 0 113 -3 129 -6 l30 -6 10 -141 10 -142 -46 -54 c-96 -112\n-92 -105 -85 -161 12 -93 114 -193 209 -204 50 -6 51 -6 115 50 36 31 87 74\n114 95 l48 39 47 -27 c75 -44 102 -57 171 -78 l65 -21 6 -64 c4 -36 7 -97 8\n-136 0 -39 6 -77 14 -86 17 -21 83 -55 139 -72 41 -12 54 -12 99 1 29 9 71 27\n95 41 l42 26 6 85 c14 195 16 202 45 212 14 5 64 27 110 48 l83 39 96 -80 95\n-79 51 6 c27 4 67 19 88 32 46 31 102 113 118 176 l13 48 -44 47 c-24 25 -46\n49 -49 52 -3 3 -20 22 -39 42 l-33 36 39 74 c22 40 48 101 58 134 l17 62 46 6\nc24 3 87 6 138 6 80 0 97 3 113 19 26 26 49 71 66 129 13 40 12 53 -2 102 -8\n30 -27 72 -42 92 -28 40 -24 39 -219 54 -48 4 -88 12 -96 20 -8 7 -19 37 -26\n66 -7 29 -30 83 -51 120 -21 36 -39 74 -39 84 0 15 31 53 142 180 17 19 17 26\n6 70 -23 91 -94 174 -175 204 -30 11 -60 20 -68 20 -8 0 -45 -27 -82 -59 l-69\n-59 -134 10 c-74 6 -136 11 -138 13 -1 1 -7 62 -12 135 -6 74 -15 139 -20 145\n-5 6 -28 20 -50 31 -22 10 -40 21 -40 24 0 3 29 37 65 75 38 41 65 79 65 91 0\n58 -34 126 -87 174 -48 44 -126 80 -172 80 -6 0 -55 -40 -108 -90 -54 -49\n-103 -90 -110 -90 -6 0 -38 11 -70 24 -32 13 -72 29 -90 36 -34 13 -34 9 -49\n208 -6 79 -8 84 -40 108 -67 52 -160 67 -234 40z m137 -42 c17 -3 42 -16 57\n-27 25 -21 27 -30 37 -152 6 -71 15 -137 20 -147 5 -9 30 -24 56 -34 27 -9 78\n-30 116 -46 37 -16 73 -26 80 -22 6 4 56 48 109 97 88 80 100 88 126 82 75\n-16 156 -99 167 -171 6 -38 4 -41 -67 -110 -68 -67 -77 -72 -127 -78 -52 -5\n-148 -47 -163 -70 -4 -6 -8 -38 -8 -71 0 -33 -3 -97 -7 -142 l-6 -82 -52 -16\nc-69 -20 -82 -19 -90 5 -4 13 3 32 25 58 31 39 32 49 7 100 -11 23 -68 62 -91\n62 -7 0 -31 -16 -53 -35 -23 -19 -48 -35 -56 -35 -37 0 -47 12 -47 55 0 57 -7\n73 -41 90 -73 38 -138 2 -147 -83 -4 -46 -7 -52 -35 -61 -41 -15 -39 -16 -96\n29 -28 22 -58 40 -67 40 -29 0 -71 -39 -88 -81 -18 -45 -20 -40 37 -112 27\n-33 28 -39 17 -72 -11 -34 -13 -35 -62 -35 -70 0 -88 -18 -88 -87 0 -79 10\n-93 70 -93 37 0 55 -5 70 -20 27 -27 26 -35 -19 -91 -35 -44 -38 -53 -31 -81\n15 -52 38 -77 76 -84 30 -6 43 -2 80 25 74 52 96 39 68 -42 -10 -29 -23 -57\n-28 -63 -6 -7 -74 -17 -150 -23 -77 -7 -143 -14 -148 -17 -26 -17 -58 -95 -64\n-161 l-7 -72 -83 -70 c-70 -60 -89 -71 -120 -71 -66 0 -137 62 -163 142 -15\n46 -18 41 112 183 53 58 97 113 97 122 0 8 -13 38 -30 64 -16 27 -36 76 -43\n109 -8 34 -16 63 -19 65 -7 7 -178 25 -236 25 -47 0 -58 4 -83 31 -27 29 -29\n37 -29 109 0 79 18 133 48 145 7 2 76 8 153 11 80 4 143 12 148 18 5 6 17 38\n26 70 10 33 31 91 47 129 l30 70 -29 37 c-15 21 -68 83 -116 138 l-88 100 11\n44 c6 24 19 52 28 63 28 33 84 72 125 85 l38 12 95 -89 c173 -159 158 -154\n259 -93 33 20 89 44 125 55 98 28 96 25 105 186 l7 141 51 24 c52 24 98 29\n154 18z m709 -680 c16 -10 31 -19 33 -21 3 -2 10 -72 15 -156 l11 -152 45 -14\nc25 -8 78 -27 118 -43 41 -15 78 -28 83 -28 8 0 80 61 206 173 22 19 24 19 66\n3 57 -21 100 -65 132 -131 14 -30 25 -56 25 -59 0 -3 -38 -49 -85 -101 -47\n-53 -85 -103 -85 -111 0 -8 20 -50 44 -92 25 -42 54 -110 65 -151 12 -41 25\n-79 29 -83 5 -5 69 -14 143 -19 155 -12 172 -20 201 -94 19 -47 19 -53 4 -101\n-9 -29 -26 -63 -37 -78 -18 -23 -27 -26 -87 -27 -98 -1 -210 -13 -222 -25 -5\n-5 -20 -43 -32 -84 -12 -41 -39 -103 -60 -138 -21 -34 -38 -72 -38 -83 0 -11\n26 -48 57 -82 114 -123 105 -107 87 -160 -22 -65 -91 -133 -144 -142 -39 -7\n-43 -5 -136 74 -52 45 -102 81 -110 81 -8 0 -38 -12 -67 -27 -29 -15 -86 -41\n-127 -58 l-75 -30 -10 -143 c-9 -135 -11 -144 -35 -163 -59 -45 -144 -49 -224\n-8 -36 17 -46 28 -47 48 -1 14 -4 80 -8 146 l-6 120 -90 31 c-49 18 -122 50\n-162 73 -40 22 -79 41 -88 41 -8 0 -65 -43 -126 -96 -107 -92 -112 -96 -147\n-89 -67 13 -144 90 -157 157 -7 34 -3 40 105 163 61 70 109 132 107 139 -84\n217 -93 237 -112 241 -11 3 -81 9 -154 13 l-135 7 -20 34 c-26 44 -27 162 -3\n208 20 37 25 38 200 53 65 5 122 12 127 15 4 3 16 29 25 58 10 28 33 87 52\n131 l34 79 -43 51 c-23 28 -61 71 -84 96 -87 93 -106 122 -100 155 13 64 85\n139 158 165 l37 14 86 -80 c181 -165 186 -168 210 -145 27 24 132 73 187 87\n102 26 98 20 99 137 0 56 4 125 7 152 7 47 10 51 52 73 37 20 56 23 111 19 40\n-2 77 -11 95 -23z m-742 -50 c12 -5 16 -20 16 -60 0 -62 16 -78 86 -90 38 -6\n45 -3 82 30 36 33 43 36 62 24 36 -22 37 -55 1 -92 -35 -37 -37 -47 -15 -81\n19 -28 13 -40 -34 -67 l-29 -18 -122 111 -121 110 0 58 c0 73 22 95 74 75z\nm-254 -133 l35 -30 -40 -36 -40 -37 -32 38 c-38 43 -42 77 -11 98 24 17 33 13\n88 -33z m1308 -162 c-2 -6 -7 -10 -11 -10 -4 1 -14 1 -22 1 -8 0 -15 5 -15 10\n0 6 12 10 26 10 14 0 24 -5 22 -11z m-1408 -98 c0 -4 50 -65 111 -135 123\n-141 131 -163 59 -158 -35 2 -52 -3 -86 -28 -46 -33 -63 -37 -82 -18 -21 21\n-13 53 23 95 41 48 42 56 15 117 -19 45 -20 46 -64 46 -66 0 -76 6 -76 51 l0\n39 50 0 c28 0 50 -4 50 -9z m205 -1071 c7 -31 1 -50 -16 -50 -5 0 -9 18 -9 40\n0 47 16 53 25 10z" }), _jsx("path", { d: "M1846 1691 c-10 -11 -23 -43 -30 -72 -10 -46 -16 -56 -48 -73 l-37\n-19 -49 42 c-29 24 -60 41 -75 41 -34 0 -73 -34 -87 -76 -10 -29 -9 -39 4 -57\n65 -89 68 -96 59 -124 -8 -23 -16 -29 -44 -31 -87 -6 -95 -10 -108 -51 -13\n-45 -1 -118 21 -132 7 -5 32 -9 56 -9 42 0 82 -25 82 -51 0 -7 -18 -31 -40\n-55 -22 -24 -40 -52 -40 -61 0 -32 40 -84 76 -99 38 -16 41 -15 96 29 l37 29\n45 -17 c44 -17 45 -18 52 -71 7 -56 21 -76 67 -93 22 -9 35 -7 60 5 41 21 47\n31 47 77 0 52 13 73 52 81 26 5 39 1 70 -25 35 -28 42 -30 71 -20 77 27 99 90\n53 157 l-24 35 19 40 c19 38 21 39 69 39 38 0 54 5 69 22 33 34 37 81 11 122\n-21 35 -32 39 -108 48 -17 2 -29 15 -44 50 l-20 48 26 34 c35 47 35 94 -2 129\n-38 36 -79 35 -127 -3 -21 -16 -48 -30 -61 -30 -31 0 -54 36 -54 83 0 28 -6\n44 -22 58 -31 25 -99 25 -122 0z m98 -81 c9 -70 14 -79 51 -94 66 -28 70 -28\n119 10 84 64 131 20 66 -61 -16 -21 -30 -39 -30 -40 0 -1 16 -37 35 -79 l34\n-76 55 0 c46 0 57 -4 67 -21 8 -16 8 -28 0 -45 -9 -21 -17 -24 -66 -24 l-56 0\n-30 -66 c-31 -70 -31 -90 1 -119 29 -27 26 -69 -7 -84 -24 -11 -29 -9 -59 20\n-28 27 -37 31 -68 25 -20 -4 -51 -13 -71 -22 -28 -11 -35 -20 -35 -42 0 -15\n-3 -44 -6 -65 -6 -33 -10 -37 -35 -37 -34 0 -49 23 -49 77 0 49 -4 53 -70 81\n-30 13 -60 26 -66 28 -6 3 -33 -13 -61 -36 l-51 -40 -26 21 c-14 11 -26 25\n-26 31 0 6 18 30 40 54 46 50 48 67 19 124 -18 35 -26 40 -54 40 -72 0 -109\n35 -85 80 9 16 21 20 65 20 54 0 55 1 71 38 31 75 30 88 -15 145 -46 61 -47\n64 -24 89 23 26 36 23 88 -22 25 -22 53 -40 60 -40 26 0 123 49 129 66 3 8 6\n29 6 45 0 46 17 69 49 69 27 0 29 -3 35 -50z" })] }) }));
}
export function UserTaskSvg({ stroke, size }) {
    return (_jsx("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: size, height: (size * 276) / 269, viewBox: "0 0 269 276", preserveAspectRatio: "xMidYMid meet", children: _jsx("g", { transform: "translate(0, 276) scale(0.1, -0.1)", stroke: stroke, strokeWidth: 25, children: _jsx("path", { d: "M1310 2724 c-160 -26 -279 -82 -372 -176 -76 -77 -118 -153 -142\n        -255 -44 -196 6 -453 121 -614 18 -26 33 -51 33 -56 0 -24 -44 -45 -116 -58\n        -319 -57 -613 -271 -777 -566 l-37 -66 2 -414 3 -414 23 -3 c16 -3 22 -10 22\n        -28 l0 -24 1258 0 1257 0 18 43 c15 38 17 84 17 437 l0 394 -32 85 c-62 165\n        -212 341 -374 438 -82 49 -222 101 -324 118 -84 15 -130 34 -130 55 0 4 21 42\n        48 86 72 120 101 217 128 430 8 58 -22 197 -57 270 -55 112 -149 207 -250 252\n        -114 50 -247 78 -319 66z m416 -614 c75 -7 134 -16 141 -23 10 -10 10 -27 -1\n        -82 -7 -39 -17 -79 -21 -90 -26 -71 -72 -149 -120 -204 -62 -70 -62 -63 2\n        -132 l33 -35 -2 -175 -3 -174 -400 0 -400 0 -3 173 -2 173 40 46 c22 25 40 52\n        40 60 0 7 -17 32 -39 56 -43 47 -101 136 -119 182 -21 54 -44 177 -36 185 5 5\n        27 2 49 -6 60 -22 273 -11 335 18 75 36 274 46 506 28z m194 -600 c275 -54\n        533 -270 626 -527 27 -74 30 -103 12 -104 -10 0 -10 -2 0 -6 9 -4 12 -86 12\n        -364 l0 -359 -229 0 -230 0 -1 220 c0 121 -3 227 -6 235 -7 17 -30 20 -39 5\n        -3 -6 -6 -97 -5 -203 0 -106 -3 -207 -6 -225 l-7 -32 -736 2 c-580 2 -736 6\n        -737 16 -1 6 -2 109 -3 227 -1 186 -3 216 -17 222 -8 3 -19 2 -24 -3 -5 -5\n        -10 -110 -12 -234 l-3 -225 -223 -3 -222 -2 0 387 0 388 39 67 c105 180 259\n        327 446 427 79 43 219 89 280 93 48 3 50 2 56 -27 4 -16 7 -98 8 -181 1 -129\n        3 -153 17 -158 20 -8 842 -8 872 0 22 6 22 8 22 188 0 101 3 186 6 189 4 4 16\n        5 28 2 12 -2 46 -9 76 -15z" }) }) }));
}
export function GatewayNodeSvg(__props) {
    const { x, y, width, height, strokeWidth, props: { ..._props }, } = normalize(__props);
    const { variant, isIcon, ...props } = { ..._props };
    const iconOffset = isIcon ? 25 : 0;
    return (_jsxs(_Fragment, { children: [!isIcon && (_jsx("rect", { x: 8 + x, y: 8 + y, transform: `rotate(45,${x + width / 2},${y + height / 2})`, strokeWidth: strokeWidth, width: width / 1.4, height: height / 1.4, fill: NODE_COLORS.gateway.background, stroke: NODE_COLORS.gateway.foreground, strokeLinejoin: "round", rx: "5", ry: "5", ...props })), variant === "parallelGateway" && (_jsx(ParallelGatewaySvg, { stroke: NODE_COLORS.gateway.foreground, strokeWidth: isIcon ? 30 : 4.5, cx: x + width / 2, cy: y + height / 2 - iconOffset, size: isIcon ? 210 : 30 })), variant === "exclusiveGateway" && (_jsx(ExclusiveGatewaySvg, { stroke: NODE_COLORS.gateway.foreground, strokeWidth: isIcon ? 30 : 4.5, cx: x + width / 2, cy: y + height / 2 - iconOffset, size: isIcon ? 210 : 30 })), variant === "inclusiveGateway" && (_jsx(InclusiveGatewaySvg, { stroke: NODE_COLORS.gateway.foreground, strokeWidth: isIcon ? 30 : 4.5, cx: x + width / 2, cy: y + height / 2 - iconOffset, size: isIcon ? 275 : 40 })), variant === "eventBasedGateway" && (_jsx(EventBasedGatewaySvg, { stroke: NODE_COLORS.gateway.foreground, circleStrokeWidth: isIcon ? 10 : 1.5, strokeWidth: isIcon ? 30 : 2, cx: x + width / 2, cy: y + height / 2 - iconOffset, size: isIcon ? 275 : 40 })), variant === "complexGateway" && (_jsx(ComplexGatewaySvg, { stroke: NODE_COLORS.gateway.foreground, strokeWidth: isIcon ? 30 : 4.5, cx: x + width / 2, cy: y + height / 2 - iconOffset, size: isIcon ? 300 : 50 }))] }));
}
export function ParallelGatewaySvg({ stroke, strokeWidth, cx, cy, size, }) {
    return (_jsxs(_Fragment, { children: [_jsx("line", { x1: cx, y1: cy - size / 2, x2: cx, y2: cy + size / 2, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 }), _jsx("line", { x1: cx - size / 2, y1: cy, x2: cx + size / 2, y2: cy, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 })] }));
}
export function ExclusiveGatewaySvg({ stroke, strokeWidth, cx, cy, size, }) {
    return (_jsxs(_Fragment, { children: [_jsx("line", { x1: cx - size / 3, y1: cy - size / 3, x2: cx + size / 3, y2: cy + size / 3, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 }), _jsx("line", { x1: cx + size / 3, y1: cy - size / 3, x2: cx - size / 3, y2: cy + size / 3, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 })] }));
}
export function InclusiveGatewaySvg({ stroke, strokeWidth, cx, cy, size, }) {
    return (_jsx(_Fragment, { children: _jsx("circle", { cx: cx, cy: cy, r: size / 3, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, fill: "none" }) }));
}
export function EventBasedGatewaySvg({ stroke, strokeWidth, circleStrokeWidth, cx, cy, size, }) {
    const pentagonPoints = Array.from({ length: 5 }, (_, i) => {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        return {
            x: cx + (size / 4) * Math.cos(angle),
            y: cy + (size / 4) * Math.sin(angle),
        };
    });
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, r: size / 3, stroke: stroke, strokeWidth: circleStrokeWidth, fill: "none" }), _jsx("circle", { cx: cx, cy: cy, r: size / 2.5, stroke: stroke, strokeWidth: circleStrokeWidth, fill: "none" }), _jsx("polygon", { points: pentagonPoints.map((point) => `${point.x},${point.y}`).join(" "), stroke: stroke, strokeWidth: strokeWidth, fill: "none" })] }));
}
export function ComplexGatewaySvg({ stroke, strokeWidth, cx, cy, size, }) {
    const lineLength = size / 3;
    const diagonalLength = lineLength / Math.sqrt(2);
    return (_jsxs(_Fragment, { children: [_jsx("line", { x1: cx, y1: cy - lineLength, x2: cx, y2: cy + lineLength, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 }), _jsx("line", { x1: cx - lineLength, y1: cy, x2: cx + lineLength, y2: cy, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 }), _jsx("line", { x1: cx - diagonalLength, y1: cy - diagonalLength, x2: cx + diagonalLength, y2: cy + diagonalLength, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 }), _jsx("line", { x1: cx + diagonalLength, y1: cy - diagonalLength, x2: cx - diagonalLength, y2: cy + diagonalLength, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 })] }));
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
export function EventVariantSymbolSvg({ variant, stroke, strokeWidth, isIcon, cx, cy, x, y, innerCircleRadius, outerCircleRadius, fill, filled, }) {
    return (_jsxs(_Fragment, { children: [variant === "messageEventDefinition" && (_jsx(MessageEventSymbolSvg, { fill: fill !== null && fill !== void 0 ? fill : "none", filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "timerEventDefinition" && (_jsx(TimerEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "errorEventDefinition" && (_jsx(ErrorEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "escalationEventDefinition" && (_jsx(EscalationEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "compensateEventDefinition" && (_jsx(CompensationEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "conditionalEventDefinition" && (_jsx(ConditionalEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, cx: cx, cy: cy, outerCircleRadius: outerCircleRadius })), variant === "linkEventDefinition" && (_jsx(LinkEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius })), variant === "signalEventDefinition" && (_jsx(SignalEventSymbolSvg, { filled: filled, stroke: stroke, strokeWidth: strokeWidth, isIcon: isIcon, x: x, y: y, cx: cx, cy: cy, innerCircleRadius: innerCircleRadius, outerCircleRadius: outerCircleRadius })), variant === "terminateEventDefinition" && (_jsx(_Fragment, { children: _jsx("circle", { cx: cx, cy: cy, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2.5, fill: NODE_COLORS.endEvent.foreground, stroke: NODE_COLORS.endEvent.foreground, strokeLinejoin: "round", r: outerCircleRadius / 2 }) }))] }));
}
export function MessageEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, fill, filled, }) {
    const scaleFactor = isIcon ? 1.9 : 1;
    const scaledBodyWidth = innerCircleRadius * 1.2 * scaleFactor;
    const scaledBodyHeight = innerCircleRadius * 0.8 * scaleFactor;
    const envelopeBody = {
        topLeft: { x: cx - scaledBodyWidth / 2, y: cy - scaledBodyHeight / 2 },
        bottomRight: { x: cx + scaledBodyWidth / 2, y: cy + scaledBodyHeight / 2 },
    };
    const scaledFlapHeight = scaledBodyHeight * 0.5;
    const envelopeFlap = [
        { x: envelopeBody.topLeft.x, y: envelopeBody.topLeft.y },
        { x: envelopeBody.bottomRight.x, y: envelopeBody.topLeft.y },
        { x: cx, y: envelopeBody.topLeft.y + scaledFlapHeight },
    ];
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: envelopeBody.topLeft.x, y: envelopeBody.topLeft.y, width: scaledBodyWidth, height: scaledBodyHeight, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : fill, stroke: stroke }), _jsx("polygon", { points: envelopeFlap.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : fill, stroke: stroke }), filled && (_jsxs(_Fragment, { children: [_jsx("line", { x1: envelopeFlap[0].x, y1: envelopeFlap[0].y, x2: envelopeFlap[2].x, y2: envelopeFlap[2].y, stroke: fill, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 }), _jsx("line", { x1: envelopeFlap[1].x, y1: envelopeFlap[1].y, x2: envelopeFlap[2].x, y2: envelopeFlap[2].y, stroke: fill, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 })] }))] }));
}
export function TimerEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, outerCircleRadius, filled, }) {
    const scaleFactor = isIcon ? 1.4 : 1;
    const scaledPadding = 1.2 * (outerCircleRadius - innerCircleRadius) * scaleFactor;
    const scaledClockRadius = (innerCircleRadius - scaledPadding) * scaleFactor;
    const scaledShortHandLength = scaledClockRadius * 0.5;
    const scaledLongHandLength = scaledClockRadius * 0.9;
    const hourHandAngle = Math.PI / 12;
    const minuteHandAngle = (-5 * Math.PI) / 12;
    const hourHand = {
        x: cx + scaledShortHandLength * Math.cos(hourHandAngle),
        y: cy + scaledShortHandLength * Math.sin(hourHandAngle),
    };
    const minuteHand = {
        x: cx + scaledLongHandLength * Math.cos(minuteHandAngle),
        y: cy + scaledLongHandLength * Math.sin(minuteHandAngle),
    };
    return (_jsxs(_Fragment, { children: [_jsx("circle", { cx: cx, cy: cy, r: scaledClockRadius, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, fill: filled ? stroke : "transparent" }), _jsx("line", { x1: cx, y1: cy, x2: hourHand.x, y2: hourHand.y, stroke: filled ? "transparent" : stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 }), _jsx("line", { x1: cx, y1: cy, x2: minuteHand.x, y2: minuteHand.y, stroke: filled ? "transparent" : stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 }), Array.from({ length: 12 }, (_, index) => {
                const angle = (index / 12) * 2 * Math.PI;
                const x1 = cx + scaledClockRadius * Math.cos(angle);
                const y1 = cy + scaledClockRadius * Math.sin(angle);
                const x2 = cx + (scaledClockRadius - scaledPadding * 0.5) * Math.cos(angle);
                const y2 = cy + (scaledClockRadius - scaledPadding * 0.5) * Math.sin(angle);
                return _jsx("line", { x1: x1, y1: y1, x2: x2, y2: y2, stroke: stroke, strokeWidth: 1.5 }, index);
            })] }));
}
export function ErrorEventSymbolSvg({ stroke, strokeWidth, cx, cy, innerCircleRadius, outerCircleRadius, filled, }) {
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
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: points.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function EscalationEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, filled, }) {
    const scaleFactor = isIcon ? 1.8 : 1;
    const scaledArrowHeight = innerCircleRadius * 1.2 * scaleFactor;
    const scaledArrowBaseWidth = innerCircleRadius * scaleFactor;
    const midCenterYOffset = ((innerCircleRadius * 1.2) / 20) * scaleFactor;
    const arrow = [
        { x: cx - scaledArrowBaseWidth / 2, y: cy + scaledArrowHeight / 2 },
        { x: cx, y: cy - scaledArrowHeight / 2 },
        { x: cx + scaledArrowBaseWidth / 2, y: cy + scaledArrowHeight / 2 },
        { x: cx, y: cy + midCenterYOffset },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: arrow.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function CompensationEventSymbolSvg({ stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }) {
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
    return (_jsxs(_Fragment, { children: [_jsx("polygon", { points: firstTriangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }), _jsx("polygon", { points: secondTriangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke })] }));
}
export function ConditionalEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, outerCircleRadius, filled, }) {
    const scaleFactor = isIcon ? 1.8 : 1;
    const squareSize = outerCircleRadius * 1.1 * scaleFactor;
    const halfSquareSize = squareSize / 2;
    const lineSpacing = squareSize / 5;
    const lineBuffer = isIcon ? 50 : 5;
    const x1 = cx - halfSquareSize + lineBuffer;
    const x2 = cx + halfSquareSize - lineBuffer;
    const squareX = cx - halfSquareSize;
    const squareY = cy - halfSquareSize;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: squareX, y: squareY, width: squareSize, height: squareSize, fill: filled ? stroke : "transparent", stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5 }), [...Array(4)].map((_, index) => {
                const lineY = squareY + lineSpacing * (index + 1);
                return (_jsx("line", { x1: x1, y1: lineY, x2: x2, y2: lineY, stroke: stroke, strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 2 }, index));
            })] }));
}
export function LinkEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, filled, }) {
    const scaleFactor = isIcon ? 50 : 1;
    const arrowHeight = innerCircleRadius * 1.2;
    const arrowBaseWidth = innerCircleRadius * 1;
    const shiftLeft = 6;
    const rectangleHeight = 5;
    const arrowPadding = 1;
    const arrow = [
        { x: cx - arrowBaseWidth / 2 - shiftLeft - scaleFactor, y: cy + arrowHeight / 2 - rectangleHeight },
        { x: cx - arrowBaseWidth / 2 - shiftLeft - scaleFactor, y: cy - arrowHeight / 2 + rectangleHeight },
        { x: cx + arrowBaseWidth / 2, y: cy - arrowHeight / 2 + rectangleHeight },
        { x: cx + arrowBaseWidth / 2, y: cy - arrowHeight / 2 - arrowPadding - scaleFactor },
        { x: cx + arrowBaseWidth / 2 + 7 + scaleFactor, y: cy },
        { x: cx + arrowBaseWidth / 2, y: cy + arrowHeight / 2 + arrowPadding + scaleFactor },
        { x: cx + arrowBaseWidth / 2, y: cy + arrowHeight / 2 - rectangleHeight },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: arrow.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function SignalEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }) {
    const scaleFactor = isIcon ? 1.2 : 1;
    const padding = 1.5 * (outerCircleRadius - innerCircleRadius);
    const hx = (x + innerCircleRadius - padding) * scaleFactor;
    const hy = (y + innerCircleRadius - padding) * scaleFactor;
    const triangle = [
        { x: cx + cos30 * hx, y: (padding / 4) * scaleFactor + cy + sin30 * hy },
        { x: cx - cos30 * hx, y: (padding / 4) * scaleFactor + cy + sin30 * hy },
        { x: cx, y: (padding / 4) * scaleFactor + cy - hy },
    ];
    return (_jsx(_Fragment, { children: _jsx("polygon", { points: triangle.map((point) => `${point.x},${point.y}`).join(" "), strokeWidth: strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1.5, strokeLinejoin: "round", fill: filled ? stroke : "transparent", stroke: stroke }) }));
}
export function ActivityNodeIcons({ x, y, width, height, icons, }) {
    const orderedMarkers = Object.values(ActivityNodeMarker);
    const iconElements = orderedMarkers.filter((marker) => icons.has(marker));
    const iconSize = 20;
    const iconSpacing = 2;
    const stroke = NODE_COLORS.task.foreground;
    const strokeWidth = 2;
    const totalIconsWidth = iconElements.length * iconSize + (iconElements.length - 1) * iconSpacing;
    const startX = x + (width - totalIconsWidth) / 2;
    const bottomY = y + height;
    return (_jsx(_Fragment, { children: iconElements.map((icon, index) => {
            const iconX = startX + index * (iconSize + iconSpacing);
            return icon === ActivityNodeMarker.Collapsed ? (_jsx("g", { transform: `translate(${iconX}, ${bottomY - iconSize})`, children: _jsx(CollapsedIconSvg, { stroke: stroke, strokeWidth: strokeWidth, size: iconSize }) }, icon)) : icon === ActivityNodeMarker.MultiInstanceParallel ? (_jsx("g", { transform: `translate(${iconX}, ${bottomY - iconSize + 2})`, children: _jsx(MultiInstanceParallelIconSvg, { stroke: stroke, strokeWidth: strokeWidth, size: 28 }) }, icon)) : icon === ActivityNodeMarker.MultiInstanceSequential ? (_jsx("g", { transform: `translate(${iconX - 3}, ${bottomY - iconSize - 2})`, children: _jsx(MultiInstanceSequentialIconSvg, { stroke: stroke, strokeWidth: strokeWidth, size: 28 }) }, icon)) : icon === ActivityNodeMarker.Loop ? (_jsx("g", { transform: `translate(${iconX}, ${bottomY - iconSize})`, children: _jsx(LoopIconSvg, { stroke: stroke, size: iconSize }) }, icon)) : icon === ActivityNodeMarker.AdHocSubProcess ? (_jsx("g", { transform: `translate(${iconX}, ${bottomY - iconSize + 5})`, children: _jsx(AdHocSubProcessIconSvg, { stroke: stroke, size: iconSize }) }, icon)) : icon === ActivityNodeMarker.Compensation ? (_jsx("g", { transform: `translate(${iconX - 13}, ${bottomY - iconSize - 7})`, children: _jsx(CompensationIconSvg, { stroke: stroke, strokeWidth: strokeWidth, size: 33 }) }, icon)) : null;
        }) }));
}
export function LoopIconSvg({ stroke, size }) {
    return (_jsx("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: size, height: (size * 113) / 132, viewBox: "0 0 132.000000 113.000000", preserveAspectRatio: "xMidYMid meet", children: _jsx("g", { transform: "translate(0.000000,113.000000) scale(0.100000,-0.100000)", fill: stroke, stroke: "none", children: _jsx("path", { d: "M620 1075 c-83 -23 -144 -59 -216 -128 -126 -119 -194 -300 -173\n-458 12 -87 37 -165 74 -232 15 -26 25 -50 23 -52 -2 -3 -53 11 -112 31 -123\n40 -154 41 -175 3 -13 -24 -13 -29 2 -52 13 -20 53 -37 220 -91 112 -36 215\n-66 229 -66 45 0 45 0 148 330 39 122 41 137 28 160 -15 28 -61 39 -83 20 -8\n-7 -35 -77 -61 -156 -25 -79 -50 -144 -54 -144 -15 0 -58 63 -86 126 -46 102\n-45 259 4 364 25 54 85 133 126 163 110 84 281 103 412 45 136 -59 234 -219\n234 -382 0 -172 -79 -305 -228 -387 -67 -37 -83 -62 -63 -105 20 -45 90 -27\n202 54 81 58 145 148 181 254 29 82 31 266 5 343 -65 189 -206 325 -377 364\n-60 14 -204 12 -260 -4z" }) }) }));
}
export function AdHocSubProcessIconSvg({ stroke, size, isIcon }) {
    return (_jsx("svg", { version: "1.0", xmlns: "http://www.w3.org/2000/svg", width: size, height: (size * 44) / 110, viewBox: "0 0 110.000000 44.000000", preserveAspectRatio: "xMidYMid meet", style: {
            transform: isIcon ? "translate(1.5px, 3px)" : "none",
        }, children: _jsx("g", { transform: "translate(0.000000,44.000000) scale(0.100000,-0.100000)", fill: stroke, stroke: "none", children: _jsx("path", { d: "M210 356 c-53 -15 -92 -37 -137 -80 -33 -30 -33 -31 -33 -123 0 -51\n2 -93 5 -93 3 0 32 22 66 49 111 90 211 94 399 19 145 -59 186 -69 269 -69 78\n0 157 26 220 71 l41 30 0 78 c0 42 3 87 6 100 9 32 -11 28 -58 -12 -109 -93\n-201 -104 -358 -42 -211 84 -312 102 -420 72z" }) }) }));
}
export function CompensationIconSvg({ stroke, strokeWidth, size, }) {
    const arrowWidth = size / 3;
    const arrowHeight = size / 2;
    const centerY = size / 2;
    const offsetX = size / 4;
    return (_jsxs(_Fragment, { children: [_jsx("polygon", { points: `${offsetX},${centerY} ${offsetX + arrowWidth},${centerY - arrowHeight / 2} ${offsetX + arrowWidth},${centerY + arrowHeight / 2}`, fill: "none", stroke: stroke, strokeWidth: strokeWidth, strokeLinejoin: "round" }), _jsx("polygon", { points: `${offsetX + arrowWidth},${centerY} ${offsetX + 2 * arrowWidth},${centerY - arrowHeight / 2} ${offsetX + 2 * arrowWidth},${centerY + arrowHeight / 2}`, fill: "none", stroke: stroke, strokeWidth: strokeWidth, strokeLinejoin: "round" })] }));
}
export function CollapsedIconSvg({ stroke, strokeWidth, size }) {
    const squareSize = size;
    const padding = size * 0.25;
    return (_jsxs(_Fragment, { children: [_jsx("rect", { x: 0, y: 0, width: squareSize, height: squareSize, fill: "none", stroke: stroke, strokeWidth: strokeWidth }), _jsx("line", { x1: squareSize / 2, y1: padding, x2: squareSize / 2, y2: squareSize - padding, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }), _jsx("line", { x1: padding, y1: squareSize / 2, x2: squareSize - padding, y2: squareSize / 2, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" })] }));
}
export function MultiInstanceSequentialIconSvg({ stroke, strokeWidth, size, }) {
    const lineSpacing = size / 5;
    const lineWidth = size * 0.5;
    return (_jsxs(_Fragment, { children: [_jsx("line", { x1: (size - lineWidth) / 2, y1: lineSpacing, x2: (size + lineWidth) / 2, y2: lineSpacing, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }), _jsx("line", { x1: (size - lineWidth) / 2, y1: lineSpacing * 2, x2: (size + lineWidth) / 2, y2: lineSpacing * 2, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }), _jsx("line", { x1: (size - lineWidth) / 2, y1: lineSpacing * 3, x2: (size + lineWidth) / 2, y2: lineSpacing * 3, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" })] }));
}
export function MultiInstanceParallelIconSvg({ stroke, strokeWidth, size, isIcon, }) {
    const lineSpacing = size / 5;
    const lineHeight = size * 0.5;
    const offsetX = isIcon ? 2.5 : 0;
    const offsetY = isIcon ? 9 : 0;
    return (_jsxs("svg", { width: size, height: size, viewBox: `0 0 ${size} ${size}`, xmlns: "http://www.w3.org/2000/svg", children: [_jsx("line", { x1: lineSpacing + offsetX, y1: 0 + offsetY, x2: lineSpacing + offsetX, y2: lineHeight + offsetY, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }), _jsx("line", { x1: lineSpacing * 2 + offsetX, y1: 0 + offsetY, x2: lineSpacing * 2 + offsetX, y2: lineHeight + offsetY, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" }), _jsx("line", { x1: lineSpacing * 3 + offsetX, y1: 0 + offsetY, x2: lineSpacing * 3 + offsetX, y2: lineHeight + offsetY, stroke: stroke, strokeWidth: strokeWidth, strokeLinecap: "round" })] }));
}
//# sourceMappingURL=NodeSvgs.js.map