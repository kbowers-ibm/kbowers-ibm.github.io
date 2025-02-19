import React from "react";
import { BpmnNodeType } from "../BpmnDiagramDomain";
import { Normalized } from "../../normalization/normalize";
import { DC__Font } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import { NodeLabelPosition } from "@kie-tools/xyflow-react-kie-diagram/dist/nodes/NodeSvgs";
export interface NodeStyle {
    fontCssProperties: React.CSSProperties;
}
export interface BpmnFontStyle {
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikeThrough: boolean;
    family?: string;
    size?: number;
}
export declare const DEFAULT_NODE_RED_FILL = 255;
export declare const DEFAULT_NODE_GREEN_FILL = 255;
export declare const DEFAULT_NODE_BLUE_FILL = 255;
export declare const DEFAULT_NODE_OPACITY = 0.9;
export declare const DEFAULT_NODE_FILL = "rgba(255, 255, 255, 0.9)";
export declare const DEFAULT_NODE_STROKE_COLOR = "rgba(0, 0, 0, 1)";
export declare const DEFAULT_FONT_COLOR = "rgba(0, 0, 0, 1)";
export declare function useNodeStyle(args: {
    nodeType?: BpmnNodeType;
    isEnabled?: boolean;
}): NodeStyle;
export declare function getNodeStyle({ bpmnFontStyle }: {
    bpmnFontStyle: BpmnFontStyle;
}): NodeStyle;
export declare function getBpmnFontStyle(args: {
    dcFont?: Normalized<DC__Font> | undefined;
    isEnabled?: boolean | undefined;
}): BpmnFontStyle;
export declare function getFontCssProperties(bpmnFontStyle?: BpmnFontStyle): React.CSSProperties;
export declare function getNodeLabelPosition({ nodeType }: {
    nodeType: BpmnNodeType;
}): NodeLabelPosition;
//# sourceMappingURL=NodeStyle.d.ts.map