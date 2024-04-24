import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
  Param,
  Query,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./gaurd/local-auth-gaurd";
import {
  ApiTags,
  ApiResponse,
  ApiOperation,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { RegisterUserPhoneNumberDto } from "./dto/register-user-phonenumber-request.dto";
import { JwtAuthGuard } from "./jwt/jwt-auth.gaurd";
import { Roles } from "./role/roles.decorator";
import { RolesGuard } from "./role/roles.guard";
import { CreateUserDtoRequest } from "./dto/create-user-request.dto";
import { ValidateOtpCodeRequest } from "./dto/validate-otp-request.dto";
// import { Param } from '@nestjs/common';

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register/send-otp")
  @ApiOperation({ summary: "Send Otp" })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  @ApiBody({
    type: RegisterUserPhoneNumberDto,
    description: "test",
  })
  async registerPhoneNumber(
    @Body(new ValidationPipe({ transform: true }))
    payload: RegisterUserPhoneNumberDto
  ) {
    await this.authService.registerPhoneNumber(payload);

    return {
      expireTime: 160,
    };
  }

  @Post("register/validate-otp")
  @ApiOperation({ summary: "Validate Otp Code" })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  @ApiBody({
    type: ValidateOtpCodeRequest,
    description: "Validate Otp Code",
  })
  async registerSendOtp(
    @Body(new ValidationPipe({ transform: true })) data: ValidateOtpCodeRequest
  ) {
    return await this.authService.validateOtp(data);
  }

  @Post("register/create-user")
  @ApiOperation({ summary: "Register a new user" })
  @ApiResponse({ status: 201, description: "User registered successfully" })
  @ApiBody({
    type: CreateUserDtoRequest,
    description: "Registration information",
  })
  async registerCreateUser(
    @Body(new ValidationPipe({ transform: true }))
    payload: CreateUserDtoRequest
  ) {
    return await this.authService.createUser(payload);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("Admin")
  @Get("users")
  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, description: "Successfully retrieved all users" })
  async getAllUsers() {
    try {
      const result = await this.authService.getAllUsers();

      return result;
    } catch (error) {
      throw error;
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles("Customer")
  @Get("whoami")
  @ApiOperation({ summary: "who am i?" })
  @ApiResponse({ status: 200, description: "Successfully retrieved all users" })
  async whoAmI(@Request() req) {
    try {
      return await this.authService.whoAmI(
        req.headers.authorization.split(" ")[1]
      );
    } catch (error) {
      throw error;
    }
  }
}
