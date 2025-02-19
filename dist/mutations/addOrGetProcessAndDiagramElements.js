import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
export function addOrGetProcessAndDiagramElements({ definitions }) {
    var _a, _b, _c, _d, _e;
    (_a = definitions.rootElement) !== null && _a !== void 0 ? _a : (definitions.rootElement = []);
    let process = (_b = definitions.rootElement) === null || _b === void 0 ? void 0 : _b.filter((s) => s.__$$element === "process")[0];
    if (!process) {
        process = {
            __$$element: "process",
            "@_id": generateUuid(),
        };
        (_c = definitions.rootElement) === null || _c === void 0 ? void 0 : _c.push(process);
    }
    let diagramElements;
    const diagram = ((_d = definitions["bpmndi:BPMNDiagram"]) !== null && _d !== void 0 ? _d : (definitions["bpmndi:BPMNDiagram"] = []));
    if (diagram.length !== 0) {
        diagramElements = (_e = diagram[0]["bpmndi:BPMNPlane"]["di:DiagramElement"]) !== null && _e !== void 0 ? _e : [];
    }
    else {
        diagram.push({
            "@_id": generateUuid(),
            "bpmndi:BPMNPlane": {
                "@_id": generateUuid(),
                "di:DiagramElement": (diagramElements = []),
            },
        });
    }
    return { process, diagramElements };
}
//# sourceMappingURL=addOrGetProcessAndDiagramElements.js.map