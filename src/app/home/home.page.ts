import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, MenuController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from '../api.service';
import { AppUtils } from '../app.utils';
import { UserService } from '../_helpers/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('soldeModal', { static: false }) soldeModal: IonModal;

  user: any;
  qrcodeDatas: any;
  comptes: any[] = [];
  solde = this.userService.solde;
  soldeIsVisible = true;
  detailsSoldeVisible = false;
  soldeModalBreakpoints: any = [0, 0.3, 0.5, 0.8];

  nfIsActive = false;

  //home menu
  items: any[] = [
    {
      id: 'transfert',
      libelle: 'Transfert',
      logo: 'assets/images/home/transfert.png',
      pageUrl: 'transfert/contact'
    },
    {
      id: 'paiement',
      libelle: 'Paiement',
      logo: 'assets/images/home/paymenet.png',
      pageUrl: 'paiement'
    },
    {
      id: 'credit',
      libelle: 'Crédit',
      logo: 'assets/images/home/transfert.png'
    },
    {
      id: 'bank',
      libelle: 'Banque',
      logo: 'assets/images/home/transfert.png'
    },
    {
      id: 'collecte',
      libelle: 'Collecte',
      logo: 'assets/images/home/collectefond.png'
    },
    {
      id: 'ticket',
      libelle: 'Tickets',
      logo: 'assets/images/home/samatiket.png'
    },
  ];

  transactions: any[] = [];
  tLoader = false;

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private menu: MenuController,
    private apiService: ApiService,
    private userService: UserService
  ) {
    this.unsubscribeAll = new Subject();
   }

  ngOnInit() {

  }


  showSolde(): void{
    this.soldeIsVisible = true;
  }
  hideSolde(): void{
    this.soldeIsVisible = false;
  }

  showSoldeDetails(): void{
    this.detailsSoldeVisible = true;
    this.soldeModal.onWillDismiss().then(() => {
      this.detailsSoldeVisible = false;
    });
  }

  getMoyenPaiement(code): any {
    return AppUtils.getMoyenParCode(code);
  }

  rechargeComptes(){
    this.router.navigate(["/comptes"]);
  }

  // doService(service): void{
  //   if(service.id === 'transfert') {
  //     this.router.navigateByUrl('transfert');
  //   }
  // }

}
