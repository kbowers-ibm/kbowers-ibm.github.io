import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from "@patternfly/react-core/dist/js/components/Switch";
import { Form, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { Slider } from "@patternfly/react-core/dist/js/components/Slider";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
import { useLayoutEffect, useRef } from "react";
const MIN_SNAP = 5;
const MAX_SNAP = 50;
const SNAP_STEP = 5;
const BOTTOM_MARGIN = 10;
export function OverlaysPanel({ availableHeight }) {
    const snapGrid = useBpmnEditorStore((s) => s.xyFlowReactKieDiagram.snapGrid);
    const diagram = useBpmnEditorStore((s) => s.diagram);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const overlayPanelContainer = useRef(null);
    useLayoutEffect(() => {
        if (overlayPanelContainer.current && availableHeight) {
            const bounds = overlayPanelContainer.current.getBoundingClientRect();
            const currentHeight = bounds.height;
            const yPos = bounds.y;
            if (currentHeight + yPos >= availableHeight) {
                overlayPanelContainer.current.style.height = availableHeight - BOTTOM_MARGIN + "px";
                overlayPanelContainer.current.style.overflowY = "scroll";
            }
            else {
                overlayPanelContainer.current.style.overflowY = "visible";
            }
        }
    });
    return (_jsxs("div", { ref: overlayPanelContainer, children: [_jsxs(Form, { onKeyDown: (e) => e.stopPropagation(), children: [_jsx(FormGroup, { label: "Snapping", children: _jsx(Switch, { "aria-label": "Snapping", isChecked: snapGrid.isEnabled, onChange: (newValue) => bpmnEditorStoreApi.setState((state) => {
                                state.xyFlowReactKieDiagram.snapGrid.isEnabled = newValue;
                            }) }) }), _jsx(FormGroup, { label: "Horizontal", children: _jsx(Slider, { "data-testid": "kie-tools--bpmn-editor--horizontal-snapping-control", className: "kie-bpmn-editor--snap-slider", isDisabled: !snapGrid.isEnabled, value: snapGrid.x, min: MIN_SNAP, max: MAX_SNAP, isInputVisible: true, inputValue: snapGrid.x, step: SNAP_STEP, showTicks: true, hasTooltipOverThumb: true, onChange: (newSliderValue, newInputValue) => bpmnEditorStoreApi.setState((state) => {
                                state.xyFlowReactKieDiagram.snapGrid.x = Math.min(MAX_SNAP, Math.max(MIN_SNAP, newInputValue !== null && newInputValue !== void 0 ? newInputValue : newSliderValue));
                            }) }) }), _jsx(FormGroup, { label: "Vertical", children: _jsx(Slider, { "data-testid": "kie-tools--bpmn-editor--vertical-snapping-control", className: "kie-bpmn-editor--snap-slider", isDisabled: !snapGrid.isEnabled, value: snapGrid.y, min: MIN_SNAP, max: MAX_SNAP, isInputVisible: true, inputValue: snapGrid.y, step: SNAP_STEP, showTicks: true, hasTooltipOverThumb: true, onChange: (newSliderValue, newInputValue) => bpmnEditorStoreApi.setState((state) => {
                                state.xyFlowReactKieDiagram.snapGrid.y = Math.min(MAX_SNAP, Math.max(MIN_SNAP, newInputValue !== null && newInputValue !== void 0 ? newInputValue : newSliderValue));
                            }) }) })] }), _jsx("br", {}), _jsx(Divider, { inset: { default: "insetMd" } }), _jsx("br", {}), _jsxs(Form, { onKeyDown: (e) => e.stopPropagation(), children: [_jsx(FormGroup, { label: "Highlight selected node(s) hierarchy", children: _jsx(Switch, { "aria-label": "Highlight selected node(s) hierarchy", isChecked: diagram.overlays.enableNodeHierarchyHighlight, onChange: (newValue) => bpmnEditorStoreApi.setState((state) => {
                                state.diagram.overlays.enableNodeHierarchyHighlight = newValue;
                            }) }) }), _jsx(FormGroup, { label: "Enable styles", children: _jsx(Switch, { "aria-label": "Enable styles", isChecked: diagram.overlays.enableCustomNodeStyles, onChange: (newValue) => bpmnEditorStoreApi.setState((state) => {
                                state.diagram.overlays.enableCustomNodeStyles = newValue;
                            }) }) })] })] }));
}
//# sourceMappingURL=OverlaysPanel.js.map