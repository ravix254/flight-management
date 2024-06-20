import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FLIGHT_TITLE_FIELD } from "./FlightTitle";

export const FlightShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="approvalComments" source="approvalComments" />
        <BooleanField label="approvalStatus" source="approvalStatus" />
        <TextField label="approve status" source="approveStatus" />
        <TextField label="arrivalAirport" source="arrivalAirport" />
        <TextField label="arrivalTime" source="arrivalTime" />
        <TextField label="associatedPilot" source="associatedPilot" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="departureAirport" source="departureAirport" />
        <TextField label="departureTime" source="departureTime" />
        <TextField label="flightNumber" source="flightNumber" />
        <TextField label="ID" source="id" />
        <TextField label="remark" source="remark" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MaintenanceRecord"
          target="flightId"
          label="MaintenanceRecords"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="flight id"
              source="flight.id"
              reference="Flight"
            >
              <TextField source={FLIGHT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="maintainer" source="maintainer" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
