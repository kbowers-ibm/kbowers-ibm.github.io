import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { XyFlowReactKieDiagram, } from "@kie-tools/xyflow-react-kie-diagram/dist/diagram/XyFlowReactKieDiagram";
import { ConnectionLine as ReactFlowDiagramConnectionLine } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/ConnectionLine";
import { EdgeMarkers } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/EdgeMarkers";
import { ContainmentMode } from "@kie-tools/xyflow-react-kie-diagram/dist/graph/graphStructure";
import { getHandlePosition } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { PositionalNodeHandleId } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/PositionalNodeHandles";
import { offsetShapePosition, snapShapePosition } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
import { useCallback, useState } from "react";
import { useBpmnEditor } from "../BpmnEditorContext";
import { addConnectedNode } from "../mutations/addConnectedNode";
import { addEdge } from "../mutations/addEdge";
import { addEdgeWaypoint } from "../mutations/addEdgeWaypoint";
import { moveNodesInsideLane } from "../mutations/moveNodesInsideLane";
import { moveNodesInsideSubProcess } from "../mutations/moveNodesInsideSubProcess";
import { addStandaloneNode } from "../mutations/addStandaloneNode";
import { deleteEdge } from "../mutations/deleteEdge";
import { deleteEdgeWaypoint } from "../mutations/deleteEdgeWaypoint";
import { deleteNode } from "../mutations/deleteNode";
import { moveNodesOutOfLane } from "../mutations/moveNodesOutOfLane";
import { moveNodesOutOfSubProcess } from "../mutations/moveNodesOutOfSubProcess";
import { makeBoundaryEvent } from "../mutations/makeBoundaryEvent";
import { detachBoundaryEvent } from "../mutations/detachBoundaryEvent";
import { repositionEdgeWaypoint } from "../mutations/repositionEdgeWaypoint";
import { repositionNode } from "../mutations/repositionNode";
import { resizeNode } from "../mutations/resizeNode";
import { normalize } from "../normalization/normalize";
import { BpmnDiagramLhsPanel } from "../store/Store";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
import { BpmnDiagramCommands } from "./BpmnDiagramCommands";
import { BPMN_CONTAINMENT_MAP, BPMN_GRAPH_STRUCTURE, CONNECTION_LINE_EDGE_COMPONENTS_MAPPING, CONNECTION_LINE_NODE_COMPONENT_MAPPING, DEFAULT_NODE_SIZES, MIN_NODE_SIZES, NODE_TYPES, XY_FLOW_EDGE_TYPES, XY_FLOW_NODE_TYPES, } from "./BpmnDiagramDomain";
import { BpmnDiagramEmptyState } from "./BpmnDiagramEmptyState";
import { TopRightCornerPanels } from "./BpmnDiagramTopRightPanels";
import { BpmnPalette, MIME_TYPE_FOR_BPMN_EDITOR_NEW_NODE_FROM_PALETTE } from "./BpmnPalette";
import { DiagramContainerContextProvider } from "./DiagramContainerContext";
export function BpmnDiagram({ container, diagramRef, }) {
    var _a;
    const [showEmptyState, setShowEmptyState] = useState(true);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const model = useBpmnEditorStore((s) => s.bpmn.model);
    const { bpmnModelBeforeEditingRef } = useBpmnEditor();
    const onResetToBeforeEditingBegan = useCallback((stateDraft) => {
        stateDraft.bpmn.model = normalize(bpmnModelBeforeEditingRef.current);
        stateDraft.xyFlowReactKieDiagram.draggingNodes = [];
        stateDraft.xyFlowReactKieDiagram.draggingWaypoints = [];
        stateDraft.xyFlowReactKieDiagram.resizingNodes = [];
        stateDraft.xyFlowReactKieDiagram.dropTarget = undefined;
        stateDraft.xyFlowReactKieDiagram.edgeIdBeingUpdated = undefined;
    }, [bpmnModelBeforeEditingRef]);
    const nodes = useBpmnEditorStore((s) => s.computed(s).getDiagramData().nodes);
    const isEmptyStateShowing = showEmptyState && nodes.length === 0;
    const onNodeAdded = useCallback(({ state, type, element, dropPoint }) => {
        console.log("BPMN EDITOR DIAGRAM: onNodeAdded");
        const { id } = addStandaloneNode({
            definitions: state.bpmn.model.definitions,
            __readonly_element: element,
            __readonly_newNode: {
                type,
                bounds: {
                    "@_x": dropPoint.x,
                    "@_y": dropPoint.y,
                    "@_width": DEFAULT_NODE_SIZES[type]({ snapGrid: state.xyFlowReactKieDiagram.snapGrid })["@_width"],
                    "@_height": DEFAULT_NODE_SIZES[type]({ snapGrid: state.xyFlowReactKieDiagram.snapGrid })["@_height"],
                },
            },
        });
        return { newNodeId: id };
    }, []);
    const onConnectedNodeAdded = useCallback(({ state, sourceNode, newNodeType, edgeType, dropPoint }) => {
        console.log("BPMN EDITOR DIAGRAM: onConnectedNodeAdded");
        const { id } = addConnectedNode({
            definitions: state.bpmn.model.definitions,
            __readonly_sourceNode: {
                bounds: sourceNode.data.shape["dc:Bounds"],
                id: sourceNode.id,
                shapeId: sourceNode.data.shape["@_id"],
                type: sourceNode.type,
            },
            __readonly_newNode: {
                type: newNodeType,
                bounds: {
                    "@_x": dropPoint.x,
                    "@_y": dropPoint.y,
                    "@_width": DEFAULT_NODE_SIZES[newNodeType]({ snapGrid: state.xyFlowReactKieDiagram.snapGrid })["@_width"],
                    "@_height": DEFAULT_NODE_SIZES[newNodeType]({ snapGrid: state.xyFlowReactKieDiagram.snapGrid })["@_height"],
                },
            },
        });
        return { newNodeId: id };
    }, []);
    const onNodeRepositioned = useCallback(({ state, node, controlWaypointsByEdge, newPosition, childNodeIds }) => {
        console.log("BPMN EDITOR DIAGRAM: onNodeRepositioned");
        const { delta } = repositionNode({
            definitions: state.bpmn.model.definitions,
            controlWaypointsByEdge,
            __readonly_change: {
                type: "absolute",
                nodeType: node.type,
                selectedEdges: [...state.computed(state).getDiagramData().selectedEdgesById.keys()],
                shapeIndex: node.data.shapeIndex,
                sourceEdgeIndexes: state
                    .computed(state)
                    .getDiagramData()
                    .edges.flatMap((e) => { var _a; return (e.source === node.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                targetEdgeIndexes: state
                    .computed(state)
                    .getDiagramData()
                    .edges.flatMap((e) => { var _a; return (e.target === node.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                position: newPosition,
            },
        });
        const allEdgeIds = state
            .computed(state)
            .getDiagramData()
            .edges.map((e) => e.id);
        for (const nestedId of childNodeIds) {
            const nestedNode = state.computed(state).getDiagramData().nodesById.get(nestedId);
            if (!nestedNode) {
                throw new Error("Can't reposition nested node with id " + nestedId);
            }
            if (nestedNode.selected) {
                continue;
            }
            const snappedNestedNodeShapeWithAppliedDelta = snapShapePosition(state.xyFlowReactKieDiagram.snapGrid, offsetShapePosition(nestedNode.data.shape, delta));
            repositionNode({
                definitions: state.bpmn.model.definitions,
                controlWaypointsByEdge,
                __readonly_change: {
                    type: "absolute",
                    nodeType: nestedNode.type,
                    selectedEdges: allEdgeIds,
                    shapeIndex: nestedNode.data.shapeIndex,
                    sourceEdgeIndexes: state
                        .computed(state)
                        .getDiagramData()
                        .edges.flatMap((e) => { var _a; return (e.source === nestedId && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                    targetEdgeIndexes: state
                        .computed(state)
                        .getDiagramData()
                        .edges.flatMap((e) => { var _a; return (e.target === nestedId && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                    position: snappedNestedNodeShapeWithAppliedDelta,
                },
            });
        }
    }, []);
    const onNodeDeleted = useCallback(({ state, node }) => {
        var _a;
        console.log("BPMN EDITOR DIAGRAM: onNodeDeleted");
        deleteNode({
            definitions: state.bpmn.model.definitions,
            __readonly_bpmnElementId: (_a = node.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"],
            __readonly_bpmnEdgeData: state
                .computed(state)
                .getDiagramData()
                .edges.map((e) => e.data),
        });
    }, []);
    const onNodeUnparented = useCallback(({ state, activeNode, exParentNode, selectedNodes }) => {
        var _a, _b, _c, _d;
        console.log("BPMN EDITOR DIAGRAM: onNodeUnparented");
        if (exParentNode.type === NODE_TYPES.subProcess) {
            moveNodesOutOfSubProcess({
                definitions: state.bpmn.model.definitions,
                __readonly_subProcessId: (_a = exParentNode.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"],
                __readonly_nodeIds: selectedNodes.flatMap((s) => { var _a, _b; return (_b = (_a = s.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"]) !== null && _b !== void 0 ? _b : []; }),
            });
        }
        if (exParentNode.type === NODE_TYPES.lane) {
            moveNodesOutOfLane({
                definitions: state.bpmn.model.definitions,
                __readonly_laneId: (_b = exParentNode.data.bpmnElement) === null || _b === void 0 ? void 0 : _b["@_id"],
                __readonly_nodeIds: selectedNodes.flatMap((s) => { var _a, _b; return (_b = (_a = s.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"]) !== null && _b !== void 0 ? _b : []; }),
            });
        }
        if ((exParentNode.type === NODE_TYPES.subProcess || exParentNode.type === NODE_TYPES.task) &&
            activeNode.type === NODE_TYPES.intermediateCatchEvent &&
            ((_c = activeNode.data.bpmnElement) === null || _c === void 0 ? void 0 : _c.__$$element) === "boundaryEvent") {
            if (selectedNodes.length > 1) {
                throw new Error("Can't unparent more than one node when boundary events are selected.");
            }
            detachBoundaryEvent({
                definitions: state.bpmn.model.definitions,
                __readonly_eventId: (_d = activeNode.data.bpmnElement) === null || _d === void 0 ? void 0 : _d["@_id"],
            });
        }
    }, []);
    const onNodeParented = useCallback(({ state, containmentMode, activeNode, parentNode, selectedNodes }) => {
        var _a, _b, _c, _d;
        console.log(`BPMN EDITOR DIAGRAM: onNodeParented (${containmentMode})`);
        if (containmentMode === ContainmentMode.INSIDE && parentNode.type === NODE_TYPES.subProcess) {
            moveNodesInsideSubProcess({
                definitions: state.bpmn.model.definitions,
                __readonly_subProcessId: (_a = parentNode.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"],
                __readonly_nodeIds: selectedNodes.flatMap((s) => { var _a, _b; return (_b = (_a = s.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"]) !== null && _b !== void 0 ? _b : []; }),
            });
        }
        else if (containmentMode === ContainmentMode.INSIDE && parentNode.type === NODE_TYPES.lane) {
            moveNodesInsideLane({
                definitions: state.bpmn.model.definitions,
                __readonly_laneId: (_b = parentNode.data.bpmnElement) === null || _b === void 0 ? void 0 : _b["@_id"],
                __readonly_nodeIds: selectedNodes.flatMap((s) => { var _a, _b; return (_b = (_a = s.data.bpmnElement) === null || _a === void 0 ? void 0 : _a["@_id"]) !== null && _b !== void 0 ? _b : []; }),
            });
        }
        else if (containmentMode === ContainmentMode.BORDER &&
            (parentNode.type === NODE_TYPES.subProcess || parentNode.type === NODE_TYPES.task)) {
            makeBoundaryEvent({
                definitions: state.bpmn.model.definitions,
                __readonly_targetActivityId: (_c = parentNode.data.bpmnElement) === null || _c === void 0 ? void 0 : _c["@_id"],
                __readonly_eventId: (_d = activeNode.data.bpmnElement) === null || _d === void 0 ? void 0 : _d["@_id"],
            });
        }
    }, []);
    const onNodeResized = useCallback(({ state, node, newDimensions }) => {
        console.log("BPMN EDITOR DIAGRAM: onNodeResized");
        resizeNode({
            definitions: state.bpmn.model.definitions,
            __readonly_snapGrid: state.xyFlowReactKieDiagram.snapGrid,
            __readonly_change: {
                nodeType: node.type,
                shapeIndex: node.data.shapeIndex,
                sourceEdgeIndexes: state
                    .computed(state)
                    .getDiagramData()
                    .edges.flatMap((e) => { var _a; return (e.source === node.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                targetEdgeIndexes: state
                    .computed(state)
                    .getDiagramData()
                    .edges.flatMap((e) => { var _a; return (e.target === node.id && ((_a = e.data) === null || _a === void 0 ? void 0 : _a.bpmnEdge) ? [e.data.bpmnEdgeIndex] : []); }),
                dimension: {
                    "@_width": newDimensions.width,
                    "@_height": newDimensions.height,
                },
            },
        });
    }, []);
    const onEdgeAdded = useCallback(({ state, edgeType, sourceNode, targetNode, targetHandle }) => {
        console.log("BPMN EDITOR DIAGRAM: onEdgeAdded");
        addEdge({
            definitions: state.bpmn.model.definitions,
            __readonly_edge: {
                type: edgeType,
                targetHandle: targetHandle,
                sourceHandle: PositionalNodeHandleId.Center,
                autoPositionedEdgeMarker: undefined,
            },
            __readonly_sourceNode: {
                type: sourceNode.type,
                data: sourceNode.data,
                href: sourceNode.id,
                bounds: sourceNode.data.shape["dc:Bounds"],
                shapeId: sourceNode.data.shape["@_id"],
            },
            __readonly_targetNode: {
                type: targetNode.type,
                href: targetNode.id,
                data: targetNode.data,
                bounds: targetNode.data.shape["dc:Bounds"],
                shapeId: targetNode.data.shape["@_id"],
            },
            __readonly_keepWaypoints: false,
        });
    }, []);
    const onEdgeUpdated = useCallback(({ state, edge, targetNode, sourceNode, targetHandle, sourceHandle, firstWaypoint, lastWaypoint }) => {
        var _a, _b;
        console.log("BPMN EDITOR DIAGRAM: onEdgeUpdated");
        const { newBpmnEdge } = addEdge({
            definitions: state.bpmn.model.definitions,
            __readonly_edge: {
                autoPositionedEdgeMarker: undefined,
                type: edge.type,
                targetHandle: ((_a = targetHandle) !== null && _a !== void 0 ? _a : getHandlePosition({ shapeBounds: targetNode.data.shape["dc:Bounds"], waypoint: lastWaypoint })
                    .handlePosition),
                sourceHandle: ((_b = sourceHandle) !== null && _b !== void 0 ? _b : getHandlePosition({ shapeBounds: sourceNode.data.shape["dc:Bounds"], waypoint: firstWaypoint })
                    .handlePosition),
            },
            __readonly_sourceNode: {
                type: sourceNode.type,
                href: sourceNode.id,
                data: sourceNode.data,
                bounds: sourceNode.data.shape["dc:Bounds"],
                shapeId: sourceNode.data.shape["@_id"],
            },
            __readonly_targetNode: {
                type: targetNode.type,
                href: targetNode.id,
                data: targetNode.data,
                bounds: targetNode.data.shape["dc:Bounds"],
                shapeId: targetNode.data.shape["@_id"],
            },
            __readonly_keepWaypoints: true,
        });
        if (newBpmnEdge["@_bpmnElement"] !== edge.id) {
            const { deletedBpmnEdge } = deleteEdge({ definitions: state.bpmn.model.definitions, __readonly_edgeId: edge.id });
            const deletedWaypoints = deletedBpmnEdge === null || deletedBpmnEdge === void 0 ? void 0 : deletedBpmnEdge["di:waypoint"];
            if (edge.source !== sourceNode.id && deletedWaypoints) {
                newBpmnEdge["di:waypoint"] = [newBpmnEdge["di:waypoint"][0], ...deletedWaypoints.slice(1)];
            }
            if (edge.target !== targetNode.id && deletedWaypoints) {
                newBpmnEdge["di:waypoint"] = [
                    ...deletedWaypoints.slice(0, deletedWaypoints.length - 1),
                    newBpmnEdge["di:waypoint"][newBpmnEdge["di:waypoint"].length - 1],
                ];
            }
        }
    }, []);
    const onEdgeDeleted = useCallback(({ state, edge }) => {
        console.log("BPMN EDITOR DIAGRAM: onEdgeDeleted");
        deleteEdge({ definitions: state.bpmn.model.definitions, __readonly_edgeId: edge.id });
    }, []);
    const onWaypointAdded = useCallback(({ beforeIndex, edgeIndex, waypoint }) => {
        console.log("BPMN EDITOR DIAGRAM: onWaypointAdded");
        bpmnEditorStoreApi.setState((s) => {
            addEdgeWaypoint({
                definitions: s.bpmn.model.definitions,
                __readonly_edgeIndex: edgeIndex,
                __readonly_beforeIndex: beforeIndex,
                __readonly_waypoint: waypoint,
            });
        });
    }, [bpmnEditorStoreApi]);
    const onWaypointRepositioned = useCallback(({ waypointIndex, edgeIndex, waypoint }) => {
        console.log("BPMN EDITOR DIAGRAM: onWaypointRepositioned");
        bpmnEditorStoreApi.setState((s) => {
            repositionEdgeWaypoint({
                definitions: s.bpmn.model.definitions,
                __readonly_edgeIndex: edgeIndex,
                __readonly_waypoint: waypoint,
                __readonly_waypointIndex: waypointIndex,
            });
        });
    }, [bpmnEditorStoreApi]);
    const onWaypointDeleted = useCallback(({ waypointIndex, edgeIndex }) => {
        console.log("BPMN EDITOR DIAGRAM: onWaypointDeleted");
        bpmnEditorStoreApi.setState((s) => {
            deleteEdgeWaypoint({
                definitions: s.bpmn.model.definitions,
                __readonly_edgeIndex: edgeIndex,
                __readonly_waypointIndex: waypointIndex,
            });
        });
    }, [bpmnEditorStoreApi]);
    const onEscPressed = useCallback(() => {
        bpmnEditorStoreApi.setState((state) => {
            state.propertiesPanel.isOpen = false;
            state.diagram.overlaysPanel.isOpen = false;
            state.diagram.openLhsPanel = BpmnDiagramLhsPanel.NONE;
        });
    }, [bpmnEditorStoreApi]);
    return (_jsxs(_Fragment, { children: [isEmptyStateShowing && _jsx(BpmnDiagramEmptyState, { setShowEmptyState: setShowEmptyState }), _jsxs(DiagramContainerContextProvider, { container: container, children: [_jsx("svg", { style: { position: "absolute", top: 0, left: 0 }, children: _jsx(EdgeMarkers, {}) }), _jsxs(XyFlowReactKieDiagram, { diagramRef: diagramRef, container: container, modelBeforeEditingRef: bpmnModelBeforeEditingRef, model: model, onResetToBeforeEditingBegan: onResetToBeforeEditingBegan, connectionLineComponent: ConnectionLine, nodeComponents: XY_FLOW_NODE_TYPES, edgeComponents: XY_FLOW_EDGE_TYPES, newNodeMimeType: MIME_TYPE_FOR_BPMN_EDITOR_NEW_NODE_FROM_PALETTE, containmentMap: BPMN_CONTAINMENT_MAP, nodeTypes: NODE_TYPES, minNodeSizes: MIN_NODE_SIZES, graphStructure: BPMN_GRAPH_STRUCTURE, onNodeAdded: onNodeAdded, onConnectedNodeAdded: onConnectedNodeAdded, onNodeRepositioned: onNodeRepositioned, onNodeDeleted: onNodeDeleted, onEdgeAdded: onEdgeAdded, onEdgeUpdated: onEdgeUpdated, onEdgeDeleted: onEdgeDeleted, onNodeUnparented: onNodeUnparented, onNodeParented: onNodeParented, onNodeResized: onNodeResized, onEscPressed: onEscPressed, onWaypointAdded: onWaypointAdded, onWaypointRepositioned: onWaypointRepositioned, onWaypointDeleted: onWaypointDeleted, children: [_jsx(BpmnPalette, { pulse: isEmptyStateShowing }), _jsx(TopRightCornerPanels, { availableHeight: (_a = container.current) === null || _a === void 0 ? void 0 : _a.offsetHeight }), _jsx(BpmnDiagramCommands, {})] })] })] }));
}
export function ConnectionLine(props) {
    return (_jsx(ReactFlowDiagramConnectionLine, { ...props, defaultNodeSizes: DEFAULT_NODE_SIZES, graphStructure: BPMN_GRAPH_STRUCTURE, nodeComponentsMapping: CONNECTION_LINE_NODE_COMPONENT_MAPPING, edgeComponentsMapping: CONNECTION_LINE_EDGE_COMPONENTS_MAPPING }));
}
//# sourceMappingURL=BpmnDiagram.js.map