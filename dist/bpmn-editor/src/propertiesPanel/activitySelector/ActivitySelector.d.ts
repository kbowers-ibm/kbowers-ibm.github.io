import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./ActivitySelector.css";
export type WithActivity = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "intermediateThrowEvent" | "endEvent">>;
export declare function ActivitySelector({ element }: {
    element: WithActivity;
}): JSX.Element;
//# sourceMappingURL=ActivitySelector.d.ts.map