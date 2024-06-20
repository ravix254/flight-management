import * as graphql from "@nestjs/graphql";
import { PilotResolverBase } from "./base/pilot.resolver.base";
import { Pilot } from "./base/Pilot";
import { PilotService } from "./pilot.service";

@graphql.Resolver(() => Pilot)
export class PilotResolver extends PilotResolverBase {
  constructor(protected readonly service: PilotService) {
    super(service);
  }
}
