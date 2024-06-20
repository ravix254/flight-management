import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MaintenanceRecordListRelationFilter } from "../maintenanceRecord/MaintenanceRecordListRelationFilter";

export type FlightWhereInput = {
  approvalComments?: StringNullableFilter;
  approvalStatus?: BooleanNullableFilter;
  approveStatus?: "agreed" | "rejected";
  arrivalAirport?: StringNullableFilter;
  arrivalTime?: DateTimeNullableFilter;
  associatedPilot?: StringNullableFilter;
  departureAirport?: StringNullableFilter;
  departureTime?: DateTimeNullableFilter;
  flightNumber?: StringNullableFilter;
  id?: StringFilter;
  maintenanceRecords?: MaintenanceRecordListRelationFilter;
  remark?: StringNullableFilter;
  status?: "Option1";
};
