import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { elements as bpmn20elements, meta as bpmn20meta, } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/meta";
import { XmlParserTsIdRandomizer } from "@kie-tools/xml-parser-ts/dist/idRandomizer";
export function getNewBpmnIdRandomizer() {
    return new XmlParserTsIdRandomizer({
        meta: bpmn20meta,
        elements: bpmn20elements,
        newIdGenerator: generateUuid,
    });
}
//# sourceMappingURL=bpmnIdRandomizer.js.map