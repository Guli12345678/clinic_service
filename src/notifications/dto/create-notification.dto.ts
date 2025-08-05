import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, IsInt } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty({ example: false })
  @IsBoolean()
  read: boolean;

  @ApiProperty({
    example: "Your appointment is confirmed for tomorrow at 10 AM.",
  })
  @IsString()
  message: string;

  @ApiProperty({ example: "2025-08-04T22:30:00.000Z" })
  @IsString()
  notified_date: string;

  @ApiProperty({ example: 6 })
  @IsInt()
  userId: number;
}
