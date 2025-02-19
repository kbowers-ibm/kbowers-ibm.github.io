import { jsx as _jsx } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { CodeInput } from "../codeInput/CodeInput";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
export function ConditionalEventSelector({ element }) {
    var _a, _b, _c;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const currentValue = ((_c = (_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "conditionalEventDefinition")) === null || _b === void 0 ? void 0 : _b.condition) === null || _c === void 0 ? void 0 : _c.__$$text) || "";
    const handleValueChange = (newValue) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a, _b;
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    const conditionalEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "conditionalEventDefinition");
                    if (conditionalEventDefinition) {
                        (_b = conditionalEventDefinition.condition) !== null && _b !== void 0 ? _b : (conditionalEventDefinition.condition = {
                            "@_id": e["@_id"] || generateUuid(),
                        });
                        conditionalEventDefinition.condition.__$$text = newValue;
                    }
                }
            });
        });
    };
    return (_jsx(FormSection, { children: _jsx(CodeInput, { value: currentValue, onChange: handleValueChange, label: "Conditional Expression", languages: ["drools"] }) }));
}
//# sourceMappingURL=ConditionalExpressionSelector.js.map