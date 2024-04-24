import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { ResponseFormattingInterceptor } from "./response-formatting.interceptor";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ProductModule } from "./product/product.module";
import { CartModule } from "./cart/cart.module";
import { MerchantModule } from "./merchant/merchant.module";
import { ArticleModule } from "./article/article.module";
import { CourseModule } from "./course/course.module";

@Module({
  controllers: [AppController],
  providers: [
    AppService,
        {
      provide: APP_INTERCEPTOR,
      useClass: ResponseFormattingInterceptor,
    },
  ],
  imports: [
    AuthModule,
    ProductModule,
    CartModule,
    MerchantModule,
    ArticleModule,
    CourseModule,
  ],
})
export class AppModule {}
