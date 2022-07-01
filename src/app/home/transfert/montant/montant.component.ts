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
  moyen: any;

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

}
