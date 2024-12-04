import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { BPMN_GRAPH_STRUCTURE, EDGE_TYPES, } from "../diagram/BpmnDiagramDomain";
import { _checkIsValidConnection } from "@kie-tools/xyflow-react-kie-diagram/dist/graph/isValidConnection";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
import { getDiscreteAutoPositioningEdgeIdMarker, getPointForHandle, } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
export function addEdge({ definitions, __readonly_sourceNode, __readonly_targetNode, __readonly_edge, __readonly_keepWaypoints, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!_checkIsValidConnection(BPMN_GRAPH_STRUCTURE, __readonly_sourceNode, __readonly_targetNode, __readonly_edge.type)) {
        throw new Error(`BPMN MUTATION: Invalid structure: (${__readonly_sourceNode.type}) --${__readonly_edge.type}--> (${__readonly_targetNode.type}) `);
    }
    const newEdgeId = generateUuid();
    const { process, diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    let existingEdgeId = undefined;
    if (__readonly_edge.type === EDGE_TYPES.association) {
        (_a = process.artifact) !== null && _a !== void 0 ? _a : (process.artifact = []);
        const newAssociation = {
            "@_id": newEdgeId,
            "@_associationDirection": "Both",
            "@_sourceRef": __readonly_sourceNode.href,
            "@_targetRef": __readonly_targetNode.href,
        };
        const removed = removeFirstMatchIfPresent(process.artifact, (a) => a.__$$element === "association" && areEdgesEquivalent(a, newAssociation));
        existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
        (_b = process.artifact) === null || _b === void 0 ? void 0 : _b.push({
            __$$element: "association",
            ...newAssociation,
            "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId),
        });
    }
    else {
        (_c = process.flowElement) !== null && _c !== void 0 ? _c : (process.flowElement = []);
        const newSequenceFlow = {
            "@_id": newEdgeId,
            "@_sourceRef": __readonly_sourceNode.href,
            "@_targetRef": __readonly_targetNode.href,
        };
        const removed = removeFirstMatchIfPresent(process.flowElement, (a) => a.__$$element === "sequenceFlow" && areEdgesEquivalent(a, newSequenceFlow));
        existingEdgeId = removed === null || removed === void 0 ? void 0 : removed["@_id"];
        (_d = process.flowElement) === null || _d === void 0 ? void 0 : _d.push({
            __$$element: "sequenceFlow",
            ...newSequenceFlow,
            "@_id": tryKeepingEdgeId(existingEdgeId, newEdgeId),
        });
    }
    const removedBpmnEdge = removeFirstMatchIfPresent(diagramElements, (e) => e.__$$element === "bpmndi:BPMNEdge" && e["@_bpmnElement"] === existingEdgeId);
    const newWaypoints = __readonly_keepWaypoints
        ? [
            getPointForHandle({ bounds: __readonly_sourceNode.bounds, handle: __readonly_edge.sourceHandle }),
            ...((_e = removedBpmnEdge === null || removedBpmnEdge === void 0 ? void 0 : removedBpmnEdge["di:waypoint"]) !== null && _e !== void 0 ? _e : []).slice(1, -1),
            getPointForHandle({ bounds: __readonly_targetNode.bounds, handle: __readonly_edge.targetHandle }),
        ]
        : [
            getPointForHandle({ bounds: __readonly_sourceNode.bounds, handle: __readonly_edge.sourceHandle }),
            getPointForHandle({ bounds: __readonly_targetNode.bounds, handle: __readonly_edge.targetHandle }),
        ];
    const newBpmnEdge = {
        __$$element: "bpmndi:BPMNEdge",
        "@_id": withoutDiscreteAutoPosinitioningMarker((_f = removedBpmnEdge === null || removedBpmnEdge === void 0 ? void 0 : removedBpmnEdge["@_id"]) !== null && _f !== void 0 ? _f : generateUuid()) +
            ((_g = __readonly_edge.autoPositionedEdgeMarker) !== null && _g !== void 0 ? _g : ""),
        "@_bpmnElement": existingEdgeId !== null && existingEdgeId !== void 0 ? existingEdgeId : newEdgeId,
        "@_sourceElement": __readonly_sourceNode.shapeId,
        "@_targetElement": __readonly_targetNode.shapeId,
        "di:waypoint": newWaypoints,
    };
    diagramElements.push(newBpmnEdge);
    return { newBpmnEdge };
}
function areEdgesEquivalent(a, b) {
    return ((a["@_sourceRef"] === b["@_sourceRef"] && a["@_targetRef"] === b["@_targetRef"]) ||
        (a["@_sourceRef"] === b["@_targetRef"] && a["@_targetRef"] === b["@_sourceRef"]));
}
function removeFirstMatchIfPresent(arr, predicate) {
    var _a;
    const index = arr.findIndex(predicate);
    const removed = (_a = arr[index]) !== null && _a !== void 0 ? _a : undefined;
    arr.splice(index, index >= 0 ? 1 : 0);
    return removed;
}
function tryKeepingEdgeId(existingEdgeId, newEdgeId) {
    return existingEdgeId !== null && existingEdgeId !== void 0 ? existingEdgeId : newEdgeId;
}
function withoutDiscreteAutoPosinitioningMarker(edgeId) {
    const marker = getDiscreteAutoPositioningEdgeIdMarker(edgeId);
    return marker ? edgeId.replace(`${marker}`, "") : edgeId;
}
//# sourceMappingURL=addEdge.js.map