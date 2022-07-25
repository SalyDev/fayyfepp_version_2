import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserService } from '../_helpers/user.service';
import { UtilService } from '../_helpers/util.service';
import { Storage } from '@ionic/storage-angular';
import { CompteService } from '../_helpers/compte.service';


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
    private alertController: AlertController,
    private userService: UserService,
    private storage: Storage,
    private compteService: CompteService

  ) { 
    this.storage.create();
  }

  solde: number;

  ngOnInit() {
    this.getMobilesMoney();

    this.userService.solde.subscribe(
      (solde: number)=>{
        this.solde = solde;
      },
      (error)=>{
        console.log(error)
      }
    )


    
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
  

  new_solde = 0 ;
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
        console.log("hello");
        console.log(this.solde);
        this.solde = this.solde + parseFloat(compte.montant);
        // const new_solde = this.solde + parseFloat(compte.montant);
        this.new_solde = this.solde;
        

        // this.userService.solde.subscribe(
        //   (solde)=>{
        //     console.log(solde);
        //     if(compte.montant==null || compte.montant==""){
        //       compte.montant = "0";
        //     }
        //     // console.log(parseFloat(compte.montant));
        //     const new_solde = solde + parseFloat(compte.montant);
        //     this.new_solde = this.new_solde + new_solde;
        //     console.log(parseFloat(compte.montant));
        //     console.log(new_solde);
            
        //     // this.userService.solde.next(new_solde);
        //   },
        //   (error)=>{
        //     console.log(error);
        //   }
        // )
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

    // setTimeout(() => {
    //   this.userService.solde.next(this.new_solde);
    // }, 3000);

    // this.userService.solde.next(this.new_solde);

  }


  async terminer(){
      this.storage.remove("solde");
      this.storage.set('solde', this.new_solde);
      this.userService.solde.next(this.new_solde);

      const compte_id = await this.storage.get("compte_id");

      // on modifit le solde de l'utilisateur
      this.compteService.modifyCompteSolde(parseInt(compte_id), this.new_solde).subscribe(
        (data)=>{
          console.log(data);
        },
        (error)=>{
          console.log(error);
        }
      )

  }

  

}
