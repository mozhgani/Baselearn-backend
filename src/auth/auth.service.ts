// auth.service.ts
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "./auth.repository";
import { Strategy } from "passport-local";
import * as passport from "passport";
import { validate } from "class-validator";
import { RegisterUserPhoneNumberDto } from "./dto/register-user-phonenumber-request.dto";
import { FetchService } from "nestjs-fetch";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";
import { CreateUserDtoResponse } from "./dto/create-user-response.dto";
import axios from "axios";
import { ValidateOtpCodeRequest } from "./dto/validate-otp-request.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authRepo: AuthRepository
  ) {
    passport.use(
      new Strategy(async (phoneNumber, done) => {
        try {
          const user = await this.authRepo.findUserByPhoneNumber(phoneNumber);

          if (!user) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      })
    );
  }

  async createToken(phoneNumber: string, role: string): Promise<object> {
    const payload = { sub: phoneNumber, role };

    const token = this.jwtService.sign(payload);

    return {
      message: "logged in",
      role,
      token,
    };
  }

  async registerPhoneNumber(data: RegisterUserPhoneNumberDto) {
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
          "x-api-key":
            "XQyE9r8W621krxJAyRAzoyB59rtiAyclvrfhS2atD7ULbsEsk5MIyKLyvMXdfJPa",
        },
        data: dataStructure,
      };

      axios(config)
        .then(async function (response) {
          return JSON.stringify(response.data);
        })
        .catch(function (error) {
          return error;
        });
    } catch (error) {
      throw new Error(`Failed to POST data: ${error.message}`);
    }
  }

  async validateOtp(data: ValidateOtpCodeRequest) {
    return data;
  }

  async validateUserPhoneNumber(
    createUserDto: CreateUserDtoRequest
  ): Promise<void> {
    const errors = await validate(createUserDto);

    if (errors.length > 0) {
      throw new Error("validate errors");
    }
  }

  async getAllUsers() {
    return this.authRepo.getAllUsers();
  }

  async createUser(data: CreateUserDtoRequest) {
    const user = (await this.authRepo.createUser(
      data
    )) as CreateUserDtoResponse;

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

  async whoAmI(token: string) {
    try {
      const decodedToken = this.jwtService.verify(token);
      const phoneNumber = decodedToken.sub;
      console.log("phoneNumber", phoneNumber);
      const user = await this.authRepo.findUserByPhoneNumber(phoneNumber);
      console.log("useruseruser", user);

      if (!user) {
        throw new UnauthorizedException("User not found");
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }
  }
}
