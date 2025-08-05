import { Injectable } from "@nestjs/common";
import { CreateDiagnosisDto } from "./dto/create-diagnosis.dto";
import { UpdateDiagnosisDto } from "./dto/update-diagnosis.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class DiagnosisService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDiagnosisDto: CreateDiagnosisDto) {
    return this.prismaService.diagnosis.create({
      data: {
        illness_type: createDiagnosisDto.illness_type,
        doctor: { connect: { id: createDiagnosisDto.doctorId } },
        diagnosed_date: createDiagnosisDto.diagnosed_date,
        description: createDiagnosisDto.description,
        appointment: { connect: { id: createDiagnosisDto.appointmentId } },
      },
    });
  }

  findAll() {
    return this.prismaService.diagnosis.findMany({
      include: {
        appointment: true,
        prescriptions: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.diagnosis.findMany({
      where: { id },
      include: {
        appointment: true,
      },
    });
  }

  update(id: number, updateDiagnosisDto: UpdateDiagnosisDto) {
    return this.prismaService.diagnosis.update({
      where: { id },
      data: updateDiagnosisDto,
    });
  }

  remove(id: number) {
    return this.prismaService.diagnosis.delete({
      where: { id },
    });
  }
}
