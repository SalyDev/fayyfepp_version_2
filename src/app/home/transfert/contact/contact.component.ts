import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, takeUntil } from 'rxjs/internal/operators';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-transfert-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

   modalOpened = false ;


  contactControl: FormControl;

  // liste des contacts
  contactList: any[] = [
    {
      nom: 'Yaya',
      numero: '777402531'
    },
    {
      nom: 'Lamine',
      numero: '772087403'
    },
    {
      nom: 'maman',
      numero: '772184516'
    },
    {
      nom: 'papa',
      numero: '777665305'
    },
    {
      nom: 'Khadija',
      numero: '773242452'
    },
    {
      nom: 'Alioune Badara',
      numero: '762375137'
    }
  ];
  contactListFiltered: any[] = [];

  //historique des contacts envoyés / favoris
  favoris: any[] = [
    {
      nom: 'maman',
      numero: '772184516'
    },
    {
      nom: 'Yaya',
      numero: '777402531'
    },
    {
      nom: 'Alioune Badara',
      numero: '762375137'
    }
  ];

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private apiService: ApiService,
    public atrCtrl: AlertController
    ) {
      this.unsubscribeAll = new Subject();
    }

  ngOnInit() {
    this.contactControl = new FormControl('');
    this.contactControl.valueChanges.pipe(
      startWith(this.contactControl.value),
      takeUntil(this.unsubscribeAll),
      debounceTime(150),
      distinctUntilChanged()
    ).subscribe((value) => {
      console.log('value');
      if (value && value.trim().length > 0) {
        console.log(value);
        this.contactListFiltered = this.contactList.filter((c) => c.nom.indexOf(value) >= 0 || c.numero.indexOf(value) >= 0);
      } else {
        this.contactListFiltered = [];
      }
  });
  }

  selectContact(favori): void{
    this.apiService.onContactChanged.next(favori);
    this.router.navigateByUrl('/home/transfert/moyen');
  }
  async showPromptAlert() {
    const alert = await  this.atrCtrl.create({
      inputs: [
        {
          name: 'nom',
          placeholder: 'Nom Complet'
        },
        {
          name: 'tel',
          placeholder: '781700647',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Valider',
        }
      ]
    });
    await alert.present();

  }


  addContact() {
    this.modalOpened = true;
    // this.selectedMoyen = moyen;
    //if(this.selectedMoyen.type === 'mobile'){
      // this.compteForm = this._formBuilder.group({
      //   numero: ['', Validators.required],
      //   code: ['', Validators.required],
      //   moyen: [moyen.name, Validators.required],
      // });
      // console.log('compteForm', this.compteForm);
   // }
  }
}


