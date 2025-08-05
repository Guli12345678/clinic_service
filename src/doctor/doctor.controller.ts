import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { DoctorService } from "./doctor.service";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { UpdateDoctorDto } from "./dto/update-doctor.dto";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { AuthGuard } from "../common/guards/jwt-auth.guard";
import { DoctorSelfGuard } from "../common/guards/doctor-self.guard";

@Controller("doctor")
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "SUPERADMIN")
  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @UseGuards(AuthGuard, DoctorSelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.doctorService.findOne(+id);
  }

  @UseGuards(AuthGuard, DoctorSelfGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "OWNER")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.doctorService.remove(+id);
  }
}
