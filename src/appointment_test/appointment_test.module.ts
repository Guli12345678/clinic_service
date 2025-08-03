import { Module } from "@nestjs/common";
import { AppointmentTestService } from "./appointment_test.service";
import { AppointmentTestController } from "./appointment_test.controller";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [AppointmentTestController],
  providers: [AppointmentTestService],
})
export class AppointmentTestModule {}
