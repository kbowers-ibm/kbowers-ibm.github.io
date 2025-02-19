import * as React from "react";
import { ContainmentMap, GraphStructure } from "@kie-tools/xyflow-react-kie-diagram/dist/graph/graphStructure";
import { BPMN20__tIntermediateCatchEvent, BPMN20__tLane, BPMN20__tProcess, BPMNDI__BPMNEdge, BPMNDI__BPMNShape } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { XyFlowReactKieDiagramEdgeData, XyFlowReactKieDiagramNodeData } from "@kie-tools/xyflow-react-kie-diagram/dist/store/State";
import { Normalized } from "../normalization/normalize";
import { ConnectionLineEdgeMapping, ConnectionLineNodeMapping } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/ConnectionLine";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { ElementExclusion, ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { OutgoingStuffNodePanelEdgeMapping, OutgoingStuffNodePanelNodeMapping } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/OutgoingStuffNodePanel";
import { NodeSizes } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSizes";
import { SnapGrid } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
export declare const NODE_TYPES: {
    startEvent: "node_startEvent";
    intermediateCatchEvent: "node_intermediateCatchEvent";
    intermediateThrowEvent: "node_intermediateThrowEvent";
    endEvent: "node_endEvent";
    task: "node_task";
    subProcess: "node_subProcess";
    gateway: "node_gateway";
    dataObject: "node_dataObject";
    textAnnotation: "node_textAnnotation";
    unknown: "node_unknown";
    group: "node_group";
    lane: "node_lane";
};
export declare const EDGE_TYPES: {
    sequenceFlow: "edge_sequenceFlow";
    association: "edge_association";
};
export type Values<T> = T[keyof T];
export type BpmnNodeType = Values<typeof NODE_TYPES>;
export type BpmnEdgeType = Values<typeof EDGE_TYPES>;
export declare enum ActivityNodeMarker {
    Collapsed = "Collapsed",
    MultiInstanceParallel = "MultiInstanceParallel",
    MultiInstanceSequential = "MultiInstanceSequential",
    Loop = "Loop",
    Compensation = "Compensation",
    AdHocSubProcess = "AdHocSubProcess"
}
export declare const BPMN_GRAPH_STRUCTURE: GraphStructure<BpmnNodeType, BpmnEdgeType>;
export declare const BPMN_CONTAINMENT_MAP: ContainmentMap<BpmnNodeType>;
export declare const CONNECTION_LINE_EDGE_COMPONENTS_MAPPING: ConnectionLineEdgeMapping<BpmnEdgeType>;
export declare const CONNECTION_LINE_NODE_COMPONENT_MAPPING: ConnectionLineNodeMapping<BpmnNodeType>;
export declare const XY_FLOW_NODE_TYPES: Record<BpmnNodeType, React.ComponentType<any>>;
export declare const XY_FLOW_EDGE_TYPES: Record<BpmnEdgeType, React.ComponentType<any>>;
export interface BpmnDiagramNodeData<T extends BpmnNodeElement = BpmnNodeElement> extends XyFlowReactKieDiagramNodeData<BpmnNodeType, BpmnDiagramNodeData> {
    bpmnElement: T;
    shape: Normalized<BPMNDI__BPMNShape>;
    shapeIndex: number;
}
export interface BpmnDiagramEdgeData extends XyFlowReactKieDiagramEdgeData {
    bpmnEdge: Normalized<BPMNDI__BPMNEdge> | undefined;
    bpmnEdgeIndex: number;
    bpmnElement: BpmnEdgeElement;
    bpmnShapeSource: Normalized<BPMNDI__BPMNShape> | undefined;
    bpmnShapeTarget: Normalized<BPMNDI__BPMNShape> | undefined;
}
export declare const BPMN_OUTGOING_STRUCTURE: {
    node_startEvent: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_intermediateCatchEvent: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_endEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_intermediateThrowEvent: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_endEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_endEvent: {
        nodes: "node_textAnnotation"[];
        edges: "edge_association"[];
    };
    node_task: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_endEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_subProcess: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_endEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_gateway: {
        nodes: ("node_intermediateCatchEvent" | "node_intermediateThrowEvent" | "node_endEvent" | "node_task" | "node_gateway" | "node_textAnnotation")[];
        edges: ("edge_sequenceFlow" | "edge_association")[];
    };
    node_dataObject: {
        nodes: "node_textAnnotation"[];
        edges: "edge_association"[];
    };
    node_group: {
        nodes: "node_textAnnotation"[];
        edges: "edge_association"[];
    };
    node_lane: {
        nodes: "node_textAnnotation"[];
        edges: "edge_association"[];
    };
    node_textAnnotation: {
        nodes: never[];
        edges: "edge_association"[];
    };
};
export declare const bpmnEdgesOutgoingStuffNodePanelMapping: OutgoingStuffNodePanelEdgeMapping<BpmnEdgeType>;
export declare const bpmnNodesOutgoingStuffNodePanelMapping: OutgoingStuffNodePanelNodeMapping<Exclude<BpmnNodeType, typeof NODE_TYPES.dataObject | typeof NODE_TYPES.unknown | typeof NODE_TYPES.group | typeof NODE_TYPES.lane>>;
export declare const MIN_NODE_SIZES: NodeSizes<BpmnNodeType>;
export declare const DEFAULT_NODE_SIZES: NodeSizes<BpmnNodeType>;
export declare const NODE_MIN_WIDTH = 120;
export declare const NODE_MIN_HEIGHT = 60;
export declare const MIN_SIZE_FOR_NODES: (grid: SnapGrid, width?: number, height?: number) => {
    width: number;
    height: number;
};
export type BpmnEdgeElement = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "sequenceFlow"> | ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["artifact"]>>, "association">>;
export type BpmnNodeElement = Normalized<ElementExclusion<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "sequenceFlow" | "callChoreography" | "choreographyTask" | "dataObjectReference" | "dataStoreReference" | "implicitThrowEvent" | "manualTask" | "receiveTask" | "sendTask" | "subChoreography"> | ElementExclusion<Unpacked<NonNullable<BPMN20__tProcess["artifact"]>>, "association"> | (BPMN20__tLane & {
    __$$element: "lane";
})>;
export declare function getNodeTypeFromBpmnElement(bpmnElement: BpmnNodeElement): "node_task" | "node_dataObject" | "node_textAnnotation" | "node_unknown" | "node_lane" | undefined;
export type GatewayVariant = ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "complexGateway" | "eventBasedGateway" | "exclusiveGateway" | "inclusiveGateway" | "parallelGateway">["__$$element"];
export type EventVariant = ElementFilter<Unpacked<NonNullable<BPMN20__tIntermediateCatchEvent["eventDefinition"]>>, "compensateEventDefinition" | "conditionalEventDefinition" | "errorEventDefinition" | "escalationEventDefinition" | "linkEventDefinition" | "messageEventDefinition" | "signalEventDefinition" | "terminateEventDefinition" | "timerEventDefinition">["__$$element"];
export type TaskVariant = ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "businessRuleTask" | "scriptTask" | "serviceTask" | "userTask">["__$$element"];
export type SubProcessVariant = "transaction" | "event" | "multi-instance" | "other";
export declare const elementToNodeType: Record<NonNullable<BpmnNodeElement>["__$$element"], BpmnNodeType>;
export declare const elementToEdgeType: Record<NonNullable<BpmnEdgeElement>["__$$element"], BpmnEdgeType>;
//# sourceMappingURL=BpmnDiagramDomain.d.ts.map