import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { FormSelect, FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import "./SignalScopeSelector.css";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
const SignalScope = [
    { value: "default", label: "Default" },
    { value: "processInstance", label: "Process Instance" },
    { value: "project", label: "Project" },
    { value: "external", label: "External" },
];
export function SignalScopeSelector({ element }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    return (_jsx(FormSection, { children: _jsx(FormGroup, { label: "Signal Scope", children: _jsx(FormSelect, { "aria-label": "Signal Scope", type: "text", isDisabled: settings.isReadOnly, value: parseBpmn20Drools10MetaData(element).get("customScope"), onChange: (newSignalScope) => bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                        if (element && e["@_id"] === element["@_id"]) {
                            setBpmn20Drools10MetaData(e, "customScope", newSignalScope);
                        }
                    });
                }), placeholder: "-- None --", style: { resize: "vertical", minHeight: "40px" }, rows: 1, children: SignalScope.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) }) }) }));
}
//# sourceMappingURL=SignalScopeSelector.js.map