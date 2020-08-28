
import { NgModule, Injectable } from '@angular/core';

import { Observable} from 'rxjs/';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenService } from '../services/token.service';
@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    ) {
      
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    let dupReq = req.clone();
    if(this.tokenService.getToken() != null){
      dupReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+ this.tokenService.getToken()),
      });
    }
    return next.handle(dupReq)
    
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