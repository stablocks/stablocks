/*
  Warnings:

  - Made the column `employeeId` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_employeeId_fkey";

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "employeeId" SET NOT NULL;

-- AlterTable
ALTER TABLE "EmployeeInfo" ALTER COLUMN "position" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
