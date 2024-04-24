import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "./auth.repository";
import { RegisterUserPhoneNumberDto } from "./dto/register-user-phonenumber-request.dto";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";
import { CreateUserDtoResponse } from "./dto/create-user-response.dto";
import { ValidateOtpCodeRequest } from "./dto/validate-otp-request.dto";
export declare class AuthService {
    private readonly jwtService;
    private readonly authRepo;
    constructor(jwtService: JwtService, authRepo: AuthRepository);
    createToken(phoneNumber: string, role: string): Promise<object>;
    registerPhoneNumber(data: RegisterUserPhoneNumberDto): Promise<void>;
    validateOtp(data: ValidateOtpCodeRequest): Promise<ValidateOtpCodeRequest>;
    validateUserPhoneNumber(createUserDto: CreateUserDtoRequest): Promise<void>;
    getAllUsers(): Promise<{
        userId: string;
        fullname: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Roles;
        address: string;
        city: string;
        PostalCode: number;
        email: string;
    }[]>;
    createUser(data: CreateUserDtoRequest): Promise<{
        message: string;
        token: any;
        user: CreateUserDtoResponse;
    }>;
    whoAmI(token: string): Promise<{
        userId: string;
        fullname: string;
        phoneNumber: string;
        createdAt: Date;
        updatedAt: Date;
        role: import(".prisma/client").$Enums.Roles;
        address: string;
        city: string;
        PostalCode: number;
        email: string;
    }>;
}
