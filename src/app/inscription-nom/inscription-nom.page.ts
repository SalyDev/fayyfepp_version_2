import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendCodeService } from '../_helpers/send-code.service';

@Component({
  selector: 'app-inscription-nom',
  templateUrl: './inscription-nom.page.html',
  styleUrls: ['./inscription-nom.page.scss'],
})
export class InscriptionNomPage implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private sendCodeService: SendCodeService
    ) { }

    ngOnInit() {

      this.initForm();
    }
  
    initForm(){
      this.signupForm = this.formBuilder.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required]
        
        // nom: ['', Validators.required]
      });
    }

  onSubmit()
  {
    // this.router.navigate(['/verification-otp'], { state: { telephone: this.signupForm.controls.telephone.value, pinId:  data.pinId} })
    if(this.signupForm.valid)
    {
        this.router.navigate(['/inscription'], { state: { prenom: this.signupForm.controls.prenom.value, nom: this.signupForm.controls.nom.value} })
    }
   
  }
}
