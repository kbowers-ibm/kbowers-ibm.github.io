import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { OutputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { IntermediateCatchEventIcon } from "../../diagram/nodes/NodeIcons";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function BoundaryEventProperties({ boundaryEvent, }) {
    var _a, _b;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: boundaryEvent["@_name"] || "Boundary event", icon: _jsx(IntermediateCatchEventIcon, { variant: (_b = (_a = boundaryEvent.eventDefinition) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.__$$element }), children: [_jsx(NameDocumentationAndId, { element: boundaryEvent }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(EventDefinitionProperties, { event: boundaryEvent })] }), _jsx(OutputOnlyAssociationFormSection, { element: boundaryEvent })] }));
}
//# sourceMappingURL=BoundaryEventProperties.js.map