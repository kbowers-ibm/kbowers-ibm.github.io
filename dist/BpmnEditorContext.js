import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useContext, useMemo, useRef } from "react";
const BpmnEditorContext = React.createContext({});
export function useBpmnEditor() {
    return useContext(BpmnEditorContext);
}
export function BpmnEditorContextProvider(props) {
    const bpmnModelBeforeEditingRef = useRef(props.model);
    const bpmnEditorRootElementRef = useRef(null);
    const value = useMemo(() => ({
        bpmnModelBeforeEditingRef,
        bpmnEditorRootElementRef,
        externalContextDescription: props.externalContextDescription,
        externalContextName: props.externalContextName,
        issueTrackerHref: props.issueTrackerHref,
        onRequestToJumpToPath: props.onRequestToJumpToPath,
        onRequestToResolvePath: props.onRequestToResolvePath,
    }), [
        props.externalContextDescription,
        props.externalContextName,
        props.issueTrackerHref,
        props.onRequestToJumpToPath,
        props.onRequestToResolvePath,
    ]);
    return _jsx(BpmnEditorContext.Provider, { value: value, children: props.children });
}
//# sourceMappingURL=BpmnEditorContext.js.map