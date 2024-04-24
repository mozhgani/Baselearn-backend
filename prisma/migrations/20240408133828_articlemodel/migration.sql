-- CreateEnum
CREATE TYPE "ArticleTopic" AS ENUM ('Javascript', 'Nodejs', 'Typescript');

-- CreateTable
CREATE TABLE "Article" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "ArticleTopicModel" (
    "_id" TEXT NOT NULL,
    "topic" "ArticleTopic" NOT NULL,

    CONSTRAINT "ArticleTopicModel_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Article__id_key" ON "Article"("_id");

-- CreateIndex
CREATE UNIQUE INDEX "ArticleTopicModel__id_key" ON "ArticleTopicModel"("_id");

-- AddForeignKey
ALTER TABLE "ArticleTopicModel" ADD CONSTRAINT "ArticleTopicModel__id_fkey" FOREIGN KEY ("_id") REFERENCES "Article"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
