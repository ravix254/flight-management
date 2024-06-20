import { MaintenanceRecord as TMaintenanceRecord } from "../api/maintenanceRecord/MaintenanceRecord";

export const MAINTENANCERECORD_TITLE_FIELD = "maintainer";

export const MaintenanceRecordTitle = (record: TMaintenanceRecord): string => {
  return record.maintainer?.toString() || String(record.id);
};
