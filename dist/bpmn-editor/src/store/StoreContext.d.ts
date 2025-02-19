import { StoreApi, UseBoundStore } from "zustand";
import { WithImmer } from "zustand/middleware/immer";
import { State } from "./Store";
type ExtractState = StoreApi<State> extends {
    getState: () => infer T;
} ? T : never;
export type StoreApiType = UseBoundStore<WithImmer<StoreApi<State>>>;
export declare const BpmnEditorStoreApiContext: import("react").Context<StoreApiType>;
export declare function useBpmnEditorStore<StateSlice = ExtractState>(selector: (state: State) => StateSlice, equalityFn?: (a: StateSlice, b: StateSlice) => boolean): StateSlice;
export declare function useBpmnEditorStoreApi(): StoreApiType;
export {};
//# sourceMappingURL=StoreContext.d.ts.map