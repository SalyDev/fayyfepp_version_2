import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { UtilService } from '../_helpers/util.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {

  modalOpened = false;
  selectedMoyen: any;

  compteForm: FormGroup;
  showSuccess = false;

  comptes: any[] = [];

  mobiles: any[];

  // mobiles = [{"nom":"OM", "number": 1, "logo": "assets/images/mobile-money/OM2X.png"}]
  constructor(
    private _formBuilder: FormBuilder,
    private utilService: UtilService,
    private loadingController: LoadingController,
    private alertController: AlertController

  ) { }

  ngOnInit() {
    this.getMobilesMoney();


    
  }

  getMobilesMoney()
  {
    this.utilService.getMobileMoneys().subscribe(
      (data)=>{
        console.log(data);
        this.mobiles = data;
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  addMoyen(moyen) {
    this.modalOpened = true;
    this.selectedMoyen = moyen;
    //if(this.selectedMoyen.type === 'mobile'){
      this.compteForm = this._formBuilder.group({
        numero: ['', Validators.required],
        montant: ['', Validators.required],
        moyen: [moyen.id, Validators.required],
      });
      // console.log('compteForm', this.compteForm);
   // }
  }

  isCompteAdded(moyen): boolean{
    this.utilService.onComptesChanged.subscribe(
      (data)=>{
        this.comptes = data;
        // console.log(data);
      },
      (error)=>console.log(error)
    )
    if(this.comptes && this.comptes.length > 0){
      return this.comptes.find((c:any) => c.moyen === moyen.id);
    }
    else{
      return false;
    }
  }
  

  saveCompte(){
    console.log("hello");
    this.loadingController.create({
      cssClass:'loading-panel',
      message:'Ajout de votre solde...'
    }).then((loading)=>{
      loading.present();
      const compte = this.compteForm.value;
      console.log(compte);
      this.utilService.addCompte(compte)
      .then((response) => {
        console.log(response);
        loading.dismiss();
        console.log('response', response);
        this.modalOpened = false;
        this.showSuccess = true;
      })
      .catch((error) =>{
        console.log(error)
        loading.dismiss();
        this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alert',
          message: 'Une erreur est survenue',
          buttons: ['OK']
        })
        .then((alert) =>{
          alert.present();
        });
      });
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  

}
