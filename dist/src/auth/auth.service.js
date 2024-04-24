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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_repository_1 = require("./auth.repository");
const passport_local_1 = require("passport-local");
const passport = require("passport");
const class_validator_1 = require("class-validator");
const axios_1 = require("axios");
let AuthService = class AuthService {
    constructor(jwtService, authRepo) {
        this.jwtService = jwtService;
        this.authRepo = authRepo;
        passport.use(new passport_local_1.Strategy(async (phoneNumber, done) => {
            try {
                const user = await this.authRepo.findUserByPhoneNumber(phoneNumber);
                if (!user) {
                    return done(null, false);
                }
                return done(null, user);
            }
            catch (error) {
                return done(error, false);
            }
        }));
    }
    async createToken(phoneNumber, role) {
        const payload = { sub: phoneNumber, role };
        const token = this.jwtService.sign(payload);
        return {
            message: "logged in",
            role,
            token,
        };
    }
    async registerPhoneNumber(data) {
        console.log("datadatadatadatadata", data.phonenumber);
        try {
            const dataStructure = JSON.stringify({
                mobile: data.phonenumber,
                templateId: 737963,
                parameters: [
                    {
                        name: "CODE",
                        value: "93248",
                    },
                ],
            });
            const config = {
                method: "post",
                url: "https://api.sms.ir/v1/send/verify",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "text/plain",
                    "x-api-key": "XQyE9r8W621krxJAyRAzoyB59rtiAyclvrfhS2atD7ULbsEsk5MIyKLyvMXdfJPa",
                },
                data: dataStructure,
            };
            (0, axios_1.default)(config)
                .then(async function (response) {
                return JSON.stringify(response.data);
            })
                .catch(function (error) {
                return error;
            });
        }
        catch (error) {
            throw new Error(`Failed to POST data: ${error.message}`);
        }
    }
    async validateOtp(data) {
        return data;
    }
    async validateUserPhoneNumber(createUserDto) {
        const errors = await (0, class_validator_1.validate)(createUserDto);
        if (errors.length > 0) {
            throw new Error("validate errors");
        }
    }
    async getAllUsers() {
        return this.authRepo.getAllUsers();
    }
    async createUser(data) {
        const user = (await this.authRepo.createUser(data));
        let token;
        if (user) {
            token = await this.createToken(user.phoneNumber, user.role);
        }
        return {
            message: "user created",
            token: token.token,
            user,
        };
    }
    async whoAmI(token) {
        try {
            const decodedToken = this.jwtService.verify(token);
            const phoneNumber = decodedToken.sub;
            console.log("phoneNumber", phoneNumber);
            const user = await this.authRepo.findUserByPhoneNumber(phoneNumber);
            console.log("useruseruser", user);
            if (!user) {
                throw new common_1.UnauthorizedException("User not found");
            }
            return user;
        }
        catch (error) {
            throw new common_1.UnauthorizedException("Invalid token");
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_repository_1.AuthRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map