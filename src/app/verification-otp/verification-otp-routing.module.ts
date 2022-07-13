import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificationOtpPage } from './verification-otp.page';


const routes: Routes = [
  {
    path: '',
    component: VerificationOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationOtpPageRoutingModule {}
