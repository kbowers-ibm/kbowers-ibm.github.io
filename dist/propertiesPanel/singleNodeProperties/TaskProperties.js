import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { TaskIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
export function TaskProperties({ task }) {
    return (_jsx(_Fragment, { children: _jsx(PropertiesPanelHeaderFormSection, { title: task["@_name"] || "Task", icon: _jsx(TaskIcon, {}), children: _jsx(NameDocumentationAndId, { element: task }) }) }));
}
//# sourceMappingURL=TaskProperties.js.map