import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayImagePage } from './display-image.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayImagePageRoutingModule {}
