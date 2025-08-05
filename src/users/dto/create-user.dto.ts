import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsInt,
  ValidateIf,
} from "class-validator";
import { Gender, Role } from "../../../generated/prisma";

export class CreateUserDto {
  @IsString()
  full_name: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  confirm_password: string;

  @IsOptional()
  @IsString()
  hashed_refresh_token?: string;

  gender: Gender;

  @IsDateString()
  birth_date: string;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;

  @IsInt()
  langId: number;

  role: Role;

  activation_link?: string;

  // Doctor-specific fields (conditionally required)
  @ValidateIf((o) => o.role === "DOCTOR")
  @IsString()
  specialization: string;

  @ValidateIf((o) => o.role === "DOCTOR")
  @IsInt()
  experience: number;

  @ValidateIf((o) => o.role === "DOCTOR")
  @IsDateString()
  hired_date: string;

  @ValidateIf((o) => o.role === "DOCTOR")
  @IsInt()
  clinicId: number;
}
