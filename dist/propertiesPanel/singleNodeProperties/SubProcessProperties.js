import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { SubProcessIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { VariablesFormSection } from "../variables/VariablesFormSection";
import { MultiInstanceProperties } from "../multiInstance/MultiInstanceProperties";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
export function SubProcessProperties({ subProcess, }) {
    var _a;
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: subProcess["@_name"] || "Sub-process", icon: _jsx(SubProcessIcon, { variant: "other" }), children: [_jsx(NameDocumentationAndId, { element: subProcess }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: subProcess }), _jsx(AsyncCheckbox, { element: subProcess }), ((_a = subProcess.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics" && (_jsxs(_Fragment, { children: [_jsx(Divider, { inset: { default: "insetXs" } }), _jsx(MultiInstanceProperties, { element: subProcess })] }))] }), _jsx(VariablesFormSection, { p: subProcess }), _jsx(OnEntryAndExitScriptsFormSection, { element: subProcess })] }));
}
//# sourceMappingURL=SubProcessProperties.js.map