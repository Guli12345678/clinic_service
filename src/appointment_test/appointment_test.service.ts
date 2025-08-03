import { Injectable } from '@nestjs/common';
import { CreateAppointmentTestDto } from './dto/create-appointment_test.dto';
import { UpdateAppointmentTestDto } from './dto/update-appointment_test.dto';

@Injectable()
export class AppointmentTestService {
  create(createAppointmentTestDto: CreateAppointmentTestDto) {
    return 'This action adds a new appointmentTest';
  }

  findAll() {
    return `This action returns all appointmentTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentTest`;
  }

  update(id: number, updateAppointmentTestDto: UpdateAppointmentTestDto) {
    return `This action updates a #${id} appointmentTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentTest`;
  }
}
