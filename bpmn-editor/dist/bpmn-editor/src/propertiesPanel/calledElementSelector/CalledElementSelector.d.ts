import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./CalledElementSelector.css";
export type WithCalledElement = undefined | Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "callActivity">>;
export declare function CalledElementSelector({ element }: {
    element: WithCalledElement;
}): JSX.Element;
//# sourceMappingURL=CalledElementSelector.d.ts.map