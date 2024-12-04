import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { EmptyState, EmptyStateBody, EmptyStateIcon } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Dropdown, DropdownItem, DropdownToggle } from "@patternfly/react-core/dist/js/components/Dropdown";
import { CubesIcon } from "@patternfly/react-icons/dist/js/icons/cubes-icon";
import "./Reassignments.css";
import InteractiveDropdown from "../dropdown/InteractiveDropdown";
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
export function Reassignments({ isOpen, onClose }) {
    const [reassignments, setReassignments] = useState([]);
    const [users, setUsers] = useState(["User 1", "User 2"]);
    const [groups, setGroups] = useState(["Group A", "Group B"]);
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const [openTypeIndex, setOpenTypeIndex] = useState(null);
    const [openPeriodUnitIndex, setOpenPeriodUnitIndex] = useState(null);
    const addReassignment = () => {
        setReassignments([
            ...reassignments,
            { users: "", groups: "", type: "Not Completed", period: "", periodUnit: "minutes" },
        ]);
    };
    const removeReassignment = (index) => {
        setReassignments(reassignments.filter((_, i) => i !== index));
    };
    const entryStyle = {
        width: "100%",
        maxWidth: "80px",
        padding: "4px",
        borderRadius: "4px",
    };
    const typeOptions = ["Not Completed", "Not Started"];
    const periodUnits = ["minutes", "hours", "days", "months", "years"];
    return (_jsx(Modal, { className: "kie-bpmn-editor--reassignments--modal", "aria-labelledby": "Reassignments", title: "Reassignments", variant: ModalVariant.large, isOpen: isOpen, onClose: onClose, children: reassignments.length > 0 ? (_jsxs(_Fragment, { children: [_jsxs(Grid, { md: 12, style: { padding: "0 8px" }, children: [_jsx(GridItem, { span: 3, children: _jsx("b", { children: "Users" }) }), _jsx(GridItem, { span: 3, children: _jsx("b", { children: "Groups" }) }), _jsx(GridItem, { span: 2, children: _jsx("b", { children: "Type" }) }), _jsx(GridItem, { span: 3, children: _jsx("b", { children: "Period" }) }), _jsx(GridItem, { span: 1, style: { textAlign: "center" }, children: _jsx(Button, { variant: ButtonVariant.plain, onClick: addReassignment, children: _jsx(PlusCircleIcon, {}) }) })] }), reassignments.map((entry, i) => (_jsxs(Grid, { md: 12, className: "kie-reassignments--entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), style: { padding: "0 8px" }, children: [_jsx(GridItem, { span: 3, children: _jsx(InteractiveDropdown, {}) }), _jsx(GridItem, { span: 3, children: _jsx(DropdownWithAdd, { items: groups, setItems: setGroups }) }), _jsx(GridItem, { span: 2, children: _jsx(Dropdown, { toggle: _jsx(DropdownToggle, { onToggle: () => setOpenTypeIndex(openTypeIndex === i ? null : i), children: entry.type }), isOpen: openTypeIndex === i, dropdownItems: typeOptions.map((opt) => (_jsx(DropdownItem, { onClick: () => {
                                        const updated = [...reassignments];
                                        updated[i].type = opt;
                                        setReassignments(updated);
                                        setOpenTypeIndex(null);
                                    }, children: opt }, opt))) }) }), _jsxs(GridItem, { span: 3, style: { display: "flex", alignItems: "center", gap: "8px" }, children: [_jsx("input", { style: entryStyle, type: "number", placeholder: "Period...", value: entry.period, onChange: (e) => {
                                        const updated = [...reassignments];
                                        updated[i].period = parseInt(e.target.value) || "";
                                        setReassignments(updated);
                                    } }), _jsx(Dropdown, { toggle: _jsx(DropdownToggle, { onToggle: () => setOpenPeriodUnitIndex(openPeriodUnitIndex === i ? null : i), children: entry.periodUnit }), isOpen: openPeriodUnitIndex === i, dropdownItems: periodUnits.map((unit) => (_jsx(DropdownItem, { onClick: () => {
                                            const updated = [...reassignments];
                                            updated[i].periodUnit = unit;
                                            setReassignments(updated);
                                            setOpenPeriodUnitIndex(null);
                                        }, children: unit }, unit))) })] }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { variant: ButtonVariant.plain, onClick: () => removeReassignment(i), children: _jsx(TimesIcon, {}) })) })] }, i)))] })) : (_jsx("div", { className: "kie-bpmn-editor--reassignments--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(EmptyStateIcon, { icon: CubesIcon }), _jsx(Title, { headingLevel: "h4", children: "No reassignments yet" }), _jsx(EmptyStateBody, { children: "This represents the empty state for reassignments. You can add reassignments to get started." }), _jsx(Button, { variant: "primary", onClick: addReassignment, children: "Add reassignment" })] }) }) })) }));
}
//# sourceMappingURL=Reassignments.js.map