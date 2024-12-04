import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { OnEntryAndExitScriptsFormSection } from "../onEntryAndExitScripts/OnEntryAndExitScriptsFormSection";
import { SubProcessIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { VariablesFormSection } from "../variables/VariablesFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { CodeInput } from "../codeInput/CodeInput";
import { FormSelect, FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { AdhocAutostartCheckbox } from "../adhocAutostartCheckbox/AdhocAutostartCheckbox";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
export function AdHocSubProcessProperties({ adHocSubProcess, }) {
    var _a;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    return (_jsxs(_Fragment, { children: [_jsxs(PropertiesPanelHeaderFormSection, { title: adHocSubProcess["@_name"] || "Ad-hoc sub-process", icon: _jsx(SubProcessIcon, {}), children: [_jsx(NameDocumentationAndId, { element: adHocSubProcess }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(SlaDueDateInput, { element: adHocSubProcess }), _jsx(AsyncCheckbox, { element: adHocSubProcess }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(CodeInput, { label: "Ad-hoc activation condition", languages: ["Drools"], value: (_a = parseBpmn20Drools10MetaData(adHocSubProcess).get("customActivationCondition")) !== null && _a !== void 0 ? _a : "", onChange: (newCode) => {
                            bpmnEditorStoreApi((s) => {
                                const { process } = addOrGetProcessAndDiagramElements({
                                    definitions: s.bpmn.model.definitions,
                                });
                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                    if (e["@_id"] === adHocSubProcess["@_id"] && e.__$$element === adHocSubProcess.__$$element) {
                                        setBpmn20Drools10MetaData(e, "customActivationCondition", newCode);
                                    }
                                });
                            });
                        } }), _jsx(CodeInput, { label: "Ad-hoc completion condition", languages: ["MVEL", "Drools"], value: "", onChange: (newCode) => {
                        } }), _jsx(FormGroup, { label: "Ad-hoc ordering", children: _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- None --" }) }) }), _jsx(AdhocAutostartCheckbox, { element: adHocSubProcess })] }), _jsx(VariablesFormSection, { p: adHocSubProcess }), _jsx(OnEntryAndExitScriptsFormSection, { element: adHocSubProcess })] }));
}
//# sourceMappingURL=AdHocSubProcessProperties.js.map