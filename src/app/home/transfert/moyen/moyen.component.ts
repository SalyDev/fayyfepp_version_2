import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';
import { ApiService } from 'src/app/api.service';
import { MOYENS_PAIEMENT } from 'src/app/app.utils';
@Component({
  selector: 'app-transfert-moyen',
  templateUrl: './moyen.component.html',
  styleUrls: ['./moyen.component.scss'],
})
export class MoyenComponent implements OnInit {

  contact: any;

  mobiles: any[] = [...MOYENS_PAIEMENT.mobile];

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private apiService: ApiService
    ) {
      this.unsubscribeAll = new Subject();
    }


  ngOnInit() {
    this.apiService.onContactChanged
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((datas) => {
        this.contact = datas;
    });
  }

  selectMoyen(moyen): void{
    this.apiService.onMoyenChanged.next(moyen);
    this.router.navigateByUrl('/home/transfert/montant');
  }

}
