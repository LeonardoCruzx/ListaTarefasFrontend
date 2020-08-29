import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css']
})
export class CreateTaskFormComponent implements OnInit {

  date = new Date(new Date().getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 16)

  constructor() { }

  ngOnInit(): void {
  }

}
