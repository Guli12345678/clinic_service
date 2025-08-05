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
import { TestsService } from "./tests.service";
import { CreateTestDto } from "./dto/create-test.dto";
import { UpdateTestDto } from "./dto/update-test.dto";
import { AuthGuard } from "../common/guards/jwt-auth.guard";
import { RolesGuard } from "../common/guards/roles.guard";
import { Roles } from "../common/decorators/roles.decorator";

@Controller("tests")
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testsService.findAll();
  }
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.testsService.findOne(+id);
  }
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testsService.update(+id, updateTestDto);
  }
  @UseGuards(AuthGuard, RolesGuard)
  @Roles("DOCTOR")
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.testsService.remove(+id);
  }
}
