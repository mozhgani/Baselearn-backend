-- CreateEnum
CREATE TYPE "CourseLevel" AS ENUM ('BEGINNER', 'ADVANCE');

-- CreateEnum
CREATE TYPE "CourseStatus" AS ENUM ('PENDING', 'SUCSUSS');

-- CreateTable
CREATE TABLE "Course" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "numberOfUsers" BIGINT NOT NULL,
    "teacher" TEXT NOT NULL DEFAULT 'نیما تاجیک',
    "courseLevel" "CourseLevel" NOT NULL,
    "numberOfSessions" BIGINT NOT NULL,
    "trainingTime" BIGINT NOT NULL,
    "methodOfReceipt" TEXT NOT NULL DEFAULT 'Spot Player',
    "courseStatus" "CourseStatus" NOT NULL DEFAULT 'PENDING',
    "numberOfRegistration" BIGINT NOT NULL,
    "stars" BIGINT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Season" (
    "_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "videoSrc" TEXT NOT NULL,
    "courseCourseId" TEXT,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course__id_key" ON "Course"("_id");

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_courseCourseId_fkey" FOREIGN KEY ("courseCourseId") REFERENCES "Course"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
