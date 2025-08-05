import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsInt, IsBoolean } from "class-validator";

export class CreatePrescriptionDto {
  @ApiProperty({ example: "Persistent headache due to sinus infection" })
  @IsString()
  reason: string;

  @ApiProperty({ example: "Prescribed antihistamines and rest" })
  @IsString()
  solution: string;

  @ApiProperty({ example: 12 })
  @IsInt()
  treatmentId?: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  requires_treatment?: boolean;

  @ApiProperty({ example: 33 })
  @IsInt()
  diagnosisId: number;
}
