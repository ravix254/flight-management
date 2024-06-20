import { Module } from "@nestjs/common";
import { MaintenanceRecordModuleBase } from "./base/maintenanceRecord.module.base";
import { MaintenanceRecordService } from "./maintenanceRecord.service";
import { MaintenanceRecordController } from "./maintenanceRecord.controller";
import { MaintenanceRecordResolver } from "./maintenanceRecord.resolver";

@Module({
  imports: [MaintenanceRecordModuleBase],
  controllers: [MaintenanceRecordController],
  providers: [MaintenanceRecordService, MaintenanceRecordResolver],
  exports: [MaintenanceRecordService],
})
export class MaintenanceRecordModule {}
