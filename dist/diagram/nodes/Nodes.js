import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { parseBpmn20Drools10MetaData } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { getContainmentRelationship } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
import { propsHaveSameValuesDeep } from "@kie-tools/xyflow-react-kie-diagram/dist/memoization/memoization";
import { EditableNodeLabel, useEditableNodeLabel, } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/EditableNodeLabel";
import { NodeResizerHandle, useConnectionTargetStatus, useHoveredNodeAlwaysOnTop, useNodeClassName, useNodeDimensions, useNodeResizing, } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/Hooks";
import { InfoNodePanel } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/InfoNodePanel";
import { OutgoingStuffNodePanel } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/OutgoingStuffNodePanel";
import { PositionalNodeHandles } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/PositionalNodeHandles";
import { useIsHovered } from "@kie-tools/xyflow-react-kie-diagram/dist/reactExt/useIsHovered";
import * as React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as RF from "reactflow";
import { updateFlowElement, updateLane, updateTextAnnotation } from "../../mutations/renameNode";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { ActivityNodeMarker, BPMN_OUTGOING_STRUCTURE, bpmnEdgesOutgoingStuffNodePanelMapping, bpmnNodesOutgoingStuffNodePanelMapping, EDGE_TYPES, MIN_NODE_SIZES, NODE_TYPES, } from "../BpmnDiagramDomain";
import { getNodeLabelPosition, useNodeStyle } from "./NodeStyle";
import { DataObjectNodeSvg, EndEventNodeSvg, GatewayNodeSvg, GroupNodeSvg, IntermediateCatchEventNodeSvg, IntermediateThrowEventNodeSvg, LaneNodeSvg, NODE_COLORS, StartEventNodeSvg, SubProcessNodeSvg, TaskNodeSvg, TextAnnotationNodeSvg, UnknownNodeSvg, } from "./NodeSvgs";
import { NodeMorphingPanel } from "./morphing/NodeMorphingPanel";
import { useEventNodeMorphingActions } from "./morphing/useEventNodeMorphingActions";
import { useGatewayNodeMorphingActions } from "./morphing/useGatewayNodeMorphingActions";
import { useTaskNodeMorphingActions } from "./morphing/useTaskNodeMorphingActions";
import { useSubProcessNodeMorphingActions } from "./morphing/useSubProcessNodeMorphingActions";
import { useKeyboardShortcutsForMorphingActions } from "./morphing/useKeyboardShortcutsForMorphingActions";
export const StartEventNode = React.memo(({ data: { bpmnElement: startEvent, shape, shapeIndex, parentXyFlowNode }, selected, dragging, zIndex, type, id, }) => {
    var _a, _b, _c, _d, _e;
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useEventNodeMorphingActions(startEvent);
    const disabledMorphingActionIds = useMemo(() => (parentXyFlowNode === null || parentXyFlowNode === void 0 ? void 0 : parentXyFlowNode.type) === NODE_TYPES.subProcess
        ? new Set(["none", "linkEventDefinition", "terminateEventDefinition"])
        : new Set([
            "errorEventDefinition",
            "escalationEventDefinition",
            "compensateEventDefinition",
            "linkEventDefinition",
            "terminateEventDefinition",
        ]), [parentXyFlowNode === null || parentXyFlowNode === void 0 ? void 0 : parentXyFlowNode.type]);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(StartEventNodeSvg, { ...nodeDimensions, x: 0, y: 0, variant: (_c = (_b = (_a = startEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element) !== null && _c !== void 0 ? _c : "none" }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--task-node ${className} kie-bpmn-editor--selected-task-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": startEvent["@_name"], children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.startEvent].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.startEvent].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.startEvent.foreground, secondaryColor: NODE_COLORS.startEvent.background, selectedActionId: (_e = (_d = startEvent.eventDefinition) === null || _d === void 0 ? void 0 : _d[0].__$$element) !== null && _e !== void 0 ? _e : "none" })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (startEvent["@_name"] || isEditingLabel) && !isMorphingPanelExpanded && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: startEvent["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: startEvent["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }) }))] })] }));
}, propsHaveSameValuesDeep);
export const IntermediateCatchEventNode = React.memo(({ data: { bpmnElement: intermediateCatchEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    var _a, _b, _c, _d;
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useEventNodeMorphingActions(intermediateCatchEvent);
    const disabledMorphingActionIds = useMemo(() => intermediateCatchEvent.__$$element === "intermediateCatchEvent"
        ? new Set([
            "none",
            "errorEventDefinition",
            "escalationEventDefinition",
            "compensateEventDefinition",
            "terminateEventDefinition",
        ])
        : intermediateCatchEvent.__$$element === "boundaryEvent"
            ? new Set(["none", "linkEventDefinition", "terminateEventDefinition"])
            : new Set(), [intermediateCatchEvent.__$$element]);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(IntermediateCatchEventNodeSvg, { ...nodeDimensions, x: 0, y: 0, variant: (_b = (_a = intermediateCatchEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0].__$$element) !== null && _b !== void 0 ? _b : "none" }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--intermediate-catch-event-node ${className} kie-bpmn-editor--selected-intermediate-catch-event-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": id, children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.intermediateCatchEvent].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.intermediateCatchEvent].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.intermediateCatchEvent.foreground, secondaryColor: NODE_COLORS.intermediateCatchEvent.background, selectedActionId: (_d = (_c = intermediateCatchEvent.eventDefinition) === null || _c === void 0 ? void 0 : _c[0].__$$element) !== null && _d !== void 0 ? _d : "none" })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (intermediateCatchEvent["@_name"] || isEditingLabel) && !isMorphingPanelExpanded && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: intermediateCatchEvent["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: intermediateCatchEvent["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }) }))] })] }));
}, propsHaveSameValuesDeep);
export const IntermediateThrowEventNode = React.memo(({ data: { bpmnElement: intermediateThrowEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    var _a, _b, _c, _d, _e;
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useEventNodeMorphingActions(intermediateThrowEvent);
    const disabledMorphingActionIds = useMemo(() => new Set([
        "timerEventDefinition",
        "errorEventDefinition",
        "conditionalEventDefinition",
        "terminateEventDefinition",
    ]), []);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(IntermediateThrowEventNodeSvg, { ...nodeDimensions, x: 0, y: 0, variant: (_c = (_b = (_a = intermediateThrowEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element) !== null && _c !== void 0 ? _c : "none" }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--intermediate-throw-event-node ${className} kie-bpmn-editor--selected-intermediate-throw-event-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": id, children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.intermediateThrowEvent].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.intermediateThrowEvent].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.intermediateThrowEvent.foreground, secondaryColor: NODE_COLORS.intermediateThrowEvent.background, selectedActionId: (_e = (_d = intermediateThrowEvent.eventDefinition) === null || _d === void 0 ? void 0 : _d[0].__$$element) !== null && _e !== void 0 ? _e : "none" })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (intermediateThrowEvent["@_name"] || isEditingLabel) && !isMorphingPanelExpanded && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: intermediateThrowEvent["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: intermediateThrowEvent["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }) }))] })] }));
}, propsHaveSameValuesDeep);
export const EndEventNode = React.memo(({ data: { bpmnElement: endEvent, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    var _a, _b, _c, _d, _e;
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useEventNodeMorphingActions(endEvent);
    const disabledMorphingActionIds = useMemo(() => new Set(["timerEventDefinition", "conditionalEventDefinition", "linkEventDefinition"]), []);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(EndEventNodeSvg, { ...nodeDimensions, x: 0, y: 0, variant: (_c = (_b = (_a = endEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element) !== null && _c !== void 0 ? _c : "none", strokeWidth: 6 }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--end-event-node ${className} kie-bpmn-editor--selected-end-event-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": id, children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.endEvent].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.endEvent].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.endEvent.foreground, secondaryColor: NODE_COLORS.endEvent.background, selectedActionId: (_e = (_d = endEvent.eventDefinition) === null || _d === void 0 ? void 0 : _d[0].__$$element) !== null && _e !== void 0 ? _e : "none" })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (endEvent["@_name"] || isEditingLabel) && !isMorphingPanelExpanded && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: endEvent["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: endEvent["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }) }))] })] }));
}, propsHaveSameValuesDeep);
export const TaskNode = React.memo(({ data: { bpmnElement: task, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const enableCustomNodeStyles = useBpmnEditorStore((s) => s.diagram.overlays.enableCustomNodeStyles);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const { fontCssProperties } = useNodeStyle({
        nodeType: type,
        isEnabled: enableCustomNodeStyles,
    });
    const icons = useActivityIcons(task);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useTaskNodeMorphingActions(task);
    const disabledMorphingActionIds = useMemo(() => new Set(), []);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(TaskNodeSvg, { ...nodeDimensions, x: 0, y: 0, strokeWidth: task.__$$element === "callActivity" ? 5 : undefined, markers: icons, variant: task.__$$element }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsx("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--task-node ${className} kie-bpmn-editor--selected-task-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": task["@_name"], children: _jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = true;
                                });
                            }, [bpmnEditorStoreApi]) }), _jsx(EditableNodeLabel, { id: id, name: task["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: task["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { ...fontCssProperties, zIndex: 2000 } }), shouldActLikeHovered && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.task].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.task].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.task.foreground, secondaryColor: NODE_COLORS.task.background, selectedActionId: task.__$$element })] }) })] }));
}, propsHaveSameValuesDeep);
export const SubProcessNode = React.memo(({ data: { bpmnElement: subProcess, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    var _a, _b;
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const enableCustomNodeStyles = useBpmnEditorStore((s) => s.diagram.overlays.enableCustomNodeStyles);
    const isOnlySelectedNode = useBpmnEditorStore((s) => s.xyFlowReactKieDiagram._selectedNodes.length === 1 && selected);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const { fontCssProperties } = useNodeStyle({
        nodeType: type,
        isEnabled: enableCustomNodeStyles,
    });
    const icons = useActivityIcons(subProcess);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useSubProcessNodeMorphingActions(subProcess);
    const disabledMorphingActionIds = useMemo(() => new Set(), []);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(SubProcessNodeSvg, { ...nodeDimensions, ref: ref, x: 0, y: 0, icons: icons, variant: subProcess["@_triggeredByEvent"]
                        ? "event"
                        : ((_a = subProcess.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics"
                            ? "multi-instance"
                            : "other" }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsx("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--sub-process-node ${className} kie-bpmn-editor--selected-sub-process-node`, tabIndex: -1, "data-nodehref": id, "data-nodelabel": subProcess["@_name"], children: _jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && isOnlySelectedNode && !dragging, onClick: useCallback(() => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = true;
                                });
                            }, [bpmnEditorStoreApi]) }), _jsx(EditableNodeLabel, { id: id, name: subProcess["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: subProcess["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { ...fontCssProperties, zIndex: 2000 } }), isOnlySelectedNode && !dragging && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && isOnlySelectedNode && !dragging, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.subProcess].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.subProcess].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && isOnlySelectedNode && !dragging, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.subProcess.foreground, secondaryColor: NODE_COLORS.subProcess.background, selectedActionId: subProcess["@_triggeredByEvent"] === true
                                ? "eventSubProcess"
                                : ((_b = subProcess.loopCharacteristics) === null || _b === void 0 ? void 0 : _b.__$$element) === "multiInstanceLoopCharacteristics"
                                    ? "multiInstanceSubProcess"
                                    : subProcess.__$$element })] }) })] }));
}, propsHaveSameValuesDeep);
export const GatewayNode = React.memo(({ data: { bpmnElement: gateway, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [isMorphingPanelExpanded, setMorphingPanelExpanded] = useState(false);
    useEffect(() => setMorphingPanelExpanded(false), [isHovered]);
    const morphingActions = useGatewayNodeMorphingActions(gateway);
    const disabledMorphingActionIds = useMemo(() => new Set(), []);
    useKeyboardShortcutsForMorphingActions(ref, morphingActions, disabledMorphingActionIds);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(GatewayNodeSvg, { ...nodeDimensions, x: 0, y: 0, variant: gateway.__$$element }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--gateway-node ${className} kie-bpmn-editor--selected-gateway-node`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": gateway["@_name"], children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isMorphingPanelExpanded && !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.gateway].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.gateway].edges }), _jsx(NodeMorphingPanel, { disabledActionIds: disabledMorphingActionIds, isToggleVisible: !isTargeted && shouldActLikeHovered, isExpanded: isMorphingPanelExpanded, setExpanded: setMorphingPanelExpanded, actions: morphingActions, primaryColor: NODE_COLORS.gateway.foreground, secondaryColor: NODE_COLORS.gateway.background, selectedActionId: gateway.__$$element })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (gateway["@_name"] || isEditingLabel) && !isMorphingPanelExpanded && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: gateway["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: gateway["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }) }))] })] }));
}, propsHaveSameValuesDeep);
export const DataObjectNode = React.memo(({ data: { bpmnElement: dataObject, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateFlowElement({
                definitions: state.bpmn.model.definitions,
                newFlowElement: { "@_name": newName.trim() },
                id,
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const [nodeHeight, setNodeHeight] = React.useState(0);
    const style = useMemo(() => ({
        display: "flex",
        flexDirection: "column",
        outline: "none",
        "--selected-data-object-node-shape--height": `${nodeDimensions.height + 20 + 26 + (isEditingLabel ? 20 : nodeHeight !== null && nodeHeight !== void 0 ? nodeHeight : 0)}px`,
    }), [nodeDimensions, isEditingLabel, nodeHeight]);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(DataObjectNodeSvg, { ...nodeDimensions, x: 0, y: 0, showArrow: false, showFoldedPage: true }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, style: style, className: `kie-bpmn-editor--data-object-node-content ${className} ${selected ? "selected" : ""}`, ref: ref, tabIndex: -1, "data-nodehref": id, "data-nodelabel": dataObject["@_name"], children: [_jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                                    bpmnEditorStoreApi.setState((state) => {
                                        state.propertiesPanel.isOpen = true;
                                    });
                                }, [bpmnEditorStoreApi]) }), shouldActLikeHovered && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.dataObject].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.dataObject].edges })] }), _jsx("div", { style: { height: nodeDimensions.height, flexShrink: 0 } }), (dataObject["@_name"] || isEditingLabel) && (_jsx(NodeLabelAtTheBottom, { children: _jsx(EditableNodeLabel, { id: id, name: dataObject["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: dataObject["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 }, setLabelHeight: setNodeHeight }) }))] })] }));
}, propsHaveSameValuesDeep);
export const GroupNode = React.memo(({ data: { bpmnElement: group, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const reactFlow = RF.useReactFlow();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES, true);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    useEffect(() => {
        const onDoubleClick = () => {
            bpmnEditorStoreApi.setState((state) => {
                state.xyFlowReactKieDiagram._selectedNodes = reactFlow.getNodes().flatMap((n) => getContainmentRelationship({
                    bounds: n.data.shape["dc:Bounds"],
                    container: shape["dc:Bounds"],
                    snapGrid: state.xyFlowReactKieDiagram.snapGrid,
                    containerMinSizes: MIN_NODE_SIZES[NODE_TYPES.group],
                    boundsMinSizes: MIN_NODE_SIZES[n.type],
                    borderAllowanceInPx: 0,
                }).isCompletelyInside
                    ? [n.id]
                    : []);
            });
        };
        const r = ref.current;
        r === null || r === void 0 ? void 0 : r.addEventListener("dblclick", onDoubleClick);
        return () => {
            r === null || r === void 0 ? void 0 : r.removeEventListener("dblclick", onDoubleClick);
        };
    }, [bpmnEditorStoreApi, reactFlow, shape]);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className}`, children: _jsx(GroupNodeSvg, { ref: ref, ...nodeDimensions, x: 0, y: 0, strokeWidth: 3 }) }), _jsxs("div", { className: `xyflow-react-kie-diagram--node kie-bpmn-editor--group-node ${className}`, tabIndex: -1, "data-nodehref": id, "data-nodelabel": id, children: [selected && !dragging && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isTargeted && selected && !dragging, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.group].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.group].edges })] })] }));
}, propsHaveSameValuesDeep);
export const LaneNode = React.memo(({ data: { bpmnElement: lane, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isOnlySelectedNode = useBpmnEditorStore((s) => s.xyFlowReactKieDiagram._selectedNodes.length === 1 && selected);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({ shape, nodeType: type, MIN_NODE_SIZES });
    const setName = useCallback((newName) => {
        bpmnEditorStoreApi.setState((state) => {
            updateLane({ definitions: state.bpmn.model.definitions, newLane: { "@_name": newName.trim() }, id });
        });
    }, [bpmnEditorStoreApi, id]);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className} ${selected ? "selected" : ""}`, children: _jsx(LaneNodeSvg, { ...nodeDimensions, x: 0, y: 0, ref: ref }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsx("div", { onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, className: `kie-bpmn-editor--lane-node ${className} kie-bpmn-editor--selected-lane-node`, tabIndex: -1, "data-nodehref": id, "data-nodelabel": lane["@_name"], children: _jsxs("div", { className: "xyflow-react-kie-diagram--node", children: [_jsx(InfoNodePanel, { isVisible: !isTargeted && isOnlySelectedNode && !dragging, onClick: useCallback(() => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = true;
                                });
                            }, [bpmnEditorStoreApi]) }), _jsx(EditableNodeLabel, { id: id, name: lane["@_name"], isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: lane["@_name"], onChange: setName, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { zIndex: 2000 } }), isOnlySelectedNode && !dragging && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isTargeted && isOnlySelectedNode && !dragging, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.lane].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.lane].edges })] }) })] }));
}, propsHaveSameValuesDeep);
export const TextAnnotationNode = React.memo(({ data: { bpmnElement: textAnnotation, shape, shapeIndex }, selected, dragging, zIndex, type, id, }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const enableCustomNodeStyles = useBpmnEditorStore((s) => s.diagram.overlays.enableCustomNodeStyles);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const { isEditingLabel, setEditingLabel, triggerEditing, triggerEditingIfEnter } = useEditableNodeLabel(id);
    useHoveredNodeAlwaysOnTop(ref, zIndex, shouldActLikeHovered, dragging, selected, isEditingLabel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({
        nodeType: type,
        shape,
        MIN_NODE_SIZES,
    });
    const setText = useCallback((newText) => {
        bpmnEditorStoreApi.setState((state) => {
            updateTextAnnotation({
                definitions: state.bpmn.model.definitions,
                id,
                newTextAnnotation: { text: { __$$text: newText } },
            });
        });
    }, [bpmnEditorStoreApi, id]);
    const { fontCssProperties } = useNodeStyle({
        nodeType: type,
        isEnabled: enableCustomNodeStyles,
    });
    const content = useMemo(() => {
        var _a;
        return String((_a = textAnnotation.text) === null || _a === void 0 ? void 0 : _a.__$$text) || parseBpmn20Drools10MetaData(textAnnotation).get("elementname");
    }, [textAnnotation]);
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className}`, children: _jsx(TextAnnotationNodeSvg, { ...nodeDimensions, x: 0, y: 0 }) }), _jsx(PositionalNodeHandles, { isTargeted: isTargeted && isValidConnectionTarget, nodeId: id }), _jsxs("div", { ref: ref, className: `xyflow-react-kie-diagram--node kie-bpmn-editor--text-annotation-node ${className}`, tabIndex: -1, onDoubleClick: triggerEditing, onKeyDown: triggerEditingIfEnter, "data-nodehref": id, "data-nodelabel": String(textAnnotation.text), children: [_jsx(InfoNodePanel, { isVisible: !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                            bpmnEditorStoreApi.setState((state) => {
                                state.propertiesPanel.isOpen = true;
                            });
                        }, [bpmnEditorStoreApi]) }), _jsx(EditableNodeLabel, { id: id, name: content, isEditing: isEditingLabel, setEditing: setEditingLabel, position: getNodeLabelPosition({ nodeType: type }), value: content, onChange: setText, validate: () => true, shouldCommitOnBlur: true, fontCssProperties: { ...fontCssProperties, zIndex: 2000 } }), shouldActLikeHovered && (_jsx(NodeResizerHandle, { nodeType: type, nodeId: id, nodeShapeIndex: shapeIndex, MIN_NODE_SIZES: MIN_NODE_SIZES })), _jsx(OutgoingStuffNodePanel, { nodeMapping: bpmnNodesOutgoingStuffNodePanelMapping, edgeMapping: bpmnEdgesOutgoingStuffNodePanelMapping, nodeHref: id, isVisible: !isTargeted && shouldActLikeHovered, nodeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.textAnnotation].nodes, edgeTypes: BPMN_OUTGOING_STRUCTURE[NODE_TYPES.textAnnotation].edges })] })] }));
}, propsHaveSameValuesDeep);
export const UnknownNode = React.memo(({ data: { shape, shapeIndex }, selected, dragging, zIndex, type, id }) => {
    const renderCount = useRef(0);
    renderCount.current++;
    const ref = useRef(null);
    const isHovered = useIsHovered(ref);
    const isResizing = useNodeResizing(id);
    const shouldActLikeHovered = useBpmnEditorStore((s) => (isHovered || isResizing) && s.xyFlowReactKieDiagram.draggingNodes.length === 0);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { isTargeted, isValidConnectionTarget } = useConnectionTargetStatus(id, shouldActLikeHovered);
    const className = useNodeClassName(isValidConnectionTarget, id, NODE_TYPES, EDGE_TYPES);
    const nodeDimensions = useNodeDimensions({
        nodeType: type,
        shape,
        MIN_NODE_SIZES,
    });
    return (_jsxs(_Fragment, { children: [_jsx("svg", { className: `xyflow-react-kie-diagram--node-shape ${className}`, children: _jsx(UnknownNodeSvg, { ...nodeDimensions, x: 0, y: 0 }) }), _jsx(RF.Handle, { id: "unknown", type: "source", style: { opacity: 0 }, position: RF.Position.Top }, "unknown"), _jsxs("div", { ref: ref, className: `xyflow-react-kie-diagram--node kie-bpmn-editor--unknown-node ${className}`, tabIndex: -1, "data-nodehref": id, children: [_jsx(InfoNodePanel, { isVisible: !isTargeted && shouldActLikeHovered, onClick: useCallback(() => {
                            bpmnEditorStoreApi.setState((state) => {
                                state.propertiesPanel.isOpen = true;
                            });
                        }, [bpmnEditorStoreApi]) }), _jsx(EditableNodeLabel, { id: id, name: undefined, position: getNodeLabelPosition({ nodeType: type }), isEditing: false, setEditing: () => { }, value: `? `, onChange: () => { }, skipValidation: false, validate: useCallback((value) => true, []), shouldCommitOnBlur: true })] })] }));
}, propsHaveSameValuesDeep);
export function useActivityIcons(activity) {
    return useMemo(() => {
        var _a, _b;
        const icons = [];
        if (activity.__$$element === "adHocSubProcess") {
            icons.push(ActivityNodeMarker.AdHocSubProcess);
        }
        if (activity["@_isForCompensation"]) {
            icons.push(ActivityNodeMarker.Compensation);
        }
        if (((_a = activity.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics") {
            icons.push(activity.loopCharacteristics["@_isSequential"]
                ? ActivityNodeMarker.MultiInstanceSequential
                : ActivityNodeMarker.MultiInstanceParallel);
        }
        if (((_b = activity.loopCharacteristics) === null || _b === void 0 ? void 0 : _b.__$$element) === "standardLoopCharacteristics") {
            icons.push(ActivityNodeMarker.Loop);
        }
        if (activity.__$$element === "callActivity") {
            icons.push(ActivityNodeMarker.Collapsed);
        }
        return icons;
    }, [activity]);
}
export function NodeLabelAtTheBottom({ children }) {
    return (_jsx("div", { style: {
            fontSize: "0.8em",
            marginTop: "10px",
            borderRadius: "5px",
            padding: "5px",
            backgroundColor: "rgba(0,0,0,0.02)",
            border: "1px solid rgba(0,0,0,0.2)",
            boxShadow: "rgba(0, 0, 0, 0.4) 2px 2px 6px",
            backdropFilter: "blur(4px)",
            textAlign: "center",
            width: "calc(100% + 20px)",
            marginLeft: "-10px",
        }, children: children }));
}
//# sourceMappingURL=Nodes.js.map