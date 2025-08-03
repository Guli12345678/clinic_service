import { Injectable } from "@nestjs/common";
import { CreateTreatmentDto } from "./dto/create-treatment.dto";
import { UpdateTreatmentDto } from "./dto/update-treatment.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class TreatmentService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTreatmentDto: CreateTreatmentDto) {
    return this.prismaService.treatments.create({
      data: {
        type: createTreatmentDto.type,
        price: createTreatmentDto.price,
        advantage: createTreatmentDto.advantage,
        conditions: createTreatmentDto.conditions,
      },
    });
  }

  findAll() {
    return this.prismaService.treatments.findMany({
      include: { payments: true, prescriptions: true },
    });
  }

  findOne(id: number) {
    return this.prismaService.treatments.findUnique({ where: { id } });
  }

  update(id: number, updateTreatmentDto: UpdateTreatmentDto) {
    return this.prismaService.treatments.update({
      where: { id },
      data: updateTreatmentDto,
    });
  }

  remove(id: number) {
    return this.prismaService.treatments.delete({ where: { id } });
  }
}
