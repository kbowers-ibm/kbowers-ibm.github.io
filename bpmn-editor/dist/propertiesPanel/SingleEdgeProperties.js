import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { Form, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import * as React from "react";
import { useMemo, useState } from "react";
import { AssociationPath, SequenceFlowPath } from "../diagram/edges/EdgeSvgs";
import { UnknownNodeIcon } from "../diagram/nodes/NodeIcons";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
import { assertUnreachable } from "../ts-ext/assertUnreachable";
import { AssociationProperties } from "./singleEdgeProperties/AssociationProperties";
import { SequenceFlowProperties } from "./singleEdgeProperties/SequenceFlowProperties";
import { ColumnsIcon } from "@patternfly/react-icons/dist/js/icons/columns-icon";
import { Metadata } from "./metadata/Metadata";
const handleButtonSize = 34;
const svgViewboxPadding = Math.sqrt(Math.pow(handleButtonSize, 2) / 2) - handleButtonSize / 2;
const edgeSvgViewboxSize = 25;
const nodeSvgProps = { width: 100, height: 70, x: 0, y: 15, strokeWidth: 8 };
export function SingleEdgeProperties() {
    var _a, _b;
    const [isSectionExpanded, setSectionExpanded] = React.useState(true);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const selectedEdge = useBpmnEditorStore((s) => [...s.computed(s).getDiagramData().selectedEdgesById.values()][0]);
    const { properties, title, icon } = useMemo(() => {
        var _a;
        const bpmnElement = (_a = selectedEdge === null || selectedEdge === void 0 ? void 0 : selectedEdge.data) === null || _a === void 0 ? void 0 : _a.bpmnElement;
        const e = bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element;
        switch (e) {
            case "sequenceFlow":
                return {
                    properties: _jsx(SequenceFlowProperties, { sequenceFlow: bpmnElement }),
                    title: "Sequence Flow",
                    icon: (_jsx("svg", { className: "xyflow-react-kie-diagram--round-svg-container", viewBox: `0 0 ${edgeSvgViewboxSize} ${edgeSvgViewboxSize}`, style: { padding: `${svgViewboxPadding}px` }, children: _jsx(SequenceFlowPath, { d: `M2,${edgeSvgViewboxSize - 2} L${edgeSvgViewboxSize - 2},0`, ...nodeSvgProps }) })),
                };
            case "association":
                return {
                    properties: _jsx(AssociationProperties, { association: bpmnElement }),
                    title: "Association",
                    icon: (_jsx("svg", { className: "xyflow-react-kie-diagram--round-svg-container", viewBox: `0 0 ${edgeSvgViewboxSize} ${edgeSvgViewboxSize}`, style: { padding: `${svgViewboxPadding}px` }, children: _jsx(AssociationPath, { d: `M2,${edgeSvgViewboxSize - 2} L${edgeSvgViewboxSize},0`, ...nodeSvgProps, strokeWidth: 2 }) })),
                };
            case undefined:
                return {
                    properties: (_jsx(_Fragment, { children: _jsx(FormSection, { style: { textAlign: "center" }, children: "No properties to edit." }) })),
                    title: "Unsupported",
                    icon: _jsx(UnknownNodeIcon, {}),
                };
            default:
                assertUnreachable(e);
        }
    }, [(_a = selectedEdge === null || selectedEdge === void 0 ? void 0 : selectedEdge.data) === null || _a === void 0 ? void 0 : _a.bpmnElement]);
    const [isMetadataSectionExpanded, setMetadataSectionExpanded] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Form, { children: _jsx(FormSection, { title: _jsx(SectionHeader, { icon: icon, fixed: true, expands: true, isSectionExpanded: isSectionExpanded, toogleSectionExpanded: () => setSectionExpanded((prev) => !prev), title: title, action: _jsx(Button, { title: "Close", variant: ButtonVariant.plain, onClick: () => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = false;
                                });
                            }, children: _jsx(TimesIcon, {}) }) }), children: isSectionExpanded && properties }) }), _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isMetadataSectionExpanded, toogleSectionExpanded: () => setMetadataSectionExpanded((prev) => !prev), icon: _jsx(ColumnsIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Metadata" }), children: isMetadataSectionExpanded && (_jsx(_Fragment, { children: _jsx(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: _jsx(Metadata, { obj: (_b = selectedEdge === null || selectedEdge === void 0 ? void 0 : selectedEdge.data) === null || _b === void 0 ? void 0 : _b.bpmnEdge }) }) })) })] }));
}
//# sourceMappingURL=SingleEdgeProperties.js.map