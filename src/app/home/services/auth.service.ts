import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

const AUTH_URL = environment.baseUrl + '/user/auth/';
const REFRESH_URL = environment.baseUrl + '/user/auth/refresh/';
const SINGUP_URL = environment.baseUrl + '/user/list/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    ){}

  authenticate(email: string, password: string){
    email = email.toLowerCase();
    return this.http.post(AUTH_URL,{email,password});
  }

  refresh(token:string){
    return this.http.post(REFRESH_URL,{refresh:token})
  }
  signUp(email: string, password: string){
    email = email.toLowerCase();
    return this.http.post(SINGUP_URL,{email,password});
  }
}
