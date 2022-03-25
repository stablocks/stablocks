/*
  Warnings:

  - You are about to drop the column `userId` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `addressTwo` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `ContactNote` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EmployeePay` table. All the data in the column will be lost.
  - You are about to drop the column `paid` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `sent` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `addressTwo` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Organization` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admin` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `crm` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `employee` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `external` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `helpdesk` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `hr` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `projects` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `recruiting` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `TaskComment` table. All the data in the column will be lost.
  - You are about to drop the column `otherEmails` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `supervisorId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `_DepartmentToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[addressId]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `Contact` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employeeId]` on the table `EmployeePay` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[addressId]` on the table `Organization` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employeeId` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `ContactNote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `EmployeePay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeId` to the `TaskComment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('admin', 'employee', 'external');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('draft', 'sent', 'paid', 'archived');

-- DropForeignKey
ALTER TABLE "Chat" DROP CONSTRAINT "Chat_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_userId_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_userId_fkey";

-- DropForeignKey
ALTER TABLE "ContactNote" DROP CONSTRAINT "ContactNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "EmployeePay" DROP CONSTRAINT "EmployeePay_userId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_userId_fkey";

-- DropForeignKey
ALTER TABLE "Role" DROP CONSTRAINT "Role_userId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_userId_fkey";

-- DropForeignKey
ALTER TABLE "TaskComment" DROP CONSTRAINT "TaskComment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_assigneeId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_supervisorId_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentToUser" DROP CONSTRAINT "_DepartmentToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DepartmentToUser" DROP CONSTRAINT "_DepartmentToUser_B_fkey";

-- DropIndex
DROP INDEX "EmployeePay_userId_key";

-- DropIndex
DROP INDEX "Role_userId_key";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "userId",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "address",
DROP COLUMN "addressTwo",
DROP COLUMN "city",
DROP COLUMN "state",
DROP COLUMN "userId",
DROP COLUMN "zipCode",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "employeeId" TEXT;

-- AlterTable
ALTER TABLE "ContactNote" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EmployeePay" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL,
ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "amount" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "paid",
DROP COLUMN "sent",
ADD COLUMN     "paidDate" TIMESTAMP(3),
ADD COLUMN     "status" "InvoiceStatus" NOT NULL DEFAULT E'draft',
ALTER COLUMN "dueDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "InvoiceItem" ALTER COLUMN "rate" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "address",
DROP COLUMN "addressTwo",
DROP COLUMN "city",
DROP COLUMN "state",
DROP COLUMN "zipCode",
ADD COLUMN     "addressId" TEXT;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Role" DROP CONSTRAINT "Role_pkey",
DROP COLUMN "admin",
DROP COLUMN "crm",
DROP COLUMN "employee",
DROP COLUMN "external",
DROP COLUMN "helpdesk",
DROP COLUMN "hr",
DROP COLUMN "id",
DROP COLUMN "projects",
DROP COLUMN "recruiting",
DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL,
ADD CONSTRAINT "Role_pkey" PRIMARY KEY ("employeeId");

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TaskComment" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "otherEmails",
DROP COLUMN "position",
DROP COLUMN "supervisorId",
ADD COLUMN     "type" "UserType" NOT NULL DEFAULT E'external';

-- DropTable
DROP TABLE "_DepartmentToUser";

-- CreateTable
CREATE TABLE "EmployeeInfo" (
    "userId" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "altEmail" TEXT,
    "addressId" TEXT,
    "supervisorId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmployeeInfo_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressTwo" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zip" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DepartmentToEmployeeInfo" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeInfo_addressId_key" ON "EmployeeInfo"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "_DepartmentToEmployeeInfo_AB_unique" ON "_DepartmentToEmployeeInfo"("A", "B");

-- CreateIndex
CREATE INDEX "_DepartmentToEmployeeInfo_B_index" ON "_DepartmentToEmployeeInfo"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Company_addressId_key" ON "Company"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_addressId_key" ON "Contact"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeePay_employeeId_key" ON "EmployeePay"("employeeId");

-- CreateIndex
CREATE UNIQUE INDEX "Organization_addressId_key" ON "Organization"("addressId");

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "EmployeeInfo"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeInfo" ADD CONSTRAINT "EmployeeInfo_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeePay" ADD CONSTRAINT "EmployeePay_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactNote" ADD CONSTRAINT "ContactNote_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "EmployeeInfo"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chat" ADD CONSTRAINT "Chat_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "EmployeeInfo"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_assigneeId_fkey" FOREIGN KEY ("assigneeId") REFERENCES "EmployeeInfo"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskComment" ADD CONSTRAINT "TaskComment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Role" ADD CONSTRAINT "Role_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "EmployeeInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToEmployeeInfo" ADD FOREIGN KEY ("A") REFERENCES "Department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DepartmentToEmployeeInfo" ADD FOREIGN KEY ("B") REFERENCES "EmployeeInfo"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
