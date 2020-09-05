import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/user-logged/interfaces/category';
import { CategoryService } from 'src/app/user-logged/services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-task',
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.css']
})
export class FilterTaskComponent implements OnInit {

  filterForm = new FormGroup({
    category: new FormControl('', [
      Validators.required,
    ])
  })

  @Output() filtered = new EventEmitter<number>();

  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(filterData){
    this.filtered.emit(filterData.category)
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
