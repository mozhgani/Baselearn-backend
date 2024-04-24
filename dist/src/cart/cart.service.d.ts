import { CartRepository } from "./cart.repository";
import { Cart } from ".prisma/client";
import { AddProductToCartRequest } from "./dto/add-product-to-cart-request.dto";
export declare class CartService {
    private readonly cartRepository;
    constructor(cartRepository: CartRepository);
    addToCart(payload: AddProductToCartRequest): Promise<Cart>;
    getCartByUserId(userId: string): Promise<Cart | null>;
    removeFromCart(userId: string, productId: string): Promise<Cart | null>;
    clearCart(userId: string, cartId: string): Promise<Cart | null>;
}
