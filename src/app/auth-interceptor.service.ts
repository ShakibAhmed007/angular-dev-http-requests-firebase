import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import moduleWithProviders from '@angular/core/schematics/migrations/module-with-providers';
import { Observable } from 'rxjs';

export class AuthInceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modifying req based on requirements
    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'XYZ')
    });
    console.log('Intercepting all req --->>>', modifiedReq);
    return next.handle(modifiedReq);
  }
}
