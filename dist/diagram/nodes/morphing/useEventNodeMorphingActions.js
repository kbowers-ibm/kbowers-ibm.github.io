import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { useCallback, useMemo } from "react";
import { visitFlowElementsAndArtifacts } from "../../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStoreApi } from "../../../store/StoreContext";
import { EndEventIcon, EventDefinitionIcon, IntermediateThrowEventIcon, StartEventIcon } from "../NodeIcons";
import { NODE_COLORS } from "../NodeSvgs";
export function useEventNodeMorphingActions(event) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const foregroundColor = NODE_COLORS[event.__$$element].foreground;
    const backgroundColor = NODE_COLORS[event.__$$element].background;
    const filled = event.__$$element === "intermediateThrowEvent" || event.__$$element === "endEvent";
    const morphEvent = useCallback((eventDefinitionElement) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ array, index, owner, element }) => {
                var _a;
                if (element["@_id"] === event["@_id"] && element.__$$element === event.__$$element) {
                    if (eventDefinitionElement === undefined) {
                        element.eventDefinition = undefined;
                        return false;
                    }
                    (_a = element.eventDefinition) !== null && _a !== void 0 ? _a : (element.eventDefinition = []);
                    switch (eventDefinitionElement) {
                        case "compensateEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "compensateEventDefinition",
                            };
                            break;
                        case "conditionalEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "conditionalEventDefinition",
                                condition: {
                                    "@_id": generateUuid(),
                                },
                            };
                            break;
                        case "errorEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "errorEventDefinition",
                            };
                            break;
                        case "escalationEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "escalationEventDefinition",
                            };
                            break;
                        case "linkEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "linkEventDefinition",
                                "@_name": "",
                            };
                            break;
                        case "messageEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "messageEventDefinition",
                            };
                            break;
                        case "signalEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "signalEventDefinition",
                            };
                            break;
                        case "terminateEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "terminateEventDefinition",
                            };
                            break;
                        case "timerEventDefinition":
                            element.eventDefinition[0] = {
                                "@_id": generateUuid(),
                                __$$element: "timerEventDefinition",
                            };
                            break;
                    }
                    element.eventDefinition[0] = {
                        "@_id": generateUuid(),
                        __$$element: eventDefinitionElement,
                    };
                    return false;
                }
            });
        });
    }, [bpmnEditorStoreApi, event]);
    const morphingActions = useMemo(() => {
        return [
            {
                icon: event.__$$element === "startEvent" ? (_jsx(StartEventIcon, { variant: undefined })) : event.__$$element === "intermediateThrowEvent" ? (_jsx(IntermediateThrowEventIcon, { variant: undefined })) : event.__$$element === "endEvent" ? (_jsx(EndEventIcon, { variant: undefined })) : (_jsx(_Fragment, {})),
                key: "1",
                title: "None",
                id: "none",
                action: () => morphEvent(undefined),
            },
            {
                icon: (_jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, fill: backgroundColor, variant: "messageEventDefinition" })),
                key: "2",
                title: "Message",
                id: "messageEventDefinition",
                action: () => morphEvent("messageEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "timerEventDefinition" }),
                key: "3",
                title: "Timer",
                id: "timerEventDefinition",
                action: () => morphEvent("timerEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "errorEventDefinition" }),
                key: "4",
                title: "Error",
                id: "errorEventDefinition",
                action: () => morphEvent("errorEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "escalationEventDefinition" }),
                key: "5",
                title: "Escalation",
                id: "escalationEventDefinition",
                action: () => morphEvent("escalationEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "compensateEventDefinition" }),
                key: "6",
                title: "Compensation",
                id: "compensateEventDefinition",
                action: () => morphEvent("compensateEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "conditionalEventDefinition" }),
                key: "7",
                title: "Conditional",
                id: "conditionalEventDefinition",
                action: () => morphEvent("conditionalEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "linkEventDefinition" }),
                key: "8",
                title: "Link",
                id: "linkEventDefinition",
                action: () => morphEvent("linkEventDefinition"),
            },
            {
                icon: _jsx(EventDefinitionIcon, { stroke: foregroundColor, filled: filled, variant: "signalEventDefinition" }),
                key: "9",
                title: "Signal",
                id: "signalEventDefinition",
                action: () => morphEvent("signalEventDefinition"),
            },
            {
                icon: _jsx(EndEventIcon, { variant: "terminateEventDefinition" }),
                key: "0",
                title: "Terminate",
                id: "terminateEventDefinition",
                action: () => morphEvent("terminateEventDefinition"),
            },
        ];
    }, [event.__$$element, foregroundColor, filled, morphEvent]);
    return morphingActions;
}
//# sourceMappingURL=useEventNodeMorphingActions.js.map