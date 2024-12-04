import { addOrGetProcessAndDiagramElements } from "./addOrGetProcessAndDiagramElements";
import { visitFlowElementsAndArtifacts } from "./_elementVisitor";
export function detachBoundaryEvent({ definitions, __readonly_eventId, }) {
    var _a, _b;
    const { process } = addOrGetProcessAndDiagramElements({ definitions });
    if (__readonly_eventId === undefined) {
        throw new Error("Event needs to have an ID.");
    }
    let foundBoundaryEvent;
    let foundActivity;
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        if (element["@_id"] === __readonly_eventId) {
            if (element.__$$element === "boundaryEvent") {
                foundBoundaryEvent = { element, ...args };
            }
            else {
                throw new Error("Provided id is not associated with a Boundary Event.");
            }
        }
    });
    if (!foundBoundaryEvent) {
        throw new Error("Boundary Event not found. Aborting.");
    }
    visitFlowElementsAndArtifacts(process, ({ element, ...args }) => {
        if (element["@_id"] === (foundBoundaryEvent === null || foundBoundaryEvent === void 0 ? void 0 : foundBoundaryEvent.element["@_attachedToRef"])) {
            if (element.__$$element === "task" ||
                element.__$$element === "businessRuleTask" ||
                element.__$$element === "userTask" ||
                element.__$$element === "scriptTask" ||
                element.__$$element === "serviceTask" ||
                element.__$$element === "subProcess" ||
                element.__$$element === "callActivity" ||
                element.__$$element === "adHocSubProcess" ||
                element.__$$element === "transaction") {
                foundActivity = { element, ...args };
            }
            else {
                throw new Error("'attachedToRef' is not associated with an Activity.");
            }
        }
    });
    if (!foundActivity) {
        throw new Error("Target Activity not found. Aborting.");
    }
    (_a = foundBoundaryEvent.owner.flowElement) === null || _a === void 0 ? void 0 : _a.splice(foundBoundaryEvent.index, 1);
    (_b = process.flowElement) === null || _b === void 0 ? void 0 : _b.push({
        "@_id": foundBoundaryEvent.element["@_id"],
        __$$element: "intermediateCatchEvent",
        eventDefinition: foundBoundaryEvent.element.eventDefinition,
    });
}
//# sourceMappingURL=detachBoundaryEvent.js.map