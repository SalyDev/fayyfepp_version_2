import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.page.html',
  styleUrls: ['./comptes.page.scss'],
})
export class ComptesPage implements OnInit {

  modalOpened = false;
  selectedMoyen: any;

  compteForm: FormGroup;
  showSuccess = false;

  comptes: any[] = [];

  mobiles = [{"nom":"OM", "number": 1, "logo": "assets/images/Orange-Money.png"}]
  constructor(
    private _formBuilder: FormBuilder

  ) { }

  ngOnInit() {
  }


  addMoyen(moyen) {
    this.modalOpened = true;
    this.selectedMoyen = moyen;
    //if(this.selectedMoyen.type === 'mobile'){
      this.compteForm = this._formBuilder.group({
        numero: ['', Validators.required],
        code: ['', Validators.required],
        moyen: [moyen.id, Validators.required],
      });
      console.log('compteForm', this.compteForm);
   // }
  }

  isCompteAdded(){

  }

}
