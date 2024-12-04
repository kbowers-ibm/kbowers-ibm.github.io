import { visitFlowElementsAndArtifacts } from "./_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
export function makeBoundaryEvent({ definitions, __readonly_targetActivityId, __readonly_eventId, }) {
    var _a, _b;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    if (__readonly_targetActivityId === undefined || __readonly_eventId === undefined) {
        throw new Error("Event or Target Activity need to have an ID.");
    }
    let foundIntermediateCatchEvent;
    let foundTargetActivity;
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        if (element["@_id"] === __readonly_eventId) {
            if (element.__$$element === "intermediateCatchEvent") {
                foundIntermediateCatchEvent = { element, ...args };
            }
            else {
                throw new Error("Provided id is not associated with an Intermediate Catch Event");
            }
        }
        if (element["@_id"] === __readonly_targetActivityId) {
            if (element.__$$element === "task" ||
                element.__$$element === "businessRuleTask" ||
                element.__$$element === "userTask" ||
                element.__$$element === "scriptTask" ||
                element.__$$element === "serviceTask" ||
                element.__$$element === "subProcess" ||
                element.__$$element === "callActivity" ||
                element.__$$element === "adHocSubProcess" ||
                element.__$$element === "transaction") {
                foundTargetActivity = { element, ...args };
            }
            else {
                throw new Error("Provided id is not associated with an Activity.");
            }
        }
    });
    if (!foundTargetActivity) {
        throw new Error("Target Activity not found. Aborting.");
    }
    if (!foundIntermediateCatchEvent) {
        throw new Error("Can't find Intermediate Catch Event to transform into a Boundary Event. Aborting.");
    }
    (_a = foundIntermediateCatchEvent.owner.flowElement) === null || _a === void 0 ? void 0 : _a.splice(foundIntermediateCatchEvent.index, 1);
    (_b = foundTargetActivity.owner.flowElement) === null || _b === void 0 ? void 0 : _b.push({
        __$$element: "boundaryEvent",
        "@_id": foundIntermediateCatchEvent.element["@_id"],
        "@_attachedToRef": foundTargetActivity.element["@_id"],
        eventDefinition: foundIntermediateCatchEvent.element.eventDefinition,
    });
}
//# sourceMappingURL=makeBoundaryEvent.js.map