import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
}
