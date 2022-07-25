import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../authservice.service';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


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


  constructor(private formBuilder: FormBuilder,private router: Router,private auth: AuthService, private storage: Storage
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
