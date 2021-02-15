import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayOneActivityListPage } from './display-one-activity-list.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayOneActivityListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayOneActivityListPageRoutingModule {}
