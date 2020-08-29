import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { TokenService } from 'src/app/core/services/token.service';

const DETAIL_URL = 'http://127.0.0.1:8000/user/detail/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getUser(): Observable<User>{
    return this.http.get<User>(DETAIL_URL+ this.tokenService.decodePayloadJWT().id + "/");
  }
}
