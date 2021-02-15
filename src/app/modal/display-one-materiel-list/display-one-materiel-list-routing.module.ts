import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayOneMaterielListPage } from './display-one-materiel-list.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayOneMaterielListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayOneMaterielListPageRoutingModule {}
