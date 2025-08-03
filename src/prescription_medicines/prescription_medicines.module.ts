import { Module } from '@nestjs/common';
import { PrescriptionMedicinesService } from './prescription_medicines.service';
import { PrescriptionMedicinesController } from './prescription_medicines.controller';

@Module({
  controllers: [PrescriptionMedicinesController],
  providers: [PrescriptionMedicinesService],
})
export class PrescriptionMedicinesModule {}
