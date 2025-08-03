import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrescriptionService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createPrescriptionDto: CreatePrescriptionDto) {
    return this.prismaService.prescription.create({
      data: {
        reason: createPrescriptionDto.reason,
        solution: createPrescriptionDto.solution,
        requires_treatment: createPrescriptionDto.requires_treatment,
        treatment: { connect: { id: createPrescriptionDto.treatmentId } },
        diagnosis: { connect: { id: createPrescriptionDto.diagnosisId } },
      },
    });
  }

  findAll() {
    return this.prismaService.prescription.findMany({
      include: {
        treatment: true,
        diagnosis: true,
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
