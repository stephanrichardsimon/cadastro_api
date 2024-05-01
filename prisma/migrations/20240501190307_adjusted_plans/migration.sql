/*
  Warnings:

  - You are about to drop the column `plansId` on the `Users` table. All the data in the column will be lost.
  - Added the required column `password` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_plansId_fkey";

-- AlterTable
ALTER TABLE "Users" DROP COLUMN "plansId",
ADD COLUMN     "password" TEXT NOT NULL;
