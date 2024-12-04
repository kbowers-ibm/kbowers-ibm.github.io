import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/src/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../../normalization/normalize";
export type Gateway = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "exclusiveGateway" | "inclusiveGateway" | "parallelGateway" | "eventBasedGateway" | "complexGateway">>;
export declare function useGatewayNodeMorphingActions(gateway: Gateway): ({
    readonly icon: JSX.Element;
    readonly key: "1";
    readonly title: "Parallel";
    readonly id: "parallelGateway";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "2";
    readonly title: "Exclusive";
    readonly id: "exclusiveGateway";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "3";
    readonly title: "Inclusive";
    readonly id: "inclusiveGateway";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "4";
    readonly title: "Event";
    readonly id: "eventBasedGateway";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "5";
    readonly title: "Complex";
    readonly id: "complexGateway";
    readonly action: () => void;
})[];
//# sourceMappingURL=useGatewayNodeMorphingActions.d.ts.map