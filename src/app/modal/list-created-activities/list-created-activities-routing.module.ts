import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCreatedActivitiesPage } from './list-created-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ListCreatedActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCreatedActivitiesPageRoutingModule {}
