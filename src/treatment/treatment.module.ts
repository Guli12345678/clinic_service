import { Module } from "@nestjs/common";
import { TreatmentService } from "./treatment.service";
import { TreatmentController } from "./treatment.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [TreatmentController],
  providers: [TreatmentService],
})
export class TreatmentModule {}
