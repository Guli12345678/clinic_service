/*
  Warnings:

  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('PATIENT', 'DOCTOR', 'OWNER');

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "role" "public"."Role" NOT NULL;
