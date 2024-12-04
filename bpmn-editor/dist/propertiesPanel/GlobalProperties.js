import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { ToggleGroup, ToggleGroupItem } from "@patternfly/react-core/dist/js/components/ToggleGroup";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import { Checkbox } from "@patternfly/react-core/dist/js/components/Checkbox";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import { ClipboardCopy } from "@patternfly/react-core/dist/js/components/ClipboardCopy";
import { Form, FormSection, FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { SyncAltIcon } from "@patternfly/react-icons/dist/js/icons/sync-alt-icon";
import { DataSourceIcon } from "@patternfly/react-icons/dist/js/icons/data-source-icon";
import { PeopleCarryIcon } from "@patternfly/react-icons/dist/js/icons/people-carry-icon";
import { ColumnsIcon } from "@patternfly/react-icons/dist/js/icons/columns-icon";
import { TagIcon } from "@patternfly/react-icons/dist/js/icons/tag-icon";
import { ImportIcon } from "@patternfly/react-icons/dist/js/icons/import-icon";
import { EditIcon } from "@patternfly/react-icons/dist/js/icons/edit-icon";
import * as React from "react";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
import { useState } from "react";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { addOrGetProcessAndDiagramElements } from "../mutations/addOrGetProcessAndDiagramElements";
import { parseBpmn20Drools10MetaData, setBpmn20Drools10MetaData, } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { Metadata } from "./metadata/Metadata";
import { Imports } from "./imports/Imports";
import { Correlations } from "./correlations/Correlations";
import { SlaDueDateInput } from "./slaDueDate/SlaDueDateInput";
import { VariablesFormSection } from "./variables/VariablesFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function GlobalProperties() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const thisBpmn = useBpmnEditorStore((s) => s.bpmn);
    const settings = useBpmnEditorStore((s) => s.settings);
    const process = useBpmnEditorStore((s) => { var _a; return (_a = s.bpmn.model.definitions.rootElement) === null || _a === void 0 ? void 0 : _a.find((s) => s.__$$element === "process"); });
    const correlationCount = (_b = (_a = process === null || process === void 0 ? void 0 : process.correlationSubscription) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    const importsCount = (_e = (_d = (_c = process === null || process === void 0 ? void 0 : process.extensionElements) === null || _c === void 0 ? void 0 : _c["drools:import"]) === null || _d === void 0 ? void 0 : _d.length) !== null && _e !== void 0 ? _e : 0;
    const metadataEntriesCount = (_h = (_g = (_f = process === null || process === void 0 ? void 0 : process.extensionElements) === null || _f === void 0 ? void 0 : _f["drools:metaData"]) === null || _g === void 0 ? void 0 : _g.length) !== null && _h !== void 0 ? _h : 0;
    const [isGlobalSectionExpanded, setGlobalSectionExpanded] = useState(true);
    const [isImportsSectionExpanded, setImportsSectionExpanded] = useState(false);
    const [isMetadataSectionExpanded, setMetadataSectionExpanded] = useState(false);
    const [isIdNamespaceSectionExpanded, setIdNamespaceSectionExpanded] = useState(false);
    const [isMiscSectionExpanded, setMiscSectionExpanded] = useState(false);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const [showRegenerateIdConfirmationModal, setShowRegenerateIdConfirmationModal] = useState(false);
    const [showCorrelationsModal, setShowCorrelationsModal] = useState(false);
    const closeCorrelationsModal = React.useCallback(() => {
        setShowCorrelationsModal(false);
    }, []);
    return (_jsx(_Fragment, { children: _jsxs(Form, { children: [_jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isGlobalSectionExpanded, toogleSectionExpanded: () => setGlobalSectionExpanded((prev) => !prev), icon: _jsx(DataSourceIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Process", action: _jsx(Button, { title: "Close", variant: ButtonVariant.plain, onClick: () => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = false;
                                });
                            }, children: _jsx(TimesIcon, {}) }) }), children: isGlobalSectionExpanded && (_jsx(_Fragment, { children: _jsxs(FormSection, { style: { paddingLeft: "20px", marginTop: "20px" }, children: [_jsx(FormGroup, { label: "Name", children: _jsx(TextInput, { "aria-label": "Name", type: "text", isDisabled: settings.isReadOnly, placeholder: "Enter a name...", value: process === null || process === void 0 ? void 0 : process["@_name"], onChange: (newName) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            process["@_name"] = newName;
                                        }) }) }), _jsx(FormGroup, { label: "Documentation", children: _jsx(TextArea, { "aria-label": "Documentation", type: "text", isDisabled: settings.isReadOnly, style: { resize: "vertical", minHeight: "40px" }, rows: 3, placeholder: "Enter documentation...", value: (_j = process === null || process === void 0 ? void 0 : process.documentation) === null || _j === void 0 ? void 0 : _j[0].__$$text, onChange: (newDocumentation) => bpmnEditorStoreApi.setState((s) => {
                                            var _a;
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            (_a = process.documentation) !== null && _a !== void 0 ? _a : (process.documentation = []);
                                            process.documentation[0] = {
                                                "@_id": generateUuid(),
                                                __$$text: newDocumentation,
                                            };
                                        }) }) }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(FormGroup, { fieldId: "kie-bpmn-editor--global-properties-panel--adhoc", children: _jsx(Checkbox, { label: "Ad-hoc", id: "kie-bpmn-editor--global-properties-panel--adhoc", name: "is-adhoc", "aria-label": "Adhoc", isChecked: (_k = process === null || process === void 0 ? void 0 : process["@_drools:adHoc"]) !== null && _k !== void 0 ? _k : false, onChange: (checked) => {
                                            bpmnEditorStoreApi.setState((s) => {
                                                const { process } = addOrGetProcessAndDiagramElements({
                                                    definitions: s.bpmn.model.definitions,
                                                });
                                                process["@_drools:adHoc"] = checked;
                                            });
                                        } }) }), _jsx(SlaDueDateInput, { element: process })] }) })) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isImportsSectionExpanded, toogleSectionExpanded: () => setImportsSectionExpanded((prev) => !prev), icon: _jsx(ImportIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Imports" + (importsCount > 0 ? ` (${importsCount})` : "") }), children: isImportsSectionExpanded && (_jsx(_Fragment, { children: _jsx(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: _jsx(Imports, { p: process }) }) })) }), _jsx(VariablesFormSection, { p: process }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: "modal", icon: _jsx(PeopleCarryIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Collaboration" + (correlationCount > 0 ? ` (${correlationCount})` : ""), toogleSectionExpanded: () => setShowCorrelationsModal(true), action: _jsx(Button, { title: "Manage", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowCorrelationsModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(EditIcon, {}) }) }) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isMetadataSectionExpanded, toogleSectionExpanded: () => setMetadataSectionExpanded((prev) => !prev), icon: _jsx(ColumnsIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Metadata" + (metadataEntriesCount > 0 ? ` (${metadataEntriesCount})` : "") }), children: isMetadataSectionExpanded && (_jsx(_Fragment, { children: _jsx(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: _jsx(Metadata, { obj: process }) }) })) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isIdNamespaceSectionExpanded, toogleSectionExpanded: () => setIdNamespaceSectionExpanded((prev) => !prev), icon: _jsx(TagIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "ID & Namespace", action: _jsx(Button, { title: "Re-generate ID & Namespace", variant: ButtonVariant.plain, isDisabled: settings.isReadOnly, onClick: () => setShowRegenerateIdConfirmationModal(true), style: { paddingBottom: 0, paddingTop: 0 }, children: _jsx(SyncAltIcon, {}) }) }), children: isIdNamespaceSectionExpanded && (_jsx(_Fragment, { children: _jsxs(FormSection, { style: { paddingLeft: "20px", marginTop: "20px" }, children: [_jsx(FormGroup, { label: "ID", children: _jsx(ClipboardCopy, { placeholder: "Enter an ID...", isReadOnly: settings.isReadOnly, hoverTip: "Copy", clickTip: "Copied", onChange: (newId) => {
                                            bpmnEditorStoreApi.setState((state) => {
                                                state.bpmn.model.definitions["@_id"] = `${newId}`;
                                            });
                                        }, children: thisBpmn.model.definitions["@_id"] }) }), _jsx(FormGroup, { label: "Namespace", children: _jsx(ClipboardCopy, { placeholder: "Enter a Namespace...", isReadOnly: settings.isReadOnly, hoverTip: "Copy", clickTip: "Copied", onChange: (newNamespace) => {
                                            bpmnEditorStoreApi.setState((state) => {
                                                state.bpmn.model.definitions["@_targetNamespace"] = `${newNamespace}`;
                                            });
                                        }, children: thisBpmn.model.definitions["@_targetNamespace"] }) })] }) })) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isMiscSectionExpanded, toogleSectionExpanded: () => setMiscSectionExpanded((prev) => !prev), title: "Misc." }), children: isMiscSectionExpanded && (_jsx(_Fragment, { children: _jsxs(FormSection, { style: { paddingLeft: "20px", marginTop: "20px" }, children: [_jsx(FormGroup, { label: "Expression language", children: _jsx(TextInput, { "aria-label": "Expression language", type: "text", isDisabled: settings.isReadOnly, placeholder: "Enter an expression language...", value: thisBpmn.model.definitions["@_expressionLanguage"], onChange: (newExprLang) => bpmnEditorStoreApi.setState((state) => {
                                            state.bpmn.model.definitions["@_expressionLanguage"] = newExprLang;
                                        }) }) }), _jsx(FormGroup, { label: "Type", children: _jsxs(ToggleGroup, { isCompact: true, "aria-label": "Process type", children: [_jsx(ToggleGroupItem, { text: "Private", isDisabled: settings.isReadOnly, isSelected: (process === null || process === void 0 ? void 0 : process["@_processType"]) === "Private", onChange: () => {
                                                    bpmnEditorStoreApi.setState((s) => {
                                                        const { process } = addOrGetProcessAndDiagramElements({
                                                            definitions: s.bpmn.model.definitions,
                                                        });
                                                        process["@_processType"] = "Private";
                                                    });
                                                } }), _jsx(ToggleGroupItem, { text: "Public", isDisabled: settings.isReadOnly, isSelected: (process === null || process === void 0 ? void 0 : process["@_processType"]) === "Public", onChange: () => {
                                                    bpmnEditorStoreApi.setState((s) => {
                                                        const { process } = addOrGetProcessAndDiagramElements({
                                                            definitions: s.bpmn.model.definitions,
                                                        });
                                                        process["@_processType"] = "Public";
                                                    });
                                                } })] }) }), _jsx(FormGroup, { fieldId: "kie-bpmn-editor--global-properties-panel--executable", children: _jsx(Checkbox, { label: "Executable", id: "kie-bpmn-editor--global-properties-panel--executable", name: "is-executable", "aria-label": "Executable", isChecked: (_l = process === null || process === void 0 ? void 0 : process["@_isExecutable"]) !== null && _l !== void 0 ? _l : true, onChange: (checked) => {
                                            bpmnEditorStoreApi.setState((s) => {
                                                const { process } = addOrGetProcessAndDiagramElements({
                                                    definitions: s.bpmn.model.definitions,
                                                });
                                                process["@_isExecutable"] = checked;
                                            });
                                        } }) }), _jsx(FormGroup, { label: "Package name", children: _jsx(TextInput, { "aria-label": "Package name", type: "text", isDisabled: settings.isReadOnly, rows: 3, placeholder: "Enter a package name...", value: process === null || process === void 0 ? void 0 : process["@_drools:packageName"], onChange: (newPackageName) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            process["@_drools:packageName"] = newPackageName;
                                        }) }) }), _jsx(FormGroup, { label: "Version", children: _jsx(TextInput, { "aria-label": "Version", type: "text", isDisabled: settings.isReadOnly, placeholder: "Enter a version...", value: process === null || process === void 0 ? void 0 : process["@_drools:version"], onChange: (newVersion) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            process["@_drools:version"] = newVersion;
                                        }) }) }), _jsx(FormGroup, { label: "Process Instance Description", children: _jsx(TextArea, { "aria-label": "Process Instance Description", type: "text", isDisabled: settings.isReadOnly, style: { resize: "vertical", minHeight: "40px" }, rows: 3, placeholder: "Enter a description...", value: parseBpmn20Drools10MetaData(process).get("customDescription"), onChange: (newDescription) => bpmnEditorStoreApi.setState((s) => {
                                            const { process } = addOrGetProcessAndDiagramElements({
                                                definitions: s.bpmn.model.definitions,
                                            });
                                            setBpmn20Drools10MetaData(process, "customDescription", newDescription);
                                        }) }) })] }) })) }), _jsx("br", {}), _jsx("br", {}), _jsx("br", {}), _jsx(Correlations, { isOpen: showCorrelationsModal, onClose: closeCorrelationsModal }), _jsxs(Modal, { "aria-labelledby": "Regenerate ID & Namespace", variant: ModalVariant.small, isOpen: showRegenerateIdConfirmationModal, onClose: () => setShowRegenerateIdConfirmationModal(false), actions: [
                        _jsx(Button, { variant: ButtonVariant.primary, isDisabled: settings.isReadOnly, onClick: () => {
                                setShowRegenerateIdConfirmationModal(false);
                                bpmnEditorStoreApi.setState((state) => {
                                    state.bpmn.model.definitions["@_id"] = generateUuid();
                                    state.bpmn.model.definitions["@_targetNamespace"] = `https://kie.apache.org/bpmn/${generateUuid()}`;
                                });
                            }, children: "Yes, re-generate ID and Namespace" }, "confirm"),
                        _jsx(Button, { variant: "link", onClick: () => setShowRegenerateIdConfirmationModal(false), children: "Cancel" }, "cancel"),
                    ], children: ["Re-generating the ID and Namespace of a BPMN file will potentially break references to it.", _jsx("br", {}), _jsx("br", {}), "Are you sure you want to continue?"] })] }) }));
}
//# sourceMappingURL=GlobalProperties.js.map