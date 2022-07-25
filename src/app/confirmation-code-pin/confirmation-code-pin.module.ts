import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationCodePinPageRoutingModule } from './confirmation-code-pin-routing.module';

import { ConfirmationCodePinPage } from './confirmation-code-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationCodePinPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ConfirmationCodePinPage]
})
export class ConfirmationCodePinPageModule {}
