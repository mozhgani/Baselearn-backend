import { ArticleRepository } from "./article.repository";
export declare class ArticleService {
    private readonly articleRepository;
    constructor(articleRepository: ArticleRepository);
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
