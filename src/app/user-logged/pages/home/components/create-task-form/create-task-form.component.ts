import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CategoryService } from '../../../../services/category.service';
import { TaskService } from '../../../../services/task.service';
import { Category } from '../../../../interfaces/category';

import {FormControl, Validators, FormGroup} from '@angular/forms';

import { Task } from 'src/app/user-logged/interfaces/task';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  @Output() created = new EventEmitter<Task>();

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
    private categoryService: CategoryService,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(taskData){
    try{
      taskData.final_date = new Date(taskData.final_date).toISOString();
    }catch(e){
      if(e instanceof RangeError){
        delete taskData.final_date;
      }
    }
    this.taskService.createTask(taskData).subscribe(
      success => {
        this.created.emit(success as Task);
      }
    );

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
