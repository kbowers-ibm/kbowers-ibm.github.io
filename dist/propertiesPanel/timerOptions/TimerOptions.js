import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { Radio } from "@patternfly/react-core/dist/js/components/Radio";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { Select, SelectOption } from "@patternfly/react-core/dist/js/components/Select";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import "./TimerOptions.css";
import { DatePicker } from "@patternfly/react-core/dist/js/components/DatePicker";
export function TimerOptions({ element }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
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
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    return (_jsxs(FormGroup, { label: "Timer options", fieldId: "timer-options", children: [_jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-once", name: "timer-options", label: "Fire once after duration", isChecked: selectedOption === "fire-once" ||
                            !!((_c = (_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _b === void 0 ? void 0 : _b.timeDuration) === null || _c === void 0 ? void 0 : _c.__$$text), onChange: () => handleOptionChange("fire-once"), isDisabled: isReadOnly }), selectedOption === "fire-once" && (_jsx(TextInput, { id: "fire-once-input", value: (_f = (_e = (_d = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _d === void 0 ? void 0 : _d.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _e === void 0 ? void 0 : _e.timeDuration) === null || _f === void 0 ? void 0 : _f.__$$text, onChange: (newTimeDuration) => bpmnEditorStoreApi.setState((s) => {
                            const { process } = addOrGetProcessAndDiagramElements({
                                definitions: s.bpmn.model.definitions,
                            });
                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                var _a, _b;
                                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                    let timerEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "timerEventDefinition");
                                    timerEventDefinition !== null && timerEventDefinition !== void 0 ? timerEventDefinition : (timerEventDefinition = {
                                        "@_id": generateUuid(),
                                        __$$element: "timerEventDefinition",
                                    });
                                    (_b = e.eventDefinition) !== null && _b !== void 0 ? _b : (e.eventDefinition = []);
                                    e.eventDefinition.push(timerEventDefinition);
                                    timerEventDefinition.timeDuration = timerEventDefinition.timeDuration || { "@_id": generateUuid() };
                                    timerEventDefinition.timeDuration.__$$text = newTimeDuration;
                                }
                            });
                        }), isDisabled: isReadOnly, type: "text", placeholder: "Enter duration or expression #{expression}", className: "timer-input" }))] }), _jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-multiple", name: "timer-options", label: "Fire multiple times", isChecked: selectedOption === "fire-multiple" ||
                            !!((_j = (_h = (_g = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _g === void 0 ? void 0 : _g.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _h === void 0 ? void 0 : _h.timeCycle) === null || _j === void 0 ? void 0 : _j.__$$text), onChange: () => handleOptionChange("fire-multiple"), isDisabled: isReadOnly }), selectedOption === "fire-multiple" && (_jsx("div", { className: "timer-options-multiple", children: _jsxs("div", { className: "dropdown-group", children: [_jsxs(Select, { id: "iso-cron-select", isOpen: isDropdownOpen, onToggle: handleDropdownToggle, onSelect: (event, selection) => {
                                        setIsoCronType(selection);
                                        setIsDropdownOpen(false);
                                    }, selections: isoCronType, isDisabled: isReadOnly, className: "iso-cron-select", children: [_jsx(SelectOption, { value: "ISO" }), _jsx(SelectOption, { value: "Cron" })] }), _jsx(TextInput, { id: "fire-multiple-input", value: (_m = (_l = (_k = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _k === void 0 ? void 0 : _k.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _l === void 0 ? void 0 : _l.timeCycle) === null || _m === void 0 ? void 0 : _m.__$$text, onChange: (newTimeCycle) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                            var _a, _b;
                                            if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                                let timerEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "timerEventDefinition");
                                                timerEventDefinition !== null && timerEventDefinition !== void 0 ? timerEventDefinition : (timerEventDefinition = {
                                                    "@_id": generateUuid(),
                                                    __$$element: "timerEventDefinition",
                                                });
                                                (_b = e.eventDefinition) !== null && _b !== void 0 ? _b : (e.eventDefinition = []);
                                                e.eventDefinition.push(timerEventDefinition);
                                                timerEventDefinition.timeCycle = timerEventDefinition.timeCycle || { "@_id": generateUuid() };
                                                timerEventDefinition.timeCycle.__$$text = newTimeCycle;
                                            }
                                        });
                                    }), isDisabled: isReadOnly, type: "text", placeholder: "Enter time cycle or expression #{expression}", className: "timer-input" })] }) }))] }), _jsxs("div", { className: "radio-group", children: [_jsx(Radio, { id: "fire-specific-date", name: "timer-options", label: "Fire at a specific date", isChecked: selectedOption === "fire-specific-date" ||
                            !!((_q = (_p = (_o = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _o === void 0 ? void 0 : _o.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _p === void 0 ? void 0 : _p.timeDate) === null || _q === void 0 ? void 0 : _q.__$$text), onChange: () => handleOptionChange("fire-specific-date"), isDisabled: isReadOnly }), selectedOption === "fire-specific-date" && (_jsxs("div", { className: "timer-options-specific-date", children: [_jsx(TextInput, { id: "specific-date-input", value: (_t = (_s = (_r = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _r === void 0 ? void 0 : _r.find((eventDef) => eventDef.__$$element === "timerEventDefinition")) === null || _s === void 0 ? void 0 : _s.timeDate) === null || _t === void 0 ? void 0 : _t.__$$text, onChange: (newTimeDate) => bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        var _a, _b;
                                        if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                            let timerEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "timerEventDefinition");
                                            timerEventDefinition !== null && timerEventDefinition !== void 0 ? timerEventDefinition : (timerEventDefinition = {
                                                "@_id": generateUuid(),
                                                __$$element: "timerEventDefinition",
                                            });
                                            (_b = e.eventDefinition) !== null && _b !== void 0 ? _b : (e.eventDefinition = []);
                                            e.eventDefinition.push(timerEventDefinition);
                                            timerEventDefinition.timeDate = timerEventDefinition.timeDate || { "@_id": generateUuid() };
                                            timerEventDefinition.timeDate.__$$text = newTimeDate;
                                        }
                                    });
                                }), isDisabled: isReadOnly, type: "text", placeholder: "Enter date value or expression #{expression}", className: "timer-input" }), _jsx("div", { className: "datepicker-group", children: _jsx(DatePicker, { value: selectedDate, onChange: handleDateChange, inputProps: {
                                        isDisabled: false,
                                        placeholder: "Select a date",
                                        "aria-label": "Date picker input",
                                    } }) })] }))] })] }));
}
//# sourceMappingURL=TimerOptions.js.map