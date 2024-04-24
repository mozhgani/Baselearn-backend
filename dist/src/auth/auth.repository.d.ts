import { User } from "@prisma/client";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";
export declare class AuthRepository {
    private readonly prisma;
    constructor();
    createUser(data: CreateUserDtoRequest): Promise<object>;
    findUserByPhoneNumber(phoneNumber: string): Promise<User | null>;
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
    validatePassword(enteredPassword: string, userPassword: string): Promise<boolean>;
}
