import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { visitFlowElementsAndArtifacts } from "../../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStoreApi } from "../../../store/StoreContext";
import { CallActivityIcon, TaskIcon } from "../NodeIcons";
export function useTaskNodeMorphingActions(task) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const morphTask = useCallback((taskElement) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ array, index, owner, element }) => {
                if (element["@_id"] === task["@_id"] && element.__$$element === task.__$$element) {
                    array[index] = {
                        "@_id": element["@_id"],
                        "@_name": element["@_name"],
                        __$$element: taskElement,
                    };
                    return false;
                }
            });
        });
    }, [bpmnEditorStoreApi, task]);
    const morphingActions = useMemo(() => {
        return [
            {
                icon: _jsx(TaskIcon, {}),
                key: "1",
                title: "Task",
                id: "task",
                action: () => morphTask("task"),
            },
            {
                icon: _jsx(TaskIcon, { variant: "userTask", isIcon: true }),
                key: "2",
                title: "User task",
                id: "userTask",
                action: () => morphTask("userTask"),
            },
            {
                icon: _jsx(TaskIcon, { variant: "businessRuleTask", isIcon: true }),
                key: "3",
                title: "Business Rule task",
                id: "businessRuleTask",
                action: () => morphTask("businessRuleTask"),
            },
            {
                icon: _jsx(TaskIcon, { variant: "serviceTask", isIcon: true }),
                key: "4",
                title: "Service task",
                id: "serviceTask",
                action: () => morphTask("serviceTask"),
            },
            {
                icon: _jsx(TaskIcon, { variant: "scriptTask", isIcon: true }),
                key: "5",
                title: "Script task",
                id: "scriptTask",
                action: () => morphTask("scriptTask"),
            },
            {
                icon: _jsx(CallActivityIcon, {}),
                key: "6",
                title: "Call activity",
                id: "callActivity",
                action: () => morphTask("callActivity"),
            },
        ];
    }, [morphTask]);
    return morphingActions;
}
//# sourceMappingURL=useTaskNodeMorphingActions.js.map