import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FlightService } from "./flight.service";
import { FlightControllerBase } from "./base/flight.controller.base";

@swagger.ApiTags("flights")
@common.Controller("flights")
export class FlightController extends FlightControllerBase {
  constructor(protected readonly service: FlightService) {
    super(service);
  }
}
