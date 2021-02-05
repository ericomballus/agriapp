import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCreatedTravauxPage } from './list-created-travaux.page';

const routes: Routes = [
  {
    path: '',
    component: ListCreatedTravauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCreatedTravauxPageRoutingModule {}
