import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { DefaultRouteSelector } from "../defaultRouteSelector/DefaultRouteSelector";
import { GatewayIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function ExclusiveGatewayProperties({ exclusiveGateway, }) {
    return (_jsxs(PropertiesPanelHeaderFormSection, { title: exclusiveGateway["@_name"] || "Exclusive gateway", icon: _jsx(GatewayIcon, { variant: exclusiveGateway.__$$element }), children: [_jsx(NameDocumentationAndId, { element: exclusiveGateway }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(DefaultRouteSelector, { gateway: exclusiveGateway })] }));
}
//# sourceMappingURL=ExclusiveGatewayProperties.js.map