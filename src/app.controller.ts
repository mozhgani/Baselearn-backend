import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Packages = @types/passport-jwt ,nodemon , @types/passport-local , jwt , bcrypt , class-validator
// https://github.com/sunilpie1997/Ecommerce-Rest-Api-NestJs/blob/master/server/package.json
