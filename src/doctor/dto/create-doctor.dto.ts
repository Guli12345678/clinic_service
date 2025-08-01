import { IsInt, IsDateString, IsEnum, IsString } from "class-validator";
import { Gender } from "../../../generated/prisma";

export class CreateDoctorDto {
  @IsInt()
  userId: number;

  @IsString()
  specialization: string;

  @IsInt()
  experience: number;

  @IsDateString()
  hired_date: string;

  gender: Gender;
}
