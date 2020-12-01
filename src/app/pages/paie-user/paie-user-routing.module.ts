import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaieUserPage } from './paie-user.page';

const routes: Routes = [
  {
    path: '',
    component: PaieUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaieUserPageRoutingModule {}
