import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { visitFlowElementsAndArtifacts } from "../../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStoreApi } from "../../../store/StoreContext";
import { GatewayIcon } from "../NodeIcons";
export function useGatewayNodeMorphingActions(gateway) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const morphGateway = useCallback((gatewayElement) => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ array, index, owner, element }) => {
                if (element["@_id"] === gateway["@_id"] && element.__$$element === gateway.__$$element) {
                    array[index] = {
                        "@_id": element["@_id"],
                        "@_name": element["@_name"],
                        __$$element: gatewayElement,
                    };
                    return false;
                }
            });
        });
    }, [bpmnEditorStoreApi, gateway]);
    const morphingActions = useMemo(() => {
        return [
            {
                icon: _jsx(GatewayIcon, { variant: "parallelGateway" }),
                key: "1",
                title: "Parallel",
                id: "parallelGateway",
                action: () => morphGateway("parallelGateway"),
            },
            {
                icon: _jsx(GatewayIcon, { variant: "exclusiveGateway" }),
                key: "2",
                title: "Exclusive",
                id: "exclusiveGateway",
                action: () => morphGateway("exclusiveGateway"),
            },
            {
                icon: _jsx(GatewayIcon, { variant: "inclusiveGateway" }),
                key: "3",
                title: "Inclusive",
                id: "inclusiveGateway",
                action: () => morphGateway("inclusiveGateway"),
            },
            {
                icon: _jsx(GatewayIcon, { variant: "eventBasedGateway" }),
                key: "4",
                title: "Event",
                id: "eventBasedGateway",
                action: () => morphGateway("eventBasedGateway"),
            },
            {
                icon: _jsx(GatewayIcon, { variant: "complexGateway" }),
                key: "5",
                title: "Complex",
                id: "complexGateway",
                action: () => morphGateway("complexGateway"),
            },
        ];
    }, [morphGateway]);
    return morphingActions;
}
//# sourceMappingURL=useGatewayNodeMorphingActions.js.map