import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { FormSelect, FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect";
import "./DataTypeSelector.css";
export var BpmnDataType;
(function (BpmnDataType) {
    BpmnDataType["Custom"] = "Custom";
    BpmnDataType["Boolean"] = "Boolean";
    BpmnDataType["Float"] = "Float";
    BpmnDataType["Integer"] = "Integer";
    BpmnDataType["Object"] = "Object";
    BpmnDataType["String"] = "String";
})(BpmnDataType || (BpmnDataType = {}));
export function DataTypeSelector({ element }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    return (_jsx(FormGroup, { label: "Data Type", children: _jsx(FormSelect, { id: "selected", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- None --" }) }) }));
}
//# sourceMappingURL=DataTypeSelector.js.map