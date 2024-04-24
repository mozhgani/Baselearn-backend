import { ProductRepository } from "./product.repository";
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getAllProducts(): Promise<{
        message: string;
        products: {
            productId: string;
            name: string;
            description: string;
            price: number;
            inventory: number;
            createdAt: Date;
            updatedAt: Date;
            merchantId: string;
        }[];
    }>;
}
