import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompteService } from '../_helpers/compte.service';
import { UserService } from '../_helpers/user.service';
import { UtilService } from '../_helpers/util.service';

@Component({
  selector: 'app-confirmation-code-pin',
  templateUrl: './confirmation-code-pin.page.html',
  styleUrls: ['./confirmation-code-pin.page.scss'],
})
export class ConfirmationCodePinPage implements OnInit {

  pinForm: FormGroup;
  subTitle: string;
  telephone: string;
  pin: string;
  prenom: string;
  nom: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private utilService: UtilService,
    private userService: UserService,
    private compteService: CompteService
    ) { 
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.telephone){
        //
        this.telephone = this.router.getCurrentNavigation().extras.state.telephone;
        console.log(this.router.getCurrentNavigation().extras.state.telephone);
      }
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.pin){
        //
        this.pin = this.router.getCurrentNavigation().extras.state.pin;
        console.log(this.router.getCurrentNavigation().extras.state.pin);
      }
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.prenom){
        //
        this.prenom = this.router.getCurrentNavigation().extras.state.prenom;
      }
      if(this.router.getCurrentNavigation().extras.state && this.router.getCurrentNavigation().extras.state.nom){
        //
        this.nom = this.router.getCurrentNavigation().extras.state.nom;
      }
      // if(this.router.getCurrentNavigation().extras.state.subTitle){
      //   //
      //   this.subTitle = this.router.getCurrentNavigation().extras.state.subTitle;
      //   console.log(this.router.getCurrentNavigation().extras.state.subTitle);
      // }
    }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.pinForm = this.formBuilder.group({
      c1: ['', Validators.required],
      c2: ['', Validators.required],
      c3: ['', Validators.required],
      c4: ['', Validators.required],
      c5: ['', Validators.required],
      c6: ['', Validators.required]
    });
  }

  onSubmit()
  {
    const confirmPin = this.pinForm.controls.c1.value + this.pinForm.controls.c2.value + this.pinForm.controls.c3.value + this.pinForm.controls.c4.value + this.pinForm.controls.c5.value + this.pinForm.controls.c6.value;
    if(this.pinForm.valid){
      if(confirmPin==this.pin)
      {
        // codes pin identiques
        this.utilService.showSuccessToast("bottom","Code PIN confirmé")
  
        // on redirige l'utilisateur vers l'accueil ( ou la connexion)
        // this.router.navigate(['/home'], { state: { telephone : this.telephone, nom : this.nom,  prenom : this.prenom} });
        
        this.router.navigate(['/login'])
        // console.log(this.telephone);
        console.log(confirmPin);
        console.log(this.telephone);
        console.log(this.prenom);
        console.log(this.nom);
        // return;
        // on enregistre l'utilisateur dans la base de données
        this.userService.createUser(this.telephone, confirmPin, this.prenom, this.nom).subscribe(
          (data: any)=>{
            console.log(data)
            // on creer un wallet fayyfepp avec 0Fcfa pour cet user
            this.compteService.createCompte(data.id).subscribe(
              (data)=>console.log(data),
              (error)=>console.log(error)
            )

          },
          (error)=>{console.log(error)}
        )
      }
      else{
        this.utilService.showErrorToast("bottom","Codes PIN non identiques");
      }
    }
   

    // this.router.navigate(['/code-pin'], { state: { telephone : this.telephone, subTitle : "Confirmer votre code PIN" } });
  }

}

