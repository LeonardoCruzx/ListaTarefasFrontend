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

  @Output() updated = new EventEmitter<Task[]>();

  @ViewChild('check') check: ElementRef;

  @ViewChild('closeButton') closeButton: ElementRef;

  categories: Category[];

  date = new Date(new Date().getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 16)

  constructor(
    private renderer: Renderer2,
    private taskService: TaskService,
    private categoryService: CategoryService,
    ) { 
      
    }

  ngAfterViewInit(): void {
    this.concludedAt();

    if(this.task.final_date !== null){
      let date = new Date(this.task.final_date);
      var isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().slice(0,16);
    }else{
      isoDateTime = null;
    }
    
    
    setTimeout(() => {
      this.taskForm.patchValue({
        category: this.task.category,
        final_date: isoDateTime,
        content:this.task.content})
    },)
  }

  onSubmit(taskData){
    taskData.id = this.task.id;
    if(this.task.final_date === null){
      delete taskData.final_date
    }
    try{
      taskData.final_date = new Date(taskData.final_date).toISOString();
    }catch(e){
      if(e instanceof RangeError){
        delete taskData.final_date;
      }
    }

    this.taskService.updateTask(taskData).subscribe(
      success => {
        this.closeButton.nativeElement.click()
        this.updated.emit([success as Task, this.task]);
        this.task = success
      }
    );
  }

  concludeTask(value){
    let checked = value.checked ? "true" : "false"
    this.taskService.concluded(checked, this.task.id).subscribe(
      success => {
        this.updated.emit([success as Task, this.task]);
        this.task = success;
      }
    );
    
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

  concludedAt(){
    if(this.task.concluded){
      this.renderer.setAttribute(this.check.nativeElement, "checked","checked");
    }
  }

}
