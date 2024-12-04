import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { getHandlePosition } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { PositionalNodeHandleId } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/PositionalNodeHandles";
import { snapShapePosition } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function resizeNode({ definitions, __readonly_snapGrid, __readonly_change, }) {
    const edgeIndexesAlreadyUpdated = new Set();
    const { diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    const shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[__readonly_change.shapeIndex];
    const shapeBounds = shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"];
    if (!shapeBounds) {
        throw new Error("BPMN MUTATION: Cannot resize non-existent shape bounds");
    }
    const limit = { x: 0, y: 0 };
    const snappedPosition = snapShapePosition(__readonly_snapGrid, shape);
    const newDimensions = {
        width: Math.max(__readonly_change.dimension["@_width"], limit.x - snappedPosition.x),
        height: Math.max(__readonly_change.dimension["@_height"], limit.y - snappedPosition.y),
    };
    const deltaWidth = newDimensions.width - shapeBounds["@_width"];
    const deltaHeight = newDimensions.height - shapeBounds["@_height"];
    const offsetByPosition = (position) => {
        return switchExpression(position, {
            [PositionalNodeHandleId.Center]: { x: deltaWidth / 2, y: deltaHeight / 2 },
            [PositionalNodeHandleId.Top]: { x: deltaWidth / 2, y: 0 },
            [PositionalNodeHandleId.Right]: { x: deltaWidth, y: deltaHeight / 2 },
            [PositionalNodeHandleId.Bottom]: { x: deltaWidth / 2, y: deltaHeight },
            [PositionalNodeHandleId.Left]: { x: 0, y: deltaHeight / 2 },
        });
    };
    const offsetEdges = (args) => {
        for (const edgeIndex of args.edgeIndexes) {
            if (edgeIndexesAlreadyUpdated.has(edgeIndex)) {
                continue;
            }
            edgeIndexesAlreadyUpdated.add(edgeIndex);
            const edge = diagramElements[edgeIndex];
            if (!edge || !edge["di:waypoint"]) {
                throw new Error("BPMN MUTATION: Cannot reposition non-existent edge");
            }
            const waypoint = switchExpression(args.waypointSelector, {
                first: edge["di:waypoint"][0],
                last: edge["di:waypoint"][edge["di:waypoint"].length - 1],
            });
            const offset = offsetByPosition(getHandlePosition({ shapeBounds, waypoint }).handlePosition);
            waypoint["@_x"] += offset.x;
            waypoint["@_y"] += offset.y;
        }
    };
    offsetEdges({ edgeIndexes: __readonly_change.sourceEdgeIndexes, waypointSelector: "first" });
    offsetEdges({ edgeIndexes: __readonly_change.targetEdgeIndexes, waypointSelector: "last" });
    shapeBounds["@_width"] = newDimensions.width;
    shapeBounds["@_height"] = newDimensions.height;
}
//# sourceMappingURL=resizeNode.js.map