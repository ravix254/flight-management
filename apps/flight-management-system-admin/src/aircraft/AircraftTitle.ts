import { Aircraft as TAircraft } from "../api/aircraft/Aircraft";

export const AIRCRAFT_TITLE_FIELD = "aircraftName";

export const AircraftTitle = (record: TAircraft): string => {
  return record.aircraftName?.toString() || String(record.id);
};
