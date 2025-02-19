import { addOrGetLanes } from "./addOrGetLanes";
export function moveNodesInsideLane({ definitions, __readonly_laneId, __readonly_nodeIds, }) {
    var _a, _b;
    const { lanes } = addOrGetLanes({ definitions });
    const targetLane = lanes.find((s) => s["@_id"] === __readonly_laneId);
    if (!targetLane) {
        throw new Error(`Could not find Lane with ID ${__readonly_laneId}.`);
    }
    const existingFlowNodeRefs = new Set((_a = targetLane.flowNodeRef) === null || _a === void 0 ? void 0 : _a.map((s) => s.__$$text));
    (_b = targetLane.flowNodeRef) !== null && _b !== void 0 ? _b : (targetLane.flowNodeRef = []);
    targetLane.flowNodeRef.push(...__readonly_nodeIds.filter((s) => !existingFlowNodeRefs.has(s)).map((nodeId) => ({ __$$text: nodeId })));
}
//# sourceMappingURL=moveNodesInsideLane.js.map