import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
 
  constructor( private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.loginForm = this.formBuilder.group({
      numero: ['', Validators.required],
      nom: ['', Validators.required]
    });
  }

}
