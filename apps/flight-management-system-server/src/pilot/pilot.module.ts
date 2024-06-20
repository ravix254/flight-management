import { Module } from "@nestjs/common";
import { PilotModuleBase } from "./base/pilot.module.base";
import { PilotService } from "./pilot.service";
import { PilotController } from "./pilot.controller";
import { PilotResolver } from "./pilot.resolver";

@Module({
  imports: [PilotModuleBase],
  controllers: [PilotController],
  providers: [PilotService, PilotResolver],
  exports: [PilotService],
})
export class PilotModule {}
