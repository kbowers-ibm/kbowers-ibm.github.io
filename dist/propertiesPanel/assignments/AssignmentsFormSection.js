import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { Form, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { EditIcon } from "@patternfly/react-icons/dist/js/icons/edit-icon";
import { useEffect, useMemo, useState } from "react";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal/Modal";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import "./AssignmentsFormSection.css";
import { EmptyState, EmptyStateBody } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { EyeIcon } from "@patternfly/react-icons/dist/js/icons/eye-icon";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { setBpmn20Drools10MetaData } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea/TextArea";
import { FormSelect } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelect";
import { FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelectOption";
export const blacklistedNames = new Set([
    "TaskName",
    "NotStartedReassign",
    "NotCompletedReassign",
    "Skippable",
    "NotStartedNotify",
    "NotCompletedNotify",
]);
export function AssignmentsFormSection({ sectionLabel, children, }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [showAssignmentsModal, setShowAssignmentsModal] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx("div", { style: { marginLeft: "12px", width: "16px", height: "36px", lineHeight: "36px" }, children: "⇆" }), title: "Assignments", toogleSectionExpanded: () => setShowAssignmentsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, onClick: () => setShowAssignmentsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: isReadOnly ? _jsx(EyeIcon, {}) : _jsx(EditIcon, {}) }) }) }), _jsx(Modal, { title: "Assignments", className: "kie-bpmn-editor--assignments--modal", "aria-labelledby": "Assignments", variant: ModalVariant.large, isOpen: showAssignmentsModal, onClose: () => setShowAssignmentsModal(false), children: children })] }));
}
export function BidirectionalAssignmentsFormSection({ element }) {
    return (_jsxs(AssignmentsFormSection, { children: [_jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "50%" }, children: _jsx(AssignmentList, { section: "input", element: element }) }), _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "50%" }, children: _jsx(AssignmentList, { section: "output", element: element }) })] }));
}
export function InputOnlyAssociationFormSection({ element }) {
    const inputCount = element.dataInput
        ? element.dataInput.filter((input) => { var _a; return !blacklistedNames.has((_a = input["@_name"]) !== null && _a !== void 0 ? _a : ""); }).length
        : 0;
    return (_jsx(AssignmentsFormSection, { children: _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "100%" }, children: _jsx(AssignmentList, { section: "input", element: element }) }) }));
}
export function OutputOnlyAssociationFormSection({ element }) {
    var _a, _b;
    const outputCount = (_b = (_a = element.dataOutputAssociation) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const sectionLabel = useMemo(() => {
        if (outputCount > 0) {
            return ` (out: ${outputCount})`;
        }
        else {
            return ` (out: -)`;
        }
    }, [outputCount]);
    return (_jsx(AssignmentsFormSection, { sectionLabel: sectionLabel, children: _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "100%" }, children: _jsx(AssignmentList, { section: "output", element: element }) }) }));
}
export function AssignmentList({ section, element, }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const [inputAssignments, setInputAssignments] = useState([]);
    const [outputAssignments, setOutputAssignments] = useState([]);
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const dataType = [
        { value: "Custom", label: "Custom..." },
        { value: "Boolean", label: "Boolean" },
        { value: "Float", label: "Float" },
        { value: "Integer", label: "Integer" },
        { value: "Object", label: "Object" },
        { value: "String", label: "String" },
    ];
    const removeAssignment = (index) => {
        if (section === "input") {
            setInputAssignments(inputAssignments.filter((_, i) => i !== index));
        }
        else {
            setOutputAssignments(outputAssignments.filter((_, i) => i !== index));
        }
    };
    const handleInputChange = (index, field, value) => {
        if (section === "input") {
            setInputAssignments((prevInputAssignments) => {
                const updatedInputAssignments = [...prevInputAssignments];
                updatedInputAssignments[index] = { ...updatedInputAssignments[index], [field]: [value] };
                return updatedInputAssignments;
            });
        }
        else {
            setOutputAssignments((prevOutputAssignments) => {
                const updatedOutputAssignments = [...prevOutputAssignments];
                updatedOutputAssignments[index] = { ...updatedOutputAssignments[index], [field]: [value] };
                return updatedOutputAssignments;
            });
        }
    };
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const { title, associationsPropName, lastColumnLabel, entryTitle } = useMemo(() => {
        if (section === "input") {
            return {
                title: "Inputs",
                entryTitle: "Input",
                associationsPropName: "dataInputAssociation",
                lastColumnLabel: "Source",
            };
        }
        else {
            return {
                title: "Outputs",
                entryTitle: "Output",
                associationsPropName: "dataOutputAssociation",
                lastColumnLabel: "Target",
            };
        }
    }, [section]);
    useEffect(() => {
        var _a, _b, _c, _d, _e;
        if (element) {
            if (element.__$$element === "callActivity" ||
                element.__$$element === "businessRuleTask" ||
                element.__$$element === "userTask" ||
                element.__$$element === "serviceTask" ||
                element.__$$element === "scriptTask") {
                if (section === "input") {
                    const extractedInputAssignments = (_a = element === null || element === void 0 ? void 0 : element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.map((association) => {
                        var _a, _b, _c;
                        const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                        if (assignment) {
                            const value = assignment.from.__$$text || "";
                            const dataInput = (_c = (_b = element.ioSpecification) === null || _b === void 0 ? void 0 : _b.dataInput) === null || _c === void 0 ? void 0 : _c.find((input) => { var _a; return input["@_id"] === ((_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text); });
                            const name = (dataInput === null || dataInput === void 0 ? void 0 : dataInput["@_name"]) || "";
                            const dataType = (dataInput === null || dataInput === void 0 ? void 0 : dataInput["@_drools:dtype"]) || "";
                            return {
                                name: name,
                                dataType: dataType,
                                value: value,
                            };
                        }
                    }).filter((item) => item !== null);
                    setInputAssignments(extractedInputAssignments || []);
                }
                if (section === "output") {
                    const extractedOutputAssignments = (_c = (_b = element === null || element === void 0 ? void 0 : element.dataOutputAssociation) === null || _b === void 0 ? void 0 : _b.filter((association) => { var _a; return !((_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text.includes(blacklistedNames.toString())); })) === null || _c === void 0 ? void 0 : _c.map((association) => {
                        var _a, _b, _c;
                        const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                        if (assignment) {
                            const value = assignment.to.__$$text || "";
                            const dataOutput = (_c = (_b = element.ioSpecification) === null || _b === void 0 ? void 0 : _b.dataOutput) === null || _c === void 0 ? void 0 : _c.find((output) => { var _a; return output["@_id"] === ((_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text); });
                            const name = (dataOutput === null || dataOutput === void 0 ? void 0 : dataOutput["@_name"]) || "";
                            const dataType = (dataOutput === null || dataOutput === void 0 ? void 0 : dataOutput["@_drools:dtype"]) || "";
                            return {
                                name: name,
                                dataType: dataType,
                                value: value,
                            };
                        }
                    }).filter((item) => item !== null);
                    setOutputAssignments(extractedOutputAssignments || []);
                }
            }
            else if (element.__$$element === "endEvent" || element.__$$element === "intermediateThrowEvent") {
                const extractedInputAssignments = (_d = element === null || element === void 0 ? void 0 : element.dataInputAssociation) === null || _d === void 0 ? void 0 : _d.map((association) => {
                    var _a, _b;
                    const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                    if (assignment) {
                        const value = assignment.from.__$$text || "";
                        const dataInput = (_b = element.dataInput) === null || _b === void 0 ? void 0 : _b.find((input) => { var _a; return input["@_id"] === ((_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text); });
                        const name = (dataInput === null || dataInput === void 0 ? void 0 : dataInput["@_name"]) || "";
                        const dataType = (dataInput === null || dataInput === void 0 ? void 0 : dataInput["@_drools:dtype"]) || "";
                        return {
                            name: name,
                            dataType: dataType,
                            value: value,
                        };
                    }
                }).filter((item) => item !== null);
                setInputAssignments(extractedInputAssignments || []);
            }
            else if (element.__$$element === "startEvent" ||
                element.__$$element === "intermediateCatchEvent" ||
                element.__$$element === "boundaryEvent") {
                const extractedOutputAssignments = (_e = element === null || element === void 0 ? void 0 : element.dataOutputAssociation) === null || _e === void 0 ? void 0 : _e.map((association) => {
                    var _a, _b;
                    const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                    if (assignment) {
                        const value = assignment.to.__$$text || "";
                        const dataOutput = (_b = element.dataOutput) === null || _b === void 0 ? void 0 : _b.find((output) => { var _a; return output["@_id"] === ((_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text); });
                        const name = (dataOutput === null || dataOutput === void 0 ? void 0 : dataOutput["@_name"]) || "";
                        const dataType = (dataOutput === null || dataOutput === void 0 ? void 0 : dataOutput["@_drools:dtype"]) || "";
                        return {
                            name: name,
                            dataType: dataType,
                            value: value,
                        };
                    }
                }).filter((item) => item !== null);
                setOutputAssignments(extractedOutputAssignments || []);
            }
        }
    }, [element, section]);
    const addAssignment = () => {
        if (section === "input") {
            setInputAssignments([...inputAssignments, { name: "", dataType: "", value: "" }]);
        }
        else {
            setOutputAssignments([...outputAssignments, { name: "", dataType: "", value: "" }]);
        }
    };
    const handleSubmit = () => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    if (element.__$$element === "callActivity" ||
                        element.__$$element === "businessRuleTask" ||
                        element.__$$element === "userTask" ||
                        element.__$$element === "serviceTask" ||
                        element.__$$element === "scriptTask") {
                        handleSubmitForWithAssignments(e);
                    }
                    else if (element.__$$element === "endEvent" || element.__$$element === "intermediateThrowEvent") {
                        handleSubmitForWithInputAssignments(e);
                    }
                    else if (element.__$$element === "startEvent" ||
                        element.__$$element === "intermediateCatchEvent" ||
                        element.__$$element === "boundaryEvent") {
                        handleSubmitForWithOutputAssignments(e);
                    }
                }
            });
        });
    };
    const handleSubmitForWithAssignments = (e) => {
        var _a, _b;
        setBpmn20Drools10MetaData(e, "elementname", e["@_name"] || "");
        if (!e.ioSpecification) {
            e.ioSpecification = {
                "@_id": generateUuid(),
                inputSet: [],
                outputSet: [],
                dataInput: [],
                dataOutput: [],
            };
        }
        (_a = e.dataInputAssociation) !== null && _a !== void 0 ? _a : (e.dataInputAssociation = []);
        (_b = e.dataOutputAssociation) !== null && _b !== void 0 ? _b : (e.dataOutputAssociation = []);
        console.log(section);
        if (section === "input") {
            inputAssignments.forEach((assignment, index) => {
                var _a, _b, _c, _d, _e, _f;
                let dataInput = (_b = (_a = e.ioSpecification) === null || _a === void 0 ? void 0 : _a.dataInput) === null || _b === void 0 ? void 0 : _b[index];
                dataInput = {
                    "@_id": `${e["@_id"]}_${assignment.name}InputX`,
                    "@_drools:dtype": assignment.dataType,
                    "@_itemSubjectRef": `_${e["@_id"]}_${assignment.name}InputXItem`,
                    "@_name": assignment.name,
                };
                (_d = (_c = e.ioSpecification) === null || _c === void 0 ? void 0 : _c.dataInput) === null || _d === void 0 ? void 0 : _d.push(dataInput);
                let dataInputAssociation = (_e = e.dataInputAssociation) === null || _e === void 0 ? void 0 : _e.find((association) => association.targetRef.__$$text === dataInput["@_id"]);
                if (!dataInputAssociation) {
                    dataInputAssociation = {
                        "@_id": `${e["@_id"]}_dataInputAssociation_${assignment.name}`,
                        targetRef: { __$$text: dataInput["@_id"] },
                        assignment: [],
                    };
                    (_f = e.dataInputAssociation) === null || _f === void 0 ? void 0 : _f.push(dataInputAssociation);
                }
                dataInputAssociation.assignment = [
                    {
                        "@_id": `${e["@_id"]}_assignment_${assignment.name}`,
                        from: { "@_id": `${e["@_id"]}`, __$$text: assignment.value },
                        to: { "@_id": dataInput["@_id"], __$$text: dataInput["@_id"] },
                    },
                ];
            });
        }
        else if (section === "output") {
            outputAssignments.forEach((assignment, index) => {
                var _a, _b, _c, _d, _e, _f;
                let dataOutput = (_b = (_a = e.ioSpecification) === null || _a === void 0 ? void 0 : _a.dataOutput) === null || _b === void 0 ? void 0 : _b[index];
                dataOutput = {
                    "@_id": `${e["@_id"]}_${assignment.name}OutputX`,
                    "@_drools:dtype": assignment.dataType,
                    "@_itemSubjectRef": `_${e["@_id"]}_${assignment.name}OutputXItem`,
                    "@_name": assignment.name,
                };
                (_d = (_c = e.ioSpecification) === null || _c === void 0 ? void 0 : _c.dataOutput) === null || _d === void 0 ? void 0 : _d.push(dataOutput);
                let dataOutputAssociation = (_e = e.dataOutputAssociation) === null || _e === void 0 ? void 0 : _e.find((association) => association.targetRef.__$$text === dataOutput["@_id"]);
                if (!dataOutputAssociation) {
                    dataOutputAssociation = {
                        "@_id": `${e["@_id"]}_dataOutputAssociation_${assignment.name}`,
                        targetRef: { __$$text: dataOutput["@_id"] },
                        assignment: [],
                    };
                    (_f = e.dataOutputAssociation) === null || _f === void 0 ? void 0 : _f.push(dataOutputAssociation);
                }
                dataOutputAssociation.assignment = [
                    {
                        "@_id": `${e["@_id"]}_assignment_${assignment.name}`,
                        from: { "@_id": dataOutput["@_id"], __$$text: dataOutput["@_id"] },
                        to: { "@_id": `${e["@_id"]}`, __$$text: assignment.value },
                    },
                ];
            });
        }
    };
    const handleSubmitForWithInputAssignments = (e) => {
        var _a;
        (_a = e.dataInputAssociation) !== null && _a !== void 0 ? _a : (e.dataInputAssociation = []);
        inputAssignments.forEach((assignment, index) => {
            var _a, _b, _c, _d;
            let dataInput = (_a = e.dataInput) === null || _a === void 0 ? void 0 : _a[index];
            dataInput = {
                "@_id": `${e["@_id"]}_${assignment.name}InputX`,
                "@_drools:dtype": assignment.dataType,
                "@_itemSubjectRef": `_${e["@_id"]}_${assignment.name}InputXItem`,
                "@_name": assignment.name,
            };
            (_b = e.dataInput) === null || _b === void 0 ? void 0 : _b.push(dataInput);
            let dataInputAssociation = (_c = e.dataInputAssociation) === null || _c === void 0 ? void 0 : _c.find((association) => association.targetRef.__$$text === dataInput["@_id"]);
            if (!dataInputAssociation) {
                dataInputAssociation = {
                    "@_id": `${e["@_id"]}_dataInputAssociation_${assignment.name}`,
                    targetRef: { __$$text: dataInput["@_id"] },
                    assignment: [],
                };
                (_d = e.dataInputAssociation) === null || _d === void 0 ? void 0 : _d.push(dataInputAssociation);
            }
            dataInputAssociation.assignment = [
                {
                    "@_id": `${e["@_id"]}_assignment_${assignment.name}`,
                    from: { "@_id": `${e["@_id"]}`, __$$text: assignment.value },
                    to: { "@_id": dataInput["@_id"], __$$text: dataInput["@_id"] },
                },
            ];
        });
    };
    const handleSubmitForWithOutputAssignments = (e) => {
        var _a;
        (_a = e.dataOutputAssociation) !== null && _a !== void 0 ? _a : (e.dataOutputAssociation = []);
        outputAssignments.forEach((assignment, index) => {
            var _a, _b, _c, _d;
            let dataOutput = (_a = e.dataOutput) === null || _a === void 0 ? void 0 : _a[index];
            dataOutput = {
                "@_id": `${e["@_id"]}_${assignment.name}OutputX`,
                "@_drools:dtype": assignment.dataType,
                "@_itemSubjectRef": `_${e["@_id"]}_${assignment.name}OutputXItem`,
                "@_name": assignment.name,
            };
            (_b = e.dataOutput) === null || _b === void 0 ? void 0 : _b.push(dataOutput);
            let dataOutputAssociation = (_c = e.dataOutputAssociation) === null || _c === void 0 ? void 0 : _c.find((association) => association.targetRef.__$$text === dataOutput["@_id"]);
            if (!dataOutputAssociation) {
                dataOutputAssociation = {
                    "@_id": `${e["@_id"]}_dataOutputAssociation_${assignment.name}`,
                    targetRef: { __$$text: dataOutput["@_id"] },
                    assignment: [],
                };
                (_d = e.dataOutputAssociation) === null || _d === void 0 ? void 0 : _d.push(dataOutputAssociation);
            }
            dataOutputAssociation.assignment = [
                {
                    "@_id": `${e["@_id"]}_assignment_${assignment.name}`,
                    from: { "@_id": dataOutput["@_id"], __$$text: dataOutput["@_id"] },
                    to: { "@_id": `${e["@_id"]}`, __$$text: assignment.value },
                },
            ];
        });
    };
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const titleComponent = useMemo(() => _jsx(Title, { headingLevel: "h2", children: title }), [title]);
    return (_jsx(_Fragment, { children: ((inputAssignments.length > 0 || outputAssignments.length > 0) && (_jsxs(Form, { children: [_jsxs("div", { style: { position: "sticky", top: "0", backdropFilter: "blur(8px)" }, children: [titleComponent, _jsx(Divider, { style: { margin: "8px 0" }, inset: { default: "insetMd" } }), _jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 5, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Data Type" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: lastColumnLabel }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: _jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addAssignment, children: _jsx(PlusCircleIcon, { color: "var(--pf-c-button--m-primary--BackgroundColor)" }) }) })] }) })] }), section === "input" &&
                    inputAssignments.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--assignment-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 5, children: _jsx(TextArea, { "aria-label": "name", autoFocus: true, style: entryStyle, type: "text", placeholder: "Name...", value: entry.name, onChange: (e) => handleInputChange(i, "name", e) }) }), _jsx(GridItem, { span: 3, children: _jsx(FormSelect, { "aria-label": "data type", type: "text", value: entry.dataType, onChange: (e) => handleInputChange(i, "dataType", e), style: entryStyle, rows: 1, children: dataType.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) }) }), _jsx(GridItem, { span: 3, children: _jsx(TextArea, { "aria-label": "value", style: entryStyle, type: "text", placeholder: `${lastColumnLabel}...`, value: entry.value, onChange: (e) => handleInputChange(i, "value", e) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => removeAssignment(i), children: _jsx(TimesIcon, {}) })) })] }) }, i))), section === "output" &&
                    outputAssignments.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--assignment-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 5, children: _jsx(TextArea, { "aria-label": "name", autoFocus: true, style: entryStyle, type: "text", placeholder: "Name...", value: entry.name, onChange: (e) => handleInputChange(i, "name", e) }) }), _jsx(GridItem, { span: 3, children: _jsx(FormSelect, { "aria-label": "data type", type: "text", value: entry.dataType, onChange: (e) => handleInputChange(i, "dataType", e), style: entryStyle, rows: 1, children: dataType.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) }) }), _jsx(GridItem, { span: 3, children: _jsx(TextArea, { "aria-label": "value", style: entryStyle, type: "text", placeholder: `${lastColumnLabel}...`, value: entry.value, onChange: (e) => handleInputChange(i, "value", e) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => removeAssignment(i), children: _jsx(TimesIcon, {}) })) })] }) }, i))), _jsx("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: "16px", paddingRight: "8px" }, children: _jsx(Button, { variant: "primary", onClick: handleSubmit, isDisabled: isReadOnly || (inputAssignments.length === 0 && outputAssignments.length === 0), children: "Save" }) })] }))) || (_jsxs(_Fragment, { children: [titleComponent, _jsx("div", { className: "kie-bpmn-editor--assignments--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(Title, { headingLevel: "h4", children: isReadOnly ? `No ${entryTitle} assignments` : `No ${entryTitle} assignments yet` }), _jsx(EmptyStateBody, { style: { padding: "0 25%" }, children: `This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible.` }), _jsx(Button, { variant: "primary", onClick: addAssignment, children: `Add ${entryTitle} assignment` })] }) }) })] })) }));
}
//# sourceMappingURL=AssignmentsFormSection.js.map