import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

import { IResponse } from '@monorepo-demo/common';

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    const response = context.switchToHttp().getResponse();
    return next.handle().pipe(
      map((data: T) => ({
        code: response.statusCode,
        data
      }))
    );
  }
}
