import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { Form, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { Text, TextContent, TextVariants } from "@patternfly/react-core/dist/js/components/Text";
import { Truncate } from "@patternfly/react-core/dist/js/components/Truncate";
import { Flex } from "@patternfly/react-core/dist/js/layouts/Flex";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import * as React from "react";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
export function MixedNodesAndEdgesProperties() {
    const [isSectionExpanded, setSectionExpanded] = React.useState(true);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const size = useBpmnEditorStore((s) => s.computed(s).getDiagramData().selectedNodesById.size + s.computed(s).getDiagramData().selectedEdgesById.size);
    return (_jsxs(_Fragment, { children: [_jsx(Form, { children: _jsxs(FormSection, { title: _jsx(SectionHeader, { fixed: true, isSectionExpanded: isSectionExpanded, toogleSectionExpanded: () => setSectionExpanded((prev) => !prev), title: _jsx(Flex, { justifyContent: { default: "justifyContentCenter" }, children: _jsx(TextContent, { children: _jsx(Text, { component: TextVariants.h4, children: _jsx(Truncate, { content: `Edges and nodes selected (${size})`, position: "middle", trailingNumChars: size.toString().length + 3 }) }) }) }), action: _jsx(Button, { title: "Close", variant: ButtonVariant.plain, onClick: () => {
                                bpmnEditorStoreApi.setState((state) => {
                                    state.propertiesPanel.isOpen = false;
                                });
                            }, children: _jsx(TimesIcon, {}) }) }), children: [_jsx("br", {}), _jsx(FormSection, { style: { textAlign: "center" }, children: "Can't edit properties when both nodes and edges are selected." })] }) }), _jsx("br", {}), _jsx("br", {}), _jsxs(Flex, { justifyContent: { default: "justifyContentSpaceBetween" }, children: [_jsx(Button, { variant: ButtonVariant.link, onClick: () => {
                            bpmnEditorStoreApi.setState((s) => {
                                s.xyFlowReactKieDiagram._selectedEdges = [];
                            });
                        }, children: "Select only nodes" }), _jsx(Button, { variant: ButtonVariant.link, onClick: () => {
                            bpmnEditorStoreApi.setState((s) => {
                                s.xyFlowReactKieDiagram._selectedNodes = [];
                            });
                        }, children: "Select only edges" })] })] }));
}
//# sourceMappingURL=MixedNodesAndEdgesProperties.js.map