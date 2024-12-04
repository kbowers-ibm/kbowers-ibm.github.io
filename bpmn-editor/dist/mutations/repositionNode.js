import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function repositionNode({ definitions, controlWaypointsByEdge, __readonly_change, }) {
    var _a, _b;
    const { diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    const shape = diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements[__readonly_change.shapeIndex];
    const shapeBounds = shape === null || shape === void 0 ? void 0 : shape["dc:Bounds"];
    if (!shapeBounds) {
        throw new Error("BPMN MUTATION: Cannot reposition non-existent shape bounds");
    }
    let deltaX;
    let deltaY;
    if (__readonly_change.type === "absolute") {
        deltaX = __readonly_change.position.x - ((_a = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_x"]) !== null && _a !== void 0 ? _a : 0);
        deltaY = __readonly_change.position.y - ((_b = shapeBounds === null || shapeBounds === void 0 ? void 0 : shapeBounds["@_y"]) !== null && _b !== void 0 ? _b : 0);
        shapeBounds["@_x"] = __readonly_change.position.x;
        shapeBounds["@_y"] = __readonly_change.position.y;
    }
    else if (__readonly_change.type === "offset") {
        deltaX = __readonly_change.offset.deltaX;
        deltaY = __readonly_change.offset.deltaY;
        shapeBounds["@_x"] += __readonly_change.offset.deltaX;
        shapeBounds["@_y"] += __readonly_change.offset.deltaY;
    }
    else {
        throw new Error(`BPMN MUTATION: Unknown type of node position change '${__readonly_change.type}'.`);
    }
    const offsetEdges = (args) => {
        var _a;
        for (const edgeIndex of args.edgeIndexes) {
            const edge = diagramElements[edgeIndex];
            if (!edge || !edge["di:waypoint"]) {
                throw new Error("BPMN MUTATION: Cannot reposition non-existent edge");
            }
            const isEdgeSelected = __readonly_change.selectedEdges.indexOf(edge["@_bpmnElement"]) >= 0;
            const waypointIndexes = switchExpression(args.waypoint, {
                first: isEdgeSelected
                    ? arrayRange(0, edge["di:waypoint"].length - 2)
                    : [0],
                last: isEdgeSelected
                    ? arrayRange(1, edge["di:waypoint"].length - 1)
                    : [edge["di:waypoint"].length - 1],
            });
            controlWaypointsByEdge.set(edgeIndex, (_a = controlWaypointsByEdge.get(edgeIndex)) !== null && _a !== void 0 ? _a : new Set());
            for (const wi of waypointIndexes) {
                const waypointsControl = controlWaypointsByEdge.get(edgeIndex);
                if (waypointsControl.has(wi)) {
                    continue;
                }
                else {
                    waypointsControl.add(wi);
                }
                const w = edge["di:waypoint"][wi];
                w["@_x"] += deltaX;
                w["@_y"] += deltaY;
            }
        }
    };
    offsetEdges({ edgeIndexes: __readonly_change.sourceEdgeIndexes, waypoint: "first" });
    offsetEdges({ edgeIndexes: __readonly_change.targetEdgeIndexes, waypoint: "last" });
    return {
        delta: {
            x: deltaX,
            y: deltaY,
        },
        newPosition: {
            x: shapeBounds["@_x"],
            y: shapeBounds["@_y"],
        },
    };
}
function arrayRange(start, stop, step = 1) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);
}
//# sourceMappingURL=repositionNode.js.map