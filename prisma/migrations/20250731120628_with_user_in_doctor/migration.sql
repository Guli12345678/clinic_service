-- DropIndex
DROP INDEX "public"."doctor_userId_key";

-- AddForeignKey
ALTER TABLE "public"."doctor" ADD CONSTRAINT "doctor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
