/*
  Warnings:

  - Added the required column `articleId` to the `ArticleTopicModel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ArticleTopicModel" DROP CONSTRAINT "ArticleTopicModel__id_fkey";

-- AlterTable
ALTER TABLE "ArticleTopicModel" ADD COLUMN     "articleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ArticleTopicModel" ADD CONSTRAINT "ArticleTopicModel_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
