import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './authservice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements  OnInit {

  user: any;
  public appPages = [
    { title: 'Transactions', url: '/folder/Inbox', icon: 'sync-outline' },
    { title: 'Mes comptes', url: '/comptes', icon: 'settings-outline' },
    { title: 'Sécurité', url: '/folder/Outbox', icon: 'lock-closed-outline' },
    { title: 'Automatisations', url: '/folder/Favorites', icon: 'git-network-outline' },
    { title: 'Rappels', url: '/folder/Archived', icon: 'archive' },
  ];
  registerUserData = {
    telephone: '',
    password: ''
  };

  constructor(
    private router:  Router, private storage: Storage,private auth: AuthService

  ) {
  }

  ngOnInit(){


  }
// eslint-disable-next-line @typescript-eslint/naming-convention
LogOut(){

  this.storage.set('token', '');
  this.router.navigate(['login']);


}
registerUser() {
  console.log(this.registerUserData);
      this.auth.connexionUser(this.registerUserData)
        .subscribe(
          res => {
            console.log(res);
            this.storage.set('token', res.token);
            this.storage.get('token').then((val) => {
              console.log(val);
            });
          },
          (error)=>{
            console.log(error);
          }
        );
        if (this.auth.loggedIn()){
          this.router.navigate(['home'] );
        }
        else {(this.router.navigate(['login'] ));};
    }

}


