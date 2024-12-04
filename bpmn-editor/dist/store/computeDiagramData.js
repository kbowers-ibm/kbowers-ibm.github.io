import { snapShapeDimensions, snapShapePosition, } from "@kie-tools/xyflow-react-kie-diagram/dist/snapgrid/SnapGrid";
import { BPMN_CONTAINMENT_MAP, elementToEdgeType, elementToNodeType, NODE_TYPES, } from "../diagram/BpmnDiagramDomain";
import { MIN_NODE_SIZES } from "../diagram/BpmnDiagramDomain";
import { NODE_LAYERS } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/Hooks";
import { ContainmentMode } from "@kie-tools/xyflow-react-kie-diagram/dist/graph/graphStructure";
export function computeDiagramData(definitions, xyFlowReactKieDiagram, snapGrid, dropTarget) {
    var _a, _b, _c, _d;
    const nodeBpmnElementsById = new Map();
    const edgeBpmnElementsById = new Map();
    const parentIdsById = new Map();
    (_b = (_a = definitions.rootElement) === null || _a === void 0 ? void 0 : _a.flatMap((s) => (s.__$$element !== "process" ? [] : s)).flatMap((s) => {
        var _a, _b, _c;
        return [
            ...((_a = s.flowElement) !== null && _a !== void 0 ? _a : []),
            ...((_b = s.artifact) !== null && _b !== void 0 ? _b : []),
            ...((_c = s.laneSet) !== null && _c !== void 0 ? _c : []).flatMap((s) => { var _a; return (_a = s.lane) !== null && _a !== void 0 ? _a : []; }).map((l) => ({ ...l, __$$element: "lane" })),
        ];
    }).forEach((bpmnElement) => {
        var _a, _b;
        if ((bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "sequenceFlow" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "association") {
            edgeBpmnElementsById.set(bpmnElement["@_id"], bpmnElement);
        }
        else if ((bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "subProcess" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "adHocSubProcess" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "transaction" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "callActivity" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "businessRuleTask" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "scriptTask" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "serviceTask" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "userTask" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "task" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "boundaryEvent" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "startEvent" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "intermediateCatchEvent" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "intermediateThrowEvent" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "endEvent" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "complexGateway" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "eventBasedGateway" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "exclusiveGateway" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "inclusiveGateway" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "parallelGateway" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "dataObject" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "lane" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "group" ||
            (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "textAnnotation") {
            nodeBpmnElementsById.set(bpmnElement["@_id"], bpmnElement);
            if ((bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "subProcess" ||
                (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "adHocSubProcess" ||
                (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) === "transaction") {
                for (const flowElement of (_a = bpmnElement.flowElement) !== null && _a !== void 0 ? _a : []) {
                    if (flowElement.__$$element === "boundaryEvent") {
                        parentIdsById.set(flowElement["@_id"], flowElement["@_attachedToRef"]);
                    }
                    else {
                        parentIdsById.set(flowElement["@_id"], bpmnElement["@_id"]);
                    }
                    if (flowElement.__$$element !== "sequenceFlow") {
                        if (flowElement.__$$element !== "callChoreography" &&
                            flowElement.__$$element !== "choreographyTask" &&
                            flowElement.__$$element !== "dataObjectReference" &&
                            flowElement.__$$element !== "dataStoreReference" &&
                            flowElement.__$$element !== "implicitThrowEvent" &&
                            flowElement.__$$element !== "manualTask" &&
                            flowElement.__$$element !== "receiveTask" &&
                            flowElement.__$$element !== "sendTask" &&
                            flowElement.__$$element !== "subChoreography") {
                            nodeBpmnElementsById.set(flowElement["@_id"], flowElement);
                        }
                        else {
                        }
                    }
                    else {
                        edgeBpmnElementsById.set(flowElement["@_id"], flowElement);
                    }
                }
                for (const flowElement of (_b = bpmnElement.artifact) !== null && _b !== void 0 ? _b : []) {
                    parentIdsById.set(flowElement["@_id"], bpmnElement["@_id"]);
                    if (flowElement.__$$element !== "association") {
                        nodeBpmnElementsById.set(flowElement["@_id"], flowElement);
                    }
                    else {
                        edgeBpmnElementsById.set(flowElement["@_id"], flowElement);
                    }
                }
            }
            else if (bpmnElement.__$$element === "lane") {
                const recursivelyAddNodesInsideLane = (lane) => {
                    var _a, _b, _c;
                    for (const flowNodeRef of (_a = lane.flowNodeRef) !== null && _a !== void 0 ? _a : []) {
                        parentIdsById.set(flowNodeRef.__$$text, bpmnElement["@_id"]);
                    }
                    for (const childLane of (_c = (_b = lane.childLaneSet) === null || _b === void 0 ? void 0 : _b.lane) !== null && _c !== void 0 ? _c : []) {
                        recursivelyAddNodesInsideLane(childLane);
                    }
                };
                recursivelyAddNodesInsideLane(bpmnElement);
            }
            else if (bpmnElement.__$$element === "boundaryEvent") {
                parentIdsById.set(bpmnElement["@_id"], bpmnElement["@_attachedToRef"]);
            }
            else {
            }
        }
        else {
            bpmnElement.__$$element;
        }
    }, new Map())) !== null && _b !== void 0 ? _b : new Map();
    const { selectedNodes, draggingNodes, resizingNodes, selectedEdges } = {
        selectedNodes: new Set(xyFlowReactKieDiagram._selectedNodes),
        draggingNodes: new Set(xyFlowReactKieDiagram.draggingNodes),
        resizingNodes: new Set(xyFlowReactKieDiagram.resizingNodes),
        selectedEdges: new Set(xyFlowReactKieDiagram._selectedEdges),
    };
    const nodes = ((_c = definitions["bpmndi:BPMNDiagram"]) !== null && _c !== void 0 ? _c : [])
        .flatMap((d) => d["bpmndi:BPMNPlane"]["di:DiagramElement"])
        .flatMap((bpmnShape, i) => {
        var _a, _b, _c;
        if ((bpmnShape === null || bpmnShape === void 0 ? void 0 : bpmnShape.__$$element) !== "bpmndi:BPMNShape") {
            return [];
        }
        const bpmnElement = nodeBpmnElementsById.get(bpmnShape["@_bpmnElement"]);
        if (!bpmnElement) {
            return [];
        }
        const nodeType = elementToNodeType[bpmnElement.__$$element];
        const id = bpmnElement["@_id"];
        const n = {
            id,
            position: selectedNodes.has(id) && (dropTarget === null || dropTarget === void 0 ? void 0 : dropTarget.containmentMode) === ContainmentMode.BORDER
                ? { x: bpmnShape["dc:Bounds"]["@_x"], y: bpmnShape["dc:Bounds"]["@_y"] }
                : snapShapePosition(snapGrid, bpmnShape),
            data: {
                bpmnElement,
                shape: bpmnShape,
                shapeIndex: i,
                parentXyFlowNode: undefined,
            },
            className: ((_a = BPMN_CONTAINMENT_MAP.get(nodeType)) === null || _a === void 0 ? void 0 : _a.has(ContainmentMode.INSIDE)) || nodeType === NODE_TYPES.group
                ? "xyflow-react-kie-diagram--containerNode--inside"
                : "",
            zIndex: nodeType === NODE_TYPES.lane
                ? NODE_LAYERS.GROUP_NODES
                : nodeType === NODE_TYPES.subProcess
                    ? NODE_LAYERS.CONTAINER_NODES
                    : bpmnElement.__$$element === "boundaryEvent"
                        ? NODE_LAYERS.ATTACHED_NODES
                        : NODE_LAYERS.NODES,
            selected: selectedNodes.has(id),
            resizing: resizingNodes.has(id),
            dragging: draggingNodes.has(id),
            width: (_b = bpmnShape === null || bpmnShape === void 0 ? void 0 : bpmnShape["dc:Bounds"]) === null || _b === void 0 ? void 0 : _b["@_width"],
            height: (_c = bpmnShape === null || bpmnShape === void 0 ? void 0 : bpmnShape["dc:Bounds"]) === null || _c === void 0 ? void 0 : _c["@_height"],
            type: nodeType,
            style: { ...snapShapeDimensions(snapGrid, bpmnShape, MIN_NODE_SIZES[nodeType]({ snapGrid })) },
        };
        return n;
    });
    const nodesById = nodes.reduce((acc, n) => acc.set(n.id, n), new Map());
    for (const node of nodes) {
        const parentId = parentIdsById.get(node.id);
        if (parentId) {
            node.data.parentXyFlowNode = nodesById.get(parentId);
        }
    }
    const selectedNodesById = xyFlowReactKieDiagram._selectedNodes.reduce((acc, s) => acc.set(s, nodesById.get(s)), new Map());
    const selectedNodeTypes = xyFlowReactKieDiagram._selectedNodes.reduce((acc, s) => acc.add(nodesById.get(s).type), new Set());
    const edges = ((_d = definitions["bpmndi:BPMNDiagram"]) !== null && _d !== void 0 ? _d : [])
        .flatMap((d) => d["bpmndi:BPMNPlane"]["di:DiagramElement"])
        .flatMap((bpmnEdge, i) => {
        var _a, _b, _c, _d;
        if ((bpmnEdge === null || bpmnEdge === void 0 ? void 0 : bpmnEdge.__$$element) !== "bpmndi:BPMNEdge") {
            return [];
        }
        const bpmnElement = edgeBpmnElementsById.get(bpmnEdge["@_bpmnElement"]);
        if ((bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) !== "sequenceFlow" && (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element) !== "association") {
            return [];
        }
        if (!bpmnElement) {
            console.warn("WARNING: BPMNEdge without SequenceFlow/Association: " + bpmnEdge["@_id"]);
            return [];
        }
        const sourceId = bpmnElement["@_sourceRef"];
        const targetId = bpmnElement["@_targetRef"];
        const shapeSource = (_b = (_a = nodesById.get(sourceId)) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.shape;
        const shapeTarget = (_d = (_c = nodesById.get(targetId)) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.shape;
        if (shapeSource === undefined || shapeTarget === undefined) {
            console.log("source " + sourceId);
            console.log("target " + targetId);
            return [];
        }
        const id = bpmnElement["@_id"];
        const e = {
            id,
            source: sourceId,
            target: targetId,
            data: {
                "@_id": id,
                "di:waypoint": bpmnEdge["di:waypoint"],
                shapeSource,
                shapeTarget,
                edgeInfo: { id, sourceId, targetId },
                bpmnEdge: bpmnEdge,
                bpmnEdgeIndex: i,
                bpmnElement,
                bpmnShapeSource: shapeSource,
                bpmnShapeTarget: shapeTarget,
            },
            selected: selectedEdges.has(id),
            type: elementToEdgeType[bpmnElement.__$$element],
        };
        return e;
    });
    const graphStructureEdges = edges.map((s) => ({
        id: s.id,
        sourceId: s.source,
        targetId: s.target,
    }));
    const graphStructureAdjacencyList = graphStructureEdges.reduce((acc, e) => {
        const targetAdjancyList = acc.get(e.targetId);
        if (!targetAdjancyList) {
            return acc.set(e.targetId, { dependencies: new Set([e.sourceId]) });
        }
        else {
            targetAdjancyList.dependencies.add(e.sourceId);
            return acc;
        }
    }, new Map());
    const edgesById = edges.reduce((acc, e) => acc.set(e.id, e), new Map());
    const selectedEdgesById = xyFlowReactKieDiagram._selectedEdges.reduce((acc, s) => acc.set(s, edgesById.get(s)), new Map());
    const sortedNodes = [...nodes]
        .sort((a, b) => Number(b.type === NODE_TYPES.subProcess) - Number(a.type === NODE_TYPES.subProcess))
        .sort((a, b) => Number(b.type === NODE_TYPES.lane) - Number(a.type === NODE_TYPES.lane))
        .sort((a, b) => Number(b.type === NODE_TYPES.group) - Number(a.type === NODE_TYPES.group));
    return {
        graphStructureEdges,
        graphStructureAdjacencyList,
        nodes: sortedNodes,
        edges,
        edgesById,
        nodesById,
        selectedNodeTypes,
        selectedNodesById,
        selectedEdgesById,
    };
}
//# sourceMappingURL=computeDiagramData.js.map