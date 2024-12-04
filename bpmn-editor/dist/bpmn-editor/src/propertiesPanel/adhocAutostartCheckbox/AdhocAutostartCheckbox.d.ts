import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./AdhocAutostartCheckbox.css";
export type WithAdhocAutostart = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "adHocSubProcess" | "userTask" | "scriptTask" | "businessRuleTask" | "serviceTask">>;
export declare function AdhocAutostartCheckbox({ element }: {
    element: WithAdhocAutostart;
}): JSX.Element;
//# sourceMappingURL=AdhocAutostartCheckbox.d.ts.map