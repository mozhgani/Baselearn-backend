"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const swagger_1 = require("@nestjs/swagger");
const add_product_to_cart_request_dto_1 = require("./dto/add-product-to-cart-request.dto");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async addToCart(payload) {
        return this.cartService.addToCart(payload);
    }
    async getCartByUserId(userId) {
        return this.cartService.getCartByUserId(userId);
    }
    async removeFromCart(userId, productId) {
        return this.cartService.removeFromCart(userId, productId);
    }
    async clearCart(userId, cartId) {
        return this.cartService.clearCart(userId, cartId);
    }
};
__decorate([
    (0, common_1.Post)("/add"),
    (0, swagger_1.ApiBody)({
        type: add_product_to_cart_request_dto_1.AddProductToCartRequest,
        description: "test",
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_product_to_cart_request_dto_1.AddProductToCartRequest]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)(":userId"),
    __param(0, (0, common_1.Param)("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCartByUserId", null);
__decorate([
    (0, common_1.Delete)(":userId/remove/:productId"),
    __param(0, (0, common_1.Param)("userId")),
    __param(1, (0, common_1.Param)("productId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "removeFromCart", null);
__decorate([
    (0, common_1.Delete)(":userId/:cartId/clear"),
    __param(0, (0, common_1.Param)("userId")),
    __param(1, (0, common_1.Param)("cartId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "clearCart", null);
CartController = __decorate([
    (0, common_1.Controller)("cart"),
    (0, swagger_1.ApiTags)("Cart"),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map