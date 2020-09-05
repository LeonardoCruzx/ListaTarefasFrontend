import { Paginator } from '../interfaces/paginator';
import { Task } from '../interfaces/task';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from 'src/app/core/services/token.service';

import { environment } from '../../../environments/environment';


const LIST_URL = environment.baseUrl + '/task/list/';
const DETAIL_URL = environment.baseUrl + '/task/detail/';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getTasks(category: number = 0): Observable<Paginator<Task>>{
    if(category == 0){
      return this.http.get<Paginator<Task>>(LIST_URL + "?user=" + this.tokenService.decodePayloadJWT().user_id);
    }
    return this.http.get<Paginator<Task>>(LIST_URL + "?user=" + this.tokenService.decodePayloadJWT().user_id + "&category=" + category);
  }
  
  createTask(taskData){
    return this.http.post(LIST_URL, taskData);
  }

  concluded(concluded, taskId): Observable<Task>{
    return this.http.put<Task>(DETAIL_URL + taskId + "/", {"concluded": concluded})
  }

  deleteTask(taskId): Observable<any>{
    return this.http.delete(DETAIL_URL + taskId + "/");
  }

  updateTask(taskData: Task): Observable<Task>{
    return this.http.put<Task>(DETAIL_URL + taskData.id + "/", taskData)
  }
}
