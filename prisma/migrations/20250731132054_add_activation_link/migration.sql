/*
  Warnings:

  - A unique constraint covering the columns `[activation_link]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "activation_link" TEXT,
ALTER COLUMN "is_active" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "users_activation_link_key" ON "public"."users"("activation_link");
