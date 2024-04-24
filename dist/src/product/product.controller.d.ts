import { ProductService } from "./product.service";
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllCourse(): Promise<{
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
