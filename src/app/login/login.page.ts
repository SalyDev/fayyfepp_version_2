import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { UserService } from '../_helpers/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerUserData = {
    telephone: '',
    password: ''
  };
  ngForm: any;

  getUserInfosByTel: any;
  constructor(private formBuilder: FormBuilder,private router: Router,private auth: AuthService, private storage: Storage,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.storage.create();
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
