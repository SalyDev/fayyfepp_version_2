import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {Storage} from '@ionic/storage';
import { AuthService } from './authservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
token='';
  constructor(private auth: AuthService, private router: Router,private storage: Storage){
    this.storage.create();
  }
  canActivate(): boolean{
    if (this.auth.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login'] );
      return false;
    }
    this.storage.get('token').then((val)=>{
      this.token=val;
      return (!!this.token);
});
  }

}
