import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificatifPage } from './justificatif.page';

const routes: Routes = [
  {
    path: '',
    component: JustificatifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificatifPageRoutingModule {}
