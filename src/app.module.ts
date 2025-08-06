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
import { PaymentModule } from './payment/payment.module';
import { AppointmentModule } from './appointment/appointment.module';
import { TestsModule } from './tests/tests.module';
import { AppointmentTestModule } from './appointment_test/appointment_test.module';
import { TestPaymentModule } from './test_payment/test_payment.module';
import { TreatmentModule } from './treatment/treatment.module';
import { NotificationsModule } from './notifications/notifications.module';
import { DiagnosisModule } from './diagnosis/diagnosis.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { MedicineModule } from './medicine/medicine.module';
import { PrescriptionMedicinesModule } from './prescription_medicines/prescription_medicines.module';
import { ClinicsModule } from './clinics/clinics.module';
import { SmartFiltersModule } from './smart_filters/smart_filters.module';

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
    PaymentModule,
    AppointmentModule,
    TestsModule,
    AppointmentTestModule,
    TestPaymentModule,
    TreatmentModule,
    NotificationsModule,
    DiagnosisModule,
    PrescriptionModule,
    MedicineModule,
    PrescriptionMedicinesModule,
    ClinicsModule,
    SmartFiltersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
