import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/user-logged/interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input('task') task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
