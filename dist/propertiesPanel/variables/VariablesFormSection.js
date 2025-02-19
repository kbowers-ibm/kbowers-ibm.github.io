import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Variables } from "./Variables";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { DomainIcon } from "@patternfly/react-icons/dist/js/icons/domain-icon";
import { useState } from "react";
export function VariablesFormSection({ p }) {
    var _a, _b;
    const [isVariablesSectionExpanded, setVariablesSectionExpanded] = useState(true);
    const variablesCount = (_b = (_a = p === null || p === void 0 ? void 0 : p.property) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    return (_jsx(_Fragment, { children: _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isVariablesSectionExpanded, toogleSectionExpanded: () => setVariablesSectionExpanded((prev) => !prev), icon: _jsx(DomainIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Variables" + (variablesCount > 0 ? ` (${variablesCount})` : "") }), children: isVariablesSectionExpanded && (_jsx(_Fragment, { children: _jsx(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: _jsx(Variables, { p: p }) }) })) }) }));
}
//# sourceMappingURL=VariablesFormSection.js.map