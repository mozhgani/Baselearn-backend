import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.gaurd";
import { RolesGuard } from "../auth/role/roles.guard";
import { Roles } from "../auth/role/roles.decorator";

@Controller("")
@ApiTags("Products")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get("products")
  @ApiOperation({ summary: "Get all products" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved all products",
  })
  async getAllCourse() {
    return await this.productService.getAllProducts();
  }
}
