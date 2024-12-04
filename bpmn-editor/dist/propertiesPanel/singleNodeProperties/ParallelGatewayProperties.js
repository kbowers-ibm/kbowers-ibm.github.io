import { jsx as _jsx } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { GatewayIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
export function ParallelGatewayProperties({ parallelGateway, }) {
    return (_jsx(PropertiesPanelHeaderFormSection, { title: parallelGateway["@_name"] || "Parallel gateway", icon: _jsx(GatewayIcon, { variant: parallelGateway.__$$element }), children: _jsx(NameDocumentationAndId, { element: parallelGateway }) }));
}
//# sourceMappingURL=ParallelGatewayProperties.js.map