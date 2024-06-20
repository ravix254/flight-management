import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AircraftServiceBase } from "./base/aircraft.service.base";

@Injectable()
export class AircraftService extends AircraftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
