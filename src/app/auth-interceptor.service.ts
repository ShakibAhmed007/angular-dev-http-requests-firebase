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
    console.log('Intercepting all req --->>>', modifiedReq);
    return next.handle(modifiedReq).pipe(
      tap(event => {
        console.log('response intercept --- >>>', event);
        if (event.type === HttpEventType.Response) {
          console.log('response --- >>>', event.body);
        }
      })
    );
  }
}
