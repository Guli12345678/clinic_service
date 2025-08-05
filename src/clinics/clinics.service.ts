import { Injectable } from "@nestjs/common";
import { CreateClinicDto } from "./dto/create-clinic.dto";
import { UpdateClinicDto } from "./dto/update-clinic.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ClinicsService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createClinicDto: CreateClinicDto) {
    const owner = await this.prismaService.user.findUnique({
      where: { id: createClinicDto.ownerId },
    });

    if (!owner || owner.role !== "OWNER") {
      throw new Error("User's role must be OWNER");
    }

    return this.prismaService.clinics.create({
      data: {
        description: createClinicDto.description,
        opened_date: createClinicDto.opened_date,
        rating: createClinicDto.rating,
        title: createClinicDto.title,
        district: { connect: { id: createClinicDto.districtId } },
        owner: { connect: { id: createClinicDto.ownerId } },
      },
    });
  }

  findAll() {
    return this.prismaService.clinics.findMany({
      include: {
        district: true,
        doctors: { select: { user: true, specialty: true, experience: true } },
        owner: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.clinics.findUnique({ where: { id } });
  }

  update(id: number, updateClinicDto: UpdateClinicDto) {
    return `This action updates a #${id} clinic`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinic`;
  }
}
