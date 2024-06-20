import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MaintenanceRecordWhereInput = {
  flight?: FlightWhereUniqueInput;
  id?: StringFilter;
  maintainer?: StringNullableFilter;
};
