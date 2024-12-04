import { BPMN20__tDefinitions, BPMN20__tLane, BPMN20__tProcess, BPMN20__tTextAnnotation } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../normalization/normalize";
export declare function updateFlowElement({ definitions, newFlowElement, id, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    newFlowElement: Partial<Normalized<Unpacked<NonNullable<BPMN20__tProcess["flowElement"] | BPMN20__tProcess["artifact"]>>>>;
    id: string;
}): void;
export declare function updateLane({ definitions, newLane, id, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    newLane: Partial<Normalized<BPMN20__tLane>>;
    id: string;
}): void;
export declare function updateTextAnnotation({ definitions, newTextAnnotation, id, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    newTextAnnotation: Partial<Normalized<BPMN20__tTextAnnotation>>;
    id: string;
}): void;
//# sourceMappingURL=renameNode.d.ts.map