import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore } from "../../store/StoreContext";
import "./PropertiesPanelListEmptyState.css";
export function PropertiesPanelListEmptyState() {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    return (_jsx("div", { className: "kie-bpmn-editor--properties-panel-list--empty-state", children: isReadOnly ? "None" : "None yet" }));
}
//# sourceMappingURL=PropertiesPanelListEmptyState.js.map