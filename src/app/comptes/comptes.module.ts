import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptesPageRoutingModule } from './comptes-routing.module';

import { ComptesPage } from './comptes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComptesPageRoutingModule
  ],
  declarations: [ComptesPage]
})
export class ComptesPageModule {}
