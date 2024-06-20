import { AircraftWhereInput } from "./AircraftWhereInput";
import { AircraftOrderByInput } from "./AircraftOrderByInput";

export type AircraftFindManyArgs = {
  where?: AircraftWhereInput;
  orderBy?: Array<AircraftOrderByInput>;
  skip?: number;
  take?: number;
};
