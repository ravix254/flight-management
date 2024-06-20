import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PilotServiceBase } from "./base/pilot.service.base";

@Injectable()
export class PilotService extends PilotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
