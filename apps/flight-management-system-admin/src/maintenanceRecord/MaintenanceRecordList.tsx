import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { FLIGHT_TITLE_FIELD } from "../flight/FlightTitle";

export const MaintenanceRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MaintenanceRecords"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="flight id" source="flight.id" reference="Flight">
          <TextField source={FLIGHT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="maintainer" source="maintainer" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
