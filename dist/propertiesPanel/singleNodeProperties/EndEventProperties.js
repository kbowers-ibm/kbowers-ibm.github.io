import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { InputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { EventDefinitionIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { NODE_COLORS } from "../../diagram/nodes/NodeSvgs";
export function EndEventProperties({ endEvent, }) {
    var _a, _b;
    const foregroundColor = NODE_COLORS.endEvent.foreground;
    const backgroundColor = NODE_COLORS.endEvent.background;
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: endEvent["@_name"] || "End event", icon: _jsx(EventDefinitionIcon, { variant: (_b = (_a = endEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element, filled: true, fill: backgroundColor, stroke: foregroundColor }), children: [_jsx(NameDocumentationAndId, { element: endEvent }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(EventDefinitionProperties, { event: endEvent })] }), _jsx(InputOnlyAssociationFormSection, { element: endEvent })] }));
}
//# sourceMappingURL=EndEventProperties.js.map