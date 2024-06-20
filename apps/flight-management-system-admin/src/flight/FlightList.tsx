import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const FlightList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Flights"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
