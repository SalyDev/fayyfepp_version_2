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
    this.getUser();

    this.onComptesChanged = new BehaviorSubject([]);
    this.onTransactionsChanged = new BehaviorSubject([]);
    this.onContactChanged = new BehaviorSubject(null);
    this.onMoyenChanged = new BehaviorSubject(null);
  }

  public getUser(): void{
    const currentClient = localStorage.getItem('client');
    if (currentClient) {
      this.user = JSON.parse(currentClient);
      this.onUserChanged = new BehaviorSubject(this.user);
      // this.getComptes();
    }
    else {
      this.user = null;
      this.onUserChanged = new BehaviorSubject(null);
    }
    this.user = {
      uid: 'ZfAwWfuIPhI5bCjTTibJ',
      nomComplet: 'Khady DIOP',
      pays: 'SN',
      telephone: '+221773242452'
    };
    this.onUserChanged.next(this.user);
  }



  logout(): void{
    localStorage.removeItem('client');
    this.user = null;
    this.onUserChanged.next(null);
    this.router.navigate(['login']);
  }
  public doTransfert(transfert): Promise<any>{
    return new Promise((resolve, reject) => {
      transfert.client = this.user.uid;
      //resolve(true);
      this.httpClient.post(environment.backUrl + 'transferts/', transfert)
        .subscribe((response: any) => {
          if (response) {
            resolve(response);
          }
          else{
            reject(null);
          }
        }, error => {
          reject(error);
        });
    });
  }


}
