// cart.service.ts

import { Injectable } from "@nestjs/common";
import { CartRepository } from "./cart.repository";
import { Cart } from ".prisma/client";
import { AddProductToCartRequest } from "./dto/add-product-to-cart-request.dto";

@Injectable()
export class CartService {
  constructor(private readonly cartRepository: CartRepository) {}

  async addToCart(payload: AddProductToCartRequest): Promise<Cart> {
    const { productId, quantity, userId } = payload;
    return this.cartRepository.addToCart(userId, productId, quantity);
  }

  async getCartByUserId(userId: string): Promise<Cart | null> {
    return this.cartRepository.getCartByUserId(userId);
  }

  async removeFromCart(
    userId: string,
    productId: string
  ): Promise<Cart | null> {
    return this.cartRepository.removeFromCart(userId, productId);
  }

  async clearCart(userId: string, cartId: string): Promise<Cart | null> {
    return this.cartRepository.clearCart(userId, cartId);
  }
}
