import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { SmartFiltersService } from "./smart_filters.service";
import { CancelledAppointmentsDto } from "./dto/cancel-appointment.dto";

@ApiTags("Smart Filters")
@Controller("smart-filters")
export class SmartFiltersController {
  constructor(private readonly smartFiltersService: SmartFiltersService) {}

  @Post("first")
  async getAllCancelledAppointments(@Body() body: CancelledAppointmentsDto) {
    return this.smartFiltersService.findAllCancelledAppointments(body);
  }
  @Get("second")
  async getRiskyPatients() {
    return this.smartFiltersService.findRiskyPatients();
  }

  @Get("third")
  async getImportantPatients() {
    return this.smartFiltersService.findImportantPatients();
  }

  @Get("fourth")
  async getVipUsersWithCancelledAppointments() {
    return this.smartFiltersService.findVipUsersWithCancelledAppointments();
  }

  @Get("last")
  async getDoctorsWithCancelledAppointments() {
    return this.smartFiltersService.findDoctorsWithCancelledAppointments();
  }
}
