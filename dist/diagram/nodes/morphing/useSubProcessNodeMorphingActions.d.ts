import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../../normalization/normalize";
export type SubProcess = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "adHocSubProcess" | "subProcess">>;
export declare function useSubProcessNodeMorphingActions(subProcess: SubProcess): ({
    readonly icon: JSX.Element;
    readonly key: "1";
    readonly title: "Sub-process";
    readonly id: "subProcess";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "2";
    readonly title: "Event";
    readonly id: "eventSubProcess";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "3";
    readonly title: "Multi-instance";
    readonly id: "multiInstanceSubProcess";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "4";
    readonly title: "Ad-hoc";
    readonly id: "adHocSubProcess";
    readonly action: () => void;
})[];
//# sourceMappingURL=useSubProcessNodeMorphingActions.d.ts.map