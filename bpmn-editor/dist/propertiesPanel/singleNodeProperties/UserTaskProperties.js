import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { BidirectionalAssignmentsFormSection } from "../assignments/AssignmentsFormSection";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { TaskIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { MultiInstanceCheckbox } from "../multiInstanceCheckbox/MultiInstanceCheckbox";
import { MultiInstanceProperties } from "../multiInstance/MultiInstanceProperties";
import { AdhocAutostartCheckbox } from "../adhocAutostartCheckbox/AdhocAutostartCheckbox";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea/TextArea";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { Reassignments } from "../reassignments/Reassignments";
import { Notifications } from "../notifications/Notifications";
import { useState } from "react";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import ExternalLinkAltIcon from "@patternfly/react-icons/dist/js/icons/external-link-alt-icon";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import EditIcon from "@patternfly/react-icons/dist/js/icons/edit-icon";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox/Checkbox";
export function UserTaskProperties({ userTask, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const [showReassignmentsModal, setShowReassignmentsModal] = useState(false);
    const closeReassignmentsModal = React.useCallback(() => {
        setShowReassignmentsModal(false);
    }, []);
    const [showNotificationsModal, setShowNotificationsModal] = useState(false);
    const closeNotificationsModal = React.useCallback(() => {
        setShowNotificationsModal(false);
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: userTask["@_name"] || "User task", icon: _jsx(TaskIcon, { variant: userTask.__$$element }), children: [_jsx(NameDocumentationAndId, { element: userTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Task", children: _jsx(TextArea, { "aria-label": "Task Name", type: "text", isDisabled: settings.isReadOnly, value: ((_a = userTask.taskName) === null || _a === void 0 ? void 0 : _a.__$$text) || "", onChange: (newTaskName) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === userTask["@_id"] && e.__$$element === userTask.__$$element) {
                                        e.taskName = { __$$text: newTaskName };
                                    }
                                });
                            }), placeholder: "Enter task name...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Subject", children: _jsx(TextArea, { "aria-label": "Subject", type: "text", isDisabled: settings.isReadOnly, value: (_e = (_d = (_c = (_b = userTask.dataInputAssociation) === null || _b === void 0 ? void 0 : _b[0].assignment) === null || _c === void 0 ? void 0 : _c[0].from) === null || _d === void 0 ? void 0 : _d.__$$text) !== null && _e !== void 0 ? _e : "", onChange: (newsubject) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === userTask["@_id"] && e.__$$element === userTask.__$$element) {
                                    }
                                });
                            }), placeholder: "Enter subject...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Content", children: _jsx(TextArea, { "aria-label": "Content", type: "text", isDisabled: settings.isReadOnly, value: (_g = (_f = userTask.dataInputAssociation) === null || _f === void 0 ? void 0 : _f[0].assignment) === null || _g === void 0 ? void 0 : _g[0].from.__$$text, onChange: (newContent) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    var _a;
                                    if (e["@_id"] === userTask["@_id"] &&
                                        e.__$$element === userTask.__$$element &&
                                        e.dataInputAssociation !== undefined) {
                                        if (((_a = e.dataInputAssociation[0].assignment) === null || _a === void 0 ? void 0 : _a[0]) !== undefined) {
                                            e.dataInputAssociation[0].targetRef = { __$$text: `${e["@_id"]}_ContentInputX` };
                                            e.dataInputAssociation[0].assignment[0].from.__$$text = `![CDATA[${newContent}]]`;
                                            e.dataInputAssociation[0].assignment[0].to.__$$text = `![CDATA[${e["@_id"]}_ContentInputX]]`;
                                        }
                                    }
                                });
                            }), placeholder: "Enter task name...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { label: "Priority", children: _jsx(TextArea, { "aria-label": "Task Name", type: "text", isDisabled: settings.isReadOnly, value: ((_h = userTask.priority) === null || _h === void 0 ? void 0 : _h.__$$text) || "", onChange: (newpriority) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === userTask["@_id"] && e.__$$element === userTask.__$$element) {
                                        e.priority = { __$$text: newpriority };
                                    }
                                });
                            }), placeholder: "Enter priority...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Description", children: _jsx(TextArea, { "aria-label": "Task Name", type: "text", isDisabled: settings.isReadOnly, value: userTask["@_description"], onChange: (newDescription) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === userTask["@_id"] && e.__$$element === userTask.__$$element) {
                                        e["@_description"] = newDescription;
                                    }
                                });
                            }), placeholder: "Enter description...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { children: _jsx(Checkbox, { label: "Skippable", "aria-label": "Skippable", id: "kie-bpmn-editor--properties-panel--skippable-checkbox", isDisabled: settings.isReadOnly, isChecked: userTask["@_skippable"], onChange: (checked) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === userTask["@_id"] && e.__$$element === userTask.__$$element) {
                                        e["@_skippable"] = checked;
                                    }
                                });
                            }) }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Actors" }), _jsx(FormGroup, { label: "Groups" }), _jsx(FormGroup, { label: "Created by" }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(Reassignments, { isOpen: showReassignmentsModal, onClose: closeReassignmentsModal }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx(ExternalLinkAltIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Reassignments", toogleSectionExpanded: () => setShowReassignmentsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowReassignmentsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(EditIcon, {}) }) }) }), _jsx(Notifications, { isOpen: showNotificationsModal, onClose: closeNotificationsModal }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx(ExternalLinkAltIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Notifications", toogleSectionExpanded: () => setShowNotificationsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowNotificationsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(EditIcon, {}) }) }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: userTask }), _jsx(AsyncCheckbox, { element: userTask }), _jsx(AdhocAutostartCheckbox, { element: userTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(MultiInstanceCheckbox, { element: userTask }), ((_j = userTask.loopCharacteristics) === null || _j === void 0 ? void 0 : _j.__$$element) === "multiInstanceLoopCharacteristics" && (_jsx(MultiInstanceProperties, { element: userTask }))] }), _jsx(BidirectionalAssignmentsFormSection, { element: userTask }), _jsx(OnEntryAndExitScriptsFormSection, { element: userTask })] }));
}
//# sourceMappingURL=UserTaskProperties.js.map