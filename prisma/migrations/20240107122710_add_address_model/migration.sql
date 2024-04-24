/*
  Warnings:

  - You are about to drop the column `roles` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "addressId" TEXT,
ADD COLUMN     "role" "Roles" NOT NULL DEFAULT 'Customer';

-- CreateTable
CREATE TABLE "Address" (
    "_id" TEXT NOT NULL,
    "city" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Address__id_key" ON "Address"("_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
