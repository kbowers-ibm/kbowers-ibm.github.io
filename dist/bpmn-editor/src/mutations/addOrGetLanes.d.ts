import { State } from "../store/Store";
export declare function addOrGetLanes({ definitions }: {
    definitions: State["bpmn"]["model"]["definitions"];
}): {
    lanes: ({
        __?: undefined;
        "@_id"?: string;
        documentation?: ({
            __?: undefined;
            "@_id"?: string;
            "@_textFormat"?: string;
            __$$text?: string;
        } & {
            "@_id": string;
        })[] | undefined;
        extensionElements?: ({
            __?: undefined;
            "drools:metaData"?: ({
                "@_name": string;
                "drools:metaValue": {
                    __$$text: string;
                } & {
                    __$$text: string;
                };
            } & import("@kie-tools/xml-parser-ts").Namespaced<"drools", import("@kie-tools/bpmn-marshaller/dist/schemas/drools-1_0/ts-gen/types").drools__GLOBAL__metaData>)[] | undefined;
        } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMN20__tLane__extensionElements) | undefined;
        "@_name"?: string;
        "@_partitionElementRef"?: string;
        partitionElement?: ({
            __?: undefined;
            "@_id"?: string;
            documentation?: ({
                __?: undefined;
                "@_id"?: string;
                "@_textFormat"?: string;
                __$$text?: string;
            } & {
                "@_id": string;
            })[] | undefined;
            extensionElements?: ({
                __?: undefined;
            } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMN20__tBaseElement__extensionElements) | undefined;
        } & {
            "@_id": string;
        }) | undefined;
        flowNodeRef?: ({
            __$$text: string;
        } & {
            __$$text: string;
        })[] | undefined;
        childLaneSet?: ({
            __?: undefined;
            "@_id"?: string;
            documentation?: ({
                __?: undefined;
                "@_id"?: string;
                "@_textFormat"?: string;
                __$$text?: string;
            } & {
                "@_id": string;
            })[] | undefined;
            extensionElements?: ({
                __?: undefined;
            } & import("@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types").BPMN20__tLaneSet__extensionElements) | undefined;
            "@_name"?: string;
            lane?: (any & {
                "@_id": string;
            })[] | undefined;
        } & {
            "@_id": string;
        }) | undefined;
    } & {
        "@_id": string;
    })[];
};
//# sourceMappingURL=addOrGetLanes.d.ts.map