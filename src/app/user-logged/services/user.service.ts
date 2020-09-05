import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { TokenService } from 'src/app/core/services/token.service';

import { environment } from '../../../environments/environment';

const DETAIL_URL = environment.baseUrl + '/user/detail/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getUser(): Observable<User>{
    return this.http.get<User>(DETAIL_URL+ this.tokenService.decodePayloadJWT().user_id + "/");
  }
}
