import { SortOrder } from "../../util/SortOrder";

export type MaintenanceRecordOrderByInput = {
  createdAt?: SortOrder;
  flightId?: SortOrder;
  id?: SortOrder;
  maintainer?: SortOrder;
  updatedAt?: SortOrder;
};
