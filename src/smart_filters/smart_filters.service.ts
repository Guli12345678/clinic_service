import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SmartFiltersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllCancelledAppointmentsInWeek() {
    const startOfWeek = new Date();
    const endOfWeek = new Date();
    return this.prisma.appointment.findMany({
      where: {
        status: "CANCELLED",
        reserved_date: {
          gte: startOfWeek,
          lte: endOfWeek,
        },
      },
    });
  }
  async findAllCancelledPayments() {
    return this.prisma.payment.findMany({ where: { status: "REFUNDED" } });
  }
}
