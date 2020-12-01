import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayUserPage } from './display-user.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayUserPageRoutingModule {}
