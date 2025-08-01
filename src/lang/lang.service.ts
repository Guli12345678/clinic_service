import { Injectable } from "@nestjs/common";
import { CreateLangDto } from "./dto/create-lang.dto";
import { UpdateLangDto } from "./dto/update-lang.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class LangService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createlangDto: CreateLangDto) {
    const lang = await this.prismaService.lang.create({
      data: {
        name: createlangDto.name,
      },
    });
    return lang;
  }

  findAll() {
    return this.prismaService.lang.findMany({ include: { users: true } });
  }

  findOne(id: number) {
    return this.prismaService.lang.findUnique({ where: { id } });
  }

  update(id: number, updatelangDto: UpdateLangDto) {
    return this.prismaService.lang.update({
      where: { id },
      data: updatelangDto,
    });
  }

  remove(id: number) {
    return this.prismaService.lang.delete({
      where: { id },
    });
  }
}
