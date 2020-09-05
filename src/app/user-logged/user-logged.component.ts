import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.css']
})
export class UserLoggedComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getUser()
    .subscribe(
      success => {
        this.user = success;
      }
    )
  }

}
