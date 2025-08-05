import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsEnum, IsDateString } from "class-validator";
import { PaymentMethod, PaymentStatus } from "../../../generated/prisma";

export class CreateTestPaymentDto {
  @ApiProperty({ example: 53 })
  @IsInt()
  appointmentId: number;

  @ApiProperty({ example: 19 })
  @IsInt()
  testId: number;

  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CARD })
  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @ApiProperty({ enum: PaymentStatus, example: PaymentStatus.PENDING })
  @IsEnum(PaymentStatus)
  payment_status: PaymentStatus;

  @ApiProperty({ example: "2025-08-05T07:45:00.000Z" })
  @IsDateString()
  date: Date;
}
