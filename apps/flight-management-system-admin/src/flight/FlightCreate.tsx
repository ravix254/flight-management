import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MaintenanceRecordTitle } from "../maintenanceRecord/MaintenanceRecordTitle";

export const FlightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="approvalComments"
          multiline
          source="approvalComments"
        />
        <BooleanInput label="approvalStatus" source="approvalStatus" />
        <SelectInput
          source="approveStatus"
          label="approve status"
          choices={[
            { label: "0", value: "agreed" },
            { label: "1", value: "rejected" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="arrivalAirport" source="arrivalAirport" />
        <DateTimeInput label="arrivalTime" source="arrivalTime" />
        <TextInput label="associatedPilot" source="associatedPilot" />
        <TextInput label="departureAirport" source="departureAirport" />
        <DateTimeInput label="departureTime" source="departureTime" />
        <TextInput label="flightNumber" source="flightNumber" />
        <ReferenceArrayInput
          source="maintenanceRecords"
          reference="MaintenanceRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceRecordTitle} />
        </ReferenceArrayInput>
        <TextInput label="remark" source="remark" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
