import { AircraftWhereUniqueInput } from "./AircraftWhereUniqueInput";
import { AircraftUpdateInput } from "./AircraftUpdateInput";

export type UpdateAircraftArgs = {
  where: AircraftWhereUniqueInput;
  data: AircraftUpdateInput;
};
