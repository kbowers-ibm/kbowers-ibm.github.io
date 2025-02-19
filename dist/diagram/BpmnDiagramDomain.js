import { jsx as _jsx } from "react/jsx-runtime";
import { ContainmentMode, } from "@kie-tools/xyflow-react-kie-diagram/dist/graph/graphStructure";
import { DataObjectNode, EndEventNode, GatewayNode, GroupNode, IntermediateCatchEventNode, IntermediateThrowEventNode, LaneNode, StartEventNode, SubProcessNode, TaskNode, TextAnnotationNode, UnknownNode, } from "./nodes/Nodes";
import { SequenceFlowPath, AssociationPath } from "./edges/EdgeSvgs";
import { StartEventNodeSvg, IntermediateCatchEventNodeSvg, IntermediateThrowEventNodeSvg, EndEventNodeSvg, TaskNodeSvg, SubProcessNodeSvg, GatewayNodeSvg, TextAnnotationNodeSvg, LaneNodeSvg, } from "./nodes/NodeSvgs";
import { SequenceFlowEdge, AssociationEdge } from "./edges/Edges";
import { switchExpression } from "@kie-tools-core/switch-expression-ts";
import { CONTAINER_NODES_DESIRABLE_PADDING } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { snapPoint } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
export const NODE_TYPES = {
    startEvent: "node_startEvent",
    intermediateCatchEvent: "node_intermediateCatchEvent",
    intermediateThrowEvent: "node_intermediateThrowEvent",
    endEvent: "node_endEvent",
    task: "node_task",
    subProcess: "node_subProcess",
    gateway: "node_gateway",
    dataObject: "node_dataObject",
    textAnnotation: "node_textAnnotation",
    unknown: "node_unknown",
    group: "node_group",
    lane: "node_lane",
};
export const EDGE_TYPES = {
    sequenceFlow: "edge_sequenceFlow",
    association: "edge_association",
};
export var ActivityNodeMarker;
(function (ActivityNodeMarker) {
    ActivityNodeMarker["Collapsed"] = "Collapsed";
    ActivityNodeMarker["MultiInstanceParallel"] = "MultiInstanceParallel";
    ActivityNodeMarker["MultiInstanceSequential"] = "MultiInstanceSequential";
    ActivityNodeMarker["Loop"] = "Loop";
    ActivityNodeMarker["Compensation"] = "Compensation";
    ActivityNodeMarker["AdHocSubProcess"] = "AdHocSubProcess";
})(ActivityNodeMarker || (ActivityNodeMarker = {}));
export const BPMN_GRAPH_STRUCTURE = new Map([
    [
        NODE_TYPES.startEvent,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.gateway,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.task,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.gateway,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.endEvent,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.subProcess,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.gateway,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.endEvent,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.intermediateCatchEvent,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.gateway,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.endEvent,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.intermediateThrowEvent,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.gateway,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.endEvent,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.gateway,
        new Map([
            [
                EDGE_TYPES.sequenceFlow,
                new Set([
                    NODE_TYPES.task,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.gateway,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.endEvent,
                ]),
            ],
            [EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])],
        ]),
    ],
    [
        NODE_TYPES.endEvent,
        new Map([[EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])]]),
    ],
    [
        NODE_TYPES.dataObject,
        new Map([[EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])]]),
    ],
    [
        NODE_TYPES.group,
        new Map([[EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])]]),
    ],
    [
        NODE_TYPES.lane,
        new Map([[EDGE_TYPES.association, new Set([NODE_TYPES.textAnnotation])]]),
    ],
    [
        NODE_TYPES.textAnnotation,
        new Map([
            [
                EDGE_TYPES.association,
                new Set([
                    NODE_TYPES.startEvent,
                    NODE_TYPES.task,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.gateway,
                    NODE_TYPES.endEvent,
                    NODE_TYPES.dataObject,
                    NODE_TYPES.lane,
                ]),
            ],
        ]),
    ],
]);
export const BPMN_CONTAINMENT_MAP = new Map([
    [
        NODE_TYPES.lane,
        new Map([
            [
                ContainmentMode.INSIDE,
                new Set([
                    NODE_TYPES.startEvent,
                    NODE_TYPES.task,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.gateway,
                    NODE_TYPES.subProcess,
                    NODE_TYPES.endEvent,
                    NODE_TYPES.dataObject,
                    NODE_TYPES.textAnnotation,
                    NODE_TYPES.group,
                ]),
            ],
        ]),
    ],
    [
        NODE_TYPES.subProcess,
        new Map([
            [
                ContainmentMode.INSIDE,
                new Set([
                    NODE_TYPES.startEvent,
                    NODE_TYPES.task,
                    NODE_TYPES.intermediateCatchEvent,
                    NODE_TYPES.intermediateThrowEvent,
                    NODE_TYPES.gateway,
                    NODE_TYPES.endEvent,
                    NODE_TYPES.textAnnotation,
                    NODE_TYPES.group,
                ]),
            ],
            [ContainmentMode.BORDER, new Set([NODE_TYPES.intermediateCatchEvent])],
        ]),
    ],
    [NODE_TYPES.task, new Map([[ContainmentMode.BORDER, new Set([NODE_TYPES.intermediateCatchEvent])]])],
]);
export const CONNECTION_LINE_EDGE_COMPONENTS_MAPPING = {
    [EDGE_TYPES.sequenceFlow]: SequenceFlowPath,
    [EDGE_TYPES.association]: AssociationPath,
};
export const CONNECTION_LINE_NODE_COMPONENT_MAPPING = {
    [NODE_TYPES.startEvent]: StartEventNodeSvg,
    [NODE_TYPES.intermediateCatchEvent]: IntermediateCatchEventNodeSvg,
    [NODE_TYPES.intermediateThrowEvent]: IntermediateThrowEventNodeSvg,
    [NODE_TYPES.endEvent]: EndEventNodeSvg,
    [NODE_TYPES.task]: TaskNodeSvg,
    [NODE_TYPES.subProcess]: SubProcessNodeSvg,
    [NODE_TYPES.gateway]: GatewayNodeSvg,
    [NODE_TYPES.textAnnotation]: TextAnnotationNodeSvg,
    [NODE_TYPES.lane]: LaneNodeSvg,
    node_dataObject: undefined,
    node_unknown: undefined,
    node_group: undefined,
};
export const XY_FLOW_NODE_TYPES = {
    [NODE_TYPES.startEvent]: StartEventNode,
    [NODE_TYPES.intermediateCatchEvent]: IntermediateCatchEventNode,
    [NODE_TYPES.intermediateThrowEvent]: IntermediateThrowEventNode,
    [NODE_TYPES.endEvent]: EndEventNode,
    [NODE_TYPES.task]: TaskNode,
    [NODE_TYPES.subProcess]: SubProcessNode,
    [NODE_TYPES.gateway]: GatewayNode,
    [NODE_TYPES.group]: GroupNode,
    [NODE_TYPES.textAnnotation]: TextAnnotationNode,
    [NODE_TYPES.dataObject]: DataObjectNode,
    [NODE_TYPES.lane]: LaneNode,
    [NODE_TYPES.unknown]: UnknownNode,
};
export const XY_FLOW_EDGE_TYPES = {
    [EDGE_TYPES.sequenceFlow]: SequenceFlowEdge,
    [EDGE_TYPES.association]: AssociationEdge,
};
export const BPMN_OUTGOING_STRUCTURE = {
    [NODE_TYPES.startEvent]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.intermediateCatchEvent]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.endEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.intermediateThrowEvent]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.endEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.endEvent]: {
        nodes: [NODE_TYPES.textAnnotation],
        edges: [EDGE_TYPES.association],
    },
    [NODE_TYPES.task]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.endEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.subProcess]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.endEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.gateway]: {
        nodes: [
            NODE_TYPES.task,
            NODE_TYPES.gateway,
            NODE_TYPES.intermediateCatchEvent,
            NODE_TYPES.intermediateThrowEvent,
            NODE_TYPES.endEvent,
            NODE_TYPES.textAnnotation,
        ],
        edges: [EDGE_TYPES.sequenceFlow, EDGE_TYPES.association],
    },
    [NODE_TYPES.dataObject]: {
        nodes: [NODE_TYPES.textAnnotation],
        edges: [EDGE_TYPES.association],
    },
    [NODE_TYPES.group]: {
        nodes: [NODE_TYPES.textAnnotation],
        edges: [EDGE_TYPES.association],
    },
    [NODE_TYPES.lane]: {
        nodes: [NODE_TYPES.textAnnotation],
        edges: [EDGE_TYPES.association],
    },
    [NODE_TYPES.textAnnotation]: {
        nodes: [],
        edges: [EDGE_TYPES.association],
    },
};
export const bpmnEdgesOutgoingStuffNodePanelMapping = {
    [EDGE_TYPES.sequenceFlow]: {
        actionTitle: "Add Sequence Flow",
        icon: ({ viewboxSize }) => _jsx(SequenceFlowPath, { d: `M2,${viewboxSize - 2} L${viewboxSize - 2},0` }),
    },
    [EDGE_TYPES.association]: {
        actionTitle: "Add Association",
        icon: ({ viewboxSize }) => _jsx(AssociationPath, { d: `M2,${viewboxSize - 2} L${viewboxSize},0`, strokeWidth: 2 }),
    },
};
export const bpmnNodesOutgoingStuffNodePanelMapping = {
    [NODE_TYPES.startEvent]: {
        actionTitle: "Add Start Event",
        icon: (nodeSvgProps) => _jsx(StartEventNodeSvg, { ...nodeSvgProps, variant: "none" }),
    },
    [NODE_TYPES.intermediateCatchEvent]: {
        actionTitle: "Add Intermediate Catch Event",
        icon: (nodeSvgProps) => _jsx(IntermediateCatchEventNodeSvg, { ...nodeSvgProps, variant: "none" }),
    },
    [NODE_TYPES.intermediateThrowEvent]: {
        actionTitle: "Add Intermediate Throw Event",
        icon: (nodeSvgProps) => _jsx(IntermediateThrowEventNodeSvg, { ...nodeSvgProps, variant: "none" }),
    },
    [NODE_TYPES.endEvent]: {
        actionTitle: "Add End Event",
        icon: (nodeSvgProps) => _jsx(EndEventNodeSvg, { ...nodeSvgProps, variant: "none" }),
    },
    [NODE_TYPES.task]: {
        actionTitle: "Add Task",
        icon: (nodeSvgProps) => _jsx(TaskNodeSvg, { ...nodeSvgProps }),
    },
    [NODE_TYPES.subProcess]: {
        actionTitle: "Add Sub-process",
        icon: (nodeSvgProps) => _jsx(TaskNodeSvg, { ...nodeSvgProps, markers: ["CallActivityPaletteIcon"] }),
    },
    [NODE_TYPES.gateway]: {
        actionTitle: "Add Gateway",
        icon: (nodeSvgProps) => (_jsx(GatewayNodeSvg, { ...nodeSvgProps, height: nodeSvgProps.width, variant: "none", x: nodeSvgProps.x, y: nodeSvgProps.y - 8 })),
    },
    [NODE_TYPES.textAnnotation]: {
        actionTitle: "Add Text Annotation",
        icon: (nodeSvgProps) => _jsx(TextAnnotationNodeSvg, { ...nodeSvgProps }),
    },
};
export const MIN_NODE_SIZES = {
    [NODE_TYPES.startEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 10, 10);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.intermediateCatchEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 10, 10);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.intermediateThrowEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 10, 10);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.endEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 10, 10);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.task]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.subProcess]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.gateway]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 10, 10);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.dataObject]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, NODE_MIN_WIDTH / 2, NODE_MIN_HEIGHT + 20);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.group]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, NODE_MIN_WIDTH + CONTAINER_NODES_DESIRABLE_PADDING * 2, NODE_MIN_HEIGHT + CONTAINER_NODES_DESIRABLE_PADDING * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.textAnnotation]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 200, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.lane]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.unknown]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
};
export const DEFAULT_NODE_SIZES = {
    [NODE_TYPES.startEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 60, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.intermediateCatchEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 60, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.intermediateThrowEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 60, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.endEvent]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 60, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.task]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 180, 90);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.subProcess]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 360, 180);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.gateway]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 60, 60);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.dataObject]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, NODE_MIN_WIDTH / 2, NODE_MIN_HEIGHT + 20);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.group]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, NODE_MIN_WIDTH * 2, NODE_MIN_WIDTH * 2);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.textAnnotation]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 180, 180);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.lane]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid, 540, 240);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
    [NODE_TYPES.unknown]: ({ snapGrid }) => {
        const snappedMinSize = MIN_SIZE_FOR_NODES(snapGrid);
        return {
            "@_width": snappedMinSize.width,
            "@_height": snappedMinSize.height,
        };
    },
};
export const NODE_MIN_WIDTH = 120;
export const NODE_MIN_HEIGHT = 60;
export const MIN_SIZE_FOR_NODES = (grid, width = NODE_MIN_WIDTH, height = NODE_MIN_HEIGHT) => {
    const snapped = snapPoint(grid, { "@_x": width, "@_y": height }, "ceil");
    return { width: snapped["@_x"], height: snapped["@_y"] };
};
export function getNodeTypeFromBpmnElement(bpmnElement) {
    if (!bpmnElement) {
        return NODE_TYPES.unknown;
    }
    const type = switchExpression(bpmnElement.__$$element, {
        dataObject: NODE_TYPES.dataObject,
        task: NODE_TYPES.task,
        lane: NODE_TYPES.lane,
        textAnnotation: NODE_TYPES.textAnnotation,
        default: undefined,
    });
    return type;
}
export const elementToNodeType = {
    lane: NODE_TYPES.lane,
    startEvent: NODE_TYPES.startEvent,
    boundaryEvent: NODE_TYPES.intermediateCatchEvent,
    intermediateCatchEvent: NODE_TYPES.intermediateCatchEvent,
    intermediateThrowEvent: NODE_TYPES.intermediateThrowEvent,
    endEvent: NODE_TYPES.endEvent,
    callActivity: NODE_TYPES.task,
    task: NODE_TYPES.task,
    businessRuleTask: NODE_TYPES.task,
    userTask: NODE_TYPES.task,
    scriptTask: NODE_TYPES.task,
    serviceTask: NODE_TYPES.task,
    subProcess: NODE_TYPES.subProcess,
    adHocSubProcess: NODE_TYPES.subProcess,
    transaction: NODE_TYPES.subProcess,
    complexGateway: NODE_TYPES.gateway,
    eventBasedGateway: NODE_TYPES.gateway,
    exclusiveGateway: NODE_TYPES.gateway,
    inclusiveGateway: NODE_TYPES.gateway,
    parallelGateway: NODE_TYPES.gateway,
    dataObject: NODE_TYPES.dataObject,
    group: NODE_TYPES.group,
    textAnnotation: NODE_TYPES.textAnnotation,
    event: NODE_TYPES.unknown,
};
export const elementToEdgeType = {
    association: EDGE_TYPES.association,
    sequenceFlow: EDGE_TYPES.sequenceFlow,
};
//# sourceMappingURL=BpmnDiagramDomain.js.map