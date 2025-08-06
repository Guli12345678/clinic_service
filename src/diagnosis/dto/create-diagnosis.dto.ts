import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsString, IsDateString } from "class-validator";
import {
  IllnessType,
  LastVisitType,
  RiskLevel,
} from "../../../generated/prisma";

export class CreateDiagnosisDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  appointmentId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  doctorId: number;

  @ApiProperty({ enum: IllnessType, example: IllnessType.CHRONIC })
  @IsEnum(IllnessType)
  illness_type: IllnessType;

  @ApiProperty({ example: "2025-08-05T10:45:00.000Z" })
  @IsDateString()
  diagnosed_date: Date;

  @ApiProperty({ example: "Mild hypertension with early symptoms." })
  @IsString()
  description: string;

  @ApiProperty({ example: LastVisitType.CHECKUP })
  @IsString()
  last_visit_type: LastVisitType;

  @ApiProperty({ example: RiskLevel.MODERATE })
  @IsString()
  risk_level: RiskLevel;
}
