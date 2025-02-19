import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function addEdgeWaypoint({ definitions, __readonly_edgeIndex, __readonly_beforeIndex, __readonly_waypoint, }) {
    var _a, _b;
    const { diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    const diagramElement = diagramElements[__readonly_edgeIndex];
    if (diagramElement.__$$element !== "bpmndi:BPMNEdge") {
        throw new Error("DMN MUTATION: Can't remove a waypoint from an element that is not a DMNEdge.");
    }
    if (__readonly_beforeIndex > ((_b = (_a = diagramElement["di:waypoint"]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) - 1) {
        throw new Error(`DMN MUTATION: Can't add waypoint before index '${__readonly_beforeIndex}' to DMNEdge '${diagramElement["@_id"]}' because the waypoint array is smaller than 'beforeIndex' requires.`);
    }
    diagramElement["di:waypoint"].splice(__readonly_beforeIndex, 0, __readonly_waypoint);
}
//# sourceMappingURL=addEdgeWaypoint.js.map