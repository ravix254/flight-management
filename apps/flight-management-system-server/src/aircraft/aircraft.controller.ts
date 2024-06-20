import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AircraftService } from "./aircraft.service";
import { AircraftControllerBase } from "./base/aircraft.controller.base";

@swagger.ApiTags("aircraft")
@common.Controller("aircraft")
export class AircraftController extends AircraftControllerBase {
  constructor(protected readonly service: AircraftService) {
    super(service);
  }
}
