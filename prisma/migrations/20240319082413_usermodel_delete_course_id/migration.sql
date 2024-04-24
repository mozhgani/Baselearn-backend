/*
  Warnings:

  - You are about to drop the column `courseId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_courseId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "courseId";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User__id_fkey" FOREIGN KEY ("_id") REFERENCES "Course"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
