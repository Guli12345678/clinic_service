import { Injectable } from "@nestjs/common";
import { CreateTestDto } from "./dto/create-test.dto";
import { UpdateTestDto } from "./dto/update-test.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class TestsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createTestDto: CreateTestDto) {
    return this.prismaService.test.create({
      data: {
        type: createTestDto.type,
        name: createTestDto.name,
        description: createTestDto.description,
        reason: createTestDto.reason,
        price: createTestDto.price,
      },
    });
  }

  findAll() {
    return this.prismaService.test.findMany({
      include: {
        appointmentTests: { select: { appointment: true } },
        testPayments: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.test.findUnique({ where: { id } });
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return this.prismaService.test.update({
      where: { id },
      data: updateTestDto,
    });
  }

  remove(id: number) {
    return this.prismaService.test.delete({ where: { id } });
  }
}
