import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
export const SequenceFlowPath = React.memo((_props) => {
    const { svgRef, ...props } = _props;
    return (_jsx(_Fragment, { children: _jsx("path", { ref: svgRef, style: { strokeWidth: 1, stroke: "black" }, markerEnd: "url(#closed-arrow)", ...props }) }));
});
export const AssociationPath = React.memo((__props) => {
    var _a;
    const strokeWidth = (_a = __props.strokeWidth) !== null && _a !== void 0 ? _a : 1.5;
    const { svgRef, ...props } = __props;
    return (_jsx(_Fragment, { children: _jsx("path", { ref: svgRef, strokeWidth: strokeWidth, strokeLinecap: "butt", strokeLinejoin: "round", style: { stroke: "black", strokeDasharray: `${strokeWidth},10` }, ...props }) }));
});
//# sourceMappingURL=EdgeSvgs.js.map