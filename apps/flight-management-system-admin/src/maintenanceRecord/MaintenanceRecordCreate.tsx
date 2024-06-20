import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FlightTitle } from "../flight/FlightTitle";

export const MaintenanceRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="flight.id" reference="Flight" label="flight id">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
        <TextInput label="maintainer" source="maintainer" />
      </SimpleForm>
    </Create>
  );
};
