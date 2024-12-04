import * as React from "react";
export interface Commands {
    toggleHierarchyHighlight: () => void;
    togglePropertiesPanel: () => void;
    createGroup: () => void;
    selectAll: () => void;
    paste: () => void;
    copy: () => void;
    cut: () => void;
    cancelAction: () => void;
    focusOnSelection: () => void;
    resetPosition: () => void;
}
export declare function useCommands(): {
    commandsRef: React.MutableRefObject<Commands>;
};
export declare function CommandsContextProvider(props: React.PropsWithChildren<{}>): JSX.Element;
//# sourceMappingURL=CommandsContextProvider.d.ts.map