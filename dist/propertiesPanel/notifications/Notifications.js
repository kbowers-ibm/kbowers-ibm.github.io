import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useBpmnEditorStoreApi } from "../../store/StoreContext";
import { Button, ButtonVariant } from "@patternfly/react-core/dist/js/components/Button/Button";
import { Modal, ModalVariant } from "@patternfly/react-core/dist/js/components/Modal";
import { Grid, GridItem } from "@patternfly/react-core/dist/js/layouts/Grid";
import { PlusCircleIcon } from "@patternfly/react-icons/dist/js/icons/plus-circle-icon";
import { TimesIcon } from "@patternfly/react-icons/dist/js/icons/times-icon";
import { Bullseye } from "@patternfly/react-core/dist/js/layouts/Bullseye";
import { EmptyState, EmptyStateBody } from "@patternfly/react-core/dist/js/components/EmptyState";
import { Title } from "@patternfly/react-core/dist/js/components/Title";
import "./Notifications.css";
import { visitFlowElementsAndArtifacts } from "../../mutations/_elementVisitor";
import { setBpmn20Drools10MetaData } from "@kie-tools/bpmn-marshaller/dist/drools-extension-metaData";
import { addOrGetProcessAndDiagramElements } from "../../mutations/addOrGetProcessAndDiagramElements";
import { TextArea } from "@patternfly/react-core/dist/js/components/TextArea/TextArea";
import { FormSelect } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelect";
import { FormSelectOption } from "@patternfly/react-core/dist/js/components/FormSelect/FormSelectOption";
import { generateUuid } from "@kie-tools/xyflow-react-kie-diagram/dist/uuid/uuid";
import { Form } from "@patternfly/react-core/dist/js/components/Form/Form";
export function Notifications({ isOpen, onClose, element, }) {
    const [notifications, setNotifications] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(undefined);
    const addNotification = () => {
        setNotifications([
            ...notifications,
            {
                from: "",
                tousers: "",
                togroups: "",
                toemails: "",
                replyTo: "",
                subject: "",
                body: "",
                type: "NotStartedNotify",
                expiresAt: "",
            },
        ]);
    };
    const typeOptions = [
        { value: "NotStartedNotify", label: "Not Started" },
        { value: "NotCompletedNotify", label: "Not Completed" },
    ];
    const removeNotification = (index) => {
        setNotifications(notifications.filter((_, i) => i !== index));
    };
    const handleInputChange = (index, field, value) => {
        setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications];
            updatedNotifications[index] = { ...updatedNotifications[index], [field]: value };
            return updatedNotifications;
        });
    };
    useEffect(() => {
        var _a, _b;
        if (isOpen && element) {
            const extractedNotifications = (_b = (_a = element === null || element === void 0 ? void 0 : element.dataInputAssociation) === null || _a === void 0 ? void 0 : _a.filter((association) => { var _a; return (_a = association.targetRef) === null || _a === void 0 ? void 0 : _a.__$$text.includes("Notify"); })) === null || _b === void 0 ? void 0 : _b.map((association) => {
                var _a;
                const assignment = (_a = association.assignment) === null || _a === void 0 ? void 0 : _a[0];
                if (assignment) {
                    const notificationText = assignment.from.__$$text || "";
                    const fromMatches = [...notificationText.matchAll(/from:([^ |]*)/g)];
                    const bodyMatches = [...notificationText.matchAll(/body:([^ @\]]*)/g)];
                    const subjectMatches = [...notificationText.matchAll(/subject:([^ |]*)/g)];
                    const toEmailsMatches = [...notificationText.matchAll(/toemails:([^ |]*)/g)];
                    const replyToMatches = [...notificationText.matchAll(/replyTo:([^ |]*)/g)];
                    const usersMatches = [...notificationText.matchAll(/tousers:([^ |]*)/g)];
                    const groupsMatches = [...notificationText.matchAll(/togroups:([^ |]*)/g)];
                    let expiresAtMatches = [...notificationText.matchAll(/\]@\[([^ |]*)/g)];
                    if (expiresAtMatches.length === 0) {
                        expiresAtMatches = [...notificationText.matchAll(/@([^@]*)$/g)];
                    }
                    const from = fromMatches.map((match) => match[1]);
                    const tousers = usersMatches.map((match) => match[1]);
                    const togroups = groupsMatches.map((match) => match[1]);
                    const toemails = toEmailsMatches.map((match) => match[1]);
                    const replyTo = replyToMatches.map((match) => match[1]);
                    const subject = subjectMatches.map((match) => match[1]);
                    const body = bodyMatches.map((match) => match[1]);
                    const expiresAt = expiresAtMatches.map((match) => match[1]);
                    const notifications = [];
                    for (let i = 0; i < from.length; i++) {
                        notifications.push({
                            from: from[i] || "",
                            tousers: tousers[i] || "",
                            togroups: togroups[i] || "",
                            toemails: toemails[i] || "",
                            replyTo: replyTo[i] || "",
                            subject: subject[i] || "",
                            body: body[i] || "",
                            expiresAt: expiresAt[i] || "",
                            type: association.targetRef.__$$text.includes("NotStartedNotify")
                                ? "NotStartedNotify"
                                : "NotCompletedNotify",
                        });
                    }
                    return notifications;
                }
            }).flat().filter((item) => item !== null);
            setNotifications(extractedNotifications || []);
        }
    }, [isOpen, element]);
    const bpmnEditorStoreApi = useBpmnEditorStoreApi();
    const handleSubmit = () => {
        bpmnEditorStoreApi.setState((s) => {
            const { process } = addOrGetProcessAndDiagramElements({
                definitions: s.bpmn.model.definitions,
            });
            visitFlowElementsAndArtifacts(process, ({ element: e }) => {
                if (e["@_id"] === (element === null || element === void 0 ? void 0 : element["@_id"]) && e.__$$element === element.__$$element) {
                    setBpmn20Drools10MetaData(e, "elementname", e["@_name"] || "");
                    e.ioSpecification = {
                        "@_id": generateUuid(),
                        inputSet: [{ "@_id": generateUuid(), dataInputRefs: [] }],
                        outputSet: [],
                        dataInput: [],
                    };
                    e.ioSpecification.dataInput = [];
                    e.dataInputAssociation = [];
                    notifications.forEach((notification) => {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
                        let dataInput = (_b = (_a = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _a === void 0 ? void 0 : _a.dataInput) === null || _b === void 0 ? void 0 : _b.find((input) => input["@_name"] === notification.type);
                        if (!dataInput) {
                            dataInput = {
                                "@_id": `${e["@_id"]}_${notification.type}InputX`,
                                "@_drools:dtype": "Object",
                                "@_itemSubjectRef": `_${e["@_id"]}_${notification.type}InputX`,
                                "@_name": notification.type,
                            };
                            (_d = (_c = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _c === void 0 ? void 0 : _c.dataInput) === null || _d === void 0 ? void 0 : _d.push(dataInput);
                        }
                        if (!((_g = (_f = (_e = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _e === void 0 ? void 0 : _e.inputSet[0]) === null || _f === void 0 ? void 0 : _f.dataInputRefs) === null || _g === void 0 ? void 0 : _g.some((ref) => ref.__$$text === dataInput["@_id"]))) {
                            (_k = (_j = (_h = e === null || e === void 0 ? void 0 : e.ioSpecification) === null || _h === void 0 ? void 0 : _h.inputSet[0]) === null || _j === void 0 ? void 0 : _j.dataInputRefs) === null || _k === void 0 ? void 0 : _k.push({ __$$text: dataInput["@_id"] });
                        }
                        let dataInputAssociation = (_l = e.dataInputAssociation) === null || _l === void 0 ? void 0 : _l.find((association) => association.targetRef.__$$text === dataInput["@_id"]);
                        if (!dataInputAssociation) {
                            dataInputAssociation = {
                                "@_id": `${e["@_id"]}_dataInputAssociation_${notification.type}`,
                                targetRef: { __$$text: dataInput["@_id"] },
                                assignment: [],
                            };
                            (_m = e.dataInputAssociation) === null || _m === void 0 ? void 0 : _m.push(dataInputAssociation);
                        }
                        const existingAssignment = (_o = dataInputAssociation === null || dataInputAssociation === void 0 ? void 0 : dataInputAssociation.assignment) === null || _o === void 0 ? void 0 : _o.find((assignment) => assignment["@_id"] === `${e["@_id"]}_assignment_${notification.type}`);
                        const newEntry = `from:${notification.from} tousers:${notification.tousers} togroups:${notification.togroups} toemails:${notification.toemails} replyTo:${notification.replyTo} subject:${notification.subject} body:${notification.body}@${notification.expiresAt}`;
                        if (existingAssignment) {
                            const existingValues = new Set((_q = (_p = existingAssignment === null || existingAssignment === void 0 ? void 0 : existingAssignment.from) === null || _p === void 0 ? void 0 : _p.__$$text) === null || _q === void 0 ? void 0 : _q.split(" "));
                            const newValues = newEntry.split(" ");
                            const uniqueValues = [...existingValues, ...newValues].join(" ");
                            existingAssignment.from.__$$text = uniqueValues;
                        }
                        else {
                            (_r = dataInputAssociation === null || dataInputAssociation === void 0 ? void 0 : dataInputAssociation.assignment) === null || _r === void 0 ? void 0 : _r.push({
                                "@_id": `${e["@_id"]}_assignment_${notification.type}`,
                                from: {
                                    "@_id": `${e["@_id"]}`,
                                    __$$text: newEntry,
                                },
                                to: { "@_id": dataInput["@_id"], __$$text: dataInput["@_id"] },
                            });
                        }
                    });
                }
            });
        });
    };
    const entryStyle = {
        padding: "4px",
        margin: "8px",
        width: "calc(100% - 2 * 4px - 2 * 8px)",
    };
    return (_jsx(Modal, { className: "kie-bpmn-editor--notifications--modal", "aria-labelledby": "Notifications", title: "Notifications", variant: ModalVariant.large, isOpen: isOpen, onClose: onClose, children: notifications.length > 0 ? (_jsxs(Form, { children: [_jsxs(Grid, { md: 12, style: { padding: "0 8px" }, children: [_jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Type" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Expires at" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "From" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "To:user(s)" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "To:group(s)" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "To:email(s)" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Reply to" }) }) }), _jsx(GridItem, { span: 1, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Subject" }) }) }), _jsx(GridItem, { span: 2, children: _jsx("div", { style: entryStyle, children: _jsx("b", { children: "Body" }) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: _jsx(Button, { variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: addNotification, children: _jsx(PlusCircleIcon, { color: "var(--pf-c-button--m-primary--BackgroundColor)" }) }) })] }), notifications.map((entry, i) => (_jsx("div", { style: { padding: "0 8px" }, children: _jsxs(Grid, { md: 6, className: "kie-bpmn-editor--properties-panel--notification-entry", onMouseEnter: () => setHoveredIndex(i), onMouseLeave: () => setHoveredIndex(undefined), children: [_jsx(GridItem, { span: 2, children: _jsx(FormSelect, { "aria-label": "type", type: "text", value: entry.type, onChange: (e) => handleInputChange(i, "type", e), style: entryStyle, rows: 1, children: typeOptions.map((option) => (_jsx(FormSelectOption, { label: option.label, value: option.value }, option.label))) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "expires at", style: entryStyle, type: "text", placeholder: "Expires at...", value: entry.expiresAt, onChange: (e) => handleInputChange(i, "expiresAt", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "from", style: entryStyle, type: "text", placeholder: "From...", value: entry.from, onChange: (e) => handleInputChange(i, "from", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "to users", style: entryStyle, type: "text", placeholder: "To Users...", value: entry.tousers, onChange: (e) => handleInputChange(i, "tousers", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "to groups", style: entryStyle, type: "text", placeholder: "To Groups...", value: entry.togroups, onChange: (e) => handleInputChange(i, "togroups", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "to emails", style: entryStyle, type: "text", placeholder: "To Emails...", value: entry.toemails, onChange: (e) => handleInputChange(i, "toemails", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "reply to", style: entryStyle, type: "text", placeholder: "Reply to...", value: entry.replyTo, onChange: (e) => handleInputChange(i, "replyTo", e) }) }), _jsx(GridItem, { span: 1, children: _jsx(TextArea, { "aria-label": "subject", style: entryStyle, type: "text", placeholder: "Subject...", value: entry.subject, onChange: (e) => handleInputChange(i, "subject", e) }) }), _jsx(GridItem, { span: 2, children: _jsx(TextArea, { "aria-label": "body", style: entryStyle, type: "text", placeholder: "Body...", value: entry.body, onChange: (e) => handleInputChange(i, "body", e) }) }), _jsx(GridItem, { span: 1, style: { textAlign: "right" }, children: hoveredIndex === i && (_jsx(Button, { tabIndex: 9999, variant: ButtonVariant.plain, style: { paddingLeft: 0 }, onClick: () => removeNotification(i), children: _jsx(TimesIcon, {}) })) })] }) }, i))), _jsx(Button, { onClick: handleSubmit, className: "kie-bpmn-editor--properties-panel--notification-submit-save-button", children: "Save" })] })) : (_jsx("div", { className: "kie-bpmn-editor--notifications--empty-state", children: _jsx(Bullseye, { children: _jsxs(EmptyState, { children: [_jsx(Title, { headingLevel: "h4", children: "No notifications yet" }), _jsx(EmptyStateBody, { children: "This represents the empty state for notifications. You can add notifications to get started." }), _jsx(Button, { variant: "primary", onClick: addNotification, children: "Add notification" })] }) }) })) }));
}
//# sourceMappingURL=Notifications.js.map