export function visitFlowElementsAndArtifacts(process, visitor) {
    var _a, _b;
    for (let i = 0; i < ((_a = process.flowElement) !== null && _a !== void 0 ? _a : []).length; i++) {
        const f = process.flowElement[i];
        const ret = visitor({ element: f, index: i, owner: process, array: process.flowElement });
        if (ret === false) {
            break;
        }
        if (f.__$$element === "subProcess" || f.__$$element === "adHocSubProcess" || f.__$$element === "transaction") {
            visitFlowElementsAndArtifacts(f, visitor);
        }
    }
    for (let i = 0; i < ((_b = process.artifact) !== null && _b !== void 0 ? _b : []).length; i++) {
        visitor({ element: process.artifact[i], index: i, owner: process, array: process.artifact });
    }
}
export function visitLanes(process, visitor) {
    var _a, _b;
    for (let i = 0; i < ((_a = process.laneSet) !== null && _a !== void 0 ? _a : []).length; i++) {
        const f = process.laneSet[i];
        for (let j = 0; j < ((_b = f.lane) !== null && _b !== void 0 ? _b : []).length; j++) {
            const ret = visitor({ lane: f.lane[j], index: i, owner: f, array: f.lane });
            if (ret === false) {
                break;
            }
        }
    }
}
//# sourceMappingURL=_elementVisitor.js.map