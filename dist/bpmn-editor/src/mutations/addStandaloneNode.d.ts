import { Normalized } from "../normalization/normalize";
import { BPMN20__tDefinitions } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { BpmnNodeType, elementToNodeType } from "../diagram/BpmnDiagramDomain";
import { DC__Bounds } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/model";
export declare function addStandaloneNode({ definitions, __readonly_element, __readonly_newNode, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_element: keyof typeof elementToNodeType;
    __readonly_newNode: {
        type: BpmnNodeType;
        bounds: DC__Bounds;
    };
}): {
    id: string;
    shapeId: string;
};
//# sourceMappingURL=addStandaloneNode.d.ts.map