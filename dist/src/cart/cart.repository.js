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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const crypto_1 = require("crypto");
let CartRepository = class CartRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToCart(userId, productId, quantity) {
        let cart = await this.prisma.cart.findUnique({
            where: { userId },
            include: { items: true },
        });
        if (!cart) {
            cart = await this.prisma.cart.create({
                data: {
                    userId,
                    items: {
                        create: [{ productId, quantity, cartId: (0, crypto_1.randomUUID)() }],
                    },
                },
                include: { items: true },
            });
        }
        else {
            const existingItem = cart.items.find((item) => item.productId === productId);
            if (existingItem) {
                await this.prisma.cartItem.update({
                    where: { itemId: existingItem.itemId },
                    data: { quantity: { increment: quantity } },
                });
            }
            else {
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
    async getCartByUserId(userId) {
        return this.prisma.cart.findFirst({
            where: { userId },
            include: { items: true },
        });
    }
    async removeFromCart(userId, productId) {
        await this.prisma.cartItem.deleteMany({
            where: { cartId: userId, productId },
        });
        return this.getCartByUserId(userId);
    }
    async clearCart(userId, cartId) {
        const cart = await this.prisma.cart.findUnique({
            where: { userId, cartId },
        });
        if (!cart) {
            return null;
        }
        await this.prisma.cartItem.deleteMany({ where: { cartId: cart.cartId } });
        await this.prisma.cart.delete({ where: { userId, cartId } });
        return null;
    }
};
CartRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map