import { BPMN20__tDefinitions } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { Normalized } from "../normalization/normalize";
export declare function repositionNode({ definitions, controlWaypointsByEdge, __readonly_change, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    controlWaypointsByEdge: Map<number, Set<number>>;
    __readonly_change: {
        nodeType: BpmnNodeType;
        shapeIndex: number;
        sourceEdgeIndexes: number[];
        targetEdgeIndexes: number[];
        selectedEdges: string[];
    } & ({
        type: "absolute";
        position: {
            x: number;
            y: number;
        };
    } | {
        type: "offset";
        offset: {
            deltaX: number;
            deltaY: number;
        };
    });
}): {
    delta: {
        x: number;
        y: number;
    };
    newPosition: {
        x: number;
        y: number;
    };
};
//# sourceMappingURL=repositionNode.d.ts.map