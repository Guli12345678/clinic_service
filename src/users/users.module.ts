import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";
import { RolesGuard } from "../common/guards/roles.guard";

@Module({
  imports: [PrismaModule, JwtModule, forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService, RolesGuard], // 👈 Add this line
  exports: [UsersService],
})
export class UsersModule {}
