import { ArticleService } from "./article.service";
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getAllArticle(): Promise<{
        id: string;
        name: string;
        description: string;
        topic: {
            topic: import(".prisma/client").$Enums.ArticleTopic;
        }[];
    }[]>;
    getArticleDetail(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        view: number;
        articleDataId: string;
    }>;
    getTopArticle(): Promise<({
        topic: {
            id: string;
            topic: import(".prisma/client").$Enums.ArticleTopic;
            articleId: string;
        }[];
    } & {
        id: string;
        name: string;
        description: string;
        view: number;
        articleDataId: string;
    })[]>;
}
