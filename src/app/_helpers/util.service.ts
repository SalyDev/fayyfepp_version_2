import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UtilService {
  onComptesChanged: BehaviorSubject<any> = new BehaviorSubject("");


  constructor(private http: HttpClient, private toastController: ToastController) { }

  getMobileMoneys() {
    return this.http.get<any>(environment.backUrl+"api/mobile_infos");
  }

  comptes: any[] = [];

  public addCompte(account): Promise<any>{
    return new Promise((resolve, reject) => {
    {
      // account.client = this.user.uid;
      //resolve(true);
      this.comptes.push(account)
      this.onComptesChanged.next(this.comptes);
      resolve(account);
    }
      (error: any) => {
        reject(error);
      }
    },
    
    );
  }

  // icon=success, icon=error
 

  public async showSuccessToast(msg="") {
    const toast = await this.toastController.create({
      color: 'success',
      duration: 3000,
      message: msg,
      icon: 'checkmark-circle-outline',
      position: "middle",

    });

    await toast.present();
  }


  public async showErrorToast(msg="") {
    const toast = await this.toastController.create({
      color: 'danger',
      duration: 3000,
      message: msg,
      position: "middle",

    });

    await toast.present();
  }

  
}
