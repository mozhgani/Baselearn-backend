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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const swagger_1 = require("@nestjs/swagger");
const register_user_phonenumber_request_dto_1 = require("./dto/register-user-phonenumber-request.dto");
const jwt_auth_gaurd_1 = require("./jwt/jwt-auth.gaurd");
const roles_decorator_1 = require("./role/roles.decorator");
const roles_guard_1 = require("./role/roles.guard");
const create_user_request_dto_1 = require("./dto/create-user-request.dto");
const validate_otp_request_dto_1 = require("./dto/validate-otp-request.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async registerPhoneNumber(payload) {
        await this.authService.registerPhoneNumber(payload);
        return {
            expireTime: 160,
        };
    }
    async registerSendOtp(data) {
        return await this.authService.validateOtp(data);
    }
    async registerCreateUser(payload) {
        return await this.authService.createUser(payload);
    }
    async getAllUsers() {
        try {
            const result = await this.authService.getAllUsers();
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async whoAmI(req) {
        try {
            return await this.authService.whoAmI(req.headers.authorization.split(" ")[1]);
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)("register/send-otp"),
    (0, swagger_1.ApiOperation)({ summary: "Send Otp" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User registered successfully" }),
    (0, swagger_1.ApiBody)({
        type: register_user_phonenumber_request_dto_1.RegisterUserPhoneNumberDto,
        description: "test",
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_phonenumber_request_dto_1.RegisterUserPhoneNumberDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerPhoneNumber", null);
__decorate([
    (0, common_1.Post)("register/validate-otp"),
    (0, swagger_1.ApiOperation)({ summary: "Validate Otp Code" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User registered successfully" }),
    (0, swagger_1.ApiBody)({
        type: validate_otp_request_dto_1.ValidateOtpCodeRequest,
        description: "Validate Otp Code",
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_otp_request_dto_1.ValidateOtpCodeRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerSendOtp", null);
__decorate([
    (0, common_1.Post)("register/create-user"),
    (0, swagger_1.ApiOperation)({ summary: "Register a new user" }),
    (0, swagger_1.ApiResponse)({ status: 201, description: "User registered successfully" }),
    (0, swagger_1.ApiBody)({
        type: create_user_request_dto_1.CreateUserDtoRequest,
        description: "Registration information",
    }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_request_dto_1.CreateUserDtoRequest]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerCreateUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("Admin"),
    (0, common_1.Get)("users"),
    (0, swagger_1.ApiOperation)({ summary: "Get all users" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Successfully retrieved all users" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)("Customer"),
    (0, common_1.Get)("whoami"),
    (0, swagger_1.ApiOperation)({ summary: "who am i?" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Successfully retrieved all users" }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "whoAmI", null);
AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    (0, swagger_1.ApiTags)("Auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map