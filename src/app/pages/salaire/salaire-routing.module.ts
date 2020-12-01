import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalairePage } from './salaire.page';

const routes: Routes = [
  {
    path: '',
    component: SalairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalairePageRoutingModule {}
