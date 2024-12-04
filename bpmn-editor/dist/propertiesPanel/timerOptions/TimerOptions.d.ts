import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./TimerOptions.css";
export type WithTimer = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "startEvent" | "intermediateCatchEvent" | "intermediateThrowEvent" | "endEvent" | "boundaryEvent">>;
export declare function TimerOptions({ element }: {
    element: WithTimer;
}): JSX.Element;
//# sourceMappingURL=TimerOptions.d.ts.map