import { XmlParserTsIdRandomizer } from "@kie-tools/xml-parser-ts/dist/idRandomizer";
export declare function getNewBpmnIdRandomizer(): XmlParserTsIdRandomizer<{
    readonly BPMN20__tDefinitions: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:string";
        };
        readonly "@_targetNamespace": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_expressionLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_typeLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_exporter": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:string";
        };
        readonly "@_exporterVersion": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "xsd:string";
        };
        readonly import: {
            readonly type: "BPMN20__tImport";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly extension: {
            readonly type: "BPMN20__tExtension";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly rootElement: {
            readonly type: "BPMN20__tRootElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "// local type";
        };
        readonly "bpmndi:BPMNDiagram": {
            readonly type: "BPMNDI__BPMNDiagram";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
        readonly relationship: {
            readonly type: "BPMN20__tRelationship";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDefinitions";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tImport: {
        readonly "@_namespace": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tImport";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_location": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tImport";
            readonly xsdType: "xsd:string";
        };
        readonly "@_importType": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tImport";
            readonly xsdType: "xsd:anyURI";
        };
    };
    readonly BPMN20__tActivity__extensionElements: {};
    readonly BPMN20__tAdHocSubProcess__extensionElements: {};
    readonly BPMN20__tAdHocSubProcess: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tAdHocSubProcess__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_triggeredByEvent": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly laneSet: {
            readonly type: "BPMN20__tLaneSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly "@_cancelRemainingInstances": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAdHocSubProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_ordering": {
            readonly type: "BPMN20__tAdHocOrdering";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAdHocSubProcess";
            readonly xsdType: "// local type";
        };
        readonly completionCondition: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAdHocSubProcess";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tArtifact__extensionElements: {};
    readonly BPMN20__tAssignment__extensionElements: {};
    readonly BPMN20__tAssignment: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tAssignment__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly from: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "// local type";
        };
        readonly to: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "// local type";
        };
        readonly inputName: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
        readonly inputDataType: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
        readonly inputSource: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
        readonly outputName: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
        readonly outputDataType: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
        readonly outputTarget: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tAssignment";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tAssociation__extensionElements: {};
    readonly BPMN20__tAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_sourceRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAssociation";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_targetRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAssociation";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_associationDirection": {
            readonly type: "BPMN20__tAssociationDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tAssociation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tAuditing__extensionElements: {};
    readonly BPMN20__tAuditing: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tAuditing__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tBaseElement__extensionElements: {};
    readonly BPMN20__tBaseElementWithMixedContent__extensionElements: {};
    readonly BPMN20__tBoundaryEvent__extensionElements: {};
    readonly BPMN20__tBoundaryEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tBoundaryEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly "@_parallelMultiple": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataOutput: {
            readonly type: "BPMN20__tDataOutput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly outputSet: {
            readonly type: "BPMN20__tOutputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_cancelActivity": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBoundaryEvent";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_attachedToRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBoundaryEvent";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tBusinessRuleTask__extensionElements: {};
    readonly BPMN20__tBusinessRuleTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tBusinessRuleTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBusinessRuleTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCallableElement__extensionElements: {};
    readonly BPMN20__tCallableElement: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCallableElement__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCallActivity__extensionElements: {};
    readonly BPMN20__tCallActivity: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCallActivity__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_calledElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallActivity";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tCallChoreography__extensionElements: {};
    readonly BPMN20__tCallChoreography: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCallChoreography__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_initiatingParticipantRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_loopType": {
            readonly type: "BPMN20__tChoreographyLoopType";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_calledChoreographyRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallChoreography";
            readonly xsdType: "xsd:QName";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallChoreography";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCallConversation__extensionElements: {};
    readonly BPMN20__tCallConversation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCallConversation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:string";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly messageFlowRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "// local type";
        };
        readonly "@_calledCollaborationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallConversation";
            readonly xsdType: "xsd:QName";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallConversation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCancelEventDefinition__extensionElements: {};
    readonly BPMN20__tCancelEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCancelEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tCatchEvent__extensionElements: {};
    readonly BPMN20__tCategory__extensionElements: {};
    readonly BPMN20__tCategory: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCategory__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCategory";
            readonly xsdType: "xsd:string";
        };
        readonly categoryValue: {
            readonly type: "BPMN20__tCategoryValue";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCategory";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCategoryValue__extensionElements: {};
    readonly BPMN20__tCategoryValue: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCategoryValue__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_value": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCategoryValue";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tChoreography__extensionElements: {};
    readonly BPMN20__tChoreography: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tChoreography__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:string";
        };
        readonly "@_isClosed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:boolean";
        };
        readonly participant: {
            readonly type: "BPMN20__tParticipant";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlow: {
            readonly type: "BPMN20__tMessageFlow";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationNode: {
            readonly type: "BPMN20__tConversationNode";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationAssociation: {
            readonly type: "BPMN20__tConversationAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlowAssociation: {
            readonly type: "BPMN20__tMessageFlowAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly choreographyRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:QName";
        };
        readonly conversationLink: {
            readonly type: "BPMN20__tConversationLink";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreography";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tChoreographyActivity__extensionElements: {};
    readonly BPMN20__tChoreographyTask__extensionElements: {};
    readonly BPMN20__tChoreographyTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tChoreographyTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_initiatingParticipantRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_loopType": {
            readonly type: "BPMN20__tChoreographyLoopType";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly messageFlowRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyTask";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tCollaboration__extensionElements: {};
    readonly BPMN20__tCollaboration: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCollaboration__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:string";
        };
        readonly "@_isClosed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:boolean";
        };
        readonly participant: {
            readonly type: "BPMN20__tParticipant";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlow: {
            readonly type: "BPMN20__tMessageFlow";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationNode: {
            readonly type: "BPMN20__tConversationNode";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationAssociation: {
            readonly type: "BPMN20__tConversationAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlowAssociation: {
            readonly type: "BPMN20__tMessageFlowAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly choreographyRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:QName";
        };
        readonly conversationLink: {
            readonly type: "BPMN20__tConversationLink";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCompensateEventDefinition__extensionElements: {};
    readonly BPMN20__tCompensateEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCompensateEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_waitForCompletion": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCompensateEventDefinition";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_activityRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCompensateEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tComplexBehaviorDefinition__extensionElements: {};
    readonly BPMN20__tComplexBehaviorDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tComplexBehaviorDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly condition: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tComplexBehaviorDefinition";
            readonly xsdType: "// local type";
        };
        readonly event: {
            readonly type: "BPMN20__tImplicitThrowEvent";
            readonly isArray: false;
            readonly fromType: "BPMN20__tComplexBehaviorDefinition";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tComplexGateway__extensionElements: {};
    readonly BPMN20__tComplexGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tComplexGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tComplexGateway";
            readonly xsdType: "xsd:IDREF";
        };
        readonly activationCondition: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tComplexGateway";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tConditionalEventDefinition__extensionElements: {};
    readonly BPMN20__tConditionalEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tConditionalEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly condition: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConditionalEventDefinition";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tConversation__extensionElements: {};
    readonly BPMN20__tConversation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tConversation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:string";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly messageFlowRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tConversationAssociation__extensionElements: {};
    readonly BPMN20__tConversationAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tConversationAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_innerConversationNodeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationAssociation";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_outerConversationNodeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationAssociation";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tConversationLink__extensionElements: {};
    readonly BPMN20__tConversationLink: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tConversationLink__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationLink";
            readonly xsdType: "xsd:string";
        };
        readonly "@_sourceRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationLink";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_targetRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationLink";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tConversationNode__extensionElements: {};
    readonly BPMN20__tCorrelationKey__extensionElements: {};
    readonly BPMN20__tCorrelationKey: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCorrelationKey__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationKey";
            readonly xsdType: "xsd:string";
        };
        readonly correlationPropertyRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCorrelationKey";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tCorrelationProperty__extensionElements: {};
    readonly BPMN20__tCorrelationProperty: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCorrelationProperty__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationProperty";
            readonly xsdType: "xsd:string";
        };
        readonly "@_type": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationProperty";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationPropertyRetrievalExpression: {
            readonly type: "BPMN20__tCorrelationPropertyRetrievalExpression";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCorrelationProperty";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCorrelationPropertyBinding__extensionElements: {};
    readonly BPMN20__tCorrelationPropertyBinding: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCorrelationPropertyBinding__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_correlationPropertyRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationPropertyBinding";
            readonly xsdType: "xsd:QName";
        };
        readonly dataPath: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationPropertyBinding";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCorrelationPropertyRetrievalExpression__extensionElements: {};
    readonly BPMN20__tCorrelationPropertyRetrievalExpression: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCorrelationPropertyRetrievalExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_messageRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationPropertyRetrievalExpression";
            readonly xsdType: "xsd:QName";
        };
        readonly messagePath: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationPropertyRetrievalExpression";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tCorrelationSubscription__extensionElements: {};
    readonly BPMN20__tCorrelationSubscription: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tCorrelationSubscription__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_correlationKeyRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCorrelationSubscription";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationPropertyBinding: {
            readonly type: "BPMN20__tCorrelationPropertyBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCorrelationSubscription";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataAssociation__extensionElements: {};
    readonly BPMN20__tDataAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly sourceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly targetRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly transformation: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
        readonly assignment: {
            readonly type: "BPMN20__tAssignment";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataInput__extensionElements: {};
    readonly BPMN20__tDataInput: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataInput__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataInput";
            readonly xsdType: "xsd:string";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataInput";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isCollection": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataInput";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataInput";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataInputAssociation__extensionElements: {};
    readonly BPMN20__tDataInputAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataInputAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly sourceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly targetRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly transformation: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
        readonly assignment: {
            readonly type: "BPMN20__tAssignment";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataObject__extensionElements: {};
    readonly BPMN20__tDataObject: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataObject__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObject";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isCollection": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObject";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObject";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataObjectReference__extensionElements: {};
    readonly BPMN20__tDataObjectReference: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataObjectReference__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObjectReference";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_dataObjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObjectReference";
            readonly xsdType: "xsd:IDREF";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataObjectReference";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataOutput__extensionElements: {};
    readonly BPMN20__tDataOutput: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataOutput__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataOutput";
            readonly xsdType: "xsd:string";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataOutput";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isCollection": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataOutput";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataOutput";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataOutputAssociation__extensionElements: {};
    readonly BPMN20__tDataOutputAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataOutputAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly sourceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly targetRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "xsd:IDREF";
        };
        readonly transformation: {
            readonly type: "BPMN20__tFormalExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
        readonly assignment: {
            readonly type: "BPMN20__tAssignment";
            readonly isArray: true;
            readonly fromType: "BPMN20__tDataAssociation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataState__extensionElements: {};
    readonly BPMN20__tDataState: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataState__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataState";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tDataStore__extensionElements: {};
    readonly BPMN20__tDataStore: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataStore__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStore";
            readonly xsdType: "xsd:string";
        };
        readonly "@_capacity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStore";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_isUnlimited": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStore";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStore";
            readonly xsdType: "xsd:QName";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStore";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDataStoreReference__extensionElements: {};
    readonly BPMN20__tDataStoreReference: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tDataStoreReference__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStoreReference";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_dataStoreRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStoreReference";
            readonly xsdType: "xsd:QName";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDataStoreReference";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tDocumentation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDocumentation";
            readonly xsdType: "xsd:ID";
        };
        readonly "@_textFormat": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDocumentation";
            readonly xsdType: "xsd:string";
        };
        readonly __$$text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tDocumentation";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tEndEvent__extensionElements: {};
    readonly BPMN20__tEndEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tEndEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInput: {
            readonly type: "BPMN20__tDataInput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly inputSet: {
            readonly type: "BPMN20__tInputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tEndPoint__extensionElements: {};
    readonly BPMN20__tEndPoint: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tEndPoint__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tError__extensionElements: {};
    readonly BPMN20__tError: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tError__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tError";
            readonly xsdType: "xsd:string";
        };
        readonly "@_errorCode": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tError";
            readonly xsdType: "xsd:string";
        };
        readonly "@_structureRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tError";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tErrorEventDefinition__extensionElements: {};
    readonly BPMN20__tErrorEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tErrorEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_errorRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tErrorEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tEscalation__extensionElements: {};
    readonly BPMN20__tEscalation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tEscalation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEscalation";
            readonly xsdType: "xsd:string";
        };
        readonly "@_escalationCode": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEscalation";
            readonly xsdType: "xsd:string";
        };
        readonly "@_structureRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEscalation";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tEscalationEventDefinition__extensionElements: {};
    readonly BPMN20__tEscalationEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tEscalationEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_escalationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEscalationEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tEvent__extensionElements: {};
    readonly BPMN20__tEventBasedGateway__extensionElements: {};
    readonly BPMN20__tEventBasedGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tEventBasedGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
        readonly "@_instantiate": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEventBasedGateway";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_eventGatewayType": {
            readonly type: "BPMN20__tEventBasedGatewayType";
            readonly isArray: false;
            readonly fromType: "BPMN20__tEventBasedGateway";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tEventDefinition__extensionElements: {};
    readonly BPMN20__tExclusiveGateway__extensionElements: {};
    readonly BPMN20__tExclusiveGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tExclusiveGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tExclusiveGateway";
            readonly xsdType: "xsd:IDREF";
        };
    };
    readonly BPMN20__tExpression__extensionElements: {};
    readonly BPMN20__tExpression: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "Anonumous type...";
        };
        readonly __$$text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tExpression";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tExtension: {
        readonly "@_definition": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tExtension";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_mustUnderstand": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tExtension";
            readonly xsdType: "xsd:boolean";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tExtension";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tFlowElement__extensionElements: {};
    readonly BPMN20__tFlowNode__extensionElements: {};
    readonly BPMN20__tFormalExpression__extensionElements: {};
    readonly BPMN20__tFormalExpression: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tFormalExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElementWithMixedContent";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_language": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFormalExpression";
            readonly xsdType: "xsd:anyURI";
        };
        readonly "@_evaluatesToTypeRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFormalExpression";
            readonly xsdType: "xsd:QName";
        };
        readonly __$$text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFormalExpression";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tGateway__extensionElements: {};
    readonly BPMN20__tGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalBusinessRuleTask__extensionElements: {};
    readonly BPMN20__tGlobalBusinessRuleTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalBusinessRuleTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalTask";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalBusinessRuleTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalChoreographyTask__extensionElements: {};
    readonly BPMN20__tGlobalChoreographyTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalChoreographyTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:string";
        };
        readonly "@_isClosed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:boolean";
        };
        readonly participant: {
            readonly type: "BPMN20__tParticipant";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlow: {
            readonly type: "BPMN20__tMessageFlow";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationNode: {
            readonly type: "BPMN20__tConversationNode";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationAssociation: {
            readonly type: "BPMN20__tConversationAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlowAssociation: {
            readonly type: "BPMN20__tMessageFlowAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly choreographyRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:QName";
        };
        readonly conversationLink: {
            readonly type: "BPMN20__tConversationLink";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreography";
            readonly xsdType: "// local type";
        };
        readonly "@_initiatingParticipantRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalChoreographyTask";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tGlobalConversation__extensionElements: {};
    readonly BPMN20__tGlobalConversation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalConversation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:string";
        };
        readonly "@_isClosed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:boolean";
        };
        readonly participant: {
            readonly type: "BPMN20__tParticipant";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlow: {
            readonly type: "BPMN20__tMessageFlow";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationNode: {
            readonly type: "BPMN20__tConversationNode";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly conversationAssociation: {
            readonly type: "BPMN20__tConversationAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly participantAssociation: {
            readonly type: "BPMN20__tParticipantAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly messageFlowAssociation: {
            readonly type: "BPMN20__tMessageFlowAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
        readonly choreographyRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "xsd:QName";
        };
        readonly conversationLink: {
            readonly type: "BPMN20__tConversationLink";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCollaboration";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalManualTask__extensionElements: {};
    readonly BPMN20__tGlobalManualTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalManualTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalScriptTask__extensionElements: {};
    readonly BPMN20__tGlobalScriptTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalScriptTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalTask";
            readonly xsdType: "// local type";
        };
        readonly "@_scriptLanguage": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalScriptTask";
            readonly xsdType: "xsd:anyURI";
        };
        readonly script: {
            readonly type: "BPMN20__tScript";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalScriptTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalTask__extensionElements: {};
    readonly BPMN20__tGlobalTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGlobalUserTask__extensionElements: {};
    readonly BPMN20__tGlobalUserTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGlobalUserTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalTask";
            readonly xsdType: "// local type";
        };
        readonly "@_description": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly "@_skippable": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "// local type";
        };
        readonly taskName: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly subject: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly content: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly priority: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly rendering: {
            readonly type: "BPMN20__tRendering";
            readonly isArray: true;
            readonly fromType: "BPMN20__tGlobalUserTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tGroup__extensionElements: {};
    readonly BPMN20__tGroup: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tGroup__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_categoryValueRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGroup";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tHumanPerformer__extensionElements: {};
    readonly BPMN20__tHumanPerformer: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tHumanPerformer__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:string";
        };
        readonly resourceAssignmentExpression: {
            readonly type: "BPMN20__tResourceAssignmentExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
        readonly resourceRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:QName";
        };
        readonly resourceParameterBinding: {
            readonly type: "BPMN20__tResourceParameterBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tImplicitThrowEvent__extensionElements: {};
    readonly BPMN20__tImplicitThrowEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tImplicitThrowEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInput: {
            readonly type: "BPMN20__tDataInput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly inputSet: {
            readonly type: "BPMN20__tInputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tInclusiveGateway__extensionElements: {};
    readonly BPMN20__tInclusiveGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tInclusiveGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInclusiveGateway";
            readonly xsdType: "xsd:IDREF";
        };
    };
    readonly BPMN20__tInputSet__extensionElements: {};
    readonly BPMN20__tInputSet: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tInputSet__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInputSet";
            readonly xsdType: "xsd:string";
        };
        readonly dataInputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly optionalInputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly whileExecutingInputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly outputSetRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputSet";
            readonly xsdType: "xsd:IDREF";
        };
    };
    readonly BPMN20__tInterface__extensionElements: {};
    readonly BPMN20__tInterface: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tInterface__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInterface";
            readonly xsdType: "xsd:string";
        };
        readonly "@_implementationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInterface";
            readonly xsdType: "xsd:QName";
        };
        readonly operation: {
            readonly type: "BPMN20__tOperation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInterface";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tIntermediateCatchEvent__extensionElements: {};
    readonly BPMN20__tIntermediateCatchEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tIntermediateCatchEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly "@_parallelMultiple": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataOutput: {
            readonly type: "BPMN20__tDataOutput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly outputSet: {
            readonly type: "BPMN20__tOutputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tIntermediateThrowEvent__extensionElements: {};
    readonly BPMN20__tIntermediateThrowEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tIntermediateThrowEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInput: {
            readonly type: "BPMN20__tDataInput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly inputSet: {
            readonly type: "BPMN20__tInputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tThrowEvent";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tInputOutputBinding__extensionElements: {};
    readonly BPMN20__tInputOutputBinding: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tInputOutputBinding__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_operationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInputOutputBinding";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_inputDataRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInputOutputBinding";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_outputDataRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tInputOutputBinding";
            readonly xsdType: "xsd:IDREF";
        };
    };
    readonly BPMN20__tInputOutputSpecification__extensionElements: {};
    readonly BPMN20__tInputOutputSpecification: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tInputOutputSpecification__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly dataInput: {
            readonly type: "BPMN20__tDataInput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputOutputSpecification";
            readonly xsdType: "// local type";
        };
        readonly dataOutput: {
            readonly type: "BPMN20__tDataOutput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputOutputSpecification";
            readonly xsdType: "// local type";
        };
        readonly inputSet: {
            readonly type: "BPMN20__tInputSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputOutputSpecification";
            readonly xsdType: "// local type";
        };
        readonly outputSet: {
            readonly type: "BPMN20__tOutputSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tInputOutputSpecification";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tItemDefinition__extensionElements: {};
    readonly BPMN20__tItemDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tItemDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_structureRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tItemDefinition";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isCollection": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tItemDefinition";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_itemKind": {
            readonly type: "BPMN20__tItemKind";
            readonly isArray: false;
            readonly fromType: "BPMN20__tItemDefinition";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tLane__extensionElements: {};
    readonly BPMN20__tLane: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tLane__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLane";
            readonly xsdType: "xsd:string";
        };
        readonly "@_partitionElementRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLane";
            readonly xsdType: "xsd:QName";
        };
        readonly partitionElement: {
            readonly type: "BPMN20__tBaseElement";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLane";
            readonly xsdType: "// local type";
        };
        readonly flowNodeRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tLane";
            readonly xsdType: "xsd:IDREF";
        };
        readonly childLaneSet: {
            readonly type: "BPMN20__tLaneSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLane";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tLaneSet__extensionElements: {};
    readonly BPMN20__tLaneSet: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tLaneSet__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLaneSet";
            readonly xsdType: "xsd:string";
        };
        readonly lane: {
            readonly type: "BPMN20__tLane";
            readonly isArray: true;
            readonly fromType: "BPMN20__tLaneSet";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tLinkEventDefinition__extensionElements: {};
    readonly BPMN20__tLinkEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tLinkEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLinkEventDefinition";
            readonly xsdType: "xsd:string";
        };
        readonly source: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tLinkEventDefinition";
            readonly xsdType: "xsd:QName";
        };
        readonly target: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tLinkEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tLoopCharacteristics__extensionElements: {};
    readonly BPMN20__tManualTask__extensionElements: {};
    readonly BPMN20__tManualTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tManualTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tMessage__extensionElements: {};
    readonly BPMN20__tMessage: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMessage__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessage";
            readonly xsdType: "xsd:string";
        };
        readonly "@_itemRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessage";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tMessageEventDefinition__extensionElements: {};
    readonly BPMN20__tMessageEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMessageEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_messageRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageEventDefinition";
            readonly xsdType: "xsd:QName";
        };
        readonly operationRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tMessageFlow__extensionElements: {};
    readonly BPMN20__tMessageFlow: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMessageFlow__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlow";
            readonly xsdType: "xsd:string";
        };
        readonly "@_sourceRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlow";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_targetRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlow";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_messageRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlow";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tMessageFlowAssociation__extensionElements: {};
    readonly BPMN20__tMessageFlowAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMessageFlowAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_innerMessageFlowRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlowAssociation";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_outerMessageFlowRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMessageFlowAssociation";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tMonitoring__extensionElements: {};
    readonly BPMN20__tMonitoring: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMonitoring__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tMultiInstanceLoopCharacteristics__extensionElements: {};
    readonly BPMN20__tMultiInstanceLoopCharacteristics: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tMultiInstanceLoopCharacteristics__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_isSequential": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_behavior": {
            readonly type: "BPMN20__tMultiInstanceFlowCondition";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
        readonly "@_oneBehaviorEventRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_noneBehaviorEventRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "xsd:QName";
        };
        readonly loopCardinality: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
        readonly loopDataInputRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "xsd:QName";
        };
        readonly loopDataOutputRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "xsd:QName";
        };
        readonly inputDataItem: {
            readonly type: "BPMN20__tDataInput";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
        readonly outputDataItem: {
            readonly type: "BPMN20__tDataOutput";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
        readonly complexBehaviorDefinition: {
            readonly type: "BPMN20__tComplexBehaviorDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
        readonly completionCondition: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tMultiInstanceLoopCharacteristics";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tOperation__extensionElements: {};
    readonly BPMN20__tOperation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tOperation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tOperation";
            readonly xsdType: "xsd:string";
        };
        readonly "@_implementationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tOperation";
            readonly xsdType: "xsd:QName";
        };
        readonly inMessageRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tOperation";
            readonly xsdType: "xsd:QName";
        };
        readonly outMessageRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tOperation";
            readonly xsdType: "xsd:QName";
        };
        readonly errorRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tOperation";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tOutputSet__extensionElements: {};
    readonly BPMN20__tOutputSet: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tOutputSet__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tOutputSet";
            readonly xsdType: "xsd:string";
        };
        readonly dataOutputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tOutputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly optionalOutputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tOutputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly whileExecutingOutputRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tOutputSet";
            readonly xsdType: "xsd:IDREF";
        };
        readonly inputSetRefs: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tOutputSet";
            readonly xsdType: "xsd:IDREF";
        };
    };
    readonly BPMN20__tParallelGateway__extensionElements: {};
    readonly BPMN20__tParallelGateway: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tParallelGateway__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_gatewayDirection": {
            readonly type: "BPMN20__tGatewayDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tGateway";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tParticipant__extensionElements: {};
    readonly BPMN20__tParticipant: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tParticipant__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipant";
            readonly xsdType: "xsd:string";
        };
        readonly "@_processRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipant";
            readonly xsdType: "xsd:QName";
        };
        readonly interfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tParticipant";
            readonly xsdType: "xsd:QName";
        };
        readonly endPointRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tParticipant";
            readonly xsdType: "xsd:QName";
        };
        readonly participantMultiplicity: {
            readonly type: "BPMN20__tParticipantMultiplicity";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipant";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tParticipantAssociation__extensionElements: {};
    readonly BPMN20__tParticipantAssociation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tParticipantAssociation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly innerParticipantRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipantAssociation";
            readonly xsdType: "xsd:QName";
        };
        readonly outerParticipantRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipantAssociation";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tParticipantMultiplicity__extensionElements: {};
    readonly BPMN20__tParticipantMultiplicity: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tParticipantMultiplicity__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_minimum": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipantMultiplicity";
            readonly xsdType: "xsd:int";
        };
        readonly "@_maximum": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tParticipantMultiplicity";
            readonly xsdType: "xsd:int";
        };
    };
    readonly BPMN20__tPartnerEntity__extensionElements: {};
    readonly BPMN20__tPartnerEntity: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tPartnerEntity__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tPartnerEntity";
            readonly xsdType: "xsd:string";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tPartnerEntity";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tPartnerRole__extensionElements: {};
    readonly BPMN20__tPartnerRole: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tPartnerRole__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tPartnerRole";
            readonly xsdType: "xsd:string";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tPartnerRole";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tPerformer__extensionElements: {};
    readonly BPMN20__tPerformer: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tPerformer__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:string";
        };
        readonly resourceAssignmentExpression: {
            readonly type: "BPMN20__tResourceAssignmentExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
        readonly resourceRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:QName";
        };
        readonly resourceParameterBinding: {
            readonly type: "BPMN20__tResourceParameterBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tPotentialOwner__extensionElements: {};
    readonly BPMN20__tPotentialOwner: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tPotentialOwner__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:string";
        };
        readonly resourceAssignmentExpression: {
            readonly type: "BPMN20__tResourceAssignmentExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
        readonly resourceRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:QName";
        };
        readonly resourceParameterBinding: {
            readonly type: "BPMN20__tResourceParameterBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tProcess__extensionElements: {};
    readonly BPMN20__tProcess: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tProcess__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:string";
        };
        readonly supportedInterfaceRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "xsd:QName";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly ioBinding: {
            readonly type: "BPMN20__tInputOutputBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCallableElement";
            readonly xsdType: "// local type";
        };
        readonly "@_processType": {
            readonly type: "BPMN20__tProcessType";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly "@_isClosed": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isExecutable": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_definitionalCollaborationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "xsd:QName";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly laneSet: {
            readonly type: "BPMN20__tLaneSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly correlationSubscription: {
            readonly type: "BPMN20__tCorrelationSubscription";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "// local type";
        };
        readonly supports: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tProcess";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tProperty__extensionElements: {};
    readonly BPMN20__tProperty: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tProperty__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProperty";
            readonly xsdType: "xsd:string";
        };
        readonly "@_itemSubjectRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProperty";
            readonly xsdType: "xsd:QName";
        };
        readonly dataState: {
            readonly type: "BPMN20__tDataState";
            readonly isArray: false;
            readonly fromType: "BPMN20__tProperty";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tReceiveTask__extensionElements: {};
    readonly BPMN20__tReceiveTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tReceiveTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tReceiveTask";
            readonly xsdType: "// local type";
        };
        readonly "@_instantiate": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tReceiveTask";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_messageRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tReceiveTask";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_operationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tReceiveTask";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tRelationship__extensionElements: {};
    readonly BPMN20__tRelationship: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tRelationship__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_type": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tRelationship";
            readonly xsdType: "xsd:string";
        };
        readonly "@_direction": {
            readonly type: "BPMN20__tRelationshipDirection";
            readonly isArray: false;
            readonly fromType: "BPMN20__tRelationship";
            readonly xsdType: "// local type";
        };
        readonly source: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tRelationship";
            readonly xsdType: "xsd:QName";
        };
        readonly target: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tRelationship";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tRendering__extensionElements: {};
    readonly BPMN20__tRendering: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tRendering__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tResource__extensionElements: {};
    readonly BPMN20__tResource: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tResource__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResource";
            readonly xsdType: "xsd:string";
        };
        readonly resourceParameter: {
            readonly type: "BPMN20__tResourceParameter";
            readonly isArray: true;
            readonly fromType: "BPMN20__tResource";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tResourceAssignmentExpression__extensionElements: {};
    readonly BPMN20__tResourceAssignmentExpression: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tResourceAssignmentExpression__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly expression: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceAssignmentExpression";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tResourceParameter__extensionElements: {};
    readonly BPMN20__tResourceParameter: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tResourceParameter__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceParameter";
            readonly xsdType: "xsd:string";
        };
        readonly "@_type": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceParameter";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isRequired": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceParameter";
            readonly xsdType: "xsd:boolean";
        };
    };
    readonly BPMN20__tResourceParameterBinding__extensionElements: {};
    readonly BPMN20__tResourceParameterBinding: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tResourceParameterBinding__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_parameterRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceParameterBinding";
            readonly xsdType: "xsd:QName";
        };
        readonly expression: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceParameterBinding";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tResourceRole__extensionElements: {};
    readonly BPMN20__tResourceRole: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tResourceRole__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:string";
        };
        readonly resourceAssignmentExpression: {
            readonly type: "BPMN20__tResourceAssignmentExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
        readonly resourceRef: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "xsd:QName";
        };
        readonly resourceParameterBinding: {
            readonly type: "BPMN20__tResourceParameterBinding";
            readonly isArray: true;
            readonly fromType: "BPMN20__tResourceRole";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tRootElement__extensionElements: {};
    readonly BPMN20__tScriptTask__extensionElements: {};
    readonly BPMN20__tScriptTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tScriptTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_scriptFormat": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tScriptTask";
            readonly xsdType: "xsd:string";
        };
        readonly script: {
            readonly type: "BPMN20__tScript";
            readonly isArray: false;
            readonly fromType: "BPMN20__tScriptTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tScript: {
        readonly __$$text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tScript";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tSendTask__extensionElements: {};
    readonly BPMN20__tSendTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSendTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSendTask";
            readonly xsdType: "// local type";
        };
        readonly "@_messageRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSendTask";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_operationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSendTask";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tSequenceFlow__extensionElements: {};
    readonly BPMN20__tSequenceFlow: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSequenceFlow__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_sourceRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSequenceFlow";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_targetRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSequenceFlow";
            readonly xsdType: "xsd:IDREF";
        };
        readonly "@_isImmediate": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSequenceFlow";
            readonly xsdType: "xsd:boolean";
        };
        readonly conditionExpression: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSequenceFlow";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tServiceTask__extensionElements: {};
    readonly BPMN20__tServiceTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tServiceTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tServiceTask";
            readonly xsdType: "// local type";
        };
        readonly "@_operationRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tServiceTask";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tSignal__extensionElements: {};
    readonly BPMN20__tSignal: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSignal__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSignal";
            readonly xsdType: "xsd:string";
        };
        readonly "@_structureRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSignal";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tSignalEventDefinition__extensionElements: {};
    readonly BPMN20__tSignalEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSignalEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_signalRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSignalEventDefinition";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMN20__tStandardLoopCharacteristics__extensionElements: {};
    readonly BPMN20__tStandardLoopCharacteristics: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tStandardLoopCharacteristics__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_testBefore": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tStandardLoopCharacteristics";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_loopMaximum": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tStandardLoopCharacteristics";
            readonly xsdType: "xsd:integer";
        };
        readonly loopCondition: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tStandardLoopCharacteristics";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tStartEvent__extensionElements: {};
    readonly BPMN20__tStartEvent: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tStartEvent__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tEvent";
            readonly xsdType: "// local type";
        };
        readonly "@_parallelMultiple": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:boolean";
        };
        readonly dataOutput: {
            readonly type: "BPMN20__tDataOutput";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly outputSet: {
            readonly type: "BPMN20__tOutputSet";
            readonly isArray: false;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinition: {
            readonly type: "BPMN20__tEventDefinition";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "// local type";
        };
        readonly eventDefinitionRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tCatchEvent";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isInterrupting": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tStartEvent";
            readonly xsdType: "xsd:boolean";
        };
    };
    readonly BPMN20__tSubChoreography__extensionElements: {};
    readonly BPMN20__tSubChoreography: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSubChoreography__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_initiatingParticipantRef": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_loopType": {
            readonly type: "BPMN20__tChoreographyLoopType";
            readonly isArray: false;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tChoreographyActivity";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubChoreography";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubChoreography";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tSubConversation__extensionElements: {};
    readonly BPMN20__tSubConversation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSubConversation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:string";
        };
        readonly participantRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly messageFlowRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "xsd:QName";
        };
        readonly correlationKey: {
            readonly type: "BPMN20__tCorrelationKey";
            readonly isArray: true;
            readonly fromType: "BPMN20__tConversationNode";
            readonly xsdType: "// local type";
        };
        readonly conversationNode: {
            readonly type: "BPMN20__tConversationNode";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubConversation";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tSubProcess__extensionElements: {};
    readonly BPMN20__tSubProcess: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tSubProcess__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_triggeredByEvent": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly laneSet: {
            readonly type: "BPMN20__tLaneSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tTask__extensionElements: {};
    readonly BPMN20__tTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tTerminateEventDefinition__extensionElements: {};
    readonly BPMN20__tTerminateEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tTerminateEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
    };
    readonly BPMN20__tTextAnnotation__extensionElements: {};
    readonly BPMN20__tTextAnnotation: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tTextAnnotation__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_textFormat": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTextAnnotation";
            readonly xsdType: "xsd:string";
        };
        readonly text: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTextAnnotation";
            readonly xsdType: "xsd:string";
        };
    };
    readonly BPMN20__tThrowEvent__extensionElements: {};
    readonly BPMN20__tTimerEventDefinition__extensionElements: {};
    readonly BPMN20__tTimerEventDefinition: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tTimerEventDefinition__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly timeDate: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTimerEventDefinition";
            readonly xsdType: "// local type";
        };
        readonly timeDuration: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTimerEventDefinition";
            readonly xsdType: "// local type";
        };
        readonly timeCycle: {
            readonly type: "BPMN20__tExpression";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTimerEventDefinition";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tTransaction__extensionElements: {};
    readonly BPMN20__tTransaction: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tTransaction__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_triggeredByEvent": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "xsd:boolean";
        };
        readonly laneSet: {
            readonly type: "BPMN20__tLaneSet";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly flowElement: {
            readonly type: "BPMN20__tFlowElement";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly artifact: {
            readonly type: "BPMN20__tArtifact";
            readonly isArray: true;
            readonly fromType: "BPMN20__tSubProcess";
            readonly xsdType: "// local type";
        };
        readonly "@_method": {
            readonly type: "BPMN20__tTransactionMethod";
            readonly isArray: false;
            readonly fromType: "BPMN20__tTransaction";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMN20__tUserTask__extensionElements: {};
    readonly BPMN20__tUserTask: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "xsd:ID";
        };
        readonly documentation: {
            readonly type: "BPMN20__tDocumentation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "// local type";
        };
        readonly extensionElements: {
            readonly type: "BPMN20__tUserTask__extensionElements";
            readonly isArray: false;
            readonly fromType: "BPMN20__tBaseElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:string";
        };
        readonly auditing: {
            readonly type: "BPMN20__tAuditing";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly monitoring: {
            readonly type: "BPMN20__tMonitoring";
            readonly isArray: false;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "// local type";
        };
        readonly categoryValueRef: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowElement";
            readonly xsdType: "xsd:QName";
        };
        readonly incoming: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly outgoing: {
            readonly type: "string";
            readonly isArray: true;
            readonly fromType: "BPMN20__tFlowNode";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isForCompensation": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_startQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_completionQuantity": {
            readonly type: "integer";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:integer";
        };
        readonly "@_default": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "xsd:IDREF";
        };
        readonly ioSpecification: {
            readonly type: "BPMN20__tInputOutputSpecification";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly property: {
            readonly type: "BPMN20__tProperty";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataInputAssociation: {
            readonly type: "BPMN20__tDataInputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly dataOutputAssociation: {
            readonly type: "BPMN20__tDataOutputAssociation";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly resourceRole: {
            readonly type: "BPMN20__tResourceRole";
            readonly isArray: true;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly loopCharacteristics: {
            readonly type: "BPMN20__tLoopCharacteristics";
            readonly isArray: false;
            readonly fromType: "BPMN20__tActivity";
            readonly xsdType: "// local type";
        };
        readonly "@_implementation": {
            readonly type: "BPMN20__tImplementation";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "// local type";
        };
        readonly "@_description": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly "@_skippable": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:boolean";
        };
        readonly taskName: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly subject: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly content: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly priority: {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "xsd:string";
        };
        readonly rendering: {
            readonly type: "BPMN20__tRendering";
            readonly isArray: true;
            readonly fromType: "BPMN20__tUserTask";
            readonly xsdType: "// local type";
        };
    };
    readonly BPMNDI__BPMNDiagram: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:string";
        };
        readonly "@_documentation": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:string";
        };
        readonly "@_resolution": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:double";
        };
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Diagram";
            readonly xsdType: "xsd:ID";
        };
        readonly "bpmndi:BPMNPlane": {
            readonly type: "BPMNDI__BPMNPlane";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNDiagram";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
        readonly "bpmndi:BPMNLabelStyle": {
            readonly type: "BPMNDI__BPMNLabelStyle";
            readonly isArray: true;
            readonly fromType: "BPMNDI__BPMNDiagram";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
    };
    readonly BPMNDI__BPMNPlane__extension: {};
    readonly BPMNDI__BPMNPlane: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "BPMNDI__BPMNPlane__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:DiagramElement": {
            readonly type: "DI__DiagramElement";
            readonly isArray: true;
            readonly fromType: "DI__Plane";
            readonly xsdType: "type found from namespace with declaration name 'di'.";
        };
        readonly "@_bpmnElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNPlane";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMNDI__BPMNEdge__extension: {};
    readonly BPMNDI__BPMNEdge: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "BPMNDI__BPMNEdge__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "di:waypoint": {
            readonly type: "DC__Point";
            readonly isArray: true;
            readonly fromType: "DI__Edge";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_bpmnElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_sourceElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_targetElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNEdge";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_messageVisibleKind": {
            readonly type: "BPMNDI__MessageVisibleKind";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNEdge";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
        readonly "bpmndi:BPMNLabel": {
            readonly type: "BPMNDI__BPMNLabel";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNEdge";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
    };
    readonly BPMNDI__BPMNShape__extension: {};
    readonly BPMNDI__BPMNShape: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "BPMNDI__BPMNShape__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "dc:Bounds": {
            readonly type: "DC__Bounds";
            readonly isArray: false;
            readonly fromType: "DI__Shape";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_bpmnElement": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:QName";
        };
        readonly "@_isHorizontal": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isExpanded": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isMarkerVisible": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isMessageVisible": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_participantBandKind": {
            readonly type: "BPMNDI__ParticipantBandKind";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
        readonly "@_choreographyActivityShape": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "xsd:QName";
        };
        readonly "bpmndi:BPMNLabel": {
            readonly type: "BPMNDI__BPMNLabel";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNShape";
            readonly xsdType: "type found from namespace with declaration name 'bpmndi'.";
        };
    };
    readonly BPMNDI__BPMNLabel__extension: {};
    readonly BPMNDI__BPMNLabel: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "xsd:ID";
        };
        readonly "di:extension": {
            readonly type: "BPMNDI__BPMNLabel__extension";
            readonly isArray: false;
            readonly fromType: "DI__DiagramElement";
            readonly xsdType: "Anonumous type...";
        };
        readonly "dc:Bounds": {
            readonly type: "DC__Bounds";
            readonly isArray: false;
            readonly fromType: "DI__Label";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
        readonly "@_labelStyle": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNLabel";
            readonly xsdType: "xsd:QName";
        };
    };
    readonly BPMNDI__BPMNLabelStyle: {
        readonly "@_id": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DI__Style";
            readonly xsdType: "xsd:ID";
        };
        readonly "dc:Font": {
            readonly type: "DC__Font";
            readonly isArray: false;
            readonly fromType: "BPMNDI__BPMNLabelStyle";
            readonly xsdType: "type found from namespace with declaration name 'dc'.";
        };
    };
    readonly DC__Font: {
        readonly "@_name": {
            readonly type: "string";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:string";
        };
        readonly "@_size": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:double";
        };
        readonly "@_isBold": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isItalic": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isUnderline": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:boolean";
        };
        readonly "@_isStrikeThrough": {
            readonly type: "boolean";
            readonly isArray: false;
            readonly fromType: "DC__Font";
            readonly xsdType: "xsd:boolean";
        };
    };
    readonly DC__Point: {
        readonly "@_x": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Point";
            readonly xsdType: "xsd:double";
        };
        readonly "@_y": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Point";
            readonly xsdType: "xsd:double";
        };
    };
    readonly DC__Bounds: {
        readonly "@_x": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_y": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_width": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
        readonly "@_height": {
            readonly type: "float";
            readonly isArray: false;
            readonly fromType: "DC__Bounds";
            readonly xsdType: "xsd:double";
        };
    };
    readonly DI__DiagramElement__extension: {};
    readonly DI__Node__extension: {};
    readonly DI__Edge__extension: {};
    readonly DI__LabeledEdge__extension: {};
    readonly DI__Shape__extension: {};
    readonly DI__LabeledShape__extension: {};
    readonly DI__Label__extension: {};
    readonly DI__Plane__extension: {};
}>;
//# sourceMappingURL=bpmnIdRandomizer.d.ts.map