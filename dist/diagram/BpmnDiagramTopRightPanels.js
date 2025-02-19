import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Popover } from "@patternfly/react-core/dist/js/components/Popover";
import { InfoIcon } from "@patternfly/react-icons/dist/js/icons/info-icon";
import { VirtualMachineIcon } from "@patternfly/react-icons/dist/js/icons/virtual-machine-icon";
import { useCallback, useLayoutEffect } from "react";
import * as RF from "reactflow";
import { OverlaysPanel } from "../overlaysPanel/OverlaysPanel";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
const AREA_ABOVE_OVERLAYS_PANEL = 120;
export function TopRightCornerPanels({ availableHeight }) {
    const diagram = useBpmnEditorStore((s) => s.diagram);
    const propertiesPanel = useBpmnEditorStore((s) => s.propertiesPanel);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const togglePropertiesPanel = useCallback(() => {
        bpmnEditorStoreApi.setState((state) => {
            state.propertiesPanel.isOpen = !state.propertiesPanel.isOpen;
        });
    }, [bpmnEditorStoreApi]);
    const toggleOverlaysPanel = useCallback(() => {
        bpmnEditorStoreApi.setState((state) => {
            state.diagram.overlaysPanel.isOpen = !state.diagram.overlaysPanel.isOpen;
        });
    }, [bpmnEditorStoreApi]);
    useLayoutEffect(() => {
        bpmnEditorStoreApi.setState((state) => {
            if (state.diagram.overlaysPanel.isOpen) {
                setTimeout(() => {
                    bpmnEditorStoreApi.setState((state) => {
                        state.diagram.overlaysPanel.isOpen = true;
                    });
                }, 300);
            }
            state.diagram.overlaysPanel.isOpen = false;
        });
    }, [bpmnEditorStoreApi, propertiesPanel.isOpen]);
    return (_jsx(_Fragment, { children: _jsxs(RF.Panel, { position: "top-right", style: { display: "flex" }, children: [_jsx("aside", { className: "kie-bpmn-editor--overlays-panel-toggle", children: _jsx(Popover, { className: "kie-bpmn-editor--overlay-panel-popover", "aria-label": "Overlays Panel", position: "bottom-end", enableFlip: false, flipBehavior: ["bottom-end"], hideOnOutsideClick: false, isVisible: diagram.overlaysPanel.isOpen, bodyContent: _jsx(OverlaysPanel, { availableHeight: (availableHeight !== null && availableHeight !== void 0 ? availableHeight : 0) - AREA_ABOVE_OVERLAYS_PANEL }), children: _jsx("button", { className: "kie-bpmn-editor--overlays-panel-toggle-button", onClick: toggleOverlaysPanel, title: "Overlays", children: _jsx(VirtualMachineIcon, { size: "sm" }) }) }, `${diagram.overlaysPanel.isOpen}`) }), !propertiesPanel.isOpen && (_jsx("aside", { className: "kie-bpmn-editor--properties-panel-toggle", children: _jsx("button", { className: "kie-bpmn-editor--properties-panel-toggle-button", onClick: togglePropertiesPanel, title: "Properties panel", children: _jsx(InfoIcon, { size: "sm" }) }) }))] }) }));
}
//# sourceMappingURL=BpmnDiagramTopRightPanels.js.map