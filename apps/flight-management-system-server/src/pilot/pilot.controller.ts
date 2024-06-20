import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PilotService } from "./pilot.service";
import { PilotControllerBase } from "./base/pilot.controller.base";

@swagger.ApiTags("pilots")
@common.Controller("pilots")
export class PilotController extends PilotControllerBase {
  constructor(protected readonly service: PilotService) {
    super(service);
  }
}
