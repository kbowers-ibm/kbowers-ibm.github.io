import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
export declare enum NodeNature {
    LANE = "LANE",
    CONTAINER = "CONTAINER",
    PROCESS_FLOW_ELEMENT = "PROCESS_FLOW_ELEMENT",
    ARTIFACT = "ARTIFACT",
    UNKNOWN = "UNKNOWN"
}
export declare const nodeNatures: Record<BpmnNodeType, NodeNature>;
//# sourceMappingURL=_NodeNature.d.ts.map