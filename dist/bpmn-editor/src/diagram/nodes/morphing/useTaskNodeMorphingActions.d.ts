import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../../normalization/normalize";
export type Task = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "task" | "scriptTask" | "serviceTask" | "businessRuleTask" | "userTask" | "callActivity">>;
export declare function useTaskNodeMorphingActions(task: Task): ({
    readonly icon: JSX.Element;
    readonly key: "1";
    readonly title: "Task";
    readonly id: "task";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "2";
    readonly title: "User task";
    readonly id: "userTask";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "3";
    readonly title: "Business Rule task";
    readonly id: "businessRuleTask";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "4";
    readonly title: "Service task";
    readonly id: "serviceTask";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "5";
    readonly title: "Script task";
    readonly id: "scriptTask";
    readonly action: () => void;
} | {
    readonly icon: JSX.Element;
    readonly key: "6";
    readonly title: "Call activity";
    readonly id: "callActivity";
    readonly action: () => void;
})[];
//# sourceMappingURL=useTaskNodeMorphingActions.d.ts.map