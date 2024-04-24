import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class ArticleRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllArticle() {
    return await this.prisma.article.findMany({
      include: {
        topic: true,
        data: true,
      },
    });
  }

  async getArticleDetail(id: string) {
    return await this.prisma.article.findFirst({
      where: {
        id,
      },
    });
  }

  async getTopArticle() {
    return await this.prisma.article.findMany({
      include: {
        topic: true,
      },
      orderBy: {
        view: "desc",
      },
      take: 5,
    });
  }
}
