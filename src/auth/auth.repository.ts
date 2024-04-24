import { Injectable } from "@nestjs/common";
import { PrismaClient, User } from "@prisma/client";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";

@Injectable()
export class AuthRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: CreateUserDtoRequest): Promise<object> {
    return await this.prisma.user.create({
      data,
    });
  }

  async findUserByPhoneNumber(phoneNumber: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });
    return user;
  }

  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async validatePassword(
    enteredPassword: string,
    userPassword: string
  ): Promise<boolean> {
    return enteredPassword === userPassword;
  }
}
