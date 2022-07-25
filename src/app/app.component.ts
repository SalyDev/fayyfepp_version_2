import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './authservice.service';
import { UserService } from './_helpers/user.service';
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
    private router:  Router, private storage: Storage,private auth: AuthService, private userService: UserService

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
       this.router.navigate(['home'] );
       console.log(res);
       this.storage.clear();
       this.storage.set('token', res.token);
       this.storage.get('token').then((val) => {
         console.log(val);
         this.router.navigate(['home'] );

         // on récupère les infos du user par son tel
         this.userService.getUserInfosByTel(this.registerUserData.telephone).subscribe(
           (data: any)=>{
             this.userService.solde.next(data.compte.solde);
             console.log(data);
             this.storage.set('id', data.id);
             this.storage.set('compte_id', data.compte.id);
             this.storage.set('solde', data.compte.solde);
             this.storage.set('prenom', data.prenom);
             this.storage.set('nom', data.nom);
             this.storage.set('telephone', data.telephone);


console.log(data);


           },
           (error)=>{
             console.log(error);
           }
         );
       });
     },
     (error)=>{
       console.log(error);


     }
   );
   if (this.auth.loggedIn()){
     this.router.navigate(['home'] );
     this.storage.get('token').then((val) => {
       console.log(val);

     });
   }
   else {(this.router.navigate(['login'] ));};
}
}


