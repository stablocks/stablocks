/*
  Warnings:

  - The `invoiceId` column on the `Income` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[invoiceId]` on the table `Income` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `invoiceId` on the `InvoiceItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "InvoiceItem" DROP CONSTRAINT "InvoiceItem_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "invoiceId",
ADD COLUMN     "invoiceId" INTEGER;

-- AlterTable
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "InvoiceItem" DROP COLUMN "invoiceId",
ADD COLUMN     "invoiceId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Income_invoiceId_key" ON "Income"("invoiceId");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
