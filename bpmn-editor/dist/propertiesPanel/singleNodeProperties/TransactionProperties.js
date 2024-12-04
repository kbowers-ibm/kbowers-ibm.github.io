import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { SubProcessIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { VariablesFormSection } from "../variables/VariablesFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
export function TransactionProperties({ transaction, }) {
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: transaction["@_name"] || "Transaction", icon: _jsx(SubProcessIcon, { variant: "transaction" }), children: [_jsx(NameDocumentationAndId, { element: transaction }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: transaction }), _jsx(AsyncCheckbox, { element: transaction })] }), _jsx(VariablesFormSection, { p: transaction }), _jsx(OnEntryAndExitScriptsFormSection, { element: transaction })] }));
}
//# sourceMappingURL=TransactionProperties.js.map