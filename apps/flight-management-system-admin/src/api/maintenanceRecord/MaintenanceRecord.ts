import { Flight } from "../flight/Flight";

export type MaintenanceRecord = {
  createdAt: Date;
  flight?: Flight | null;
  id: string;
  maintainer: string | null;
  updatedAt: Date;
};
