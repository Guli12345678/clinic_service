import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class CreateTreatmentDto {
  @ApiProperty({ example: "Physiotherapy" })
  @IsString()
  type: string;

  @ApiProperty({ example: 120000 })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: "Non-invasive recovery method with minimal side effects",
  })
  @IsString()
  advantage: string;

  @ApiProperty({
    example: "Suitable for patients with musculoskeletal conditions",
  })
  @IsString()
  conditions: string;
}
