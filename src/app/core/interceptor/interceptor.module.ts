
import { NgModule, Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject} from 'rxjs/';

import { catchError, switchMap, filter, take } from 'rxjs/operators';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenService } from '../services/token.service';
import { AuthService } from 'src/app/home/services/auth.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  private refreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenService: TokenService,
    private authService: AuthService
    ) {
      
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    req = this.addAuthenticationToken(req);
    return next.handle(req).pipe(
      catchError((error) => {

        if(!this.refreshing){
          this.refreshing = true;
          this.refreshTokenSubject.next(null);
          req = this.addAuthenticationToken(req)

          return this.authService.refresh(this.tokenService.getRefreshToken())
            .pipe(
              switchMap((token: any) => {
                this.refreshing = false
                this.tokenService.setToken(token)
                this.refreshTokenSubject.next(token)
                return next.handle(this.addAuthenticationToken(req))
              })
            );
    
        }else{
          return this.refreshTokenSubject.pipe(
            filter(token => (token != null && token != undefined)),
            take(1),
            switchMap(() => {
              return next.handle(this.addAuthenticationToken(req))
            }
          ));
          
        }
      })
    )
    
  }
  addAuthenticationToken(request) {
    const accessToken = this.tokenService.getToken();
    if (!accessToken) {
        return request;
    }
    return request.clone({
        setHeaders: {
            Authorization: 'Bearer ' + this.tokenService.getToken()
        }
    });
}
}


@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
    },
  ],
})

export class Interceptor { }