import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionHeader } from "@kie-tools/xyflow-react-kie-diagram/dist/propertiesPanel/SectionHeader";
import { Form, FormSection } from "@patternfly/react-core/dist/js/components/Form";
import * as React from "react";
import { useMemo } from "react";
import { useBpmnEditorStore } from "../store/StoreContext";
import { assertUnreachable } from "../ts-ext/assertUnreachable";
import { AdHocSubProcessProperties } from "./singleNodeProperties/AdHocSubProcessProperties";
import { BoundaryEventProperties } from "./singleNodeProperties/BoundaryEventProperties";
import { BusinessRuleTaskProperties } from "./singleNodeProperties/BusinessRuleTaskProperties";
import { CallActivityProperties } from "./singleNodeProperties/CallActivityProperties";
import { ComplexGatewayProperties } from "./singleNodeProperties/ComplexGatewayProperties";
import { DataObjectProperties } from "./singleNodeProperties/DataObjectProperties";
import { EndEventProperties } from "./singleNodeProperties/EndEventProperties";
import { EventBasedGatewayProperties } from "./singleNodeProperties/EventBasedGatewayProperties";
import { EventSubProcessProperties } from "./singleNodeProperties/EventSubProcessProperties";
import { ExclusiveGatewayProperties } from "./singleNodeProperties/ExclusiveGatewayProperties";
import { GroupProperties } from "./singleNodeProperties/GroupProperties";
import { InclusiveGatewayProperties } from "./singleNodeProperties/InclusiveGatewayProperties";
import { IntermediateCatchEventProperties } from "./singleNodeProperties/IntermediateCatchEventProperties";
import { IntermediateThrowEventProperties } from "./singleNodeProperties/IntermediateThrowEventProperties";
import { LaneProperties } from "./singleNodeProperties/LaneProperties";
import { ParallelGatewayProperties } from "./singleNodeProperties/ParallelGatewayProperties";
import { ScriptTaskProperties } from "./singleNodeProperties/ScriptTaskProperties";
import { ServiceTaskProperties } from "./singleNodeProperties/ServiceTaskProperties";
import { StartEventProperties } from "./singleNodeProperties/StartEventProperties";
import { SubProcessProperties } from "./singleNodeProperties/SubProcessProperties";
import { TaskProperties } from "./singleNodeProperties/TaskProperties";
import { TextAnnotationProperties } from "./singleNodeProperties/TextAnnotationProperties";
import { TransactionProperties } from "./singleNodeProperties/TransactionProperties";
import { UserTaskProperties } from "./singleNodeProperties/UserTaskProperties";
import { ColumnsIcon } from "@patternfly/react-icons/dist/js/icons/columns-icon";
import { Metadata } from "./metadata/Metadata";
export function SingleNodeProperties() {
    var _a;
    const selectedNode = useBpmnEditorStore((s) => [...s.computed(s).getDiagramData().selectedNodesById.values()][0]);
    const { properties } = useMemo(() => {
        const bpmnElement = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.bpmnElement;
        const e = bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement.__$$element;
        switch (e) {
            case "startEvent":
                return {
                    properties: _jsx(StartEventProperties, { startEvent: bpmnElement }),
                };
            case "endEvent":
                return {
                    properties: _jsx(EndEventProperties, { endEvent: bpmnElement }),
                };
            case "intermediateCatchEvent":
                return {
                    properties: _jsx(IntermediateCatchEventProperties, { intermediateCatchEvent: bpmnElement }),
                };
            case "intermediateThrowEvent":
                return {
                    properties: _jsx(IntermediateThrowEventProperties, { intermediateThrowEvent: bpmnElement }),
                };
            case "boundaryEvent":
                return {
                    properties: _jsx(BoundaryEventProperties, { boundaryEvent: bpmnElement }),
                };
            case "complexGateway":
                return {
                    properties: _jsx(ComplexGatewayProperties, { complexGateway: bpmnElement }),
                };
            case "eventBasedGateway":
                return {
                    properties: _jsx(EventBasedGatewayProperties, { eventBasedGateway: bpmnElement }),
                };
            case "exclusiveGateway":
                return {
                    properties: _jsx(ExclusiveGatewayProperties, { exclusiveGateway: bpmnElement }),
                };
            case "inclusiveGateway":
                return {
                    properties: _jsx(InclusiveGatewayProperties, { inclusiveGateway: bpmnElement }),
                };
            case "parallelGateway":
                return {
                    properties: _jsx(ParallelGatewayProperties, { parallelGateway: bpmnElement }),
                };
            case "task":
                return {
                    properties: _jsx(TaskProperties, { task: bpmnElement }),
                };
            case "businessRuleTask":
                return {
                    properties: _jsx(BusinessRuleTaskProperties, { businessRuleTask: bpmnElement }),
                };
            case "scriptTask":
                return {
                    properties: _jsx(ScriptTaskProperties, { scriptTask: bpmnElement }),
                };
            case "serviceTask":
                return {
                    properties: _jsx(ServiceTaskProperties, { serviceTask: bpmnElement }),
                };
            case "userTask":
                return {
                    properties: _jsx(UserTaskProperties, { userTask: bpmnElement }),
                };
            case "callActivity":
                return {
                    properties: _jsx(CallActivityProperties, { callActivity: bpmnElement }),
                };
            case "subProcess":
                if (bpmnElement === null || bpmnElement === void 0 ? void 0 : bpmnElement["@_triggeredByEvent"]) {
                    return {
                        properties: _jsx(EventSubProcessProperties, { eventSubProcess: bpmnElement }),
                    };
                }
                else {
                    return {
                        properties: _jsx(SubProcessProperties, { subProcess: bpmnElement }),
                    };
                }
            case "adHocSubProcess":
                return {
                    properties: _jsx(AdHocSubProcessProperties, { adHocSubProcess: bpmnElement }),
                };
            case "transaction":
                return {
                    properties: _jsx(TransactionProperties, { transaction: bpmnElement }),
                };
            case "dataObject":
                return {
                    properties: _jsx(DataObjectProperties, { dataObject: bpmnElement }),
                };
            case "textAnnotation":
                return {
                    properties: _jsx(TextAnnotationProperties, { textAnnotation: bpmnElement }),
                };
            case "group":
                return {
                    properties: _jsx(GroupProperties, { group: bpmnElement }),
                };
            case "lane":
                return {
                    properties: _jsx(LaneProperties, { lane: bpmnElement }),
                };
            case "event":
            case undefined:
                return {
                    properties: (_jsx(_Fragment, { children: _jsx(FormSection, { style: { textAlign: "center" }, children: "No properties to edit." }) })),
                };
            default:
                assertUnreachable(e);
        }
    }, [selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data.bpmnElement]);
    const [isMetadataSectionExpanded, setMetadataSectionExpanded] = React.useState(false);
    return (_jsx(_Fragment, { children: _jsxs(Form, { children: [properties, _jsx(FormSection, { title: _jsx(SectionHeader, { expands: true, isSectionExpanded: isMetadataSectionExpanded, toogleSectionExpanded: () => setMetadataSectionExpanded((prev) => !prev), icon: _jsx(ColumnsIcon, { width: 16, height: 36, style: { marginLeft: "12px" } }), title: "Metadata" }), children: isMetadataSectionExpanded && (_jsx(_Fragment, { children: _jsx(FormSection, { style: { paddingLeft: "20px", marginTop: "20px", gap: 0 }, children: _jsx(Metadata, { obj: (_a = selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.data) === null || _a === void 0 ? void 0 : _a.bpmnElement }) }) })) })] }) }));
}
//# sourceMappingURL=SingleNodeProperties.js.map