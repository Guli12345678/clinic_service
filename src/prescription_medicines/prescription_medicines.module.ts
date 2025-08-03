import { Module } from "@nestjs/common";
import { PrescriptionMedicineService } from "./prescription_medicines.service";
import { PrescriptionMedicinesController } from "./prescription_medicines.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [PrescriptionMedicinesController],
  providers: [PrescriptionMedicineService],
})
export class PrescriptionMedicinesModule {}
