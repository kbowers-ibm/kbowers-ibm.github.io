import { jsx as _jsx } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { GatewayIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
export function ComplexGatewayProperties({ complexGateway, }) {
    return (_jsx(PropertiesPanelHeaderFormSection, { title: complexGateway["@_name"] || "Complex gateway", icon: _jsx(GatewayIcon, { variant: "complexGateway", isIcon: true }), children: _jsx(NameDocumentationAndId, { element: complexGateway }) }));
}
//# sourceMappingURL=ComplexGatewayProperties.js.map