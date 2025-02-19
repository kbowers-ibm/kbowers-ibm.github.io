import "@patternfly/react-core/dist/styles/base.css";
import "reactflow/dist/style.css";
import { AllBpmnMarshallers, BpmnLatestModel } from "@kie-tools/bpmn-marshaller";
import * as React from "react";
import { Normalized } from "./normalization/normalize";
import { Commands } from "./commands/CommandsContextProvider";
import "@kie-tools/xyflow-react-kie-diagram/dist/patternfly-customizations.css";
import "@kie-tools/xyflow-react-kie-diagram/dist/xyflow-customizations.css";
import "./BpmnEditor.css";
export type BpmnEditorRef = {
    reset: (mode: BpmnLatestModel) => void;
    getDiagramSvg: () => Promise<string | undefined>;
    getCommands: () => Commands;
};
export type OnBpmnModelChange = (model: Normalized<BpmnLatestModel>) => void;
export type OnRequestToJumpToPath = (normalizedPosixPathRelativeToTheOpenFile: string) => void;
export type OnRequestToResolvePath = (normalizedPosixPathRelativeToTheOpenFile: string) => string;
export type OnRequestExternalModelsAvailableToInclude = () => Promise<string[]>;
export type OnRequestExternalModelByPath = (normalizedPosixPathRelativeToTheOpenFile: string) => Promise<ExternalModel | null>;
export type ExternalModelsIndex = Record<string, ExternalModel | undefined>;
export type ExternalModel = {
    type: "dmn";
} & ExternalDmn;
export type ExternalDmnsIndex = Map<string, ExternalDmn>;
export type ExternalDmn = {
    model: Normalized<BpmnLatestModel>;
    normalizedPosixPathRelativeToTheOpenFile: string;
    svg: string;
};
export type BpmnEditorProps = {
    model: BpmnLatestModel;
    originalVersion?: AllBpmnMarshallers["version"];
    onModelChange?: OnBpmnModelChange;
    externalContextName?: string;
    externalContextDescription?: string;
    issueTrackerHref?: string;
    onRequestToJumpToPath?: OnRequestToJumpToPath;
    onRequestToResolvePath?: OnRequestToResolvePath;
    onModelDebounceStateChanged?: (changed: boolean) => void;
};
export declare const BpmnEditorInternal: ({ model, originalVersion, onModelChange, onModelDebounceStateChanged, forwardRef, }: BpmnEditorProps & {
    forwardRef?: React.Ref<BpmnEditorRef>;
}) => JSX.Element;
export declare const BpmnEditor: React.ForwardRefExoticComponent<BpmnEditorProps & React.RefAttributes<BpmnEditorRef>>;
//# sourceMappingURL=BpmnEditor.d.ts.map