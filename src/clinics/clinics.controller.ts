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
import { ClinicsService } from "./clinics.service";
import { CreateClinicDto } from "./dto/create-clinic.dto";
import { UpdateClinicDto } from "./dto/update-clinic.dto";
import { AuthGuard } from "../common/guards/jwt-auth.guard";
import { RolesGuard } from "../common/guards/roles.guard";
import { Roles } from "../common/decorators/roles.decorator";
import { SelfGuard } from "../common/guards/user-self.guard";

@Controller("clinics")
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("OWNER")
  @Post()
  create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicsService.create(createClinicDto);
  }

  @Get()
  findAll() {
    return this.clinicsService.findAll();
  }

  @UseGuards(AuthGuard, SelfGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.clinicsService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("OWNER")
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateClinicDto: UpdateClinicDto) {
    return this.clinicsService.update(+id, updateClinicDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("OWNER")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.clinicsService.remove(+id);
  }
}
