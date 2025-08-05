import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TestPaymentService } from './test_payment.service';
import { CreateTestPaymentDto } from './dto/create-test_payment.dto';
import { UpdateTestPaymentDto } from './dto/update-test_payment.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { AuthGuard } from '../common/guards/jwt-auth.guard';

@Controller("test-payment")
export class TestPaymentController {
  constructor(private readonly testPaymentService: TestPaymentService) {}

  @Post()
  create(@Body() createTestPaymentDto: CreateTestPaymentDto) {
    return this.testPaymentService.create(createTestPaymentDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERADMIN")
  @Get()
  findAll() {
    return this.testPaymentService.findAll();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERADMIN")
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.testPaymentService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERADMIN")
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTestPaymentDto: UpdateTestPaymentDto
  ) {
    return this.testPaymentService.update(+id, updateTestPaymentDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERADMIN")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.testPaymentService.remove(+id);
  }
}
