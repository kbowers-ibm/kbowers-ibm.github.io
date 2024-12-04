import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { OutputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { StartEventIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function StartEventProperties({ startEvent, }) {
    var _a, _b;
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: startEvent["@_name"] || "Start event", icon: _jsx(StartEventIcon, { variant: (_b = (_a = startEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element }), children: [_jsx(NameDocumentationAndId, { element: startEvent }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(EventDefinitionProperties, { event: startEvent })] }), _jsx(OutputOnlyAssociationFormSection, { element: startEvent })] }));
}
//# sourceMappingURL=StartEventProperties.js.map