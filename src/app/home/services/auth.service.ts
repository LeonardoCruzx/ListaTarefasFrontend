import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


const AUTH_URL = 'http://192.168.0.106:8000/user/auth/';
const REFRESH_URL = 'http://192.168.0.106:8000/user/auth/refresh/';

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
}
