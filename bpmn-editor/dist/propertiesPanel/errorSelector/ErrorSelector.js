import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { FormSelect, FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect";
import "./ErrorSelector.css";
export function ErrorSelector({ element }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    return (_jsx(FormGroup, { label: "Error", children: _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- None --" }) }) }));
}
//# sourceMappingURL=ErrorSelector.js.map