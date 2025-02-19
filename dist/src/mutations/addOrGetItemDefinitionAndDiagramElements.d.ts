import { BPMN20__tDefinitions, BPMNDI__BPMNPlane } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../normalization/normalize";
export declare function addOrGetitemDefinitionAndDiagramElements({ definitions, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
}): {
    itemDefinition: ElementFilter<Unpacked<Normalized<BPMN20__tDefinitions["rootElement"]>>, "itemDefinition">;
    diagramElements: NonNullable<Normalized<BPMNDI__BPMNPlane["di:DiagramElement"]>>;
};
//# sourceMappingURL=addOrGetItemDefinitionAndDiagramElements.d.ts.map