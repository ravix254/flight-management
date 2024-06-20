import { SortOrder } from "../../util/SortOrder";

export type FlightOrderByInput = {
  approvalComments?: SortOrder;
  approvalStatus?: SortOrder;
  approveStatus?: SortOrder;
  arrivalAirport?: SortOrder;
  arrivalTime?: SortOrder;
  associatedPilot?: SortOrder;
  createdAt?: SortOrder;
  departureAirport?: SortOrder;
  departureTime?: SortOrder;
  flightNumber?: SortOrder;
  id?: SortOrder;
  remark?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
