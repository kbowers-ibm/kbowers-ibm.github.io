import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { CodeInput } from "../codeInput/CodeInput";
import "./MultiInstanceProperties.css";
export function MultiInstanceProperties({ element }) {
    return (_jsxs(_Fragment, { children: [_jsx(FormGroup, { label: "Execution mode" }), _jsx(FormGroup, { label: "Collection input" }), _jsx(FormGroup, { label: "Data input" }), _jsx(FormGroup, { label: "Collection output" }), _jsx(FormGroup, { label: "Data output" }), _jsx(CodeInput, { label: "Completion condition", languages: ["MVEL"], value: "", onChange: (newCode) => {
                } })] }));
}
//# sourceMappingURL=MultiInstanceProperties.js.map