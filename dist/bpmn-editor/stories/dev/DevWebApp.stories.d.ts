import type { Meta, StoryObj } from "@storybook/react";
import "@patternfly/react-core/dist/styles/base.css";
import { BpmnEditorProps } from "../../src/BpmnEditor";
declare function DevWebApp(args: BpmnEditorProps): JSX.Element;
declare const meta: Meta<typeof DevWebApp>;
export default meta;
type Story = StoryObj<typeof DevWebApp>;
export declare const WebApp: Story;
//# sourceMappingURL=DevWebApp.stories.d.ts.map