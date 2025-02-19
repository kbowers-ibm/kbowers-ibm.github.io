import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "@patternfly/react-core/dist/js/components/Dropdown/Dropdown";
import { DropdownToggle } from "@patternfly/react-core/dist/js/components/Dropdown/DropdownToggle";
import { DropdownItem } from "@patternfly/react-core/dist/js/components/Dropdown/DropdownItem";
import { CheckIcon } from "@patternfly/react-icons/dist/js/icons/check-icon";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
export function InteractiveDropdown(props) {
    const { value, onChange, items, placeholder } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [newItemInput, setNewItemInput] = useState("");
    const [customItems, setCustomItems] = useState(items);
    const inputRef = useRef(null);
    useEffect(() => {
        if (isCreatingNew && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCreatingNew]);
    const toggleDropdown = (open) => {
        if (!isCreatingNew) {
            setIsOpen(open);
        }
    };
    const handleSelect = (selectedValue) => {
        onChange(selectedValue);
        setIsOpen(false);
    };
    const saveNewItem = () => {
        if (newItemInput.trim()) {
            const newValue = newItemInput.trim();
            const updatedItems = [...customItems, newValue];
            setCustomItems(updatedItems);
            onChange(newValue);
            setIsCreatingNew(false);
            setNewItemInput("");
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            saveNewItem();
        }
    };
    return (_jsx(Dropdown, { isOpen: isOpen, toggle: _jsx(DropdownToggle, { onToggle: toggleDropdown, children: value || placeholder || "Select an option" }), dropdownItems: isCreatingNew
            ? [
                _jsxs("div", { style: { display: "flex", alignItems: "center", padding: "10px" }, children: [_jsx("input", { ref: inputRef, type: "text", value: newItemInput, onChange: (e) => setNewItemInput(e.target.value), onKeyPress: handleKeyPress, placeholder: "Enter new item" }), _jsx(CheckIcon, { onClick: saveNewItem })] }, "new-item-input"),
            ]
            : [
                _jsx(DropdownItem, { icon: _jsx(PlusCircleIcon, {}), onClick: () => setIsCreatingNew(true), children: "New" }, "new-option"),
                ...customItems.map((item, index) => (_jsx(DropdownItem, { onClick: () => handleSelect(item), children: item }, `custom-item-${index}`))),
            ] }));
}
//# sourceMappingURL=InteractiveDropdown.js.map