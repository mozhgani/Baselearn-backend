import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class AddProductToCartRequest {
  @ApiProperty({
    description: "شناسه محصول - UUID",
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  productId: string;

  @ApiProperty({
    description: "شناسه کاربر - UUID",
  })
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;

  @ApiProperty({
    description: "تعداد محصول",
  })
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
