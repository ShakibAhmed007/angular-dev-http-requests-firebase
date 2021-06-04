import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepting all req --->>>', req);

    // modifying req based on requirements
    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'XYZ')
    });
    return next.handle(modifiedReq);
  }
}
