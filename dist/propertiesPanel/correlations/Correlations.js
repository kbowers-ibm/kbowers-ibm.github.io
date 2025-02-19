import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { useMemo, useState } from "react";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { EmptyState, EmptyStateBody } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import "./Correlations.css";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
export function Correlations({ isOpen, onClose }) {
    var _a, _b, _c;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const addAtEnd = React.useCallback(() => {
        bpmnEditorStoreApi.setState((s) => {
            var _a, _b;
            var _c;
            const { process } = addOrGetProcessAndDiagramElements({ definitions: s.bpmn.model.definitions });
            const correlationPropertyId = generateUuid();
            (_a = (_c = s.bpmn.model.definitions).rootElement) !== null && _a !== void 0 ? _a : (_c.rootElement = []);
            s.bpmn.model.definitions.rootElement.push({
                __$$element: "correlationProperty",
                "@_id": correlationPropertyId,
                "@_name": "",
                "@_type": "",
                correlationPropertyRetrievalExpression: [],
            });
            (_b = process.correlationSubscription) !== null && _b !== void 0 ? _b : (process.correlationSubscription = []);
            process.correlationSubscription.push({
                "@_id": generateUuid(),
                "@_correlationKeyRef": correlationPropertyId,
                correlationPropertyBinding: [
                    {
                        "@_id": generateUuid(),
                        "@_correlationPropertyRef": correlationPropertyId,
                        dataPath: undefined,
                    },
                ],
            });
        });
    }, [bpmnEditorStoreApi]);
    const addButton = useMemo(() => (_jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addAtEnd, children: _jsx(PlusCircleIcon, { color: "var(--pf-c-button--m-primary--BackgroundColor)" }) })), [addAtEnd]);
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const process = useBpmnEditorStore((s) => { var _a; return (_a = s.bpmn.model.definitions.rootElement) === null || _a === void 0 ? void 0 : _a.find((s) => s.__$$element === "process"); });
    const correlationCount = (_b = (_a = process === null || process === void 0 ? void 0 : process.correlationSubscription) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    return (_jsx(Modal, { className: "kie-bpmn-editor--correlations--modal", "aria-labelledby": "Correlations", title: "Correlations", variant: ModalVariant.large, isOpen: isOpen, onClose: onClose, children: (correlationCount > 0 && (_jsxs(_Fragment, { children: [_jsx("div", { style: { padding: "0 8px", position: "sticky", top: "-16px", backdropFilter: "blur(8px)" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "ID" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Property ID" }) }) }), _jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Property name" }) }) }), _jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Property type" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: { textAlign: "right" }, children: !isReadOnly && addButton }) })] }) }), (_c = process === null || process === void 0 ? void 0 : process.correlationSubscription) === null || _c === void 0 ? void 0 : _c.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--correlation-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 2, children: _jsx("input", { autoFocus: true, style: entryStyle, type: "text", placeholder: "ID...", value: "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                    }) }) }), _jsx(GridItem, { span: 3, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Name...", value: "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                    }) }) }), _jsx(GridItem, { span: 2, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Property ID...", value: "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                    }) }) }), _jsx(GridItem, { span: 2, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Property name...", value: "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                    }) }) }), _jsx(GridItem, { span: 2, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Property type...", value: "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                        const { process } = addOrGetProcessAndDiagramElements({
                                            definitions: s.bpmn.model.definitions,
                                        });
                                    }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
                                        bpmnEditorStoreApi.setState((s) => {
                                            var _a;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            (_a = process.correlationSubscription) === null || _a === void 0 ? void 0 : _a.splice(i, 1);
                                        });
                                    }, children: _jsx(TimesIcon, {}) })) })] }) }, i))), _jsx("br", {}), _jsx("br", {}), _jsx("br", {})] }))) || (_jsx("div", { className: "kie-bpmn-editor--correlations--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(Title, { headingLevel: "h4", children: isReadOnly ? "No correlations" : "No correlations yet" }), _jsx(EmptyStateBody, { style: { padding: "0 25%" }, children: `This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible enough to meet a variety of needs.` }), _jsx(Button, { variant: "primary", onClick: addAtEnd, children: "Add correlation" })] }) }) })) }));
}
//# sourceMappingURL=Correlations.js.map