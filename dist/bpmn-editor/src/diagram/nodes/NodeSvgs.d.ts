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
    variant?: TaskVariant | "task" | "callActivity" | "none";
    isIcon?: boolean;
}): JSX.Element;
export declare function ScriptTaskSvg({ stroke, size }: {
    stroke: string;
    size: number;
}): JSX.Element;
export declare function BusinessRuleTaskSvg({ stroke, strokeWidth, size, }: {
    stroke: string;
    strokeWidth: number;
    size: number;
}): JSX.Element;
export declare function ServiceTaskSvg({ stroke, size }: {
    stroke: string;
    size: number;
}): JSX.Element;
export declare function UserTaskSvg({ stroke, size }: {
    stroke: string;
    size: number;
}): JSX.Element;
export declare function GatewayNodeSvg(__props: NodeSvgProps & {
    variant: GatewayVariant | "none";
    isIcon?: boolean;
}): JSX.Element;
export declare function ParallelGatewaySvg({ stroke, strokeWidth, cx, cy, size, }: {
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    size: number;
}): JSX.Element;
export declare function ExclusiveGatewaySvg({ stroke, strokeWidth, cx, cy, size, }: {
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    size: number;
}): JSX.Element;
export declare function InclusiveGatewaySvg({ stroke, strokeWidth, cx, cy, size, }: {
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    size: number;
}): JSX.Element;
export declare function EventBasedGatewaySvg({ stroke, strokeWidth, circleStrokeWidth, cx, cy, size, }: {
    stroke: string;
    strokeWidth?: number;
    circleStrokeWidth?: number;
    cx: number;
    cy: number;
    size: number;
}): JSX.Element;
export declare function ComplexGatewaySvg({ stroke, strokeWidth, cx, cy, size, }: {
    stroke: string;
    strokeWidth?: number;
    cx: number;
    cy: number;
    size: number;
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
export declare function EventVariantSymbolSvg({ variant, stroke, strokeWidth, isIcon, cx, cy, x, y, innerCircleRadius, outerCircleRadius, fill, filled, }: {
    variant: EventVariant | "none";
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    x: number;
    y: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    fill?: string;
    filled: boolean;
}): JSX.Element;
export declare function MessageEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, fill, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    fill: string;
    filled: boolean;
}): JSX.Element;
export declare function TimerEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function ErrorEventSymbolSvg({ stroke, strokeWidth, cx, cy, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function EscalationEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function CompensationEventSymbolSvg({ stroke, strokeWidth, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }: {
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
export declare function ConditionalEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, outerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    outerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function LinkEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, innerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
    cx: number;
    cy: number;
    innerCircleRadius: number;
    filled: boolean;
}): JSX.Element;
export declare function SignalEventSymbolSvg({ stroke, strokeWidth, isIcon, cx, cy, x, y, innerCircleRadius, outerCircleRadius, filled, }: {
    stroke: string;
    strokeWidth?: number;
    isIcon?: boolean;
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
export declare function LoopIconSvg({ stroke, size }: {
    stroke: string;
    size: number;
}): JSX.Element;
export declare function AdHocSubProcessIconSvg({ stroke, size, isIcon }: {
    stroke: string;
    size: number;
    isIcon?: boolean;
}): JSX.Element;
export declare function CompensationIconSvg({ stroke, strokeWidth, size, }: {
    stroke: string;
    strokeWidth: number;
    size: number;
}): JSX.Element;
export declare function CollapsedIconSvg({ stroke, strokeWidth, size }: {
    stroke: string;
    strokeWidth: number;
    size: number;
}): JSX.Element;
export declare function MultiInstanceSequentialIconSvg({ stroke, strokeWidth, size, }: {
    stroke: string;
    strokeWidth: number;
    size: number;
}): JSX.Element;
export declare function MultiInstanceParallelIconSvg({ stroke, strokeWidth, size, isIcon, }: {
    stroke: string;
    strokeWidth: number;
    size: number;
    isIcon?: boolean;
}): JSX.Element;
//# sourceMappingURL=NodeSvgs.d.ts.map