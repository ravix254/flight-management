import { Module } from "@nestjs/common";
import { FlightModuleBase } from "./base/flight.module.base";
import { FlightService } from "./flight.service";
import { FlightController } from "./flight.controller";
import { FlightResolver } from "./flight.resolver";

@Module({
  imports: [FlightModuleBase],
  controllers: [FlightController],
  providers: [FlightService, FlightResolver],
  exports: [FlightService],
})
export class FlightModule {}
