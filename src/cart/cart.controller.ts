// cart.controller.ts

import { Controller, Post, Body, Param, Get, Delete } from "@nestjs/common";
import { CartService } from "./cart.service";
import { Cart } from ".prisma/client";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AddProductToCartRequest } from "./dto/add-product-to-cart-request.dto";

@Controller("cart")
@ApiTags("Cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post("/add")
  @ApiBody({
    type: AddProductToCartRequest,
    description: "test",
  })
  async addToCart(@Body() payload: AddProductToCartRequest): Promise<Cart> {
    return this.cartService.addToCart(payload);
  }

  @Get(":userId")
  async getCartByUserId(@Param("userId") userId: string): Promise<Cart | null> {
    return this.cartService.getCartByUserId(userId);
  }

  @Delete(":userId/remove/:productId")
  async removeFromCart(
    @Param("userId") userId: string,
    @Param("productId") productId: string
  ): Promise<Cart | null> {
    return this.cartService.removeFromCart(userId, productId);
  }

  @Delete(":userId/:cartId/clear")
  async clearCart(
    @Param("userId") userId: string,
    @Param("cartId") cartId: string
  ): Promise<Cart | null> {
    return this.cartService.clearCart(userId, cartId);
  }
}
