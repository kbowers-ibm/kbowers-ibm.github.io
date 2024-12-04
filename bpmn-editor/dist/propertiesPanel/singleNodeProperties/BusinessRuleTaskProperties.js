import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { BidirectionalAssignmentsFormSection } from "../assignments/AssignmentsFormSection";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { TaskIcon } from "../../diagram/nodes/NodeIcons";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { AdhocAutostartCheckbox } from "../adhocAutostartCheckbox/AdhocAutostartCheckbox";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { BUSINESS_RULE_TASK_IMPLEMENTATIONS } from "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { ToggleGroup } from "@patternfly/react-core/dist/js/components/ToggleGroup/ToggleGroup";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { ToggleGroupItem } from "@patternfly/react-core/dist/js/components/ToggleGroup";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { FormSelect, FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
export function BusinessRuleTaskProperties({ businessRuleTask, }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: businessRuleTask["@_name"] || "Business rule task", icon: _jsx(TaskIcon, {}), children: [_jsx(NameDocumentationAndId, { element: businessRuleTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Implementation", children: _jsxs(ToggleGroup, { "aria-label": "Implementation", children: [_jsx(ToggleGroupItem, { text: "DRL", isDisabled: isReadOnly, isSelected: businessRuleTask["@_implementation"] === BUSINESS_RULE_TASK_IMPLEMENTATIONS.drools, onChange: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                if (e["@_id"] === businessRuleTask["@_id"] && e.__$$element === businessRuleTask.__$$element) {
                                                    e["@_implementation"] = BUSINESS_RULE_TASK_IMPLEMENTATIONS.drools;
                                                }
                                            });
                                        });
                                    } }), _jsx(ToggleGroupItem, { text: "DMN", isDisabled: isReadOnly, isSelected: businessRuleTask["@_implementation"] === BUSINESS_RULE_TASK_IMPLEMENTATIONS.dmn, onChange: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                if (e["@_id"] === businessRuleTask["@_id"] && e.__$$element === businessRuleTask.__$$element) {
                                                    e["@_implementation"] = BUSINESS_RULE_TASK_IMPLEMENTATIONS.dmn;
                                                }
                                            });
                                        });
                                    } })] }) }), businessRuleTask["@_implementation"] === BUSINESS_RULE_TASK_IMPLEMENTATIONS.drools && (_jsx(_Fragment, { children: _jsx(FormGroup, { label: "Rule flow group", children: _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- None --" }) }) }) })), " ", businessRuleTask["@_implementation"] === BUSINESS_RULE_TASK_IMPLEMENTATIONS.dmn && (_jsxs(_Fragment, { children: [_jsx(FormGroup, { label: "DMN File", children: _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- None --" }) }) }), _jsx(FormGroup, { label: "DMN Namespace", children: _jsx(TextInput, { "aria-label": "DMN Namespace", type: "text", isDisabled: isReadOnly, placeholder: "Enter a Namespace...", value: "", onChange: (newNamespace) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                            if (e["@_id"] === businessRuleTask["@_id"]) {
                                                console.log(newNamespace);
                                            }
                                        });
                                    }) }) }), _jsx(FormGroup, { label: "DMN Name", children: _jsx(TextInput, { "aria-label": "DMN Name", type: "text", isDisabled: isReadOnly, placeholder: "Enter a Name...", value: "", onChange: (newName) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                            if (e["@_id"] === businessRuleTask["@_id"]) {
                                                console.log(newName);
                                            }
                                        });
                                    }) }) })] })), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: businessRuleTask }), _jsx(AsyncCheckbox, { element: businessRuleTask }), _jsx(AdhocAutostartCheckbox, { element: businessRuleTask }), _jsx(Divider, { inset: { default: "insetXs" } })] }), _jsx(BidirectionalAssignmentsFormSection, { element: businessRuleTask }), _jsx(OnEntryAndExitScriptsFormSection, { element: businessRuleTask })] }));
}
//# sourceMappingURL=BusinessRuleTaskProperties.js.map