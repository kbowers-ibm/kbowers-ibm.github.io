import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import "./SignalSelector.css";
export function SignalSelector({ element }) {
    var _a, _b;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    return (_jsx(FormSection, { children: _jsx(FormGroup, { label: "Signal", children: _jsx(TextArea, { "aria-label": "Signal", type: "text", isDisabled: settings.isReadOnly, value: ((_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "signalEventDefinition")) === null || _b === void 0 ? void 0 : _b["@_signalRef"]) || "", onChange: (newSignal) => bpmnEditorStoreApi.setState((s) => {
                    const { process } = addOrGetProcessAndDiagramElements({
                        definitions: s.bpmn.model.definitions,
                    });
                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                        var _a;
                        if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                            const signalEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "signalEventDefinition");
                            if (signalEventDefinition) {
                                signalEventDefinition["@_signalRef"] = newSignal;
                            }
                        }
                    });
                }), placeholder: "-- None --", style: { resize: "vertical", minHeight: "40px" }, rows: 1 }) }) }));
}
//# sourceMappingURL=SignalSelector.js.map