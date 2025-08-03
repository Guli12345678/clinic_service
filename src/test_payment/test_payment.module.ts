import { Module } from "@nestjs/common";
import { TestPaymentService } from "./test_payment.service";
import { TestPaymentController } from "./test_payment.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [TestPaymentController],
  providers: [TestPaymentService],
})
export class TestPaymentModule {}
