import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function moveNodesOutOfSubProcess({ definitions, __readonly_subProcessId, __readonly_nodeIds, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    const flowElementsToMove = [];
    const artifactsToMove = [];
    const subProcess = (_a = process.flowElement) === null || _a === void 0 ? void 0 : _a.find((s) => s["@_id"] === __readonly_subProcessId);
    if (!((subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "subProcess" ||
        (subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "adHocSubProcess" ||
        (subProcess === null || subProcess === void 0 ? void 0 : subProcess.__$$element) === "transaction")) {
        throw new Error(`Can't find subProcess with ID ${__readonly_subProcessId}`);
    }
    const nodeIdsToMoveOut = new Set(__readonly_nodeIds);
    for (let i = 0; i < ((_b = subProcess.flowElement) !== null && _b !== void 0 ? _b : []).length; i++) {
        const flowElement = ((_c = subProcess.flowElement) !== null && _c !== void 0 ? _c : [])[i];
        if (nodeIdsToMoveOut.has(flowElement["@_id"]) ||
            (flowElement.__$$element === "boundaryEvent" && nodeIdsToMoveOut.has(flowElement["@_attachedToRef"]))) {
            flowElementsToMove.push(...((_e = (_d = subProcess.flowElement) === null || _d === void 0 ? void 0 : _d.splice(i, 1)) !== null && _e !== void 0 ? _e : []));
            i--;
        }
    }
    for (let i = 0; i < ((_f = subProcess.artifact) !== null && _f !== void 0 ? _f : []).length; i++) {
        const artifact = ((_g = subProcess.artifact) !== null && _g !== void 0 ? _g : [])[i];
        if (nodeIdsToMoveOut.has(artifact["@_id"])) {
            artifactsToMove.push(...((_j = (_h = subProcess.artifact) === null || _h === void 0 ? void 0 : _h.splice(i, 1)) !== null && _j !== void 0 ? _j : []));
            i--;
        }
    }
    (_k = process.flowElement) !== null && _k !== void 0 ? _k : (process.flowElement = []);
    process.flowElement.push(...flowElementsToMove);
    (_l = process.artifact) !== null && _l !== void 0 ? _l : (process.artifact = []);
    process.artifact.push(...artifactsToMove);
}
//# sourceMappingURL=moveNodesOutOfSubProcess.js.map