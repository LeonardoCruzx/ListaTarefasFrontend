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

  getTasks(){
    this.taskService.getTasks()
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

}
