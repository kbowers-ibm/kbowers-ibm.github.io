import { BPMN20__tDefinitions } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { DC__Dimension } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/model";
import { SnapGrid } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { Normalized } from "../normalization/normalize";
export declare function resizeNode({ definitions, __readonly_snapGrid, __readonly_change, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_snapGrid: SnapGrid;
    __readonly_change: {
        nodeType: BpmnNodeType;
        shapeIndex: number;
        dimension: DC__Dimension;
        sourceEdgeIndexes: number[];
        targetEdgeIndexes: number[];
    };
}): void;
//# sourceMappingURL=resizeNode.d.ts.map