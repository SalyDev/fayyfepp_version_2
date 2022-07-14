import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransfertPageRoutingModule } from './transfert-routing.module';

import { TransfertPage } from './transfert.page';
import { ContactComponent } from './contact/contact.component';
import { MoyenComponent } from './moyen/moyen.component';
import { MontantComponent } from './montant/montant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransfertPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TransfertPage,ContactComponent,MoyenComponent,MontantComponent]
})
export class TransfertPageModule {}
