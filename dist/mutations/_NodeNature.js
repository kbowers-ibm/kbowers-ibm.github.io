import { NODE_TYPES } from "../diagram/BpmnDiagramDomain";
export var NodeNature;
(function (NodeNature) {
    NodeNature["LANE"] = "LANE";
    NodeNature["CONTAINER"] = "CONTAINER";
    NodeNature["PROCESS_FLOW_ELEMENT"] = "PROCESS_FLOW_ELEMENT";
    NodeNature["ARTIFACT"] = "ARTIFACT";
    NodeNature["UNKNOWN"] = "UNKNOWN";
})(NodeNature || (NodeNature = {}));
export const nodeNatures = {
    [NODE_TYPES.lane]: NodeNature.LANE,
    [NODE_TYPES.subProcess]: NodeNature.CONTAINER,
    [NODE_TYPES.startEvent]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.intermediateCatchEvent]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.intermediateThrowEvent]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.endEvent]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.task]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.gateway]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.dataObject]: NodeNature.PROCESS_FLOW_ELEMENT,
    [NODE_TYPES.textAnnotation]: NodeNature.ARTIFACT,
    [NODE_TYPES.group]: NodeNature.ARTIFACT,
    [NODE_TYPES.unknown]: NodeNature.UNKNOWN,
};
//# sourceMappingURL=_NodeNature.js.map