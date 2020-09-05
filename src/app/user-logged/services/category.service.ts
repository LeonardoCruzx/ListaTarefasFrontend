import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from '../interfaces/paginator';
import { Category } from '../interfaces/category';

import { environment } from '../../../environments/environment';

const LIST_URL = environment.baseUrl +'/core/list/';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<Paginator<Category>>{
    return this.http.get<Paginator<Category>>(LIST_URL);
  }
}
