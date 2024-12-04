export function computeBoundaryEventIdsByAttachedBpmnElementId(definitions) {
    var _a, _b, _c;
    const boundaryEventIdsByAttachedBpmnElementId = new Map();
    for (const boundaryEvent of (_b = (_a = definitions.rootElement) === null || _a === void 0 ? void 0 : _a.filter((s) => s.__$$element === "process")[0].flowElement) !== null && _b !== void 0 ? _b : []) {
        if (boundaryEvent.__$$element !== "boundaryEvent") {
            continue;
        }
        boundaryEventIdsByAttachedBpmnElementId.set(boundaryEvent["@_attachedToRef"], [...((_c = boundaryEventIdsByAttachedBpmnElementId.get(boundaryEvent["@_attachedToRef"])) !== null && _c !== void 0 ? _c : []), boundaryEvent["@_id"]]);
    }
    return boundaryEventIdsByAttachedBpmnElementId;
}
//# sourceMappingURL=computeBoundaryEventIdsByAttachedBpmnElementId.js.map