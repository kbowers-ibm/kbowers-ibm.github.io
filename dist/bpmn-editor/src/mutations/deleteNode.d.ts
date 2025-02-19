import { BPMN20__tDefinitions, BPMNDI__BPMNShape } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { BpmnDiagramEdgeData, BpmnNodeElement } from "../diagram/BpmnDiagramDomain";
import { Normalized } from "../normalization/normalize";
export declare function deleteNode({ definitions, __readonly_bpmnEdgeData, __readonly_bpmnElementId, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_bpmnEdgeData: BpmnDiagramEdgeData[];
    __readonly_bpmnElementId: string | undefined;
}): {
    deletedBpmnElement: BpmnNodeElement | undefined;
    deletedBpmnShape: Normalized<BPMNDI__BPMNShape> | undefined;
};
//# sourceMappingURL=deleteNode.d.ts.map