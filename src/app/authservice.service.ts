
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import {environment} from '../environments/environment';
import { Storage } from '@ionic/storage-angular';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token='';
  constructor(private httpclient: HttpClient,private storage: Storage){

    this.storage.create();

  }

  connexionUser(user: any): Observable<any>{
    return this.httpclient.post<any>(environment.url + 'api/login', user);
  }



  loggedIn() {
    this.storage.get('token').then((val)=>{
      this.token=val;
});
return !!this.token;
  }


   }
