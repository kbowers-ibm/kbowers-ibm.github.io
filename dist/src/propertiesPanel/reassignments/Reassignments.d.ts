import "./Reassignments.css";
import { BPMN20__tUserTask } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { Normalized } from "../../normalization/normalize";
export declare function Reassignments({ isOpen, onClose, element, }: {
    isOpen: boolean;
    onClose: () => void;
    element: Normalized<BPMN20__tUserTask> & {
        __$$element: "userTask";
    };
}): JSX.Element;
//# sourceMappingURL=Reassignments.d.ts.map