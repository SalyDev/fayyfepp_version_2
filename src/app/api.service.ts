import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: any;
  onUserChanged: BehaviorSubject<any>;
  comptes: any[];
  onComptesChanged: BehaviorSubject<any>;

  transactions: any[];
  onTransactionsChanged: BehaviorSubject<any>;

  // for transferts managemenet
  onContactChanged: BehaviorSubject<any>;
  onMoyenChanged: BehaviorSubject<any>;

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) {

    this.onComptesChanged = new BehaviorSubject([]);
    this.onTransactionsChanged = new BehaviorSubject([]);
    this.onContactChanged = new BehaviorSubject(null);
    this.onMoyenChanged = new BehaviorSubject(null);
  }



  logout(): void{
    localStorage.removeItem('client');
    this.user = null;
    this.onUserChanged.next(null);
    this.router.navigate(['login']);
  }

  // public addCompte(account): Promise<any>{
  //   return new Promise((resolve, reject) => {
  //     account.client = this.user.uid;
  //     //resolve(true);
  //     this.httpClient.post(environment.apiUrl + 'comptes/', account)
  //       .subscribe((response: any) => {
  //         if (response) {
  //           this.comptes.push(response);
  //           this.onComptesChanged.next(this.comptes);
  //           resolve(response);
  //         }
  //         else{
  //           reject(null);
  //         }
  //       }, error => {
  //         reject(error);
  //       });
  //   });
  // }



  // public doTransfert(transfert): Promise<any>{
  //   return new Promise((resolve, reject) => {
  //     transfert.client = this.user.uid;
  //     //resolve(true);
  //     this.httpClient.post(environment.apiUrl + 'transferts/', transfert)
  //       .subscribe((response: any) => {
  //         if (response) {
  //           resolve(response);
  //         }
  //         else{
  //           reject(null);
  //         }
  //       }, error => {
  //         reject(error);
  //       });
  //   });
  // }
}
