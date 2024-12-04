import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { NODE_TYPES } from "../diagram/BpmnDiagramDomain";
import { NodeNature, nodeNatures } from "./_NodeNature";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function addStandaloneNode({ definitions, __readonly_element, __readonly_newNode, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h;
    const newBpmnElementId = generateUuid();
    const nature = nodeNatures[__readonly_newNode.type];
    const { process, diagramElements } = addOrGetProcessAndDiagramElements({ definitions });
    if (nature === NodeNature.PROCESS_FLOW_ELEMENT) {
        (_a = process.flowElement) !== null && _a !== void 0 ? _a : (process.flowElement = []);
        (_b = process.flowElement) === null || _b === void 0 ? void 0 : _b.push(switchExpression(__readonly_newNode.type, {
            [NODE_TYPES.task]: __readonly_element === "callActivity"
                ? {
                    "@_id": newBpmnElementId,
                    "@_name": "New sub-process",
                    __$$element: "callActivity",
                }
                : {
                    "@_id": newBpmnElementId,
                    "@_name": "New task",
                    __$$element: "task",
                },
            [NODE_TYPES.startEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "startEvent",
            },
            [NODE_TYPES.intermediateCatchEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "intermediateCatchEvent",
                eventDefinition: [
                    {
                        "@_id": generateUuid(),
                        __$$element: "timerEventDefinition",
                    },
                ],
            },
            [NODE_TYPES.intermediateThrowEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "intermediateThrowEvent",
            },
            [NODE_TYPES.endEvent]: {
                "@_id": newBpmnElementId,
                __$$element: "endEvent",
            },
            [NODE_TYPES.gateway]: {
                "@_id": newBpmnElementId,
                __$$element: "exclusiveGateway",
            },
            [NODE_TYPES.dataObject]: {
                "@_id": newBpmnElementId,
                "@_name": "New Data Object",
                __$$element: "dataObject",
            },
        }));
    }
    else if (nature === NodeNature.ARTIFACT) {
        (_c = process.artifact) !== null && _c !== void 0 ? _c : (process.artifact = []);
        (_d = process.artifact) === null || _d === void 0 ? void 0 : _d.push(...switchExpression(__readonly_newNode.type, {
            [NODE_TYPES.textAnnotation]: [
                {
                    "@_id": newBpmnElementId,
                    __$$element: "textAnnotation",
                    text: { __$$text: "" },
                },
            ],
            [NODE_TYPES.group]: [
                {
                    "@_id": newBpmnElementId,
                    __$$element: "group",
                },
            ],
        }));
    }
    else if (nature === NodeNature.CONTAINER) {
        (_e = process.flowElement) !== null && _e !== void 0 ? _e : (process.flowElement = []);
        process.flowElement.push(__readonly_element === "transaction"
            ? {
                "@_id": newBpmnElementId,
                "@_name": "New transaction",
                __$$element: "transaction",
            }
            : {
                "@_id": newBpmnElementId,
                "@_name": "New sub-process",
                __$$element: "subProcess",
            });
    }
    else if (nature === NodeNature.LANE) {
        (_f = process.laneSet) !== null && _f !== void 0 ? _f : (process.laneSet = [{ "@_id": generateUuid() }]);
        (_g = (_h = process.laneSet[0]).lane) !== null && _g !== void 0 ? _g : (_h.lane = []);
        process.laneSet[0].lane.push({
            "@_id": newBpmnElementId,
            "@_name": "New Lane",
        });
    }
    else {
        throw new Error(`Unknown node nature '${nature}'.`);
    }
    const shapeId = generateUuid();
    diagramElements === null || diagramElements === void 0 ? void 0 : diagramElements.push({
        __$$element: "bpmndi:BPMNShape",
        "@_id": shapeId,
        "@_bpmnElement": newBpmnElementId,
        "dc:Bounds": __readonly_newNode.bounds,
    });
    return { id: newBpmnElementId, shapeId };
}
//# sourceMappingURL=addStandaloneNode.js.map