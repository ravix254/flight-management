import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PilotWhereInput = {
  id?: StringFilter;
  pilotBirthday?: DateTimeNullableFilter;
  pilotName?: StringNullableFilter;
};
