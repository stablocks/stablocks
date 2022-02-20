/*
  Warnings:

  - A unique constraint covering the columns `[plaidId]` on the table `Expense` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `plaidId` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "pending" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "plaidId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "plaidAccessToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Expense_plaidId_key" ON "Expense"("plaidId");
