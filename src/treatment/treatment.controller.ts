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
import { TreatmentService } from "./treatment.service";
import { CreateTreatmentDto } from "./dto/create-treatment.dto";
import { UpdateTreatmentDto } from "./dto/update-treatment.dto";
import { AuthGuard } from "../common/guards/jwt-auth.guard";
import { RolesGuard } from "../common/guards/roles.guard";
import { Roles } from "../common/decorators/roles.decorator";

@Controller("treatment")
export class TreatmentController {
  constructor(private readonly treatmentService: TreatmentService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Post()
  create(@Body() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentService.create(createTreatmentDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "OWNER")
  @Get()
  findAll() {
    return this.treatmentService.findAll();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN", "OWNER")
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.treatmentService.findOne(+id);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTreatmentDto: UpdateTreatmentDto
  ) {
    return this.treatmentService.update(+id, updateTreatmentDto);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.treatmentService.remove(+id);
  }
}
