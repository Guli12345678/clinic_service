import { Module } from '@nestjs/common';
import { AppointmentTestService } from './appointment_test.service';
import { AppointmentTestController } from './appointment_test.controller';

@Module({
  controllers: [AppointmentTestController],
  providers: [AppointmentTestService],
})
export class AppointmentTestModule {}
