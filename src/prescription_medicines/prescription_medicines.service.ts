import { Injectable } from "@nestjs/common";
import { CreatePrescriptionMedicineDto } from "./dto/create-prescription_medicine.dto";
import { UpdatePrescriptionMedicineDto } from "./dto/update-prescription_medicine.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrescriptionMedicineService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPrescriptionMedicineDto: CreatePrescriptionMedicineDto) {
    return this.prismaService.prescriptionMedicines.create({
      data: {
        prescription: {
          connect: { id: createPrescriptionMedicineDto.prescriptionId },
        },
        medicine: { connect: { id: createPrescriptionMedicineDto.medicineId } },
      },
    });
  }

  findAll() {
    return this.prismaService.prescriptionMedicines.findMany({
      include: {
        prescription: true,
        medicine: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.prescriptionMedicines.findUnique({
      where: { id },
      include: {
        prescription: true,
        medicine: true,
      },
    });
  }

  update(
    id: number,
    updatePrescriptionMedicineDto: UpdatePrescriptionMedicineDto
  ) {
    return this.prismaService.prescriptionMedicines.update({
      where: { id },
      data: updatePrescriptionMedicineDto,
    });
  }

  remove(id: number) {
    return this.prismaService.prescriptionMedicines.delete({
      where: { id },
    });
  }
}
