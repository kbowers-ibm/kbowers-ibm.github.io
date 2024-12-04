import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { updateTextAnnotation } from "../../mutations/renameNode";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import { ClipboardCopy } from "@patternfly/react-core/dist/js/components/ClipboardCopy";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { TextAnnotationIcon } from "../../diagram/nodes/NodeIcons";
export function TextAnnotationProperties({ textAnnotation, }) {
    var _a;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    return (_jsxs(PropertiesPanelHeaderFormSection, { title: "Text Annotation", icon: _jsx(TextAnnotationIcon, {}), children: [_jsx(FormGroup, { label: "Format", children: _jsx(TextInput, { "aria-label": "Format", type: "text", isDisabled: settings.isReadOnly, value: textAnnotation["@_textFormat"], placeholder: "Enter a text format...", onChange: (newTextFormat) => {
                        bpmnEditorStoreApi.setState((s) => {
                            updateTextAnnotation({
                                definitions: s.bpmn.model.definitions,
                                newTextAnnotation: { "@_textFormat": newTextFormat },
                                id: textAnnotation["@_id"],
                            });
                        });
                    } }) }), _jsx(FormGroup, { label: "Text", children: _jsx(TextArea, { "aria-label": "Text", type: "text", isDisabled: settings.isReadOnly, value: (_a = textAnnotation.text) === null || _a === void 0 ? void 0 : _a.__$$text, onChange: (newText) => {
                        bpmnEditorStoreApi.setState((s) => {
                            updateTextAnnotation({
                                definitions: s.bpmn.model.definitions,
                                newTextAnnotation: { text: { __$$text: newText } },
                                id: textAnnotation["@_id"],
                            });
                        });
                    }, placeholder: "Enter text...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { label: "ID", children: _jsx(ClipboardCopy, { isReadOnly: settings.isReadOnly, hoverTip: "Copy", clickTip: "Copied", onChange: (newId) => {
                        bpmnEditorStoreApi.setState((s) => {
                            updateTextAnnotation({
                                definitions: s.bpmn.model.definitions,
                                newTextAnnotation: { "@_id": newId },
                                id: textAnnotation["@_id"],
                            });
                        });
                    }, children: textAnnotation["@_id"] }) })] }));
}
//# sourceMappingURL=TextAnnotationProperties.js.map