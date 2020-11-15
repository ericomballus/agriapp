import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActivieModalPage } from './add-activie-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddActivieModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddActivieModalPageRoutingModule {}
