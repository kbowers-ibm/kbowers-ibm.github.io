import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { DefaultRouteSelector } from "../defaultRouteSelector/DefaultRouteSelector";
import { GatewayIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function InclusiveGatewayProperties({ inclusiveGateway, }) {
    return (_jsxs(PropertiesPanelHeaderFormSection, { title: inclusiveGateway["@_name"] || "Inclusive gateway", icon: _jsx(GatewayIcon, { variant: inclusiveGateway.__$$element, isIcon: true }), children: [_jsx(NameDocumentationAndId, { element: inclusiveGateway }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(DefaultRouteSelector, { gateway: inclusiveGateway })] }));
}
//# sourceMappingURL=InclusiveGatewayProperties.js.map