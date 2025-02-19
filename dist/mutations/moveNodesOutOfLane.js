import { addOrGetLanes } from "./addOrGetLanes";
export function moveNodesOutOfLane({ definitions, __readonly_laneId, __readonly_nodeIds, }) {
    var _a;
    const { lanes } = addOrGetLanes({ definitions });
    const nodeIdSet = new Set(__readonly_nodeIds);
    const lane = lanes.find((s) => s["@_id"] === __readonly_laneId);
    if (!lane) {
        throw new Error(`Could not find Lane with ID ${__readonly_laneId}.`);
    }
    lane.flowNodeRef = (_a = lane.flowNodeRef) === null || _a === void 0 ? void 0 : _a.filter((flowNodeRef) => !nodeIdSet.has(flowNodeRef.__$$text));
}
//# sourceMappingURL=moveNodesOutOfLane.js.map