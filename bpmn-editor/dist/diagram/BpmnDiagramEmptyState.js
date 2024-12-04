import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStatePrimary, } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { AngleDoubleRightIcon } from "@patternfly/react-icons/dist/js/icons/angle-double-right-icon";
import { MousePointerIcon } from "@patternfly/react-icons/dist/js/icons/mouse-pointer-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { UserIcon } from "@patternfly/react-icons/dist/js/icons/user-icon";
import { useBpmnEditorStoreApi } from "../store/StoreContext";
export function BpmnDiagramEmptyState({ setShowEmptyState, }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    return (_jsx(Bullseye, { style: {
            position: "absolute",
            width: "100%",
            pointerEvents: "none",
            zIndex: 1,
            height: "auto",
            marginTop: "120px",
        }, children: _jsxs("div", { className: "kie-bpmn-editor--diagram-empty-state", children: [_jsx(Button, { title: "Close", style: {
                        position: "absolute",
                        top: "8px",
                        right: 0,
                    }, variant: ButtonVariant.plain, icon: _jsx(TimesIcon, {}), onClick: () => setShowEmptyState(false) }), _jsxs(EmptyState, { children: [_jsx(EmptyStateIcon, { icon: MousePointerIcon }), _jsx(Title, { size: "md", headingLevel: "h4", children: `This BPMN is empty` }), _jsx(EmptyStateBody, { children: "Start by dragging nodes from the Palette" }), _jsx("br", {}), _jsx(EmptyStateBody, { children: "or" }), _jsxs(EmptyStatePrimary, { children: [_jsx(Button, { variant: ButtonVariant.link, icon: _jsx(UserIcon, {}), onClick: () => {
                                    }, children: "New Human Task..." }), _jsx("br", {}), _jsx(Button, { variant: ButtonVariant.link, icon: _jsx(AngleDoubleRightIcon, {}), onClick: () => {
                                    }, children: "New Straight-Through Process (STP)..." })] })] })] }) }));
}
//# sourceMappingURL=BpmnDiagramEmptyState.js.map