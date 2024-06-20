import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AircraftWhereInput = {
  aircraftName?: StringNullableFilter;
  aircraftNumber?: StringNullableFilter;
  id?: StringFilter;
};
