import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
import { deleteEdge } from "./deleteEdge";
import { visitFlowElementsAndArtifacts } from "./_elementVisitor";
export function deleteNode({ definitions, __readonly_bpmnEdgeData, __readonly_bpmnElementId, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const { process, diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    const nodeId = __readonly_bpmnElementId;
    for (let i = 0; i < __readonly_bpmnEdgeData.length; i++) {
        const drgEdge = __readonly_bpmnEdgeData[i];
        if (((_a = drgEdge.bpmnEdge) === null || _a === void 0 ? void 0 : _a["@_sourceElement"]) === nodeId || ((_b = drgEdge.bpmnEdge) === null || _b === void 0 ? void 0 : _b["@_targetElement"]) === nodeId) {
            deleteEdge({ definitions, __readonly_edgeId: drgEdge["@_id"] });
        }
    }
    let laneIndex;
    let foundElement;
    let deletedBpmnElement = undefined;
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        if (element["@_id"] === __readonly_bpmnElementId &&
            element.__$$element !== "sequenceFlow" &&
            element.__$$element !== "association") {
            foundElement = { element, ...args };
        }
    });
    if (foundElement) {
        deletedBpmnElement = (_c = foundElement.array.splice(foundElement.index, 1)) === null || _c === void 0 ? void 0 : _c[0];
    }
    else if ((laneIndex = ((_e = (_d = process.laneSet) === null || _d === void 0 ? void 0 : _d[0].lane) !== null && _e !== void 0 ? _e : []).findIndex((d) => d["@_id"] === __readonly_bpmnElementId)) >= 0) {
        const deletedLane = (_j = (_h = ((_g = (_f = process.laneSet) === null || _f === void 0 ? void 0 : _f[0].lane) !== null && _g !== void 0 ? _g : [])) === null || _h === void 0 ? void 0 : _h.splice(laneIndex, 1)) === null || _j === void 0 ? void 0 : _j[0];
        deletedBpmnElement = deletedLane ? { ...deletedLane, __$$element: "lane" } : undefined;
    }
    else {
        throw new Error(`BPMN MUTATION: Cannot find any BPMN Element with ID '${__readonly_bpmnElementId}'.`);
    }
    let deletedBpmnShape;
    const bpmnShapeIndex = (diagramElements !== null && diagramElements !== void 0 ? diagramElements : []).findIndex((d) => d["@_bpmnElement"] === __readonly_bpmnElementId);
    if (bpmnShapeIndex >= 0) {
        deletedBpmnShape = diagramElements[bpmnShapeIndex];
        diagramElements.splice(bpmnShapeIndex, 1);
    }
    return {
        deletedBpmnElement,
        deletedBpmnShape,
    };
}
//# sourceMappingURL=deleteNode.js.map