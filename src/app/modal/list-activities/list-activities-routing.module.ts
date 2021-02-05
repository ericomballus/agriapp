import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActivitiesPage } from './list-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ListActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListActivitiesPageRoutingModule {}
