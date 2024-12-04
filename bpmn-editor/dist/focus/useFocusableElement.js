import { useEffect } from "react";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../store/StoreContext";
export function useFocusableElement(ref, id, before) {
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const shoudFocus = useBpmnEditorStore((s) => s.focus.consumableId === id);
    useEffect(() => {
        var _a;
        if (!id) {
            return;
        }
        const cb = () => {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.select();
            bpmnEditorStoreApi.setState((state) => {
                state.focus.consumableId = undefined;
            });
        };
        if (shoudFocus && ref.current) {
            (_a = before === null || before === void 0 ? void 0 : before(cb)) !== null && _a !== void 0 ? _a : cb();
        }
    }, [before, bpmnEditorStoreApi, id, ref, shoudFocus]);
}
//# sourceMappingURL=useFocusableElement.js.map