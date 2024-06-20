import { PilotWhereInput } from "./PilotWhereInput";
import { PilotOrderByInput } from "./PilotOrderByInput";

export type PilotFindManyArgs = {
  where?: PilotWhereInput;
  orderBy?: Array<PilotOrderByInput>;
  skip?: number;
  take?: number;
};
