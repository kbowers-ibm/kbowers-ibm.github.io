import * as React from "react";
import { BpmnEditorProps } from "./BpmnEditor";
import { BpmnLatestModel } from "@kie-tools/bpmn-marshaller";
export type BpmnEditorContextProviderProps = Pick<BpmnEditorProps, "externalContextDescription" | "externalContextName" | "issueTrackerHref" | "model" | "onRequestToJumpToPath" | "onRequestToResolvePath">;
export type BpmnModelBeforeEditing = BpmnLatestModel;
export type BpmnEditorContextType = Pick<BpmnEditorContextProviderProps, "externalContextDescription" | "externalContextName" | "issueTrackerHref" | "onRequestToJumpToPath" | "onRequestToResolvePath"> & {
    bpmnModelBeforeEditingRef: React.MutableRefObject<BpmnModelBeforeEditing>;
    bpmnEditorRootElementRef: React.RefObject<HTMLDivElement>;
};
export declare function useBpmnEditor(): BpmnEditorContextType;
export declare function BpmnEditorContextProvider(props: React.PropsWithChildren<BpmnEditorContextProviderProps>): JSX.Element;
//# sourceMappingURL=BpmnEditorContext.d.ts.map