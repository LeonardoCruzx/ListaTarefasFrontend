import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { AuthService } from 'src/app/home/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
    ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if ( this.tokenService.isLogged()){
      let a = new Date(this.tokenService.getExpiration());
      let b = new Date();
      if(a <= b){

        this.authService.refresh(this.tokenService.getRefreshToken())
          .subscribe(
            success => {
              this.tokenService.setToken(success)
              return true;
            },
            error => {
              return false;
            }
          )
          
      }
      return true;
      
    }
    this.router.navigate(['/home']);
    return false;

  }
  
}
