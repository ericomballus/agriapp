import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvanceSalairePage } from './avance-salaire.page';

const routes: Routes = [
  {
    path: '',
    component: AvanceSalairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvanceSalairePageRoutingModule {}
