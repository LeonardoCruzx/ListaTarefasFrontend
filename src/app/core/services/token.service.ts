import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


const KEYTOKEN = 'authToken';
const KEYTOKENREFRESH = 'refreshToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  authResult(authResult){
    window.localStorage.setItem(KEYTOKENREFRESH,JSON.stringify(authResult.refresh));
    window.localStorage.setItem(KEYTOKEN,JSON.stringify(authResult.access));
    const d = new Date(0);
    d.setUTCSeconds(this.decodePayloadJWT().exp)
    window.localStorage.setItem("expires_at",JSON.stringify(d));
  }
  setToken(data){
    window.localStorage.setItem(KEYTOKEN,JSON.stringify(data.access));
    const d = new Date(0);
    d.setUTCSeconds(this.decodePayloadJWT().exp)
    window.localStorage.setItem("expires_at",JSON.stringify(d));
  }

  getToken(){
    return JSON.parse(window.localStorage.getItem(KEYTOKEN));
  }

  getRefreshToken(){
    return JSON.parse(window.localStorage.getItem(KEYTOKENREFRESH));
  }

  getExpiration(){
    return JSON.parse(localStorage.getItem("expires_at"));
  }

  logout(){
    window.localStorage.removeItem(KEYTOKEN);
    window.localStorage.removeItem(KEYTOKENREFRESH);
  }

  isLogged(){
    return !!window.localStorage.getItem(KEYTOKEN);
  }

  decodePayloadJWT(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }
}
