import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectEmployePage } from './select-employe.page';

const routes: Routes = [
  {
    path: '',
    component: SelectEmployePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectEmployePageRoutingModule {}
