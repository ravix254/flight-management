import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const PilotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="pilot birthday" source="pilotBirthday" />
        <TextInput label="pilot name" source="pilotName" />
      </SimpleForm>
    </Edit>
  );
};
