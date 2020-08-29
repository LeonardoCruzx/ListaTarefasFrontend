import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../interfaces/category';

import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  taskForm = new FormGroup({
    category: new FormControl('', [
      Validators.required,
    ]),
    final_date: new FormControl('', [
      
    ]),
    content: new FormControl('',[
      Validators.required
    ])
  })

  categories: Category[];

  date = new Date(new Date().getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 16)

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(taskData){
    console.log(taskData);
    
  }

  getCategories(){
    this.categoryService.getCategories()
    .subscribe(
      success => {
        this.categories = success.results
      }
    )
  }


}
