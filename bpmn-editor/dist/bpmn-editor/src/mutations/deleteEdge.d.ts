import { Normalized } from "../normalization/normalize";
import { BpmnDiagramEdgeData } from "../diagram/BpmnDiagramDomain";
import { BPMN20__tDefinitions, BPMNDI__BPMNEdge } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
export declare function deleteEdge({ definitions, __readonly_edgeId, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_edgeId: string;
}): {
    deletedBpmnEdge: BPMNDI__BPMNEdge | undefined;
    deletedBpmnElement: BpmnDiagramEdgeData["bpmnElement"] | undefined;
};
//# sourceMappingURL=deleteEdge.d.ts.map