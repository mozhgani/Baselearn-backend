// response-formatting.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class ResponseFormattingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Intercept the response and format it according to your needs
    return next.handle().pipe(
      map((data) => {
        return {
          status: data.status,
          data,
        };
      })
    );
  }
}
