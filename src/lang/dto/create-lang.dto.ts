import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLangDto {
  @ApiProperty({ example: "Uzbek" })
  @IsString()
  name: string;
}
