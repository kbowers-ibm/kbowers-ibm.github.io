import { BpmnLatestModel } from "@kie-tools/bpmn-marshaller";
import { ComputedStateCache } from "@kie-tools/xyflow-react-kie-diagram/dist/store/ComputedStateCache";
import { XyFlowDiagramState, XyFlowReactKieDiagramEdgeStatus, XyFlowReactKieDiagramNodeStatus } from "@kie-tools/xyflow-react-kie-diagram/dist/store/State";
import { computeBoundaryEventIdsByAttachedBpmnElementId } from "./computeBoundaryEventIdsByAttachedBpmnElementId";
import { BpmnDiagramEdgeData } from "../diagram/BpmnDiagramDomain";
import { BpmnNodeType } from "../diagram/BpmnDiagramDomain";
import { BpmnDiagramNodeData } from "../diagram/BpmnDiagramDomain";
import { Normalized } from "../normalization/normalize";
import { computeDiagramData } from "./computeDiagramData";
export declare enum BpmnDiagramLhsPanel {
    NONE = "NONE"
}
export type BpmnXyFlowDiagramState = XyFlowDiagramState<State, BpmnNodeType, BpmnDiagramNodeData, BpmnDiagramEdgeData>;
export interface State extends BpmnXyFlowDiagramState {
    computed: (s: State) => {
        getDiagramData(): ReturnType<typeof computeDiagramData>;
        getBoundaryEventIdsByAttachedBpmnElementId(): ReturnType<typeof computeBoundaryEventIdsByAttachedBpmnElementId>;
        isDiagramEditingInProgress(): boolean;
    };
    dispatch: (s: State) => {
        setNodeStatus: (nodeId: string, status: Partial<XyFlowReactKieDiagramNodeStatus>) => any;
        setEdgeStatus: (edgeId: string, status: Partial<XyFlowReactKieDiagramEdgeStatus>) => any;
        reset(model: Normalized<BpmnLatestModel>): void;
    };
    bpmn: {
        model: Normalized<BpmnLatestModel>;
    };
    settings: {
        isReadOnly: boolean;
    };
    focus: {
        consumableId: string | undefined;
    };
    propertiesPanel: {
        isOpen: boolean;
    };
    diagram: {
        overlaysPanel: {
            isOpen: boolean;
        };
        openLhsPanel: BpmnDiagramLhsPanel;
        overlays: {
            enableNodeHierarchyHighlight: boolean;
            enableCustomNodeStyles: boolean;
        };
        isEditingStyle: boolean;
    };
}
export declare const getDefaultStaticState: () => Omit<State, "bpmn" | "computed" | "dispatch">;
export declare function createBpmnEditorStore(model: BpmnLatestModel, computedCache: ComputedStateCache<ReturnType<State["computed"]>>): import("zustand").UseBoundStore<import("zustand/middleware/immer").WithImmer<import("zustand").StoreApi<State>>>;
//# sourceMappingURL=Store.d.ts.map