import "@kie-tools/bpmn-marshaller/dist/drools-extension";
import { Normalized } from "../../normalization/normalize";
import { BPMN20__tDefinitions, BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import "./Variables.css";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
export type WithVariables = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tDefinitions["rootElement"]>>, "process"> | ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "subProcess" | "adHocSubProcess" | "transaction">>;
export declare function Variables({ p }: {
    p: undefined | WithVariables;
}): JSX.Element;
//# sourceMappingURL=Variables.d.ts.map