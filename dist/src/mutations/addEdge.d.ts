import { Normalized } from "../normalization/normalize";
import { BPMN20__tDefinitions } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { BpmnDiagramNodeData, BpmnEdgeType, BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { DC__Bounds } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/model";
import { PositionalNodeHandleId } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/PositionalNodeHandles";
import { AutoPositionedEdgeMarker } from "@kie-tools/xyflow-react-kie-diagram/dist/edges/AutoPositionedEdgeMarker";
export declare function addEdge({ definitions, __readonly_sourceNode, __readonly_targetNode, __readonly_edge, __readonly_keepWaypoints, }: {
    definitions: Normalized<BPMN20__tDefinitions>;
    __readonly_sourceNode: {
        type: BpmnNodeType;
        data: BpmnDiagramNodeData;
        href: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
    };
    __readonly_targetNode: {
        type: BpmnNodeType;
        data: BpmnDiagramNodeData;
        href: string;
        bounds: DC__Bounds;
        shapeId: string | undefined;
    };
    __readonly_edge: {
        type: BpmnEdgeType;
        targetHandle: PositionalNodeHandleId;
        sourceHandle: PositionalNodeHandleId;
        autoPositionedEdgeMarker: AutoPositionedEdgeMarker | undefined;
    };
    __readonly_keepWaypoints: boolean;
}): {
    newBpmnEdge: {
        __$$element: "bpmndi:BPMNEdge";
        __?: undefined;
        "@_id"?: string;
        "di:extension"?: ({
            __?: undefined;
        } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMNDI__BPMNEdge__extension) | undefined;
        "di:waypoint": ({
            "@_x": number;
            "@_y": number;
        } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").DC__Point)[];
        "@_bpmnElement"?: string;
        "@_sourceElement"?: string;
        "@_targetElement"?: string;
        "@_messageVisibleKind"?: import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMNDI__MessageVisibleKind;
        "bpmndi:BPMNLabel"?: ({
            __?: undefined;
            "@_id"?: string;
            "di:extension"?: ({
                __?: undefined;
            } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMNDI__BPMNLabel__extension) | undefined;
            "dc:Bounds"?: ({
                "@_x": number;
                "@_y": number;
                "@_width": number;
                "@_height": number;
            } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").DC__Bounds) | undefined;
            "@_labelStyle"?: string;
        } & {
            "@_id": string;
        }) | undefined;
    } & {
        "@_id": string;
    };
};
//# sourceMappingURL=addEdge.d.ts.map