import { jsx as _jsx } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { LaneIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
export function LaneProperties({ lane }) {
    return (_jsx(PropertiesPanelHeaderFormSection, { title: lane["@_name"] || "Lane", icon: _jsx(LaneIcon, {}), children: _jsx(NameDocumentationAndId, { element: lane }) }));
}
//# sourceMappingURL=LaneProperties.js.map