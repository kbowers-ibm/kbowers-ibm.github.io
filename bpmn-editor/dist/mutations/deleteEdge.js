import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "./_elementVisitor";
export function deleteEdge({ definitions, __readonly_edgeId, }) {
    const { process, diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    let foundBpmnElement;
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        if ((element.__$$element === "sequenceFlow" || element.__$$element === "association") &&
            element["@_id"] === __readonly_edgeId) {
            foundBpmnElement = { element, ...args };
        }
    });
    if (!foundBpmnElement) {
        throw new Error(`BPMN MUTATION: Can't find BPMN Element with ID '${__readonly_edgeId}'`);
    }
    foundBpmnElement.array.splice(foundBpmnElement.index, 1);
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        var _a, _b, _c, _d, _e;
        if (element.__$$element !== "association" &&
            element.__$$element !== "group" &&
            element.__$$element !== "textAnnotation" &&
            element.__$$element !== "sequenceFlow" &&
            element.__$$element !== "dataStoreReference" &&
            element.__$$element !== "dataObject" &&
            element.__$$element !== "dataObjectReference") {
            if (element["@_id"] === ((_a = foundBpmnElement === null || foundBpmnElement === void 0 ? void 0 : foundBpmnElement.element) === null || _a === void 0 ? void 0 : _a["@_sourceRef"])) {
                element.outgoing = (_b = element.outgoing) === null || _b === void 0 ? void 0 : _b.filter((s) => { var _a; return s.__$$text !== ((_a = foundBpmnElement === null || foundBpmnElement === void 0 ? void 0 : foundBpmnElement.element) === null || _a === void 0 ? void 0 : _a["@_targetRef"]); });
            }
            else if (element["@_id"] === ((_c = foundBpmnElement === null || foundBpmnElement === void 0 ? void 0 : foundBpmnElement.element) === null || _c === void 0 ? void 0 : _c["@_targetRef"])) {
                element.incoming = (_d = element.incoming) === null || _d === void 0 ? void 0 : _d.filter((s) => { var _a; return s.__$$text !== ((_a = foundBpmnElement === null || foundBpmnElement === void 0 ? void 0 : foundBpmnElement.element) === null || _a === void 0 ? void 0 : _a["@_sourceRef"]); });
            }
            else {
            }
            element.outgoing = (_e = element.outgoing) === null || _e === void 0 ? void 0 : _e.filter((s) => s.__$$text !== (deletedBpmnEdge === null || deletedBpmnEdge === void 0 ? void 0 : deletedBpmnEdge["@_sourceElement"]));
        }
    });
    const bpmnEdgeIndex = (diagramElements !== null && diagramElements !== void 0 ? diagramElements : []).findIndex((e) => e["@_bpmnElement"] === __readonly_edgeId);
    if (bpmnEdgeIndex < 0) {
        throw new Error(`BPMN MUTATION: Can't find BPMNEdge with referencing a BPMN element with ID ${__readonly_edgeId}`);
    }
    const deletedBpmnEdge = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.splice(bpmnEdgeIndex, 1)[0];
    return {
        deletedBpmnEdge,
        deletedBpmnElement: foundBpmnElement.element,
    };
}
//# sourceMappingURL=deleteEdge.js.map