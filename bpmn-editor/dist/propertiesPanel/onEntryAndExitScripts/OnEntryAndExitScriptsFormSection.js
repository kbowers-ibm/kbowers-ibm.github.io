import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { useState } from "react";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { CodeIcon } from "@patternfly/react-icons/dist/js/icons/code-icon";
import { CodeInput } from "../codeInput/CodeInput";
import "./OnEntryAndExitScriptsFormSection.css";
export function OnEntryAndExitScriptsFormSection({ element }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [isExpanded, setExpanded] = useState(false);
    return (_jsx(_Fragment, { children: _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isExpanded, toogleSectionExpanded: () => setExpanded((prev) => !prev), icon: _jsx(CodeIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "onEntry / onExit" }), children: isExpanded && (_jsx(_Fragment, { children: _jsxs(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: [_jsx(CodeInput, { label: "onEntry", languages: ["Java"], value: "", onChange: (newCode) => {
                            } }), _jsx("br", {}), _jsx(CodeInput, { label: "onExit", languages: ["Java"], value: "", onChange: (newCode) => {
                            } })] }) })) }) }));
}
//# sourceMappingURL=OnEntryAndExitScriptsFormSection.js.map