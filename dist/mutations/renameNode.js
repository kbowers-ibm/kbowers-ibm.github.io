import { visitFlowElementsAndArtifacts } from "./_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function updateFlowElement({ definitions, newFlowElement, id, }) {
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    visitFlowElementsAndArtifacts(process, ({ array, index, owner, element }) => {
        if (element["@_id"] === id) {
            if (array != owner.flowElement) {
                throw new Error(`BPMN MUTATION: Element with id ${id} is not a flowElement, but rather a ${element.__$$element}`);
            }
            array[index] = { ...element, ...newFlowElement };
            return false;
        }
    });
}
export function updateLane({ definitions, newLane, id, }) {
    var _a, _b, _c, _d;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    for (let i = 0; i < ((_a = process.laneSet) !== null && _a !== void 0 ? _a : []).length; i++) {
        const laneSet = process.laneSet[i];
        for (let j = 0; j < ((_b = laneSet.lane) !== null && _b !== void 0 ? _b : []).length; j++) {
            const lane = laneSet.lane[j];
            if (lane["@_id"] === id) {
                laneSet.lane[j] = { ...lane, ...newLane };
                break;
            }
            for (let k = 0; k < ((_d = (_c = lane.childLaneSet) === null || _c === void 0 ? void 0 : _c.lane) !== null && _d !== void 0 ? _d : []).length; k++) {
                const childLane = lane.childLaneSet.lane[k];
                if (childLane["@_id"] === id) {
                    lane.childLaneSet.lane[k] = { ...childLane, ...newLane };
                    break;
                }
            }
        }
    }
}
export function updateTextAnnotation({ definitions, newTextAnnotation, id, }) {
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    visitFlowElementsAndArtifacts(process, ({ element, array, index }) => {
        if (element["@_id"] === id) {
            if (element.__$$element !== "textAnnotation") {
                throw new Error(`BPMN MUTATION: Element with id ${id} is not a textAnnotation, but rather a ${element.__$$element}`);
            }
            array[index] = { ...array[index], ...newTextAnnotation };
            return false;
        }
    });
}
export function updateItemDefinition({ definitions, newItemDefinition, id, }) {
    if (!definitions.rootElement)
        return;
    for (let i = 0; i < definitions.rootElement.length; i++) {
        const element = definitions.rootElement[i];
        if (element.__$$element === "itemDefinition" && element["@_id"] === id) {
            definitions.rootElement[i] = { ...element, ...newItemDefinition };
            return;
        }
    }
    throw new Error(`ItemDefinition with id ${id} not found`);
}
//# sourceMappingURL=renameNode.js.map