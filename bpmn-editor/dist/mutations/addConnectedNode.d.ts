import { BPMN20__tDefinitions } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { DC__Bounds } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/model";
import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { Normalized } from "../normalization/normalize";
export declare function addConnectedNode({ definitions, __readonly_sourceNode, __readonly_newNode, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_sourceNode: {
        type: BpmnNodeType;
        id: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
    };
    __readonly_newNode: {
        type: BpmnNodeType;
        bounds: DC__Bounds;
    };
}): {
    id: string;
    href: string;
};
//# sourceMappingURL=addConnectedNode.d.ts.map