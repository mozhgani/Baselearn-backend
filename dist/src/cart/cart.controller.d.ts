import { CartService } from "./cart.service";
import { Cart } from ".prisma/client";
import { AddProductToCartRequest } from "./dto/add-product-to-cart-request.dto";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    addToCart(payload: AddProductToCartRequest): Promise<Cart>;
    getCartByUserId(userId: string): Promise<Cart | null>;
    removeFromCart(userId: string, productId: string): Promise<Cart | null>;
    clearCart(userId: string, cartId: string): Promise<Cart | null>;
}
