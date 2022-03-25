/*
  Warnings:

  - You are about to drop the column `country` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Organization` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "country";

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "country";
