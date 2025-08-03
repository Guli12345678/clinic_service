import { PaymentMethod, PaymentStatus } from "../../../generated/prisma";

export class CreatePaymentDto {
  treatmentId: number;
  payment_date: Date;
  payment_method: PaymentMethod;
  status: PaymentStatus;
  patientId: number;
  amount: number;
}
