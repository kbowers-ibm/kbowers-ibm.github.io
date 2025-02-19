import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useMemo, useRef } from "react";
import { ProcessAutomationIcon } from "@patternfly/react-icons/dist/js/icons/process-automation-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import "./NodeMorphingPanel.css";
import { useBpmnEditorStore } from "../../../store/StoreContext";
export function NodeMorphingPanel({ isToggleVisible, isExpanded, setExpanded, actions, selectedActionId, primaryColor, secondaryColor, disabledActionIds, }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const ref = useRef(null);
    const buttonStyle = useMemo(() => ({ background: secondaryColor, color: primaryColor }), [primaryColor, secondaryColor]);
    const badgeStyle = useMemo(() => ({ background: primaryColor }), [primaryColor]);
    const toggle = React.useCallback(() => {
        setExpanded((prev) => !prev);
    }, [setExpanded]);
    return (_jsxs(_Fragment, { children: [!isReadOnly && isToggleVisible && (_jsx(_Fragment, { children: _jsx("div", { className: `kie-bpmn-editor--node-morphing-panel-toggle`, children: _jsx("div", { className: `${isExpanded ? "expanded" : ""}`, onClick: toggle, children: _jsx(_Fragment, { children: isExpanded ? _jsx(TimesIcon, {}) : _jsx(ProcessAutomationIcon, {}) }) }) }) })), !isReadOnly && isToggleVisible && isExpanded && (_jsx("div", { ref: ref, className: "kie-bpmn-editor--node-morphing-panel", children: _jsx("div", { children: actions.map(({ id, key, action, icon, title }) => {
                        const disabled = disabledActionIds.has(id) || selectedActionId === id;
                        return (_jsxs("div", { onClick: disabled ? undefined : action, title: title, style: buttonStyle, className: `${selectedActionId === id ? "selected" : ""} ${disabled ? "disabled" : ""}`, children: [icon, !disabled && _jsx("div", { style: badgeStyle, children: key })] }, id));
                    }) }) }))] }));
}
//# sourceMappingURL=NodeMorphingPanel.js.map