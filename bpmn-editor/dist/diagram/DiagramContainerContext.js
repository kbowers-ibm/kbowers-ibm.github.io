import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useContext, useMemo } from "react";
const DiagramContainerContext = React.createContext({
    container: {
        current: null,
    },
});
export function useBpmnEditorDiagramContainer() {
    return useContext(DiagramContainerContext);
}
export function DiagramContainerContextProvider({ container, children, }) {
    const value = useMemo(() => ({
        container,
    }), [container]);
    return _jsx(DiagramContainerContext.Provider, { value: value, children: children });
}
//# sourceMappingURL=DiagramContainerContext.js.map