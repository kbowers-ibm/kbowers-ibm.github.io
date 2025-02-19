import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { InputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { EventDefinitionIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { NODE_COLORS } from "../../diagram/nodes/NodeSvgs";
export function IntermediateThrowEventProperties({ intermediateThrowEvent, }) {
    var _a, _b;
    const foregroundColor = NODE_COLORS.intermediateThrowEvent.foreground;
    const backgroundColor = NODE_COLORS.intermediateThrowEvent.background;
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: intermediateThrowEvent["@_name"] || "Intermediate throw event", icon: _jsx(EventDefinitionIcon, { variant: (_b = (_a = intermediateThrowEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element, filled: true, stroke: foregroundColor, fill: backgroundColor }), children: [_jsx(NameDocumentationAndId, { element: intermediateThrowEvent }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(EventDefinitionProperties, { event: intermediateThrowEvent })] }), _jsx(InputOnlyAssociationFormSection, { element: intermediateThrowEvent })] }));
}
//# sourceMappingURL=IntermediateThrowEventProperties.js.map