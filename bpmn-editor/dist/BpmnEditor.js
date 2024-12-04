import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "@patternfly/react-core/dist/styles/base.css";
import "reactflow/dist/style.css";
import { Drawer, DrawerContent, DrawerContentBody } from "@patternfly/react-core/dist/js/components/Drawer";
import { original } from "immer";
import * as React from "react";
import { useCallback, useImperativeHandle, useMemo, useRef } from "react";
import * as ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import * as RF from "reactflow";
import { BpmnEditorContextProvider, useBpmnEditor } from "./BpmnEditorContext";
import { BpmnEditorErrorFallback } from "./BpmnEditorErrorFallback";
import { BpmnDiagram } from "./diagram/BpmnDiagram";
import { BpmnVersionLabel } from "./diagram/BpmnVersionLabel";
import { BpmnEditorExternalModelsContextProvider } from "./externalModels/BpmnEditorExternalModelsContext";
import { normalize } from "./normalization/normalize";
import { INITIAL_COMPUTED_CACHE } from "./store/initialComputedCache";
import { ComputedStateCache } from "@kie-tools/xyflow-react-kie-diagram/dist/store/ComputedStateCache";
import { XyFlowReactKieDiagramStoreApiContext } from "@kie-tools/xyflow-react-kie-diagram/dist/store/Store";
import { createBpmnEditorStore, getDefaultStaticState } from "./store/Store";
import { BpmnEditorStoreApiContext, useBpmnEditorStore, useBpmnEditorStoreApi, } from "./store/StoreContext";
import { BpmnDiagramSvg } from "./svg/BpmnDiagramSvg";
import { useStateAsItWasBeforeConditionBecameTrue } from "@kie-tools/xyflow-react-kie-diagram/dist/reactExt/useStateAsItWasBeforeConditionBecameTrue";
import { useEffectAfterFirstRender } from "@kie-tools/xyflow-react-kie-diagram/dist/reactExt/useEffectAfterFirstRender";
import { CommandsContextProvider, useCommands } from "./commands/CommandsContextProvider";
import { PropertiesPanel } from "./propertiesPanel/PropertiesPanel";
import "@kie-tools/xyflow-react-kie-diagram/dist/patternfly-customizations.css";
import "@kie-tools/xyflow-react-kie-diagram/dist/xyflow-customizations.css";
import "./BpmnEditor.css";
const ON_MODEL_CHANGE_DEBOUNCE_TIME_IN_MS = 500;
const SVG_PADDING = 20;
export const BpmnEditorInternal = ({ model, originalVersion, onModelChange, onModelDebounceStateChanged, forwardRef, }) => {
    const isPropertiesPanelOpen = useBpmnEditorStore((s) => s.propertiesPanel.isOpen);
    const bpmn = useBpmnEditorStore((s) => s.bpmn);
    const isDiagramEditingInProgress = useBpmnEditorStore((s) => s.computed(s).isDiagramEditingInProgress());
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const { commandsRef } = useCommands();
    const { bpmnModelBeforeEditingRef, bpmnEditorRootElementRef } = useBpmnEditor();
    const diagramRef = useRef(null);
    const diagramContainerRef = useRef(null);
    useImperativeHandle(forwardRef, () => ({
        reset: (model) => {
            const state = bpmnEditorStoreApi.getState();
            return state.dispatch(state).reset(normalize(model));
        },
        getDiagramSvg: async () => {
            var _a, _b, _c, _d;
            const nodes = (_b = (_a = diagramRef.current) === null || _a === void 0 ? void 0 : _a.getReactFlowInstance()) === null || _b === void 0 ? void 0 : _b.getNodes();
            const edges = (_d = (_c = diagramRef.current) === null || _c === void 0 ? void 0 : _c.getReactFlowInstance()) === null || _d === void 0 ? void 0 : _d.getEdges();
            if (!nodes || !edges) {
                return undefined;
            }
            const bounds = RF.getNodesBounds(nodes);
            const state = bpmnEditorStoreApi.getState();
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", bounds.width + SVG_PADDING * 2 + "");
            svg.setAttribute("height", bounds.height + SVG_PADDING * 5 + "");
            ReactDOM.render(_jsx("g", { transform: `translate(${-bounds.x + SVG_PADDING} ${-bounds.y + SVG_PADDING})`, children: _jsx(BpmnDiagramSvg, { nodes: nodes, edges: edges, snapGrid: state.xyFlowReactKieDiagram.snapGrid }) }), svg);
            return new XMLSerializer().serializeToString(svg);
        },
        getCommands: () => commandsRef.current,
    }), [bpmnEditorStoreApi, commandsRef]);
    useEffectAfterFirstRender(() => {
        bpmnEditorStoreApi.setState((state) => {
            if (model === original(state.bpmn.model)) {
                return;
            }
            state.bpmn.model = normalize(model);
            bpmnModelBeforeEditingRef.current = state.bpmn.model;
        });
    }, [bpmnEditorStoreApi, model]);
    useStateAsItWasBeforeConditionBecameTrue(bpmn.model, isDiagramEditingInProgress, useCallback((prev) => (bpmnModelBeforeEditingRef.current = prev), [bpmnModelBeforeEditingRef]));
    useEffectAfterFirstRender(() => {
        if (isDiagramEditingInProgress) {
            return;
        }
        onModelDebounceStateChanged === null || onModelDebounceStateChanged === void 0 ? void 0 : onModelDebounceStateChanged(false);
        const timeout = setTimeout(() => {
            if (model === bpmn.model) {
                return;
            }
            onModelDebounceStateChanged === null || onModelDebounceStateChanged === void 0 ? void 0 : onModelDebounceStateChanged(true);
            console.debug("BPMN EDITOR: Model changed!");
            onModelChange === null || onModelChange === void 0 ? void 0 : onModelChange(bpmn.model);
        }, ON_MODEL_CHANGE_DEBOUNCE_TIME_IN_MS);
        return () => {
            clearTimeout(timeout);
        };
    }, [isDiagramEditingInProgress, onModelChange, bpmn.model]);
    const propertiesPanel = useMemo(() => _jsx(PropertiesPanel, {}), []);
    return (_jsx("div", { ref: bpmnEditorRootElementRef, className: "kie-bpmn-editor--root", children: _jsx(Drawer, { isExpanded: isPropertiesPanelOpen, isInline: true, position: "right", children: _jsx(DrawerContent, { panelContent: propertiesPanel, children: _jsx(DrawerContentBody, { children: _jsxs("div", { className: "kie-bpmn-editor--diagram-container", ref: diagramContainerRef, "data-testid": "kie-bpmn-editor--diagram-container", children: [originalVersion && _jsx(BpmnVersionLabel, { version: originalVersion }), _jsx(BpmnDiagram, { diagramRef: diagramRef, container: diagramContainerRef })] }) }) }) }) }));
};
export const BpmnEditor = React.forwardRef((props, ref) => {
    const store = useMemo(() => createBpmnEditorStore(props.model, new ComputedStateCache(INITIAL_COMPUTED_CACHE)), []);
    const storeRef = React.useRef(store);
    const resetState = useCallback(({ args }) => {
        var _a;
        (_a = storeRef.current) === null || _a === void 0 ? void 0 : _a.setState((state) => {
            state.diagram = getDefaultStaticState().diagram;
            state.bpmn.model = args[0];
        });
    }, []);
    return (_jsx(BpmnEditorContextProvider, { ...props, children: _jsx(ErrorBoundary, { FallbackComponent: BpmnEditorErrorFallback, onReset: resetState, children: _jsx(BpmnEditorExternalModelsContextProvider, { ...props, children: _jsx(BpmnEditorStoreApiContext.Provider, { value: storeRef.current, children: _jsx(XyFlowReactKieDiagramStoreApiContext.Provider, { value: storeRef.current, children: _jsx(CommandsContextProvider, { children: _jsx(BpmnEditorInternal, { forwardRef: ref, ...props }) }) }) }) }) }) }));
});
//# sourceMappingURL=BpmnEditor.js.map