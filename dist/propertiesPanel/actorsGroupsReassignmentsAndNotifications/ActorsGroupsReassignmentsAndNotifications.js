import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ClipboardCopy } from "@patternfly/react-core/dist/js/components/ClipboardCopy";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import * as React from "react";
import { updateFlowElement } from "../../mutations/renameNode";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
export function ActorsGroupsReassignmentsAndNotifications({ element, }) {
    var _a;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const onNameChanged = React.useCallback((newName) => {
        bpmnEditorStoreApi.setState((s) => {
            updateFlowElement({
                definitions: s.bpmn.model.definitions,
                id: element["@_id"],
                newFlowElement: { "@_name": newName },
            });
        });
    }, [element, bpmnEditorStoreApi]);
    return (_jsxs(FormSection, { children: [_jsx(FormGroup, { label: "Task Name", children: _jsx(TextInput, { isDisabled: settings.isReadOnly, id: element["@_id"], name: element["@_name"], value: element["@_name"], placeholder: "Enter a name...", onChange: onNameChanged }) }), _jsx(FormGroup, { label: "Documentation", children: _jsx(TextArea, { "aria-label": "Documentation", type: "text", isDisabled: settings.isReadOnly, value: (_a = element === null || element === void 0 ? void 0 : element.documentation) === null || _a === void 0 ? void 0 : _a[0].__$$text, onChange: (newDocumentation) => bpmnEditorStoreApi.setState((s) => {
                        const { process } = addOrGetProcessAndDiagramElements({
                            definitions: s.bpmn.model.definitions,
                        });
                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                            var _a;
                            if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                                (_a = e.documentation) !== null && _a !== void 0 ? _a : (e.documentation = []);
                                e.documentation[0] = {
                                    "@_id": generateUuid(),
                                    __$$text: newDocumentation,
                                };
                            }
                        });
                    }), placeholder: "Enter documentation...", style: { resize: "vertical", minHeight: "40px" }, rows: 3 }) }), _jsx(FormGroup, { label: "ID", children: _jsx(ClipboardCopy, { isReadOnly: settings.isReadOnly, hoverTip: "Copy", clickTip: "Copied", children: element["@_id"] }) })] }));
}
//# sourceMappingURL=ActorsGroupsReassignmentsAndNotifications.js.map