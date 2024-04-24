import { PrismaClient } from "@prisma/client";
import { Cart } from ".prisma/client";
export declare class CartRepository {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    addToCart(userId: string, productId: string, quantity: number): Promise<Cart>;
    getCartByUserId(userId: string): Promise<Cart | null>;
    removeFromCart(userId: string, productId: string): Promise<Cart | null>;
    clearCart(userId: string, cartId: string): Promise<Cart | null>;
}
