import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { PropertiesPanelListEmptyState } from "../emptyState/PropertiesPanelListEmptyState";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { useCallback, useMemo, useState } from "react";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import "./Imports.css";
export function Imports({ p }) {
    var _a, _b, _c, _d, _e;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const addAtEnd = useCallback(() => {
        bpmnEditorStoreApi.setState((s) => {
            var _a, _b;
            var _c;
            const { process } = addOrGetProcessAndDiagramElements({ definitions: s.bpmn.model.definitions });
            (_a = process.extensionElements) !== null && _a !== void 0 ? _a : (process.extensionElements = {});
            (_b = (_c = process.extensionElements)["drools:import"]) !== null && _b !== void 0 ? _b : (_c["drools:import"] = []);
            process.extensionElements["drools:import"].push({
                "@_name": "",
            });
        });
    }, [bpmnEditorStoreApi]);
    const count = (_c = (_b = (_a = p === null || p === void 0 ? void 0 : p.extensionElements) === null || _a === void 0 ? void 0 : _a["drools:import"]) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
    const addButton = useMemo(() => (_jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addAtEnd, children: _jsx(PlusCircleIcon, {}) })), [addAtEnd]);
    const onKeyPress = useCallback((i) => (e) => {
        const isLast = i === count - 1;
        if (e.key === "Enter" && isLast && e.target.value.trim() !== "") {
            addAtEnd();
        }
    }, [addAtEnd, count]);
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    return (_jsx(_Fragment, { children: (count > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 11, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: { textAlign: "right" }, children: !isReadOnly && addButton }) })] }) }), (_e = (_d = p === null || p === void 0 ? void 0 : p.extensionElements) === null || _d === void 0 ? void 0 : _d["drools:import"]) === null || _e === void 0 ? void 0 : _e.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--import-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 11, children: _jsx("input", { autoFocus: true, style: entryStyle, type: "text", placeholder: "Class name...", value: entry["@_name"], onKeyPress: onKeyPress(i), onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                        process.extensionElements["drools:import"][i]["@_name"] = e.target.value.trim();
                                    }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            var _a, _b;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            (_b = (_a = process.extensionElements) === null || _a === void 0 ? void 0 : _a["drools:import"]) === null || _b === void 0 ? void 0 : _b.splice(i, 1);
                                        });
                                    }, children: _jsx(TimesIcon, {}) })) })] }) }, i)))] }))) || (_jsxs("div", { style: { position: "relative" }, children: [_jsx(PropertiesPanelListEmptyState, {}), !isReadOnly && (_jsx(_Fragment, { children: _jsx("div", { style: { position: "absolute", top: "calc(50% - 16px)", right: "0" }, children: addButton }) }))] })) }));
}
//# sourceMappingURL=Imports.js.map