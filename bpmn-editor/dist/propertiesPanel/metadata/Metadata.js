import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { addBpmn20Drools10MetaData, deleteBpmn20Drools10MetaDataEntry, renameBpmn20Drools10MetaDataEntry, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { visitFlowElementsAndArtifacts, visitLanes } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { PropertiesPanelListEmptyState } from "../emptyState/PropertiesPanelListEmptyState";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { useMemo, useState } from "react";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import "./Metadata.css";
export function Metadata({ obj }) {
    var _a, _b, _c, _d, _e;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const addButton = useMemo(() => (_jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
            bpmnEditorStoreApi.setState((s) => {
                const { process } = addOrGetProcessAndDiagramElements({ definitions: s.bpmn.model.definitions });
                if (!obj || process["@_id"] === (obj === null || obj === void 0 ? void 0 : obj["@_id"])) {
                    addBpmn20Drools10MetaData(process, "", "");
                }
                else {
                    visitFlowElementsAndArtifacts(process, ({ element }) => {
                        if (element["@_id"] === (obj === null || obj === void 0 ? void 0 : obj["@_id"])) {
                            addBpmn20Drools10MetaData(element, "", "");
                        }
                    });
                    visitLanes(process, ({ lane }) => {
                        if (lane["@_id"] === obj["@_id"]) {
                            addBpmn20Drools10MetaData(lane, "", "");
                        }
                    });
                }
            });
        }, children: _jsx(PlusCircleIcon, {}) })), [bpmnEditorStoreApi, obj]);
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    return (_jsx(_Fragment, { children: (((_c = (_b = (_a = obj === null || obj === void 0 ? void 0 : obj.extensionElements) === null || _a === void 0 ? void 0 : _a["drools:metaData"]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 5, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 6, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Value" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: { textAlign: "right" }, children: !isReadOnly && addButton }) })] }) }), (_e = (_d = obj === null || obj === void 0 ? void 0 : obj.extensionElements) === null || _d === void 0 ? void 0 : _d["drools:metaData"]) === null || _e === void 0 ? void 0 : _e.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--metadata-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 5, children: _jsx("input", { autoFocus: true, style: entryStyle, type: "text", placeholder: "Name...", value: entry["@_name"], onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        if (process["@_id"] === obj["@_id"]) {
                                            renameBpmn20Drools10MetaDataEntry(process, i, e.target.value);
                                        }
                                        else {
                                            visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                if (element["@_id"] === obj["@_id"]) {
                                                    renameBpmn20Drools10MetaDataEntry(element, i, e.target.value);
                                                }
                                            });
                                            visitLanes(process, ({ lane }) => {
                                                if (lane["@_id"] === obj["@_id"]) {
                                                    renameBpmn20Drools10MetaDataEntry(lane, i, e.target.value);
                                                }
                                            });
                                        }
                                    }) }) }), _jsx(GridItem, { span: 6, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Value...", value: entry["drools:metaValue"].__$$text, onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        if (process["@_id"] === obj["@_id"]) {
                                            setBpmn20Drools10MetaData(process, i, e.target.value);
                                        }
                                        else {
                                            visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                if (element["@_id"] === obj["@_id"]) {
                                                    setBpmn20Drools10MetaData(element, i, e.target.value);
                                                }
                                            });
                                            visitLanes(process, ({ lane }) => {
                                                if (lane["@_id"] === obj["@_id"]) {
                                                    setBpmn20Drools10MetaData(lane, i, e.target.value);
                                                }
                                            });
                                        }
                                    }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            if (process["@_id"] === obj["@_id"]) {
                                                deleteBpmn20Drools10MetaDataEntry(process, i);
                                            }
                                            else {
                                                visitFlowElementsAndArtifacts(process, ({ element }) => {
                                                    if (element["@_id"] === obj["@_id"]) {
                                                        deleteBpmn20Drools10MetaDataEntry(element, i);
                                                    }
                                                });
                                                visitLanes(process, ({ lane }) => {
                                                    if (lane["@_id"] === obj["@_id"]) {
                                                        deleteBpmn20Drools10MetaDataEntry(lane, i);
                                                    }
                                                });
                                            }
                                        });
                                    }, children: _jsx(TimesIcon, {}) })) })] }) }, i)))] }))) || (_jsxs("div", { style: { position: "relative" }, children: [_jsx(PropertiesPanelListEmptyState, {}), !isReadOnly && (_jsx(_Fragment, { children: _jsx("div", { style: { position: "absolute", top: "calc(50% - 16px)", right: "0" }, children: addButton }) }))] })) }));
}
//# sourceMappingURL=Metadata.js.map