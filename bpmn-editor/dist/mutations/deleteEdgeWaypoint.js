import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function deleteEdgeWaypoint({ definitions, __readonly_edgeIndex, __readonly_waypointIndex, }) {
    var _a, _b;
    const { diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    const diagramElement = diagramElements[__readonly_edgeIndex];
    if (diagramElement.__$$element !== "bpmndi:BPMNEdge") {
        throw new Error("BPMN MUTATION: Can't remove a waypoint from an element that is not a BPMNEdge.");
    }
    if (__readonly_waypointIndex > ((_b = (_a = diagramElement["di:waypoint"]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1) {
        throw new Error(`BPMN MUTATION: Can't remove waypoint with index '${__readonly_waypointIndex}' from BPMNEdge '${diagramElement["@_id"]}' because it doesn't exist.`);
    }
    diagramElement["di:waypoint"].splice(__readonly_waypointIndex, 1);
}
//# sourceMappingURL=deleteEdgeWaypoint.js.map