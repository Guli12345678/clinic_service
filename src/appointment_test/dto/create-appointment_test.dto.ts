import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class CreateAppointmentTestDto {
  @ApiProperty({ example: 5 })
  @IsInt()
  testId: number;

  @ApiProperty({ example: 12 })
  @IsInt()
  appointmentId: number;
}
