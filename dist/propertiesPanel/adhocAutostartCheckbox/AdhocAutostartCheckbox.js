import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import "./AdhocAutostartCheckbox.css";
export function AdhocAutostartCheckbox({ element }) {
    var _a;
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(FormGroup, { fieldId: "kie-bpmn-editor--properties-panel--adhoc-auto-start", children: _jsx(Checkbox, { label: "Ad-hoc auto-start", id: "kie-bpmn-editor--properties-panel--adhoc-auto-start", name: "is-adhoc-auto-start", "aria-label": "Ad-hoc auto-start", isDisabled: isReadOnly, isChecked: ((_a = parseBpmn20Drools10MetaData(element).get("customAutoStart")) !== null && _a !== void 0 ? _a : "false") === "true", onChange: (checked) => {
                bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                        if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                            setBpmn20Drools10MetaData(e, "customAutoStart", `${checked}`);
                        }
                    });
                });
            } }) }));
}
//# sourceMappingURL=AdhocAutostartCheckbox.js.map