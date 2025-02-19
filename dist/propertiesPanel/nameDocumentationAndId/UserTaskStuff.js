import { jsx as _jsx } from "react/jsx-runtime";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import * as React from "react";
import { updateFlowElement } from "../../mutations/renameNode";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
export function UserTaskStuff({ element }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const settings = useBpmnEditorStore((s) => s.settings);
    const onNameChanged = React.useCallback((newName) => {
        bpmnEditorStoreApi.setState((s) => {
            updateFlowElement({
                definitions: s.bpmn.model.definitions,
                id: element["@_id"],
                newFlowElement: { "@_name": newName },
            });
        });
    }, [element, bpmnEditorStoreApi]);
    return (_jsx(FormSection, {}));
}
//# sourceMappingURL=UserTaskStuff.js.map