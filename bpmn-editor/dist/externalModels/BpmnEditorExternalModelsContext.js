import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useContext, useMemo } from "react";
const BpmnEditorExternalModelsContext = React.createContext({});
export function useExternalModels() {
    return useContext(BpmnEditorExternalModelsContext);
}
export function BpmnEditorExternalModelsContextProvider(_props) {
    const { children, ...props } = _props;
    const value = useMemo(() => {
        return {
            externalModelsByNamespace: props.externalModelsByNamespace,
            onRequestExternalModelByPath: props.onRequestExternalModelByPath,
            onRequestExternalModelsAvailableToInclude: props.onRequestExternalModelsAvailableToInclude,
        };
    }, [
        props.externalModelsByNamespace,
        props.onRequestExternalModelByPath,
        props.onRequestExternalModelsAvailableToInclude,
    ]);
    return _jsx(BpmnEditorExternalModelsContext.Provider, { value: value, children: children });
}
//# sourceMappingURL=BpmnEditorExternalModelsContext.js.map