export const BPMN_EDITOR_DIAGRAM_CLIPBOARD_MIME_TYPE = "application/json+kie-bpmn-editor--diagram";
export function buildClipboardFromDiagram(xyFlowState, bpmnEditorState) {
    return undefined;
}
export function getClipboard(text, mimeType) {
    let potentialClipboard;
    try {
        potentialClipboard = JSON.parse(text);
    }
    catch (e) {
        console.debug("BPMN DIAGRAM: Ignoring pasted content. Not a valid JSON.");
        return undefined;
    }
    if (!potentialClipboard || potentialClipboard.mimeType !== mimeType) {
        console.debug("BPMN DIAGRAM: Ignoring pasted content. MIME type doesn't match.");
        return undefined;
    }
    return potentialClipboard;
}
//# sourceMappingURL=Clipboard.js.map