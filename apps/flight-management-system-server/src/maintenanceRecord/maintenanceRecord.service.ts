import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceRecordServiceBase } from "./base/maintenanceRecord.service.base";

@Injectable()
export class MaintenanceRecordService extends MaintenanceRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
