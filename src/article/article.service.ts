import { Injectable } from "@nestjs/common";
import { ArticleRepository } from "./article.repository";
@Injectable()
export class ArticleService {
  constructor(private readonly articleRepository: ArticleRepository) {}

  async getAllArticle() {
    const articles = await this.articleRepository.getAllArticle();
    return articles.map((article) => ({
      id: article.id,
      name: article.name,
      description: article.description,
      topic: article.topic.map((topicItem) => ({ topic: topicItem.topic })),
    }));
  }

  async getArticleDetail(id: string) {
    const articleDetail = await this.articleRepository.getArticleDetail(id);

    if (!articleDetail) {
      throw new Error("article not found");
    }

    return articleDetail;
  }

  async getTopArticle(){
    return await this.articleRepository.getTopArticle()
  }
}
