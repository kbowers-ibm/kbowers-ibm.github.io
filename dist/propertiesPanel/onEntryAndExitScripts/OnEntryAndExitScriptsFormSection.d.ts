import "./OnEntryAndExitScriptsFormSection.css";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../normalization/normalize";
export type WithOnEntryAndExitScripts = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "callActivity" | "businessRuleTask" | "userTask" | "serviceTask" | "scriptTask" | "subProcess" | "transaction" | "adHocSubProcess">>;
export declare function OnEntryAndExitScriptsFormSection({ element }: {
    element: WithOnEntryAndExitScripts;
}): JSX.Element;
//# sourceMappingURL=OnEntryAndExitScriptsFormSection.d.ts.map