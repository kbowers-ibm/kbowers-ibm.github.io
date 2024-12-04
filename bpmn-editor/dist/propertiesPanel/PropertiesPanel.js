import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DrawerPanelContent } from "@patternfly/react-core/dist/js/components/Drawer/DrawerPanelContent";
import { DrawerPanelBody } from "@patternfly/react-core/dist/js/components/Drawer/DrawerPanelBody";
import { GlobalProperties } from "./GlobalProperties";
import { MixedNodesAndEdgesProperties } from "./MixedNodesAndEdgesProperties";
import { MultipleEdgesProperties } from "./MultipleEdgesProperties";
import { MultipleNodeProperties } from "./MultipleNodesProperties";
import { SingleEdgeProperties } from "./SingleEdgeProperties";
import { SingleNodeProperties } from "./SingleNodeProperties";
import { useBpmnEditorStore } from "../store/StoreContext";
import "./PropertiesPanel.css";
export function PropertiesPanel() {
    const selectedNodesById = useBpmnEditorStore((s) => s.computed(s).getDiagramData().selectedNodesById);
    const selectedEdgesById = useBpmnEditorStore((s) => s.computed(s).getDiagramData().selectedEdgesById);
    return (_jsx(_Fragment, { children: _jsx(DrawerPanelContent, { "data-testid": "kie-tools--bpmn-editor--properties-panel-container", isResizable: true, minSize: "300px", defaultSize: "500px", onKeyDown: (e) => e.stopPropagation(), children: _jsx(DrawerPanelBody, { children: _jsxs(_Fragment, { children: [selectedEdgesById.size <= 0 && selectedNodesById.size <= 0 && _jsx(GlobalProperties, {}), selectedEdgesById.size <= 0 && selectedNodesById.size === 1 && _jsx(SingleNodeProperties, {}), selectedEdgesById.size <= 0 && selectedNodesById.size > 1 && _jsx(MultipleNodeProperties, {}), selectedEdgesById.size === 1 && selectedNodesById.size <= 0 && _jsx(SingleEdgeProperties, {}), selectedEdgesById.size > 1 && selectedNodesById.size <= 0 && _jsx(MultipleEdgesProperties, {}), selectedEdgesById.size >= 1 && selectedNodesById.size >= 1 && _jsx(MixedNodesAndEdgesProperties, {})] }) }) }) }));
}
//# sourceMappingURL=PropertiesPanel.js.map