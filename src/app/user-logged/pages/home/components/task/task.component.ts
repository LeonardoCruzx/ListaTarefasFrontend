import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/user-logged/interfaces/task';
import { TaskService } from 'src/app/user-logged/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit{

  @Input('task') task: Task;

  @Output() deleted = new EventEmitter<Task>();

  @ViewChild('check') check: ElementRef;

  constructor(
    private renderer: Renderer2,
    private taskService: TaskService,
    ) { }

  ngAfterViewInit(): void {
    if(this.task.concluded){
      this.renderer.setAttribute(this.check.nativeElement, "checked","checked");
    }
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

}
