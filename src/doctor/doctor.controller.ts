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
import { OwnerAuthGuard } from "../common/guards/owner-jwt-auth.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { OwnerRolesGuard } from "../common/guards/owner-role.guard";

@Controller("doctor")
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @UseGuards(OwnerAuthGuard, OwnerRolesGuard)
  @Roles("OWNER")
  @Get()
  findAll() {
    return this.doctorService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.doctorService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.doctorService.remove(+id);
  }
}
