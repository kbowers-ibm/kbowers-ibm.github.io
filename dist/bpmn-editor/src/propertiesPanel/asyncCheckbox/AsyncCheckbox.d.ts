import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./AsyncCheckbox.css";
export type WithAsync = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "businessRuleTask" | "adHocSubProcess" | "userTask" | "scriptTask" | "subProcess" | "transaction" | "callActivity" | "serviceTask">>;
export declare function AsyncCheckbox({ element }: {
    element: WithAsync;
}): JSX.Element;
//# sourceMappingURL=AsyncCheckbox.d.ts.map