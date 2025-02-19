import { DiagramRef } from "@kie-tools/xyflow-react-kie-diagram/dist/diagram/XyFlowReactKieDiagram";
import * as React from "react";
import * as RF from "reactflow";
import { BpmnDiagramEdgeData, BpmnDiagramNodeData, BpmnNodeType } from "./BpmnDiagramDomain";
export declare function BpmnDiagram({ container, diagramRef, }: {
    diagramRef: React.RefObject<DiagramRef<BpmnNodeType, BpmnDiagramNodeData, BpmnDiagramEdgeData>>;
    container: React.RefObject<HTMLElement>;
}): JSX.Element;
export declare function ConnectionLine<N extends string, E extends string>(props: RF.ConnectionLineComponentProps): JSX.Element;
//# sourceMappingURL=BpmnDiagram.d.ts.map