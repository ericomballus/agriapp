import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayMaterielListPage } from './display-materiel-list.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayMaterielListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayMaterielListPageRoutingModule {}
