import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AircraftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="aircraft_name" source="aircraftName" />
        <TextInput label="aircraft Number" source="aircraftNumber" />
      </SimpleForm>
    </Edit>
  );
};
