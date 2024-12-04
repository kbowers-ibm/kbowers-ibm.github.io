import { XyFlowDiagramData } from "@kie-tools/xyflow-react-kie-diagram/dist/store/State";
import { BpmnDiagramEdgeData, BpmnDiagramNodeData, BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { BpmnXyFlowDiagramState, State } from "./Store";
export declare function computeDiagramData(definitions: State["bpmn"]["model"]["definitions"], xyFlowReactKieDiagram: BpmnXyFlowDiagramState["xyFlowReactKieDiagram"], snapGrid: BpmnXyFlowDiagramState["xyFlowReactKieDiagram"]["snapGrid"], dropTarget: State["xyFlowReactKieDiagram"]["dropTarget"]): XyFlowDiagramData<BpmnNodeType, BpmnDiagramNodeData, BpmnDiagramEdgeData>;
//# sourceMappingURL=computeDiagramData.d.ts.map