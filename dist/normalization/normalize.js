import { getNewBpmnIdRandomizer } from "../idRandomizer/bpmnIdRandomizer";
export function normalize(model) {
    getNewBpmnIdRandomizer()
        .ack({
        json: model.definitions.import,
        type: "BPMN20__tDefinitions",
        attr: "import",
    })
        .ack({
        json: model.definitions["bpmndi:BPMNDiagram"],
        type: "BPMN20__tDefinitions",
        attr: "bpmndi:BPMNDiagram",
    })
        .randomize({ skipAlreadyAttributedIds: true });
    const normalizedModel = model;
    return normalizedModel;
}
//# sourceMappingURL=normalize.js.map