import { IsString, IsDateString } from "class-validator";

export class CancelledAppointmentsDto {
  @IsString()
  @IsDateString()
  start_date: string;

  @IsString()
  @IsDateString()
  end_date: string;
}
