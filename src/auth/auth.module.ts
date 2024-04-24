// auth.module.ts
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt/jwt.strategy";
import { AuthRepository } from "./auth.repository";
import { LocalAuthGuard } from "./gaurd/local-auth-gaurd";
import { JwtAuthGuard } from "./jwt/jwt-auth.gaurd";
import { RolesGuard } from "./role/roles.guard";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: "nima123",
      signOptions: { expiresIn: "48h" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthRepository,
    LocalAuthGuard,
    RolesGuard,
    JwtAuthGuard,
    JwtStrategy,
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
