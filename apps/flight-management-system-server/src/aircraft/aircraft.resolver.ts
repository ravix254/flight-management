import * as graphql from "@nestjs/graphql";
import { AircraftResolverBase } from "./base/aircraft.resolver.base";
import { Aircraft } from "./base/Aircraft";
import { AircraftService } from "./aircraft.service";

@graphql.Resolver(() => Aircraft)
export class AircraftResolver extends AircraftResolverBase {
  constructor(protected readonly service: AircraftService) {
    super(service);
  }
}
