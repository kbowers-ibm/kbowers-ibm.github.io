import { Normalized } from "../../normalization/normalize";
import { BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import "./MultiInstanceCheckbox.css";
export type WithMultipleInstance = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "callActivity" | "userTask" | "serviceTask">>;
export declare function MultiInstanceCheckbox({ element }: {
    element: WithMultipleInstance;
}): JSX.Element;
//# sourceMappingURL=MultiInstanceCheckbox.d.ts.map