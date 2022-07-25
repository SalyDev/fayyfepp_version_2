import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationCodePinPage } from './confirmation-code-pin.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationCodePinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationCodePinPageRoutingModule {}
