import * as RF from "reactflow";
import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { BpmnDiagramEdgeData } from "../diagram/BpmnDiagramDomain";
import { BpmnDiagramNodeData } from "../diagram/BpmnDiagramDomain";
import { SnapGrid } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
import { NodeLabelPosition } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
export declare function BpmnDiagramSvg({ nodes, edges, snapGrid, }: {
    nodes: RF.Node<BpmnDiagramNodeData, BpmnNodeType>[];
    edges: RF.Edge<BpmnDiagramEdgeData>[];
    snapGrid: SnapGrid;
}): JSX.Element;
export declare function getNodeLabelSvgTextAlignmentProps(n: RF.Node<BpmnDiagramNodeData, BpmnNodeType>, labelPosition: NodeLabelPosition): {
    readonly verticalAnchor: "start";
    readonly textAnchor: "middle";
    readonly transform: `translate(${number},${number})`;
    readonly width: number;
} | {
    readonly verticalAnchor: "middle";
    readonly textAnchor: "middle";
    readonly transform: `translate(${number},${number})`;
    readonly width: number;
} | {
    readonly verticalAnchor: "middle";
    readonly textAnchor: "start";
    readonly transform: `translate(${number},${number})`;
    readonly width: number;
} | {
    readonly verticalAnchor: "start";
    readonly textAnchor: "start";
    readonly transform: `translate(${number},${number})`;
    readonly width: number;
};
//# sourceMappingURL=BpmnDiagramSvg.d.ts.map