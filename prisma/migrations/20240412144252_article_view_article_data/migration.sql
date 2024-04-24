/*
  Warnings:

  - Added the required column `articleDataId` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `view` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "articleDataId" TEXT NOT NULL,
ADD COLUMN     "view" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "ArticleData" (
    "_id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "ArticleData_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ArticleData__id_key" ON "ArticleData"("_id");

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_articleDataId_fkey" FOREIGN KEY ("articleDataId") REFERENCES "ArticleData"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
