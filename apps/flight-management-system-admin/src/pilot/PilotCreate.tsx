import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const PilotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="pilot birthday" source="pilotBirthday" />
        <TextInput label="pilot name" source="pilotName" />
      </SimpleForm>
    </Create>
  );
};
