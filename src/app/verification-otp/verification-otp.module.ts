import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { VerificationOtpPage } from './verification-otp.page';
import { VerificationOtpPageRoutingModule } from './verification-otp-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificationOtpPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [VerificationOtpPage]
})
export class VerificationOtpPageModule {}
