import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestPaymentService } from './test_payment.service';
import { CreateTestPaymentDto } from './dto/create-test_payment.dto';
import { UpdateTestPaymentDto } from './dto/update-test_payment.dto';

@Controller('test-payment')
export class TestPaymentController {
  constructor(private readonly testPaymentService: TestPaymentService) {}

  @Post()
  create(@Body() createTestPaymentDto: CreateTestPaymentDto) {
    return this.testPaymentService.create(createTestPaymentDto);
  }

  @Get()
  findAll() {
    return this.testPaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testPaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestPaymentDto: UpdateTestPaymentDto) {
    return this.testPaymentService.update(+id, updateTestPaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testPaymentService.remove(+id);
  }
}
