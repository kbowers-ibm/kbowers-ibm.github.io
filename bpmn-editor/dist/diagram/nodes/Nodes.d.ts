import { BPMN20__tBoundaryEvent, BPMN20__tDataObject, BPMN20__tEndEvent, BPMN20__tGroup, BPMN20__tIntermediateCatchEvent, BPMN20__tIntermediateThrowEvent, BPMN20__tLane, BPMN20__tProcess, BPMN20__tStartEvent, BPMN20__tSubProcess, BPMN20__tTask, BPMN20__tTextAnnotation } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import * as React from "react";
import * as RF from "reactflow";
import { Normalized } from "../../normalization/normalize";
import { ActivityNodeMarker, BpmnDiagramNodeData } from "../BpmnDiagramDomain";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
export declare const StartEventNode: React.MemoExoticComponent<({ data: { bpmnElement: startEvent, shape, shapeIndex, parentXyFlowNode }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tStartEvent> & {
    __$$element: "startEvent";
}>>) => JSX.Element>;
export declare const IntermediateCatchEventNode: React.MemoExoticComponent<({ data: { bpmnElement: intermediateCatchEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<(Normalized<BPMN20__tIntermediateCatchEvent> & {
    __$$element: "intermediateCatchEvent";
}) | (Normalized<BPMN20__tBoundaryEvent> & {
    __$$element: "boundaryEvent";
})>>) => JSX.Element>;
export declare const IntermediateThrowEventNode: React.MemoExoticComponent<({ data: { bpmnElement: intermediateThrowEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tIntermediateThrowEvent> & {
    __$$element: "intermediateThrowEvent";
}>>) => JSX.Element>;
export declare const EndEventNode: React.MemoExoticComponent<({ data: { bpmnElement: endEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tEndEvent> & {
    __$$element: "endEvent";
}>>) => JSX.Element>;
export declare const TaskNode: React.MemoExoticComponent<({ data: { bpmnElement: task, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "task" | "scriptTask" | "serviceTask" | "businessRuleTask" | "userTask" | "callActivity">>>>) => JSX.Element>;
export declare const SubProcessNode: React.MemoExoticComponent<({ data: { bpmnElement: subProcess, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tSubProcess> & {
    __$$element: "transaction" | "adHocSubProcess" | "subProcess";
}>>) => JSX.Element>;
export declare const GatewayNode: React.MemoExoticComponent<({ data: { bpmnElement: gateway, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "exclusiveGateway" | "inclusiveGateway" | "parallelGateway" | "eventBasedGateway" | "complexGateway">>>>) => JSX.Element>;
export declare const DataObjectNode: React.MemoExoticComponent<({ data: { bpmnElement: dataObject, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tDataObject> & {
    __$$element: "dataObject";
}>>) => JSX.Element>;
export declare const GroupNode: React.MemoExoticComponent<({ data: { bpmnElement: group, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tGroup> & {
    __$$element: "group";
}>>) => JSX.Element>;
export declare const LaneNode: React.MemoExoticComponent<({ data: { bpmnElement: lane, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tLane> & {
    __$$element: "lane";
}>>) => JSX.Element>;
export declare const TextAnnotationNode: React.MemoExoticComponent<({ data: { bpmnElement: textAnnotation, shape, shapeIndex }, selected, dragging, zIndex, type, id, }: RF.NodeProps<BpmnDiagramNodeData<Normalized<BPMN20__tTextAnnotation> & {
    __$$element: "textAnnotation";
}>>) => JSX.Element>;
export declare const UnknownNode: React.MemoExoticComponent<({ data: { shape, shapeIndex }, selected, dragging, zIndex, type, id }: RF.NodeProps<BpmnDiagramNodeData<any>>) => JSX.Element>;
export declare function useActivityIcons(activity: (Normalized<BPMN20__tSubProcess> & {
    __$$element: "transaction" | "adHocSubProcess" | "subProcess";
}) | (Normalized<BPMN20__tTask> & {
    __$$element: "task" | "serviceTask" | "userTask" | "businessRuleTask" | "scriptTask" | "callActivity";
})): ActivityNodeMarker[];
export declare function NodeLabelAtTheBottom({ children }: React.PropsWithChildren<{}>): JSX.Element;
//# sourceMappingURL=Nodes.d.ts.map