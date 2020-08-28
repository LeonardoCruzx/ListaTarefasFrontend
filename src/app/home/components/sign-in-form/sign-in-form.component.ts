import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required
    ])
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(userData){
    
  }

}
