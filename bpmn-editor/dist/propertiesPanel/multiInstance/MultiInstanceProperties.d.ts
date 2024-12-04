import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { Normalized } from "../../normalization/normalize";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./MultiInstanceProperties.css";
export type WithMultiInstanceProperties = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "callActivity" | "subProcess" | "userTask" | "serviceTask">>;
export declare function MultiInstanceProperties({ element }: {
    element: WithMultiInstanceProperties;
}): JSX.Element;
//# sourceMappingURL=MultiInstanceProperties.d.ts.map