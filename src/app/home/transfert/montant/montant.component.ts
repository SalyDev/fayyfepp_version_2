import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from 'src/app/api.service';
import { AppUtils } from 'src/app/app.utils';

@Component({
  selector: 'app-transfert-montant',
  templateUrl: './montant.component.html',
  styleUrls: ['./montant.component.scss'],
})
export class MontantComponent implements OnInit {

  user: any;
  comptes: any[] = [];
  principalCompte: any;
  principalOperateur: any;
  solde = 0;

  contact: any;
  moyen: any = {name:'OrangeMoney'};
  mobile: any;


  montantEnvoyeControl: FormControl;
  montantRecuControl: FormControl;
  montantEnvoye = 0;
  montantRecu = 0;
  frais = 0;
  fraisPercent: any;

  //
  dispatching: any[] = [];
  comptesToutConsomme: any[];
  montantDispatche = 0;

  isValid =false;
  erreur: any;
  interoperable = false;

  transfert: any;
  showSuccess = false;

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private loadingController: LoadingController,
    private alertController: AlertController
    ) {
      this.unsubscribeAll = new Subject();
    }

ngOnInit(): void {

}



  goToHomePage(): void{
    this.showSuccess=false;
    setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 300);
  }
  doTransfert(): void{

      this.loadingController.create({
        cssClass:'loading-panel',
        message:'envoie...'
      }).then();


  //     this.loadingController.create({
  //       cssClass:'loading-panel',
  //       message:'envoie...'
  //     })
  //     .then((loading)=>{
  //        loading.present();
  //        const dispatching = [];
  //        this.dispatching.forEach(element => {
  //          dispatching.push({
  //            moyen: element.compte.moyen,
  //            compte: element.compte.id,
  //            solde: element.compte.solde,
  //            montant: element.part,
  //            frais: element.frais
  //          });
  //        });
  //        if(this.interoperable === false){
  //         dispatching.push({
  //           moyen: this.moyen.id,
  //           compte: this.principalCompte.id,
  //           solde: this.principalCompte.solde,
  //           montant: this.montantEnvoyeControl.value,
  //           frais: this.frais
  //         });
  //        }
  //        const transfert = {
  //          destinataire: this.contact.numero,
  //          moyen: this.moyen.id,
  //          montant: this.montantEnvoyeControl.value,
  //          frais: this.frais,
  //          fraisPercent: this.interoperable === true? this.fraisPercent: this.moyen.frais,
  //          dispatching,
  //        };
  //       console.log('transfert',transfert);
  //       this.apiService.doTransfert(transfert)
  //         .then((response) => {
  //           loading.dismiss();
  //           console.log('response', response);
  //           this.showSuccess = true;
  //           this.transfert = response;
  //         })
  //         .catch((error) =>{
  //           console.log('errror', error);
  //           loading.dismiss();
  //           this.alertController.create({
  //             cssClass: 'my-custom-class',
  //             header: 'Alerte',
  //             message: 'Impossible de faire le transfert',
  //             buttons: ['OK']
  //           })
  //           .then((alert) =>{
  //             alert.present();
  //           });
  //         });
  //     });
  // }

}}
