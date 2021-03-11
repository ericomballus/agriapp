import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayExecutantPage } from './display-executant.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayExecutantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayExecutantPageRoutingModule {}
