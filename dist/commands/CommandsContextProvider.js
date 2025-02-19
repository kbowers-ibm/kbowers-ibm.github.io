import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { useContext, useRef } from "react";
const CommandsContext = React.createContext({});
export function useCommands() {
    return useContext(CommandsContext);
}
export function CommandsContextProvider(props) {
    const commandsRef = useRef({
        toggleHierarchyHighlight: () => {
            throw new Error("BPMN EDITOR: toggleHierarchyHighlight command not implemented.");
        },
        togglePropertiesPanel: () => {
            throw new Error("BPMN EDITOR: togglePropertiesPanel command not implemented.");
        },
        createGroup: () => {
            throw new Error("BPMN EDITOR: createGroup command not implemented.");
        },
        selectAll: () => {
            throw new Error("BPMN EDITOR: selectAll command not implemented.");
        },
        paste: () => {
            throw new Error("BPMN EDITOR: paste command not implemented.");
        },
        copy: () => {
            throw new Error("BPMN EDITOR: copy command not implemented.");
        },
        cut: () => {
            throw new Error("BPMN EDITOR: cut command not implemented.");
        },
        cancelAction: () => {
            throw new Error("BPMN EDITOR: cancelAction command not implemented.");
        },
        focusOnSelection: () => {
            throw new Error("BPMN EDITOR: focusOnSelection command not implemented.");
        },
        resetPosition: () => {
            throw new Error("BPMN EDITOR: resetPosition command not implemented.");
        },
    });
    return _jsx(CommandsContext.Provider, { value: { commandsRef }, children: props.children });
}
//# sourceMappingURL=CommandsContextProvider.js.map