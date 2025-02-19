import { useEffect } from "react";
import { useBpmnEditorStore } from "../../../store/StoreContext";
export function useKeyboardShortcutsForMorphingActions(ref, actions, disabledActionIds) {
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    useEffect(() => {
        if (isReadOnly) {
            return;
        }
        const currentRef = ref.current;
        const listeners = new Set();
        for (const action of actions) {
            const onKeyDown = (e) => {
                if (e.target === currentRef && !disabledActionIds.has(action.id) && e.key === action.key) {
                    action.action();
                    e.stopPropagation();
                    e.preventDefault();
                }
            };
            listeners.add(onKeyDown);
            currentRef === null || currentRef === void 0 ? void 0 : currentRef.addEventListener("keydown", onKeyDown);
        }
        return () => {
            for (const listener of listeners) {
                currentRef === null || currentRef === void 0 ? void 0 : currentRef.removeEventListener("keydown", listener);
            }
        };
    }, [actions, disabledActionIds, isReadOnly, ref]);
}
//# sourceMappingURL=useKeyboardShortcutsForMorphingActions.js.map