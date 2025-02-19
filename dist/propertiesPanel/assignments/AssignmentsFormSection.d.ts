import * as React from "react";
import { BPMN20__tDataInputAssociation, BPMN20__tDataOutputAssociation, BPMN20__tProcess } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import "./AssignmentsFormSection.css";
import { ElementFilter } from "@kie-tools/xml-parser-ts/dist/elementFilter";
import { Unpacked } from "@kie-tools/xyflow-react-kie-diagram/dist/tsExt/tsExt";
import { Normalized } from "../../normalization/normalize";
export type WithAssignments = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "callActivity" | "businessRuleTask" | "userTask" | "serviceTask" | "scriptTask">>;
export type WithOutputAssignments = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "startEvent" | "intermediateCatchEvent" | "boundaryEvent">>;
export type WithInputAssignments = Normalized<ElementFilter<Unpacked<NonNullable<BPMN20__tProcess["flowElement"]>>, "endEvent" | "intermediateThrowEvent">>;
export declare const blacklistedNames: Set<string>;
export declare function AssignmentsFormSection({ sectionLabel, children, }: React.PropsWithChildren<{
    sectionLabel?: string;
}>): JSX.Element;
export declare function BidirectionalAssignmentsFormSection({ element }: {
    element: WithAssignments;
}): JSX.Element;
export declare function InputOnlyAssociationFormSection({ element }: {
    element: WithInputAssignments;
}): JSX.Element;
export declare function OutputOnlyAssociationFormSection({ element }: {
    element: WithOutputAssignments;
}): JSX.Element;
export declare function AssignmentList({ section, element, }: {
    section: "input";
    element: WithAssignments | (WithInputAssignments & {
        dataOutputAssociation?: BPMN20__tDataOutputAssociation[];
    });
} | {
    section: "output";
    element: WithAssignments | (WithOutputAssignments & {
        dataInputAssociation?: BPMN20__tDataInputAssociation[];
    });
}): JSX.Element;
//# sourceMappingURL=AssignmentsFormSection.d.ts.map