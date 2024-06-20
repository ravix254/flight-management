import { SortOrder } from "../../util/SortOrder";

export type PilotOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  pilotBirthday?: SortOrder;
  pilotName?: SortOrder;
  updatedAt?: SortOrder;
};
