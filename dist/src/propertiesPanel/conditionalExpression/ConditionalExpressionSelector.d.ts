import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
export type WithConditionalExpression = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "startEvent" | "intermediateCatchEvent" | "boundaryEvent">>;
export declare function ConditionalEventSelector({ element }: {
    element: WithConditionalExpression;
}): JSX.Element;
//# sourceMappingURL=ConditionalExpressionSelector.d.ts.map