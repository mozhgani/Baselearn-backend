// cart.repository.ts

import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { Cart } from ".prisma/client";
import { randomUUID } from "crypto";

@Injectable()
export class CartRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async addToCart(
    userId: string,
    productId: string,
    quantity: number
  ): Promise<Cart> {
    let cart = await this.prisma.cart.findUnique({
      where: { userId },
      include: { items: true },
    });

    if (!cart) {
      cart = await this.prisma.cart.create({
        data: {
          userId,
          items: {
            create: [{ productId, quantity, cartId: randomUUID() }],
          },
        },
        include: { items: true },
      });
    } else {
      const existingItem = cart.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        await this.prisma.cartItem.update({
          where: { itemId: existingItem.itemId },
          data: { quantity: { increment: quantity } },
        });
      } else {
        await this.prisma.cartItem.create({
          data: {
            productId,
            quantity,
            cartId: cart.cartId,
          },
        });
      }

      cart = await this.prisma.cart.findUnique({
        where: { userId },
        include: { items: true },
      });
    }

    return cart;
  }

  async getCartByUserId(userId: string): Promise<Cart | null> {
    return this.prisma.cart.findFirst({
      where: { userId },
      include: { items: true },
    });
  }

  async removeFromCart(
    userId: string,
    productId: string
  ): Promise<Cart | null> {
    await this.prisma.cartItem.deleteMany({
      where: { cartId: userId, productId }, // Provide both userId and productId
    });
    return this.getCartByUserId(userId);
  }

  async clearCart(userId: string, cartId: string): Promise<Cart | null> {
    const cart = await this.prisma.cart.findUnique({
      where: { userId, cartId },
    });

    if (!cart) {
      return null; // Cart not found
    }

    await this.prisma.cartItem.deleteMany({ where: { cartId: cart.cartId } });
    await this.prisma.cart.delete({ where: { userId, cartId } });
    return null; // Cart is deleted, so return null
  }
}
