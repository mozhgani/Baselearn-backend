import { MerchantService } from "./merchant.service";
export declare class MerchantController {
    private readonly merchantService;
    constructor(merchantService: MerchantService);
    getAllCourse(): Promise<string>;
}
