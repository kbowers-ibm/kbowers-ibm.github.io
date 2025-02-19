import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormGroup, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput/TextInput";
import { Select } from "@patternfly/react-core/dist/js/components/Select/Select";
export function LinkSelector({ element }) {
    var _a, _b;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const currentValue = ((_b = (_a = element === null || element === void 0 ? void 0 : element.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((eventDef) => eventDef.__$$element === "linkEventDefinition")) === null || _b === void 0 ? void 0 : _b["@_name"]) || "";
    const links = [];
    const getDropdownValues = () => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a;
                if (e.__$$element === (element === null || element === void 0 ? void 0 : element.__$$element)) {
                    const linkEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "linkEventDefinition");
                    if (linkEventDefinition) {
                        links.push(linkEventDefinition["@_name"]);
                    }
                }
            });
        });
    };
    const handleValueChange = (newValue) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a;
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    const linkEventDefinition = (_a = e.eventDefinition) === null || _a === void 0 ? void 0 : _a.find((event) => event.__$$element === "linkEventDefinition");
                    if (linkEventDefinition) {
                        linkEventDefinition["@_name"] = newValue || "";
                        links.push(linkEventDefinition["@_name"]);
                    }
                }
            });
        });
    };
    return (_jsx(FormSection, { children: _jsxs(FormGroup, { label: "Link", children: [_jsx(TextInput, { value: currentValue, onChange: handleValueChange, label: "Link" }), _jsx(Select, { onToggle: () => getDropdownValues })] }) }));
}
//# sourceMappingURL=LinkSelector.js.map