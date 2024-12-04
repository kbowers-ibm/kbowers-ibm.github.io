import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { AutoPositionedEdgeMarker } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/AutoPositionedEdgeMarker";
import { getDiBoundsCenterPoint } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { NODE_TYPES } from "../diagram/BpmnDiagramDomain";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
import { NodeNature, nodeNatures } from "./_NodeNature";
export function addConnectedNode({ definitions, __readonly_sourceNode, __readonly_newNode, }) {
    var _a, _b, _c;
    const newBpmnElementId = generateUuid();
    const newEdgeId = generateUuid();
    const nature = nodeNatures[__readonly_newNode.type];
    const { process, diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    if (nature === NodeNature.PROCESS_FLOW_ELEMENT) {
        (_a = process.flowElement) !== null && _a !== void 0 ? _a : (process.flowElement = []);
        process.flowElement.push({
            __$$element: "sequenceFlow",
            "@_id": newEdgeId,
            "@_sourceRef": __readonly_sourceNode.id,
            "@_targetRef": newBpmnElementId,
        });
        (_b = process.flowElement) === null || _b === void 0 ? void 0 : _b.push(switchExpression(__readonly_newNode.type, {
            [NODE_TYPES.task]: {
                "@_id": newBpmnElementId,
                "@_name": "New Task",
                __$$element: "task",
            },
            [NODE_TYPES.startEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "startEvent",
            },
            [NODE_TYPES.intermediateCatchEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "intermediateCatchEvent",
                eventDefinition: [{ "@_id": generateUuid(), __$$element: "timerEventDefinition" }],
            },
            [NODE_TYPES.intermediateThrowEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "intermediateThrowEvent",
                eventDefinition: [{ "@_id": generateUuid(), __$$element: "signalEventDefinition" }],
            },
            [NODE_TYPES.endEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "endEvent",
            },
            [NODE_TYPES.subProcess]: {
                "@_id": newBpmnElementId,
                "@_name": "New Sub-process",
                __$$element: "subProcess",
            },
            [NODE_TYPES.gateway]: {
                "@_id": newBpmnElementId,
                __$$element: "exclusiveGateway",
            },
        }));
    }
    else if (nature === NodeNature.ARTIFACT) {
        (_c = process.artifact) !== null && _c !== void 0 ? _c : (process.artifact = []);
        process.artifact.push(...switchExpression(__readonly_newNode.type, {
            [NODE_TYPES.group]: [
                {
                    "@_id": newBpmnElementId,
                    __$$element: "group",
                },
            ],
            [NODE_TYPES.textAnnotation]: [
                {
                    "@_id": newBpmnElementId,
                    __$$element: "textAnnotation",
                    text: { __$$text: "" },
                },
                {
                    "@_id": newEdgeId,
                    __$$element: "association",
                    "@_associationDirection": "Both",
                    "@_sourceRef": __readonly_sourceNode.id,
                    "@_targetRef": newBpmnElementId,
                },
            ],
        }));
    }
    else {
        throw new Error(`BPMN MUTATION: Unknown node usage '${nature}'.`);
    }
    const newShapeId = generateUuid();
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push({
        __$$element: "bpmndi:BPMNShape",
        "@_id": newShapeId,
        "@_bpmnElement": newBpmnElementId,
        "dc:Bounds": __readonly_newNode.bounds,
    });
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push({
        __$$element: "bpmndi:BPMNEdge",
        "@_id": generateUuid() + AutoPositionedEdgeMarker.TARGET,
        "@_bpmnElement": newEdgeId,
        "@_sourceElement": __readonly_sourceNode.shapeId,
        "@_targetElement": newShapeId,
        "di:waypoint": [
            getDiBoundsCenterPoint(__readonly_sourceNode.bounds),
            getDiBoundsCenterPoint(__readonly_newNode.bounds),
        ],
    });
    return { id: newBpmnElementId, href: newBpmnElementId };
}
//# sourceMappingURL=addConnectedNode.js.map