import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { MerchantService } from "./merchant.service";

@Controller("")
@ApiTags("Merchant")
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get("products")
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved all products",
  })
  async getAllCourse() {
    return await this.merchantService.getAllProducts();
  }
}
