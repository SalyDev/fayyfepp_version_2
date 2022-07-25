import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodePinPageRoutingModule } from './code-pin-routing.module';

import { CodePinPage } from './code-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodePinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CodePinPage]
})
export class CodePinPageModule {}
