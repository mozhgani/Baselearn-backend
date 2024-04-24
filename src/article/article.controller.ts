import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ArticleService } from "./article.service";

@Controller("")
@ApiTags("Article")
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get("articles")
  @ApiOperation({ summary: "Get all article" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved all article",
  })
  async getAllArticle() {
    console.log(
      "await this.articleService.getAllArticle()",
      await this.articleService.getAllArticle()
    );

    return await this.articleService.getAllArticle();
  }

  @Get("article/:id")
  @ApiOperation({ summary: "Get article by id" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved article",
  })
  async getArticleDetail(@Param("id") id: string) {
    return await this.articleService.getArticleDetail(id);
  }

  @Get("topArticle")
  @ApiOperation({ summary: "Get top article" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved top article",
  })
  async getTopArticle() {
    return await this.articleService.getTopArticle();
  }
}
