import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/user-logged/interfaces/task';
import { TaskService } from 'src/app/user-logged/services/task.service';
import { CategoryService } from 'src/app/user-logged/services/category.service';

import { Category } from '../../../../interfaces/category';

import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit{

  @Input('task') task: Task;
  
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

  @Output() deleted = new EventEmitter<Task>();

  @ViewChild('check') check: ElementRef;

  categories: Category[];

  constructor(
    private renderer: Renderer2,
    private taskService: TaskService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
    ) { 
      
    }

  ngAfterViewInit(): void {
    if(this.task.concluded){
      this.renderer.setAttribute(this.check.nativeElement, "checked","checked");
    }
    setTimeout(() => {
      this.taskForm.patchValue({
        category: this.task.category,
        final_date: this.task.final_date,
        content:this.task.content})
    },)
  }

  concludeTask(value){
    if(value.checked){
      this.taskService.concluded("true", this.task.id).subscribe(
        success => {
          this.task = success;
        }
      );
    }else{
      this.taskService.concluded("false", this.task.id).subscribe(
        success => {
          this.task = success;
        }
      );
    }
  }

  deleteTask(){
    this.taskService.deleteTask(this.task.id).subscribe(
      success => {
        this.deleted.emit(this.task)
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
