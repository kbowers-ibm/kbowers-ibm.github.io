import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Label } from "@patternfly/react-core/dist/js/components/Label";
import { Popover, PopoverPosition } from "@patternfly/react-core/dist/js/components/Popover";
import { useMemo } from "react";
import { BPMN_LATEST_VERSION } from "@kie-tools/bpmn-marshaller";
const latestChangelogHref = `https://www.omg.org/spec/BPMN/2.0.2/PDF/changebar`;
export function BpmnVersionLabel(props) {
    const label = useMemo(() => (_jsx(Label, { style: { cursor: "pointer", position: "absolute", bottom: "8px", left: "calc(50% - 34px)", zIndex: 100 }, children: `BPMN ${BPMN_LATEST_VERSION}` })), []);
    if (props.version === BPMN_LATEST_VERSION) {
        return _jsx(_Fragment, { children: label });
    }
    return (_jsx(Popover, { className: "kie-bpmn-editor--version-popover", "aria-label": "BPMN version popover", position: PopoverPosition.top, headerContent: _jsx("div", { children: "Version upgraded!" }), bodyContent: _jsxs("div", { children: ["This BPMN was originally imported as BPMN ", props.version, ", but was converted to BPMN ", BPMN_LATEST_VERSION, " to enable new features.", _jsxs("a", { href: latestChangelogHref, target: "_blank", children: ["\u00A0", `See what's new on BPMN ${BPMN_LATEST_VERSION}`, "."] })] }), children: label }));
}
//# sourceMappingURL=BpmnVersionLabel.js.map