import { Module } from "@nestjs/common";
import { TestPaymentService } from "./test_payment.service";
import { TestPaymentController } from "./test_payment.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [PrismaModule, JwtModule],
  controllers: [TestPaymentController],
  providers: [TestPaymentService],
})
export class TestPaymentModule {}
