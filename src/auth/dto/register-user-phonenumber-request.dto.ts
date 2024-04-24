import { ApiProperty } from "@nestjs/swagger";
import {
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsMobilePhone,
} from "class-validator";

export class RegisterUserPhoneNumberDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phonenumber: string;
}
