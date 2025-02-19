import { BPMN20__tDefinitions, BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../normalization/normalize";
export type WithSlaDueDate = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tDefinitions["rootElement"]>>, "process"> | ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "startEvent" | "intermediateCatchEvent" | "boundaryEvent" | "callActivity" | "subProcess" | "adHocSubProcess" | "transaction" | "userTask" | "serviceTask" | "businessRuleTask">>;
export declare function SlaDueDateInput({ element }: {
    element: WithSlaDueDate;
}): JSX.Element;
//# sourceMappingURL=SlaDueDateInput.d.ts.map