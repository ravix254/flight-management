import * as graphql from "@nestjs/graphql";
import { MaintenanceRecordResolverBase } from "./base/maintenanceRecord.resolver.base";
import { MaintenanceRecord } from "./base/MaintenanceRecord";
import { MaintenanceRecordService } from "./maintenanceRecord.service";

@graphql.Resolver(() => MaintenanceRecord)
export class MaintenanceRecordResolver extends MaintenanceRecordResolverBase {
  constructor(protected readonly service: MaintenanceRecordService) {
    super(service);
  }
}
