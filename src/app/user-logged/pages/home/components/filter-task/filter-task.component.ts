import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/user-logged/interfaces/category';
import { CategoryService } from 'src/app/user-logged/services/category.service';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent implements OnInit {

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories()
      .subscribe(
        success =>{
          this.categories = success.results
        }
      )
  }

}
