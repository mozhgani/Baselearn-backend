export declare class ProductRepository {
    private readonly prisma;
    constructor();
    getAllProducts(): Promise<{
        productId: string;
        name: string;
        description: string;
        price: number;
        inventory: number;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
    }[]>;
}
