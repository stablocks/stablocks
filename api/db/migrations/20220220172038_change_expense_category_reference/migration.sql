/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Expense` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_categoryId_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "categoryId",
ADD COLUMN     "categorySlug" TEXT;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_categorySlug_fkey" FOREIGN KEY ("categorySlug") REFERENCES "ExpenseCategory"("slug") ON DELETE SET NULL ON UPDATE CASCADE;
