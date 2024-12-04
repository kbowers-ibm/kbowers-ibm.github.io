import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useBpmnEditor } from "./BpmnEditorContext";
import { Flex } from "@patternfly/react-core/dist/js/layouts/Flex";
import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStatePrimary, } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button";
import { ClipboardCopy, ClipboardCopyVariant } from "@patternfly/react-core/dist/js/components/ClipboardCopy";
import { ExternalLinkAltIcon } from "@patternfly/react-icons/dist/js/icons/external-link-alt-icon";
import { useCallback, useEffect } from "react";
export function BpmnEditorErrorFallback({ error, resetErrorBoundary }) {
    const { bpmnModelBeforeEditingRef, issueTrackerHref } = useBpmnEditor();
    const resetToLastWorkingState = useCallback(() => {
        resetErrorBoundary(bpmnModelBeforeEditingRef.current);
    }, [bpmnModelBeforeEditingRef, resetErrorBoundary]);
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (_jsx(Flex, { justifyContent: { default: "justifyContentCenter" }, style: { marginTop: "100px" }, children: _jsxs(EmptyState, { style: { maxWidth: "1280px" }, children: [_jsx(EmptyStateIcon, { icon: () => _jsx("div", { style: { fontSize: "3em" }, children: "\uD83D\uDE15" }) }), _jsx(Title, { size: "lg", headingLevel: "h4", children: "An unexpected error happened" }), _jsx(EmptyStateBody, { children: "This is a bug. Please consider reporting it so the BPMN Editor can continue improving. See the details below." }), _jsx("br", {}), _jsx(ClipboardCopy, { isReadOnly: true, isExpanded: false, hoverTip: "Copy", clickTip: "Copied", variant: ClipboardCopyVariant.expansion, style: { textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "monospace" }, children: JSON.stringify({
                        name: error.name,
                        message: error.message,
                        cause: error.cause,
                        stack: error.stack,
                    }, null, 2).replaceAll("\\n", "\n") }), _jsx("br", {}), _jsxs(EmptyStatePrimary, { children: [_jsx(Button, { variant: ButtonVariant.link, onClick: resetToLastWorkingState, children: "Try undoing last action" }), issueTrackerHref && (_jsx("a", { href: issueTrackerHref, target: "_blank", children: _jsx(Button, { variant: ButtonVariant.link, icon: _jsx(ExternalLinkAltIcon, {}), children: "File an issue..." }) }))] })] }) }));
}
//# sourceMappingURL=BpmnEditorErrorFallback.js.map