import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
export type WithLinkExpression = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "intermediateThrowEvent" | "intermediateCatchEvent" | "boundaryEvent">>;
export declare function LinkSelector({ element }: {
    element: WithLinkExpression;
}): JSX.Element;
//# sourceMappingURL=LinkSelector.d.ts.map