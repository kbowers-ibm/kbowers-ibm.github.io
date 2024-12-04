import * as React from "react";
import { NodeSvgProps } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
import { ActivityNodeMarker, EventVariant, GatewayVariant, SubProcessVariant, TaskVariant } from "../BpmnDiagramDomain";
export declare function DataObjectNodeSvg(__props: NodeSvgProps & {
    isIcon?: boolean;
    showFoldedPage?: boolean;
    showArrow?: boolean;
    transform?: string;
}): JSX.Element;
export declare const NODE_COLORS: {
    readonly startEvent: {
        readonly foreground: "#4aa241";
        readonly background: "#e8fae6";
    };
    readonly intermediateCatchEvent: {
        readonly foreground: "#e6a000";
        readonly background: "#fbefcf";
    };
    readonly boundaryEvent: {
        readonly foreground: "#e6a000";
        readonly background: "#fbefcf";
    };
    readonly intermediateThrowEvent: {
        readonly foreground: "#007a87";
        readonly background: "#bddee1";
    };
    readonly endEvent: {
        readonly foreground: "#a30000";
        readonly background: "#fce7e7";
    };
    readonly gateway: {
        readonly background: "#fef5ea";
        readonly foreground: "#ec7b08";
    };
    readonly task: {
        readonly foreground: "black";
        readonly background: "#efefef";
    };
    readonly subProcess: {
        readonly foreground: "black";
        readonly background: "#efefef";
    };
};
export declare function StartEventNodeSvg(__props: NodeSvgProps & {
    variant: EventVariant | "none";
}): JSX.Element;
export declare function IntermediateCatchEventNodeSvg(__props: NodeSvgProps & {
    rimWidth?: number;
    variant: EventVariant | "none";
}): JSX.Element;
export declare function IntermediateThrowEventNodeSvg(__props: NodeSvgProps & {
    rimWidth?: number;
    variant: EventVariant | "none";
}): JSX.Element;
export declare function EndEventNodeSvg(__props: NodeSvgProps & {
    variant: EventVariant | "none";
}): JSX.Element;
export declare function TaskNodeSvg(__props: NodeSvgProps & {
    markers?: (ActivityNodeMarker | "CallActivityPaletteIcon")[];
    variant?: TaskVariant | "none";
}): JSX.Element;
export declare function GatewayNodeSvg(__props: NodeSvgProps & {
    variant: GatewayVariant | "none";
}): JSX.Element;
export declare const LaneNodeSvg: React.ForwardRefExoticComponent<import("reactflow").Dimensions & import("reactflow").XYPosition & {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
} & {
    gutterWidth?: number;
} & React.RefAttributes<SVGRectElement>>;
export declare const SubProcessNodeSvg: React.ForwardRefExoticComponent<import("reactflow").Dimensions & import("reactflow").XYPosition & {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
} & {
    borderRadius?: number;
    rimWidth?: number;
    icons?: ActivityNodeMarker[];
    variant?: SubProcessVariant;
} & React.RefAttributes<SVGRectElement>>;
export declare function TextAnnotationNodeSvg(__props: NodeSvgProps & {
    showPlaceholder?: boolean;
}): JSX.Element;
export declare const GroupNodeSvg: React.ForwardRefExoticComponent<import("reactflow").Dimensions & import("reactflow").XYPosition & {
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
} & {
    strokeDasharray?: string;
} & React.RefAttributes<SVGRectElement>>;
export declare function UnknownNodeSvg(_props: NodeSvgProps & {
    strokeDasharray?: string;
}): JSX.Element;
export declare function EventVariantSymbolSvg({ variant, stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, fill, filled, }: {
    variant: EventVariant | "none";
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    x: number;
    y: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    fill?: string;
    filled: boolean;
}): JSX.Element;
export declare function MessageEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, fill, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    fill: string;
    filled: boolean;
}): JSX.Element;
export declare function TimerEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function ErrorEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function EscalationEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function CancelEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function CompensationEventSymbolSvg({ stroke, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    x: number;
    y: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function ConditionalEventSymbolSvg({ stroke, cx, cy, outerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function LinkEventSymbolSvg({ stroke, cx, cy, innerCircleRadius, filled, }: {
    stroke: string;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function SignalEventSymbolSvg({ stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    x: number;
    y: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function ActivityNodeIcons({ x, y, width, height, icons, }: {
    x: number;
    y: number;
    width: number;
    height: number;
    icons: Set<ActivityNodeMarker>;
}): JSX.Element;
//# sourceMappingURL=NodeSvgs.d.ts.map