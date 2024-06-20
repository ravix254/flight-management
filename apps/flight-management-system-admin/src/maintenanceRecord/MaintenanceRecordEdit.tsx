import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FlightTitle } from "../flight/FlightTitle";

export const MaintenanceRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="flight.id" reference="Flight" label="flight id">
          <SelectInput optionText={FlightTitle} />
        </ReferenceInput>
        <TextInput label="maintainer" source="maintainer" />
      </SimpleForm>
    </Edit>
  );
};
