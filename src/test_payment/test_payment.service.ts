import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTestPaymentDto } from "./dto/create-test_payment.dto";
import { UpdateTestPaymentDto } from "./dto/update-test_payment.dto";

@Injectable()
export class TestPaymentService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createtest_paymentDto: CreateTestPaymentDto) {
    return this.prismaService.test_payment.create({
      data: {
        payment_method: createtest_paymentDto.payment_method,
        payment_status: createtest_paymentDto.payment_status,
        appointment: { connect: { id: createtest_paymentDto.appointmentId } },
        test: { connect: { id: createtest_paymentDto.testId } },
      },
    });
  }

  findAll() {
    return this.prismaService.test_payment.findMany({
      include: {
        appointment: true,
        test: true,
      },
    });
  }

  findOne(id: number) {
    return this.prismaService.test_payment.findUnique({ where: { id } });
  }

  update(id: number, updatetest_paymentDto: UpdateTestPaymentDto) {
    return this.prismaService.test_payment.update({
      where: { id },
      data: updatetest_paymentDto,
    });
  }

  remove(id: number) {
    return this.prismaService.test_payment.delete({ where: { id } });
  }
}
