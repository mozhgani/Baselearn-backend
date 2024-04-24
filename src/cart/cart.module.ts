// cart.module.ts

import { Module } from "@nestjs/common";
import { CartService } from "./cart.service";
import { CartController } from "./cart.controller";
import { CartRepository } from "./cart.repository";
import { PrismaClient } from "@prisma/client"; // Import PrismaClient directly

@Module({
  providers: [CartService, CartRepository, PrismaClient], // Include PrismaClient here
  controllers: [CartController],
})
export class CartModule {}
