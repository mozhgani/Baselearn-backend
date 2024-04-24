import { Injectable } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts() {
    const products = await this.productRepository.getAllProducts();

    return {
      message: "success",
      products,
    };
  }
}
