import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjetPage } from './add-projet.page';

const routes: Routes = [
  {
    path: '',
    component: AddProjetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProjetPageRoutingModule {}
