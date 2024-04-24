import { MerchantRepository } from "./merchant.repository";
export declare class MerchantService {
    private readonly merchantRepository;
    constructor(merchantRepository: MerchantRepository);
    getAllProducts(): Promise<string>;
}
