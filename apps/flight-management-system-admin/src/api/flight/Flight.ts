import { MaintenanceRecord } from "../maintenanceRecord/MaintenanceRecord";

export type Flight = {
  approvalComments: string | null;
  approvalStatus: boolean | null;
  approveStatus?: "agreed" | "rejected" | null;
  arrivalAirport: string | null;
  arrivalTime: Date | null;
  associatedPilot: string | null;
  createdAt: Date;
  departureAirport: string | null;
  departureTime: Date | null;
  flightNumber: string | null;
  id: string;
  maintenanceRecords?: Array<MaintenanceRecord>;
  remark: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
