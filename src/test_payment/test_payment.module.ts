import { Module } from '@nestjs/common';
import { TestPaymentService } from './test_payment.service';
import { TestPaymentController } from './test_payment.controller';

@Module({
  controllers: [TestPaymentController],
  providers: [TestPaymentService],
})
export class TestPaymentModule {}
