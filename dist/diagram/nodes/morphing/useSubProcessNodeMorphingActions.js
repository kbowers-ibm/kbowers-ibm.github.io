import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { visitFlowElementsAndArtifacts } from "../../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStoreApi } from "../../../store/StoreContext";
import { SubProcessIcon } from "../NodeIcons";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { AdHocSubProcessIconSvg, MultiInstanceParallelIconSvg } from "../NodeSvgs";
export function useSubProcessNodeMorphingActions(subProcess) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const morphSubProcess = useCallback((subProcessElement) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ array, index, owner, element }) => {
                if (element["@_id"] === subProcess["@_id"] && element.__$$element === subProcess.__$$element) {
                    if (subProcessElement === "eventSubProcess") {
                        array[index] = {
                            "@_id": element["@_id"],
                            "@_name": element["@_name"],
                            __$$element: "subProcess",
                            "@_triggeredByEvent": true,
                        };
                    }
                    else if (subProcessElement === "multiInstanceSubProcess") {
                        array[index] = {
                            "@_id": element["@_id"],
                            "@_name": element["@_name"],
                            __$$element: "subProcess",
                            loopCharacteristics: {
                                "@_id": generateUuid(),
                                __$$element: "multiInstanceLoopCharacteristics",
                            },
                        };
                    }
                    else {
                        array[index] = {
                            "@_id": element["@_id"],
                            "@_name": element["@_name"],
                            __$$element: subProcessElement,
                        };
                    }
                    return false;
                }
            });
        });
    }, [bpmnEditorStoreApi, subProcess]);
    const morphingActions = useMemo(() => {
        return [
            {
                icon: _jsx(SubProcessIcon, { variant: "other" }),
                key: "1",
                title: "Sub-process",
                id: "subProcess",
                action: () => morphSubProcess("subProcess"),
            },
            {
                icon: _jsx(SubProcessIcon, { variant: "event" }),
                key: "2",
                title: "Event",
                id: "eventSubProcess",
                action: () => morphSubProcess("eventSubProcess"),
            },
            {
                icon: _jsx(MultiInstanceParallelIconSvg, { stroke: "black", strokeWidth: 2, size: 28, isIcon: true }),
                key: "3",
                title: "Multi-instance",
                id: "multiInstanceSubProcess",
                action: () => morphSubProcess("multiInstanceSubProcess"),
            },
            {
                icon: _jsx(AdHocSubProcessIconSvg, { stroke: "black", size: 20, isIcon: true }),
                key: "4",
                title: "Ad-hoc",
                id: "adHocSubProcess",
                action: () => morphSubProcess("adHocSubProcess"),
            },
        ];
    }, [morphSubProcess]);
    return morphingActions;
}
//# sourceMappingURL=useSubProcessNodeMorphingActions.js.map