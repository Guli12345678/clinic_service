import { Body, Controller, Get, Post, Req, Res, Param } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { SignInUserDto } from "../users/dto/sign-user.dto";
import { CreateAdminDto } from "../admins/dto/create-admin.dto";
import { SignInAdminDto } from "../admins/dto/signin-admin.dto";
import { Request, Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
  async refreshUserToken(
    @Body("userId") userId: number,
    @Body("refreshToken") refreshToken: string,
    @Res() res: Response
  ) {
    return this.authService.refreshUserToken(userId, refreshToken, res);
  }

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
  async refreshAdminToken(
    @Body("adminId") adminId: number,
    @Body("refreshToken") refreshToken: string,
    @Res() res: Response
  ) {
    return this.authService.refreshAdminToken(adminId, refreshToken, res);
  }
}
