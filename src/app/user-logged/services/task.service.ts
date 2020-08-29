import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const LIST_URL = 'http://127.0.0.1:8000/task/list/';
const DETAIL_URL = 'http://127.0.0.1:8000/task/detail/';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
  ) { }

  getTasks(): Observable<any>{
    return this.http.get(LIST_URL);
  }
  
  createTask(taskData){
    return this.http.post(LIST_URL, taskData);
  }
}
