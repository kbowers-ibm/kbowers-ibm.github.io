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

import { BPMN20__tEndEvent } from "@kie-tools/bpmn-marshaller/dist/schemas/bpmn-2_0/ts-gen/types";
import * as React from "react";
import { Normalized } from "../../normalization/normalize";
import { NameDocumentationAndId } from "../nameDocumentationAndId/NameDocumentationAndId";
import { InputOnlyAssociationFormSection } from "../assignments/AssignmentsFormSection";
import { EventDefinitionProperties } from "../eventDefinition/EventDefinitionProperties";
import { EndEventIcon, EventDefinitionIcon } from "../../diagram/nodes/NodeIcons";
import { PropertiesPanelHeaderFormSection } from "./_PropertiesPanelHeaderFormSection";
import { Divider } from "@patternfly/react-core/dist/js/components/Divider";
import { NODE_COLORS } from "../../diagram/nodes/NodeSvgs";

export function EndEventProperties({
  endEvent,
}: {
  endEvent: Normalized<BPMN20__tEndEvent> & { __$$element: "endEvent" };
}) {
  const foregroundColor = NODE_COLORS.endEvent.foreground;
  const backgroundColor = NODE_COLORS.endEvent.background;

  return (
    <>
      <PropertiesPanelHeaderFormSection
        title={endEvent["@_name"] || "End event"}
        icon={
          <EventDefinitionIcon
            variant={endEvent.eventDefinition?.[0]?.__$$element}
            filled={true}
            fill={backgroundColor}
            stroke={foregroundColor}
          />
        }
      >
        <NameDocumentationAndId element={endEvent} />

        <Divider inset={{ default: "insetXs" }} />

        <EventDefinitionProperties event={endEvent} />
      </PropertiesPanelHeaderFormSection>

      <InputOnlyAssociationFormSection element={endEvent} />
    </>
  );
}