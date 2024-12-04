import { createContext, useContext } from "react";
import { useStoreWithEqualityFn } from "zustand/traditional";
export const BpmnEditorStoreApiContext = createContext({});
export function useBpmnEditorStore(selector, equalityFn) {
    const store = useContext(BpmnEditorStoreApiContext);
    if (store === null) {
        throw new Error("Can't use BPMN Editor Store outside of the BpmnEditor component.");
    }
    return useStoreWithEqualityFn(store, selector, equalityFn);
}
export function useBpmnEditorStoreApi() {
    return useContext(BpmnEditorStoreApiContext);
}
//# sourceMappingURL=StoreContext.js.map