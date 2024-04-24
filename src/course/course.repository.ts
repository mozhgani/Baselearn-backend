import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class CourseRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllCourse() {
    return await this.prisma.course.findMany({
      include: { topic: true },
    });
  }

  async getCourseDetail(id: string) {
    return await this.prisma.course.findFirst({
      where: {
        id,
      },
    });
  }

  async getTopCourse() {
    return await this.prisma.course.findMany({
      orderBy: {
        veiws: "desc",
      },
      take: 5,
    });
  }

  async getTopShortCourse() {
    return await this.prisma.course.findMany({
      where: {
        topic: {
          some: {
            title: "آموزش کوتاه",
          },
        },
      },
      orderBy: {
        veiws: "desc",
      },
      take: 5,
      include: { topic: true },
    });
  }
}
