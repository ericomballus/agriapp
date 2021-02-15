import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayActivityListPage } from './display-activity-list.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayActivityListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayActivityListPageRoutingModule {}
