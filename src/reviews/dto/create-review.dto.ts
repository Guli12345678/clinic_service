import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
  @ApiProperty({ example: 7 })
  @IsInt()
  doctorId: number;

  @ApiProperty({ example: 84 })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 4.5 })
  @IsNumber()
  rating: number;

  @ApiProperty({ example: "Very attentive and explained everything clearly." })
  @IsString()
  comment: string;
}
