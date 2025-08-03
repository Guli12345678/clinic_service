import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentTestService } from './appointment_test.service';
import { CreateAppointmentTestDto } from './dto/create-appointment_test.dto';
import { UpdateAppointmentTestDto } from './dto/update-appointment_test.dto';

@Controller('appointment-test')
export class AppointmentTestController {
  constructor(private readonly appointmentTestService: AppointmentTestService) {}

  @Post()
  create(@Body() createAppointmentTestDto: CreateAppointmentTestDto) {
    return this.appointmentTestService.create(createAppointmentTestDto);
  }

  @Get()
  findAll() {
    return this.appointmentTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentTestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentTestDto: UpdateAppointmentTestDto) {
    return this.appointmentTestService.update(+id, updateAppointmentTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentTestService.remove(+id);
  }
}
