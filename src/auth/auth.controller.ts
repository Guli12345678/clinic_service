import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  UseGuards,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInUserDto } from "../users/dto/sign-user.dto";
import { CreateAdminDto } from "../admins/dto/create-admin.dto";
import { SignInAdminDto } from "../admins/dto/signin-admin.dto";
import { Request, Response } from "express";
import { Roles } from "../common/decorators/roles.decorator";
import { RolesGuard } from "../common/guards/roles.guard";
import { CreateDoctorDto } from "../doctor/dto/create-doctor.dto";
import { UsersService } from "../users/users.service";
import { AuthGuard } from "../common/guards/jwt-auth.guard";
import { GetCurrentUserId } from "../common/decorators/get-current-user-id.decorator";
import { GetCurrentUser } from "../common/decorators/get-current-user.decorator";
import { ResponseFields } from "../common/types";
import { AdminResponseFields } from "../common/types/admin-response.type";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Post("user/signup")
  async signUpUser(@Body() dto: CreateUserDto) {
    return this.authService.signUpUser(dto);
  }

  @Get("activate/:link")
  async activateUser(@Param("link") link: string) {
    return this.authService.activateUser(link);
  }

  @Post("user/signin")
  async signInUser(@Body() dto: SignInUserDto, @Res() res: Response) {
    const result = await this.authService.signin(dto, res);
    return res.json(result);
  }

  @Post("user/signout")
  async signOutUser(@Body("userId") userId: number, @Res() res: Response) {
    return this.authService.signout(userId, res);
  }

  @Post("user/refresh")
  @HttpCode(200)
  async refreshUserToken(@Req() req: Request, @Res() res: Response) {
    return this.authService.refreshUserToken(req, res);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("SUPERADMIN")
  @Post("admin/signup")
  async signUpAdmin(@Body() dto: CreateAdminDto) {
    return this.authService.signUpAdmin(dto);
  }

  @Post("admin/signin")
  async signInAdmin(@Body() dto: SignInAdminDto, @Res() res: Response) {
    const result = await this.authService.signinAdmin(dto, res);
    return res.json(result);
  }

  @Post("admin/signout")
  async signOutAdmin(@Body("adminId") adminId: number, @Res() res: Response) {
    return this.authService.signoutAdmin(adminId, res);
  }

  @Post("admin/refresh")
  @HttpCode(200)
  async refreshAdminToken(@Req() req: Request, @Res() res: Response) {
    return this.authService.refreshAdminToken(req, res);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles("ADMIN")
  @Post("users")
  registerDoctor(@Body() dto: CreateUserDto) {
    return this.usersService.create({
      role: "DOCTOR",
      clinicId: dto.clinicId,
      confirm_password: dto.confirm_password,
      password: dto.password,
      birth_date: dto.birth_date,
      email: dto.email,
      specialization: dto.specialization,
      experience: dto.experience,
      full_name: dto.full_name,
      gender: dto.gender,
      hired_date: dto.hired_date,
      langId: dto.langId,
      phone: dto.phone,
    });
  }
}
