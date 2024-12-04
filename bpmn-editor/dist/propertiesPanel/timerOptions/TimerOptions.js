import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useBpmnEditorStore } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { Radio } from "@patternfly/react-core/dist/js/components/Radio";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { Select, SelectOption } from "@patternfly/react-core/dist/js/components/Select";
import "./TimerOptions.css";
import { DatePicker } from "@patternfly/react-core/dist/js/components/DatePicker";
export function TimerOptions({ element }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [selectedOption, setSelectedOption] = useState(undefined);
    const [isoCronType, setIsoCronType] = useState("ISO");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const handleOptionChange = (value) => {
        setSelectedOption(value);
        setInputValue("");
        setIsoCronType(undefined);
    };
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleDateChange = (event, value, date) => {
        setSelectedDate(value);
    };
    return (_jsxs(FormGroup, { label: "Timer options", fieldId: "timer-options", children: [_jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-once", name: "timer-options", label: "Fire once after duration", isChecked: selectedOption === "fire-once", onChange: () => handleOptionChange("fire-once"), isDisabled: isReadOnly }), selectedOption === "fire-once" && (_jsx(TextInput, { id: "fire-once-input", value: inputValue, onChange: setInputValue, isDisabled: isReadOnly, type: "text", placeholder: "Enter duration or expression #{expression}", className: "timer-input" }))] }), _jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-multiple", name: "timer-options", label: "Fire multiple times", isChecked: selectedOption === "fire-multiple", onChange: () => handleOptionChange("fire-multiple"), isDisabled: isReadOnly }), selectedOption === "fire-multiple" && (_jsx("div", { className: "timer-options-multiple", children: _jsxs("div", { className: "dropdown-group", children: [_jsxs(Select, { id: "iso-cron-select", isOpen: isDropdownOpen, onToggle: handleDropdownToggle, onSelect: (event, selection) => {
                                        setIsoCronType(selection);
                                        setIsDropdownOpen(false);
                                    }, selections: isoCronType, isDisabled: isReadOnly, className: "iso-cron-select", children: [_jsx(SelectOption, { value: "ISO" }), _jsx(SelectOption, { value: "Cron" })] }), _jsx(TextInput, { id: "fire-multiple-input", value: inputValue, onChange: setInputValue, isDisabled: isReadOnly, type: "text", placeholder: "Enter time cycle or expression #{expression}", className: "timer-input" })] }) }))] }), _jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-specific-date", name: "timer-options", label: "Fire at a specific date", isChecked: selectedOption === "fire-specific-date", onChange: () => handleOptionChange("fire-specific-date"), isDisabled: isReadOnly }), selectedOption === "fire-specific-date" && (_jsxs("div", { className: "timer-options-specific-date", children: [_jsx(TextInput, { id: "specific-date-input", value: inputValue, onChange: setInputValue, isDisabled: isReadOnly, type: "text", placeholder: "Enter date value or expression #{expression}", className: "timer-input" }), _jsx("div", { className: "datepicker-group", children: _jsx(DatePicker, { value: selectedDate, onChange: handleDateChange, inputProps: {
                                        isDisabled: false,
                                        placeholder: "Select a date",
                                        "aria-label": "Date picker input",
                                    } }) })] }))] })] }));
}
//# sourceMappingURL=TimerOptions.js.map