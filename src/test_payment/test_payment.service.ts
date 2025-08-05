import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTestPaymentDto } from "./dto/create-test_payment.dto";
import { UpdateTestPaymentDto } from "./dto/update-test_payment.dto";

@Injectable()
export class TestPaymentService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createtest_paymentDto: CreateTestPaymentDto) {
    const test = await this.prismaService.test.findUnique({
      where: { id: createtest_paymentDto.testId },
      select: { price: true },
    });

    if (!test) {
      throw new Error("Treatment not found");
    }

    return this.prismaService.test_payment.create({
      data: {
        date: createtest_paymentDto.date,
        payment_status: createtest_paymentDto.payment_status,
        appointment: { connect: { id: createtest_paymentDto.appointmentId } },
        payment_method: createtest_paymentDto.payment_method,
        test: { connect: { id: createtest_paymentDto.testId } },
        price: test.price,
      },
    });
  }

  findAll() {
    return this.prismaService.test_payment.findMany({
      include: {
        test: true,
        appointment: true,
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
