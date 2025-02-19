import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import "./EscalationCodeSelector.css";
import { InteractiveDropdown } from "../dropdown/InteractiveDropdown";
export function EscalationCodeSelector({ element }) {
    var _a, _b;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const currentValue = ((_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "escalationEventDefinition")) === null || _b === void 0 ? void 0 : _b["@_drools:esccode"]) || "";
    const handleValueChange = (newValue) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a;
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    const escalationEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "escalationEventDefinition");
                    if (escalationEventDefinition) {
                        escalationEventDefinition["@_drools:esccode"] = newValue;
                        escalationEventDefinition["@_escalationRef"] = e["@_id"];
                    }
                }
            });
        });
    };
    return (_jsx(FormSection, { children: _jsx(FormGroup, { label: "Escalation Code", children: _jsx(InteractiveDropdown, { value: currentValue, onChange: handleValueChange, items: [], placeholder: "Select Escalation Code" }) }) }));
}
//# sourceMappingURL=EscalationCodeSelector.js.map