import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from './api.service';
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
    private router:  Router

  ) {
  }

  ngOnInit(){


  }
// eslint-disable-next-line @typescript-eslint/naming-convention
LogOut(){
  localStorage.removeItem('token');

  this.router.navigate(['login']);

}

}
