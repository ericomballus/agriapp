import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayTravauxListPage } from './display-travaux-list.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayTravauxListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayTravauxListPageRoutingModule {}
