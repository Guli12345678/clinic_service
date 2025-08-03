import { Injectable } from '@nestjs/common';
import { CreateTestPaymentDto } from './dto/create-test_payment.dto';
import { UpdateTestPaymentDto } from './dto/update-test_payment.dto';

@Injectable()
export class TestPaymentService {
  create(createTestPaymentDto: CreateTestPaymentDto) {
    return 'This action adds a new testPayment';
  }

  findAll() {
    return `This action returns all testPayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testPayment`;
  }

  update(id: number, updateTestPaymentDto: UpdateTestPaymentDto) {
    return `This action updates a #${id} testPayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} testPayment`;
  }
}
