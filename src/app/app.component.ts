import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements  OnInit {

  user: any;
  public appPages = [
    { title: 'Transactions', url: '/folder/Inbox', icon: 'sync-outline' },
    { title: 'Mes comptes', url: '/comptes', icon: 'settings-outline' },
    { title: 'Sécurité', url: '/folder/Outbox', icon: 'lock-closed-outline' },
    { title: 'Automatisations', url: '/folder/Favorites', icon: 'git-network-outline' },
    { title: 'Rappels', url: '/folder/Archived', icon: 'archive' },
  ];

  constructor(
    private router:  Router, private storage: Storage

  ) {
    this.storage.create();
  }

  prenom: string;
  nom: string;
  telephone: string;
  
  async ngOnInit(){
    this.prenom = await this.storage.get("prenom");
    this.nom = await this.storage.get("nom");
    this.telephone = await this.storage.get("telephone");



  }
// eslint-disable-next-line @typescript-eslint/naming-convention
LogOut(){
  localStorage.removeItem('token');

  this.router.navigate(['login']);

}

}
