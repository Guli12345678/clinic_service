import { Injectable } from "@nestjs/common";
import { CreateAppointmentTestDto } from "./dto/create-appointment_test.dto";
import { UpdateAppointmentTestDto } from "./dto/update-appointment_test.dto";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AppointmentTestService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAppointmentTestDto: CreateAppointmentTestDto) {
    return this.prismaService.appointmentTest.create({
      data: {
        test: { connect: { id: createAppointmentTestDto.testId } },
        appointment: {
          connect: { id: createAppointmentTestDto.appointmentId },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.appointmentTest.findMany({
      include: {
        test: true,
        appointment: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.appointmentTest.findUnique({
      where: { id },
      include: {
        test: true,
        appointment: true,
      },
    });
  }

  update(id: number, updateAppointmentTestDto: UpdateAppointmentTestDto) {
    return this.prismaService.appointmentTest.update({
      where: { id },
      data: updateAppointmentTestDto,
    });
  }

  remove(id: number) {
    return this.prismaService.appointmentTest.delete({
      where: { id },
    });
  }
}
