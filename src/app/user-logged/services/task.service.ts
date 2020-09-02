import { Paginator } from '../interfaces/paginator';
import { Task } from '../interfaces/task';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';


const LIST_URL = 'http://127.0.0.1:8000/task/list/';
const DETAIL_URL = 'http://127.0.0.1:8000/task/detail/';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getTasks(category: Number = 0): Observable<Paginator<Task>>{
    if(category === 0){
      return this.http.get<Paginator<Task>>(LIST_URL + "?user=" + this.tokenService.decodePayloadJWT().user_id);
    }
    return this.http.get<Paginator<Task>>(LIST_URL + "?user=" + this.tokenService.decodePayloadJWT().user_id + "&category=" + category);
  }
  
  createTask(taskData){
    return this.http.post(LIST_URL, taskData);
  }

  concluded(concluded, id): Observable<Task>{
    return this.http.put<Task>(DETAIL_URL + id + "/", {"concluded": concluded})
  }
}
