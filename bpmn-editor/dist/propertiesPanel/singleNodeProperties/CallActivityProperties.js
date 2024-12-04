import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { BidirectionalAssignmentsFormSection } from "../assignments/AssignmentsFormSection";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { CallActivityIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { CalledElementSelector } from "../calledElementSelector/CalledElementSelector";
import { MultiInstanceProperties } from "../multiInstance/MultiInstanceProperties";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { MultiInstanceCheckbox } from "../multiInstanceCheckbox/MultiInstanceCheckbox";
export function CallActivityProperties({ callActivity, }) {
    var _a, _b, _c, _d;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: callActivity["@_name"] || "Call activity", icon: _jsx(CallActivityIcon, {}), children: [_jsx(NameDocumentationAndId, { element: callActivity }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(CalledElementSelector, { element: callActivity }), _jsx(FormGroup, { fieldId: "kie-bpmn-editor--properties-panel--call-activity--independent", children: _jsx(Checkbox, { label: "Independent", id: "kie-bpmn-editor--properties-panel--call-activity--independent", name: "is-independent", "aria-label": "Independent", isChecked: (_a = callActivity["@_drools:independent"]) !== null && _a !== void 0 ? _a : false, onChange: (checked) => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element }) => {
                                        if (element["@_id"] === callActivity["@_id"] && element.__$$element === callActivity.__$$element) {
                                            element["@_drools:independent"] = checked;
                                        }
                                    });
                                });
                            } }) }), !(callActivity["@_drools:independent"] === true) && (_jsx(FormGroup, { fieldId: "kie-bpmn-editor--properties-panel--call-activity--abort-parent", children: _jsx(Checkbox, { label: "Abort parent", id: "kie-bpmn-editor--properties-panel--call-activity--abort-parent", name: "should-abort-parent", "aria-label": "Abort parent", isChecked: ((_b = parseBpmn20Drools10MetaData(callActivity).get("customAbortParent")) !== null && _b !== void 0 ? _b : "true") === "true", onChange: (checked) => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        if (e["@_id"] === callActivity["@_id"] && e.__$$element === callActivity.__$$element) {
                                            setBpmn20Drools10MetaData(e, "customAbortParent", `${checked}`);
                                        }
                                    });
                                });
                            } }) })), _jsx(FormGroup, { fieldId: "kie-bpmn-editor--properties-panel--call-activity--wait-for-completion", children: _jsx(Checkbox, { label: "Wait for completion", id: "kie-bpmn-editor--properties-panel--call-activity--wait-for-completion", name: "should-wait-for-completion", "aria-label": "Wait for completion", isChecked: (_c = callActivity["@_drools:waitForCompletion"]) !== null && _c !== void 0 ? _c : true, onChange: (checked) => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        if (e["@_id"] === callActivity["@_id"] && e.__$$element === callActivity.__$$element) {
                                            e["@_drools:waitForCompletion"] = checked;
                                        }
                                    });
                                });
                            } }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: callActivity }), _jsx(AsyncCheckbox, { element: callActivity }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(MultiInstanceCheckbox, { element: callActivity }), ((_d = callActivity.loopCharacteristics) === null || _d === void 0 ? void 0 : _d.__$$element) === "multiInstanceLoopCharacteristics" && (_jsx(MultiInstanceProperties, { element: callActivity }))] }), _jsx(BidirectionalAssignmentsFormSection, { element: callActivity }), _jsx(OnEntryAndExitScriptsFormSection, { element: callActivity })] }));
}
//# sourceMappingURL=CallActivityProperties.js.map