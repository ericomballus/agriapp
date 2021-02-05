import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravauxPage } from './travaux.page';

const routes: Routes = [
  {
    path: '',
    component: TravauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravauxPageRoutingModule {}
