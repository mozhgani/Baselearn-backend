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
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let AuthRepository = class AuthRepository {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    async createUser(data) {
        return await this.prisma.user.create({
            data,
        });
    }
    async findUserByPhoneNumber(phoneNumber) {
        const user = await this.prisma.user.findUnique({
            where: { phoneNumber },
        });
        return user;
    }
    async getAllUsers() {
        return await this.prisma.user.findMany();
    }
    async validatePassword(enteredPassword, userPassword) {
        return enteredPassword === userPassword;
    }
};
AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthRepository);
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map