import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateEmployePage } from './update-employe.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEmployePageRoutingModule {}
