import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminValideActivitiesPage } from './admin-valide-activities.page';

const routes: Routes = [
  {
    path: '',
    component: AdminValideActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminValideActivitiesPageRoutingModule {}
