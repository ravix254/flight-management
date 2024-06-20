import { MaintenanceRecordUpdateManyWithoutFlightsInput } from "./MaintenanceRecordUpdateManyWithoutFlightsInput";

export type FlightUpdateInput = {
  approvalComments?: string | null;
  approvalStatus?: boolean | null;
  approveStatus?: "agreed" | "rejected" | null;
  arrivalAirport?: string | null;
  arrivalTime?: Date | null;
  associatedPilot?: string | null;
  departureAirport?: string | null;
  departureTime?: Date | null;
  flightNumber?: string | null;
  maintenanceRecords?: MaintenanceRecordUpdateManyWithoutFlightsInput;
  remark?: string | null;
  status?: "Option1" | null;
};
