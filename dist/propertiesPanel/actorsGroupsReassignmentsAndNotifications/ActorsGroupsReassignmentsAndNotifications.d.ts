import { Normalized } from "../../normalization/normalize";
import { BPMN20__tLane, BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { ElementExclusion } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
export declare function ActorsGroupsReassignmentsAndNotifications({ element, }: {
    element: Normalized<ElementExclusion<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "sequenceFlow"> | (BPMN20__tLane & {
        __$$element: "lane";
    })>;
}): JSX.Element;
//# sourceMappingURL=ActorsGroupsReassignmentsAndNotifications.d.ts.map