import { PartialType } from '@nestjs/swagger';
import { CreateTestPaymentDto } from './create-test_payment.dto';

export class UpdateTestPaymentDto extends PartialType(CreateTestPaymentDto) {}
