import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SendCodeService } from '../_helpers/send-code.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  signupForm: FormGroup;
  prenom: string;
  nom: string;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private sendCodeService: SendCodeService
    ) { 
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.prenom){
        //
        this.prenom = this.router.getCurrentNavigation().extras.state.prenom;
      }
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.nom){
        //
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
    }

  ngOnInit() {

    this.initForm();
  }

  initForm(){
    this.signupForm = this.formBuilder.group({
      telephone: ['', Validators.required],
      // nom: ['', Validators.required]
    });
  }

  onSubmit()
  {
    console.log(this.signupForm.controls.telephone.value);
    const clientNumber = "221"+this.signupForm.controls.telephone.value;
    // this.router.navigate(['/verification-otp'], { state: { telephone: this.signupForm.controls.telephone.value, pinId:  "00000"} })

    // console.log(clientNumber);
    this.sendCodeService.sendOTP(clientNumber).subscribe(
      (data: any)=>{
        console.log(data);
        console.log(data.pinId);
        this.router.navigate(['/verification-otp'], { state: {nom: this.nom, prenom: this.prenom, telephone: this.signupForm.controls.telephone.value, pinId:  data.pinId} })

        // data.pinId => est l'id du code
      },
      (error)=>{
        console.log(error)
      }
    )
    // this.router.navigate(['/verification-otp'], { state: { telephone: this.signupForm.controls.telephone.value } })
  }

  

  // sendOTPCode(){
    
  // }
  

}
