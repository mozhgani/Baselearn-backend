import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Matches } from "class-validator";

export class ValidateOtpCodeRequest {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^(09)\d{9}$/, {
    message: "Phone number must be 11 digits starting with 09",
  })
  phoneNumber: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  otp: string;
}
