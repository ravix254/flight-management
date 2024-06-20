import { MaintenanceRecordWhereInput } from "./MaintenanceRecordWhereInput";
import { MaintenanceRecordOrderByInput } from "./MaintenanceRecordOrderByInput";

export type MaintenanceRecordFindManyArgs = {
  where?: MaintenanceRecordWhereInput;
  orderBy?: Array<MaintenanceRecordOrderByInput>;
  skip?: number;
  take?: number;
};
