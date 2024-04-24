import { Injectable } from "@nestjs/common";
import { MerchantRepository } from "./merchant.repository";
@Injectable()
export class MerchantService {
  constructor(private readonly merchantRepository: MerchantRepository) {}

  async getAllProducts() {
    return await this.merchantRepository.getAllProducts();
  }
}
