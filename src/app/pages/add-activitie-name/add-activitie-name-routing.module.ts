import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActivitieNamePage } from './add-activitie-name.page';

const routes: Routes = [
  {
    path: '',
    component: AddActivitieNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddActivitieNamePageRoutingModule {}
