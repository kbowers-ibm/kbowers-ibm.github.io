import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { SubProcessIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { VariablesFormSection } from "../variables/VariablesFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
export function EventSubProcessProperties({ eventSubProcess, }) {
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: eventSubProcess["@_name"] || "Event sub-process", icon: _jsx(SubProcessIcon, { variant: "event" }), children: [_jsx(NameDocumentationAndId, { element: eventSubProcess }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: eventSubProcess }), _jsx(AsyncCheckbox, { element: eventSubProcess })] }), _jsx(VariablesFormSection, { p: eventSubProcess })] }));
}
//# sourceMappingURL=EventSubProcessProperties.js.map