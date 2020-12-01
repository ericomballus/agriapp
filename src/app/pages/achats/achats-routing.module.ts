import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatsPage } from './achats.page';

const routes: Routes = [
  {
    path: '',
    component: AchatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatsPageRoutingModule {}
