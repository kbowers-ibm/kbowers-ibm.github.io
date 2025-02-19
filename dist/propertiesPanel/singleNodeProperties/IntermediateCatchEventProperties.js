import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { OutputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { EventDefinitionIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { NODE_COLORS } from "../../diagram/nodes/NodeSvgs";
export function IntermediateCatchEventProperties({ intermediateCatchEvent, }) {
    var _a, _b;
    const foregroundColor = NODE_COLORS.intermediateCatchEvent.foreground;
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: intermediateCatchEvent["@_name"] || "Intermediate catch event", icon: _jsx(EventDefinitionIcon, { variant: (_b = (_a = intermediateCatchEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element, filled: false, stroke: foregroundColor }), children: [_jsx(NameDocumentationAndId, { element: intermediateCatchEvent }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(EventDefinitionProperties, { event: intermediateCatchEvent })] }), _jsx(OutputOnlyAssociationFormSection, { element: intermediateCatchEvent })] }));
}
//# sourceMappingURL=IntermediateCatchEventProperties.js.map