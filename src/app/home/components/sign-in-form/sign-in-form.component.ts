import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/services/token.service';
import { AuthService } from '../../services/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService
    ) { }
    
  ngOnInit(): void {
  }

  onSubmit(userData){
    this.tokenService.logout()
    this.authService.authenticate(userData.email,userData.password)
      .subscribe(
          success => {
            this.tokenService.authResult(success),
            this.router.navigate(['/user'])
          },
          error => this.signInForm.setErrors({login: error["error"]})
        );
  }

}
