import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useBpmnEditorStore } from "../../store/StoreContext";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { Label } from "@patternfly/react-core/dist/js/components/Label";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import "./CodeInput.css";
export function CodeInput({ label, languages, value, onChange, }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const languageLabel = React.useMemo(() => {
        return (_jsx(Label, { isCompact: true, style: {
                margin: "16px",
                top: "24px",
                right: "0",
                position: "absolute",
            }, children: languages[0] }));
    }, [languages]);
    return (_jsxs(FormGroup, { label: `${label}`, style: { position: "relative" }, children: [_jsx(TextArea, { "aria-label": `${label}`, type: "text", isDisabled: isReadOnly, value: value, onChange: onChange, placeholder: `Enter code...`, style: { resize: "vertical", minHeight: "40px", fontFamily: "monospace" }, rows: 3 }), languageLabel] }));
}
//# sourceMappingURL=CodeInput.js.map