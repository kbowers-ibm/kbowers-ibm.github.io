import { BPMN20__tDefinitions, BPMN20__tLane, BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../normalization/normalize";
export type FoundElement<F> = {
    owner: ElementOwner;
    element: F;
    array: ElementVisitorArgs["element"][];
    index: number;
};
type ElementOwner = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tDefinitions["rootElement"]>>, "process"> | ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "subProcess" | "adHocSubProcess" | "transaction">>;
type ElementVisitorArgs = {
    element: Normalized<Unpacked<NonNullable<BPMN20__tProcess["flowElement"] | BPMN20__tProcess["artifact"]>>>;
    index: number;
    array: ElementVisitorArgs["element"][];
    owner: ElementOwner;
};
type LaneOwner = Normalized<Unpacked<ElementFilter<Unpacked<NonNullable<BPMN20__tDefinitions["rootElement"]>>, "process">["laneSet"]>>;
type LaneVisitorArgs = {
    lane: BPMN20__tLane;
    index: number;
    array: LaneVisitorArgs["lane"][];
    owner: LaneOwner;
};
export declare function visitFlowElementsAndArtifacts(process: ElementOwner, visitor: (args: ElementVisitorArgs) => boolean | void): void;
export declare function visitLanes(process: ElementOwner, visitor: (args: LaneVisitorArgs) => boolean | void): void;
export {};
//# sourceMappingURL=_elementVisitor.d.ts.map