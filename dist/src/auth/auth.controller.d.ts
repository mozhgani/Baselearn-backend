import { AuthService } from "./auth.service";
import { RegisterUserPhoneNumberDto } from "./dto/register-user-phonenumber-request.dto";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";
import { ValidateOtpCodeRequest } from "./dto/validate-otp-request.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    registerPhoneNumber(payload: RegisterUserPhoneNumberDto): Promise<{
        expireTime: number;
    }>;
    registerSendOtp(data: ValidateOtpCodeRequest): Promise<ValidateOtpCodeRequest>;
    registerCreateUser(payload: CreateUserDtoRequest): Promise<{
        message: string;
        token: any;
        user: import("./dto/create-user-response.dto").CreateUserDtoResponse;
    }>;
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
    whoAmI(req: any): Promise<{
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
