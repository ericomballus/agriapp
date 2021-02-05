import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTravauxPage } from './add-travaux.page';

const routes: Routes = [
  {
    path: '',
    component: AddTravauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTravauxPageRoutingModule {}
