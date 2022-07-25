import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  onComptesChanged: BehaviorSubject<any> = new BehaviorSubject("");



  constructor(private http: HttpClient, private toastController: ToastController, private userService: UserService) { }

  getMobileMoneys() {
    return this.http.get<any>(environment.backUrl + "api/type_mobile_moneys");
  }

  comptes: any[] = [];

  public addCompte(account: any): Promise<any> {
    return new Promise((resolve, reject) => {
      // account.client = this.user.uid;
      // on doit ajouter les infos dans le compte_mobile_money du client
      console.log("add compte");
      console.log(account);
      this.comptes.push(account);
      this.onComptesChanged.next(this.comptes);

      // on ajoute le montant dans le compte mobile money du client
      // montant => account.montant
      // on récupère le solde actuel
      this.userService.solde.subscribe(
        (solde)=>{
          console.log(parseFloat(account.montant));
          let new_solde = solde + parseFloat(account.montant);
          this.userService.solde.next(new_solde);
        },
        (error)=>{
          console.log(error);
        }
      )
      
      
      resolve(true);
    
    });
  }



  // icon=success, icon=error


  public async showSuccessToast(pos: any, msg = "",) {
    const toast = await this.toastController.create({
      color: 'success',
      duration: 3000,
      message: msg,
      icon: 'checkmark-circle-outline',
      position: pos,

    });

    await toast.present();
  }


  public async showErrorToast(pos: any, msg = "",) {
    const toast = await this.toastController.create({
      color: 'danger',
      duration: 3000,
      message: msg,
      position: pos,

    });

    await toast.present();
  }

  // fonction permettant de paramétrer le compte mobile money d'un client
  setClientMobileMoneyAccount()
  {
    // on verifie si le compte du client ajouté 
    // s'il existe déjà avec le tel et type_de_compte


    // 
  }

  // fonction permettant de verifier si un compte existe déja
  isCompteMobileMoneyExist()
  {
    // on teste avec le num, l'utilisateur et le type_de_mobile_money
    // si oui on fait le cumul avec le solde existant
    // sinon on créé le compte
    
  }


}
