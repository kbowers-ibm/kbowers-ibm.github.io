import { computeIsDiagramEditingInProgress } from "@kie-tools/xyflow-react-kie-diagram/dist/store/computed/computeIsDiagramEditingInProgress";
import { computeBoundaryEventIdsByAttachedBpmnElementId } from "./computeBoundaryEventIdsByAttachedBpmnElementId";
import { setNodeStatus } from "@kie-tools/xyflow-react-kie-diagram/dist/store/dispatch/setNodeStatus";
import { setEdgeStatus } from "@kie-tools/xyflow-react-kie-diagram/dist/store/dispatch/setEdgeStatus";
import { enableMapSet } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { normalize } from "../normalization/normalize";
import { computeDiagramData } from "./computeDiagramData";
enableMapSet();
export var BpmnDiagramLhsPanel;
(function (BpmnDiagramLhsPanel) {
    BpmnDiagramLhsPanel["NONE"] = "NONE";
})(BpmnDiagramLhsPanel || (BpmnDiagramLhsPanel = {}));
export const getDefaultStaticState = () => ({
    focus: {
        consumableId: undefined,
    },
    settings: {
        isReadOnly: false,
    },
    propertiesPanel: {
        isOpen: true,
    },
    diagram: {
        overlaysPanel: {
            isOpen: false,
        },
        openLhsPanel: BpmnDiagramLhsPanel.NONE,
        overlays: {
            enableNodeHierarchyHighlight: false,
            enableCustomNodeStyles: true,
        },
        isEditingStyle: false,
    },
    xyFlowReactKieDiagram: {
        snapGrid: { isEnabled: false, x: 20, y: 20 },
        _selectedNodes: [],
        _selectedEdges: [],
        draggingNodes: [],
        resizingNodes: [],
        draggingWaypoints: [],
        edgeIdBeingUpdated: undefined,
        dropTarget: undefined,
        ongoingConnection: undefined,
    },
});
export function createBpmnEditorStore(model, computedCache) {
    const { diagram, ...defaultStaticState } = getDefaultStaticState();
    return create(immer(() => ({
        ...defaultStaticState,
        bpmn: { model: normalize(model) },
        diagram,
        dispatch: (s) => ({
            reset: (model) => {
                s.bpmn.model = model;
                s.xyFlowReactKieDiagram._selectedNodes = [];
                s.xyFlowReactKieDiagram.draggingNodes = [];
                s.xyFlowReactKieDiagram.resizingNodes = [];
            },
            setNodeStatus: (nodeId, newStatus) => setNodeStatus(nodeId, newStatus, s),
            setEdgeStatus: (edgeId, newStatus) => setEdgeStatus(edgeId, newStatus, s),
        }),
        computed: (s) => ({
            isDiagramEditingInProgress: () => computedCache.cached("isDiagramEditingInProgress", (draggingNodesCount, resizingNodesCount, draggingWaypointsCount, isisEditingStyle) => computeIsDiagramEditingInProgress(draggingNodesCount, resizingNodesCount, draggingWaypointsCount) ||
                isisEditingStyle, [
                s.xyFlowReactKieDiagram.draggingNodes.length,
                s.xyFlowReactKieDiagram.resizingNodes.length,
                s.xyFlowReactKieDiagram.draggingWaypoints.length,
                s.diagram.isEditingStyle,
            ]),
            getDiagramData: () => computedCache.cached("getDiagramData", computeDiagramData, [
                s.bpmn.model.definitions,
                s.xyFlowReactKieDiagram,
                s.xyFlowReactKieDiagram.snapGrid,
                s.xyFlowReactKieDiagram.dropTarget,
            ]),
            getBoundaryEventIdsByAttachedBpmnElementId: () => computedCache.cached("getBoundaryEventIdsByAttachedBpmnElementId", computeBoundaryEventIdsByAttachedBpmnElementId, [s.bpmn.model.definitions]),
        }),
    })));
}
//# sourceMappingURL=Store.js.map