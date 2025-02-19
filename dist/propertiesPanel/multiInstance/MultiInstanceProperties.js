import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormGroup } from "@patternfly/react-core/dist/js/components/Form";
import { CodeInput } from "../codeInput/CodeInput";
import { ToggleGroup, ToggleGroupItem } from "@patternfly/react-core/dist/js/components/ToggleGroup";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { useBpmnEditorStore, useBpmnEditorStoreApi } from "../../store/StoreContext";
import { TextInput } from "@patternfly/react-core/dist/js/components/TextInput";
import "./MultiInstanceProperties.css";
import { FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelectOption";
import { FormSelect } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelect";
export function MultiInstanceProperties({ element }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    const isReadOnly = useBpmnEditorStore((s) => s.settings.isReadOnly);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const inputX = "InputX";
    const outputX = "OutputX";
    const multiInstanceItemType = "multiInstanceItemType";
    return (_jsxs(_Fragment, { children: [_jsx(FormGroup, { label: "Execution mode", children: _jsxs(ToggleGroup, { "aria-label": "Execution mode", children: [_jsx(ToggleGroupItem, { text: "Parallel", isDisabled: isReadOnly, isSelected: ((_a = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics"
                                ? (element === null || element === void 0 ? void 0 : element.loopCharacteristics["@_isSequential"]) === undefined
                                : false, onChange: () => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        var _a;
                                        if (e["@_id"] === element["@_id"] &&
                                            e.__$$element === element.__$$element &&
                                            ((_a = e.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics") {
                                            e.loopCharacteristics["@_isSequential"] = undefined;
                                        }
                                    });
                                });
                            } }), _jsx(ToggleGroupItem, { text: "Sequential", isDisabled: isReadOnly, isSelected: ((_b = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _b === void 0 ? void 0 : _b.__$$element) === "multiInstanceLoopCharacteristics"
                                ? (element === null || element === void 0 ? void 0 : element.loopCharacteristics["@_isSequential"]) === true
                                : false, onChange: () => {
                                bpmnEditorStoreApi.setState((s) => {
                                    const { process } = addOrGetProcessAndDiagramElements({
                                        definitions: s.bpmn.model.definitions,
                                    });
                                    visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                                        var _a;
                                        if (e["@_id"] === element["@_id"] &&
                                            e.__$$element === element.__$$element &&
                                            ((_a = e.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics") {
                                            e.loopCharacteristics["@_isSequential"] = true;
                                        }
                                    });
                                });
                            } })] }) }), _jsx(FormGroup, { label: "Data input", children: _jsx(TextInput, { "aria-label": "Data input", type: "text", isDisabled: isReadOnly, placeholder: "Enter a Data input...", value: ((_c = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _c === void 0 ? void 0 : _c.__$$element) === "multiInstanceLoopCharacteristics"
                        ? (_e = (_d = element === null || element === void 0 ? void 0 : element.loopCharacteristics["inputDataItem"]) === null || _d === void 0 ? void 0 : _d["@_id"]) !== null && _e !== void 0 ? _e : ""
                        : undefined, onChange: (newDataInput) => bpmnEditorStoreApi.setState((s) => {
                        const { process } = addOrGetProcessAndDiagramElements({
                            definitions: s.bpmn.model.definitions,
                        });
                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h;
                            var _j, _k, _l, _m, _o;
                            if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                (_a = e.ioSpecification) !== null && _a !== void 0 ? _a : (e.ioSpecification = {
                                    "@_id": "",
                                    inputSet: [
                                        {
                                            "@_id": "",
                                            dataInputRefs: [{ __$$text: "" }],
                                        },
                                    ],
                                    outputSet: [],
                                });
                                (_b = (_j = e.ioSpecification).dataInput) !== null && _b !== void 0 ? _b : (_j.dataInput = [
                                    {
                                        "@_id": "",
                                    },
                                ]);
                                e.ioSpecification.dataInput[0]["@_id"] = `${e["@_id"]}_${newDataInput}${inputX}`;
                                e.ioSpecification.dataInput[0]["@_itemSubjectRef"] =
                                    `${e["@_id"]}_${multiInstanceItemType}_${newDataInput}`;
                                e.ioSpecification.dataInput[0]["@_name"] = newDataInput;
                                (_c = (_k = e.ioSpecification.inputSet)[0]) !== null && _c !== void 0 ? _c : (_k[0] = {
                                    "@_id": "",
                                    dataInputRefs: [{ __$$text: `${e["@_id"]}_${newDataInput}${inputX}` }],
                                });
                                (_d = (_l = e.ioSpecification.inputSet[0]).dataInputRefs) !== null && _d !== void 0 ? _d : (_l.dataInputRefs = [
                                    { __$$text: `${e["@_id"]}${newDataInput}${inputX}` },
                                ]);
                                e.ioSpecification.inputSet[0].dataInputRefs[0].__$$text = `${e["@_id"]}${newDataInput}${inputX}`;
                                (_e = e.dataInputAssociation) !== null && _e !== void 0 ? _e : (e.dataInputAssociation = [
                                    {
                                        "@_id": "",
                                        targetRef: { __$$text: "" },
                                        transformation: undefined,
                                        sourceRef: [{ __$$text: "" }],
                                    },
                                ]);
                                (_f = (_m = e.dataInputAssociation[0]).sourceRef) !== null && _f !== void 0 ? _f : (_m.sourceRef = []);
                                e.dataInputAssociation[0].sourceRef[0].__$$text = newDataInput;
                                e.dataInputAssociation[0].targetRef.__$$text = `${e["@_id"]}_${newDataInput}${inputX}`;
                                if (((_g = e.loopCharacteristics) === null || _g === void 0 ? void 0 : _g.__$$element) === "multiInstanceLoopCharacteristics") {
                                    (_h = (_o = e.loopCharacteristics).inputDataItem) !== null && _h !== void 0 ? _h : (_o.inputDataItem = {
                                        "@_id": "",
                                    });
                                    e.loopCharacteristics.inputDataItem["@_id"] = newDataInput;
                                    e.loopCharacteristics.inputDataItem["@_itemSubjectRef"] =
                                        `${e["@_id"]}_${multiInstanceItemType}_${newDataInput}`;
                                    e.loopCharacteristics.inputDataItem["@_name"] = newDataInput;
                                }
                            }
                        });
                    }) }) }), _jsx(FormGroup, { label: "Data Output", children: _jsx(TextInput, { "aria-label": "Data Output", type: "text", isDisabled: isReadOnly, placeholder: "Enter a Data Output...", value: ((_f = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _f === void 0 ? void 0 : _f.__$$element) === "multiInstanceLoopCharacteristics"
                        ? (_h = (_g = element === null || element === void 0 ? void 0 : element.loopCharacteristics["outputDataItem"]) === null || _g === void 0 ? void 0 : _g["@_id"]) !== null && _h !== void 0 ? _h : ""
                        : undefined, onChange: (newDataOutput) => bpmnEditorStoreApi.setState((s) => {
                        const { process } = addOrGetProcessAndDiagramElements({
                            definitions: s.bpmn.model.definitions,
                        });
                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h;
                            var _j, _k, _l, _m, _o;
                            if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                                (_a = e.ioSpecification) !== null && _a !== void 0 ? _a : (e.ioSpecification = {
                                    "@_id": "",
                                    inputSet: [],
                                    outputSet: [
                                        {
                                            "@_id": "",
                                            dataOutputRefs: [{ __$$text: "" }],
                                        },
                                    ],
                                });
                                (_b = (_j = e.ioSpecification).dataOutput) !== null && _b !== void 0 ? _b : (_j.dataOutput = [
                                    {
                                        "@_id": "",
                                    },
                                ]);
                                e.ioSpecification.dataOutput[0]["@_id"] = `${e["@_id"]}_${newDataOutput}${outputX}`;
                                e.ioSpecification.dataOutput[0]["@_itemSubjectRef"] =
                                    `${e["@_id"]}_${multiInstanceItemType}_${newDataOutput}`;
                                e.ioSpecification.dataOutput[0]["@_name"] = newDataOutput;
                                (_c = (_k = e.ioSpecification.outputSet)[0]) !== null && _c !== void 0 ? _c : (_k[0] = {
                                    "@_id": "",
                                    dataOutputRefs: [{ __$$text: `${e["@_id"]}_${newDataOutput}${outputX}` }],
                                });
                                (_d = (_l = e.ioSpecification.outputSet[0]).dataOutputRefs) !== null && _d !== void 0 ? _d : (_l.dataOutputRefs = [
                                    { __$$text: `${e["@_id"]}${newDataOutput}${outputX}` },
                                ]);
                                e.ioSpecification.outputSet[0].dataOutputRefs[0].__$$text = `${e["@_id"]}${newDataOutput}${outputX}`;
                                (_e = e.dataOutputAssociation) !== null && _e !== void 0 ? _e : (e.dataOutputAssociation = [
                                    {
                                        "@_id": "",
                                        targetRef: { __$$text: "" },
                                        transformation: undefined,
                                        sourceRef: [{ __$$text: "" }],
                                    },
                                ]);
                                (_f = (_m = e.dataOutputAssociation[0]).sourceRef) !== null && _f !== void 0 ? _f : (_m.sourceRef = []);
                                e.dataOutputAssociation[0].sourceRef[0].__$$text = `${e["@_id"]}_${newDataOutput}${outputX}`;
                                e.dataOutputAssociation[0].targetRef.__$$text = newDataOutput;
                                if (((_g = e.loopCharacteristics) === null || _g === void 0 ? void 0 : _g.__$$element) === "multiInstanceLoopCharacteristics") {
                                    (_h = (_o = e.loopCharacteristics).outputDataItem) !== null && _h !== void 0 ? _h : (_o.outputDataItem = {
                                        "@_id": "",
                                    });
                                    e.loopCharacteristics.outputDataItem["@_id"] = newDataOutput;
                                    e.loopCharacteristics.outputDataItem["@_itemSubjectRef"] =
                                        `${e["@_id"]}_${multiInstanceItemType}_${newDataOutput}`;
                                    e.loopCharacteristics.outputDataItem["@_name"] = newDataOutput;
                                }
                            }
                        });
                    }) }) }), _jsx(FormGroup, { label: "Collection input" }), _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- Select a value --" }) }), _jsx(FormGroup, { label: "Collection output" }), _jsx(FormSelect, { id: "select", value: undefined, isDisabled: isReadOnly, children: _jsx(FormSelectOption, { id: "none", isPlaceholder: true, label: "-- Select a value --" }) }), _jsx(CodeInput, { label: "Completion condition", languages: ["MVEL"], value: ((_j = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _j === void 0 ? void 0 : _j.__$$element) === "multiInstanceLoopCharacteristics"
                    ? ((_l = (_k = element === null || element === void 0 ? void 0 : element.loopCharacteristics) === null || _k === void 0 ? void 0 : _k.completionCondition) === null || _l === void 0 ? void 0 : _l.__$$text) || ""
                    : "", onChange: (newCompletionCondition) => {
                    bpmnEditorStoreApi.setState((s) => {
                        const { process } = addOrGetProcessAndDiagramElements({
                            definitions: s.bpmn.model.definitions,
                        });
                        visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                            var _a, _b;
                            var _c;
                            if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) &&
                                e.__$$element === element.__$$element &&
                                ((_a = e.loopCharacteristics) === null || _a === void 0 ? void 0 : _a.__$$element) === "multiInstanceLoopCharacteristics") {
                                (_b = (_c = e.loopCharacteristics).completionCondition) !== null && _b !== void 0 ? _b : (_c.completionCondition = {
                                    __$$text: "",
                                    "@_id": "",
                                });
                                e.loopCharacteristics.completionCondition.__$$text = newCompletionCondition;
                            }
                        });
                    });
                } })] }));
}
//# sourceMappingURL=MultiInstanceProperties.js.map