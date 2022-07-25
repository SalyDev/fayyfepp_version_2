import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  solde: BehaviorSubject<number> = new BehaviorSubject(0);


  // créer un user
  createUser(telephone: string, pin: string, prenom: string, nom: string)
  {
    const body = {
      "telephone": telephone,
      "password": pin,
      "prenom": prenom,
      "nom": nom
    }

    return this.http.post<any>(environment.backUrl+"api/users", body);
  }


  // fonction permettant de récupérer les infos du user par son tel
  getUserInfosByTel(telephone: string){
    return this.http.get<any>(environment.backUrl+"api/users/telephone/"+telephone)
  }
}
