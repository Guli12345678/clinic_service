import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentTestDto } from './create-appointment_test.dto';

export class UpdateAppointmentTestDto extends PartialType(CreateAppointmentTestDto) {}
