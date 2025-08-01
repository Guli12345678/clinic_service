/*
  Warnings:

  - The primary key for the `Doctor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Doctor` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `userId` on the `Doctor` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `admin` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `appointment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `appointment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `patientId` on the `appointment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctorId` on the `appointment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `appointment_tests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `appointment_tests` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `testId` on the `appointment_tests` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `appointmentId` on the `appointment_tests` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `clinics` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `clinics` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `districtId` on the `clinics` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `ownerId` on the `clinics` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `rating` on the `clinics` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `diagnosis` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `diagnosis` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `appointmentId` on the `diagnosis` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `district` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `district` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `regionId` on the `district` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `lang` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `lang` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `medicines` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `medicines` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `notifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `notifications` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `userId` on the `notifications` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `payments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `treatmentId` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `patientId` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `appointmentId` on the `payments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `prescription` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `prescription` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `treatmentId` on the `prescription` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `diagnosisId` on the `prescription` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `prescription_medicines` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `prescription_medicines` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `prescriptionId` on the `prescription_medicines` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `medicineId` on the `prescription_medicines` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `regions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `regions` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `reviews` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `userId` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `doctorId` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `test_payment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `test_payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `appointmentId` on the `test_payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `testId` on the `test_payment` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `tests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `tests` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `treatments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `treatments` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `langId` on the `users` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- DropForeignKey
ALTER TABLE "public"."Doctor" DROP CONSTRAINT "Doctor_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."appointment" DROP CONSTRAINT "appointment_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."appointment" DROP CONSTRAINT "appointment_patientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."appointment_tests" DROP CONSTRAINT "appointment_tests_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."appointment_tests" DROP CONSTRAINT "appointment_tests_testId_fkey";

-- DropForeignKey
ALTER TABLE "public"."clinics" DROP CONSTRAINT "clinics_districtId_fkey";

-- DropForeignKey
ALTER TABLE "public"."diagnosis" DROP CONSTRAINT "diagnosis_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."district" DROP CONSTRAINT "district_regionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."notifications" DROP CONSTRAINT "notifications_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."payments" DROP CONSTRAINT "payments_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."payments" DROP CONSTRAINT "payments_patientId_fkey";

-- DropForeignKey
ALTER TABLE "public"."payments" DROP CONSTRAINT "payments_treatmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."prescription" DROP CONSTRAINT "prescription_diagnosisId_fkey";

-- DropForeignKey
ALTER TABLE "public"."prescription" DROP CONSTRAINT "prescription_treatmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."prescription_medicines" DROP CONSTRAINT "prescription_medicines_medicineId_fkey";

-- DropForeignKey
ALTER TABLE "public"."prescription_medicines" DROP CONSTRAINT "prescription_medicines_prescriptionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_doctorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."test_payment" DROP CONSTRAINT "test_payment_appointmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."test_payment" DROP CONSTRAINT "test_payment_testId_fkey";

-- DropForeignKey
ALTER TABLE "public"."users" DROP CONSTRAINT "users_langId_fkey";

-- AlterTable
ALTER TABLE "public"."Doctor" DROP CONSTRAINT "Doctor_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "userId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."admin" DROP CONSTRAINT "admin_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."appointment" DROP CONSTRAINT "appointment_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "patientId" SET DATA TYPE INTEGER,
ALTER COLUMN "doctorId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "appointment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."appointment_tests" DROP CONSTRAINT "appointment_tests_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "testId" SET DATA TYPE INTEGER,
ALTER COLUMN "appointmentId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "appointment_tests_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."clinics" DROP CONSTRAINT "clinics_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "districtId" SET DATA TYPE INTEGER,
ALTER COLUMN "ownerId" SET DATA TYPE INTEGER,
ALTER COLUMN "rating" SET DATA TYPE INTEGER,
ADD CONSTRAINT "clinics_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."diagnosis" DROP CONSTRAINT "diagnosis_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "appointmentId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "diagnosis_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."district" DROP CONSTRAINT "district_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "regionId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "district_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."lang" DROP CONSTRAINT "lang_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "lang_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."medicines" DROP CONSTRAINT "medicines_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "medicines_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."notifications" DROP CONSTRAINT "notifications_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "userId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."payments" DROP CONSTRAINT "payments_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "treatmentId" SET DATA TYPE INTEGER,
ALTER COLUMN "patientId" SET DATA TYPE INTEGER,
ALTER COLUMN "appointmentId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "payments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."prescription" DROP CONSTRAINT "prescription_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "treatmentId" SET DATA TYPE INTEGER,
ALTER COLUMN "diagnosisId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "prescription_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."prescription_medicines" DROP CONSTRAINT "prescription_medicines_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "prescriptionId" SET DATA TYPE INTEGER,
ALTER COLUMN "medicineId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "prescription_medicines_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."regions" DROP CONSTRAINT "regions_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "regions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."reviews" DROP CONSTRAINT "reviews_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "userId" SET DATA TYPE INTEGER,
ALTER COLUMN "doctorId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "reviews_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."test_payment" DROP CONSTRAINT "test_payment_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "appointmentId" SET DATA TYPE INTEGER,
ALTER COLUMN "testId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "test_payment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."tests" DROP CONSTRAINT "tests_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "tests_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."treatments" DROP CONSTRAINT "treatments_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ADD CONSTRAINT "treatments_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "langId" SET DATA TYPE INTEGER,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_langId_fkey" FOREIGN KEY ("langId") REFERENCES "public"."lang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Doctor" ADD CONSTRAINT "Doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointment" ADD CONSTRAINT "appointment_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointment" ADD CONSTRAINT "appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."diagnosis" ADD CONSTRAINT "diagnosis_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prescription" ADD CONSTRAINT "prescription_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "public"."treatments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prescription" ADD CONSTRAINT "prescription_diagnosisId_fkey" FOREIGN KEY ("diagnosisId") REFERENCES "public"."diagnosis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prescription_medicines" ADD CONSTRAINT "prescription_medicines_prescriptionId_fkey" FOREIGN KEY ("prescriptionId") REFERENCES "public"."prescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."prescription_medicines" ADD CONSTRAINT "prescription_medicines_medicineId_fkey" FOREIGN KEY ("medicineId") REFERENCES "public"."medicines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "public"."treatments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."payments" ADD CONSTRAINT "payments_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."reviews" ADD CONSTRAINT "reviews_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "public"."Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."clinics" ADD CONSTRAINT "clinics_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "public"."district"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."district" ADD CONSTRAINT "district_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "public"."regions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointment_tests" ADD CONSTRAINT "appointment_tests_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."appointment_tests" ADD CONSTRAINT "appointment_tests_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."test_payment" ADD CONSTRAINT "test_payment_appointmentId_fkey" FOREIGN KEY ("appointmentId") REFERENCES "public"."appointment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."test_payment" ADD CONSTRAINT "test_payment_testId_fkey" FOREIGN KEY ("testId") REFERENCES "public"."tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
