import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { DataTypeSelector } from "../dataTypeSelector/DataTypeSelector";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { DataObjectIcon } from "../../diagram/nodes/NodeIcons";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
export function DataObjectProperties({ dataObject, }) {
    return (_jsxs(PropertiesPanelHeaderFormSection, { title: dataObject["@_name"] || "Data object", icon: _jsx(DataObjectIcon, {}), children: [_jsx(NameDocumentationAndId, { element: dataObject }), _jsx(Divider, { inset: { default: "insetXs" } }), _jsx(DataTypeSelector, { element: dataObject })] }));
}
//# sourceMappingURL=DataObjectProperties.js.map