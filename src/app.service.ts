import { Injectable } from "@nestjs/common";
import { FetchService } from "nestjs-fetch";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
