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
import { setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { useState } from "react";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import RedoIcon from "@patternfly/react-icons/dist/js/icons/redo-icon";
import BellIcon from "@patternfly/react-icons/dist/js/icons/bell-icon";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import EditIcon from "@patternfly/react-icons/dist/js/icons/edit-icon";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox/Checkbox";
import { Notifications } from "../notifications/Notifications";
export function UserTaskProperties({ userTask, }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
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
    const priorityInputX = "PriorityInputX";
    const contentInputX = "ContentInputX";
    const subjectInputX = "CommentInputX";
    const taskNameInputX = "TaskNameInputX";
    const descriptionInputX = "DescriptionInputX";
    const skippableInputX = "SkippableInputX";
    const createdByInputX = "CreatedByInputX";
    const groupIdInputX = "GroupIdInputX";
    const item = "Item";
    const handleChange = (fieldName, newValue) => {
        const valueAsString = String(newValue);
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a, _b, _c, _d, _e, _f;
                var _g, _h;
                if (e["@_id"] === (userTask === null || userTask === void 0 ? void 0 : userTask["@_id"]) && e.__$$element === userTask.__$$element) {
                    setBpmn20Drools10MetaData(e, "elementname", e["@_name"] || "");
                    (_a = e.ioSpecification) !== null && _a !== void 0 ? _a : (e.ioSpecification = {
                        "@_id": "",
                        inputSet: [],
                        outputSet: [],
                        dataInput: [],
                    });
                    (_b = (_g = e.ioSpecification.inputSet)[0]) !== null && _b !== void 0 ? _b : (_g[0] = {
                        "@_id": "",
                        dataInputRefs: [],
                    });
                    (_c = (_h = e.ioSpecification).dataInput) !== null && _c !== void 0 ? _c : (_h.dataInput = []);
                    let dataInput = e.ioSpecification.dataInput.find((input) => input["@_name"] === fieldName);
                    if (!dataInput) {
                        dataInput = {
                            "@_id": `${e["@_id"]}_${fieldName}InputX`,
                            "@_drools:dtype": "Object",
                            "@_itemSubjectRef": `_${e["@_id"]}_${fieldName}InputXItem`,
                            "@_name": fieldName,
                        };
                        e.ioSpecification.dataInput.push(dataInput);
                    }
                    e.ioSpecification.inputSet[0].dataInputRefs = e.ioSpecification.dataInput.map((input) => ({
                        __$$text: input["@_id"],
                    }));
                    let dataInputAssociation = (_d = e.dataInputAssociation) === null || _d === void 0 ? void 0 : _d.find((association) => association.targetRef.__$$text === dataInput["@_id"]);
                    if (!dataInputAssociation) {
                        dataInputAssociation = {
                            "@_id": `${e["@_id"]}_dataInputAssociation_${fieldName}`,
                            targetRef: { __$$text: dataInput["@_id"] },
                            assignment: [
                                {
                                    "@_id": `${e["@_id"]}_assignment_${fieldName}`,
                                    from: {
                                        "@_id": `${e["@_id"]}`,
                                        __$$text: valueAsString,
                                    },
                                    to: { "@_id": e["@_id"], __$$text: `${e["@_id"]}_to_${fieldName}InputXItem` },
                                },
                            ],
                        };
                        (_e = e.dataInputAssociation) !== null && _e !== void 0 ? _e : (e.dataInputAssociation = []);
                        e.dataInputAssociation.push(dataInputAssociation);
                    }
                    else {
                        if ((_f = dataInputAssociation.assignment) === null || _f === void 0 ? void 0 : _f[0]) {
                            dataInputAssociation.assignment[0].from.__$$text = valueAsString;
                        }
                    }
                }
            });
        });
    };
    function setValue(fieldName) {
        var _a, _b, _c, _d;
        return (((_d = (_c = (_b = (_a = userTask === null || userTask === void 0 ? void 0 : userTask.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.find((association) => { var _a; return (_a = association.assignment) === null || _a === void 0 ? void 0 : _a.some((a) => a.from.__$$text && association.targetRef.__$$text.includes(fieldName)); })) === null || _b === void 0 ? void 0 : _b.assignment) === null || _c === void 0 ? void 0 : _c.find((a) => a.from.__$$text)) === null || _d === void 0 ? void 0 : _d.from.__$$text) || "");
    }
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: userTask["@_name"] || "User task", icon: _jsx(TaskIcon, { variant: userTask.__$$element, isIcon: true }), children: [_jsx(NameDocumentationAndId, { element: userTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Task Name", children: _jsx(TextArea, { "aria-label": "Task Name", type: "text", isDisabled: settings.isReadOnly, value: setValue(taskNameInputX), onChange: (newTaskName) => handleChange("TaskName", newTaskName), placeholder: "Enter task name...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Subject", children: _jsx(TextArea, { "aria-label": "Subject", type: "text", isDisabled: settings.isReadOnly, value: setValue(subjectInputX), onChange: (newSubject) => handleChange("Comment", newSubject), placeholder: "Enter subject...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Content", children: _jsx(TextArea, { "aria-label": "Content", type: "text", isDisabled: settings.isReadOnly, value: setValue(contentInputX), onChange: (newContent) => handleChange("Content", newContent), placeholder: "Enter content...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { label: "Task Priority", children: _jsx(TextArea, { "aria-label": "Task Priority", type: "text", isDisabled: settings.isReadOnly, value: setValue(priorityInputX), onChange: (newPriority) => handleChange("Priority", newPriority), placeholder: "Enter priority...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Description", children: _jsx(TextArea, { "aria-label": "Description", type: "text", isDisabled: settings.isReadOnly, value: setValue(descriptionInputX), onChange: (newDescription) => handleChange("Description", newDescription), placeholder: "Enter description...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { children: _jsx(Checkbox, { label: "Skippable", "aria-label": "Skippable", id: "kie-bpmn-editor--properties-panel--skippable-checkbox", isDisabled: settings.isReadOnly, isChecked: setValue(skippableInputX) === "true" ? true : false, onChange: (newSkippable) => handleChange("Skippable", newSkippable) }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { label: "Actors", children: _jsx(TextArea, { "aria-label": "Potential Owner", type: "text", isDisabled: settings.isReadOnly, value: ((_d = (_c = (_b = (_a = userTask === null || userTask === void 0 ? void 0 : userTask.resourceRole) === null || _a === void 0 ? void 0 : _a.find((role) => role.__$$element === "potentialOwner")) === null || _b === void 0 ? void 0 : _b.resourceAssignmentExpression) === null || _c === void 0 ? void 0 : _c.expression) === null || _d === void 0 ? void 0 : _d["__$$element"]) === "formalExpression"
                                ? (_g = (_f = (_e = userTask.resourceRole.find((role) => role.__$$element === "potentialOwner")) === null || _e === void 0 ? void 0 : _e.resourceAssignmentExpression) === null || _f === void 0 ? void 0 : _f.expression.__$$text) !== null && _g !== void 0 ? _g : ""
                                : undefined, onChange: (newValue) => bpmnEditorStoreApi.setState((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    var _a, _b, _c;
                                    var _d, _e;
                                    if (e["@_id"] === (userTask === null || userTask === void 0 ? void 0 : userTask["@_id"]) && e.__$$element === userTask.__$$element) {
                                        (_a = e.resourceRole) !== null && _a !== void 0 ? _a : (e.resourceRole = []);
                                        (_b = (_d = e.resourceRole)[0]) !== null && _b !== void 0 ? _b : (_d[0] = {
                                            "@_id": generateUuid(),
                                            __$$element: "potentialOwner",
                                        });
                                        (_c = (_e = e.resourceRole[0]).resourceAssignmentExpression) !== null && _c !== void 0 ? _c : (_e.resourceAssignmentExpression = {
                                            "@_id": generateUuid(),
                                            expression: {
                                                "@_id": generateUuid(),
                                                __$$element: "formalExpression",
                                            },
                                        });
                                        e.resourceRole[0].resourceAssignmentExpression.expression.__$$text = newValue;
                                    }
                                });
                            }), placeholder: "Enter Actors...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { label: "Groups", children: _jsx(TextArea, { "aria-label": "Groups", type: "text", isDisabled: settings.isReadOnly, value: setValue(groupIdInputX), onChange: (newGroups) => handleChange("GroupId", newGroups), placeholder: "Enter groups...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(FormGroup, { label: "Created by", children: _jsx(TextArea, { "aria-label": "Created by", type: "text", isDisabled: settings.isReadOnly, value: setValue(createdByInputX), onChange: (newCreatedBy) => handleChange("CreatedBy", newCreatedBy), placeholder: "Enter creator...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: userTask }), _jsx(AsyncCheckbox, { element: userTask }), _jsx(AdhocAutostartCheckbox, { element: userTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(MultiInstanceCheckbox, { element: userTask }), ((_h = userTask.loopCharacteristics) === null || _h === void 0 ? void 0 : _h.__$$element) === "multiInstanceLoopCharacteristics" && (_jsx(MultiInstanceProperties, { element: userTask }))] }), _jsx(BidirectionalAssignmentsFormSection, { element: userTask }), _jsx(Reassignments, { isOpen: showReassignmentsModal, onClose: closeReassignmentsModal, element: userTask }), _jsx(Notifications, { isOpen: showNotificationsModal, onClose: closeNotificationsModal, element: userTask }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx(RedoIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Reassignments", toogleSectionExpanded: () => setShowReassignmentsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowReassignmentsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(EditIcon, {}) }) }) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx(BellIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Notifications", toogleSectionExpanded: () => setShowNotificationsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowNotificationsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(EditIcon, {}) }) }) }), _jsx(OnEntryAndExitScriptsFormSection, { element: userTask })] }));
}
//# sourceMappingURL=UserTaskProperties.js.map