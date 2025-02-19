import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { useMemo, useState } from "react";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { PropertiesPanelListEmptyState } from "../emptyState/PropertiesPanelListEmptyState";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import "./Variables.css";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
export function Variables({ p }) {
    var _a, _b, _c;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const addButton = useMemo(() => (_jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
            bpmnEditorStoreApi.setState((s) => {
                var _a, _b;
                const { process } = addOrGetProcessAndDiagramElements({ definitions: s.bpmn.model.definitions });
                if (!p || p["@_id"] === process["@_id"]) {
                    (_a = process.property) !== null && _a !== void 0 ? _a : (process.property = []);
                    (_b = process.property) === null || _b === void 0 ? void 0 : _b.push({
                        "@_id": generateUuid(),
                        "@_name": "",
                        "@_itemSubjectRef": "",
                    });
                }
                else {
                    visitFlowElementsAndArtifacts(process, ({ element }) => {
                        var _a, _b;
                        if (element["@_id"] === p["@_id"] && element.__$$element === p.__$$element) {
                            (_a = element.property) !== null && _a !== void 0 ? _a : (element.property = []);
                            (_b = element.property) === null || _b === void 0 ? void 0 : _b.push({
                                "@_id": generateUuid(),
                                "@_name": "",
                                "@_itemSubjectRef": "",
                            });
                        }
                    });
                }
            });
        }, children: _jsx(PlusCircleIcon, {}) })), [bpmnEditorStoreApi, p]);
    const entryColumnStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    return (_jsx(_Fragment, { children: (((_b = (_a = p === null || p === void 0 ? void 0 : p.property) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 4, children: _jsx("div", { style: entryColumnStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 4, children: _jsx("div", { style: entryColumnStyle, children: _jsx("b", { children: "Data type" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryColumnStyle, children: _jsx("b", { children: "Tags" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: { textAlign: "right" }, children: !isReadOnly && addButton }) })] }) }), (_c = p === null || p === void 0 ? void 0 : p.property) === null || _c === void 0 ? void 0 : _c.map((entry, i) => {
                    var _a;
                    return (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--variables-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 4, children: _jsx("input", { autoFocus: true, style: entryColumnStyle, type: "text", placeholder: "Name...", value: entry["@_name"], onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                            var _a;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            if (!p || p["@_id"] === process["@_id"]) {
                                                if ((_a = process.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                    process.property[i]["@_name"] = e.target.value;
                                                }
                                            }
                                            else {
                                                visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                    var _a;
                                                    if (element["@_id"] === p["@_id"] && element.__$$element === p.__$$element) {
                                                        if ((_a = element.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                            element.property[i]["@_name"] = e.target.value;
                                                        }
                                                    }
                                                });
                                            }
                                        }) }) }), _jsx(GridItem, { span: 4, children: _jsx("input", { style: entryColumnStyle, type: "text", placeholder: "Data type...", value: entry["@_itemSubjectRef"], onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                            var _a;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            if (!p || p["@_id"] === process["@_id"]) {
                                                if ((_a = process.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                    process.property[i]["@_itemSubjectRef"] = e.target.value;
                                                }
                                            }
                                            else {
                                                visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                    var _a;
                                                    if (element["@_id"] === p["@_id"] && element.__$$element === p.__$$element) {
                                                        if ((_a = element.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                            element.property[i]["@_itemSubjectRef"] = e.target.value;
                                                        }
                                                    }
                                                });
                                            }
                                        }) }) }), _jsx(GridItem, { span: 3, children: _jsx("input", { style: entryColumnStyle, type: "text", placeholder: "Tags...", value: parseBpmn20Drools10MetaData((_a = p.property) === null || _a === void 0 ? void 0 : _a[i]).get("customTags"), onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                            var _a, _b, _c;
                                            var _d, _e;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            if (!p || p["@_id"] === process["@_id"]) {
                                                if ((_a = process.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                    (_b = (_d = process.property[i]).extensionElements) !== null && _b !== void 0 ? _b : (_d.extensionElements = {});
                                                    (_c = (_e = process.property[i].extensionElements)["drools:metaData"]) !== null && _c !== void 0 ? _c : (_e["drools:metaData"] = []);
                                                    setBpmn20Drools10MetaData(process.property[i], "customTags", e.target.value);
                                                }
                                            }
                                            else {
                                                visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                    var _a, _b, _c;
                                                    var _d, _e;
                                                    if (element["@_id"] === p["@_id"] && element.__$$element === p.__$$element) {
                                                        if ((_a = element.property) === null || _a === void 0 ? void 0 : _a[i]) {
                                                            (_b = (_d = element.property[i]).extensionElements) !== null && _b !== void 0 ? _b : (_d.extensionElements = {});
                                                            (_c = (_e = element.property[i].extensionElements)["drools:metaData"]) !== null && _c !== void 0 ? _c : (_e["drools:metaData"] = []);
                                                            setBpmn20Drools10MetaData(element.property[i], "customTags", e.target.value);
                                                        }
                                                    }
                                                });
                                            }
                                        }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
                                            bpmnEditorStoreApi.setState((s) => {
                                                var _a;
                                                const { process } = addOrGetProcessAndDiagramElements({
                                                    definitions: s.bpmn.model.definitions,
                                                });
                                                if (!p || p["@_id"] === process["@_id"]) {
                                                    (_a = process.property) === null || _a === void 0 ? void 0 : _a.splice(i, 1);
                                                }
                                                else {
                                                    visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                        var _a;
                                                        if (element["@_id"] === p["@_id"] && element.__$$element === p.__$$element) {
                                                            (_a = element.property) === null || _a === void 0 ? void 0 : _a.splice(i, 1);
                                                        }
                                                    });
                                                }
                                            });
                                        }, children: _jsx(TimesIcon, {}) })) })] }) }, i));
                })] }))) || (_jsxs("div", { style: { position: "relative" }, children: [_jsx(PropertiesPanelListEmptyState, {}), !isReadOnly && (_jsx(_Fragment, { children: _jsx("div", { style: { position: "absolute", top: "calc(50% - 16px)", right: "0" }, children: addButton }) }))] })) }));
}
//# sourceMappingURL=Variables.js.map