import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import * as RF from "reactflow";
import { BPMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE, buildClipboardFromDiagram, getClipboard, } from "../clipboard/Clipboard";
import { useCommands } from "../commands/CommandsContextProvider";
import { useBpmnEditorStoreApi } from "../store/StoreContext";
import { DEFAULT_VIEWPORT } from "@kie-tools/xyflow-react-kie-diagram/dist/diagram/XyFlowReactKieDiagram";
import { getBounds } from "@kie-tools/xyflow-react-kie-diagram/dist/maths/DcMaths";
export function BpmnDiagramCommands(props) {
    const xyFlowStoreApi = RF.useStoreApi();
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { commandsRef } = useCommands();
    const xyFlow = RF.useReactFlow();
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.cancelAction = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Canceling action...");
            xyFlowStoreApi.setState((xyFlowState) => {
                var _a, _b;
                if (xyFlowState.connectionNodeId) {
                    xyFlowState.cancelConnection();
                    bpmnEditorStoreApi.setState((state) => {
                        state.xyFlowReactKieDiagram.ongoingConnection = undefined;
                    });
                }
                else {
                    (_b = (_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.blur) === null || _b === void 0 ? void 0 : _b.call(_a);
                }
                return xyFlowState;
            });
        };
    }, [bpmnEditorStoreApi, commandsRef, xyFlowStoreApi]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.resetPosition = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Reseting position...");
            xyFlow.setViewport(DEFAULT_VIEWPORT, { duration: 200 });
        };
    }, [commandsRef, xyFlow]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.focusOnSelection = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Focusing on selected bounds...");
            const selectedNodes = xyFlow.getNodes().filter((s) => s.selected);
            if (selectedNodes.length <= 0) {
                return;
            }
            const bounds = getBounds({
                nodes: selectedNodes,
                padding: 100,
            });
            xyFlow.fitBounds({
                x: bounds["@_x"],
                y: bounds["@_y"],
                width: bounds["@_width"],
                height: bounds["@_height"],
            }, { duration: 200 });
        };
    }, [commandsRef, xyFlow]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.cut = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Cutting selected nodes...");
            const { clipboard, copiedEdgesById, danglingEdgesById, copiedNodesById } = buildClipboardFromDiagram(xyFlowStoreApi.getState(), bpmnEditorStoreApi.getState());
            navigator.clipboard.writeText(JSON.stringify(clipboard)).then(() => {
                bpmnEditorStoreApi.setState((state) => {
                });
            });
        };
    }, [bpmnEditorStoreApi, commandsRef, xyFlowStoreApi]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.copy = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Copying selected nodes...");
            const { clipboard } = buildClipboardFromDiagram(xyFlowStoreApi.getState(), bpmnEditorStoreApi.getState());
            navigator.clipboard.writeText(JSON.stringify(clipboard));
        };
    }, [bpmnEditorStoreApi, commandsRef, xyFlowStoreApi]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.paste = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Pasting nodes...");
            navigator.clipboard.readText().then((text) => {
                const clipboard = getClipboard(text, BPMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE);
                if (!clipboard) {
                    return;
                }
            });
        };
    }, [bpmnEditorStoreApi, commandsRef]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.selectAll = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Selecting/Deselecting nodes...");
            const allNodeIds = xyFlowStoreApi
                .getState()
                .getNodes()
                .map((s) => s.id);
            const allEdgeIds = xyFlowStoreApi.getState().edges.map((s) => s.id);
            bpmnEditorStoreApi.setState((state) => {
                const allSelectedNodesSet = new Set(state.xyFlowReactKieDiagram._selectedNodes);
                const allSelectedEdgesSet = new Set(state.xyFlowReactKieDiagram._selectedEdges);
                if (allNodeIds.every((id) => allSelectedNodesSet.has(id) && allEdgeIds.every((id) => allSelectedEdgesSet.has(id)))) {
                    state.xyFlowReactKieDiagram._selectedNodes = [];
                    state.xyFlowReactKieDiagram._selectedEdges = [];
                }
                else {
                    state.xyFlowReactKieDiagram._selectedNodes = allNodeIds;
                    state.xyFlowReactKieDiagram._selectedEdges = allEdgeIds;
                }
            });
        };
    }, [bpmnEditorStoreApi, commandsRef, xyFlowStoreApi]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.createGroup = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Grouping nodes...");
            const selectedNodes = xyFlow.getNodes().filter((s) => s.selected);
            if (selectedNodes.length <= 0) {
                return;
            }
            bpmnEditorStoreApi.setState((state) => {
            });
        };
    }, [bpmnEditorStoreApi, commandsRef, xyFlow]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.toggleHierarchyHighlight = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Toggle hierarchy highlights...");
            bpmnEditorStoreApi.setState((state) => {
                state.diagram.overlays.enableNodeHierarchyHighlight = !state.diagram.overlays.enableNodeHierarchyHighlight;
            });
        };
    }, [bpmnEditorStoreApi, commandsRef]);
    useEffect(() => {
        if (!commandsRef.current) {
            return;
        }
        commandsRef.current.togglePropertiesPanel = async () => {
            console.debug("BPMN DIAGRAM: COMMANDS: Toggle properties panel...");
            bpmnEditorStoreApi.setState((state) => {
                state.propertiesPanel.isOpen = !state.propertiesPanel.isOpen;
            });
        };
    }, [bpmnEditorStoreApi, commandsRef]);
    return _jsx(_Fragment, {});
}
//# sourceMappingURL=BpmnDiagramCommands.js.map