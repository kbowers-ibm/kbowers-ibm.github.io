/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import type { Meta, StoryObj } from "@storybook/react";
import { getMarshaller } from "@kie-tools/bpmn-marshaller";
import { ns as bpmn20ns } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/meta";
import { generateUuid } from "@kie-tools/boxed-expression-component/dist/api";
import { BpmnEditorWrapper, StorybookBpmnEditorProps } from "../../bpmnEditorStoriesWrapper";
import { BpmnEditor, BpmnEditorProps } from "../../../src/BpmnEditor";

export const generateEmptyBpmn20 = () => `<?xml version="1.0" encoding="UTF-8"?>
<definitions
  xmlns="${bpmn20ns.get("")}"
  targetNamespace="https://kie.apache.org/bpmn/${generateUuid()}"
  expressionLanguage=""
  id="${generateUuid()}">
</definitions>`;

const meta: Meta<BpmnEditorProps> = {
  title: "Misc/Empty",
  component: BpmnEditor,
  includeStories: /^[A-Z]/,
};

export default meta;
type Story = StoryObj<StorybookBpmnEditorProps>;

const marshaller = getMarshaller(generateEmptyBpmn20(), { upgradeTo: "latest" });
const model = marshaller.parser.parse();

export const Empty: Story = {
  render: (args) => BpmnEditorWrapper(),
  args: {
    model: model,
    originalVersion: "2.0",
    externalContextDescription: "",
    externalContextName: "Storybook - BPMN Editor",
    issueTrackerHref: "",
    xml: marshaller.builder.build(model),
  },
};