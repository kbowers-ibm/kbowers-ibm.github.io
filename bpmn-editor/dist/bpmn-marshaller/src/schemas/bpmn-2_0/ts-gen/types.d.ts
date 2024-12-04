import { XmlParserTsRootElementBaseType } from "@kie-tools/xml-parser-ts";
export type BPMN20__tAdHocOrdering = 'Parallel' | 'Sequential';
export type BPMN20__tAssociationDirection = 'None' | 'One' | 'Both';
export type BPMN20__tChoreographyLoopType = 'None' | 'Standard' | 'MultiInstanceSequential' | 'MultiInstanceParallel';
export type BPMN20__tEventBasedGatewayType = 'Exclusive' | 'Parallel';
export type BPMN20__tGatewayDirection = 'Unspecified' | 'Converging' | 'Diverging' | 'Mixed';
export type BPMN20__tImplementation = string;
export type BPMN20__tItemKind = 'Information' | 'Physical';
export type BPMN20__tMultiInstanceFlowCondition = 'None' | 'One' | 'All' | 'Complex';
export type BPMN20__tProcessType = 'None' | 'Public' | 'Private';
export type BPMN20__tRelationshipDirection = 'None' | 'Forward' | 'Backward' | 'Both';
export type BPMN20__tTransactionMethod = string;
export type BPMNDI__ParticipantBandKind = 'top_initiating' | 'middle_initiating' | 'bottom_initiating' | 'top_non_initiating' | 'middle_non_initiating' | 'bottom_non_initiating';
export type BPMNDI__MessageVisibleKind = 'initiating' | 'non_initiating';
export interface BPMN20__tDefinitions extends XmlParserTsRootElementBaseType {
    __?: undefined;
    "@_id"?: string;
    "@_name"?: string;
    "@_targetNamespace": string;
    "@_expressionLanguage"?: string;
    "@_typeLanguage"?: string;
    "@_exporter"?: string;
    "@_exporterVersion"?: string;
    "import"?: BPMN20__tImport[];
    "extension"?: BPMN20__tExtension[];
    "rootElement"?: (({
        __$$element: "category";
    } & BPMN20__tCategory) | ({
        __$$element: "collaboration";
    } & BPMN20__tCollaboration) | ({
        __$$element: "choreography";
    } & BPMN20__tChoreography) | ({
        __$$element: "globalChoreographyTask";
    } & BPMN20__tGlobalChoreographyTask) | ({
        __$$element: "globalConversation";
    } & BPMN20__tGlobalConversation) | ({
        __$$element: "correlationProperty";
    } & BPMN20__tCorrelationProperty) | ({
        __$$element: "dataStore";
    } & BPMN20__tDataStore) | ({
        __$$element: "endPoint";
    } & BPMN20__tEndPoint) | ({
        __$$element: "error";
    } & BPMN20__tError) | ({
        __$$element: "escalation";
    } & BPMN20__tEscalation) | ({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition) | ({
        __$$element: "globalBusinessRuleTask";
    } & BPMN20__tGlobalBusinessRuleTask) | ({
        __$$element: "globalManualTask";
    } & BPMN20__tGlobalManualTask) | ({
        __$$element: "globalScriptTask";
    } & BPMN20__tGlobalScriptTask) | ({
        __$$element: "globalTask";
    } & BPMN20__tGlobalTask) | ({
        __$$element: "globalUserTask";
    } & BPMN20__tGlobalUserTask) | ({
        __$$element: "interface";
    } & BPMN20__tInterface) | ({
        __$$element: "itemDefinition";
    } & BPMN20__tItemDefinition) | ({
        __$$element: "message";
    } & BPMN20__tMessage) | ({
        __$$element: "partnerEntity";
    } & BPMN20__tPartnerEntity) | ({
        __$$element: "partnerRole";
    } & BPMN20__tPartnerRole) | ({
        __$$element: "process";
    } & BPMN20__tProcess) | ({
        __$$element: "resource";
    } & BPMN20__tResource) | ({
        __$$element: "signal";
    } & BPMN20__tSignal))[];
    "bpmndi:BPMNDiagram"?: BPMNDI__BPMNDiagram[];
    "relationship"?: BPMN20__tRelationship[];
}
export type BPMN20__tImport = {
    "@_namespace": string;
    "@_location": string;
    "@_importType": string;
};
export interface BPMN20__tActivity {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tActivity__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
}
export interface BPMN20__tActivity__extensionElements {
    __?: undefined;
}
export interface BPMN20__tAdHocSubProcess {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tAdHocSubProcess__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_triggeredByEvent"?: boolean;
    "laneSet"?: BPMN20__tLaneSet[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "@_cancelRemainingInstances"?: boolean;
    "@_ordering"?: BPMN20__tAdHocOrdering;
    "completionCondition"?: BPMN20__tExpression;
}
export interface BPMN20__tAdHocSubProcess__extensionElements {
    __?: undefined;
}
export interface BPMN20__tArtifact {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tArtifact__extensionElements;
}
export interface BPMN20__tArtifact__extensionElements {
    __?: undefined;
}
export interface BPMN20__tAssignment {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tAssignment__extensionElements;
    "from": BPMN20__tFormalExpression;
    "to": BPMN20__tFormalExpression;
    "inputName"?: {
        __$$text: string;
    }[];
    "inputDataType"?: {
        __$$text: string;
    }[];
    "inputSource"?: {
        __$$text: string;
    }[];
    "outputName"?: {
        __$$text: string;
    }[];
    "outputDataType"?: {
        __$$text: string;
    }[];
    "outputTarget"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tAssignment__extensionElements {
    __?: undefined;
}
export interface BPMN20__tAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tAssociation__extensionElements;
    "@_sourceRef": string;
    "@_targetRef": string;
    "@_associationDirection"?: BPMN20__tAssociationDirection;
}
export interface BPMN20__tAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tAuditing {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tAuditing__extensionElements;
}
export interface BPMN20__tAuditing__extensionElements {
    __?: undefined;
}
export interface BPMN20__tBaseElement {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tBaseElement__extensionElements;
}
export interface BPMN20__tBaseElement__extensionElements {
    __?: undefined;
}
export interface BPMN20__tBaseElementWithMixedContent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tBaseElementWithMixedContent__extensionElements;
    "__$$text"?: string;
}
export interface BPMN20__tBaseElementWithMixedContent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tBoundaryEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tBoundaryEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "@_parallelMultiple"?: boolean;
    "dataOutput"?: BPMN20__tDataOutput[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "outputSet"?: BPMN20__tOutputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
    "@_cancelActivity"?: boolean;
    "@_attachedToRef": string;
}
export interface BPMN20__tBoundaryEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tBusinessRuleTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tBusinessRuleTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_implementation"?: BPMN20__tImplementation;
}
export interface BPMN20__tBusinessRuleTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCallableElement {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCallableElement__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
}
export interface BPMN20__tCallableElement__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCallActivity {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCallActivity__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_calledElement"?: string;
}
export interface BPMN20__tCallActivity__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCallChoreography {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCallChoreography__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_initiatingParticipantRef": string;
    "@_loopType"?: BPMN20__tChoreographyLoopType;
    "participantRef": {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "@_calledChoreographyRef"?: string;
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
}
export interface BPMN20__tCallChoreography__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCallConversation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCallConversation__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
    "messageFlowRef"?: {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "@_calledCollaborationRef"?: string;
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
}
export interface BPMN20__tCallConversation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCancelEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCancelEventDefinition__extensionElements;
}
export interface BPMN20__tCancelEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCatchEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCatchEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "@_parallelMultiple"?: boolean;
    "dataOutput"?: BPMN20__tDataOutput[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "outputSet"?: BPMN20__tOutputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tCatchEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCategory {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCategory__extensionElements;
    "@_name"?: string;
    "categoryValue"?: BPMN20__tCategoryValue[];
}
export interface BPMN20__tCategory__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCategoryValue {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCategoryValue__extensionElements;
    "@_value"?: string;
}
export interface BPMN20__tCategoryValue__extensionElements {
    __?: undefined;
}
export interface BPMN20__tChoreography {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tChoreography__extensionElements;
    "@_name"?: string;
    "@_isClosed"?: boolean;
    "participant"?: BPMN20__tParticipant[];
    "messageFlow"?: BPMN20__tMessageFlow[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "conversationNode"?: (({
        __$$element: "callConversation";
    } & BPMN20__tCallConversation) | ({
        __$$element: "conversation";
    } & BPMN20__tConversation) | ({
        __$$element: "subConversation";
    } & BPMN20__tSubConversation))[];
    "conversationAssociation"?: BPMN20__tConversationAssociation[];
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
    "messageFlowAssociation"?: BPMN20__tMessageFlowAssociation[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "choreographyRef"?: {
        __$$text: string;
    }[];
    "conversationLink"?: BPMN20__tConversationLink[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
}
export interface BPMN20__tChoreography__extensionElements {
    __?: undefined;
}
export interface BPMN20__tChoreographyActivity {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tChoreographyActivity__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_initiatingParticipantRef": string;
    "@_loopType"?: BPMN20__tChoreographyLoopType;
    "participantRef": {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
}
export interface BPMN20__tChoreographyActivity__extensionElements {
    __?: undefined;
}
export interface BPMN20__tChoreographyTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tChoreographyTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_initiatingParticipantRef": string;
    "@_loopType"?: BPMN20__tChoreographyLoopType;
    "participantRef": {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "messageFlowRef": {
        __$$text: string;
    }[];
}
export interface BPMN20__tChoreographyTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCollaboration {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCollaboration__extensionElements;
    "@_name"?: string;
    "@_isClosed"?: boolean;
    "participant"?: BPMN20__tParticipant[];
    "messageFlow"?: BPMN20__tMessageFlow[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "conversationNode"?: (({
        __$$element: "callConversation";
    } & BPMN20__tCallConversation) | ({
        __$$element: "conversation";
    } & BPMN20__tConversation) | ({
        __$$element: "subConversation";
    } & BPMN20__tSubConversation))[];
    "conversationAssociation"?: BPMN20__tConversationAssociation[];
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
    "messageFlowAssociation"?: BPMN20__tMessageFlowAssociation[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "choreographyRef"?: {
        __$$text: string;
    }[];
    "conversationLink"?: BPMN20__tConversationLink[];
}
export interface BPMN20__tCollaboration__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCompensateEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCompensateEventDefinition__extensionElements;
    "@_waitForCompletion"?: boolean;
    "@_activityRef"?: string;
}
export interface BPMN20__tCompensateEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tComplexBehaviorDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tComplexBehaviorDefinition__extensionElements;
    "condition": BPMN20__tFormalExpression;
    "event"?: BPMN20__tImplicitThrowEvent;
}
export interface BPMN20__tComplexBehaviorDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tComplexGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tComplexGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
    "@_default"?: string;
    "activationCondition"?: BPMN20__tExpression;
}
export interface BPMN20__tComplexGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tConditionalEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tConditionalEventDefinition__extensionElements;
    "condition": BPMN20__tExpression;
}
export interface BPMN20__tConditionalEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tConversation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tConversation__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
    "messageFlowRef"?: {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
}
export interface BPMN20__tConversation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tConversationAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tConversationAssociation__extensionElements;
    "@_innerConversationNodeRef": string;
    "@_outerConversationNodeRef": string;
}
export interface BPMN20__tConversationAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tConversationLink {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tConversationLink__extensionElements;
    "@_name"?: string;
    "@_sourceRef": string;
    "@_targetRef": string;
}
export interface BPMN20__tConversationLink__extensionElements {
    __?: undefined;
}
export interface BPMN20__tConversationNode {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tConversationNode__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
    "messageFlowRef"?: {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
}
export interface BPMN20__tConversationNode__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCorrelationKey {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCorrelationKey__extensionElements;
    "@_name"?: string;
    "correlationPropertyRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tCorrelationKey__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCorrelationProperty {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCorrelationProperty__extensionElements;
    "@_name"?: string;
    "@_type"?: string;
    "correlationPropertyRetrievalExpression": BPMN20__tCorrelationPropertyRetrievalExpression[];
}
export interface BPMN20__tCorrelationProperty__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCorrelationPropertyBinding {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCorrelationPropertyBinding__extensionElements;
    "@_correlationPropertyRef": string;
    "dataPath": BPMN20__tFormalExpression;
}
export interface BPMN20__tCorrelationPropertyBinding__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCorrelationPropertyRetrievalExpression {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCorrelationPropertyRetrievalExpression__extensionElements;
    "@_messageRef": string;
    "messagePath": BPMN20__tFormalExpression;
}
export interface BPMN20__tCorrelationPropertyRetrievalExpression__extensionElements {
    __?: undefined;
}
export interface BPMN20__tCorrelationSubscription {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tCorrelationSubscription__extensionElements;
    "@_correlationKeyRef": string;
    "correlationPropertyBinding"?: BPMN20__tCorrelationPropertyBinding[];
}
export interface BPMN20__tCorrelationSubscription__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataAssociation__extensionElements;
    "sourceRef"?: {
        __$$text: string;
    }[];
    "targetRef": {
        __$$text: string;
    };
    "transformation"?: BPMN20__tFormalExpression;
    "assignment"?: BPMN20__tAssignment[];
}
export interface BPMN20__tDataAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataInput {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataInput__extensionElements;
    "@_name"?: string;
    "@_itemSubjectRef"?: string;
    "@_isCollection"?: boolean;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataInput__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataInputAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataInputAssociation__extensionElements;
    "sourceRef"?: {
        __$$text: string;
    }[];
    "targetRef": {
        __$$text: string;
    };
    "transformation"?: BPMN20__tFormalExpression;
    "assignment"?: BPMN20__tAssignment[];
}
export interface BPMN20__tDataInputAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataObject {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataObject__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "@_itemSubjectRef"?: string;
    "@_isCollection"?: boolean;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataObject__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataObjectReference {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataObjectReference__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "@_itemSubjectRef"?: string;
    "@_dataObjectRef"?: string;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataObjectReference__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataOutput {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataOutput__extensionElements;
    "@_name"?: string;
    "@_itemSubjectRef"?: string;
    "@_isCollection"?: boolean;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataOutput__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataOutputAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataOutputAssociation__extensionElements;
    "sourceRef"?: {
        __$$text: string;
    }[];
    "targetRef": {
        __$$text: string;
    };
    "transformation"?: BPMN20__tFormalExpression;
    "assignment"?: BPMN20__tAssignment[];
}
export interface BPMN20__tDataOutputAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataState {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataState__extensionElements;
    "@_name"?: string;
}
export interface BPMN20__tDataState__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataStore {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataStore__extensionElements;
    "@_name"?: string;
    "@_capacity"?: number;
    "@_isUnlimited"?: boolean;
    "@_itemSubjectRef"?: string;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataStore__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDataStoreReference {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tDataStoreReference__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "@_itemSubjectRef"?: string;
    "@_dataStoreRef"?: string;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tDataStoreReference__extensionElements {
    __?: undefined;
}
export interface BPMN20__tDocumentation {
    __?: undefined;
    "@_id"?: string;
    "@_textFormat"?: string;
    "__$$text"?: string;
}
export interface BPMN20__tEndEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEndEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "dataInput"?: BPMN20__tDataInput[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "inputSet"?: BPMN20__tInputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tEndEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEndPoint {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEndPoint__extensionElements;
}
export interface BPMN20__tEndPoint__extensionElements {
    __?: undefined;
}
export interface BPMN20__tError {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tError__extensionElements;
    "@_name"?: string;
    "@_errorCode"?: string;
    "@_structureRef"?: string;
}
export interface BPMN20__tError__extensionElements {
    __?: undefined;
}
export interface BPMN20__tErrorEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tErrorEventDefinition__extensionElements;
    "@_errorRef"?: string;
}
export interface BPMN20__tErrorEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEscalation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEscalation__extensionElements;
    "@_name"?: string;
    "@_escalationCode"?: string;
    "@_structureRef"?: string;
}
export interface BPMN20__tEscalation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEscalationEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEscalationEventDefinition__extensionElements;
    "@_escalationRef"?: string;
}
export interface BPMN20__tEscalationEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
}
export interface BPMN20__tEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEventBasedGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEventBasedGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
    "@_instantiate"?: boolean;
    "@_eventGatewayType"?: BPMN20__tEventBasedGatewayType;
}
export interface BPMN20__tEventBasedGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tEventDefinition__extensionElements;
}
export interface BPMN20__tEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tExclusiveGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tExclusiveGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
    "@_default"?: string;
}
export interface BPMN20__tExclusiveGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tExpression {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tExpression__extensionElements;
    "__$$text"?: string;
}
export interface BPMN20__tExpression__extensionElements {
    __?: undefined;
}
export type BPMN20__tExtension = {
    "@_definition"?: string;
    "@_mustUnderstand"?: boolean;
    "documentation"?: BPMN20__tDocumentation[];
};
export interface BPMN20__tFlowElement {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tFlowElement__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tFlowElement__extensionElements {
    __?: undefined;
}
export interface BPMN20__tFlowNode {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tFlowNode__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tFlowNode__extensionElements {
    __?: undefined;
}
export interface BPMN20__tFormalExpression {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tFormalExpression__extensionElements;
    "@_language"?: string;
    "@_evaluatesToTypeRef"?: string;
    "__$$text"?: string;
}
export interface BPMN20__tFormalExpression__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
}
export interface BPMN20__tGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalBusinessRuleTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalBusinessRuleTask__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "@_implementation"?: BPMN20__tImplementation;
}
export interface BPMN20__tGlobalBusinessRuleTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalChoreographyTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalChoreographyTask__extensionElements;
    "@_name"?: string;
    "@_isClosed"?: boolean;
    "participant"?: BPMN20__tParticipant[];
    "messageFlow"?: BPMN20__tMessageFlow[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "conversationNode"?: (({
        __$$element: "callConversation";
    } & BPMN20__tCallConversation) | ({
        __$$element: "conversation";
    } & BPMN20__tConversation) | ({
        __$$element: "subConversation";
    } & BPMN20__tSubConversation))[];
    "conversationAssociation"?: BPMN20__tConversationAssociation[];
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
    "messageFlowAssociation"?: BPMN20__tMessageFlowAssociation[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "choreographyRef"?: {
        __$$text: string;
    }[];
    "conversationLink"?: BPMN20__tConversationLink[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "@_initiatingParticipantRef"?: string;
}
export interface BPMN20__tGlobalChoreographyTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalConversation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalConversation__extensionElements;
    "@_name"?: string;
    "@_isClosed"?: boolean;
    "participant"?: BPMN20__tParticipant[];
    "messageFlow"?: BPMN20__tMessageFlow[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "conversationNode"?: (({
        __$$element: "callConversation";
    } & BPMN20__tCallConversation) | ({
        __$$element: "conversation";
    } & BPMN20__tConversation) | ({
        __$$element: "subConversation";
    } & BPMN20__tSubConversation))[];
    "conversationAssociation"?: BPMN20__tConversationAssociation[];
    "participantAssociation"?: BPMN20__tParticipantAssociation[];
    "messageFlowAssociation"?: BPMN20__tMessageFlowAssociation[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "choreographyRef"?: {
        __$$text: string;
    }[];
    "conversationLink"?: BPMN20__tConversationLink[];
}
export interface BPMN20__tGlobalConversation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalManualTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalManualTask__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
}
export interface BPMN20__tGlobalManualTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalScriptTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalScriptTask__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "@_scriptLanguage"?: string;
    "script"?: BPMN20__tScript;
}
export interface BPMN20__tGlobalScriptTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalTask__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
}
export interface BPMN20__tGlobalTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGlobalUserTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGlobalUserTask__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "@_description"?: string;
    "@_skippable"?: boolean;
    "@_implementation"?: BPMN20__tImplementation;
    "taskName"?: {
        __$$text: string;
    };
    "subject"?: {
        __$$text: string;
    };
    "content"?: {
        __$$text: string;
    };
    "priority"?: {
        __$$text: string;
    };
    "rendering"?: BPMN20__tRendering[];
}
export interface BPMN20__tGlobalUserTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tGroup {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tGroup__extensionElements;
    "@_categoryValueRef"?: string;
}
export interface BPMN20__tGroup__extensionElements {
    __?: undefined;
}
export interface BPMN20__tHumanPerformer {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tHumanPerformer__extensionElements;
    "@_name"?: string;
    "resourceAssignmentExpression"?: BPMN20__tResourceAssignmentExpression;
    "resourceRef"?: {
        __$$text: string;
    };
    "resourceParameterBinding"?: BPMN20__tResourceParameterBinding[];
}
export interface BPMN20__tHumanPerformer__extensionElements {
    __?: undefined;
}
export interface BPMN20__tImplicitThrowEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tImplicitThrowEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "dataInput"?: BPMN20__tDataInput[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "inputSet"?: BPMN20__tInputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tImplicitThrowEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tInclusiveGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tInclusiveGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
    "@_default"?: string;
}
export interface BPMN20__tInclusiveGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tInputSet {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tInputSet__extensionElements;
    "@_name"?: string;
    "dataInputRefs"?: {
        __$$text: string;
    }[];
    "optionalInputRefs"?: {
        __$$text: string;
    }[];
    "whileExecutingInputRefs"?: {
        __$$text: string;
    }[];
    "outputSetRefs"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tInputSet__extensionElements {
    __?: undefined;
}
export interface BPMN20__tInterface {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tInterface__extensionElements;
    "@_name": string;
    "@_implementationRef"?: string;
    "operation": BPMN20__tOperation[];
}
export interface BPMN20__tInterface__extensionElements {
    __?: undefined;
}
export interface BPMN20__tIntermediateCatchEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tIntermediateCatchEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "@_parallelMultiple"?: boolean;
    "dataOutput"?: BPMN20__tDataOutput[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "outputSet"?: BPMN20__tOutputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tIntermediateCatchEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tIntermediateThrowEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tIntermediateThrowEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "dataInput"?: BPMN20__tDataInput[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "inputSet"?: BPMN20__tInputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tIntermediateThrowEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tInputOutputBinding {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tInputOutputBinding__extensionElements;
    "@_operationRef": string;
    "@_inputDataRef": string;
    "@_outputDataRef": string;
}
export interface BPMN20__tInputOutputBinding__extensionElements {
    __?: undefined;
}
export interface BPMN20__tInputOutputSpecification {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tInputOutputSpecification__extensionElements;
    "dataInput"?: BPMN20__tDataInput[];
    "dataOutput"?: BPMN20__tDataOutput[];
    "inputSet": BPMN20__tInputSet[];
    "outputSet": BPMN20__tOutputSet[];
}
export interface BPMN20__tInputOutputSpecification__extensionElements {
    __?: undefined;
}
export interface BPMN20__tItemDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tItemDefinition__extensionElements;
    "@_structureRef"?: string;
    "@_isCollection"?: boolean;
    "@_itemKind"?: BPMN20__tItemKind;
}
export interface BPMN20__tItemDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tLane {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tLane__extensionElements;
    "@_name"?: string;
    "@_partitionElementRef"?: string;
    "partitionElement"?: BPMN20__tBaseElement;
    "flowNodeRef"?: {
        __$$text: string;
    }[];
    "childLaneSet"?: BPMN20__tLaneSet;
}
export interface BPMN20__tLane__extensionElements {
    __?: undefined;
}
export interface BPMN20__tLaneSet {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tLaneSet__extensionElements;
    "@_name"?: string;
    "lane"?: BPMN20__tLane[];
}
export interface BPMN20__tLaneSet__extensionElements {
    __?: undefined;
}
export interface BPMN20__tLinkEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tLinkEventDefinition__extensionElements;
    "@_name": string;
    "source"?: {
        __$$text: string;
    }[];
    "target"?: {
        __$$text: string;
    };
}
export interface BPMN20__tLinkEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tLoopCharacteristics {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tLoopCharacteristics__extensionElements;
}
export interface BPMN20__tLoopCharacteristics__extensionElements {
    __?: undefined;
}
export interface BPMN20__tManualTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tManualTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
}
export interface BPMN20__tManualTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMessage {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMessage__extensionElements;
    "@_name"?: string;
    "@_itemRef"?: string;
}
export interface BPMN20__tMessage__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMessageEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMessageEventDefinition__extensionElements;
    "@_messageRef"?: string;
    "operationRef"?: {
        __$$text: string;
    };
}
export interface BPMN20__tMessageEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMessageFlow {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMessageFlow__extensionElements;
    "@_name"?: string;
    "@_sourceRef": string;
    "@_targetRef": string;
    "@_messageRef"?: string;
}
export interface BPMN20__tMessageFlow__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMessageFlowAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMessageFlowAssociation__extensionElements;
    "@_innerMessageFlowRef": string;
    "@_outerMessageFlowRef": string;
}
export interface BPMN20__tMessageFlowAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMonitoring {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMonitoring__extensionElements;
}
export interface BPMN20__tMonitoring__extensionElements {
    __?: undefined;
}
export interface BPMN20__tMultiInstanceLoopCharacteristics {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tMultiInstanceLoopCharacteristics__extensionElements;
    "@_isSequential"?: boolean;
    "@_behavior"?: BPMN20__tMultiInstanceFlowCondition;
    "@_oneBehaviorEventRef"?: string;
    "@_noneBehaviorEventRef"?: string;
    "loopCardinality"?: BPMN20__tExpression;
    "loopDataInputRef"?: {
        __$$text: string;
    };
    "loopDataOutputRef"?: {
        __$$text: string;
    };
    "inputDataItem"?: BPMN20__tDataInput;
    "outputDataItem"?: BPMN20__tDataOutput;
    "complexBehaviorDefinition"?: BPMN20__tComplexBehaviorDefinition[];
    "completionCondition"?: BPMN20__tExpression;
}
export interface BPMN20__tMultiInstanceLoopCharacteristics__extensionElements {
    __?: undefined;
}
export interface BPMN20__tOperation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tOperation__extensionElements;
    "@_name": string;
    "@_implementationRef"?: string;
    "inMessageRef": {
        __$$text: string;
    };
    "outMessageRef"?: {
        __$$text: string;
    };
    "errorRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tOperation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tOutputSet {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tOutputSet__extensionElements;
    "@_name"?: string;
    "dataOutputRefs"?: {
        __$$text: string;
    }[];
    "optionalOutputRefs"?: {
        __$$text: string;
    }[];
    "whileExecutingOutputRefs"?: {
        __$$text: string;
    }[];
    "inputSetRefs"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tOutputSet__extensionElements {
    __?: undefined;
}
export interface BPMN20__tParallelGateway {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tParallelGateway__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_gatewayDirection"?: BPMN20__tGatewayDirection;
}
export interface BPMN20__tParallelGateway__extensionElements {
    __?: undefined;
}
export interface BPMN20__tParticipant {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tParticipant__extensionElements;
    "@_name"?: string;
    "@_processRef"?: string;
    "interfaceRef"?: {
        __$$text: string;
    }[];
    "endPointRef"?: {
        __$$text: string;
    }[];
    "participantMultiplicity"?: BPMN20__tParticipantMultiplicity;
}
export interface BPMN20__tParticipant__extensionElements {
    __?: undefined;
}
export interface BPMN20__tParticipantAssociation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tParticipantAssociation__extensionElements;
    "innerParticipantRef": {
        __$$text: string;
    };
    "outerParticipantRef": {
        __$$text: string;
    };
}
export interface BPMN20__tParticipantAssociation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tParticipantMultiplicity {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tParticipantMultiplicity__extensionElements;
    "@_minimum"?: number;
    "@_maximum"?: number;
}
export interface BPMN20__tParticipantMultiplicity__extensionElements {
    __?: undefined;
}
export interface BPMN20__tPartnerEntity {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tPartnerEntity__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tPartnerEntity__extensionElements {
    __?: undefined;
}
export interface BPMN20__tPartnerRole {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tPartnerRole__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tPartnerRole__extensionElements {
    __?: undefined;
}
export interface BPMN20__tPerformer {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tPerformer__extensionElements;
    "@_name"?: string;
    "resourceAssignmentExpression"?: BPMN20__tResourceAssignmentExpression;
    "resourceRef"?: {
        __$$text: string;
    };
    "resourceParameterBinding"?: BPMN20__tResourceParameterBinding[];
}
export interface BPMN20__tPerformer__extensionElements {
    __?: undefined;
}
export interface BPMN20__tPotentialOwner {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tPotentialOwner__extensionElements;
    "@_name"?: string;
    "resourceAssignmentExpression"?: BPMN20__tResourceAssignmentExpression;
    "resourceRef"?: {
        __$$text: string;
    };
    "resourceParameterBinding"?: BPMN20__tResourceParameterBinding[];
}
export interface BPMN20__tPotentialOwner__extensionElements {
    __?: undefined;
}
export interface BPMN20__tProcess {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tProcess__extensionElements;
    "@_name"?: string;
    "supportedInterfaceRef"?: {
        __$$text: string;
    }[];
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "ioBinding"?: BPMN20__tInputOutputBinding[];
    "@_processType"?: BPMN20__tProcessType;
    "@_isClosed"?: boolean;
    "@_isExecutable"?: boolean;
    "@_definitionalCollaborationRef"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "property"?: BPMN20__tProperty[];
    "laneSet"?: BPMN20__tLaneSet[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "correlationSubscription"?: BPMN20__tCorrelationSubscription[];
    "supports"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tProcess__extensionElements {
    __?: undefined;
}
export interface BPMN20__tProperty {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tProperty__extensionElements;
    "@_name"?: string;
    "@_itemSubjectRef"?: string;
    "dataState"?: BPMN20__tDataState;
}
export interface BPMN20__tProperty__extensionElements {
    __?: undefined;
}
export interface BPMN20__tReceiveTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tReceiveTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_implementation"?: BPMN20__tImplementation;
    "@_instantiate"?: boolean;
    "@_messageRef"?: string;
    "@_operationRef"?: string;
}
export interface BPMN20__tReceiveTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tRelationship {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tRelationship__extensionElements;
    "@_type": string;
    "@_direction"?: BPMN20__tRelationshipDirection;
    "source": {
        __$$text: string;
    }[];
    "target": {
        __$$text: string;
    }[];
}
export interface BPMN20__tRelationship__extensionElements {
    __?: undefined;
}
export interface BPMN20__tRendering {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tRendering__extensionElements;
}
export interface BPMN20__tRendering__extensionElements {
    __?: undefined;
}
export interface BPMN20__tResource {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tResource__extensionElements;
    "@_name": string;
    "resourceParameter"?: BPMN20__tResourceParameter[];
}
export interface BPMN20__tResource__extensionElements {
    __?: undefined;
}
export interface BPMN20__tResourceAssignmentExpression {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tResourceAssignmentExpression__extensionElements;
    "expression": (({
        __$$element: "formalExpression";
    } & BPMN20__tFormalExpression) | ({
        __$$element: "expression";
    } & BPMN20__tExpression));
}
export interface BPMN20__tResourceAssignmentExpression__extensionElements {
    __?: undefined;
}
export interface BPMN20__tResourceParameter {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tResourceParameter__extensionElements;
    "@_name"?: string;
    "@_type"?: string;
    "@_isRequired"?: boolean;
}
export interface BPMN20__tResourceParameter__extensionElements {
    __?: undefined;
}
export interface BPMN20__tResourceParameterBinding {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tResourceParameterBinding__extensionElements;
    "@_parameterRef": string;
    "expression": (({
        __$$element: "formalExpression";
    } & BPMN20__tFormalExpression) | ({
        __$$element: "expression";
    } & BPMN20__tExpression));
}
export interface BPMN20__tResourceParameterBinding__extensionElements {
    __?: undefined;
}
export interface BPMN20__tResourceRole {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tResourceRole__extensionElements;
    "@_name"?: string;
    "resourceAssignmentExpression"?: BPMN20__tResourceAssignmentExpression;
    "resourceRef"?: {
        __$$text: string;
    };
    "resourceParameterBinding"?: BPMN20__tResourceParameterBinding[];
}
export interface BPMN20__tResourceRole__extensionElements {
    __?: undefined;
}
export interface BPMN20__tRootElement {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tRootElement__extensionElements;
}
export interface BPMN20__tRootElement__extensionElements {
    __?: undefined;
}
export interface BPMN20__tScriptTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tScriptTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_scriptFormat"?: string;
    "script"?: BPMN20__tScript;
}
export interface BPMN20__tScriptTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tScript {
    __?: undefined;
    "__$$text"?: string;
}
export interface BPMN20__tSendTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSendTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_implementation"?: BPMN20__tImplementation;
    "@_messageRef"?: string;
    "@_operationRef"?: string;
}
export interface BPMN20__tSendTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSequenceFlow {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSequenceFlow__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "@_sourceRef": string;
    "@_targetRef": string;
    "@_isImmediate"?: boolean;
    "conditionExpression"?: BPMN20__tExpression;
}
export interface BPMN20__tSequenceFlow__extensionElements {
    __?: undefined;
}
export interface BPMN20__tServiceTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tServiceTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_implementation"?: BPMN20__tImplementation;
    "@_operationRef"?: string;
}
export interface BPMN20__tServiceTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSignal {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSignal__extensionElements;
    "@_name"?: string;
    "@_structureRef"?: string;
}
export interface BPMN20__tSignal__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSignalEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSignalEventDefinition__extensionElements;
    "@_signalRef"?: string;
}
export interface BPMN20__tSignalEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tStandardLoopCharacteristics {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tStandardLoopCharacteristics__extensionElements;
    "@_testBefore"?: boolean;
    "@_loopMaximum"?: number;
    "loopCondition"?: BPMN20__tExpression;
}
export interface BPMN20__tStandardLoopCharacteristics__extensionElements {
    __?: undefined;
}
export interface BPMN20__tStartEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tStartEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "@_parallelMultiple"?: boolean;
    "dataOutput"?: BPMN20__tDataOutput[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "outputSet"?: BPMN20__tOutputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
    "@_isInterrupting"?: boolean;
}
export interface BPMN20__tStartEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSubChoreography {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSubChoreography__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_initiatingParticipantRef": string;
    "@_loopType"?: BPMN20__tChoreographyLoopType;
    "participantRef": {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
}
export interface BPMN20__tSubChoreography__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSubConversation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSubConversation__extensionElements;
    "@_name"?: string;
    "participantRef"?: {
        __$$text: string;
    }[];
    "messageFlowRef"?: {
        __$$text: string;
    }[];
    "correlationKey"?: BPMN20__tCorrelationKey[];
    "conversationNode"?: (({
        __$$element: "callConversation";
    } & BPMN20__tCallConversation) | ({
        __$$element: "conversation";
    } & BPMN20__tConversation) | ({
        __$$element: "subConversation";
    } & BPMN20__tSubConversation))[];
}
export interface BPMN20__tSubConversation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tSubProcess {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tSubProcess__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_triggeredByEvent"?: boolean;
    "laneSet"?: BPMN20__tLaneSet[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
}
export interface BPMN20__tSubProcess__extensionElements {
    __?: undefined;
}
export interface BPMN20__tTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
}
export interface BPMN20__tTask__extensionElements {
    __?: undefined;
}
export interface BPMN20__tTerminateEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tTerminateEventDefinition__extensionElements;
}
export interface BPMN20__tTerminateEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tTextAnnotation {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tTextAnnotation__extensionElements;
    "@_textFormat"?: string;
    "text"?: {
        __$$text: string;
    };
}
export interface BPMN20__tTextAnnotation__extensionElements {
    __?: undefined;
}
export interface BPMN20__tThrowEvent {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tThrowEvent__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "property"?: BPMN20__tProperty[];
    "dataInput"?: BPMN20__tDataInput[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "inputSet"?: BPMN20__tInputSet;
    "eventDefinition"?: (({
        __$$element: "cancelEventDefinition";
    } & BPMN20__tCancelEventDefinition) | ({
        __$$element: "compensateEventDefinition";
    } & BPMN20__tCompensateEventDefinition) | ({
        __$$element: "conditionalEventDefinition";
    } & BPMN20__tConditionalEventDefinition) | ({
        __$$element: "errorEventDefinition";
    } & BPMN20__tErrorEventDefinition) | ({
        __$$element: "escalationEventDefinition";
    } & BPMN20__tEscalationEventDefinition) | ({
        __$$element: "linkEventDefinition";
    } & BPMN20__tLinkEventDefinition) | ({
        __$$element: "messageEventDefinition";
    } & BPMN20__tMessageEventDefinition) | ({
        __$$element: "signalEventDefinition";
    } & BPMN20__tSignalEventDefinition) | ({
        __$$element: "terminateEventDefinition";
    } & BPMN20__tTerminateEventDefinition) | ({
        __$$element: "timerEventDefinition";
    } & BPMN20__tTimerEventDefinition))[];
    "eventDefinitionRef"?: {
        __$$text: string;
    }[];
}
export interface BPMN20__tThrowEvent__extensionElements {
    __?: undefined;
}
export interface BPMN20__tTimerEventDefinition {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tTimerEventDefinition__extensionElements;
    "timeDate"?: BPMN20__tExpression;
    "timeDuration"?: BPMN20__tExpression;
    "timeCycle"?: BPMN20__tExpression;
}
export interface BPMN20__tTimerEventDefinition__extensionElements {
    __?: undefined;
}
export interface BPMN20__tTransaction {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tTransaction__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_triggeredByEvent"?: boolean;
    "laneSet"?: BPMN20__tLaneSet[];
    "flowElement"?: (({
        __$$element: "adHocSubProcess";
    } & BPMN20__tAdHocSubProcess) | ({
        __$$element: "boundaryEvent";
    } & BPMN20__tBoundaryEvent) | ({
        __$$element: "businessRuleTask";
    } & BPMN20__tBusinessRuleTask) | ({
        __$$element: "callActivity";
    } & BPMN20__tCallActivity) | ({
        __$$element: "callChoreography";
    } & BPMN20__tCallChoreography) | ({
        __$$element: "choreographyTask";
    } & BPMN20__tChoreographyTask) | ({
        __$$element: "complexGateway";
    } & BPMN20__tComplexGateway) | ({
        __$$element: "dataObject";
    } & BPMN20__tDataObject) | ({
        __$$element: "dataObjectReference";
    } & BPMN20__tDataObjectReference) | ({
        __$$element: "dataStoreReference";
    } & BPMN20__tDataStoreReference) | ({
        __$$element: "endEvent";
    } & BPMN20__tEndEvent) | ({
        __$$element: "event";
    } & BPMN20__tEvent) | ({
        __$$element: "eventBasedGateway";
    } & BPMN20__tEventBasedGateway) | ({
        __$$element: "exclusiveGateway";
    } & BPMN20__tExclusiveGateway) | ({
        __$$element: "implicitThrowEvent";
    } & BPMN20__tImplicitThrowEvent) | ({
        __$$element: "inclusiveGateway";
    } & BPMN20__tInclusiveGateway) | ({
        __$$element: "intermediateCatchEvent";
    } & BPMN20__tIntermediateCatchEvent) | ({
        __$$element: "intermediateThrowEvent";
    } & BPMN20__tIntermediateThrowEvent) | ({
        __$$element: "manualTask";
    } & BPMN20__tManualTask) | ({
        __$$element: "parallelGateway";
    } & BPMN20__tParallelGateway) | ({
        __$$element: "receiveTask";
    } & BPMN20__tReceiveTask) | ({
        __$$element: "scriptTask";
    } & BPMN20__tScriptTask) | ({
        __$$element: "sendTask";
    } & BPMN20__tSendTask) | ({
        __$$element: "sequenceFlow";
    } & BPMN20__tSequenceFlow) | ({
        __$$element: "serviceTask";
    } & BPMN20__tServiceTask) | ({
        __$$element: "startEvent";
    } & BPMN20__tStartEvent) | ({
        __$$element: "subChoreography";
    } & BPMN20__tSubChoreography) | ({
        __$$element: "subProcess";
    } & BPMN20__tSubProcess) | ({
        __$$element: "task";
    } & BPMN20__tTask) | ({
        __$$element: "transaction";
    } & BPMN20__tTransaction) | ({
        __$$element: "userTask";
    } & BPMN20__tUserTask))[];
    "artifact"?: (({
        __$$element: "association";
    } & BPMN20__tAssociation) | ({
        __$$element: "group";
    } & BPMN20__tGroup) | ({
        __$$element: "textAnnotation";
    } & BPMN20__tTextAnnotation))[];
    "@_method"?: BPMN20__tTransactionMethod;
}
export interface BPMN20__tTransaction__extensionElements {
    __?: undefined;
}
export interface BPMN20__tUserTask {
    __?: undefined;
    "@_id"?: string;
    "documentation"?: BPMN20__tDocumentation[];
    "extensionElements"?: BPMN20__tUserTask__extensionElements;
    "@_name"?: string;
    "auditing"?: BPMN20__tAuditing;
    "monitoring"?: BPMN20__tMonitoring;
    "categoryValueRef"?: {
        __$$text: string;
    }[];
    "incoming"?: {
        __$$text: string;
    }[];
    "outgoing"?: {
        __$$text: string;
    }[];
    "@_isForCompensation"?: boolean;
    "@_startQuantity"?: number;
    "@_completionQuantity"?: number;
    "@_default"?: string;
    "ioSpecification"?: BPMN20__tInputOutputSpecification;
    "property"?: BPMN20__tProperty[];
    "dataInputAssociation"?: BPMN20__tDataInputAssociation[];
    "dataOutputAssociation"?: BPMN20__tDataOutputAssociation[];
    "resourceRole"?: (({
        __$$element: "performer";
    } & BPMN20__tPerformer) | ({
        __$$element: "humanPerformer";
    } & BPMN20__tHumanPerformer) | ({
        __$$element: "potentialOwner";
    } & BPMN20__tPotentialOwner) | ({
        __$$element: "resourceRole";
    } & BPMN20__tResourceRole))[];
    "loopCharacteristics"?: (({
        __$$element: "multiInstanceLoopCharacteristics";
    } & BPMN20__tMultiInstanceLoopCharacteristics) | ({
        __$$element: "standardLoopCharacteristics";
    } & BPMN20__tStandardLoopCharacteristics));
    "@_implementation"?: BPMN20__tImplementation;
    "@_description"?: string;
    "@_skippable"?: boolean;
    "taskName"?: {
        __$$text: string;
    };
    "subject"?: {
        __$$text: string;
    };
    "content"?: {
        __$$text: string;
    };
    "priority"?: {
        __$$text: string;
    };
    "rendering"?: BPMN20__tRendering[];
}
export interface BPMN20__tUserTask__extensionElements {
    __?: undefined;
}
export type BPMNDI__BPMNDiagram = {
    "@_name"?: string;
    "@_documentation"?: string;
    "@_resolution"?: number;
    "@_id"?: string;
    "bpmndi:BPMNPlane": BPMNDI__BPMNPlane;
    "bpmndi:BPMNLabelStyle"?: BPMNDI__BPMNLabelStyle[];
};
export interface BPMNDI__BPMNPlane {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: BPMNDI__BPMNPlane__extension;
    "di:DiagramElement"?: (({
        __$$element: "bpmndi:BPMNShape";
    } & BPMNDI__BPMNShape) | ({
        __$$element: "bpmndi:BPMNEdge";
    } & BPMNDI__BPMNEdge))[];
    "@_bpmnElement"?: string;
}
export interface BPMNDI__BPMNPlane__extension {
    __?: undefined;
}
export interface BPMNDI__BPMNEdge {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: BPMNDI__BPMNEdge__extension;
    "di:waypoint": DC__Point[];
    "@_bpmnElement"?: string;
    "@_sourceElement"?: string;
    "@_targetElement"?: string;
    "@_messageVisibleKind"?: BPMNDI__MessageVisibleKind;
    "bpmndi:BPMNLabel"?: BPMNDI__BPMNLabel;
}
export interface BPMNDI__BPMNEdge__extension {
    __?: undefined;
}
export interface BPMNDI__BPMNShape {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: BPMNDI__BPMNShape__extension;
    "dc:Bounds": DC__Bounds;
    "@_bpmnElement"?: string;
    "@_isHorizontal"?: boolean;
    "@_isExpanded"?: boolean;
    "@_isMarkerVisible"?: boolean;
    "@_isMessageVisible"?: boolean;
    "@_participantBandKind"?: BPMNDI__ParticipantBandKind;
    "@_choreographyActivityShape"?: string;
    "bpmndi:BPMNLabel"?: BPMNDI__BPMNLabel;
}
export interface BPMNDI__BPMNShape__extension {
    __?: undefined;
}
export interface BPMNDI__BPMNLabel {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: BPMNDI__BPMNLabel__extension;
    "dc:Bounds"?: DC__Bounds;
    "@_labelStyle"?: string;
}
export interface BPMNDI__BPMNLabel__extension {
    __?: undefined;
}
export type BPMNDI__BPMNLabelStyle = {
    "@_id"?: string;
    "dc:Font": DC__Font;
};
export type DC__Font = {
    "@_name"?: string;
    "@_size"?: number;
    "@_isBold"?: boolean;
    "@_isItalic"?: boolean;
    "@_isUnderline"?: boolean;
    "@_isStrikeThrough"?: boolean;
};
export type DC__Point = {
    "@_x": number;
    "@_y": number;
};
export type DC__Bounds = {
    "@_x": number;
    "@_y": number;
    "@_width": number;
    "@_height": number;
};
export interface DI__DiagramElement {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__DiagramElement__extension;
}
export interface DI__DiagramElement__extension {
    __?: undefined;
}
export type DI__Diagram = {
    "@_name"?: string;
    "@_documentation"?: string;
    "@_resolution"?: number;
    "@_id"?: string;
};
export interface DI__Node {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__Node__extension;
}
export interface DI__Node__extension {
    __?: undefined;
}
export interface DI__Edge {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__Edge__extension;
    "di:waypoint": DC__Point[];
}
export interface DI__Edge__extension {
    __?: undefined;
}
export interface DI__LabeledEdge {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__LabeledEdge__extension;
    "di:waypoint": DC__Point[];
}
export interface DI__LabeledEdge__extension {
    __?: undefined;
}
export interface DI__Shape {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__Shape__extension;
    "dc:Bounds": DC__Bounds;
}
export interface DI__Shape__extension {
    __?: undefined;
}
export interface DI__LabeledShape {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__LabeledShape__extension;
    "dc:Bounds": DC__Bounds;
}
export interface DI__LabeledShape__extension {
    __?: undefined;
}
export interface DI__Label {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__Label__extension;
    "dc:Bounds"?: DC__Bounds;
}
export interface DI__Label__extension {
    __?: undefined;
}
export interface DI__Plane {
    __?: undefined;
    "@_id"?: string;
    "di:extension"?: DI__Plane__extension;
    "di:DiagramElement"?: DI__DiagramElement[];
}
export interface DI__Plane__extension {
    __?: undefined;
}
export type DI__Style = {
    "@_id"?: string;
};
//# sourceMappingURL=types.d.ts.map