import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { EditIcon } from "@patternfly/react-icons/dist/js/icons/edit-icon";
import { useMemo, useState } from "react";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal/Modal";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import "./AssignmentsFormSection.css";
import { EmptyState, EmptyStateBody } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { EyeIcon } from "@patternfly/react-icons/dist/js/icons/eye-icon";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function AssignmentsFormSection({ sectionLabel, children }) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [showAssignmentsModal, setShowAssignmentsModal] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx("div", { style: { marginLeft: "12px", width: "16px", height: "36px", lineHeight: "36px" }, children: "⇆" }), title: "Assignments" + sectionLabel, toogleSectionExpanded: () => setShowAssignmentsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, onClick: () => setShowAssignmentsModal(true), children: isReadOnly ? _jsx(EyeIcon, {}) : _jsx(EditIcon, {}) }) }) }), _jsx(Modal, { title: "Assignments", className: "kie-bpmn-editor--assignments--modal", "aria-labelledby": "Assignments", variant: ModalVariant.large, isOpen: showAssignmentsModal, onClose: () => setShowAssignmentsModal(false), children: children })] }));
}
export function BidirectionalAssignmentsFormSection({ element }) {
    var _a, _b, _c, _d;
    const inputCount = (_b = (_a = element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const outputCount = (_d = (_c = element.dataOutputAssociation) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
    const sectionLabel = useMemo(() => {
        if (inputCount > 0 && outputCount > 0) {
            return ` (in: ${inputCount}, out: ${outputCount})`;
        }
        else if (inputCount > 0) {
            return ` (in: ${inputCount}, out: -)`;
        }
        else if (outputCount > 0) {
            return ` (in: -, out: ${outputCount})`;
        }
        else {
            return "";
        }
    }, [inputCount, outputCount]);
    return (_jsxs(AssignmentsFormSection, { sectionLabel: sectionLabel, children: [_jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "50%" }, children: _jsx(AssignmentList, { section: "input", element: element }) }), _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "50%" }, children: _jsx(AssignmentList, { section: "output", element: element }) })] }));
}
export function InputOnlyAssociationFormSection({ element }) {
    var _a, _b;
    const inputCount = (_b = (_a = element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const sectionLabel = useMemo(() => {
        if (inputCount > 0) {
            return ` (in: ${inputCount})`;
        }
        else {
            return ` (in: -)`;
        }
    }, [inputCount]);
    return (_jsx(AssignmentsFormSection, { sectionLabel: sectionLabel, children: _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "100%" }, children: _jsx(AssignmentList, { section: "input", element: element }) }) }));
}
export function OutputOnlyAssociationFormSection({ element }) {
    var _a, _b;
    const outputCount = (_b = (_a = element.dataOutputAssociation) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const sectionLabel = useMemo(() => {
        if (outputCount > 0) {
            return ` (out: ${outputCount})`;
        }
        else {
            return ` (out: -)`;
        }
    }, [outputCount]);
    return (_jsx(AssignmentsFormSection, { sectionLabel: sectionLabel, children: _jsx("div", { className: "kie-bpmn-editor--assignments--modal-section", style: { height: "100%" }, children: _jsx(AssignmentList, { section: "output", element: element }) }) }));
}
export function AssignmentList({ section, element, }) {
    var _a, _b, _c;
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const { title, associationsPropName, lastColumnLabel, entryTitle } = useMemo(() => {
        if (section === "input") {
            return {
                title: "Inputs",
                entryTitle: "Input",
                associationsPropName: "dataInputAssociation",
                lastColumnLabel: "Source",
            };
        }
        else {
            return {
                title: "Outputs",
                entryTitle: "Output",
                associationsPropName: "dataOutputAssociation",
                lastColumnLabel: "Target",
            };
        }
    }, [section]);
    const count = (_b = (_a = element[associationsPropName]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const addAtEnd = React.useCallback(() => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({ definitions: s.bpmn.model.definitions });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                var _a, _b;
                var _c;
                if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                    (_a = (_c = e)[associationsPropName]) !== null && _a !== void 0 ? _a : (_c[associationsPropName] = []);
                    (_b = e[associationsPropName]) === null || _b === void 0 ? void 0 : _b.push({
                        "@_id": generateUuid(),
                        targetRef: { __$$text: "" },
                    });
                }
            });
        });
    }, [associationsPropName, bpmnEditorStoreApi, element]);
    const addButton = useMemo(() => (_jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addAtEnd, children: _jsx(PlusCircleIcon, { color: "var(--pf-c-button--m-primary--BackgroundColor)" }) })), [addAtEnd]);
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    const titleComponent = useMemo(() => _jsx(Title, { headingLevel: "h2", children: title }), [title]);
    return (_jsx(_Fragment, { children: (count > 0 && (_jsxs(_Fragment, { children: [_jsxs("div", { style: { position: "sticky", top: "0", backdropFilter: "blur(8px)" }, children: [titleComponent, _jsx(Divider, { style: { margin: "8px 0" }, inset: { default: "insetMd" } }), _jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, style: { alignItems: "center" }, children: [_jsx(GridItem, { span: 5, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Name" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Data Type" }) }) }), _jsx(GridItem, { span: 3, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: lastColumnLabel }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: { textAlign: "right" }, children: !isReadOnly && addButton }) })] }) })] }), (_c = element[associationsPropName]) === null || _c === void 0 ? void 0 : _c.map((entry, i) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    return (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--assignment-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 5, children: _jsx("input", { autoFocus: true, style: entryStyle, type: "text", placeholder: "Name...", value: ((_d = (_c = (_b = (_a = element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a[0].assignment) === null || _b === void 0 ? void 0 : _b[0].inputName) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.__$$text) || "", onChange: (newInputName) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                                                }
                                            });
                                        }) }) }), _jsx(GridItem, { span: 3, children: _jsx("input", { style: entryStyle, type: "text", placeholder: "Data Type...", value: ((_h = (_g = (_f = (_e = element.dataInputAssociation) === null || _e === void 0 ? void 0 : _e[0].assignment) === null || _f === void 0 ? void 0 : _f[0].inputDataType) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.__$$text) || "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                        }) }) }), _jsx(GridItem, { span: 3, children: _jsx("input", { style: entryStyle, type: "text", placeholder: `${lastColumnLabel}...`, value: ((_m = (_l = (_k = (_j = element.dataInputAssociation) === null || _j === void 0 ? void 0 : _j[0].assignment) === null || _k === void 0 ? void 0 : _k[0].inputSource) === null || _l === void 0 ? void 0 : _l[0]) === null || _m === void 0 ? void 0 : _m.__$$text) || "", onChange: (e) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                        }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => {
                                            bpmnEditorStoreApi.setState((s) => {
                                                const { process } = addOrGetProcessAndDiagramElements({
                                                    definitions: s.bpmn.model.definitions,
                                                });
                                                visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                                    var _a;
                                                    if (e["@_id"] === element["@_id"] && e.__$$element === element.__$$element) {
                                                        (_a = e[associationsPropName]) === null || _a === void 0 ? void 0 : _a.splice(i, 1);
                                                    }
                                                });
                                            });
                                        }, children: _jsx(TimesIcon, {}) })) })] }) }, i));
                })] }))) || (_jsxs(_Fragment, { children: [titleComponent, _jsx("div", { className: "kie-bpmn-editor--assignments--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(Title, { headingLevel: "h4", children: isReadOnly ? `No ${entryTitle} assignments` : `No ${entryTitle} assignments yet` }), _jsx(EmptyStateBody, { style: { padding: "0 25%" }, children: `This represents an the empty state pattern in Patternfly 4. Hopefully it's simple enough to use but flexible.` }), _jsx(Button, { variant: "primary", onClick: addAtEnd, children: `Add ${entryTitle} assignment` })] }) }) })] })) }));
}
//# sourceMappingURL=AssignmentsFormSection.js.map