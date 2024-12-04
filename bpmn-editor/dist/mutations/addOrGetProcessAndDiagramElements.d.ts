import { BPMN20__tDefinitions, BPMNDI__BPMNPlane } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../normalization/normalize";
export declare function addOrGetProcessAndDiagramElements({ definitions }: {
    definitions: Normalized<BPMN20__tDefinitions>;
}): {
    process: ElementFilter<Unpacked<Normalized<BPMN20__tDefinitions["rootElement"]>>, "process">;
    diagramElements: NonNullable<Normalized<BPMNDI__BPMNPlane["di:DiagramElement"]>>;
};
//# sourceMappingURL=addOrGetProcessAndDiagramElements.d.ts.map