import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class CreatePrescriptionMedicineDto {
  @ApiProperty({ example: 14 })
  @IsInt()
  prescriptionId: number;

  @ApiProperty({ example: 37 })
  @IsInt()
  medicineId: number;
}
