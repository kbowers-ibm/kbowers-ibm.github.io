import { BPMN20__tProcess, BPMNDI__BPMNEdge, BPMNDI__BPMNShape } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import * as RF from "reactflow";
import { Normalized } from "../normalization/normalize";
import { State } from "../store/Store";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
export declare const BPMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE: "application/json+kie-bpmn-editor--diagram";
export type BpmnEditorDiagramClipboard = {
    mimeType: typeof BPMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE;
    namespaceWhereClipboardWasCreatedFrom: string;
    processFlowElements: NonNullable<Unpacked<Normalized<BPMN20__tProcess>["flowElement"]>>[];
    artifacts: NonNullable<Unpacked<Normalized<BPMN20__tProcess>["artifact"]>>[];
    shapes: Normalized<BPMNDI__BPMNShape>[];
    edges: Normalized<BPMNDI__BPMNEdge>[];
};
export declare function buildClipboardFromDiagram(xyFlowState: RF.ReactFlowState, bpmnEditorState: State): any;
export declare function getClipboard<T extends {
    mimeType: string;
}>(text: string, mimeType: string): T | undefined;
//# sourceMappingURL=Clipboard.d.ts.map