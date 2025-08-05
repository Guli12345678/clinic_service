import { Module } from "@nestjs/common";
import { ClinicsService } from "./clinics.service";
import { ClinicsController } from "./clinics.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [ClinicsController],
  providers: [ClinicsService],
})
export class ClinicsModule {}
