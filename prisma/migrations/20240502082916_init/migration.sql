/*
  Warnings:

  - You are about to drop the column `state_date` on the `projectDetail` table. All the data in the column will be lost.
  - Added the required column `start_date` to the `projectDetail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projectDetail` DROP COLUMN `state_date`,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL;
