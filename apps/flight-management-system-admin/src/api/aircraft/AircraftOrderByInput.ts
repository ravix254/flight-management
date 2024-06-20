import { SortOrder } from "../../util/SortOrder";

export type AircraftOrderByInput = {
  aircraftName?: SortOrder;
  aircraftNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
