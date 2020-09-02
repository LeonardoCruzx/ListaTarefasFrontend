import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Task } from 'src/app/user-logged/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements AfterViewInit {

  @Input('task') task: Task;

  @ViewChild('check') check: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if(this.task.concluded_date && new Date(this.task.concluded_date) < new Date(this.task.final_date)){
      this.renderer.setAttribute(this.check.nativeElement, "checked","checked");
    }
  }
}
