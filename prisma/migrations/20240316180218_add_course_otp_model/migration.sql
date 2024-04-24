-- CreateEnum
CREATE TYPE "COURSESTATUS" AS ENUM ('RECORDING', 'COMPLETED', 'PRESELL');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "courseId" TEXT;

-- CreateTable
CREATE TABLE "Course" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "teacher" TEXT NOT NULL DEFAULT 'نیما تاجیک',
    "courseLevel" TEXT NOT NULL,
    "NumberOfSessions" INTEGER NOT NULL,
    "courseTime" INTEGER NOT NULL,
    "courseStatus" "COURSESTATUS" NOT NULL DEFAULT 'PRESELL',
    "detailTitle" TEXT NOT NULL,
    "detailDescription" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "courseId" TEXT,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Meet" (
    "_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "topicId" TEXT,

    CONSTRAINT "Meet_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "OTP" (
    "_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userPhoneNumber" TEXT NOT NULL,

    CONSTRAINT "OTP_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Course__id_key" ON "Course"("_id");

-- CreateIndex
CREATE UNIQUE INDEX "Topic__id_key" ON "Topic"("_id");

-- CreateIndex
CREATE UNIQUE INDEX "Meet__id_key" ON "Meet"("_id");

-- CreateIndex
CREATE UNIQUE INDEX "OTP__id_key" ON "OTP"("_id");

-- CreateIndex
CREATE UNIQUE INDEX "OTP_code_key" ON "OTP"("code");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Meet" ADD CONSTRAINT "Meet_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("_id") ON DELETE SET NULL ON UPDATE CASCADE;
