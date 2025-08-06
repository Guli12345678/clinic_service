import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class RoomService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    const user = await this.prismaService.user.findUnique({
      where: { id: createRoomDto.patientId },
    });
    if (!user) {
      throw new NotFoundException("Bunday user topilmadi");
    }
    if (user.role !== "PATIENT") {
      throw new BadRequestException("User's role must be PATIENT");
    }
    const room = await this.prismaService.room.create({
      data: {
        finish_date: createRoomDto.finish_date,
        floor: createRoomDto.floor,
        has_air_conditioner: createRoomDto.has_air_conditioner,
        reserved_date: createRoomDto.reserved_date,
        type: createRoomDto.type,
        patient: { connect: { id: createRoomDto.patientId } },
      },
    });
    return room;
  }

  findAll() {
    return this.prismaService.room.findMany({ include: { patient: true } });
  }

  findOne(id: number) {
    return this.prismaService.room.findUnique({ where: { id } });
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return this.prismaService.room.update({
      where: { id },
      data: updateRoomDto,
    });
  }

  remove(id: number) {
    return this.prismaService.room.delete({ where: { id } });
  }
}
