import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http: HttpClient) { }

  // créer un compte pour un utilisateur avec solde = 0 et un user
  createCompte(idUser: number)
  {
    const body={
      "user": {
        "id": idUser
      }
    };
    return this.http.post<any>(environment.backUrl+"api/comptes", body);
  }

  // modifier le solde d'un compte
  modifyCompteSolde(id: number, solde: number)
  {
    const body = {
      "solde": solde
    }
    
    return this.http.put<any>(environment.backUrl+'api/comptes/'+id, body);
  }



}
