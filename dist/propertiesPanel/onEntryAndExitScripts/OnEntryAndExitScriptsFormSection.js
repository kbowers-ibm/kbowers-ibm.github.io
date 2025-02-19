import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { useState } from "react";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { CodeIcon } from "@patternfly/react-icons/dist/js/icons/code-icon";
import { CodeInput } from "../codeInput/CodeInput";
import "./OnEntryAndExitScriptsFormSection.css";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form/FormSection";
export function OnEntryAndExitScriptsFormSection({ element }) {
    var _a, _b, _c, _d, _e, _f;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [isExpanded, setExpanded] = useState(false);
    return (_jsx(_Fragment, { children: _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isExpanded, toogleSectionExpanded: () => setExpanded((prev) => !prev), icon: _jsx(CodeIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "onEntry / onExit" }), children: isExpanded && (_jsx(_Fragment, { children: _jsxs(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: [_jsx(CodeInput, { label: "onEntry", languages: ["Java"], value: ((_c = (_b = (_a = element === null || element === void 0 ? void 0 : element.extensionElements) === null || _a === void 0 ? void 0 : _a["drools:onEntry-script"]) === null || _b === void 0 ? void 0 : _b["drools:script"]) === null || _c === void 0 ? void 0 : _c.__$$text) || "", onChange: (newValue) => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        var _a, _b;
                                        var _c;
                                        if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                            (_a = e.extensionElements) !== null && _a !== void 0 ? _a : (e.extensionElements = {});
                                            (_b = (_c = e.extensionElements)["drools:onEntry-script"]) !== null && _b !== void 0 ? _b : (_c["drools:onEntry-script"] = {
                                                "@_scriptFormat": "",
                                                "drools:script": { __$$text: "" },
                                            });
                                            e.extensionElements["drools:onEntry-script"]["drools:script"].__$$text = newValue;
                                        }
                                    });
                                });
                            } }), _jsx("br", {}), _jsx(CodeInput, { label: "onExit", languages: ["Java"], value: ((_f = (_e = (_d = element === null || element === void 0 ? void 0 : element.extensionElements) === null || _d === void 0 ? void 0 : _d["drools:onExit-script"]) === null || _e === void 0 ? void 0 : _e["drools:script"]) === null || _f === void 0 ? void 0 : _f.__$$text) || "", onChange: (newValue) => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        var _a, _b;
                                        var _c;
                                        if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                            (_a = e.extensionElements) !== null && _a !== void 0 ? _a : (e.extensionElements = {});
                                            (_b = (_c = e.extensionElements)["drools:onExit-script"]) !== null && _b !== void 0 ? _b : (_c["drools:onExit-script"] = {
                                                "@_scriptFormat": "",
                                                "drools:script": { __$$text: "" },
                                            });
                                            e.extensionElements["drools:onExit-script"]["drools:script"].__$$text = newValue;
                                        }
                                    });
                                });
                            } })] }) })) }) }));
}
//# sourceMappingURL=OnEntryAndExitScriptsFormSection.js.map