import { Pilot as TPilot } from "../api/pilot/Pilot";

export const PILOT_TITLE_FIELD = "pilotName";

export const PilotTitle = (record: TPilot): string => {
  return record.pilotName?.toString() || String(record.id);
};
