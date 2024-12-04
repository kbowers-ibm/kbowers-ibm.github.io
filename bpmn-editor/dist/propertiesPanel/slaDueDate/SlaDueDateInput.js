import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
export function SlaDueDateInput({ element }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    return (_jsx(_Fragment, { children: _jsx(FormGroup, { label: "SLA Due Date", children: _jsx(TextInput, { "aria-label": "SLA Due Date", type: "text", isDisabled: isReadOnly, placeholder: "Enter a date...", value: parseBpmn20Drools10MetaData(element).get("customSLADueDate"), onChange: (newSlaDueDate) => bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    if (!element || element["@_id"] === process["@_id"]) {
                        setBpmn20Drools10MetaData(process, "customSLADueDate", newSlaDueDate);
                    }
                    else {
                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                            if (e["@_id"] === element["@_id"]) {
                                setBpmn20Drools10MetaData(process, "customSLADueDate", newSlaDueDate);
                            }
                        });
                    }
                }) }) }) }));
}
//# sourceMappingURL=SlaDueDateInput.js.map