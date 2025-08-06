import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { PrismaService } from "../prisma/prisma.service";
import { CancelledAppointmentsDto } from "./dto/cancel-appointment.dto";

@Injectable()
export class SmartFiltersService {
  constructor(private readonly prisma: PrismaService) {}
  async findAllCancelledAppointments(dto: CancelledAppointmentsDto) {
    const start = new Date(dto.start_date);
    const end = new Date(dto.end_date);

    return this.prisma.appointment.findMany({
      where: {
        status: "CANCELLED",
        reserved_date: {
          gte: start,
          lte: end,
        },
      },
    });
  }
  async findRiskyPatients() {
    return this.prisma.diagnosis.findMany({
      where: {
        risk_level: { in: ["CRITICAL", "HIGH"] },
        last_visit_type: "EMERGENCY",
      },
    });
  }

  async findImportantPatients() {
    return this.prisma.diagnosis.findMany({
      where: {
        risk_level: { in: ["CRITICAL", "HIGH"] },
        prescriptions: {
          some: { requires_treatment: true, treatmentId: null },
        },
        appointment: {
          is: {
            status: "CANCELLED",
          },
        },
      },
    });
  }

  async findVipUsersWithCancelledAppointments() {
    try {
      const result = await this.prisma.user.findMany({
        where: {
          room: { type: "VIP" },
          appointments: { some: { status: "CANCELLED" } },
        },
      });
      if (!result.length)
        console.warn("No VIP users with cancellations found.");
      return result;
    } catch (error) {
      console.error("Error fetching VIP users:", error);
      throw new Error("Query failed");
    }
  }

  async findDoctorsWithCancelledAppointments() {
    return this.prisma.doctor.findMany({
      where: {
        user: { role: "DOCTOR", is_active: true },
        appointment: {
          some: {
            patient: {
              appointments: {
                some: {
                  status: "CANCELLED",
                },
              },
            },
          },
        },
      },
    });
  }
}
