import { Module } from "@nestjs/common";
import { AircraftModuleBase } from "./base/aircraft.module.base";
import { AircraftService } from "./aircraft.service";
import { AircraftController } from "./aircraft.controller";
import { AircraftResolver } from "./aircraft.resolver";

@Module({
  imports: [AircraftModuleBase],
  controllers: [AircraftController],
  providers: [AircraftService, AircraftResolver],
  exports: [AircraftService],
})
export class AircraftModule {}
