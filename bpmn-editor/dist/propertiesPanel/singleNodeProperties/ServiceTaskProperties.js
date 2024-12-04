import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { BidirectionalAssignmentsFormSection } from "../assignments/AssignmentsFormSection";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { TaskIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { AdhocAutostartCheckbox } from "../adhocAutostartCheckbox/AdhocAutostartCheckbox";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { MultiInstanceProperties } from "../multiInstance/MultiInstanceProperties";
import { MultiInstanceCheckbox } from "../multiInstanceCheckbox/MultiInstanceCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { SERVICE_TASK_IMPLEMENTATIONS, } from "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { ToggleGroup, ToggleGroupItem } from "@patternfly/react-core/dist/js/components/ToggleGroup";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
export function ServiceTaskProperties({ serviceTask, }) {
    var _a, _b, _c;
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: serviceTask["@_name"] || "Service task", icon: _jsx(TaskIcon, { variant: serviceTask.__$$element }), children: [_jsx(NameDocumentationAndId, { element: serviceTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Implementation", children: _jsxs(ToggleGroup, { "aria-label": "Implementation", children: [_jsx(ToggleGroupItem, { text: "Java", isDisabled: isReadOnly, isSelected: ((_a = serviceTask["@_implementation"]) !== null && _a !== void 0 ? _a : serviceTask["@_drools:serviceimplementation"]) ===
                                        SERVICE_TASK_IMPLEMENTATIONS.java, onChange: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                if (e["@_id"] === serviceTask["@_id"] && e.__$$element === serviceTask.__$$element) {
                                                    e["@_implementation"] = SERVICE_TASK_IMPLEMENTATIONS.java;
                                                    e["@_drools:serviceimplementation"] = SERVICE_TASK_IMPLEMENTATIONS.java;
                                                }
                                            });
                                        });
                                    } }), _jsx(ToggleGroupItem, { text: "Web service", isDisabled: isReadOnly, isSelected: ((_b = serviceTask["@_implementation"]) !== null && _b !== void 0 ? _b : serviceTask["@_drools:serviceimplementation"]) ===
                                        SERVICE_TASK_IMPLEMENTATIONS.webService, onChange: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                if (e["@_id"] === serviceTask["@_id"] && e.__$$element === serviceTask.__$$element) {
                                                    e["@_implementation"] = SERVICE_TASK_IMPLEMENTATIONS.webService;
                                                    e["@_drools:serviceimplementation"] = SERVICE_TASK_IMPLEMENTATIONS.webService;
                                                }
                                            });
                                        });
                                    } })] }) }), _jsx(FormGroup, { label: "Interface", children: _jsx(TextInput, { "aria-label": "Interface", type: "text", isDisabled: isReadOnly, placeholder: "Enter an interface...", value: serviceTask["@_drools:serviceinterface"], onChange: (newInterface) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === serviceTask["@_id"]) {
                                        serviceTask["@_drools:serviceinterface"] = newInterface;
                                    }
                                });
                            }) }) }), _jsx(FormGroup, { label: "Operation", children: _jsx(TextInput, { "aria-label": "Operation", type: "text", isDisabled: isReadOnly, placeholder: "Enter an operation...", value: serviceTask["@_drools:serviceoperation"], onChange: (newOperation) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === serviceTask["@_id"]) {
                                        serviceTask["@_drools:serviceoperation"] = newOperation;
                                    }
                                });
                            }) }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: serviceTask }), _jsx(AsyncCheckbox, { element: serviceTask }), _jsx(AdhocAutostartCheckbox, { element: serviceTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(MultiInstanceCheckbox, { element: serviceTask }), ((_c = serviceTask.loopCharacteristics) === null || _c === void 0 ? void 0 : _c.__$$element) === "multiInstanceLoopCharacteristics" && (_jsx(MultiInstanceProperties, { element: serviceTask }))] }), _jsx(BidirectionalAssignmentsFormSection, { element: serviceTask }), _jsx(OnEntryAndExitScriptsFormSection, { element: serviceTask })] }));
}
//# sourceMappingURL=ServiceTaskProperties.js.map