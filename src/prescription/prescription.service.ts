import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrescriptionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPrescriptionDto: CreatePrescriptionDto) {
    const { treatmentId, diagnosisId, reason, solution } =
      createPrescriptionDto;

    let requiresTreatment;
    if (treatmentId == null) {
      requiresTreatment = false;
    }

    const prescription = await this.prismaService.prescription.create({
      data: {
        reason,
        solution,
        requires_treatment: requiresTreatment,
        treatment: treatmentId ? { connect: { id: treatmentId } } : undefined,
        diagnosis: { connect: { id: diagnosisId } },
      },
    });

    return prescription;
  }

  findAll() {
    return this.prismaService.prescription.findMany({
      include: {
        treatment: true,
        diagnosis: true,
        medicines: {
          select: {
            medicine: true,
          },
        },
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.prescription.findUnique({
      where: { id },
      include: {
        treatment: true,
        diagnosis: true,
      },
    });
  }

  update(id: number, updatePrescriptionDto: UpdatePrescriptionDto) {
    return this.prismaService.prescription.update({
      where: { id },
      data: updatePrescriptionDto,
    });
  }

  remove(id: number) {
    return this.prismaService.prescription.delete({
      where: { id },
    });
  }
}
