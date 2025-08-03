import { PaymentMethod, PaymentStatus } from "../../../generated/prisma";

export class CreateTestPaymentDto {
  appointmentId: number;
  testId: number;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
}
