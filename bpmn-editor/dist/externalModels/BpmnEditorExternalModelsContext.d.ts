import * as React from "react";
import { OnRequestExternalModelsAvailableToInclude, OnRequestExternalModelByPath, ExternalModelsIndex } from "../BpmnEditor";
export interface BpmnEditorExternalModelsContextType {
    onRequestExternalModelByPath?: OnRequestExternalModelByPath;
    onRequestExternalModelsAvailableToInclude?: OnRequestExternalModelsAvailableToInclude;
    externalModelsByNamespace?: ExternalModelsIndex;
}
export declare function useExternalModels(): BpmnEditorExternalModelsContextType;
export declare function BpmnEditorExternalModelsContextProvider(_props: React.PropsWithChildren<BpmnEditorExternalModelsContextType>): JSX.Element;
//# sourceMappingURL=BpmnEditorExternalModelsContext.d.ts.map