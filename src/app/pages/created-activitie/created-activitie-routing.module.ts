import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatedActivitiePage } from './created-activitie.page';

const routes: Routes = [
  {
    path: '',
    component: CreatedActivitiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatedActivitiePageRoutingModule {}
