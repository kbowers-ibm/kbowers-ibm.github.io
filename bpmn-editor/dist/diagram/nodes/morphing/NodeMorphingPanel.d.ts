import * as React from "react";
import "./NodeMorphingPanel.css";
import { MorphingAction } from "./MorphingAction";
export declare function NodeMorphingPanel<A extends MorphingAction>({ isToggleVisible, isExpanded, setExpanded, actions, selectedActionId, primaryColor, secondaryColor, disabledActionIds, }: {
    isToggleVisible: boolean;
    isExpanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    primaryColor: string;
    secondaryColor: string;
    disabledActionIds: Set<string>;
    actions: A[];
    selectedActionId: A["id"];
}): JSX.Element;
//# sourceMappingURL=NodeMorphingPanel.d.ts.map