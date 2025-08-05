import { IsString, IsDate, IsInt, Min, Max } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateClinicDto {
  @ApiProperty({
    example: "Harmony Medical Center",
    description: "Name of the clinic",
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: "Multispecialty clinic with modern facilities.",
    description: "Description of the clinic",
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: "2025-08-05T14:00:00.000Z",
    description: "Opening date in ISO format",
    type: String,
  })
  @IsDate()
  opened_date: Date;

  @ApiProperty({
    example: 3,
    description: "District ID where the clinic is located",
  })
  @IsInt()
  districtId: number;

  @ApiProperty({
    example: 5,
    description: "Owner ID who registered the clinic",
  })
  @IsInt()
  ownerId: number;

  @ApiProperty({ example: 4, description: "Clinic rating from 1 to 5" })
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;
}
