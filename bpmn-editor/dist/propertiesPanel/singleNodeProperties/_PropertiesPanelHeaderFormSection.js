import { jsx as _jsx } from "react/jsx-runtime";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import * as React from "react";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
export function PropertiesPanelHeaderFormSection({ icon, children, title, }) {
    const [isSectionExpanded, setSectionExpanded] = React.useState(true);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(FormSection, { title: _jsx(SectionHeader, { icon: icon, expands: true, isSectionExpanded: isSectionExpanded, toogleSectionExpanded: () => setSectionExpanded((prev) => !prev), title: title, action: _jsx(Button, { title: "Close", variant: ButtonVariant.plain, onClick: () => {
                    bpmnEditorStoreApi.setState((state) => {
                        state.propertiesPanel.isOpen = false;
                    });
                }, children: _jsx(TimesIcon, {}) }) }), children: isSectionExpanded && (_jsx(FormSection, { style: {
                paddingLeft: "20px",
                marginTop: "20px",
            }, children: children })) }));
}
//# sourceMappingURL=_PropertiesPanelHeaderFormSection.js.map