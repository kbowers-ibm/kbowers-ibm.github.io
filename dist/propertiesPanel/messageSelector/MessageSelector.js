import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import "./MessageSelector.css";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea/TextArea";
export function MessageSelector({ element }) {
    var _a, _b;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    return (_jsx(FormSection, { children: _jsx(FormGroup, { label: "Message", children: _jsx(TextArea, { "aria-label": "Message", type: "text", isDisabled: settings.isReadOnly, value: ((_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "messageEventDefinition")) === null || _b === void 0 ? void 0 : _b["@_drools:msgref"]) || "", onChange: (newMessage) => bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                        var _a;
                        if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                            const messageEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "messageEventDefinition");
                            if (messageEventDefinition) {
                                messageEventDefinition["@_drools:msgref"] = newMessage;
                                messageEventDefinition["@_messageRef"] = e["@_id"];
                            }
                        }
                    });
                }), placeholder: "Enter message...", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }) }));
}
//# sourceMappingURL=MessageSelector.js.map