import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function moveNodesInsideSubProcess({ definitions, __readonly_subProcessId, __readonly_nodeIds, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    const flowElementsToMove = [];
    const artifactsToMove = [];
    const nodeIdsToMoveInside = new Set(__readonly_nodeIds);
    for (let i = 0; i < ((_a = process.flowElement) !== null && _a !== void 0 ? _a : []).length; i++) {
        const flowElement = ((_b = process.flowElement) !== null && _b !== void 0 ? _b : [])[i];
        if (nodeIdsToMoveInside.has(flowElement["@_id"]) ||
            (flowElement.__$$element === "boundaryEvent" && nodeIdsToMoveInside.has(flowElement["@_attachedToRef"]))) {
            flowElementsToMove.push(...((_d = (_c = process.flowElement) === null || _c === void 0 ? void 0 : _c.splice(i, 1)) !== null && _d !== void 0 ? _d : []));
            i--;
        }
    }
    for (let i = 0; i < ((_e = process.artifact) !== null && _e !== void 0 ? _e : []).length; i++) {
        const artifact = ((_f = process.artifact) !== null && _f !== void 0 ? _f : [])[i];
        if (nodeIdsToMoveInside.has(artifact["@_id"])) {
            artifactsToMove.push(...((_h = (_g = process.artifact) === null || _g === void 0 ? void 0 : _g.splice(i, 1)) !== null && _h !== void 0 ? _h : []));
            i--;
        }
    }
    const subProcess = (_j = process.flowElement) === null || _j === void 0 ? void 0 : _j.find((s) => s["@_id"] === __readonly_subProcessId);
    if (!((subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "subProcess" ||
        (subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "adHocSubProcess" ||
        (subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "transaction")) {
        throw new Error(`BPMN Element with id ${__readonly_subProcessId} is not a subProcess.`);
    }
    (_k = subProcess.flowElement) !== null && _k !== void 0 ? _k : (subProcess.flowElement = []);
    subProcess.flowElement.push(...flowElementsToMove);
    (_l = subProcess.artifact) !== null && _l !== void 0 ? _l : (subProcess.artifact = []);
    subProcess.artifact.push(...artifactsToMove);
}
//# sourceMappingURL=moveNodesInsideSubProcess.js.map