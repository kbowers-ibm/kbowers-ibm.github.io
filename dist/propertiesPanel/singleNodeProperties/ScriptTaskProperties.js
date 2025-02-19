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
export function ScriptTaskProperties({ scriptTask, }) {
    var _a;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(_Fragment, { children: _jsxs(PropertiesPanelHeaderFormSection, { title: scriptTask["@_name"] || "Script task", icon: _jsx(TaskIcon, { variant: scriptTask.__$$element, isIcon: true }), children: [_jsx(NameDocumentationAndId, { element: scriptTask }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(CodeInput, { label: "Script", languages: ["Java"], value: ((_a = scriptTask === null || scriptTask === void 0 ? void 0 : scriptTask.script) === null || _a === void 0 ? void 0 : _a.__$$text) || "", onChange: (newScript) => {
                        bpmnEditorStoreApi.setState((s) => {
                            const { process } = addOrGetProcessAndDiagramElements({
                                definitions: s.bpmn.model.definitions,
                            });
                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                var _a;
                                if (e["@_id"] === scriptTask["@_id"] && e.__$$element === scriptTask.__$$element) {
                                    (_a = e.script) !== null && _a !== void 0 ? _a : (e.script = { __$$text: "" });
                                    e.script.__$$text = newScript;
                                }
                            });
                        });
                    } }), _jsx(AsyncCheckbox, { element: scriptTask }), _jsx(AdhocAutostartCheckbox, { element: scriptTask })] }) }));
}
//# sourceMappingURL=ScriptTaskProperties.js.map