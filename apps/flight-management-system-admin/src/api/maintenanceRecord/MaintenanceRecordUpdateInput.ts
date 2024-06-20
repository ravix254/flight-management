import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";

export type MaintenanceRecordUpdateInput = {
  flight?: FlightWhereUniqueInput | null;
  maintainer?: string | null;
};
