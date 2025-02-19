import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import "./MultiInstanceCheckbox.css";
export function MultiInstanceCheckbox({ element }) {
    var _a;
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(FormGroup, { fieldId: "kie-bpmn-editor--properties-panel--multiple-instance-checkbox", children: _jsx(Checkbox, { label: "Multiple instance", id: "kie-bpmn-editor--properties-panel--multiple-instance-checkbox", name: "is-multiple-instance", "aria-label": "Multiple instance", isDisabled: isReadOnly, isChecked: ((_a = element.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics", onChange: (checked) => {
                bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                        if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                            if (checked) {
                                e.loopCharacteristics = {
                                    "@_id": generateUuid(),
                                    __$$element: "multiInstanceLoopCharacteristics",
                                };
                            }
                            else {
                                e.loopCharacteristics = undefined;
                            }
                        }
                    });
                });
            } }) }));
}
//# sourceMappingURL=MultiInstanceCheckbox.js.map