import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks();
    
  }

  getTasks(category?: number){
    console.log(category);
    
    this.taskService.getTasks(category)
      .subscribe(
        success => {
          this.tasks = success.results;
        }
      )
  }
  
  onDeleteTask(task: Task){
    let i = this.tasks.indexOf(task);
    this.tasks.splice(i,1);
  }

  onCreateTask(task: Task){
    this.tasks.unshift(task);
  }

  onUpdateTask(tasks: Task[]){
    let i = this.tasks.indexOf(tasks[1]);
    this.tasks[i] = tasks[0];
  }

  onFilterTask(category: number){
    this.getTasks(category);
  }

}
