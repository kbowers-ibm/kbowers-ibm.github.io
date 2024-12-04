import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { Dropdown } from "@patternfly/react-core/dist/js/components/Dropdown/Dropdown";
import { DropdownToggle } from "@patternfly/react-core/dist/js/components/Dropdown/DropdownToggle";
import { DropdownItem } from "@patternfly/react-core/dist/js/components/Dropdown/DropdownItem";
import { CheckIcon } from "@patternfly/react-icons/dist/js/icons/check-icon";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
const InteractiveDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const [customItems, setCustomItems] = useState([]);
    const [isCreatingNew, setIsCreatingNew] = useState(false);
    const [newItemInput, setNewItemInput] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        if (isCreatingNew && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCreatingNew]);
    const handleToggle = (shouldOpen) => {
        if (!isCreatingNew) {
            setIsOpen(shouldOpen);
        }
    };
    const handleNewItemInput = (value) => {
        setNewItemInput(value);
    };
    const saveNewItem = () => {
        if (newItemInput.trim()) {
            const updatedItems = [...customItems, newItemInput.trim()];
            setCustomItems(updatedItems);
            setSelectedValue(newItemInput.trim());
            setIsCreatingNew(false);
            setNewItemInput("");
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            saveNewItem();
        }
    };
    return (_jsx("div", { style: { width: "200px" }, children: _jsx(Dropdown, { isOpen: isOpen, toggle: _jsx(DropdownToggle, { onToggle: handleToggle, children: selectedValue || "Select an option" }), dropdownItems: isCreatingNew
                ? [
                    _jsxs("div", { style: { display: "flex", alignItems: "center", padding: "10px" }, children: [_jsx("input", { ref: inputRef, type: "text", value: newItemInput, onChange: (e) => handleNewItemInput(e.target.value), onKeyPress: handleKeyPress, placeholder: "Enter new item", style: { marginRight: "10px", flexGrow: 1 } }), _jsx(CheckIcon, { onClick: saveNewItem, style: { cursor: "pointer", color: "green" } })] }, "new-item-input"),
                ]
                : [
                    _jsx(DropdownItem, { icon: _jsx(PlusCircleIcon, {}), onClick: () => {
                            setIsCreatingNew(true);
                        }, children: "New" }, "new-option"),
                    ...customItems.map((item, index) => (_jsx(DropdownItem, { onClick: () => {
                            setSelectedValue(item);
                            setIsOpen(false);
                        }, children: item }, `custom-item-${index}`))),
                ] }) }));
};
export default InteractiveDropdown;
//# sourceMappingURL=InteractiveDropdown.js.map