import { jsx as _jsx } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { GatewayIcon } from "../../diagram/nodes/NodeIcons";
export function EventBasedGatewayProperties({ eventBasedGateway, }) {
    return (_jsx(PropertiesPanelHeaderFormSection, { title: eventBasedGateway["@_name"] || "Event-based gateway", icon: _jsx(GatewayIcon, { variant: eventBasedGateway.__$$element, isIcon: true }), children: _jsx(NameDocumentationAndId, { element: eventBasedGateway }) }));
}
//# sourceMappingURL=EventBasedGatewayProperties.js.map