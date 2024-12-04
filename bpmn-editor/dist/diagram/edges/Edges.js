import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEdgeClassName } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/Hooks";
import { PotentialWaypoint, Waypoints } from "@kie-tools/xyflow-react-kie-diagram/dist/waypoints/Waypoints";
import { useAlwaysVisibleEdgeUpdatersAtNodeBorders } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/useAlwaysVisibleEdgeUpdatersAtNodeBorders";
import { usePathForEdgeWithWaypoints } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/usePathForEdgeWithWaypoints";
import { usePotentialWaypointControls } from "@kie-tools/xyflow-react-kie-diagram/dist/waypoints/usePotentialWaypointControls";
import { DEFAULT_INTRACTION_WIDTH } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { propsHaveSameValuesDeep } from "@kie-tools/xyflow-react-kie-diagram/dist/memoization/memoization";
import { useIsHovered } from "@kie-tools/xyflow-react-kie-diagram/dist/reactExt/useIsHovered";
import * as React from "react";
import { useRef } from "react";
import * as RF from "reactflow";
import { AssociationPath, SequenceFlowPath } from "./EdgeSvgs";
const interactionStrokeProps = {
    strokeOpacity: 1,
    markerEnd: undefined,
    style: undefined,
    className: "react-flow__edge-interaction",
    stroke: "transparent",
    strokeLinecap: "round",
};
export const SequenceFlowEdge = React.memo((props) => {
    var _a, _b, _c, _d, _e, _f;
    const renderCount = useRef(0);
    renderCount.current++;
    const { path, points: waypoints } = usePathForEdgeWithWaypoints(props.source, props.target, (_a = props.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge, (_b = props.data) === null || _b === void 0 ? void 0 : _b.bpmnShapeSource, (_c = props.data) === null || _c === void 0 ? void 0 : _c.bpmnShapeTarget);
    const interactionPathRef = React.useRef(null);
    const isHovered = useIsHovered(interactionPathRef);
    const { onMouseMove: onMouseMoveOnEdge, onDoubleClick: onDoubleClickEdge, potentialWaypoint, isDraggingWaypoint, } = usePotentialWaypointControls(waypoints, props.selected, props.id, (_d = props.data) === null || _d === void 0 ? void 0 : _d.bpmnEdgeIndex, interactionPathRef);
    const isConnecting = !!RF.useStore((s) => s.connectionNodeId);
    const className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    useAlwaysVisibleEdgeUpdatersAtNodeBorders(interactionPathRef, props.source, props.target, waypoints);
    return (_jsxs(_Fragment, { children: [_jsx(SequenceFlowPath, { svgRef: interactionPathRef, d: path, ...interactionStrokeProps, className: `${interactionStrokeProps.className} ${className}`, strokeWidth: (_e = props.interactionWidth) !== null && _e !== void 0 ? _e : DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMoveOnEdge, onDoubleClick: onDoubleClickEdge, "data-edgetype": "information-requirement" }), _jsx(SequenceFlowPath, { d: path, className: `xyflow-react-kie-diagram--edge ${className}` }), props.selected && !isConnecting && ((_f = props.data) === null || _f === void 0 ? void 0 : _f.bpmnEdge) && (_jsx(Waypoints, { edgeId: props.id, edgeIndex: props.data.bpmnEdgeIndex, waypoints: waypoints, onDragStop: onMouseMoveOnEdge })), isHovered && potentialWaypoint && _jsx(PotentialWaypoint, { point: potentialWaypoint.point })] }));
}, propsHaveSameValuesDeep);
export const AssociationEdge = React.memo((props) => {
    var _a, _b, _c, _d, _e, _f;
    const renderCount = useRef(0);
    renderCount.current++;
    const { path, points: waypoints } = usePathForEdgeWithWaypoints(props.source, props.target, (_a = props.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge, (_b = props.data) === null || _b === void 0 ? void 0 : _b.bpmnShapeSource, (_c = props.data) === null || _c === void 0 ? void 0 : _c.bpmnShapeTarget);
    const interactionPathRef = React.useRef(null);
    const isHovered = useIsHovered(interactionPathRef);
    const { onMouseMove: onMouseMoveOnEdge, onDoubleClick: onDoubleClickEdge, potentialWaypoint, isDraggingWaypoint, } = usePotentialWaypointControls(waypoints, props.selected, props.id, (_d = props.data) === null || _d === void 0 ? void 0 : _d.bpmnEdgeIndex, interactionPathRef);
    const isConnecting = !!RF.useStore((s) => s.connectionNodeId);
    const className = useEdgeClassName(isConnecting, isDraggingWaypoint);
    useAlwaysVisibleEdgeUpdatersAtNodeBorders(interactionPathRef, props.source, props.target, waypoints);
    return (_jsxs(_Fragment, { children: [_jsx(AssociationPath, { svgRef: interactionPathRef, d: path, ...interactionStrokeProps, className: `${interactionStrokeProps.className} ${className}`, strokeWidth: (_e = props.interactionWidth) !== null && _e !== void 0 ? _e : DEFAULT_INTRACTION_WIDTH, onMouseMove: onMouseMoveOnEdge, onDoubleClick: onDoubleClickEdge, "data-edgetype": "association" }), _jsx(AssociationPath, { d: path, className: `kie-bpmn-editor--edge ${className}` }), props.selected && !isConnecting && ((_f = props.data) === null || _f === void 0 ? void 0 : _f.bpmnEdge) && (_jsx(Waypoints, { edgeId: props.id, edgeIndex: props.data.bpmnEdgeIndex, waypoints: waypoints, onDragStop: onMouseMoveOnEdge })), isHovered && potentialWaypoint && _jsx(PotentialWaypoint, { point: potentialWaypoint.point })] }));
}, propsHaveSameValuesDeep);
//# sourceMappingURL=Edges.js.map