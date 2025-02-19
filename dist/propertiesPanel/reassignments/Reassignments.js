import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { EmptyState, EmptyStateBody } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Dropdown, DropdownItem, DropdownToggle } from "@patternfly/react-core/dist/js/components/Dropdown";
import "./Reassignments.css";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { setBpmn20Drools10MetaData } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea/TextArea";
import { FormSelect } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelect";
import { FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelectOption";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { Form } from "@patternfly/react-core/dist/js/components/Form/Form";
function DropdownWithAdd({ items, setItems }) {
    const [isOpen, setIsOpen] = useState(false);
    const [newItem, setNewItem] = useState("");
    const [selectedItem, setSelectedItem] = useState(undefined);
    const handleAddItem = () => {
        if (newItem && !items.includes(newItem)) {
            setItems([...items, newItem]);
            setSelectedItem(newItem);
        }
        setNewItem("");
        setIsOpen(false);
    };
    const handleSelectItem = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };
    return (_jsx(Dropdown, { toggle: _jsx(DropdownToggle, { onToggle: () => setIsOpen(!isOpen), children: selectedItem || "Select or add..." }), isOpen: isOpen, dropdownItems: [
            ...items.map((item) => (_jsx(DropdownItem, { onClick: () => handleSelectItem(item), children: item }, item))),
            _jsx(DropdownItem, { isDisabled: true, children: _jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [_jsx("input", { type: "text", placeholder: "Add new...", value: newItem, onChange: (e) => setNewItem(e.target.value), onKeyDown: (e) => {
                                if (e.key === "Enter")
                                    handleAddItem();
                            }, style: {
                                flex: 1,
                                padding: "4px",
                                borderRadius: "4px",
                            } }), _jsx(Button, { variant: "link", onClick: handleAddItem, isDisabled: newItem.trim() === "", "aria-label": "Add new item", children: "\u2713" })] }) }, "add-new"),
        ] }));
}
export function Reassignments({ isOpen, onClose, element, }) {
    const [reassignments, setReassignments] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const addReassignment = () => {
        setReassignments([
            ...reassignments,
            { users: "", groups: "", type: "NotStartedReassign", period: "", periodUnit: "m" },
        ]);
    };
    const typeOptions = [
        { value: "NotStartedReassign", label: "Not Started" },
        { value: "NotCompletedReassign", label: "Not Completed" },
    ];
    const periodUnits = [
        { value: "m", label: "minutes" },
        { value: "h", label: "hours" },
        { value: "d", label: "days" },
        { value: "M", label: "months" },
        { value: "y", label: "years" },
    ];
    const removeReassignment = (index) => {
        setReassignments(reassignments.filter((_, i) => i !== index));
    };
    const handleInputChange = (index, field, value) => {
        setReassignments((prevReassignments) => {
            const updatedReassignments = [...prevReassignments];
            updatedReassignments[index] = { ...updatedReassignments[index], [field]: value };
            return updatedReassignments;
        });
    };
    useEffect(() => {
        var _a, _b;
        if (isOpen && element) {
            const extractedReassignments = (_b = (_a = element === null || element === void 0 ? void 0 : element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.filter((association) => { var _a; return (_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text.includes("Reassign"); })) === null || _b === void 0 ? void 0 : _b.map((association) => {
                var _a;
                const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                if (assignment) {
                    const reassignmentText = assignment.from.__$$text || "";
                    const usersMatches = [...reassignmentText.matchAll(/users:([^ |]*)/g)];
                    const groupsMatches = [...reassignmentText.matchAll(/groups:([^ \]]*)/g)];
                    const periodMatches = [...reassignmentText.matchAll(/(\d+)([mhdMy])/g)];
                    const users = usersMatches.map((match) => match[1]);
                    const groups = groupsMatches.map((match) => match[1]);
                    const periods = periodMatches.map((match) => parseInt(match[1]));
                    const periodUnits = periodMatches.map((match) => match[2]);
                    const reassignments = [];
                    for (let i = 0; i < users.length; i++) {
                        reassignments.push({
                            users: users[i] || "",
                            groups: groups[i] || "",
                            type: association.targetRef.__$$text.includes("NotStartedReassign")
                                ? "NotStartedReassign"
                                : "NotCompletedReassign",
                            period: periods[i] || "",
                            periodUnit: periodUnits[i] || "m",
                        });
                    }
                    return reassignments;
                }
            }).flat().filter((item) => item !== null);
            setReassignments(extractedReassignments || []);
        }
    }, [isOpen, element]);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const handleSubmit = () => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    setBpmn20Drools10MetaData(e, "elementname", e["@_name"] || "");
                    e.ioSpecification = {
                        "@_id": generateUuid(),
                        inputSet: [{ "@_id": generateUuid(), dataInputRefs: [] }],
                        outputSet: [],
                        dataInput: [],
                    };
                    e.ioSpecification.dataInput = [];
                    e.dataInputAssociation = [];
                    reassignments.forEach((reassignment) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                        let dataInput = (_b = (_a = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _a === void 0 ? void 0 : _a.dataInput) === null || _b === void 0 ? void 0 : _b.find((input) => input["@_name"] === reassignment.type);
                        if (!dataInput) {
                            dataInput = {
                                "@_id": `${e["@_id"]}_${reassignment.type}InputX`,
                                "@_drools:dtype": "Object",
                                "@_itemSubjectRef": `_${e["@_id"]}_${reassignment.type}InputX`,
                                "@_name": reassignment.type,
                            };
                            (_d = (_c = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _c === void 0 ? void 0 : _c.dataInput) === null || _d === void 0 ? void 0 : _d.push(dataInput);
                        }
                        if (!((_g = (_f = (_e = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _e === void 0 ? void 0 : _e.inputSet[0]) === null || _f === void 0 ? void 0 : _f.dataInputRefs) === null || _g === void 0 ? void 0 : _g.some((ref) => ref.__$$text === dataInput["@_id"]))) {
                            (_k = (_j = (_h = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _h === void 0 ? void 0 : _h.inputSet[0]) === null || _j === void 0 ? void 0 : _j.dataInputRefs) === null || _k === void 0 ? void 0 : _k.push({ __$$text: dataInput["@_id"] });
                        }
                        let dataInputAssociation = (_l = e.dataInputAssociation) === null || _l === void 0 ? void 0 : _l.find((association) => association.targetRef.__$$text === dataInput["@_id"]);
                        if (!dataInputAssociation) {
                            dataInputAssociation = {
                                "@_id": `${e["@_id"]}_dataInputAssociation_${reassignment.type}`,
                                targetRef: { __$$text: dataInput["@_id"] },
                                assignment: [],
                            };
                            (_m = e.dataInputAssociation) === null || _m === void 0 ? void 0 : _m.push(dataInputAssociation);
                        }
                        const existingAssignment = (_o = dataInputAssociation === null || dataInputAssociation === void 0 ? void 0 : dataInputAssociation.assignment) === null || _o === void 0 ? void 0 : _o.find((assignment) => assignment["@_id"] === `${e["@_id"]}_assignment_${reassignment.type}`);
                        const newEntry = `users:${reassignment.users} groups:${reassignment.groups} ${reassignment.period}${reassignment.periodUnit}`;
                        if (existingAssignment) {
                            const existingValues = new Set((_q = (_p = existingAssignment === null || existingAssignment === void 0 ? void 0 : existingAssignment.from) === null || _p === void 0 ? void 0 : _p.__$$text) === null || _q === void 0 ? void 0 : _q.split(" "));
                            const newValues = newEntry.split(" ");
                            const uniqueValues = [...existingValues, ...newValues].join(" ");
                            existingAssignment.from.__$$text = uniqueValues;
                        }
                        else {
                            (_r = dataInputAssociation === null || dataInputAssociation === void 0 ? void 0 : dataInputAssociation.assignment) === null || _r === void 0 ? void 0 : _r.push({
                                "@_id": `${e["@_id"]}_assignment_${reassignment.type}`,
                                from: {
                                    "@_id": `${e["@_id"]}`,
                                    __$$text: newEntry,
                                },
                                to: { "@_id": dataInput["@_id"], __$$text: dataInput["@_id"] },
                            });
                        }
                    });
                }
            });
        });
    };
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    return (_jsx(Modal, { className: "kie-bpmn-editor--reassignments--modal", "aria-labelledby": "Reassignments", title: "Reassignments", variant: ModalVariant.large, isOpen: isOpen, onClose: onClose, children: reassignments.length > 0 ? (_jsxs(Form, { children: [_jsxs(Grid, { md: 12, style: { padding: "0 8px" }, children: [_jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Users" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Groups" }) }) }), _jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Type" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Period" }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: _jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addReassignment, children: _jsx(PlusCircleIcon, { color: "var(--pf-c-button--m-primary--BackgroundColor)" }) }) })] }), reassignments.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--reassignment-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 3, children: _jsx(TextArea, { "aria-label": "users", autoFocus: true, style: entryStyle, type: "text", placeholder: "Users...", value: entry.users, onChange: (e) => handleInputChange(i, "users", e) }) }), _jsx(GridItem, { span: 3, children: _jsx(TextArea, { "aria-label": "groups", style: entryStyle, type: "text", placeholder: "Groups...", value: entry.groups, onChange: (e) => handleInputChange(i, "groups", e) }) }), _jsx(GridItem, { span: 2, children: _jsx(FormSelect, { "aria-label": "type", type: "text", value: entry.type, onChange: (e) => handleInputChange(i, "type", e), style: entryStyle, rows: 1, children: typeOptions.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) }) }), _jsx(GridItem, { span: 2, children: _jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [_jsx("input", { "aria-label": "period", style: entryStyle, type: "number", placeholder: "Enter value", value: entry.period, onChange: (e) => handleInputChange(i, "period", e.target.value) }), _jsx(FormSelect, { "aria-label": "period unit", type: "text", value: entry.periodUnit, onChange: (e) => handleInputChange(i, "periodUnit", e), style: entryStyle, rows: 1, children: periodUnits.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) })] }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => removeReassignment(i), children: _jsx(TimesIcon, {}) })) })] }) }, i))), _jsx(Button, { onClick: handleSubmit, className: "kie-bpmn-editor--properties-panel--reassignment-submit-save-button", children: "Save" })] })) : (_jsx("div", { className: "kie-bpmn-editor--reassignments--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(Title, { headingLevel: "h4", children: "No reassignments yet" }), _jsx(EmptyStateBody, { children: "This represents the empty state for reassignments. You can add reassignments to get started." }), _jsx(Button, { variant: "primary", onClick: addReassignment, children: "Add reassignment" })] }) }) })) }));
}
//# sourceMappingURL=Reassignments.js.map