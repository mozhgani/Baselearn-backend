export declare class ArticleRepository {
    private readonly prisma;
    constructor();
    getAllArticle(): Promise<({
        topic: {
            id: string;
            topic: import(".prisma/client").$Enums.ArticleTopic;
            articleId: string;
        }[];
        data: {
            id: string;
            articleId: string;
            image: string;
            text: string;
        };
    } & {
        id: string;
        name: string;
        description: string;
        view: number;
        articleDataId: string;
    })[]>;
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
