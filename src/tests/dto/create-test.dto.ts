import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString, IsNumber } from "class-validator";
import { TestType } from "../../../generated/prisma";

export class CreateTestDto {
  @ApiProperty({ enum: TestType, example: TestType.BLOOD })
  @IsEnum(TestType)
  type: TestType;

  @ApiProperty({ example: "Complete Blood Count" })
  @IsString()
  name: string;

  @ApiProperty({
    example:
      "Measures various components of blood including WBCs, RBCs, hemoglobin, and platelets.",
  })
  @IsString()
  description: string;

  @ApiProperty({ example: "Suspected anemia due to fatigue and pale skin" })
  @IsString()
  reason: string;

  @ApiProperty({ example: 150000 })
  @IsNumber()
  price: number;
}
