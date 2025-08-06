import { RoomType } from "../../../generated/prisma";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, IsBoolean, IsDate, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class CreateRoomDto {
  @ApiProperty({
    enum: RoomType,
    description: "Type of the room",
    example: RoomType.NORMAL,
  })
  @IsEnum(RoomType)
  type: RoomType;

  @ApiProperty({
    example: 3,
    description: "Floor number where the room is located",
  })
  @IsInt()
  floor: number;

  @ApiProperty({
    example: true,
    description: "Whether the room has an air conditioner",
  })
  @IsBoolean()
  has_air_conditioner: boolean;

  @ApiProperty({
    example: "2025-08-06T14:00:00.000Z",
    description: "Room reservation start date",
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  reserved_date: Date;

  @ApiProperty({
    example: "2025-08-10T12:00:00.000Z",
    description: "Expected finish date",
  })
  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  finish_date: Date;

  @ApiProperty({
    example: 42,
    description: "ID of the patient who booked the room",
  })
  @IsInt()
  patientId: number;
}
