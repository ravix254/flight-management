import { Flight as TFlight } from "../api/flight/Flight";

export const FLIGHT_TITLE_FIELD = "arrivalAirport";

export const FlightTitle = (record: TFlight): string => {
  return record.arrivalAirport?.toString() || String(record.id);
};
