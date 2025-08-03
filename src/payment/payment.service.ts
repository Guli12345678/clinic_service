import { Injectable } from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { PrismaService } from "../prisma/prisma.service";
import { connect } from "http2";

@Injectable()
export class PaymentService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPaymentDto: CreatePaymentDto) {
    return this.prismaService.payment.create({
      data: {
        payment_date: createPaymentDto.payment_date,
        payment_method: createPaymentDto.payment_method,
        status: createPaymentDto.status,
        amount: createPaymentDto.amount,
        treatment: { connect: { id: createPaymentDto.treatmentId } },
        patient: { connect: { id: createPaymentDto.patientId } },
      },
    });
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
