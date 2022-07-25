import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

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
