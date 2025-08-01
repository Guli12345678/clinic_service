import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { LangModule } from "./lang/lang.module";
import { DoctorModule } from "./doctor/doctor.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { AdminsModule } from "./admins/admins.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    PrismaModule,
    UsersModule,
    LangModule,
    RegionModule,
    DistrictModule,
    AdminsModule,
    AuthModule,
    DoctorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
