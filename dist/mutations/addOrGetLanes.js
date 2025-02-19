import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function addOrGetLanes({ definitions }) {
    var _a, _b;
    var _c;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    (_a = process.laneSet) !== null && _a !== void 0 ? _a : (process.laneSet = [{ "@_id": generateUuid() }]);
    (_b = (_c = process.laneSet[0]).lane) !== null && _b !== void 0 ? _b : (_c.lane = []);
    return { lanes: process.laneSet[0].lane };
}
//# sourceMappingURL=addOrGetLanes.js.map