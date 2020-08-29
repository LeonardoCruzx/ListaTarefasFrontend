import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paginator } from '../interfaces/paginator';
import { Category } from '../interfaces/category';

const LIST_URL = 'http://127.0.0.1:8000/core/list/';

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
