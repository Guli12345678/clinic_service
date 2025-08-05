import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateDistrictDto {
  @ApiProperty({ example: "Chilanzar" })
  @IsString()
  name: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  regionId: number;
}
