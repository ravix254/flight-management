import { FlightWhereUniqueInput } from "../flight/FlightWhereUniqueInput";

export type MaintenanceRecordCreateInput = {
  flight?: FlightWhereUniqueInput | null;
  maintainer?: string | null;
};
