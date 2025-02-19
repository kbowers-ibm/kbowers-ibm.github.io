import { BpmnLatestModel } from "@kie-tools/bpmn-marshaller";
import { State } from "../store/Store";
export type Normalized<T> = WithRequiredDeep<T, "@_id">;
type WithRequiredDeep<T, K extends keyof any> = T extends undefined ? T : T extends Array<infer U> ? Array<WithRequiredDeep<U, K>> : {
    [P in keyof T]: WithRequiredDeep<T[P], K>;
} & (K extends keyof T ? {
    [P in K]-?: NonNullable<WithRequiredDeep<T[P], K>>;
} : T);
export declare function normalize(model: BpmnLatestModel): State["bpmn"]["model"];
export {};
//# sourceMappingURL=normalize.d.ts.map