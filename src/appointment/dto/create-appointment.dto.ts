import { AppointmentStatus } from "../../../generated/prisma";

export class CreateAppointmentDto {
  patientId: number;
  reserved_date: Date;
  doctorId: number;
  status: AppointmentStatus;
}
