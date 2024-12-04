import { BpmnNodeType, EventVariant, GatewayVariant, SubProcessVariant, TaskVariant } from "../BpmnDiagramDomain";
export declare function NodeIcon({ nodeType }: {
    nodeType: BpmnNodeType;
}): typeof StartEventIcon | typeof TaskIcon | typeof DataObjectIcon;
export declare function EventDefitnitionIcon({ variant, filled, stroke, }: {
    variant?: EventVariant;
    filled: boolean;
    stroke: string;
}): JSX.Element;
export declare function StartEventIcon({ variant }: {
    variant?: EventVariant;
}): JSX.Element;
export declare function IntermediateCatchEventIcon({ variant }: {
    variant?: EventVariant;
}): JSX.Element;
export declare function IntermediateThrowEventIcon({ variant }: {
    variant?: EventVariant;
}): JSX.Element;
export declare function EndEventIcon({ variant }: {
    variant?: EventVariant;
}): JSX.Element;
export declare function TaskIcon({ variant }: {
    variant?: TaskVariant;
}): JSX.Element;
export declare function CallActivityIcon(): JSX.Element;
export declare function GatewayIcon({ variant }: {
    variant?: GatewayVariant;
}): JSX.Element;
export declare function LaneIcon(): JSX.Element;
export declare function SubProcessIcon({ variant }: {
    variant?: SubProcessVariant;
}): JSX.Element;
export declare function DataObjectIcon(props: {
    padding?: string;
    height?: number;
    viewBox?: number;
    transform?: string;
}): JSX.Element;
export declare function GroupIcon(): JSX.Element;
export declare function TextAnnotationIcon(): JSX.Element;
export declare function UnknownNodeIcon(): JSX.Element;
export declare function UnknownIcon(): JSX.Element;
//# sourceMappingURL=NodeIcons.d.ts.map