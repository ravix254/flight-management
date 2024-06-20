import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AircraftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="aircraft_name" source="aircraftName" />
        <TextInput label="aircraft Number" source="aircraftNumber" />
      </SimpleForm>
    </Create>
  );
};
