import { jsx as _jsx } from "react/jsx-runtime";
import { FormSection } from "@patternfly/react-core/dist/js/components/Form";
import * as React from "react";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
export function SequenceFlowProperties({ sequenceFlow, }) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const onLabelChanged = React.useCallback((newLabel) => {
        bpmnEditorStoreApi.setState((s) => {
        });
    }, [bpmnEditorStoreApi]);
    return _jsx(FormSection, { children: "SequenceFlowProperties" });
}
//# sourceMappingURL=SequenceFlowProperties.js.map