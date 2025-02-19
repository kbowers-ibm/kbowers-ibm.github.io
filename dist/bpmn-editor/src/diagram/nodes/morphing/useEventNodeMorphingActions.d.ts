import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/src/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
export type Event = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "startEvent" | "endEvent" | "boundaryEvent" | "intermediateCatchEvent" | "intermediateThrowEvent">>;
export declare function useEventNodeMorphingActions(event: Event): ({
    readonly icon: JSX.Element;
    readonly key: "1";
    readonly title: "None";
    readonly id: "none";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "2";
    readonly title: "Message";
    readonly id: "messageEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "3";
    readonly title: "Timer";
    readonly id: "timerEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "4";
    readonly title: "Error";
    readonly id: "errorEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "5";
    readonly title: "Escalation";
    readonly id: "escalationEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "6";
    readonly title: "Compensation";
    readonly id: "compensateEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "7";
    readonly title: "Conditional";
    readonly id: "conditionalEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "8";
    readonly title: "Link";
    readonly id: "linkEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "9";
    readonly title: "Signal";
    readonly id: "signalEventDefinition";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "0";
    readonly title: "Terminate";
    readonly id: "terminateEventDefinition";
    readonly action: () => void;
})[];
//# sourceMappingURL=useEventNodeMorphingActions.d.ts.map