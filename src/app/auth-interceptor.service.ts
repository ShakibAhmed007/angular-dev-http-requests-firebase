import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import moduleWithProviders from '@angular/core/schematics/migrations/module-with-providers';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modifying req based on requirements
    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'XYZ')
    });
    return next.handle(modifiedReq);
  }
}
