import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionNomPage } from './inscription-nom.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionNomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionNomPageRoutingModule {}
