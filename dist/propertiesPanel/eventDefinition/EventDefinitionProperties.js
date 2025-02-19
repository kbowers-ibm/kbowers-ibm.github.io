import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SlaDueDateInput } from "../slaDueDate/SlaDueDateInput";
import { MessageSelector } from "../messageSelector/MessageSelector";
import { ErrorSelector } from "../errorSelector/ErrorSelector";
import { EscalationCodeSelector } from "../escalationCodeSelector/EscalationCodeSelector";
import { SignalSelector } from "../signalSelector/SignalSelector";
import { TimerOptions } from "../timerOptions/TimerOptions";
import { ActivitySelector } from "../activitySelector/ActivitySelector";
import { SignalScopeSelector } from "../signalScopeSelector/SignalScopeSelector";
import { ConditionalEventSelector } from "../conditionalExpression/ConditionalExpressionSelector";
import { LinkSelector } from "../linkSelector/LinkSelector";
export function EventDefinitionProperties({ event }) {
    var _a;
    const eventDefinition = (_a = event.eventDefinition) === null || _a === void 0 ? void 0 : _a[0];
    return (_jsxs(_Fragment, { children: [(event.__$$element === "startEvent" ||
                event.__$$element === "intermediateCatchEvent" ||
                event.__$$element === "boundaryEvent") &&
                (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) !== "linkEventDefinition" && _jsx(SlaDueDateInput, { element: event }), _jsxs(_Fragment, { children: [eventDefinition === undefined && (_jsx(_Fragment, {})), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "messageEventDefinition" && (_jsx(MessageSelector, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "signalEventDefinition" && (_jsxs(_Fragment, { children: [_jsx(SignalSelector, { element: event }), (event.__$$element === "intermediateThrowEvent" || event.__$$element === "endEvent") && (_jsx(SignalScopeSelector, { element: event }))] })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "linkEventDefinition" &&
                        (event.__$$element === "intermediateCatchEvent" ||
                            event.__$$element === "intermediateThrowEvent") && (_jsx(LinkSelector, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "errorEventDefinition" &&
                        (event.__$$element === "startEvent" ||
                            event.__$$element === "intermediateCatchEvent" ||
                            event.__$$element === "endEvent" ||
                            event.__$$element === "boundaryEvent") && (_jsx(ErrorSelector, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "escalationEventDefinition" && _jsx(EscalationCodeSelector, { element: event }), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "compensateEventDefinition" &&
                        (event.__$$element === "intermediateThrowEvent" || event.__$$element === "endEvent") && (_jsx(ActivitySelector, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "conditionalEventDefinition" &&
                        (event.__$$element === "startEvent" ||
                            event.__$$element === "intermediateCatchEvent" ||
                            event.__$$element === "boundaryEvent") && (_jsx(ConditionalEventSelector, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "timerEventDefinition" &&
                        (event.__$$element === "startEvent" ||
                            event.__$$element === "intermediateCatchEvent" ||
                            event.__$$element === "boundaryEvent") && (_jsx(TimerOptions, { element: event })), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "terminateEventDefinition" &&
                        event.__$$element === "endEvent" && (_jsx(_Fragment, {})), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "multiple" && _jsx(_Fragment, {}), (eventDefinition === null || eventDefinition === void 0 ? void 0 : eventDefinition.__$$element) === "parallel multiple" && _jsx(_Fragment, {})] })] }));
}
//# sourceMappingURL=EventDefinitionProperties.js.map