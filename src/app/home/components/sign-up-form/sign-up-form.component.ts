import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormGroup} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('',[
      Validators.required
    ]),
    passwordTwo: new FormControl('',[
      Validators.required
    ]),
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(userData){
    if(userData.password == userData.passwordTwo){
      this.authService.signUp(userData.email,userData.password)
      .subscribe(
          success => {
            alert("usuario cadastrado com sucesso")
            this.router.navigate(['/home'])
          },
          error => {
            this.signUpForm.setErrors({signup: error["error"]})
            console.log(error);
            
          }
        );

    }else{
      this.signUpForm.setErrors({password_confirmation: "password confirmation wrong"})
    }
    
  }

}
