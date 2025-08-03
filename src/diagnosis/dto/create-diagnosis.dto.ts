import { IllnessType } from "../../../generated/prisma";

export class CreateDiagnosisDto {
  appointmentId: number;
  illness_type: IllnessType;
  diagnosed_date: Date;
  description: string;
}
