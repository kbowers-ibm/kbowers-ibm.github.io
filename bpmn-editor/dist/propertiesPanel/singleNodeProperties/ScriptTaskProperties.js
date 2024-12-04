import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { TaskIcon } from "../../diagram/nodes/NodeIcons";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { CodeInput } from "../codeInput/CodeInput";
import { AdhocAutostartCheckbox } from "../adhocAutostartCheckbox/AdhocAutostartCheckbox";
import { AsyncCheckbox } from "../asyncCheckbox/AsyncCheckbox";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
export function ScriptTaskProperties({ scriptTask, }) {
    var _a;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(_Fragment, { children: _jsxs(PropertiesPanelHeaderFormSection, { title: scriptTask["@_name"] || "Script task", icon: _jsx(TaskIcon, { variant: scriptTask.__$$element }), children: [_jsx(NameDocumentationAndId, { element: scriptTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(CodeInput, { label: "Script", languages: ["Java"], value: (_a = parseBpmn20Drools10MetaData(scriptTask).get("customActivationCondition")) !== null && _a !== void 0 ? _a : "", onChange: (newScript) => {
                        bpmnEditorStoreApi((s) => {
                            const { process } = addOrGetProcessAndDiagramElements({
                                definitions: s.bpmn.model.definitions,
                            });
                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                if (e["@_id"] === scriptTask["@_id"] && e.__$$element === scriptTask.__$$element) {
                                    setBpmn20Drools10MetaData(e, "customActivationCondition", newScript);
                                }
                            });
                        });
                    } }), _jsx(AsyncCheckbox, { element: scriptTask }), _jsx(AdhocAutostartCheckbox, { element: scriptTask })] }) }));
}
//# sourceMappingURL=ScriptTaskProperties.js.map